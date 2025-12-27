import Services from './Service';

class ProjectServices extends Services {
  constructor() {
    super('Project');
  }

  async getProjectsByUser(userId) {
    const user = await dataSource.User.findByPk(userId, {
      include: [
        {
          model: dataSource.Project,
          as: 'projects',
        },
      ],
    });

    if (user) {
      return user.projects;
    }
    return null;
  }
}

export default ProjectServices;