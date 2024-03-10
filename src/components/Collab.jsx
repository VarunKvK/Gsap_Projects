import React from 'react'

function Collab() {
  const image_dir=[
    "src/assets/Collab/nike.png",
    "src/assets/Collab/hoodie.png",
    "src/assets/Collab/yeezy.png",
    "src/assets/Collab/pug.png",
    "src/assets/Collab/3d-render.png",
    "src/assets/Collab/south.png",
    "src/assets/Collab/street.png",
    "src/assets/Collab/china.png",
    "src/assets/Collab/b&w.png",
  ]
  return (
    <div className='w-full p-[24px]' id='colab_ccontainer'>
        <div className="w-full" id="collab_container">
          <h1 className="text-[96px] text-[#E04C4C] ">Collab with Cold</h1>
        </div>
        <div className="w-full flex gap-[2rem]" id="image_reel">
          {image_dir.map((image)=>{
          return <img src={image} alt="" className="w-full h-full object-cover" id="" />
          })}
        </div>
    </div>
  )
}

export default Collab