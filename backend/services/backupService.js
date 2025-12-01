import sequelize from "../config/db.js";
import fs from "fs";
import path from "path";

export const backupTable = async (tableName, filePath) => {
  try {
    const rows = await sequelize.query(`SELECT * FROM "${tableName}"`, {
      type: sequelize.QueryTypes.SELECT,
    });
    fs.writeFileSync(filePath, JSON.stringify(rows, null, 2));
    return { message: `Table ${tableName} backed up to ${filePath}` };
  } catch (err) {
    throw new Error(err.message);
  }
};

export const backupDatabase = async (filePath) => {
  try {
    const tables = await sequelize.getQueryInterface().showAllTables();
    const dbData = {};
    for (const table of tables) {
      dbData[table] = await sequelize.query(`SELECT * FROM "${table}"`, {
        type: sequelize.QueryTypes.SELECT,
      });
    }
    fs.writeFileSync(filePath, JSON.stringify(dbData, null, 2));
    return { message: `Database backed up to ${filePath}` };
  } catch (err) {
    throw new Error(err.message);
  }
};
