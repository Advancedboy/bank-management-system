import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Client = sequelize.define(
  "Client",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    phone: { type: DataTypes.STRING },
    reg_date: { type: DataTypes.DATE, allowNull: false },
    client_type: { type: DataTypes.STRING }, // physical / legal
  },
  {
    tableName: "clients",
    timestamps: false,
  }
);

export default Client;
