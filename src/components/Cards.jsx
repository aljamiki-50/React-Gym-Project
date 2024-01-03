import React from 'react'

function Cards({img,title,p}) {
  return (
    <div>
    <div className=' hover:bg-white hover:shadow-xl hover:ring-1 hover:ring-black py-16  flex flex-col items-center gap-y-4 Poppins antialiased '>
       <div>
       <img src={img} alt="" />
       </div>
       <h1 className=' text-black font-bold text-xl'>{title}</h1>
       <div>
        <p className=' text-[#474F62]'>{p}</p>
       </div>
    </div>
    </div>
  )
}

export default Cards
