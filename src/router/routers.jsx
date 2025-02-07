import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import BlogsPage from "../pages/BlogsPage";
import ContactUsPage from "../pages/ContactUsPage";
import ReturnPolicyPage from "../pages/ReturnPolicyPage";
import ShippingPolicyPage from "../pages/ShippingPolicyPage";
import ErrorPage from "../pages/ErrorPage";
import Layout from "../Layout";
import AccessoriesPage from "../pages/AccessoriesPage";
import MenSunglassesPage from "../pages/MenSunglassesPage";
import WomenSunglassesPage from "../pages/WomenSunglassesPage";
import WomenEyeglassesPage from "../pages/WomeneyeglassesPage";
import MenEyeglassesPage from "../pages/MeneyeglassesPage";

export const router = createBrowserRouter([
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/",
    element: <Layout />, // Wrap routes with Layout
    children: [
      {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "blogs",
        element: <BlogsPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "mensunglasses",
        element: <MenSunglassesPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "womensunglasses",
        element: <WomenSunglassesPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "Accessories",
        element: <AccessoriesPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "meneyeglasses",
        element: <MenEyeglassesPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "womeneyeglasses",
        element: <WomenEyeglassesPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "contact",
        element: <ContactUsPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "returnpolicy",
        element: <ReturnPolicyPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "shippingpolicy",
        element: <ShippingPolicyPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
