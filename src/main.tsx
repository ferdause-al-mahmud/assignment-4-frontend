import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import routes from "./routes/route";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
);
