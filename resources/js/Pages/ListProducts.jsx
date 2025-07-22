import { useEffect } from "react";
import { useState } from "react";
import ProductList from "./components/componentsofproducts/ProductList";
import FilterSectionGlasses from "./components/componentsofproducts/FilterSectionGlasses";
import { usePage } from "@inertiajs/react";
import AppLayout from '@/Pages/AppLayout';

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

const ListProducts = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOption, setSortOption] = useState("default");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [colorFilter, setColorFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState(2000);
 
  const { props } = usePage();
  const { products, category } = props;
  
  // Handle filtering and sorting
  useEffect(() => {
    let filteredData = [...products];
    if (searchQuery) {
      filteredData = filteredData.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (categoryFilter) {
      filteredData = filteredData.filter(() =>
        category.toLowerCase().includes(categoryFilter.toLowerCase())
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
        filteredData.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Z-A":
        filteredData.sort((a, b) => b.title.localeCompare(a.title));
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
      setLoading(false); 
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
    setPriceRange(500);
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <h1 className="text-4xl font-bold italic uppercase text-center text-gray-900 my-12">
        {category}
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
            category={category}
            filteredProducts={filteredProducts}
            sortOption={sortOption}
            setSortOption={setSortOption}
          />
        )}
      </div>
    </div>
  );
};
ListProducts.layout = page => <AppLayout>{page}</AppLayout>;

export default ListProducts;
