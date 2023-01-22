import express from "express";
import RSS from "../controllers/rss.controllers";

const router = express.Router();

router.get("/:type", RSS.CNN);

export default router;
