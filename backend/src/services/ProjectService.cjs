const dataSource = require('../db/models/index.cjs');
const Services = require('./Service.cjs');

class ProjectServices extends Services {
  constructor() {
    super(dataSource.Project);
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

module.exports = ProjectServices;