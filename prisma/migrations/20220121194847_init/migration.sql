-- CreateTable
CREATE TABLE "Transaction" (
    "id" SERIAL NOT NULL,
    "account" VARCHAR(255),
    "description" VARCHAR(255),
    "category" VARCHAR(255),
    "reference" VARCHAR(255),
    "currency" VARCHAR(255),
    "amount" DOUBLE PRECISION,
    "status" VARCHAR(255),
    "transactionDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3),
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);
