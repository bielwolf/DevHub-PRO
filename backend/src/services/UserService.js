import dataSource from '../db/models';
import Services from './Service';

class UserService extends Services {
    constructor() {
        super('User');
        this.projectServices = new Services('Project');
        this.taskServices = new Services('Task');
    }

    async getUserWithProjectsAndTasks(userId) {
        const user = await this.model.findByPk(userId, {
            include: [
                {
                    model: dataSource.Project,
                    as: 'projects',
                    include: [
                        {
                                model: dataSource.Task,
                            as: 'tasks',
                        },
                    ],
                },
            ],
        });

        return user;
    }
    async assignProjectToUser(userId, projectId) {
        const user = await this.model.findByPk(userId);
        const project = await dataSource.Project.findByPk(projectId);

        if (user && project) {
            await user.addProject(project);
            return true;
        }
        return false;
    }

    async removeProjectFromUser(userId, projectId) {
        const user = await dataSource.User.findByPk(userId);
        const project = await dataSource.Project.findByPk(projectId);

        if (user && project) {
            await user.removeProject(project);
            return true;
        }
        return false;
    }

    async removeUser(userId) {
        const transaction = await dataSource.sequelize.transaction();
        try {
            const user = await dataSource.User.findByPk(userId, {
                include: [
                    {
                        model: dataSource.Project,
                        as: 'projects',
                        include: [
                            {
                                model: dataSource.Task,
                                as: 'tasks',
                                attributes: ['id'],
                            },
                        ],
                    },
                    transaction,
                ],
            });

            if (!user) {
                await transaction.rollback();
                return false;
            }

            const projectIds = user.projects.map(project => project.id);

            if(projectIds.length > 0) {
                await this.taskServices.excluiRegistro({
                    project_id: projectIds},
                    transaction
                );
            }

            await this.projectServices.excluiRegistro({
                user_id: userId},
                transaction
            );

            await this.excluiRegistro({ id: userId }, transaction);

            await transaction.commit();
            return true;
        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    }

    async GetAllUsers() {
        const users = await dataSource.User.findAll();
        return users;
    }

}

export default UserService;