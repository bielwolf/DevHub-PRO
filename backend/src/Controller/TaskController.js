import Controller from './Controller.js';
import TaskServices from '../services/TaskService.js';

const taskServices = new TaskServices();

class TaskController extends Controller {
  constructor() {
    super(taskServices);
  }

    async verifyTaskOwnership(req, res) {
        const { userId, taskId } = req.params;
        try {
            const isOwner = await this.entidadeService.verifyTaskOwnership(Number(userId), Number(taskId));
            return res.status(200).json({ isOwner });
        } catch (erro) {
            return res.status(500).json({ erro: erro.message });
        }
    }

    async checkTaskInProject(req, res) {
        const { taskId, projectId } = req.params;
        try {
            const exists = await this.entidadeService.checkTaskInProject(Number(taskId), Number(projectId));
            return res.status(200).json({ exists });
        } catch (erro) {
            return res.status(500).json({ erro: erro.message });
        }
    }
}

export default TaskController;