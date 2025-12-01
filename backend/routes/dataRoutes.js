import express from "express";
import * as dataService from "../services/dataService.js";
import * as transactionService from "../services/transactionService.js";

const router = express.Router();

// ===== CLIENTS =====
router.get("/clients", async (req, res) => {
  try {
    res.json(await dataService.getClients());
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/clients/:id", async (req, res) => {
  try {
    const client = await dataService.getClientById(req.params.id);
    if (!client) return res.status(404).json({ error: "Client not found" });
    res.json(client);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/clients", async (req, res) => {
  try {
    res.status(201).json(await dataService.createClient(req.body));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put("/clients/:id", async (req, res) => {
  try {
    const client = await dataService.updateClient(req.params.id, req.body);
    if (!client) return res.status(404).json({ error: "Client not found" });
    res.json(client);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete("/clients/:id", async (req, res) => {
  try {
    const deleted = await dataService.deleteClient(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Client not found" });
    res.json({ message: "Client deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ===== ACCOUNTS =====
router.get("/accounts", async (req, res) => {
  try {
    res.json(await dataService.getAccounts());
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/accounts/:id", async (req, res) => {
  try {
    const account = await dataService.getAccountById(req.params.id);
    if (!account) return res.status(404).json({ error: "Account not found" });
    res.json(account);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/accounts", async (req, res) => {
  try {
    res.status(201).json(await dataService.createAccount(req.body));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put("/accounts/:id", async (req, res) => {
  try {
    const account = await dataService.updateAccount(req.params.id, req.body);
    if (!account) return res.status(404).json({ error: "Account not found" });
    res.json(account);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete("/accounts/:id", async (req, res) => {
  try {
    const deleted = await dataService.deleteAccount(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Account not found" });
    res.json({ message: "Account deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ===== TRANSACTIONS =====
router.get("/transactions", async (req, res) => {
  try {
    res.json(await dataService.getTransactions());
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/transactions", async (req, res) => {
  try {
    const transaction = await transactionService.transferFunds(req.body);
    res.status(201).json(transaction);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ===== PASSPORTS =====
router.get("/passports", async (req, res) => {
  try {
    const passports = await dataService.getPassports();
    res.json(passports);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/passports/:id", async (req, res) => {
  try {
    const passport = await dataService.getPassportById(req.params.id);
    if (!passport) return res.status(404).json({ error: "Passport not found" });
    res.json(passport);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/passports", async (req, res) => {
  try {
    const passport = await dataService.createPassport(req.body);
    res.status(201).json(passport);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put("/passports/:id", async (req, res) => {
  try {
    const passport = await dataService.updatePassport(req.params.id, req.body);
    if (!passport) return res.status(404).json({ error: "Passport not found" });
    res.json(passport);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete("/passports/:id", async (req, res) => {
  try {
    const deleted = await dataService.deletePassport(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Passport not found" });
    res.json({ message: "Passport deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
