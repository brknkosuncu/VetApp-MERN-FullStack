import express from 'express';


import { getProjects, createProject, updateProject, deleteProject, likeProject, getSingleProject, commentProject} from '../controllers/projects.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getProjects);
router.get('/:id', getSingleProject)
router.post('/', auth, createProject);
router.patch('/:id', auth, updateProject);
router.delete('/:id', auth, deleteProject);
router.patch('/:id/likeProject', auth, likeProject);
router.post('/:id/commentProject', auth, commentProject);

export default router;
