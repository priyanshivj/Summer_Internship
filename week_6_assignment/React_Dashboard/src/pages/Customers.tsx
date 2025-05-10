import React from 'react';
import Card from '../components/ui/Card';
import Avatar from '../components/ui/Avatar';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { Search, Filter, Download } from 'lucide-react';

const Customers: React.FC = () => {
  const customers = [
    {
      id: 1,
      name: 'Ananya Sharma',
      email: 'ananya.sharma@example.com',
      status: 'active',
      orders: 24,
      spent: '₹2,89,000',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      email: 'rajesh.kumar@example.com',
      status: 'inactive',
      orders: 12,
      spent: '₹1,45,000',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    },
    {
      id: 3,
      name: 'Meera Patel',
      email: 'meera.patel@example.com',
      status: 'active',
      orders: 36,
      spent: '₹4,20,000',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    },
    {
      id: 4,
      name: 'Vikram Singh',
      email: 'vikram.singh@example.com',
      status: 'active',
      orders: 18,
      spent: '₹2,10,000',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Customers</h1>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button variant="primary" size="sm">Add Customer</Button>
        </div>
      </div>

      <Card>
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search customers..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
          <select className="border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 px-3 py-2">
            <option>All Customers</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 px-4">Customer</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Orders</th>
                <th className="text-left py-3 px-4">Total Spent</th>
                <th className="text-right py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id} className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-3">
                      <Avatar src={customer.avatar} alt={customer.name} size="sm" />
                      <div>
                        <div className="font-medium">{customer.name}</div>
                        <div className="text-sm text-gray-500">{customer.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <Badge variant={customer.status === 'active' ? 'success' : 'error'}>
                      {customer.status}
                    </Badge>
                  </td>
                  <td className="py-3 px-4">{customer.orders}</td>
                  <td className="py-3 px-4">{customer.spent}</td>
                  <td className="py-3 px-4 text-right">
                    <Button variant="ghost" size="sm">View</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-6">
          <div className="text-sm text-gray-500">
            Showing 1 to 4 of 4 entries
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" disabled>Previous</Button>
            <Button variant="outline" size="sm" disabled>Next</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Customers;