import express from "express";
import * as countryService from "../services/countryService.js";

const router = express.Router();

// GET all countries
router.get("/", async (req, res) => {
  try {
    const countries = await countryService.getAllCountries();
    res.json(countries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET country by ID
router.get("/:id", async (req, res) => {
  try {
    const country = await countryService.getCountryById(req.params.id);
    if (!country) return res.status(404).json({ error: "Country not found" });
    res.json(country);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST create new country
router.post("/", async (req, res) => {
  try {
    const country = await countryService.createCountry(req.body);
    res.status(201).json(country);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT update country
router.put("/:id", async (req, res) => {
  try {
    const country = await countryService.updateCountry(req.params.id, req.body);
    if (!country) return res.status(404).json({ error: "Country not found" });
    res.json(country);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE country
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await countryService.deleteCountry(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Country not found" });
    res.json({ message: "Country deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
