export type Transaction = {
  id: number;
  account: string | null;
  description: string | null;
  category: string | null;
  reference: string | null;
  currency: string | null;
  amount: number | null;
  status: string | null;
  transactionDate: Date | string | null;
  createdAt?: Date | string | null;
  updatedAt?: Date | string | null;
};
