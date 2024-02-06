import {
  About,
  Cart,
  HomeLayout,
  Login,
  Register,
  Orders,
  Products,
  SingleProducts,
  Checkout,
  Error,
  Landing,
} from "./pages";

import { SinglePageError } from "./component";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

//loaders

import { loader as landingLoader } from "./pages/Landing";
import { loader as singleProductLoader } from "./pages/SingleProducts";
import { loader as productsLoader } from "./pages/Products";
import { loader as checkoutLoader } from "./pages/Checkout";
import { loader as ordersLoader } from "./pages/Orders";

//actions

import { action as registerAction } from "./pages/Register";
import { action as loginrAction } from "./pages/Login";
import { action as checkoutAction } from "./component/CheckoutForm";

import { store } from "./utils/Store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoader,
      },
      {
        path: "products",
        element: <Products />,
        errorElement: <SinglePageError />,
        loader: productsLoader,
      },
      {
        path: "products/:id",
        element: <SingleProducts />,
        loader: singleProductLoader,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "checkout", 
        element: <Checkout />,
        loader: checkoutLoader(store),
        action: checkoutAction(store),
      },
      {
        path: "orders",
        element: <Orders />,
        loader: ordersLoader(store),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
    action: loginrAction(store),
  },
  {
    path: "/Register",
    element: <Register />,
    errorElement: <Error />,
    action: registerAction,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
