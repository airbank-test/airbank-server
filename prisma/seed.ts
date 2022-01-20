import { PrismaClient } from "@prisma/client";
import * as trns from "./../transactions.json";

const prisma = new PrismaClient();

async function main() {
  const transactions = trns;
  const keys = Object.keys(trns);
  const transactionsArray = keys.map((key: any) => {
    try {
      return {
        account: transactions[key][1].toString(),
        description: transactions[key][2].toString(),
        category: transactions[key][3].toString(),
        reference: transactions[key][4].toString(),
        currency: transactions[key][5].toString(),
        amount: transactions[key][6].toString(),
        status: transactions[key][7].toString(),
        transactionDate: transactions[key][8].toString(),
        createdAt: transactions[key][9].toString(),
        updatedAt: transactions[key][10].toString(),
      };
    } catch (error) {}
  });
  await prisma.transaction.createMany({
    data: transactionsArray as any,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
