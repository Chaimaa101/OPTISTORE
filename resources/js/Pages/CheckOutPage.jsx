import { useForm, usePage } from '@inertiajs/react';
import { FaRegQuestionCircle } from "react-icons/fa";
import { useState } from "react";
import AppLayout from '@/Pages/AppLayout';


function CheckoutPage() {
  const { cartItems = [], auth } = usePage().props;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { data, setData, post } = useForm({
    total_price: 0,
    email: auth?.user?.email || '',
    first_name: auth?.user?.firstname || '',
    last_name: auth?.user?.lastname || '',
    address1: '',
    address2: '',
    city: '',
    country: 'Morocco',
    state: '',
    zipcode: '',
    phone:'',
    status:'paid',
    payment_method: 'cash_on_delivery',
    items: cartItems.map(item => ({
      product_id: item.product.id,
      quantity: item.quantity,
      unit_price: item.product.price
    }))
  });

  // Calculate prices
  const subtotal = cartItems.reduce((sum, item) => sum + (item.product?.price || 0) * item.quantity, 0);
  const shipping = 0; // Free shipping
  const taxes = 20; // 20dh taxes
  const total = subtotal + shipping + taxes;

  // Update total price when cart changes
  useState(() => {
    setData('total_price', total);
  }, [total]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    post('orders', {
      onSuccess: () => {
        // Redirect to thank you page or show success message
        window.location.href = '/order-confirmation';
      },
      onError: (errors) => {
        setError(Object.values(errors).join('\n'));
        setLoading(false);
      }
    });
  };

  return (
    <div className="container max-w-7xl mx-auto px-4 mt-8">
      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Order Summary */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={`/${item?.product?.images[0]?.images[0]}`}
                    alt={item.product.title}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <p className="text-lg font-medium text-gray-900">
                      {item.product.title}
                    </p>
                    <p className="text-sm text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                </div>
                <p className="text-lg font-medium text-gray-900">
                  {item.product.price}DH
                </p>
              </div>
            ))}

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
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="hidden" name="total_price" value={total} />

            {/* Contact Section */}
            <div className="flex flex-col">
              <label className="text-xl font-bold text-gray-900 mb-4">Contact</label>
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={(e) => setData('email', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Email"
                required
              />
            </div>

            {/* Name Section */}
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="first_name"
                value={data.first_name}
                onChange={(e) => setData('first_name', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="First name"
                required
              />
              <input
                type="text"
                name="last_name"
                value={data.last_name}
                onChange={(e) => setData('last_name', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Last name"
                required
              />
            </div>

            {/* Address Section */}
            <div className="flex flex-col">
              <input
                type="text"
                name="address1"
                value={data.address1}
                onChange={(e) => setData('address1', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Address"
                required
              />
              <input
                type="text"
                name="address2"
                value={data.address2}
                onChange={(e) => setData('address2', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg mt-2"
                placeholder="Apartment, suite, etc. (optional)"
              />
            </div>

            {/* Postal Code and City Section */}
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="zipcode"
                value={data.zipcode}
                onChange={(e) => setData('zipcode', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Postal code"
                required
              />
              <input
                type="text"
                name="city"
                value={data.city}
                onChange={(e) => setData('city', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="City"
                required
              />
            </div>

            {/* Country and State */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                <select
                  name="country"
                  value={data.country}
                  onChange={(e) => setData('country', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                >
                  <option value="Morocco">Morocco</option>
                </select>
              </div>
              <div className="w-full">
                <input
                  type="text"
                  name="state"
                  value={data.state}
                  onChange={(e) => setData('state', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="State/Region"
                  required
                />
              </div>
            </div>

            {/* Phone Section */}
            <div className="relative">
              <input
                type="tel"
                name="phone"
                value={data.phone}
                onChange={(e) => setData('phone', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Phone"
                required
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer group">
                <FaRegQuestionCircle className="text-gray-500" />
                <span className="absolute hidden group-hover:block bg-black text-white text-sm px-3 py-2 rounded-lg -top-10 right-0 w-48 text-center">
                  In case we need to contact you about your order
                </span>
              </span>
            </div>


            {/* Payment Method */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Method</h3>
              <div className="space-y-3">
                <label className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-gray-300 cursor-pointer">
                  <input
                    type="radio"
                    name="payment_method"
                    value="cash_on_delivery"
                    checked={data.payment_method === 'cash_on_delivery'}
                    onChange={(e) => setData('payment_method', e.target.value)}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                  />
                  <span className="ml-3 text-gray-700">Cash on Delivery (COD)</span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || cartItems.length === 0}
              className={`w-full flex items-center justify-center rounded-md border border-transparent bg-black px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-800 ${loading || cartItems.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? 'Processing...' : `Pay ${total.toFixed(2)} DH`}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
CheckoutPage.layout = page => <AppLayout>{page}</AppLayout>;

export default CheckoutPage;