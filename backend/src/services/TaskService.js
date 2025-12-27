import Services from './Service';

class TaskServices extends Services {
  constructor() {
    super('Task');
  }

  async verifyTaskOwnership(userId, taskId) {
    const task = await dataSource.Task.findByPk(taskId, {
      include: [
        {
          model: dataSource.Project,
          as: 'project',
          include: [
            {
              model: dataSource.User,
              as: 'users',
              where: { id: userId },
            },
          ],
        },
      ],
    });

    return !!task;
  }

  async checkTaskInProject(taskId, projectId) {
    const task = await dataSource.Task.findOne({
      where: {
        id: taskId,
        projectId: projectId,
      },
    });

    return !!task;
  }
}

export default TaskServices;