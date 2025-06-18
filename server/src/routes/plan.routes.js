import { Router } from "express";
import {
  getPlans,
  createPlan,
  deletePlan,
} from "../controllers/plan.controller.js";

const router = Router();

router.get("/plans", getPlans);
router.post("/plans/create", createPlan);
router.delete("/plans/:id", deletePlan);

export default router;
