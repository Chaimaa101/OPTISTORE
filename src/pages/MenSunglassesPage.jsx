import { useEffect } from "react";
import { useState } from "react";
import ProductList from "../components/componentsofproducts/ProductList";
import FilterSectionGlasses from "../components/componentsofproducts/FilterSectionGlasses";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-64 mx-auto">
      <div className="animaite-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-black"></div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const ErrorMessage = ({ message }) => {
  return (
    <div className="text-center font-bold uppercase  mt-4 py-8 text-red-500">
      Error : {message}
    </div>
  );
};

const MenSunglassesPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOption, setSortOption] = useState("default");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [colorFilter, setColorFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState(2000);

  // Fetch data from JSON file
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/sunglasses_man/mensunglasses.json");
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
    if (searchQuery) {
      filteredData = filteredData.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (categoryFilter) {
      filteredData = filteredData.filter((item) =>
        item.category.toLowerCase().includes(categoryFilter.toLowerCase())
      );
    }
    if (colorFilter) {
      filteredData = filteredData.filter((item) =>
        item.color.toLowerCase().includes(colorFilter.toLowerCase())
      );
    }
    filteredData = filteredData.filter((item) => item.price <= priceRange);

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
    searchQuery,
    colorFilter,
    categoryFilter,
    priceRange,
    sortOption,
    products,
  ]);

  const resetFilters = () => {
    setSearchQuery("");
    setCategoryFilter("");
    setColorFilter("");
    setPriceRange(2000);
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <h1 className="text-4xl font-bold italic uppercase text-center text-gray-900 my-12">
        Men&apos;s Sunglasses
      </h1>
      <div className="flex flex-col lg:flex-row gap-4 relative">
        <FilterSectionGlasses
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          colorFilter={colorFilter}
          setColorFilter={setColorFilter}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          resetFilters={resetFilters}
        />
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <ErrorMessage message={error} />
        ) : (
          <ProductList
            filteredProducts={filteredProducts}
            sortOption={sortOption}
            setSortOption={setSortOption}
          />
        )}
      </div>
    </div>
  );
};

export default MenSunglassesPage;
