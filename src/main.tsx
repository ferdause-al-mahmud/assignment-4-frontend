import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router";
import { Provider } from "react-redux";
import routes from "./routes/route";
import { Toaster } from "react-hot-toast";
import store from "./redux/store";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={routes} />
    <Toaster />
  </Provider>
);
