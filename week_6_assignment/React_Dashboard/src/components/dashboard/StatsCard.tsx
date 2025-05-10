import React from 'react';
import Card from '../ui/Card';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: {
    value: string | number;
    isPositive: boolean;
  };
  icon: LucideIcon;
  iconColor?: string;
  className?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  change,
  icon: Icon,
  iconColor = 'text-indigo-500',
  className = '',
}) => {
  return (
    <Card className={`${className}`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
          <h4 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white">{value}</h4>
          
          {change && (
            <div className="mt-1 flex items-center text-xs">
              <span
                className={`flex items-center ${
                  change.isPositive ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {change.isPositive ? '↑' : '↓'} {change.value}
              </span>
              <span className="ml-1 text-gray-500 dark:text-gray-400">from last month</span>
            </div>
          )}
        </div>
        
        <div className={`rounded-full p-2 ${iconColor.replace('text-', 'bg-').replace('-500', '-100')} dark:bg-opacity-20`}>
          <Icon className={`h-5 w-5 ${iconColor}`} />
        </div>
      </div>
    </Card>
  );
};

export default StatsCard;