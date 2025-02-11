import { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function RegsiterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signing up with:", name, email, password);
  };

  return (
    <div className="flex min-h-screen lg:flex-row w-full bg-white overflow-hidden">
      {/* Left Side: Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white/60 backdrop-blur-lg p-8 sm:p-12">
        <div className="w-full max-w-md">
          <h2 className="uppercase text-3xl font-bold text-gray-900 text-center mb-6">
            SignUp
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Please enter your details to create an account:
          </p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stick focus:border-transparent transition-all placeholder-gray-400"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stick focus:border-transparent transition-all placeholder-gray-400"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                autoComplete="new-password"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stick focus:border-transparent transition-all placeholder-gray-400"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

            {/* Terms and Conditions */}
            <div className="flex items-center text-sm">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                required
                className="h-4 w-4 text-stick border-gray-300 rounded focus:ring-stick"
              />
              <label htmlFor="terms" className="ml-2 text-gray-700">
                I agree to the terms and conditions
              </label>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full py-3 px-4 bg-stick text-white font-semibold rounded-lg hover:bg-stick/90 focus:outline-none focus:ring-2 focus:ring-stick focus:ring-offset-2 transition-all"
            >
              Sign up
            </button>

            {/* Sign In Link */}
            <div className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/signin"
                className="text-stick hover:text-stick/90 hover:underline"
              >
                Signin
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <img
          className="w-full h-full object-cover"
          src="../../public/unnamed-1-20.jpg"
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

export default RegsiterPage;
