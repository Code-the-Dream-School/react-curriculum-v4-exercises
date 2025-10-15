import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as Pages from "./private/pages";
import Layout from "./layout";
// import lesson from "./private/pages/Lesson";
//make sure that the paths are correct -> Route path="/lessons/week-11"
//not Route path="/week-11"

createRoot(document.getElementById("root")).render(
    <BrowserRouter> 
    <Layout />
        <Routes>
            <Route path="/" element={<Pages.Landing />} />
            <Route path="/lessons/week-01" element={<Pages.Week01 />} />
            <Route path="/lessons/week-02" element={<Pages.Week02 />} />
            <Route path="/lessons/week-03" element={<Pages.Week03 />} />
            <Route path="/lessons/week-04" element={<Pages.Week04 />} />
            <Route path="/lessons/week-05" element={<Pages.Week05 />} />
            <Route path="/lessons/week-06" element={<Pages.Week06 />} />
            <Route path="/lessons/week-07" element={<Pages.Week07 />} />
            <Route path="/lessons/week-08" element={<Pages.Week08 />} />
            <Route path="/lessons/week-09" element={<Pages.Week09 />} />
            <Route path="/lessons/week-10" element={<Pages.Week10 />} />  
            <Route path="/lessons/week-11" element={<Pages.Week11 />} />
           
        </Routes>
    </BrowserRouter>

);


