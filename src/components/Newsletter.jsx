import React from 'react'

function Newsletter() {
  return (
    <div className='p-[24px] w-full' id='newletter_container'>
        <div className="bg-[#E04C4C] p-[50px] flex flex-col gap-[32px] justify-center items-center" id="container">
            <h1 className="text-[#fff] text-[64px] text-center">
                Subscribe to our newsletter
            </h1>
            <a href="" className="h-[62px] w-[393px] border-[#fff] border-[1px] text-[#FFF] text-[24px] px-[32px] py-[12px] flex items-center justify-center rounded-[5rem] " id="">Become cold member</a>
        </div>
    </div>
  )
}

export default Newsletter