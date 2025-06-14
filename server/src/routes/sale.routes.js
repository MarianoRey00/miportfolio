import { Router } from "express";
import { getSales } from "../controllers/sale.controller.js";
import {
  adminAuthRequired,
  authRequired,
} from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/sales", authRequired, adminAuthRequired, getSales);

export default router;
