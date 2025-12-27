import Controller from './Controller.js';
import UserService from '../services/UserService.cjs';

const userService = new UserService();

class UserController extends Controller {
  constructor() {
    super(userService);
  }

  async getAllUserData(req, res) {
    const { userId } = req.params;
    try {
      const userData = await this.entidadeService.getUserWithProjectsAndTasks(Number(userId));
      return res.status(200).json(userData);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }

  async getAllUsers(req, res) {
    try {
      const allUsers = await this.entidadeService.getAllUsers();
      return res.status(200).json(allUsers);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }

  async removeUser(req, res) {
    const { userId } = req.params;
    try {
      const wasRemoved = await this.entidadeService.removeUser(Number(userId));
      if (!wasRemoved) {
        return res.status(400).json({ mensagem: 'Usuário não foi removido' });
      }
      return res.status(200).json({ mensagem: 'Usuário removido com sucesso' });
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }
}

export default UserController;