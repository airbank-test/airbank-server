import { Transaction } from "../types/types";
import prisma from "../db/db";

type TrnsReturn = {
  data: Transaction[];
  metaData: {
    totalCount: number;
    hasMorePages: boolean;
  };
};

const Query = {
  transactions: async (parent, args): Promise<TrnsReturn> => {
    const { page, pageSize, startMonth, endMonth } = args;
    const whereArgs =
      startMonth && endMonth
        ? {
            where: {
              transactionDate: {
                gte: new Date(startMonth),
                lte: new Date(endMonth),
              },
            },
          }
        : {};

    if (page == undefined || pageSize == undefined) {
      const data = await prisma.transaction.findMany(whereArgs as any);
      return {
        data: formatTransactionDate(data),
        metaData: {
          totalCount: data.length,
          hasMorePages: false,
        },
      };
    } else {
      const data = await prisma.transaction.findMany({
        skip: page * pageSize,
        take: pageSize,
        ...(whereArgs as any),
      });

      const count = await prisma.transaction.count({
        skip: page * pageSize,
        take: pageSize,
        ...(whereArgs as any),
      });
      const pages = Math.ceil(count / pageSize);
      const hasMorePages = page < pages;
      return {
        data: formatTransactionDate(data),
        metaData: {
          totalCount: count,
          hasMorePages,
        },
      };
    }
  },
  transaction: async (parent, args): Promise<Transaction | null> => {
    return await prisma.transaction.findFirst({
      where: {
        id: +args.id,
      },
    });
  },
  transactionsBetweenMonths: async (parent, args): Promise<Transaction[]> => {
    return await prisma.transaction.findMany({
      where: {
        transactionDate: {
          gte: new Date(args.startMonth),
          lte: new Date(args.endMonth),
        },
      },
    });
  },
};

export default Query;

function formatTransactionDate(transactions) {
  return transactions.map((transaction) => ({
    ...transaction,
    updatedAt: new Date(+transaction.updatedAt).toDateString(),
    createdAt: new Date(+transaction.createdAt).toDateString(),
    transactionDate: new Date(+transaction.transactionDate).toDateString(),
  }));
}
