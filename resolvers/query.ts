import prisma from "./../db";

const Query = {
  transactions: async (parent, args) => {
    return await prisma.transaction.findMany({});
  },
  transaction: async (parent, args) => {
    return await prisma.transaction.findFirst({
      where: {
        id: +args.id,
      },
    });
  },
};

export default Query;
