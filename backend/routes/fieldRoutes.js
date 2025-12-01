import express from "express";
import * as fieldService from "../services/fieldService.js";

const router = express.Router();

router.post("/changeColumn", async (req, res) => {
  const { tableName, columnName, newOptions } = req.body;
  try {
    res.json(
      await fieldService.changeColumn(tableName, columnName, newOptions)
    );
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
