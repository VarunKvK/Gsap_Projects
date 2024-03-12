import React from 'react'
import RedGas from '../assets/Home/RedGas.webp'
import { useEffect,useRef } from 'react'
import {gsap} from "gsap"
import {headerArrival,subheaderArrival} from "./Pageanimation"

function Header({timeline}) {
  const headeref=useRef()
  const subheader1ref=useRef()
  const subheader2ref=useRef()
  const imageref=useRef()
  useEffect(()=>{
    timeline &&
    timeline.add(headerArrival(headeref),2,subheaderArrival(subheader1ref,subheader2ref,imageref))
  })
  return (
    <div className='px-[24px] grid grid-row-3 w-full'>
        <div className="m-[-4rem] relative top-[100px] opacity-0" id='tag_line' ref={headeref}>
            <h1 className="text-[272px] text-[#EF4C4C] text-center" id='tag_text'>*Turn-Cold*</h1>
        </div>
        <div className="grid grid-rows-2 mb-4" id='smaller_tags_component'>
            <p className="opacity-0 relative text-[24px] text-[#EF4C4C]" id="tag_1" ref={subheader1ref}>A place where you meet apparels you desired</p>
            <p className="opacity-0 relative text-[24px] text-[#EF4C4C] text-right" id="tag_2" ref={subheader2ref}>Wide range of clothing styles to fit your style</p>
        </div>
        <div className="w-full opacity-0 relative top-[400px]" id="image_component" ref={imageref}>
            <img src={RedGas} className='w-full h-full object-cover relative' alt="Img_red_gas" />
        </div>
    </div>
  )
}

export default Header