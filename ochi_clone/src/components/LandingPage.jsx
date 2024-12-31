import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

function LandingPage() {
  return (
    <div className='w-full h-screen pt-1 '>
        <div className='textstructure mt-36 pl-12'>
            {["we create","Eye-opening","presentations"].map((item,index)=>{
                return <div key={index} className='masker'>
                  <div className='w-fit flex items-center overflow-hidden'>
                    {index === 1 && (<div className='w-[11vw] rounded-md mr-2 bg-green-600 h-[67px] mt-3'></div>)}
                    <h1 key={index} className='uppercase text-8xl leading-[85px] tracking-tighter font-bold opacity-85'>{item}</h1>
                  </div>
            </div>
            })}
        </div>
        <div className='border-t-[1px] border-zinc-400 mt-28 flex justify-between items-center px-12 py-4'>
            {["For public and private companies", "From the first pitch to IPO"].map((item,index)=><p key={index} className='opacity-80 tracking-tight'>{item}</p>)}
            <div className='start uppercase flex items-center gap-1'>
              <div className='text-[14px] border-2 rounded-full border-[#212121] px-4 py-[3px] opacity-80 tracking-tight'>Start the project</div>
              <div className='w-8 h-8 rounded-full border-[1px] border-[#212121] flex items-center justify-center text-lg'><GoArrowUpRight />
              </div>
          </div>
        </div> 
    </div>
  )
}

export default LandingPage