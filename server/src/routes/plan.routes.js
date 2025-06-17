import { Router } from "express";
import { getPlans, createPlan } from "../controllers/plan.controller.js";

const router = Router();

router.get("/plans", getPlans);
router.post("/plans/create", createPlan);

export default router;
