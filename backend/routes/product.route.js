import express from "express";
import { getProducts, stripe } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/stripe", stripe);

export default router;
