import React, { useState } from 'react';
import Navbar from './Navbar';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../App.css'; 

const Dashboard: React.FC = () => {
  const [showBalance, setShowBalance] = useState(true);

  const toggleBalanceVisibility = () => {
    setShowBalance(!showBalance);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="px-4 py-6 sm:px-6 lg:px-8">
          {/* Account Balance Section */}
          <div className="bg-white shadow rounded-lg p-6 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <h1 className="text-lg sm:text-2xl whitespace-nowrap font-bold text-gray-900">Account Balance:</h1>
                <h2 className="text-base sm:text-xl font-semibold text-teal-700">
                  {showBalance ? '$15,678.90' : '****'}
                </h2>
              </div>
              <button onClick={toggleBalanceVisibility} className="text-gray-600 hover:text-gray-800 ml-auto">
                {showBalance ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <button className="mt-4 bg-teal-700 text-white px-4 py-2 rounded-md hover:bg-teal-800 transition-colors duration-300">
              Account Statement
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Investment Overview */}
            <div className="bg-white shadow rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 hover:animate-subtle-bounce">
              <h2 className="text-lg font-medium text-gray-900">Investment Overview</h2>
              <p className="mt-2 text-sm text-gray-600">Track your investments and see how they are performing.</p>
              <div className="mt-4">
                <div className="h-32 bg-gray-200 rounded-lg overflow-hidden">
                  <img src="./invest.jpg" alt="Investment Overview" className="h-full w-full object-cover rounded-lg transform hover:scale-105 transition-transform duration-300" />
                </div>
              </div>
            </div>
            {/* Savings Summary */}
            <div className="bg-white shadow rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 hover:animate-subtle-bounce">
              <h2 className="text-lg font-medium text-gray-900">Savings Summary</h2>
              <p className="mt-2 text-sm text-gray-600">Overview of your savings and goals.</p>
              <div className="mt-4">
                <div className="h-32 bg-gray-200 rounded-lg overflow-hidden">
                  <img src="./save.jpg" alt="Savings Summary" className="h-full w-full object-cover rounded-lg transform hover:scale-105 transition-transform duration-300" />
                </div>
              </div>
            </div>
            {/* Recent Transactions */}
            <div className="bg-white shadow rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 hover:animate-subtle-bounce">
              <h2 className="text-lg font-medium text-gray-900">Recent Transactions</h2>
              <p className="mt-2 text-sm text-gray-600">Review your recent financial activities.</p>
              <div className="mt-4">
                <div className="h-32 bg-gray-200 rounded-lg overflow-hidden">
                  <img src="./transac.webp" alt="Recent Transactions" className="h-full w-full object-cover rounded-lg transform hover:scale-105 transition-transform duration-300" />
                </div>
              </div>
            </div>
            {/* Financial Summary */}
            <div className="bg-white shadow rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 hover:animate-subtle-bounce">
              <h2 className="text-lg font-medium text-gray-900">Financial Summary</h2>
              <p className="mt-2 text-sm text-gray-600">Get a quick overview of your financial status.</p>
              <div className="mt-4">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Total Balance: $12,345.67</li>
                  <li>Investments: $8,765.43</li>
                  <li>Savings: $3,580.24</li>
                </ul>
              </div>
            </div>
            {/* Investment Performance */}
            <div className="bg-white shadow rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 hover:animate-subtle-bounce">
              <h2 className="text-lg font-medium text-gray-900">Investment Performance</h2>
              <p className="mt-2 text-sm text-gray-600">Visualize your investment growth over time.</p>
              <div className="mt-4">
                <div className="h-36 bg-gray-200 rounded-lg overflow-hidden">
                  <img src="./grow2.jpg" alt="Investment Growth" className="h-full w-full object-cover rounded-lg transform hover:scale-105 transition-transform duration-300" />
                </div>
              </div>
            </div>
            {/* News & Updates */}
            <div className="bg-white shadow rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 hover:animate-subtle-bounce">
              <h2 className="text-lg font-medium text-gray-900">News & Updates</h2>
              <p className="mt-2 text-sm text-gray-600">Stay informed with the latest financial news.</p>
              <div className="mt-4">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Market trends show positive growth in Q3.</li>
                  <li>New investment opportunities available.</li>
                  <li>Financial tips for maximizing savings.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;