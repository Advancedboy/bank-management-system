import { Country } from "../models/index.js";

export const getAllCountries = async () => {
  return await Country.findAll();
};

export const getCountryById = async (id) => {
  return await Country.findByPk(id);
};

export const createCountry = async (data) => {
  return await Country.create(data);
};

export const updateCountry = async (id, data) => {
  const country = await Country.findByPk(id);
  if (!country) return null;
  return await country.update(data);
};

export const deleteCountry = async (id) => {
  const country = await Country.findByPk(id);
  if (!country) return null;
  await country.destroy();
  return true;
};
