import express from "express";
import * as exportService from "../services/exportService.js";

const router = express.Router();

router.post("/table", async (req, res) => {
  const { tableName, filePath } = req.body;
  try {
    res.json(await exportService.exportTableToExcel(tableName, filePath));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
