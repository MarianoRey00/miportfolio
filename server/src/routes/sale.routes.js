import { Router } from "express";
import { getSales } from "../controllers/sale.controller.js";

const router = Router();

router.get("/sales", getSales);
