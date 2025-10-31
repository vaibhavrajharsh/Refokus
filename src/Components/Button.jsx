import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

const Button = ({title = "get started"}) => {
  return (
    <div className=' w-40 bg-zinc-100 text-black flex items-center justify-between px-4 py-2 rounded-full cursor-pointer'>
        <span className='font-normal text-sm'>{title}</span>
        <IoIosReturnRight/>

    </div>
  )
}

export default Button