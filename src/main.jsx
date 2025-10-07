import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./private/pages/landing";
import Week01 from "./private/pages/week-01";
import Week11 from "./private/pages/week-11";
// import lesson from "./private/pages/Lesson";
//make sure that the paths are correct -> Route path="/lessons/week-11"
//not Route path="/week-11"

createRoot(document.getElementById("root")).render(
    <BrowserRouter> 
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/week-01" element={<Week01 />} />
            <Route path="/lessons/week-11" element={<Week11 />} />
           
        </Routes>
    </BrowserRouter>

);


