import React from 'react';
import Card from '../components/ui/Card';
import Chart from '../components/dashboard/Chart';
import { BarChart3, TrendingUp, Users, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const Analytics: React.FC = () => {
  const performanceData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Page Views',
        data: [1200, 1900, 1500, 2100, 1800, 2500, 2200],
        color: '#6366f1',
      },
      {
        label: 'Unique Visitors',
        data: [800, 1200, 900, 1400, 1100, 1600, 1300],
        color: '#f59e0b',
      },
    ],
  };

  const conversionData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Conversion Rate',
        data: [2.4, 3.1, 2.8, 3.5, 3.2, 3.8, 3.4],
        color: '#10b981',
      }
    ],
  };

  const metrics = [
    {
      title: 'Total Sessions',
      value: '24.5K',
      change: '+12.5%',
      isPositive: true,
      icon: Users,
    },
    {
      title: 'Avg. Session Duration',
      value: '4m 32s',
      change: '+8.3%',
      isPositive: true,
      icon: TrendingUp,
    },
    {
      title: 'Bounce Rate',
      value: '32.1%',
      change: '-4.5%',
      isPositive: true,
      icon: BarChart3,
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Analytics Overview</h1>
        <select className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md px-3 py-1 text-sm">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 90 days</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((metric, index) => (
          <Card key={index} className="relative overflow-hidden">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{metric.title}</p>
                <h3 className="text-2xl font-bold mt-1">{metric.value}</h3>
                <div className={`flex items-center mt-2 text-sm ${metric.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                  {metric.isPositive ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
                  <span>{metric.change}</span>
                </div>
              </div>
              <metric.icon className="h-6 w-6 text-gray-400" />
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Chart title="Traffic Overview" data={performanceData} />
        <Chart title="Conversion Rate" data={conversionData} />
      </div>

      <Card title="Top Pages">
        <div className="divide-y dark:divide-gray-700">
          {[
            { path: '/home', views: '12.5K', bounce: '32%' },
            { path: '/products', views: '8.2K', bounce: '28%' },
            { path: '/blog', views: '6.4K', bounce: '35%' },
            { path: '/pricing', views: '4.8K', bounce: '25%' },
          ].map((page, index) => (
            <div key={index} className="py-3 flex justify-between items-center">
              <span className="text-sm font-medium">{page.path}</span>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500">{page.views} views</span>
                <span className="text-sm text-gray-500">{page.bounce} bounce rate</span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Analytics;