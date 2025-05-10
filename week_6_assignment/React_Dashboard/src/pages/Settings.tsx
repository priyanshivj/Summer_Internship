import React from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { User, Bell, Lock, Globe, Palette, Mail } from 'lucide-react';

const Settings: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Settings</h1>

      <div className="grid grid-cols-12 gap-6">
        {/* Navigation */}
        <div className="col-span-12 lg:col-span-3">
          <Card>
            <nav className="space-y-1">
              {[
                { icon: User, label: 'Profile', active: true },
                { icon: Bell, label: 'Notifications' },
                { icon: Lock, label: 'Security' },
                { icon: Globe, label: 'Language' },
                { icon: Palette, label: 'Appearance' },
                { icon: Mail, label: 'Email' },
              ].map((item) => (
                <button
                  key={item.label}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm
                    ${item.active 
                      ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300' 
                      : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800'
                    }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </Card>
        </div>

        {/* Content */}
        <div className="col-span-12 lg:col-span-9 space-y-6">
          <Card>
            <h2 className="text-lg font-medium mb-6">Profile Information</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-6">
                <img
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
                  alt="Profile"
                  className="h-20 w-20 rounded-full object-cover"
                />
                <div>
                  <Button variant="outline" size="sm">Change Photo</Button>
                  <p className="mt-2 text-sm text-gray-500">
                    JPG, GIF or PNG. Max size of 800K
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Jane"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Doe"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue="jane.doe@example.com"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    defaultValue="+1 (555) 123-4567"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Bio
                </label>
                <textarea
                  rows={4}
                  defaultValue="Product Manager with 5+ years of experience in SaaS companies."
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md"
                />
              </div>

              <div className="flex justify-end space-x-3">
                <Button variant="outline">Cancel</Button>
                <Button variant="primary">Save Changes</Button>
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="text-lg font-medium mb-6">Email Notifications</h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Comments',
                  description: 'Receive notifications when someone comments on your posts.',
                },
                {
                  title: 'Mentions',
                  description: 'Receive notifications when someone mentions you in a comment.',
                },
                {
                  title: 'System Updates',
                  description: 'Receive notifications about system updates and maintenance.',
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="mt-1"
                  />
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;