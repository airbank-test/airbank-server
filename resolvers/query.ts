import prisma from "./../db";

const Query = {
  transactions: async (parent: any, args: any) => {
    return await prisma.transaction.findMany({});
  },
  transaction: async (parent: any, args: any) => {
    return await prisma.transaction.findFirst({
      where: {
        id: +args.id,
      },
    });
  },
};

export default Query;
