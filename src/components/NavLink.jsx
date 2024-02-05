import React from "react";
import { Link } from "react-router-dom";

export default function NavLink({ children, href, component, menuOpen, setMenuOpen }) {
  return (
    <div 
    onMouseEnter={()=> setMenuOpen(true)}
    onMouseLeave={()=> setMenuOpen(false)}
    className="group">
      <Link to={href} className="relative">{children}
      <span className=" absolute -bottom-2 -left-1 -right-1 h-[2px] 
      bg-red-200 scale-x-0 duration-300 origin-left
      group-hover:scale-x-100 ease-out"></span></Link>
      
    </div>
  );
}
