import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  Home, 
  Users, 
  BarChart3, 
  Settings, 
  Bell, 
  HelpCircle, 
  ShoppingCart, 
  FileText,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

interface NavItem {
  title: string;
  icon: React.ReactNode;
  path: string;
  children?: Omit<NavItem, 'icon' | 'children'>[];
}

interface SidebarProps {
  isOpen: boolean;
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, className = '' }) => {
  const [expanded, setExpanded] = React.useState<string | null>(null);
  const location = useLocation();
  
  const toggleExpanded = (title: string) => {
    setExpanded(expanded === title ? null : title);
  };
  
  const navItems: NavItem[] = [
    {
      title: 'Dashboard',
      icon: <Home className="h-5 w-5" />,
      path: '/dashboard',
    },
    {
      title: 'Analytics',
      icon: <BarChart3 className="h-5 w-5" />,
      path: '/analytics',
    },
    {
      title: 'Customers',
      icon: <Users className="h-5 w-5" />,
      path: '/customers',
      // children: [
      //   { title: 'All customers', path: '/customers' },
      //   { title: 'Customer segments', path: '/customers/segments' },
      //   { title: 'Subscriptions', path: '/customers/subscriptions' },
      // ],
    },
    {
      title: 'Products',
      icon: <ShoppingCart className="h-5 w-5" />,
      path: '/products',
    },
    {
      title: 'Reports',
      icon: <FileText className="h-5 w-5" />,
      path: '/reports',
    },
    // {
    //   title: 'Notifications',
    //   icon: <Bell className="h-5 w-5" />,
    //   path: '/notifications',
    // },
    {
      title: 'Settings',
      icon: <Settings className="h-5 w-5" />,
      path: '/settings',
    },
    // {
    //   title: 'Help & Support',
    //   icon: <HelpCircle className="h-5 w-5" />,
    //   path: '/help',
    // },
  ];

  return (
    <div
      className={`fixed inset-y-0 left-0 bg-indigo-900 text-white transform transition-transform duration-200 ease-in-out z-20 
      ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      ${className}`}
    >
      <div className="w-64 h-full flex flex-col">
        <Link to="/dashboard" className="h-16 flex items-center px-6 border-b border-indigo-800">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-md bg-white flex items-center justify-center">
              <BarChart3 className="h-5 w-5 text-indigo-600" />
            </div>
            <span className="text-xl font-bold">DashPro</span>
          </div>
        </Link>
        
        <nav className="flex-1 py-4 overflow-y-auto">
          <ul className="space-y-1 px-3">
            {navItems.map((item) => (
              <li key={item.title}>
                {item.children ? (
                  <div>
                    <button
                      onClick={() => toggleExpanded(item.title)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm transition-colors
                      ${expanded === item.title ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-800 hover:text-white'}`}
                    >
                      <div className="flex items-center">
                        {item.icon}
                        <span className="ml-3">{item.title}</span>
                      </div>
                      {expanded === item.title ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </button>
                    
                    {expanded === item.title && (
                      <ul className="mt-1 pl-10 space-y-1">
                        {item.children.map((child) => (
                          <li key={child.title}>
                            <Link
                              to={child.path}
                              className={`block px-3 py-2 rounded-md text-sm transition-colors
                                ${location.pathname === child.path 
                                  ? 'bg-indigo-800 text-white' 
                                  : 'text-indigo-100 hover:bg-indigo-800 hover:text-white'}`}
                            >
                              {child.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`flex items-center px-3 py-2 rounded-md text-sm transition-colors
                    ${location.pathname === item.path 
                      ? 'bg-indigo-800 text-white' 
                      : 'text-indigo-100 hover:bg-indigo-800 hover:text-white'}`}
                  >
                    {item.icon}
                    <span className="ml-3">{item.title}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="p-4 border-t border-indigo-800">
          <div className="flex items-center space-x-3">
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
              alt="Priyanshi Vijay"
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-medium">Priyanshi Vijay</p>
              <p className="text-xs text-indigo-300">Administrator</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;