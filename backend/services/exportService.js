import ExcelJS from "exceljs";
import sequelize from "../config/db.js";

export const exportTableToExcel = async (tableName, filePath) => {
  try {
    const rows = await sequelize.query(`SELECT * FROM "${tableName}"`, {
      type: sequelize.QueryTypes.SELECT,
    });
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet(tableName);

    if (rows.length > 0) {
      sheet.columns = Object.keys(rows[0]).map((key) => ({ header: key, key }));
      sheet.addRows(rows);
    }

    await workbook.xlsx.writeFile(filePath);
    return { message: `Table ${tableName} exported to ${filePath}` };
  } catch (err) {
    throw new Error(err.message);
  }
};
