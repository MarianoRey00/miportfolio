import { Router } from "express";
import { authRequired } from "../middlewares/auth.middleware.js";
import {
	getProjects,
	getAdminProjects,
	getPublicProjects,
	createProject,
	getProject,
	deleteProject,
	editProject,
	hideProject,
	showProject,
	deleteGalleryImage,
	deleteProjectVideo,
	deleteProjectPdf,
} from "../controllers/project.controller.js";
import {
	validateCreateProject,
	validateEditProject,
	validateEditImage,
	validateEditGallery,
	validateAddImageToGallery,
	validateEditVideo,
	validateEditPdf,
	validateGetProject,
} from "../middlewares/project.middleware.js";

const router = Router();

router.get("/projects", authRequired, getProjects);

router.get("/projects/:id/admin", authRequired, getAdminProjects);
router.get("/projects/:id/public", getPublicProjects);
router.get("/projects/:id", getProject);
router.get("/projects/:username/:id", validateGetProject, getProject);

router.post("/projects", authRequired, validateCreateProject, createProject);

router.delete(
	"/projects/:id/delete-gallery-image/:imageId",
	authRequired,
	deleteGalleryImage
);
router.delete("/projects/:id/delete-video", authRequired, deleteProjectVideo);
router.delete("/projects/:id/delete-pdf", authRequired, deleteProjectPdf);
router.delete("/projects/:id", authRequired, deleteProject);
router.put(
	"/projects/:id/edit",
	authRequired,
	validateEditProject,
	editProject
);
router.put(
	"/projects/:id/edit-image",
	authRequired,
	validateEditImage,
	editProject
);
router.put(
	"/projects/:id/edit-gallery",
	authRequired,
	validateEditGallery,
	editProject
);
router.put(
	"/projects/:id/add-to-gallery",
	authRequired,
	validateAddImageToGallery,
	editProject
);
router.put(
	"/projects/:id/edit-video",
	authRequired,
	validateEditVideo,
	editProject
);
router.put(
	"/projects/:id/edit-pdf",
	authRequired,
	validateEditPdf,
	editProject
);
router.put("/projects/:id/hide", authRequired, hideProject);
router.put("/projects/:id/show", authRequired, showProject);

export default router;
