import React from 'react';
import { Users, FolderOpen, DollarSign, TrendingUp, Calendar, CheckCircle } from 'lucide-react';

const RoririDashboard = () => {
  const stats = [
    { label: "Active Projects", value: 15, icon: FolderOpen, color: "bg-blue-500" },
    { label: "Total Employees", value: 48, icon: Users, color: "bg-green-500" },
    { label: "Monthly Revenue", value: "₹5.2L", icon: DollarSign, color: "bg-purple-500" },
    { label: "Growth Rate", value: "12%", icon: TrendingUp, color: "bg-orange-500" }
  ];

  const recentActivities = [
    { id: 1, activity: "New project assigned to Team A", time: "2 hours ago", type: "project" },
    { id: 2, activity: "Employee onboarding completed", time: "4 hours ago", type: "employee" },
    { id: 3, activity: "Client meeting scheduled", time: "1 day ago", type: "meeting" },
    { id: 4, activity: "Project milestone achieved", time: "2 days ago", type: "achievement" }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Roriri Software Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome to your software development hub</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900">Recent Activities</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.activity}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoririDashboard;