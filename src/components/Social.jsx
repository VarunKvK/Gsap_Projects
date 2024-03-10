import React from 'react'

function Social() {
  return (
    <div className='w-full p-[24px]' id='social_container'>
        <div className="w-full" id='social_text_container'>
            <h1 className="text-[#E04C4C] text-[96px] text-right">[We have socials]</h1>
        </div>
        <div className="w-full flex gap-4" id="links_container">
            <a href="https://www.instagram.com/kreative.jpg/" className="underline text-[#E04C4C] text-[16px]" id="">Instagram</a>
            <a href="https://www.instagram.com/kreative.jpg/" className="underline text-[#E04C4C] text-[16px]" id="">LinkedIn</a>
            <a href="https://www.instagram.com/kreative.jpg/" className="underline text-[#E04C4C] text-[16px]" id="">Facebook</a>
        </div>
    </div>
  )
}

export default Social