import { Link, router, useForm } from "@inertiajs/react";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import ToastNotification from "@/Pages/ToastNotification"

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post("login", {
      onFinish: () => reset('password'),
    });
  };

  return (
    <div className="flex min-h-screen lg:flex-row w-full bg-white overflow-hidden">
      <ToastNotification />
      {/* Left Side: Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white/60 backdrop-blur-lg p-8 sm:p-12">
        <div className="w-full max-w-md">
          <h2 className="uppercase text-3xl font-bold text-gray-900 text-center mb-6">
            Login
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Please enter your e-mail and password:
          </p>

          {errors.email && (
            <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
              {errors.email}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
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
                onChange={(e) => setData('email', e.target.value)}
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                className={`w-full px-4 py-3 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-stick focus:border-transparent transition-all placeholder-gray-400`}
                placeholder="Enter your password"
                value={data.password}
                onChange={(e) => setData('password', e.target.value)}
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
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="remember"
                  checked={data.remember}
                  onChange={(e) => setData('remember', e.target.checked)}
                  className="h-4 w-4 text-stick border-gray-300 rounded focus:ring-stick"
                />
                <span className="text-gray-700">Remember me</span>
              </label>
              <Link
                href={"password.request"}
                className="text-stick hover:text-stick/90 hover:underline"
              >
                Forgot your password?
              </Link>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              disabled={processing}
              className={`w-full py-3 px-4 bg-black text-white font-semibold rounded-lg hover:bg-stick/90 focus:outline-none focus:ring-2 focus:ring-stick focus:ring-offset-2 transition-all ${processing ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
              {processing ? 'Logging in...' : 'Sign in'}
            </button>

            {/* Sign Up Link */}
            <div className="text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <Link
                href="register"
                className="text-stick hover:text-stick/90 hover:underline"
              >
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <img
          className="w-full h-full object-cover"
          src="/storage/Signin1.jpg"
          alt="Sign In"
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

export default LoginPage;