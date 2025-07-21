import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Updated data for your e-commerce products
const productData = [
  { name: "Men's Sunglasses", value: 400 },
  { name: "Women's Sunglasses", value: 300 },
  { name: "Eyeglasses", value: 200 },
  { name: "Accessories", value: 100 },
];

// E-commerce Focused Color Palette
const COLORS = ["#FF7E67", "#A3D8F4", "#FFD700", "#B2D8B2"];

export default function ProductsSelling() {
  return (
    <motion.div
      className="bg-white backdrop-blur-md shadow-xl rounded-xl p-6 border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      {/* Title */}
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Product Sales Distribution
      </h2>

      {/* Pie Chart */}
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={productData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={100}
              fill="#8884D8"
              dataKey="value"
              label={({percent }) =>
                `${(percent * 100).toFixed(0)}%`
              }
            >
              {productData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                fontSize: "14px",
              }}
            />
            <Legend
              iconSize={12}
              iconType="circle"
              wrapperStyle={{
                paddingTop: "20px",
                fontSize: "14px",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Additional Info */}
      <p className="text-sm text-gray-600 mt-4 text-center">
        Breakdown of sales by product category.
      </p>
    </motion.div>
  );
}