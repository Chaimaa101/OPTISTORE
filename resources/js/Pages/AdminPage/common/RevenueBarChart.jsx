import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

// Sample revenue data
const revenueData = [
  { name: "Jan", revenue: 4000 },
  { name: "Feb", revenue: 3000 },
  { name: "Mar", revenue: 5000 },
  { name: "Apr", revenue: 4500 },
  { name: "May", revenue: 6000 },
  { name: "Jun", revenue: 7000 },
];

// Color for the bar chart
const barColor = "#0088FE";

export default function RevenueBarChart() {
  return (
    <motion.div
      className="bg-white backdrop-blur-md shadow-xl rounded-xl p-6 border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      {/* Title */}
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Monthly Revenue
      </h2>

      {/* Bar Chart */}
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
              contentStyle={{
                backgroundColor: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                fontSize: "14px",
              }}
            />
            <Legend />
            <Bar dataKey="revenue" fill={barColor} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Additional Info */}
      <p className="text-sm text-gray-600 mt-4 text-center">
        Revenue generated over the last 6 months.
      </p>
    </motion.div>
  );
}