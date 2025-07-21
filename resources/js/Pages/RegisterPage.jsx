import { Link, useForm } from "@inertiajs/react";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import ToastNotification from "@/Pages/ToastNotification"

function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { data, setData, post, processing, errors, reset } = useForm({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    password_confirmation: "",
    terms: false,
  });

  const handleInputChange = (e) => {
    const { name, value, checked, type } = e.target;
    setData(name, type === "checkbox" ? checked : value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/register', {
      onSuccess: () => reset('password', 'password_confirmation'),
    });
  };

  return (
    <div className="flex min-h-screen lg:flex-row w-full bg-white overflow-hidden">
      <ToastNotification />
      {/* Left Side: Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white/60 backdrop-blur-lg p-8 sm:p-12">
        <div className="w-full max-w-md">
          <h2 className="uppercase text-3xl font-bold text-gray-900 text-center mb-6">
            SignUp
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Please enter your details to create an account:
          </p>
          
          {errors.global && (
            <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
              {errors.global}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* First Name */}
            <div>
              <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-2">
                First Name
              </label>
              <input
                id="firstname"
                name="firstname"
                type="text"
                autoComplete="given-name"
                required
                className={`w-full px-4 py-3 border ${errors.firstname ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-stick focus:border-transparent transition-all placeholder-gray-400`}
                placeholder="Enter your first name"
                value={data.firstname}
                onChange={handleInputChange}
              />
              {errors.firstname && (
                <p className="mt-2 text-sm text-red-600">{errors.firstname}</p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-2">
                Last Name
              </label>
              <input
                id="lastname"
                name="lastname"
                type="text"
                autoComplete="family-name"
                required
                className={`w-full px-4 py-3 border ${errors.lastname ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-stick focus:border-transparent transition-all placeholder-gray-400`}
                placeholder="Enter your last name"
                value={data.lastname}
                onChange={handleInputChange}
              />
              {errors.lastname && (
                <p className="mt-2 text-sm text-red-600">{errors.lastname}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-stick focus:border-transparent transition-all placeholder-gray-400`}
                placeholder="Enter your email"
                value={data.email}
                onChange={handleInputChange}
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                required
                className={`w-full px-4 py-3 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-stick focus:border-transparent transition-all placeholder-gray-400`}
                placeholder="Enter your password"
                value={data.password}
                onChange={handleInputChange}
              />
              <button
                type="button"
                className="absolute right-3 top-10 text-gray-500 hover:text-gray-700 transition-colors"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaRegEyeSlash className="h-5 w-5" />
                ) : (
                  <FaRegEye className="h-5 w-5" />
                )}
              </button>
              {errors.password && (
                <p className="mt-2 text-sm text-red-600">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <input
                id="password_confirmation"
                name="password_confirmation"
                type={showConfirmPassword ? "text" : "password"}
                autoComplete="new-password"
                required
                className={`w-full px-4 py-3 border ${errors.password_confirmation ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-stick focus:border-transparent transition-all placeholder-gray-400`}
                placeholder="Confirm your password"
                value={data.password_confirmation}
                onChange={handleInputChange}
              />
              <button
                type="button"
                className="absolute right-3 top-10 text-gray-500 hover:text-gray-700 transition-colors"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <FaRegEyeSlash className="h-5 w-5" />
                ) : (
                  <FaRegEye className="h-5 w-5" />
                )}
              </button>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  checked={data.terms}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-stick border-gray-300 rounded focus:ring-stick"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="font-medium text-gray-700">
                  I agree to the terms and conditions
                </label>
                {errors.terms && (
                  <p className="mt-2 text-sm text-red-600">{errors.terms}</p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={processing}
              className={`w-full py-3 px-4 bg-black text-white font-semibold rounded-lg hover:bg-stick/90 focus:outline-none focus:ring-2 focus:ring-stick focus:ring-offset-2 transition-all ${processing ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
              {processing ? 'Processing...' : 'Sign up'}
            </button>

            {/* Login Link */}
            <div className="text-center text-sm text-gray-600">
              Already have an account?{' '}
              <Link
                href="/login"
                className="text-stick hover:text-stick/90 hover:underline"
              >
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <img
          className="w-full h-full object-cover"
          src="/storage/unnamed-1-20.jpg"
          alt="Sign Up"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
          <p className="text-white text-lg font-semibold">
            "Fashion is the armor to survive the reality of everyday life."
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;