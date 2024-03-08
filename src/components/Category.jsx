import React from "react";
import Sweat from "../assets/Category/Sweatshirt.png" 
function Category() {
  return (
    <div id="category_container" className="w-full p-[24px] grid grid-row-2">
      <div className="w-full" id="category_text_container">
        <h1 className="text-[#E04C4C] text-[64px] text-right">
          (Choose Category)
        </h1>
      </div>
      <div className="grid grid-cols-3" id="category_container">
        <div
          className="col-span-2 w-full text-[#E04C4C] text-[24px] grid grid-rows-5"
          id="category_link_container"
        >
          <a href="" className="" id="o_cat_link">
            Oversized T-Shirts
          </a>
          <a href="" className="text-right" id="o_cat_link">
            Cargo Pants and Joggers
          </a>
          <a href="" className="text-center" id="o_cat_link">
            Urban Shirts
          </a>
          <a href="" className="text-right" id="o_cat_link">
            Skatewear
          </a>
          <a href="" className="" id="o_cat_link">
            Hypebeasts
          </a>
        </div>
        <div className="w-[50%] justify-self-end" id="img_preview">
            <img src={Sweat} alt="Sweatshirt" className="object-cover w-full h-full"/>
        </div>
      </div>
    </div>
  );
}

export default Category;
