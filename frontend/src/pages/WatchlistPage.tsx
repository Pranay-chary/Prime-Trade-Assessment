import Header from '../components/Header';
import { Bookmark, Star, ArrowUpRight, ArrowDownRight, MoreHorizontal } from 'lucide-react';

const MOCK_WATCHLIST = [
  { id: 1, symbol: 'AMZN', name: 'Amazon.com, Inc.', price: 178.22, change: 1.25, changePercent: 0.70 },
  { id: 2, symbol: 'GOOGL', name: 'Alphabet Inc.', price: 142.38, change: -0.85, changePercent: -0.60 },
  { id: 3, symbol: 'META', name: 'Meta Platforms, Inc.', price: 485.50, change: 12.30, changePercent: 2.60 },
  { id: 4, symbol: 'AMD', name: 'Advanced Micro Devices', price: 180.12, change: 5.40, changePercent: 3.10 },
  { id: 5, symbol: 'COIN', name: 'Coinbase Global, Inc.', price: 230.15, change: -15.20, changePercent: -6.20 },
];

const WatchlistPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Page Title */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <Bookmark className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Watchlist</h1>
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition flex items-center gap-2">
            <Star className="w-4 h-4" />
            Add Symbol
          </button>
        </div>

        {/* Watchlist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_WATCHLIST.map((item) => (
            <div key={item.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 hover:shadow-md transition duration-200 group">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-gray-100 dark:bg-gray-700 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/20 transition-colors flex items-center justify-center font-bold text-lg text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                    {item.symbol[0]}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white">{item.symbol}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 truncate max-w-[150px]">{item.name}</p>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-end justify-between">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  ${item.price.toFixed(2)}
                </div>
                <div className={`flex flex-col items-end ${item.changePercent >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                  <span className="flex items-center font-bold text-sm">
                    {item.changePercent >= 0 ? <ArrowUpRight className="w-4 h-4 mr-1" /> : <ArrowDownRight className="w-4 h-4 mr-1" />}
                    {Math.abs(item.changePercent).toFixed(2)}%
                  </span>
                  <span className="text-xs font-medium opacity-80">
                    {item.change >= 0 ? '+' : ''}{item.change.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {MOCK_WATCHLIST.length === 0 && (
          <div className="text-center py-20">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <Star className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Your watchlist is empty</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-2">Start adding stocks to track their performance.</p>
          </div>
        )}

      </main>
    </div>
  );
};

export default WatchlistPage;
