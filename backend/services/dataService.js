import { Client, Account, Transaction, Passport } from "../models/index.js";

// CLIENT
export const getClients = async () => Client.findAll();
export const getClientById = async (id) => Client.findByPk(id);
export const createClient = async (data) => Client.create(data);
export const updateClient = async (id, data) => {
  const client = await Client.findByPk(id);
  if (!client) return null;
  return client.update(data);
};
export const deleteClient = async (id) => {
  const client = await Client.findByPk(id);
  if (!client) return null;
  await client.destroy();
  return true;
};

// ACCOUNT
export const getAccounts = async () => Account.findAll();
export const getAccountById = async (id) => Account.findByPk(id);
export const createAccount = async (data) => Account.create(data);
export const updateAccount = async (id, data) => {
  const account = await Account.findByPk(id);
  if (!account) return null;
  return account.update(data);
};
export const deleteAccount = async (id) => {
  const account = await Account.findByPk(id);
  if (!account) return null;
  await account.destroy();
  return true;
};

// TRANSACTION
export const getTransactions = async () => Transaction.findAll();
export const createTransaction = async (data) => Transaction.create(data);

// ===== PASSPORT =====
export const getPassports = async () => Passport.findAll();

export const getPassportById = async (id) => Passport.findByPk(id);

export const createPassport = async (data) => Passport.create(data);

export const updatePassport = async (id, data) => {
  const passport = await Passport.findByPk(id);
  if (!passport) return null;
  return passport.update(data);
};

export const deletePassport = async (id) => {
  const passport = await Passport.findByPk(id);
  if (!passport) return null;
  await passport.destroy();
  return true;
};
