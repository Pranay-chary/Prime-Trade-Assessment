import { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useAuthContext } from '../context/AuthContext';
import api from '../services/api';
import { CheckCircle2, Circle, Clock, LayoutDashboard, User } from 'lucide-react';

interface Task {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
}

const STATIC_TASKS: Task[] = [
  {
    _id: 'static-1',
    title: 'Review Project Documentation',
    description: 'Go through the project README and setup guide.',
    completed: true,
  },
  {
    _id: 'static-2',
    title: 'Set up Development Environment',
    description: 'Install Node.js, VS Code, and necessary extensions.',
    completed: false,
  },
  {
    _id: 'static-3',
    title: 'Explore Dashboard Features',
    description: 'Click around the dashboard to see available widgets.',
    completed: false,
  },
];

const DashboardPage = () => {
  const { user } = useAuthContext();
  const [tasks, setTasks] = useState<Task[]>(STATIC_TASKS);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.get('/tasks')
      .then(res => {
        setTasks([...STATIC_TASKS, ...res.data]);
      })
      .catch(err => console.error("Failed to fetch tasks", err))
      .finally(() => setIsLoading(false));
  }, []);

  const completedCount = tasks.filter(t => t.completed).length;
  const pendingCount = tasks.length - completedCount;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Header />

      <main className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
            <LayoutDashboard className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            Dashboard
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Welcome back, {user?.name?.split(' ')[0] || 'User'}! Here's what's happening today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile / Stats Card */}
          <div className="md:col-span-1 space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-16 w-16 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-2xl font-bold">
                  {user?.name?.charAt(0) || 'U'}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">{user?.name}</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{user?.email}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl">
                  <span className="block text-2xl font-bold text-indigo-600 dark:text-indigo-400">{pendingCount}</span>
                  <span className="text-xs font-medium text-indigo-600/70 dark:text-indigo-400/70 uppercase tracking-wider">Pending</span>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl">
                  <span className="block text-2xl font-bold text-green-600 dark:text-green-400">{completedCount}</span>
                  <span className="text-xs font-medium text-green-600/70 dark:text-green-400/70 uppercase tracking-wider">Done</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl shadow-lg p-6 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-lg font-bold mb-2">Pro Tip</h3>
                <p className="text-indigo-100 text-sm">
                  Complete your profile to unlock all features and get personalized recommendations.
                </p>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
            </div>
          </div>

          {/* Tasks List */}
          <div className="md:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-gray-50/50 dark:bg-gray-800/50">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gray-400" />
                  Your Tasks
                </h2>
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-medium px-2.5 py-1 rounded-full">
                  {tasks.length} Total
                </span>
              </div>

              <div className="divide-y divide-gray-100 dark:divide-gray-700">
                {isLoading ? (
                  <div className="p-8 text-center text-gray-500 animate-pulse">Loading tasks...</div>
                ) : tasks.length === 0 ? (
                  <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                    No tasks found. Start by creating one!
                  </div>
                ) : (
                  tasks.map((task) => (
                    <div key={task._id} className="group p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-150 flex items-start gap-4 cursor-pointer">
                      <div className={`mt-1 flex-shrink-0 transition-all duration-200 ${task.completed ? 'text-green-500' : 'text-gray-300 group-hover:text-indigo-500'}`}>
                        {task.completed ? (
                          <CheckCircle2 className="w-6 h-6" />
                        ) : (
                          <Circle className="w-6 h-6" />
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className={`text-base font-semibold truncate transition-colors ${task.completed
                              ? 'text-gray-400 dark:text-gray-500 line-through decoration-2'
                              : 'text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400'
                            }`}>
                            {task.title}
                          </h3>
                          {task.completed && (
                            <span className="flex-shrink-0 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                              Completed
                            </span>
                          )}
                        </div>
                        <p className={`text-sm line-clamp-2 ${task.completed ? 'text-gray-400 dark:text-gray-600' : 'text-gray-500 dark:text-gray-400'}`}>
                          {task.description}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="p-4 bg-gray-50 dark:bg-gray-800/80 border-t border-gray-100 dark:border-gray-700 text-center">
                <button className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 hover:underline">
                  View All Tasks →
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
