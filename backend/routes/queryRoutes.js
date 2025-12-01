import express from "express";
import * as queryService from "../services/queryService.js";

const router = express.Router();

router.post("/run", async (req, res) => {
  const { sql } = req.body;
  try {
    res.json(await queryService.runQuery(sql));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
