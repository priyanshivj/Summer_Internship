import React, { useState } from 'react';
import { Menu, Bell, Search, Moon, Sun, Menu as MenuIcon } from 'lucide-react';
import Button from '../ui/Button';
import Avatar from '../ui/Avatar';

interface TopNavProps {
  toggleSidebar: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const TopNav: React.FC<TopNavProps> = ({ toggleSidebar, isDarkMode, toggleDarkMode }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  
  return (
    <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="px-4 h-16 flex items-center justify-between">
        {/* Left section: Menu toggle & Search */}
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="sm" 
            className="md:hidden" 
            onClick={toggleSidebar}
            aria-label="Toggle menu"
          >
            <MenuIcon className="h-5 w-5" />
          </Button>
          
          <div className={`relative ${isSearchOpen ? 'w-64' : 'w-40 lg:w-64'} transition-all duration-200 ease-in-out`}>
            <input
              type="text"
              placeholder="Search..."
              className="w-full h-9 pl-9 pr-4 rounded-md bg-gray-100 dark:bg-gray-800 border border-transparent focus:border-gray-300 dark:focus:border-gray-700 text-sm focus:outline-none"
              onFocus={() => setIsSearchOpen(true)}
              onBlur={() => setIsSearchOpen(false)}
            />
            <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
          </div>
        </div>
        
        {/* Right section: Actions and Profile */}
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="sm" 
            className="relative"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={toggleDarkMode}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            ) : (
              <Moon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            )}
          </Button>
          
          <div className="relative">
            <button 
              className="flex items-center space-x-2 focus:outline-none"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <Avatar 
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" 
                alt="Priyanshi Vijay" 
                size="sm" 
              />
              <span className="hidden md:block text-sm font-medium text-gray-700 dark:text-gray-200">
                Priyanshi Vijay
              </span>
            </button>
            
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                <a href="#profile" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Profile
                </a>
                <a href="#settings" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Settings
                </a>
                <div className="border-t border-gray-100 dark:border-gray-700" />
                <a href="#logout" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Sign out
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;