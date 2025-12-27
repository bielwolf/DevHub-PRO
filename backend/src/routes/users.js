import { Router} from "express";
import projectsRoutes from './projects.js';

const router = Router();

router.get('/', (req, res) => {
});
router.get('/:userId', (req, res) => {
});
router.post('/', (req, res) => {
});
router.put('/:userId', (req, res) => {
});
router.delete('/:userId', (req, res) => {
});

router.use('/:userId/project', projectsRoutes);

export default router;