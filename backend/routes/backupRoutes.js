import express from "express";
import * as backupService from "../services/backupService.js";

const router = express.Router();

router.post("/table", async (req, res) => {
  const { tableName, filePath } = req.body;
  try {
    res.json(await backupService.backupTable(tableName, filePath));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/database", async (req, res) => {
  const { filePath } = req.body;
  try {
    res.json(await backupService.backupDatabase(filePath));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
