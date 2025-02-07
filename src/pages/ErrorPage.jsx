import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-100 text-gray-800 px-4">
      <h1 className="text-6xl font-bold text-stick">404</h1>
      <p className="text-xl mt-4">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        to='/'
        className="mt-6 px-4 py-2 bg-stick text-white rounded-lg active:scale-90"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
