import { Router } from "express";
import {
  getPlans,
  getPlan,
  createPlan,
  deletePlan,
  editPlan,
} from "../controllers/plan.controller.js";
import {
  validateCreatePlan,
  validateEditPlan,
} from "../middlewares/plan.middleware.js";
const router = Router();

router.get("/plans", getPlans);
router.post("/plans/create", validateCreatePlan, createPlan);
router.get("/plans/:id", getPlan);
router.delete("/plans/:id", deletePlan);
router.put("/plans/:id", validateEditPlan, editPlan);

export default router;
