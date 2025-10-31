import React from 'react'

function Stripe({val}) {
  return (
    <div className='w-[16.66%] px-5 py-5 border-[1.5px] border-l-0 border-zinc-600 flex items-center justify-between'>
        <img src={val.url} alt="" />
        <p className='font-semibold'>{val.num}</p>
    </div>
  )
}

export default Stripe