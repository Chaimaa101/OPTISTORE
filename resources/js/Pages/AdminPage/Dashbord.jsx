import Header from "./common/Header";
import StatCard from "./common/StatCard";
import Sidebar from "./common/Sidebar";
import { motion } from "framer-motion"; // Changed to framer-motion
import { BiSolidCollection } from "react-icons/bi";
import { FaShoppingCart, FaUsers } from "react-icons/fa";
import { LuChartNoAxesCombined } from "react-icons/lu";
import PoductesSelling from "./common/PoductesSelling";
import RevenueBarChart from "./common/RevenueBarChart";
import TotalSellersChart from "./common/TotalSellersChart";
import { useState } from "react";
import AdminLayout from './AdminLayout'
import { usePage } from "@inertiajs/react";

function Dashboard({stats}) {
const { props } = usePage();
  console.log(stats)
   
  const { 
        totalProducts = 0, 
        totalOrders = 0, 
        totalUsers = 0, 
        totalRevenue = 0 
    } = props.stats || {};

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US').format(amount) + ' DH';
  };

  return (
  <>
    <Header 
          title="Admin Dashboard"
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        />
        
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="max-w-7xl mx-auto">
            {/* Stats Cards Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
            >
              <StatCard
                name="Total Revenue"
                icon={LuChartNoAxesCombined}
                number={formatCurrency(totalRevenue)}
                trend="up"
              />
              <StatCard 
                name="Orders" 
                icon={FaShoppingCart} 
                number={totalOrders.toLocaleString()}
                trend="neutral"
              />
              <StatCard 
                name="Customers" 
                icon={FaUsers} 
                number={totalUsers.toLocaleString()}
                trend="up"
              />
              <StatCard
                name="Products"
                icon={BiSolidCollection}
                number={totalProducts.toLocaleString()}
                bg="#686ef1"
                trend="down"
              />
            </motion.div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <TotalSellersChart />
              </div>
              <div>
                <RevenueBarChart />
              </div>
            </div>
            
            {/* Products Section */}
            <div className="mt-8">
              <PoductesSelling />
            </div>
          </div>
        </main>
      </>
  );
}

Dashboard.layout = page => <AdminLayout>{page}</AdminLayout>;

export default Dashboard;