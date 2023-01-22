import express from "express";
import RSS from "../controllers/rss.controllers";

const router = express.Router();

router.get("/custom-url", RSS.CustomURL);
router.get("/:type", RSS.Limited);

export default router;
