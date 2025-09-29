import React from 'react';
import { BarChart3, TrendingUp, Users, DollarSign } from 'lucide-react';

const IncentiveOverview: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Incentive Overview</h1>
          <p className="text-gray-600">Comprehensive overview of incentive performance and analytics</p>
        </div>
      </div>

      {/* Placeholder Content */}
      <div className="bg-white rounded-xl border border-gray-100 p-12">
        <div className="text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <BarChart3 className="w-12 h-12 text-purple-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Incentive Overview</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            This page will contain comprehensive incentive analytics, performance metrics, and detailed reports for all users and accounts.
          </p>
          
          {/* Feature Preview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Performance Analytics</h3>
              <p className="text-sm text-gray-600">Track incentive performance across all users and time periods</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">User Rankings</h3>
              <p className="text-sm text-gray-600">View top performers and incentive leaderboards</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-100">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Payout Summary</h3>
              <p className="text-sm text-gray-600">Comprehensive incentive payout tracking and history</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncentiveOverview;