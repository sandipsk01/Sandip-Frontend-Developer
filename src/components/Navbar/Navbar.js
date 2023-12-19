import React from "react";
import icon from "./logo.png";
import menu from "./menu.png";
import "./Navbar.css"

function Navbar() {
  return (
    <nav className="flex justify-between p-5 text-white absolute left-0 right-0 z-10 items-center font-bold text-[1vw] cursor-pointer">
      <div className="aspect-w-4 aspect-h-1 w-[20vw]">
        <img src={icon} alt="Spacex" />
      </div>

      <ul className="hidden space-x-4 md:flex">
        <li className="nav-item">FALCON 9</li>
        <li className="nav-item">FALCON HEAVY</li>
        <li className="nav-item">DRAGON</li>
        <li className="nav-item">STARSHIP</li>
        <li className="nav-item">HUMAN SPACELIGHT</li>
        <li className="nav-item">RIDESHARE</li>
        <li className="nav-item">STARSHIELD</li>
        <li className="nav-item">STARSLINK</li>
      </ul>

      <ul className="flex space-x-4">
        <li className="nav-item">SHOP</li>
        <li>
          <img className="w-[1vw] pt-[0.3vw]" src={menu} alt="menu" />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
