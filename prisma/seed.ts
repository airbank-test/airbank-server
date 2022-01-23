import { PrismaClient, Prisma } from "@prisma/client";
import * as trns from "./../transactions.json";

type CreateManyInput = Omit<Prisma.TransactionCreateManyInput, "id">;
type Trns = Array<Array<string>>;

const prisma = new PrismaClient();

async function main() {
  const transactions = trns as Trns;
  const keys: string[] = Object.keys(trns);
  const transactionsArray: CreateManyInput[] = keys.map((key: string | any) => {
    try {
      return {
        account: transactions[key][1].toString(),
        description: transactions[key][2].toString(),
        category: transactions[key][3].toString(),
        reference: transactions[key][4].toString(),
        currency: transactions[key][5].toString(),
        amount: +transactions[key][6].toString(),
        status: transactions[key][7].toString(),
        transactionDate: new Date(transactions[key][8].toString()),
        createdAt: new Date(transactions[key][9].toString()),
        updatedAt: new Date(transactions[key][10].toString()),
      };
    } catch (error) {}
  }) as CreateManyInput[];
  await prisma.transaction.createMany({
    data: transactionsArray,
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
