import React from 'react'
import RedGas from '../assets/RedGas.webp'

function Header() {
  return (
    <div className='px-[24px] w-full'>
        <div className="m-[-4rem]" id='tag_line'>
            <h1 className="text-[272px] text-[#EF4C4C] text-center" id='tag_text'>*Turn-Cold*</h1>
        </div>
        <div className="grid grid-rows-2 mb-4" id='smaller_tags_component'>
            <p className="text-[24px] text-[#EF4C4C]" id="tag_1">A place where you meet apparels you desired</p>
            <p className="text-[24px] text-[#EF4C4C] text-right" id="tag_2">Wide range of clothing styles to fit your style</p>
        </div>
        <div className="w-full" id="image_component">
            <img src={RedGas} className='w-full h-full object-cover relative' alt="Img_red_gas" />
        </div>
    </div>
  )
}

export default Header