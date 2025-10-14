import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Landing from "./private/pages/landing";
import Week01 from "./private/pages/week-01";
import Week02 from "./private/pages/week-02";
import Week03 from "./private/pages/week-03";
import Week04 from "./private/pages/week-04";
import Week05 from "./private/pages/week-05";
import Week06 from "./private/pages/week-06";
import Week07 from "./private/pages/week-07";
import Week08 from "./private/pages/week-08";
import Week09 from "./private/pages/week-09";
import Week10 from "./private/pages/week-10";   
import Week11 from "./private/pages/week-11";
// import lesson from "./private/pages/Lesson";
//make sure that the paths are correct -> Route path="/lessons/week-11"
//not Route path="/week-11"

createRoot(document.getElementById("root")).render(
    <BrowserRouter> 
    <Layout />
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/lessons/week-01" element={<Week01 />} />
            <Route path="/lessons/week-02" element={<Week02 />} />
            <Route path="/lessons/week-03" element={<Week03 />} />
            <Route path="/lessons/week-04" element={<Week04 />} />
            <Route path="/lessons/week-05" element={<Week05 />} />
            <Route path="/lessons/week-06" element={<Week06 />} />
            <Route path="/lessons/week-07" element={<Week07 />} />
            <Route path="/lessons/week-08" element={<Week08 />} />
            <Route path="/lessons/week-09" element={<Week09 />} />
            <Route path="/lessons/week-10" element={<Week10 />} />  
            <Route path="/lessons/week-11" element={<Week11 />} />
           
        </Routes>
    </BrowserRouter>

);


