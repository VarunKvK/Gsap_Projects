import React from "react";
import { useEffect,useRef } from 'react'
import {gsap} from "gsap"
import {navArrival} from "./Pageanimation"

function Navbar({timeline}) {
  const navref=useRef(null)

  useEffect(() =>{
    timeline &&
    timeline.add(navArrival(navref),2)
  },[timeline])
  return (
    <div
      id="nav"
      className="text-[#EF4C4C] flex items-center justify-between px-[24px] py-[16px] relative -top-[100px] opacity-0"
      ref={navref}
    >
      <div id="nav_logo_div" className="">
        <a id="nav_logo_link" href="" className="">
          *Cold
        </a>
      </div>
      <div id="nav_link_component" className="flex justify-center">
        <div id="nav_link_div" className="flex justify-end px-[40px] p-2">
          <ul className="flex" id="ul_links">
            <li className="mx-4" id="new_arrivals_links">
              <a href="" className="">
                New Arrivals
              </a>
            </li>
            <li className="mx-4" id="categories_links">
              <a href="" className="">
                Categories
              </a>
            </li>
            <li className="mx-4" id="about_links">
              <a href="" className="">
                About Us
              </a>
            </li>
          </ul>
        </div>
        <div className="border-[1px] p-2 rounded-[50px] border-[#EF4C4C]" id="cta_component">
          <a href="" id="cta_link_component">Become member</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
