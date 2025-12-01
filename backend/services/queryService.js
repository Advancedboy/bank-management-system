import sequelize from "../config/db.js";

export const runQuery = async (sql) => {
  try {
    const result = await sequelize.query(sql, {
      type: sequelize.QueryTypes.SELECT,
    });
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};
