import express from "express";
import * as tableService from "../services/tableService.js";

const router = express.Router();

router.post("/create", async (req, res) => {
  const { tableName, columns } = req.body;
  try {
    res.json(await tableService.createTable(tableName, columns));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete("/drop/:tableName", async (req, res) => {
  try {
    res.json(await tableService.dropTable(req.params.tableName));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/addColumn", async (req, res) => {
  const { tableName, columnName, options } = req.body;
  try {
    res.json(await tableService.addColumn(tableName, columnName, options));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/removeColumn", async (req, res) => {
  const { tableName, columnName } = req.body;
  try {
    res.json(await tableService.removeColumn(tableName, columnName));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
