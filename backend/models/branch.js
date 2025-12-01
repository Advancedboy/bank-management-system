import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Branch = sequelize.define(
  "Branch",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true },
    phone: { type: DataTypes.STRING },
    work_hours: { type: DataTypes.STRING },
    manager: { type: DataTypes.STRING },
  },
  {
    tableName: "branches",
    timestamps: false,
  }
);

export default Branch;
