import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import { Home } from 'lucide-react';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-gray-900 dark:text-gray-100">404</h1>
      <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">Page not found</p>
      <p className="mt-2 text-gray-500 dark:text-gray-500">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Button
        variant="primary"
        className="mt-8"
        onClick={() => navigate('/dashboard')}
      >
        <Home className="h-4 w-4 mr-2" />
        Back to Dashboard
      </Button>
    </div>
  );
};

export default NotFound;