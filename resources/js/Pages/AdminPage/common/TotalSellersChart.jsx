import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

// Sample data for total sellers
const sellerData = [
  { month: "Jan", sellers: 120 },
  { month: "Feb", sellers: 150 },
  { month: "Mar", sellers: 200 },
  { month: "Apr", sellers: 180 },
  { month: "May", sellers: 250 },
  { month: "Jun", sellers: 300 },
];

// Color for the area chart
const areaColor = "#8884D8";

export default function TotalSellersChart() {
  return (
    <motion.div
      className="bg-white backdrop-blur-md shadow-xl rounded-xl p-6 border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      {/* Title */}
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Total Sellers Over Time
      </h2>

      {/* Area Chart */}
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={sellerData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
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
            <Area
              type="monotone"
              dataKey="sellers"
              stroke={areaColor}
              fill={areaColor}
              fillOpacity={0.3}
              strokeWidth={3}
              dot={{ r: 6 }}
              activeDot={{ r: 8 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Additional Info */}
      <p className="text-sm text-gray-600 mt-4 text-center">
        Growth in the number of sellers over the last 6 months.
      </p>
    </motion.div>
  );
}
