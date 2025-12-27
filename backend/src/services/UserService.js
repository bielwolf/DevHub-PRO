import dataSource from '../db/models';
import Services from './Service';

class UserService extends Services {
    constructor() {
        super('User');
        this.projectServices = new Services('Project');
        this.taskServices = new Services('Task');
    }

    

}

export default UserService;