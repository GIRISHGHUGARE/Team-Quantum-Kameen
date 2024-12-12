import express from "express";
import { getProducts, Sstripe } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/stripe", Sstripe);

export default router;
