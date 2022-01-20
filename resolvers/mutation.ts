import prisma from "./../db";

const Mutation = {
  createTransaction: (parent, args) => {
    return prisma.transaction.create({
      data: {
        ...args,
      },
    });
  },
};

export default Mutation;
