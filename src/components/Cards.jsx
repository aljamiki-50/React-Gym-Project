import React from 'react'
import { Link } from 'react-router-dom'

function Cards({img,title,p,link}) {
  return (
    <div>
    <Link to={link} className=' hover:bg-white hover:shadow-xl hover:ring-1 hover:ring-black py-16  flex flex-col items-center gap-y-4 Poppins antialiased  rounded-xl
    gx:ring-1
    s:ring-1
     '>
       <div>
       <img src={img} alt="" />
       </div>
       <h1 className=' text-black font-bold text-xl'>{title}</h1>
       <div>
        <p className=' text-[#474F62]'>{p}</p>
       </div>
    </Link>
    </div>
  )
}

export default Cards
