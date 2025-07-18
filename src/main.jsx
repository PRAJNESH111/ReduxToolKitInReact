import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App.jsx";

import { store } from "./store/script";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
import { Provider } from "./react-redux.jsx";
import Wish from "./pages/Wish.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/wish",
        element: <Wish />,
      },
    ],
  },
]);
// console.log(store.getState());
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
