// import { FaRegQuestionCircle } from "react-icons/fa";

// function CheckoutPage() {
//   return (
//     <div className="container max-w-7xl mx-auto px-4 mt-8">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Order Summary */}
//         <div className="bg-gray-100 p-6 rounded-lg shadow-md">
//           <h2 className="text-xl font-bold text-gray-900 mb-4">
//             Order Summary
//           </h2>
//           <div className="space-y-4">
//             {/* Product Details */}
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-4">
//                 <img
//                   src="../../public/data/Eyeglasses_man/1-1.webp"
//                   alt="Product"
//                   className="w-20 h-20 object-cover rounded-lg"
//                 />
//                 <div>
//                   <p className="text-lg font-medium text-gray-900">
//                     Product Name
//                   </p>
//                   <p className="text-sm text-gray-500">Quantity: 1</p>
//                 </div>
//               </div>
//               <p className="text-lg font-medium text-gray-900">$120.00</p>
//             </div>
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-4">
//                 <img
//                   src="../../public/data/Eyeglasses_man/1-1.webp"
//                   alt="Product"
//                   className="w-20 h-20 object-cover rounded-lg"
//                 />
//                 <div>
//                   <p className="text-lg font-medium text-gray-900">
//                     Product Name
//                   </p>
//                   <p className="text-sm text-gray-500">Quantity: 1</p>
//                 </div>
//               </div>
//               <p className="text-lg font-medium text-gray-900">$120.00</p>
//             </div>

//             {/* Cost Breakdown */}
//             <div className="space-y-2 border-black border-t-2 pt-2">
//               <div className="flex justify-between">
//                 <p className="text-gray-700">Subtotal</p>
//                 <p className="text-gray-900">120.00DH</p>
//               </div>
//               <div className="flex justify-between">
//                 <p className="text-gray-700">Shipping</p>
//                 <p className="text-gray-900">FREE</p>
//               </div>
//               <div className="flex justify-between">
//                 <p className="text-gray-700">Taxes</p>
//                 <p className="text-gray-900">00.00DH</p>
//               </div>
//               <div className="flex justify-between border-black border-t-2 pt-2">
//                 <p className="text-lg font-bold text-gray-900">Total</p>
//                 <p className="text-lg font-bold text-gray-900">142.00DH</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Checkout Form */}
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <form className="space-y-4" action="">
//             <div className="flex flex-col">
//               <label
//                 htmlFor=""
//                 className="text-xl font-bold text-gray-900 mb-4"
//               >
//                 Contact
//               </label>
//               <input
//                 type="text"
//                 className="w-full p-3 border border-gray-300 rounded-lg"
//                 placeholder="Email or mobile phone number"
//               />
//             </div>
//             <div className="flex flex-col">
//               <label
//                 htmlFor=""
//                 className="text-xl font-bold text-gray-900 mb-4"
//               >
//                 Delivery
//               </label>
//               <div className="relative">
//                 <select
//                   id=""
//                   className="w-full p-3 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all cursor-pointer"
//                 >
//                   <option value="">Morocco</option>
//                 </select>
//                 <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
//                   <svg
//                     className="w-5 h-5 text-gray-400"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M19 9l-7 7-7-7"
//                     />
//                   </svg>
//                 </span>
//               </div>
//             </div>
//             <div className="flex flex-col md:flex-row gap-y-4 gap-x-8">
//               <input
//                 type="text"
//                 className="w-full p-3 border border-gray-300 rounded-lg"
//                 placeholder="First name (optional)"
//               />
//               <input
//                 type="text"
//                 className="w-full p-3 border border-gray-300 rounded-lg"
//                 placeholder="Last name (optional)"
//               />
//             </div>
//             <div className="flex flex-col">
//               <input
//                 type="text"
//                 className="w-full p-3 border border-gray-300 rounded-lg"
//                 placeholder="Address"
//               />
//             </div>
//             <div className="flex flex-col md:flex-row gap-y-4 gap-x-8">
//               <input
//                 type="text"
//                 className="w-full p-3 border border-gray-300 rounded-lg"
//                 placeholder="Postal code (optional)"
//               />
//               <input
//                 type="text"
//                 className="w-full p-3 border border-gray-300 rounded-lg"
//                 placeholder="City"
//               />
//             </div>
//             <div className="relative">
//               <input
//                 type="number"
//                 placeholder="Phone (optional)"
//                 className="w-full p-3 border border-gray-300 rounded-lg"
//               />
//               {/* Tooltip Trigger */}
//               <span className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer group">
//                 <FaRegQuestionCircle className="text-stick" />
//                 {/* Tooltip Text */}
//                 <span className="absolute hidden group-hover:block bg-black text-white text-sm px-3 py-2 rounded-lg -top-16 right-0 w-36 text-center ">
//                   In case we need to contact you about your order
//                 </span>
//               </span>
//             </div>
//             <div className="space-y-6">
//               {/* Shipping Method Section */}
//               <div className="">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">
//                   Shipping Method
//                 </h3>
//                 <div className="space-y-3">
//                   <div className="flex justify-between items-center p-4 border bg-gray-100 border-gray-200 rounded-lg hover:border-gray-300 transition-colors duration-300">
//                     <span className="text-gray-700">24-48h shipping</span>
//                     <span className="text-green-600 font-medium">Free</span>
//                   </div>
//                 </div>
//               </div>
//               {/* Payment Section */}
//               <div className="">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">
//                   Payment
//                 </h3>
//                 <small className="block text-gray-500 mb-4">
//                   All transactions are secure and encrypted.
//                 </small>
//                 <div className="space-y-3 ">
//                   <div className="flex justify-between items-center p-4 border bg-gray-100 border-gray-200 rounded-lg hover:border-gray-300 transition-colors duration-300">
//                     <span className="text-gray-700">
//                       Cash on Delivery (COD)
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <input
//               type="submit"
//               value="Complete Order"
//               className="w-full flex items-center justify-center rounded-md border border-transparent bg-black px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-800"
//             />
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CheckoutPage;

import { FaRegQuestionCircle } from "react-icons/fa";

function CheckoutPage() {
  // Dummy product data (replace with actual data from your backend or state)
  const products = [
    {
      id: 1,
      name: "Product Name 1",
      image: "../../public/data/Eyeglasses_man/1-1.webp",
      quantity: 1,
      price: 120.0,
    },
    {
      id: 2,
      name: "Product Name 2",
      image: "../../public/data/Eyeglasses_man/1-1.webp",
      quantity: 1,
      price: 120.0,
    },
  ];

  // Calculate subtotal, shipping, taxes, and total
  const subtotal = products.reduce((sum, product) => sum + product.price, 0);
  const shipping = 0; // Free shipping
  const taxes = 20; // 20dh taxes
  const total = subtotal + shipping + taxes;

  return (
    <div className="container max-w-7xl mx-auto px-4 mt-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Order Summary */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Order Summary
          </h2>
          <div className="space-y-4">
            {/* Product Details */}
            {products.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <p className="text-lg font-medium text-gray-900">
                      {product.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      Quantity: {product.quantity}
                    </p>
                  </div>
                </div>
                <p className="text-lg font-medium text-gray-900">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            ))}

            {/* Cost Breakdown */}
            <div className="space-y-2 border-t border-black pt-2">
              <div className="flex justify-between">
                <p className="text-gray-700">Subtotal</p>
                <p className="text-gray-900">{subtotal.toFixed(2)}DH</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700">Shipping</p>
                <p className="text-gray-900">FREE</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700">Taxes</p>
                <p className="text-gray-900">{taxes.toFixed(2)}DH</p>
              </div>
              <div className="flex justify-between border-t border-black pt-2">
                <p className="text-lg font-bold text-gray-900">Total</p>
                <p className="text-lg font-bold text-gray-900">
                  {total.toFixed(2)}DH
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Checkout Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <form className="space-y-4">
            {/* Contact Section */}
            <div className="flex flex-col">
              <label className="text-xl font-bold text-gray-900 mb-4">
                Contact
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Email or mobile phone number"
              />
            </div>

            {/* Delivery Section */}
            <div className="flex flex-col">
              <label className="text-xl font-bold text-gray-900 mb-4">
                Delivery
              </label>
              <div className="relative">
                <select className="w-full p-3 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all cursor-pointer">
                  <option value="">Morocco</option>
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

            {/* Name Section */}
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="First name (optional)"
              />
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Last name (optional)"
              />
            </div>

            {/* Address Section */}
            <div className="flex flex-col">
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Address"
              />
            </div>

            {/* Postal Code and City Section */}
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Postal code (optional)"
              />
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="City"
              />
            </div>

            {/* Phone Section with Tooltip */}
            <div className="relative">
              <input
                type="number"
                placeholder="Phone (optional)"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer group">
                <FaRegQuestionCircle className="text-gray-500" />
                <span className="absolute hidden group-hover:block bg-black text-white text-sm px-3 py-2 rounded-lg -top-10 right-0 w-48 text-center">
                  In case we need to contact you about your order
                </span>
              </span>
            </div>

            {/* Shipping Method Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Shipping Method
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-4 border bg-gray-100 border-gray-200 rounded-lg hover:border-gray-300 transition-colors duration-300">
                  <span className="text-gray-700">24-48h shipping</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
              </div>
            </div>

            {/* Payment Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Payment
              </h3>
              <small className="block text-gray-500 mb-4">
                All transactions are secure and encrypted.
              </small>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-4 border bg-gray-100 border-gray-200 rounded-lg hover:border-gray-300 transition-colors duration-300">
                  <span className="text-gray-700">Cash on Delivery (COD)</span>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <input
              type="submit"
              value="Complete Order"
              className="w-full flex items-center justify-center rounded-md border border-transparent bg-black px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-800"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
