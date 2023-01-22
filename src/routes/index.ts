import express from "express";
import RSS from "./rss.routes";

const router = express.Router();

router.use("/rss", RSS);

export default router;
