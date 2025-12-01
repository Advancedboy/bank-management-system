import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Country = sequelize.define(
  "Country",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true },
    region: { type: DataTypes.STRING },
    code: { type: DataTypes.STRING },
    language: { type: DataTypes.STRING },
  },
  {
    tableName: "countries",
    timestamps: false,
  }
);

export default Country;
