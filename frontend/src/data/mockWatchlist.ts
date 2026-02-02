export interface WatchlistItem {
  id: string;
  asset: string;
  symbol: string;
  currentPrice: number;
  dayChange: number;
  marketCap: number;
  volume: number;
}

export const mockWatchlist: WatchlistItem[] = [
  {
    id: 'watch_1',
    asset: 'NVIDIA Corporation',
    symbol: 'NVDA',
    currentPrice: 450.50,
    dayChange: 2.5,
    marketCap: 1100000000000,
    volume: 50000000,
  },
  {
    id: 'watch_2',
    asset: 'Microsoft Corporation',
    symbol: 'MSFT',
    currentPrice: 300.00,
    dayChange: -0.8,
    marketCap: 2200000000000,
    volume: 30000000,
  },
  {
    id: 'watch_3',
    asset: 'Bitcoin',
    symbol: 'BTC',
    currentPrice: 35000.00,
    dayChange: 4.2,
    marketCap: 680000000000,
    volume: 45000000000,
  },
  {
    id: 'watch_4',
    asset: 'Dogecoin',
    symbol: 'DOGE',
    currentPrice: 0.07,
    dayChange: -3.1,
    marketCap: 9000000000,
    volume: 500000000,
  },
];
