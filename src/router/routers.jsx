import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

// Lazy loading pages for better performance
const Layout = lazy(() => import("../Layout"));
const HomePage = lazy(() => import("../pages/HomePage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const BlogsPage = lazy(() => import("../pages/BlogsPage"));
const ContactUsPage = lazy(() => import("../pages/ContactUsPage"));
const ReturnPolicyPage = lazy(() => import("../pages/ReturnPolicyPage"));
const ShippingPolicyPage = lazy(() => import("../pages/ShippingPolicyPage"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));
const AccessoriesPage = lazy(() => import("../pages/AccessoriesPage"));
const MenSunglassesPage = lazy(() => import("../pages/MenSunglassesPage"));
const WomenSunglassesPage = lazy(() => import("../pages/WomenSunglassesPage"));
const WomenEyeglassesPage = lazy(() => import("../pages/WomenEyeglassesPage"));
const MenEyeglassesPage = lazy(() => import("../pages/MenEyeglassesPage"));

// Product components
import SingleProductManSunglasses from "../components/SingleProduct/SingleProductManSunglasses";
import SingleProductWomenSunglasses from "../components/SingleProduct/SingleProductWomenSunglasses";
import SingleProductAccessories from "../components/SingleProduct/SingleProductAccessories";
import SingleProductManEyeglasses from "../components/SingleProduct/SingleProductManEyeglasses";
import SingleProductWomenEyeglasses from "../components/SingleProduct/SingleProductWomenEyeglasses";
import CheckOutPage from "../pages/CheckOutPage";
import SigninPage from "../pages/SigninPage";
import RegisterPage from "../pages/RegisterPage";

export const router = createBrowserRouter([
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/",
    element: <Layout />, // Wrap routes with Layout
    children: [
      { path: "/", element: <HomePage />, errorElement: <ErrorPage /> },
      { path: "about", element: <AboutPage />, errorElement: <ErrorPage /> },
      { path: "blogs", element: <BlogsPage />, errorElement: <ErrorPage /> },
      {
        path: "/mensunglasses",
        element: <MenSunglassesPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/mensunglasses/:id",
        element: <SingleProductManSunglasses />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/womensunglasses",
        element: <WomenSunglassesPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/womensunglasses/:id",
        element: <SingleProductWomenSunglasses />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/accessories",
        element: <AccessoriesPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/accessories/:id",
        element: <SingleProductAccessories />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/meneyeglasses",
        element: <MenEyeglassesPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/meneyeglasses/:id",
        element: <SingleProductManEyeglasses />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/womeneyeglasses",
        element: <WomenEyeglassesPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/womeneyeglasses/:id",
        element: <SingleProductWomenEyeglasses />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/contact",
        element: <ContactUsPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/returnpolicy",
        element: <ReturnPolicyPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/shippingpolicy",
        element: <ShippingPolicyPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/chekout",
        element: <CheckOutPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/signin",
        element: <SigninPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
