import { BiSolidDashboard, BiSolidShoppingBagAlt } from "react-icons/bi";
import { FaBoxOpen } from "react-icons/fa";
import { MdOutlineSettings, MdMessage } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "@inertiajs/react";

// Sidebar Items Configuration
const SIDEBAR_ITEMS = [
  { name: "Dashboard", icon: BiSolidDashboard, path: "/dashboard" },
  { name: "Products", icon: FaBoxOpen, path: "/products" },
  { name: "Orders", icon: BiSolidShoppingBagAlt, path: "/orders" },
  { name: "Messages", icon: MdMessage, path: "/messages" },
  { name: "Settings", icon: MdOutlineSettings, path: "/settings" },
];

// Sidebar Toggle Button Component
const SidebarToggleButton = ({ isOpen, onClick }) => {
  return (
    <motion.button
      className="ml-2 p-2 rounded-full hover:bg-gray-300 max-w-fit transition-colors"
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
    >
      <FiMenu size={24} className="text-gray-800" />
    </motion.button>
  );
};

// Sidebar Item Component
const SidebarItem = ({ item, isSidebarOpen }) => {
  return (
    <Link href={item.path} className="block">
      <motion.div
        className="flex items-center gap-2 p-4 text-sm font-medium rounded-lg hover:bg-blue-500 hover:bg-opacity-20 transition-colors mb-2"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <item.icon size={24} className="text-blue-600" />
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.span
              className="whitespace-nowrap text-gray-800"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              {item.name}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </Link>
  );
};

// Main Sidebar Component
export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <motion.div
      className={`relative z-10 flex-shrink-0 bg-gray-200 bg-opacity-50 backdrop-blur-md border-r border-gray-300 dark:border-gray-700`}
      animate={{ width: isSidebarOpen ? 240 : 90 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="h-full p-4 flex flex-col">
        {/* Sidebar Toggle Button */}

        <SidebarToggleButton
          isOpen={isSidebarOpen}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        />

        {/* Sidebar Navigation */}
        <nav className="mt-8 flex-grow">
          {SIDEBAR_ITEMS.map((item) => (
            <SidebarItem
              key={item.path}
              item={item}
              isSidebarOpen={isSidebarOpen}
            />
          ))}
        </nav>
      </div>
    </motion.div>
  );
}
