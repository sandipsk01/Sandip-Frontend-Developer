import React from "react";
import icon from "./logo.png";
import menu from "./menu.png";
function Navbar() {

    return (
        
        <nav className="flex justify-between p-5 text-white absolute left-0 right-0 z-10 items-center font-bold text-[1vw] cursor-pointer">
            <div className="aspect-w-4 aspect-h-1 w-[20vw]">
                <img src={icon} alt="Spacex" />
            </div>
            
                <ul className="hidden space-x-4 md:flex">
                    <li>FALCON 9</li>
                    <li>FALCON HEAVY</li>
                    <li>DRAGON</li>
                    <li>STARSHIP</li>
                    <li>HUMAN SPACELIGHT</li>
                    <li>RIDESHARE</li>
                    <li>STARSHIELD</li>
                    <li>STARSLINK</li>
                </ul>
            
                <ul className="flex space-x-4">
                    <li>SHOP</li>
                    <li><img className="w-[1vw] pt-[0.4vw]" src={menu} alt="menu"/></li>
                </ul>
            
        </nav>
        
    );
}

export default Navbar;