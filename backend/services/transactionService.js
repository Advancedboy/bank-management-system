import { Account, Transaction } from "../models/index.js";
import sequelize from "../config/db.js";

export const transferFunds = async ({
  fromAccountId,
  toAccountId,
  amount,
  currency,
  clientId,
}) => {
  return await sequelize.transaction(async (t) => {
    const from = await Account.findByPk(fromAccountId, { transaction: t });
    const to = await Account.findByPk(toAccountId, { transaction: t });

    if (!from || !to) throw new Error("Account not found");
    if (from.balance < amount) throw new Error("Insufficient funds");

    from.balance -= amount;
    to.balance += amount;

    await from.save({ transaction: t });
    await to.save({ transaction: t });

    const transaction = await Transaction.create(
      {
        from_account_id: fromAccountId,
        to_account_id: toAccountId,
        amount,
        currency,
        client_id: clientId,
        status: "completed",
        created_at: new Date(),
      },
      { transaction: t }
    );

    return transaction;
  });
};
