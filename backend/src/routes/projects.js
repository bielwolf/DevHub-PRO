import { Router } from "express";
import tasksRoutes from './tasks.js';

const router = Router();

router.get('/', (req, res) => {
});
router.get('/:projectId', (req, res) => {
});
router.post('/', (req, res) => {
});
router.put('/:projectId', (req, res) => {
});
router.delete('/:projectId', (req, res) => {
});

router.use('/:projectId/task', tasksRoutes);

export default router;