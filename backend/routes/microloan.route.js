import express from "express";
import { getMicroloan } from "../controllers/microloan.controller.js";

const router = express.Router();

router.get("/", getMicroloan);

export default router;
