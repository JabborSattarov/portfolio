import { NavLink } from "react-router-dom";
import "./navbar.css"
export const Navbar = () => {
   return (
     <>
       <nav className="navbar">
         <NavLink className="navbar_item" end to="/">Home</NavLink>
         <NavLink className="navbar_item" to="/about">About</NavLink>
         <NavLink className="navbar_item" to="/experience">Projects</NavLink>
         <NavLink className="navbar_item" to="/contact">Contact</NavLink>
       </nav>
     </>
   );
}