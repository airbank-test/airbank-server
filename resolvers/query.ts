import { Transaction } from "../types";
import prisma from "./../db";

const Query = {
  transactions: async (parent, args): Promise<Transaction[]> => {
    return await prisma.transaction.findMany({});
  },
  transaction: async (parent, args): Promise<Transaction | null> => {
    return await prisma.transaction.findFirst({
      where: {
        id: +args.id,
      },
    });
  },
};

export default Query;
