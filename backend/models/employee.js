import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Passport from "./passport.js";
import Branch from "./branch.js";
import Position from "./position.js";

const Employee = sequelize.define(
  "Employee",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    hire_date: { type: DataTypes.DATE, allowNull: false },
    salary: { type: DataTypes.DECIMAL(14, 2) },
    schedule: { type: DataTypes.STRING },
    passport_id: { type: DataTypes.INTEGER, allowNull: false },
    branch_id: { type: DataTypes.INTEGER, allowNull: false },
    position_id: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    tableName: "employees",
    timestamps: false,
  }
);

// Связи
Employee.belongsTo(Passport, { foreignKey: "passport_id" });
Employee.belongsTo(Branch, { foreignKey: "branch_id" });
Employee.belongsTo(Position, { foreignKey: "position_id" });

export default Employee;
