import React from "react";
import { createRoot, ReactDOM } from "react-dom/client";
import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";
import * as Pages from "./private/pages";
import router from "./private/routes";

createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);


