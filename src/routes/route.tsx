import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "@/pages/home/Home";
import Login from "@/pages/authentication/Login";
import SignUp from "@/pages/authentication/SignUp";
import BikeDetails from "@/components/cards/BikeDetails";
import AllProducts from "@/pages/all-products/AllProducts";
import AboutUs from "@/pages/about-us/AboutUs";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "/all-product",
        element: <AllProducts />,
      },
      {
        path: "/products/:productId",
        element: <BikeDetails />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
    ],
  },
]);

export default routes;
