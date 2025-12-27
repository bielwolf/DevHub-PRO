import Controller from './Controller.js';
import ProjectService from '../services/ProjectService.cjs';

const projectService = new ProjectService();

class ProjectController extends Controller {
  constructor() {
    super(projectService);
  }

  async getAllProjectsByUser(req, res) {
    const { userId } = req.params;
    try {
      const projects = await this.entidadeService.getProjectsByUser(Number(userId));
      return res.status(200).json(projects);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }
}

export default ProjectController;