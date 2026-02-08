import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import About from "../pages/about/about";
import Experience from "../pages/experience/experience";
import Contact from "../pages/contact/contact";

export const AppRouter = () => {
   return (

      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience/>} />
            <Route path="/contact" element={<Contact/>} />
         </Routes>
      </BrowserRouter>
   )
}
