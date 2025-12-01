import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Client from "./client.js";

const Account = sequelize.define(
  "Account",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    account_number: { type: DataTypes.STRING, unique: true, allowNull: false },
    balance: { type: DataTypes.DECIMAL(14, 2), defaultValue: 0 },
    currency: { type: DataTypes.STRING },
    opened_at: { type: DataTypes.DATE, allowNull: false },
  },
  {
    tableName: "accounts",
    timestamps: false,
  }
);

// Client -> Accounts (one-to-many)
Client.hasMany(Account, { foreignKey: "client_id" });
Account.belongsTo(Client, { foreignKey: "client_id" });

export default Account;
