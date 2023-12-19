import React from "react";
import banner from "./Banner.jpg"
const Banner =()=>{ 
    return(
        <div>
            <img src={banner} className="w-[100vw] h-[100vh] z-1"  alt="banner" />
            <div className="flex absolute z-2 text-white bottom-[10vw] left-[4vw] flex-col justify-start items-start text-left">
                <div className="text-[1.5vw]">UPCOMING LAUNCH</div>
                <div className="font-bold text-[3.5vw]">USSF-52 MISSION</div>
                <button className="font-bold px-[3vw] py-[1vw] border-2 border-white mt-6">LEARN MORE</button>
            </div>
        </div>
    ) 
}

export default Banner;