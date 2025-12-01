export const changeColumn = async (tableName, columnName, newOptions) => {
  try {
    await sequelize
      .getQueryInterface()
      .changeColumn(tableName, columnName, newOptions);
    return { message: `Column ${columnName} in ${tableName} changed` };
  } catch (err) {
    throw new Error(err.message);
  }
};
