import { Address } from "../models/index.js";

// Получить все адреса
export const getAllAddresses = async () => {
  return await Address.findAll();
};

// Получить адрес по ID
export const getAddressById = async (id) => {
  return await Address.findByPk(id);
};

// Создать новый адрес
export const createAddress = async (data) => {
  return await Address.create(data);
};

// Обновить адрес
export const updateAddress = async (id, data) => {
  const address = await Address.findByPk(id);
  if (!address) return null;
  return await address.update(data);
};

// Удалить адрес
export const deleteAddress = async (id) => {
  const address = await Address.findByPk(id);
  if (!address) return null;
  await address.destroy();
  return true;
};
