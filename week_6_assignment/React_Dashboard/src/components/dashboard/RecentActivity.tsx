import React from 'react';
import Card from '../ui/Card';
import Avatar from '../ui/Avatar';
import Badge from '../ui/Badge';

interface Activity {
  id: string;
  user: {
    name: string;
    avatar?: string;
  };
  action: string;
  target: string;
  time: string;
  status?: 'completed' | 'pending' | 'failed';
}

interface RecentActivityProps {
  activities: Activity[];
  className?: string;
}

const RecentActivity: React.FC<RecentActivityProps> = ({ activities, className = '' }) => {
  const getStatusBadge = (status?: string) => {
    if (!status) return null;
    
    const statusMap = {
      completed: <Badge variant="success">Completed</Badge>,
      pending: <Badge variant="warning">Pending</Badge>,
      failed: <Badge variant="error">Failed</Badge>,
    };
    
    return statusMap[status as keyof typeof statusMap] || null;
  };

  return (
    <Card title="Recent Activity" className={`${className}`}>
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3 py-2 border-b border-gray-100 dark:border-gray-700 last:border-0">
            <Avatar
              src={activity.user.avatar}
              alt={activity.user.name}
              size="sm"
              fallback={activity.user.name.substring(0, 2)}
            />
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap justify-between gap-2">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {activity.user.name}
                </p>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {activity.time}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                {activity.action} <span className="font-medium">{activity.target}</span>
              </p>
              {activity.status && (
                <div className="mt-1">
                  {getStatusBadge(activity.status)}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default RecentActivity;