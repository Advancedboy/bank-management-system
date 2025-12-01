import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Position = sequelize.define(
  "Position",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, unique: true },
    description: { type: DataTypes.TEXT },
    min_experience: { type: DataTypes.INTEGER },
    max_salary: { type: DataTypes.DECIMAL(14, 2) },
  },
  {
    tableName: "positions",
    timestamps: false,
  }
);

export default Position;
