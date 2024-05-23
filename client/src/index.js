import React from "react";
import App from "./components/App";
import "./index.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            // {
            //     path: '/customer/products',
            //     element: <ProductList />
            // },
        ]
    }
])






const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RouterProvider router={router} />);
