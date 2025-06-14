import { Router } from "express";
import { getSales } from "../controllers/sale.controller";

const router = Router();

router.get("/sales", getSales);
