import { Router } from 'express';
import TaskController from '../controllers/TaskController.js';

const taskController = new TaskController();

const router = Router();

router.get('/', (req, res) => taskController.pegaTodos(req, res));
router.get('/:taskId', (req, res) => taskController.pegaUmPorId(req, res));
router.post('/', (req, res) => taskController.criaNovo(req, res));
router.put('/:taskId', (req, res) => taskController.atualiza(req, res));
router.delete('/:taskId', (req, res) => taskController.exclui(req, res));

export default router;