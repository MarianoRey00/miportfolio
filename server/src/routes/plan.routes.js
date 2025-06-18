import { Router } from "express";
import {
  getPlans,
  createPlan,
  deletePlan,
  editPlan,
} from "../controllers/plan.controller.js";

const router = Router();

router.get("/plans", getPlans);
router.post("/plans/create", createPlan);
router.delete("/plans/:id", deletePlan);
router.put("/plans/:id", editPlan);

export default router;
