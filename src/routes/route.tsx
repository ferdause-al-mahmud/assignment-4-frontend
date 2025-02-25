import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "@/pages/home/Home";
import Login from "@/pages/authentication/Login";
import SignUp from "@/pages/authentication/SignUp";

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
    ],
  },
]);

export default routes;
