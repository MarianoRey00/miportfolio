import express from "express";
import { createPreference } from "../controllers/payment.controller.js";

const router = express.Router();

// Ruta para crear suscripciones
router.post("/create-preference", createPreference);

// Ruta para el webhook
// router.post("/webhook", handleWebhook);

export default router;
