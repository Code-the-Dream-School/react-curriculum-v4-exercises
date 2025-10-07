import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./private/pages/landing";
// import lesson from "./private/pages/Lesson";

createRoot(document.getElementById("root")).render(
    <BrowserRouter> 
        <Routes>
            <Route path="/" element={<Landing />} />
        </Routes>
    </BrowserRouter>
    
);


