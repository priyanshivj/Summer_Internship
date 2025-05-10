import React from 'react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { Search, Filter, Plus, Edit2, Trash2 } from 'lucide-react';

const Products: React.FC = () => {
  const products = [
    {
      id: 1,
      name: 'Premium Package',
      category: 'Subscription',
      price: '$99.99',
      status: 'In Stock',
      sales: 245,
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg',
    },
    {
      id: 2,
      name: 'Basic Plan',
      category: 'Subscription',
      price: '$29.99',
      status: 'In Stock',
      sales: 189,
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg',
    },
    {
      id: 3,
      name: 'Pro Bundle',
      category: 'One-time',
      price: '$199.99',
      status: 'Low Stock',
      sales: 124,
      image: 'https://images.pexels.com/photos/4386339/pexels-photo-4386339.jpeg',
    },
    {
      id: 4,
      name: 'Enterprise Solution',
      category: 'Service',
      price: '$499.99',
      status: 'In Stock',
      sales: 67,
      image: 'https://images.pexels.com/photos/4386338/pexels-photo-4386338.jpeg',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Products</h1>
        <Button variant="primary" size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Product
        </Button>
      </div>

      <Card>
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="relative flex-1 min-w-[200px]">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <select className="border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 px-3 py-2">
            <option>All Categories</option>
            <option>Subscription</option>
            <option>One-time</option>
            <option>Service</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium">{product.name}</h3>
                  <Badge variant={product.status === 'In Stock' ? 'success' : 'warning'}>
                    {product.status}
                  </Badge>
                </div>
                <div className="text-sm text-gray-500 mb-2">{product.category}</div>
                <div className="flex justify-between items-center mb-4">
                  <div className="font-bold text-lg">{product.price}</div>
                  <div className="text-sm text-gray-500">{product.sales} sales</div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Edit2 className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                  <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mt-6">
          <div className="text-sm text-gray-500">
            Showing 1 to 4 of 4 products
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

export default Products;