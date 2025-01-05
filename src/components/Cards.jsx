import React from 'react'

function Cards() {

  return (
    <div data-scroll data-scroll-speed=".3" className='border-t-2 bg-[#f1f1f1] border-zinc-300 -mt-12 w-full pt-24'>
        <div className='w-full px-12 flex items-center gap-4 bg-[#f1f1f1]'>
            <div className='w-1/2 h-80 rounded-xl relative bg-[#004D43] '>
                <img className='absolute left-1/2 top-1/2 w-[25%] -translate-x-[50%] -translate-y-[50%]' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <div className='w-full h-full items-end flex pb-7 pl-7 text-[#CDEA68] text-sm '>
                    <p className='border-[1px] border-[#CDEA68] px-3 py-1 rounded-full'>©2019-2022</p>
                </div>
            </div>
            <div className='w-1/2 h-80 flex items-center gap-4'>
                <div className='w-1/2 h-full relative bg-[#212121] rounded-xl'>
                    <img className='absolute left-1/2 top-1/2 w-[50%] -translate-x-[50%] -translate-y-[50%]' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    <div className='w-full h-full items-end flex pb-7 pl-7 text-white text-sm '>
                        <p className='border-[1px] border-white px-3 py-1 rounded-full uppercase'>rating 5.0 in clutch</p>
                    </div>
                </div>
                <div className='w-1/2 h-full relative bg-[#212121] rounded-xl'>
                    <img className='absolute left-1/2 top-1/2 w-[35%] -translate-x-[50%] -translate-y-[50%]' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                    <div className='w-full h-full items-end flex pb-7 pl-7 text-white text-sm '>
                        <p className='border-[1px] border-white px-3 py-1 rounded-full uppercase'>Business bootcamp alumni</p>
                    </div>
                </div>
        
            </div>
        </div>
    </div>
  )
}

export default Cards