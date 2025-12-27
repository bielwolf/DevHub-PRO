import { Router } from "express";
import tasksRoutes from './tasks.js';
import ProjectController from '../Controller/ProjectController.js';

const projectController = new ProjectController();

const router = Router();

router.get('/', (req, res) => projectController.pegaTodos(req, res));
router.get('/:projectId', (req, res) => projectController.pegaUmPorId(req, res));
router.post('/', (req, res) => projectController.criaNovo(req, res));
router.put('/:projectId', (req, res) => projectController.atualiza(req, res));
router.delete('/:projectId', (req, res) => projectController.exclui(req, res));

router.use('/:projectId/task', tasksRoutes);

export default router;