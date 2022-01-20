import prisma from "./../db";
import { Transaction } from "../types";

import { Prisma } from "@prisma/client";

const Mutation = {
  createTransaction: (
    parent,
    args
  ): Prisma.Prisma__TransactionClient<Transaction> => {
    return prisma.transaction.create({
      data: {
        ...args,
      },
    });
  },
};

export default Mutation;
