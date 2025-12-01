import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Country from "./country.js";

const Passport = sequelize.define(
  "Passport",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    number: { type: DataTypes.STRING, unique: true },
    first_name: { type: DataTypes.STRING },
    last_name: { type: DataTypes.STRING },
    middle_name: { type: DataTypes.STRING },
    country_id: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    tableName: "passports",
    timestamps: false,
  }
);

// Passport -> Country (many to one)
Passport.belongsTo(Country, { foreignKey: "country_id" });

export default Passport;
