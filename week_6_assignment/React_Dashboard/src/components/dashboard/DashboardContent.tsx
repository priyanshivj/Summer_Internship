import React from 'react';
import StatsCard from './StatsCard';
import Chart from './Chart';
import RecentActivity from './RecentActivity';
import { Users, DollarSign, ShoppingCart, AreaChart } from 'lucide-react';

const DashboardContent: React.FC = () => {
  const stats = [
    {
      title: 'Total Users',
      value: '24,521',
      change: { value: '12%', isPositive: true },
      icon: Users,
      iconColor: 'text-indigo-500',
    },
    {
      title: 'Revenue',
      value: '$45,290',
      change: { value: '8.2%', isPositive: true },
      icon: DollarSign,
      iconColor: 'text-green-500',
    },
    {
      title: 'Orders',
      value: '784',
      change: { value: '4.3%', isPositive: false },
      icon: ShoppingCart,
      iconColor: 'text-amber-500',
    },
    {
      title: 'Conversion Rate',
      value: '3.42%',
      change: { value: '2.1%', isPositive: true },
      icon: AreaChart,
      iconColor: 'text-teal-500',
    },
  ];
  
  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Revenue',
        data: [30, 40, 35, 50, 49, 60, 70],
        color: '#6366f1',
      },
      {
        label: 'Expenses',
        data: [15, 20, 25, 30, 25, 30, 35],
        color: '#f59e0b',
      },
    ],
  };
  
  const usersData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'New Users',
        data: [300, 400, 350, 500, 490, 600, 700],
        color: '#10b981',
      },
      {
        label: 'Active Users',
        data: [500, 550, 600, 580, 650, 700, 750],
        color: '#3b82f6',
      },
    ],
  };
  
  const activities = [
    {
      id: '1',
      user: { name: 'Arjun Patel', avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg' },
      action: 'created a new product',
      target: 'Premium Package',
      time: '2 minutes ago',
      status: 'completed',
    },
    {
      id: '2',
      user: { name: 'Priya Sharma', avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg' },
      action: 'updated order status for',
      target: 'Order #1234',
      time: '15 minutes ago',
      status: 'pending',
    },
    {
      id: '3',
      user: { name: 'Rahul Verma', avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg' },
      action: 'sent invoice to',
      target: 'Customer #4321',
      time: '1 hour ago',
      status: 'completed',
    },
    {
      id: '4',
      user: { name: 'Neha Gupta', avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg' },
      action: 'processed refund for',
      target: 'Order #9876',
      time: '3 hours ago',
      status: 'failed',
    },
    {
      id: '5',
      user: { name: 'Aditya Kumar', avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg' },
      action: 'updated product description for',
      target: 'Basic Plan',
      time: '5 hours ago',
      status: 'completed',
    },
  ];
  
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            icon={stat.icon}
            iconColor={stat.iconColor}
          />
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Chart title="Revenue Overview" data={revenueData} />
        <Chart title="User Activity" data={usersData} />
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        <RecentActivity activities={activities} />
      </div>
    </div>
  );
};

export default DashboardContent;