import express from "express";
import {
  createPreference,
  webhook,
} from "../controllers/payment.controller.js";

const router = express.Router();

router.post("/create-preference", createPreference);

router.post("/webhook", webhook);

export default router;
