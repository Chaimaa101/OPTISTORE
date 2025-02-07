// /* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";

// const Cards = ({ filteredItems }) => {
//   // Handle case where filteredItems is undefined or empty
//   if (!filteredItems || filteredItems.length === 0) {
//     return (
//       <div className="text-center font-bold uppercase mt-4 text-gray-600">
//         No items found.
//       </div>
//     );
//   }

//   return (
//     <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 ">
//       {filteredItems.map((item) => (
//         <div
//           key={item.id}
//           className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
//         >
//           <Link to={`/accessories/${item.id}`} className="block">
//             {/* Image Container */}
//             <div className="relative aspect-square">
//               <img
//                 src={item.img} // Fallback image
//                 alt={item.name || "Product image"}
//                 className="w-full h-full object-cover" // Ensure the image covers the square container
//                 loading="lazy" // Lazy loading for better performance
//               />
//               {/* Optional: Add a "New" or "Sale" badge */}
//               {item.isNew && (
//                 <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
//                   New
//                 </div>
//               )}
//             </div>
//           </Link>
//           {/* Card Details */}
//           <div className="p-4">
//             <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">
//               {item.name || "Unnamed Product"}
//             </h3>
//             <p className="text-gray-600 mb-2 text-sm line-clamp-2">
//               {item.description || "No description available."}
//             </p>
//             <div className="flex justify-between items-center">
//               <p className="text-lg font-bold text-gray-900">
//                 ${item.price || "N/A"}
//               </p>
//               {/* Optional: Add a "Add to Cart" button */}
//               <button
//                 className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors duration-300"
//                 onClick={(e) => {
//                   e.preventDefault(); // Prevent navigation
//                   console.log("Added to cart:", item.name);
//                 }}
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Cards;

// /* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";

// const Cards = ({ filteredItems }) => {
//   // Handle case where filteredItems is undefined or empty
//   if (!filteredItems || filteredItems.length === 0) {
//     return (
//       <div className="text-center font-bold uppercase mt-4 text-gray-600">
//         No items found.
//       </div>
//     );
//   }

//   return (
//     <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//       {filteredItems.map((item) => (
//         <div
//           key={item.id}
//           className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
//         >
//           <Link to={`/accessories/${item.id}`} className="block">
//             {/* Image Container */}
//             <div className="relative aspect-square">
//               <img
//                 src={item.img} // Fallback image
//                 alt={item.name || "Product image"}
//                 className="w-full h-full object-cover" // Ensure the image covers the square container
//                 loading="lazy" // Lazy loading for better performance
//               />
//               {/* Optional: Add a "New" or "Sale" badge */}
//               {item.isNew && (
//                 <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
//                   New
//                 </div>
//               )}
//             </div>
//           </Link>
//           {/* Card Details */}
//           <div className="p-4">
//             <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">
//               {item.name || "Unnamed Product"}
//             </h3>
//             <p className="text-gray-600 mb-2 text-sm line-clamp-2">
//               {item.description || "No description available."}
//             </p>
//             <div className="flex justify-between items-center">
//               <p className="text-lg font-bold text-gray-900">
//                 ${item.price || "N/A"}
//               </p>
//               {/* Add to Cart Button */}
//               <button
//                 className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
//                 onClick={(e) => {
//                   e.preventDefault(); // Prevent navigation
//                   console.log("Added to cart:", item.name);
//                 }}
//                 aria-label={`Add ${item.name} to cart`}
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Cards;

/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Cards = ({ filteredItems }) => {
  // Handle case where filteredItems is undefined or empty
  if (!filteredItems || filteredItems.length === 0) {
    return (
      <div className="text-center font-bold uppercase mt-4 text-gray-600">
        No items found.
      </div>
    );
  }

  return (
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {filteredItems.map((item) => (
        <div
          key={item.id}
          className="rounded-lg border border-gray-200 bg-white shadow-sm h-full flex flex-col overflow-hidden"
        >
          <Link to={`/shop/${item.id}`} className="block">
            {/* Image Container */}
            <div className="relative aspect-square">
              <img
                src={item.img}
                alt={item.name || "Product image"}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Optional: Add a "New" or "Sale" badge */}
              {item.isNew && (
                <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  New
                </div>
              )}
            </div>
          </Link>
          {/* Card Details */}
          <div className="py-5 px-2.5 flex flex-col h-full">
            <div className="mb-4 flex items-center justify-between gap-4 bg-stick/20 w-fit rounded-full">
              <span className="p-1 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800">
                Up to {item.sold || "10"}% off
              </span>
            </div>
            {/* Product Name */}
            <Link
              to={`/shop/${item.id}`}
              className="!capitalize text-lg  font-semibold leading-tight text-gray-900 hover:underline"
            >
              {item.name || "Unnamed Product"}
            </Link>
            {/* Product Description */}
            <p className="text-gray-600 my-1 text-sm line-clamp-2">
              {item.description || "No description available."}
            </p>
            {/* Rating */}
            <div className="mt-2 flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-4 w-4 text-yellow-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm font-medium text-gray-900">5.0</p>
              <p className="text-sm font-medium text-gray-500">
                ({item.rating})
              </p>
            </div>
            {/* Additional Info */}
            <ul className="my-2 flex items-center gap-4">
              <li className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 text-gray-500"
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
                <p className="text-sm font-medium text-gray-500">
                  Fast Delivery
                </p>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 text-gray-500"
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
                <p className="text-sm font-medium text-gray-500">Best Price</p>
              </li>
            </ul>
            {/* Price and Add to Cart Button */}
            <div className="mt-auto flex items-center justify-between gap-4">
              <p className="text-2xl font-extrabold leading-tight text-gray-900">
                {item.price || "N/A"}dh
              </p>
              <button
                type="button"
                className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white bg-stick  focus:outline-none focus:ring-4 focus:ring-primary-300"
                onClick={(e) => {
                  e.preventDefault();
                  console.log("Added to cart:", item.name);
                }}
              >
                <svg
                  className="-ms-2 me-2 h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                  />
                </svg>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
