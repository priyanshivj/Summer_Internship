import React from 'react';
import Card from '../components/ui/Card';
import Chart from '../components/dashboard/Chart';
import Button from '../components/ui/Button';
import { Download, FileText, TrendingUp, DollarSign } from 'lucide-react';

const Reports: React.FC = () => {
  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue',
        data: [12500, 18200, 15800, 22400, 19800, 25600],
        color: '#6366f1',
      }
    ],
  };

  const reports = [
    {
      id: 1,
      name: 'Monthly Revenue Report',
      date: '2024-03-01',
      type: 'Financial',
      status: 'Generated',
      icon: DollarSign,
    },
    {
      id: 2,
      name: 'Customer Growth Analysis',
      date: '2024-03-01',
      type: 'Analytics',
      status: 'Generated',
      icon: TrendingUp,
    },
    {
      id: 3,
      name: 'Product Performance Review',
      date: '2024-03-01',
      type: 'Products',
      status: 'Generated',
      icon: FileText,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Reports</h1>
        <Button variant="primary" size="sm">Generate New Report</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Revenue Overview">
          <Chart data={revenueData} />
        </Card>

        <Card title="Recent Reports">
          <div className="space-y-4">
            {reports.map((report) => (
              <div key={report.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                    <report.icon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">{report.name}</h3>
                    <div className="text-sm text-gray-500">
                      {report.type} • {report.date}
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card title="Scheduled Reports">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="text-left py-3 px-4">Report Name</th>
              <th className="text-left py-3 px-4">Frequency</th>
              <th className="text-left py-3 px-4">Next Generation</th>
              <th className="text-left py-3 px-4">Recipients</th>
              <th className="text-right py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="py-3 px-4">Monthly Sales Report</td>
              <td className="py-3 px-4">Monthly</td>
              <td className="py-3 px-4">Apr 1, 2024</td>
              <td className="py-3 px-4">3 recipients</td>
              <td className="py-3 px-4 text-right">
                <Button variant="ghost" size="sm">Edit</Button>
              </td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="py-3 px-4">Weekly Performance Update</td>
              <td className="py-3 px-4">Weekly</td>
              <td className="py-3 px-4">Mar 11, 2024</td>
              <td className="py-3 px-4">5 recipients</td>
              <td className="py-3 px-4 text-right">
                <Button variant="ghost" size="sm">Edit</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default Reports;