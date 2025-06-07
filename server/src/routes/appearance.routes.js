import { Router } from "express";
import { authRequired } from "../middlewares/auth.middleware.js";
import {
	getAppearance,
	editAppearance,
	getPublicAppearance,
} from "../controllers/appearance.controller.js";

const router = Router();

router.get("/appearance", authRequired, getAppearance);
router.get("/appearance/:id", getPublicAppearance);
router.put("/appearance/edit", authRequired, editAppearance);

export default router;
