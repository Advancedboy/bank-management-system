import sequelize from "../config/db.js";

import Client from "./client.js";
import Passport from "./passport.js";
import Country from "./country.js";
import Address from "./address.js";
import Account from "./account.js";
import Transaction from "./transaction.js";
import Branch from "./branch.js";
import Employee from "./employee.js";
import Position from "./position.js";

// Дополнительные связи

// Client -> Passport (1:1)
Client.hasOne(Passport, { foreignKey: "client_id" });
Passport.belongsTo(Client, { foreignKey: "client_id" });

// Passport -> Address (1:1)
Passport.belongsTo(Address, { foreignKey: "address_id" });

// Employee -> Passport (1:1)
Employee.belongsTo(Passport, { foreignKey: "passport_id" });

// Account -> Transactions (1:N)
Account.hasMany(Transaction, {
  as: "sentTransactions",
  foreignKey: "from_account_id",
});
Account.hasMany(Transaction, {
  as: "receivedTransactions",
  foreignKey: "to_account_id",
});

// Branch -> Employees (1:N)
Branch.hasMany(Employee, { foreignKey: "branch_id" });

// Position -> Employees (1:N)
Position.hasMany(Employee, { foreignKey: "position_id" });

// Country -> Passport (1:N)
Country.hasMany(Passport, { foreignKey: "country_id" });

export const syncDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected!");
    await sequelize.sync({ alter: true });
    console.log("All models synchronized successfully!");
  } catch (err) {
    console.error("Unable to connect to the database:", err);
  }
};

export {
  Client,
  Passport,
  Country,
  Address,
  Account,
  Transaction,
  Branch,
  Employee,
  Position,
};
