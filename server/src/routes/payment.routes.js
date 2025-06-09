import express from "express";
import {
  createPreference,
  webhook,
} from "../controllers/payment.controller.js";

const router = express.Router();

// Ruta para crear suscripciones
router.post("/create-preference", createPreference);

// Ruta para el webhook
router.post("/webhook", webhook);

export default router;
