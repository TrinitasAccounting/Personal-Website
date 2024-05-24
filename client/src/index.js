import React from "react";
import App from "./components/App";
import "./index.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProjectsList from "./components/ProjectsList";
import AboutPage from "./components/AboutPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/projects',
                element: <ProjectsList />
            },
            {
                path: '/aboutpage',
                element: <AboutPage />
            },
        ]
    }
])






const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RouterProvider router={router} />);
