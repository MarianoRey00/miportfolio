import { Router } from "express";
import { getSales, getUserSales } from "../controllers/sale.controller.js";
import {
  adminAuthRequired,
  authRequired,
} from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/sales", authRequired, adminAuthRequired, getSales);
router.get("/sales/user/:id", authRequired, adminAuthRequired, getUserSales);

export default router;
