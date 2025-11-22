import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Phones from "./pages/Phones";
import Phone from "./pages/Phone";
import Tablets from "./pages/Tablets";
import Accessories from "./pages/Accessories";
import Favorites from "./pages/Favorites";
import Cart from "./pages/Cart";
import "./index.css"; // Seu arquivo CSS principal do Tailwind
import { CartProvider } from "./contexts/CartProvider";
import { FavoritesProvider } from "./contexts/FavoritesProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "phones", element: <Phones /> },
      { path: "tablets", element: <Tablets /> },
      { path: "accessories", element: <Accessories /> },
      { path: "favorites", element: <Favorites /> },
      { path: "cart", element: <Cart /> },
      { path: "phones/:id", element: <Phone /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <CartProvider>
    <FavoritesProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </FavoritesProvider>
  </CartProvider>
);
