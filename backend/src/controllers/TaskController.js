import Controller from './Controller.js';
import TaskServices from '../services/TaskService.cjs';

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
            const completed = await this.entidadeService.isTaskCompleted(Number(taskId), Number(projectId));
            if (completed === null) {
                return res.status(404).json({ mensagem: 'Tarefa não encontrada no projeto especificado' });
            }

            return res.status(200).json({ completed });
        } catch (erro) {
            return res.status(500).json({ erro: erro.message });
        }
    }
}

export default TaskController;