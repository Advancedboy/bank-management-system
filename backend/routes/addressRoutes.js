import express from "express";
import * as addressService from "../services/addressService.js";

const router = express.Router();

// GET все адреса
router.get("/", async (req, res) => {
  try {
    const addresses = await addressService.getAllAddresses();
    res.json(addresses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET адрес по ID
router.get("/:id", async (req, res) => {
  try {
    const address = await addressService.getAddressById(req.params.id);
    if (!address) return res.status(404).json({ error: "Address not found" });
    res.json(address);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST создать новый адрес
router.post("/", async (req, res) => {
  try {
    const address = await addressService.createAddress(req.body);
    res.status(201).json(address);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT обновить адрес
router.put("/:id", async (req, res) => {
  try {
    const address = await addressService.updateAddress(req.params.id, req.body);
    if (!address) return res.status(404).json({ error: "Address not found" });
    res.json(address);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE удалить адрес
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await addressService.deleteAddress(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Address not found" });
    res.json({ message: "Address deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
