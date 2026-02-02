import Header from '../components/Header';
import { ArrowUpRight, ArrowDownRight, PieChart, TrendingUp, Wallet } from 'lucide-react';

const MOCK_HOLDINGS = [
  { symbol: 'AAPL', name: 'Apple Inc.', qty: 10, avgPrice: 150.00, currentPrice: 175.50, change: 17.00 },
  { symbol: 'TSLA', name: 'Tesla Inc.', qty: 5, avgPrice: 220.00, currentPrice: 198.20, change: -9.91 },
  { symbol: 'NVDA', name: 'NVIDIA Corp.', qty: 2, avgPrice: 400.00, currentPrice: 850.00, change: 112.50 },
  { symbol: 'MSFT', name: 'Microsoft Corp.', qty: 8, avgPrice: 310.00, currentPrice: 420.00, change: 35.48 },
];

const PortfolioPage = () => {
  const totalValue = MOCK_HOLDINGS.reduce((acc, curr) => acc + (curr.qty * curr.currentPrice), 0);
  const totalCost = MOCK_HOLDINGS.reduce((acc, curr) => acc + (curr.qty * curr.avgPrice), 0);
  const totalReturn = totalValue - totalCost;
  const totalReturnPercent = (totalReturn / totalCost) * 100;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Page Title */}
        <div className="flex items-center gap-3 mb-8">
          <PieChart className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Portfolio</h1>
        </div>

        {/* Portfolio Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-500 dark:text-gray-400 font-medium">Total Value</h3>
              <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                <Wallet className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">${totalValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Updated just now</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-500 dark:text-gray-400 font-medium">Total Return</h3>
              <div className={`p-2 rounded-lg ${totalReturn >= 0 ? 'bg-indigo-100 dark:bg-indigo-900/30' : 'bg-red-100 dark:bg-red-900/30'}`}>
                <TrendingUp className={`w-5 h-5 ${totalReturn >= 0 ? 'text-indigo-600 dark:text-indigo-400' : 'text-red-600 dark:text-red-400'}`} />
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <p className={`text-3xl font-bold ${totalReturn >= 0 ? 'text-indigo-600 dark:text-indigo-400' : 'text-red-600 dark:text-red-400'}`}>
                {totalReturn >= 0 ? '+' : ''}${Math.abs(totalReturn).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            </div>
            <div className={`flex items-center mt-1 text-sm ${totalReturnPercent >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
              {totalReturnPercent >= 0 ? <ArrowUpRight className="w-4 h-4 mr-1" /> : <ArrowDownRight className="w-4 h-4 mr-1" />}
              <span className="font-medium">{Math.abs(totalReturnPercent).toFixed(2)}%</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-2xl shadow-lg p-6 text-white relative overflow-hidden flex flex-col justify-between">
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-2">Portfolio Info</h3>
              <p className="text-indigo-100 text-sm mb-4">
                You have {MOCK_HOLDINGS.length} active positions.
                Diversification Score: <span className="font-bold text-white">Top 10%</span>
              </p>
              <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg text-sm font-bold shadow hover:bg-gray-50 transition">
                Add Funds
              </button>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
          </div>
        </div>

        {/* Holdings Table */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
          <div className="p-6 border-b border-gray-100 dark:border-gray-700">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Current Holdings</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-900/50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Symbol</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Qty</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Avg Price</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Current</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Value</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Return</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {MOCK_HOLDINGS.map((stock) => {
                  const marketValue = stock.qty * stock.currentPrice;
                  const gainLoss = (stock.currentPrice - stock.avgPrice) * stock.qty;
                  const gainLossPercent = stock.change; // using the mock change as percent for simplicity or calc it

                  return (
                    <tr key={stock.symbol} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center font-bold text-gray-600 dark:text-gray-300">
                            {stock.symbol[0]}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-bold text-gray-900 dark:text-white">{stock.symbol}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">{stock.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-900 dark:text-gray-300">
                        {stock.qty}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-900 dark:text-gray-300">
                        ${stock.avgPrice.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                        <span className="font-medium text-gray-900 dark:text-white">${stock.currentPrice.toFixed(2)}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-bold text-gray-900 dark:text-white">
                        ${marketValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${gainLoss >= 0 ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'}`}>
                          {gainLoss >= 0 ? '+' : ''}{gainLoss.toLocaleString(undefined, { minimumFractionDigits: 2 })} ({gainLossPercent > 0 ? '+' : ''}{gainLossPercent.toFixed(2)}%)
                        </span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PortfolioPage;
