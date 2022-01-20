-- CreateTable
CREATE TABLE "Transaction" (
    "id" SERIAL NOT NULL,
    "account" VARCHAR(255),
    "description" VARCHAR(255),
    "category" VARCHAR(255),
    "reference" VARCHAR(255),
    "currency" VARCHAR(255),
    "amount" TEXT NOT NULL,
    "status" VARCHAR(255),
    "transactionDate" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,
    "updatedAt" TEXT NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);
