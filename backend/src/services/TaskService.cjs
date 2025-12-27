const dataSource = require('../db/models/index.cjs');
const Services = require('./Service.cjs');

class TaskServices extends Services {
  constructor() {
    super(dataSource.Task);
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

  async isTaskCompleted(taskId, projectId) {
    const task = await dataSource.Task.findOne({
      where: {
        id: taskId,
        projectId: projectId,
      },
    });

    if (!task) {
      return null;
    }
    return task.completed;
  }
}

module.exports = TaskServices;