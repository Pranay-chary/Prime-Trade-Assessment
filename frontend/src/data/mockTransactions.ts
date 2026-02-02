export interface Transaction {
  id: string;
  type: 'Buy' | 'Sell' | 'Deposit' | 'Withdrawal';
  asset: string;
  amount: number;
  price: number;
  date: string;
  status: 'Completed' | 'Pending' | 'Failed';
}

export const mockTransactions: Transaction[] = [
  { id: 'txn_1', type: 'Buy', asset: 'AAPL', amount: 10, price: 150.25, date: '2023-07-28T10:30:00Z', status: 'Completed' },
  { id: 'txn_2', type: 'Sell', asset: 'GOOGL', amount: 5, price: 2800.50, date: '2023-07-27T15:45:00Z', status: 'Completed' },
  { id: 'txn_3', type: 'Deposit', asset: 'USD', amount: 5000, price: 1.00, date: '2023-07-25T09:00:00Z', status: 'Completed' },
  { id: 'txn_4', type: 'Buy', asset: 'TSLA', amount: 8, price: 750.00, date: '2023-07-24T12:00:00Z', status: 'Pending' },
  { id: 'txn_5', type: 'Withdrawal', asset: 'USD', amount: 500, price: 1.00, date: '2023-07-22T18:20:00Z', status: 'Completed' },
  { id: 'txn_6', type: 'Buy', asset: 'ETH', amount: 2, price: 2200.75, date: '2023-07-21T11:55:00Z', status: 'Completed' },
  { id: 'txn_7', type: 'Sell', asset: 'BTC', amount: 0.1, price: 35000.00, date: '2023-07-20T20:10:00Z', status: 'Failed' },
  { id: 'txn_8', type: 'Deposit', asset: 'EUR', amount: 2000, price: 1.12, date: '2023-07-19T14:00:00Z', status: 'Completed' },
  { id: 'txn_9', type: 'Buy', asset: 'AMZN', amount: 3, price: 3400.00, date: '2023-07-18T10:00:00Z', status: 'Completed' },
  { id: 'txn_10', type: 'Withdrawal', asset: 'USD', amount: 1000, price: 1.00, date: '2023-07-17T16:30:00Z', status: 'Completed' },
  { id: 'txn_11', type: 'Sell', asset: 'MSFT', amount: 12, price: 300.00, date: '2023-07-15T09:45:00Z', status: 'Pending' },
  { id: 'txn_12', type: 'Buy', asset: 'NVDA', amount: 7, price: 450.50, date: '2023-07-14T13:20:00Z', status: 'Completed' },
  { id: 'txn_13', type: 'Deposit', asset: 'USD', amount: 10000, price: 1.00, date: '2023-07-12T08:00:00Z', status: 'Completed' },
  { id: 'txn_14', type: 'Sell', asset: 'AAPL', amount: 5, price: 152.00, date: '2023-07-11T17:00:00Z', status: 'Completed' },
  { id: 'txn_15', type: 'Buy', asset: 'DOGE', amount: 10000, price: 0.07, date: '2023-07-10T22:00:00Z', status: 'Failed' },
];
