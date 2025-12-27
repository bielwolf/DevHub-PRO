import { Router} from "express";
import projectsRoutes from './projects.js';
import UserController from '../Controller/UserController.js';

const userController = new UserController();

const router = Router();

router.get('/', (req, res) => userController.pegaTodos(req, res));
router.get('/:userId', (req, res) => userController.pegaTodasAsPessoas(req, res));
router.post('/', (req, res) => userController.pegaUmPorId(req, res));
router.put('/:userId', (req, res) => userController.criaNovo(req, res));
router.delete('/:userId', (req, res) => userController.exclui(req, res));

router.use('/:userId/project', projectsRoutes);

export default router;