import React from 'react';
import { Camera, Calendar, DollarSign, TrendingUp, Users, BarChart3, MessageCircle } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  iconBg: string;
}

interface ChatItemProps {
  initials: string;
  name: string;
  message: string;
  time: string;
  bgColor: string;
}

interface QuickActionProps {
  icon: React.ReactNode;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, iconBg }) => (
  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-500 text-sm font-medium">{title}</p>
        <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
      </div>
      <div className={`p-3 rounded-lg ${iconBg}`}>
        {icon}
      </div>
    </div>
  </div>
);

const ChatItem: React.FC<ChatItemProps> = ({ initials, name, message, time, bgColor }) => (
  <div className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm ${bgColor}`}>
      {initials}
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-sm font-semibold text-gray-900">{name}</p>
      <p className="text-sm text-gray-500 truncate">{message}</p>
    </div>
    <p className="text-xs text-gray-400">{time}</p>
  </div>
);

const QuickAction: React.FC<QuickActionProps> = ({ icon, label }) => (
  <button className="w-full flex items-center space-x-3 p-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
    <div className="text-indigo-600">
      {icon}
    </div>
    <span className="text-gray-700 font-medium">{label}</span>
  </button>
);

const StudioDashboard: React.FC = () => {
  const portfolioImages = Array(6).fill('/api/placeholder/300/200');

  const chatMessages = [
    {
      initials: 'SJ',
      name: 'Sarah Johnson',
      message: "Hi! I'm interested in booking your studio...",
      time: '2h ago',
      bgColor: 'bg-indigo-600'
    },
    {
      initials: 'CL',
      name: 'Claire Latifah',
      message: 'Thank you for the amazing photoshoot...',
      time: '1h ago',
      bgColor: 'bg-indigo-600'
    },
    {
      initials: 'MC',
      name: 'Mike Chen',
      message: 'Can we discuss pricing for a 3-day project?',
      time: '1d ago',
      bgColor: 'bg-indigo-600'
    },
    {
      initials: 'SJ',
      name: 'Sarah Johnson',
      message: "Hi! I'm interested in booking your studio...",
      time: '2h ago',
      bgColor: 'bg-indigo-600'
    },
    {
      initials: 'CL',
      name: 'Claire Latifah',
      message: 'Thank you for the amazing photoshoot...',
      time: '1h ago',
      bgColor: 'bg-indigo-600'
    },
    {
      initials: 'MC',
      name: 'Mike Chen',
      message: 'Can we discuss pricing for a 3-day project?',
      time: '1d ago',
      bgColor: 'bg-indigo-600'
    },
    {
      initials: 'SJ',
      name: 'Sarah Johnson',
      message: "Hi! I'm interested in booking your studio...",
      time: '2h ago',
      bgColor: 'bg-indigo-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Creconnect</h1>
            <p className="text-gray-600 mt-1">Studio Dashboard</p>
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors">
            <span className="text-lg">+</span>
            <span>Add Photos</span>
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Projects"
            value="34"
            icon={<Camera className="w-6 h-6 text-indigo-600" />}
            iconBg="bg-indigo-100"
          />
          <StatCard
            title="Active Bookings"
            value="4"
            icon={<Calendar className="w-6 h-6 text-indigo-600" />}
            iconBg="bg-indigo-100"
          />
          <StatCard
            title="Monthly Earnings"
            value="700K(Rwf)"
            icon={<DollarSign className="w-6 h-6 text-green-600" />}
            iconBg="bg-green-100"
          />
          <StatCard
            title="Rating"
            value="4.8 ⭐"
            icon={<TrendingUp className="w-6 h-6 text-indigo-600" />}
            iconBg="bg-indigo-100"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Chat Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex space-x-2 mb-4">
                <button className="bg-indigo-600 text-white px-6 py-2 rounded-full font-medium">
                  New Chats
                </button>
                <button className="bg-gray-100 text-gray-600 px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors">
                  Unread
                </button>
              </div>
            </div>
            
            <div className="max-h-96 overflow-y-auto">
              {chatMessages.map((chat, index) => (
                <ChatItem key={index} {...chat} />
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Portfolio Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Camera className="w-5 h-5 text-indigo-600" />
                <h2 className="text-lg font-semibold text-gray-900">Portfolio</h2>
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                {portfolioImages.map((_, index) => (
                  <div key={index} className="aspect-square bg-gradient-to-br from-gray-100 to-gray-300 rounded-lg overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* Studio Equipment Icons */}
                      <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    {/* Tripod representation */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-0.5 h-8 bg-gray-600"></div>
                      <div className="w-4 h-0.5 bg-gray-600 absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
                    </div>
                    {/* Light stands */}
                    <div className="absolute top-4 left-4">
                      <div className="w-0.5 h-6 bg-gray-600"></div>
                      <div className="w-3 h-3 bg-white border border-gray-600 rounded absolute -top-1 left-1/2 transform -translate-x-1/2"></div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="w-0.5 h-6 bg-gray-600"></div>
                      <div className="w-3 h-3 bg-white border border-gray-600 rounded absolute -top-1 left-1/2 transform -translate-x-1/2"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
              
              <div className="space-y-3">
                <QuickAction
                  icon={<Calendar className="w-5 h-5" />}
                  label="Manage Calendar"
                />
                <QuickAction
                  icon={<Users className="w-5 h-5" />}
                  label="View Clients"
                />
                <QuickAction
                  icon={<BarChart3 className="w-5 h-5" />}
                  label="Analytics"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudioDashboard;