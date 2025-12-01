import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

export const createTable = async (tableName, columns) => {
  try {
    await sequelize.getQueryInterface().createTable(tableName, columns);
    return { message: `Table ${tableName} created successfully` };
  } catch (err) {
    throw new Error(err.message);
  }
};

export const dropTable = async (tableName) => {
  try {
    await sequelize.getQueryInterface().dropTable(tableName);
    return { message: `Table ${tableName} dropped successfully` };
  } catch (err) {
    throw new Error(err.message);
  }
};

export const addColumn = async (tableName, columnName, options) => {
  try {
    await sequelize
      .getQueryInterface()
      .addColumn(tableName, columnName, options);
    return { message: `Column ${columnName} added to ${tableName}` };
  } catch (err) {
    throw new Error(err.message);
  }
};

export const removeColumn = async (tableName, columnName) => {
  try {
    await sequelize.getQueryInterface().removeColumn(tableName, columnName);
    return { message: `Column ${columnName} removed from ${tableName}` };
  } catch (err) {
    throw new Error(err.message);
  }
};
