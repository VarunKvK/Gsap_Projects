import React from "react";
import Red from "../assets/NewArrivals/RedBoi.png";
import Freeze from "../assets/NewArrivals/Freezer.png";
import Dance from "../assets/NewArrivals/Dance.png";
import Blue from "../assets/NewArrivals/BlueCoat.png";

function Arrivals() {
  return (
    <div className="w-full p-[24px]" id="arrivals_container">
      <div className="" id="arrival_text_component">
        <h2 className="text-[#EF4C4C] text-[64px]" id="arrival_text">
          [New Arrival]
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-[16px]" id="image_container">
        <div className="" id="img_one">
          <img src={Red} className="object-cover w-full h-full" alt="RedBoi" />
        </div>
        <div className="grid grid-rows-2 gap-[16px]">
          <div className="" id="img_two">
            <img
              src={Dance}
              className="object-cover w-full h-full"
              alt="BlueBoi"
            />
          </div>
          <div className="" id="img_three">
            <img
              src={Freeze}
              className="object-cover w-full h-full"
              alt="FreezeBoi"
            />
          </div>
        </div>
        <div className="" id="img_three">
          <img
            src={Blue}
            className="object-cover w-full h-full"
            alt="FreezeBoi"
          />
        </div>
      </div>
    </div>
  );
}

export default Arrivals;
