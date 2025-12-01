import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Address = sequelize.define(
  "Address",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    city: { type: DataTypes.STRING },
    street: { type: DataTypes.STRING },
    house_number: { type: DataTypes.STRING },
    postal_code: { type: DataTypes.STRING },
  },
  {
    tableName: "addresses",
    timestamps: false,
  }
);

export default Address;
