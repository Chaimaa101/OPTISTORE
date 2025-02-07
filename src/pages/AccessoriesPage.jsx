import { useEffect, useState } from "react";
import Cards from "../components/cartProducts/Cards";

// Loading Spinner Component
const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-black"></div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const ErrorMessage = ({ message }) => {
  return (
    <div className="text-center font-bold uppercase mt-4 py-8 text-red-500">
      Error : {message}
    </div>
  );
};

const AccessoriesPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOption, setSortOption] = useState("Default");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [colorFilter, setColorFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState(500); // Max price is 500, but it can be changed

  // Fetch data from JSON file
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/Accessories/accessories.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Handle filtering and sorting
  useEffect(() => {
    let filteredData = [...products];

    // Filter by category
    if (categoryFilter) {
      filteredData = filteredData.filter((item) =>
        item.category.toLowerCase().includes(categoryFilter.toLowerCase())
      );
    }

    // Filter by color
    if (colorFilter) {
      filteredData = filteredData.filter((item) =>
        item.color.toLowerCase().includes(colorFilter.toLowerCase())
      );
    }

    // Filter by price range
    filteredData = filteredData.filter((item) => item.price <= priceRange);

    // Filter by search query
    if (searchQuery) {
      filteredData = filteredData.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Handle sorting
    switch (sortOption) {
      case "A-Z":
        filteredData.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        filteredData.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low-to-high":
        filteredData.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        filteredData.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilteredProducts(filteredData);
  }, [
    categoryFilter,
    colorFilter,
    searchQuery,
    sortOption,
    priceRange,
    products,
  ]);

  const getRingColor = (color) => {
    switch (color.toLowerCase()) {
      case "black":
        return "#000000";
      case "brown":
        return "#964B00";
      case "clear":
        return "#F0F0F0";
      case "green":
        return "#008000";
      case "blue":
        return "#0000FF";
      default:
        return "#3B82F6"; // Default ring color
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <h1 className="text-4xl uppercase font-bold italic text-center text-gray-900 my-12">
        Glasses Accessories
      </h1>

      <div className="flex flex-col lg:flex-row gap-4 relative">
        {/* Filter Section */}
        <div className="lg:w-1/4 bg-gray-100 p-6 rounded-xl shadow-lg lg:sticky lg:top-[5.5rem] lg:h-[85vh] overflow-y-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Filters</h2>

          {/* Search Input */}
          <div className="mb-6">
            <label
              htmlFor="search"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Search
            </label>
            <div className="relative">
              <input
                type="text"
                id="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              />
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-6">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Category
            </label>
            <div className="relative">
              <select
                id="category"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              >
                <option value="">All Categories</option>
                <option value="Case">Case</option>
                <option value="Chain">Chain</option>
                <option value="Face Accessory">Face Accessory</option>
                <option value="Ear Grips">Ear Grips</option>
              </select>
              <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </div>
          </div>

          {/* Color Filter */}
          <div className="mb-6">
            <label
              htmlFor="color"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Color
            </label>
            <div className="grid grid-cols-3 gap-2">
              {["Black", "Brown", "Clear", "Green", "Blue"].map((color) => (
                <button
                  key={color}
                  onClick={() => setColorFilter(color)}
                  className={`p-2 rounded-lg border transition-all ${
                    colorFilter === color
                      ? "border-white"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                  style={{
                    backgroundColor: color.toLowerCase(),
                    boxShadow:
                      colorFilter === color
                        ? `0 0 0 2px ${getRingColor(color)}`
                        : "none",
                  }}
                  aria-label={`Select ${color}`}
                />
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="mb-6">
            <label
              htmlFor="price-range"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Price Range
            </label>
            <input
              type="range"
              step={10}
              min="0"
              max="500"
              value={priceRange}
              onChange={(e) => setPriceRange(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm"
              style={{
                background: `linear-gradient(to right, #3b82f6 ${
                  (priceRange / 500) * 100
                }%, #d1d5db ${(priceRange / 500) * 100}%)`,
              }}
            />
            <div className="flex justify-between items-center text-sm text-gray-600 mt-2">
              <span className="font-medium">0dh</span>
              <span className="font-semibold">{priceRange}dh</span>
            </div>
          </div>

          {/* Reset Filters Button */}
          <button
            onClick={() => {
              setSearchQuery("");
              setCategoryFilter("");
              setColorFilter("");
              setPriceRange(500);
            }}
            className="w-full py-2 px-4 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all"
          >
            Reset Filters
          </button>
        </div>

        {/* Products Section */}
        <div className="lg:w-3/4">
          <div className="flex justify-between items-center mb-6">
            {/* Product Count */}
            <p className="text-lg font-medium text-gray-700">
              {filteredProducts.length}{" "}
              {filteredProducts.length === 1 ? "Product" : "Products"}
            </p>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-3">
              <label
                htmlFor="sort"
                className="text-sm font-medium text-gray-700"
              >
                Sort by:
              </label>
              <div className="relative">
                <select
                  id="sort"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="pl-4 pr-10 py-2.5 text-sm border border-gray-300 rounded-lg cursor-pointer appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all hover:border-gray-400"
                >
                  <option value="default">Default</option>
                  <option value="A-Z">A-Z</option>
                  <option value="Z-A">Z-A</option>
                  <option value="low-to-high">Price: Low to High</option>
                  <option value="high-to-low">Price: High to Low</option>
                </select>
                {/* Dropdown Icon */}
                <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          {/* Loading State */}
          {loading ? (
            <LoadingSpinner />
          ) : error ? (
            <ErrorMessage message={error} />
          ) : (
            <Cards filteredItems={filteredProducts} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AccessoriesPage;
