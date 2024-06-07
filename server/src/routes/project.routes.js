import {Router} from 'express'
import { authRequired } from '../middlewares/validateToken.js'
import {getProjects, createProject, getProject, deleteProject, editProject,} from '../controllers/project.controller.js'

const router = Router()

router.get('/projects', authRequired, getProjects)
router.get('/projects/:id', authRequired, getProject)
router.post('/projects', authRequired, createProject)
router.delete('/projects/:id', authRequired, deleteProject)
router.put('/projects/:id/edit', authRequired, editProject)

export default router