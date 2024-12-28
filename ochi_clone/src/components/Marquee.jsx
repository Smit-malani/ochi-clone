import React from 'react'

function Marquee() {

  return (
    <div className='w-full py-20 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl'>
        <div className='text border-t-2 border-b-2 border-[#3E7870] text-white flex items-center gap-16 whitespace-nowrap pb-9 overflow-hidden'>
            <h1 className='text-[24vw] font-bold uppercase leading-[14rem] tracking-tighter'>we are ochi</h1>
            <h1 className='text-[24vw] font-bold uppercase leading-[14rem] tracking-tighter'>we are ochi</h1>
        </div>
    </div>
  )
}

export default Marquee