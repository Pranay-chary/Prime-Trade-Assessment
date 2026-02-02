export interface PortfolioAsset {
  id: string;
  asset: string;
  symbol: string;
  quantity: number;
  avgPrice: number;
  currentPrice: number;
  marketValue: number;
  dayChange: number;
  totalPandL: number;
}

export const mockPortfolio: PortfolioAsset[] = [
  {
    id: 'asset_1',
    asset: 'Apple Inc.',
    symbol: 'AAPL',
    quantity: 50,
    avgPrice: 145.50,
    currentPrice: 150.25,
    marketValue: 7512.50,
    dayChange: 1.2,
    totalPandL: 237.50,
  },
  {
    id: 'asset_2',
    asset: 'Alphabet Inc.',
    symbol: 'GOOGL',
    quantity: 10,
    avgPrice: 2750.00,
    currentPrice: 2800.50,
    marketValue: 28005.00,
    dayChange: -0.5,
    totalPandL: 505.00,
  },
  {
    id: 'asset_3',
    asset: 'Tesla, Inc.',
    symbol: 'TSLA',
    quantity: 20,
    avgPrice: 700.00,
    currentPrice: 750.00,
    marketValue: 15000.00,
    dayChange: 3.5,
    totalPandL: 1000.00,
  },
  {
    id: 'asset_4',
    asset: 'Ethereum',
    symbol: 'ETH',
    quantity: 5,
    avgPrice: 2000.00,
    currentPrice: 2200.75,
    marketValue: 11003.75,
    dayChange: 5.1,
    totalPandL: 1003.75,
  },
  {
    id: 'asset_5',
    asset: 'Amazon.com, Inc.',
    symbol: 'AMZN',
    quantity: 15,
    avgPrice: 3300.00,
    currentPrice: 3400.00,
    marketValue: 51000.00,
    dayChange: -1.8,
    totalPandL: 1500.00,
  },
];
