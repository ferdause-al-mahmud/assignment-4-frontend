import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "@/pages/home/Home";
import Login from "@/pages/authentication/Login";
import SignUp from "@/pages/authentication/SignUp";
import BikeDetails from "@/components/cards/BikeDetails";
import AllProducts from "@/pages/all-products/AllProducts";
import AboutUs from "@/pages/about-us/AboutUs";
import NotFound from "@/components/NotFound";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "@/pages/dashboard/Dashboard";
import DashboardHomePage from "@/pages/dashboard/DashboardHomePage";
import Profile from "@/pages/dashboard/sidebar/customerSidebar/Profile";
import TrackMyOrder from "@/pages/dashboard/sidebar/customerSidebar/TrackMyOrder";
import AdminRoute from "./AdminRoute";
import Users from "@/pages/dashboard/sidebar/adminSidebar/Users";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
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
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <DashboardHomePage />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "order",
        element: (
          <PrivateRoute>
            <TrackMyOrder />
          </PrivateRoute>
        ),
      },

      // Admin Routtes
      {
        path: "users",
        element: (
          <AdminRoute>
            <Users />
          </AdminRoute>
        ),
      },
      // {
      //     path: 'bikes',
      //     element: <AdminRoute><Bikes /></AdminRoute>
      // },
      // {
      //     path: 'add-bike',
      //     element: <AdminRoute><CreateBike /></AdminRoute>
      // },
      // {
      //     path: 'orders',
      //     element: <AdminRoute><Orders /></AdminRoute>
      // },
    ],
  },
]);

export default routes;
