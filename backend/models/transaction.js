import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Account from "./account.js";
import Client from "./client.js";

const Transaction = sequelize.define(
  "Transaction",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    from_account_id: { type: DataTypes.INTEGER, allowNull: false },
    to_account_id: { type: DataTypes.INTEGER, allowNull: false },
    amount: { type: DataTypes.DECIMAL(14, 2), allowNull: false },
    currency: { type: DataTypes.STRING },
    status: { type: DataTypes.STRING, defaultValue: "processing" },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    client_id: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    tableName: "transactions",
    timestamps: false,
  }
);

// Связи
Transaction.belongsTo(Account, {
  as: "from_account",
  foreignKey: "from_account_id",
});
Transaction.belongsTo(Account, {
  as: "to_account",
  foreignKey: "to_account_id",
});
Transaction.belongsTo(Client, { foreignKey: "client_id" });

export default Transaction;
