import prisma from "./../db";

const Mutation = {
  createTransaction: (parent: any, args: any) => {
    return prisma.transaction.create({
      data: {
        ...args,
      },
    });
  },
};

export default Mutation;
