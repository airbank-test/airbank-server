export type Transaction = {
  id: number;
  account: string | null;
  description: string | null;
  category: string | null;
  reference: string | null;
  currency: string | null;
  amount: string;
  status: string | null;
  transactionDate: string;
  createdAt: string;
  updatedAt: string;
};
