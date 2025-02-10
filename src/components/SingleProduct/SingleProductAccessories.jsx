import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleProductAccessories() {
  const [product, setProduct] = useState(null); // Initialize product state
  const [loading, setLoading] = useState(true); // Start with loading state true
  const [error, setError] = useState(null); // Error state to hold error messages
  const [selectedImage, setSelectedImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const controller = new AbortController(); // Set up an AbortController to cancel request on component unmount

      try {
        setLoading(true); // Set loading to true before fetching
        const response = await fetch(
          "../../../public/data/Accessories/accessories.json",
          {
            signal: controller.signal, // Pass the signal to fetch request
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data from the server.");
        }

        const data = await response.json();
        const foundProduct = data.find((p) => p.id == id);

        if (!foundProduct) {
          throw new Error("Product not found.");
        }
        setProduct(foundProduct); // Set product data if found
        setSelectedImage(foundProduct.img);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); // Set loading to false after the request
      }

      return () => controller.abort(); // Clean up fetch request on component unmount
    };

    fetchData(); // Fetch the data when the component mounts or the id changes
  }, [id]); // Dependency array ensures fetch happens when id changes

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 mx-auto">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-black"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center font-bold uppercase mt-4 text-red-600">
        Error: {error}
      </div>
    );
  }

  const handleQuantityChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value)); // Ensure quantity is at least 1
    setQuantity(value);
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleAddToCart = () => {
    // Here you can handle the add to cart logic, for now, we just log the quantity and product name
    console.log(`Added ${quantity} of ${product.name} to the cart`);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 container max-w-7xl mx-auto px-4 mt-8">
      {/* Product Images */}
      <div className="space-y-4">
        <div className="h-[500px] lg:h-[600px] w-full overflow-hidden rounded-lg shadow-lg relative group">
          <img
            src={selectedImage}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          {/* New Arrival Badge */}
          {product.isNew && (
            <span className="absolute top-4 right-4 bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              New Arrival
            </span>
          )}
        </div>
        <div className="flex items-center gap-4 overflow-x-auto py-4 sm:w-fit sm:mx-auto">
          {[product.img, product.img1, product.img2].filter(Boolean).map(
            (
              img,
              index // filter(Boolean) to remove undefined/null values
            ) => (
              <div
                key={index}
                className={`flex-shrink-0 w-44 h-32 rounded-lg cursor-pointer border-2 ${
                  selectedImage === img ? "border-black" : "border-transparent"
                } hover:border-gray-300 transition-all duration-300`}
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt={`${product.name} - ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  loading="lazy"
                />
              </div>
            )
          )}
        </div>
      </div>

      {/* Product Details */}
      <div className="space-y-6">
        {/* Breadcrumb */}
        <p className="capitalize text-gray-500 text-sm tracking-wider font-semibold py-2 mb-4">
          Shop &gt; Glasses Accessories &gt; {product.name}
        </p>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-gray-700 text-lg">{product.description}</p>
        </div>

        {/* Rating */}
        <div className="my-4 flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="h-5 w-5 text-yellow-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
              </svg>
            ))}
          </div>
          <p className="text-base font-medium text-gray-900">5.0</p>
          <p className="text-base font-medium text-gray-500">
            ({product.rating})
          </p>
        </div>

        {/* Quantity Selector */}
        <div className="my-4 flex items-center gap-4">
          <label
            htmlFor="quantity"
            className="text-lg font-medium text-gray-900"
          >
            Quantity:
          </label>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDecrement}
              className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
            >
              -
            </button>
            <input
              type="text"
              id="quantity"
              name="quantity"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
              className="w-20 h-10 text-center border border-gray-300 rounded-lg"
            />
            <button
              onClick={handleIncrement}
              className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
            >
              +
            </button>
          </div>
        </div>

        {/* Features */}
        <ul className="my-4 flex items-center gap-4">
          <li className="flex items-center gap-2">
            <svg
              className="h-5 w-5 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
              />
            </svg>
            <p className="text-base font-medium text-gray-500">Fast Delivery</p>
          </li>
          <li className="flex items-center gap-2">
            <svg
              className="h-5 w-5 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
              />
            </svg>
            <p className="text-base font-medium text-gray-500">Best Price</p>
          </li>
        </ul>

        {/* Quality Assurance Section */}
        <div className="my-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Quality Assurance
          </h2>
          <ul className="space-y-4 sm:space-y-3 text-center sm:text-left">
            <li className="flex flex-col sm:flex-row items-center gap-2">
              <svg
                className="h-6 w-6 text-green-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 11.9V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v4.9M5 12h14m-14 0v4c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-4M9 15v2m6-2v2"
                />
              </svg>
              <p className="text-base font-medium text-gray-700">
                Premium Materials: Made with high-quality acetate for durability
                and comfort.
              </p>
            </li>
            <li className="flex flex-col sm:flex-row items-center gap-2">
              <svg
                className="h-6 w-6 text-green-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v1m6 11h1m-6 0h1m-5-4v5m-3-5v5m-2-9v1m16-1v1m-3.6-5.4.7.7m-12.1-.7-.7.7M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
                />
              </svg>
              <p className="text-base font-medium text-gray-700">
                100% UV Protection: Shields your eyes from harmful UV rays.
              </p>
            </li>
            <li className="flex flex-col sm:flex-row items-center gap-2">
              <svg
                className="h-6 w-6 text-green-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p className="text-base font-medium text-gray-700">
                Scratch-Resistant Lenses: Ensures long-lasting clarity.
              </p>
            </li>
          </ul>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="w-full bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default SingleProductAccessories;
