import React, { useEffect, useState } from 'react'

function TheProject() {

    const[rotate, setRotate] = useState(0)
    
        useEffect(()=>{
            window.addEventListener('mousemove', (e)=>{
                let mouseX = e.clientX
                let mouseY = e.clientY
    
                let deltaX = mouseX-window.innerWidth/2
                let deltaY = mouseY-window.innerHeight/2
    
                var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI)
                setRotate(angle-180)                
            })
        })

  return (
    <div  data-scroll data-scroll-speed= "1" className='w-full -mt-60  bg-[#CDEA68] flex items-center justify-center'>
        <div className='w-full relative py-10 h-full flex flex-col items-center justify-center'>
            <div className='text-[13vw] text-[#212121] font-bold tracking-tighter leading-[150px] uppercase'>
                Ready
            </div>
            <div className='text-[13vw] text-[#212121] font-bold tracking-tighter leading-[150px] uppercase'>
                to start
            </div>
            <div className='text-[13vw] text-[#212121] font-bold tracking-tighter leading-[150px] uppercase'>
                the project?
            </div>
            <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex items-center gap-10'>
                <div className='w-[15vw] h-[15vw] rounded-full bg-white flex items-center justify-center'>
                    <div className='w-2/3 h-2/3 rounded-full bg-[#1e1e1e] relative'>
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line w-full p-1 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                            <div className='w-5 h-5 rounded-full bg-white '></div>
                        </div>
                    </div>
                </div>
                <div className='w-[15vw] h-[15vw] rounded-full bg-white flex items-center justify-center'>
                    <div className='w-2/3 h-2/3 rounded-full bg-[#1e1e1e] relative'>
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}}  className='line w-full p-1 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                            <div className='w-5 h-5 rounded-full bg-white '></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center mt-10'>
                <div className='bg-[#211F21] border-2 border-transparent px-7 py-4 rounded-full text-sm text-white uppercase flex items-center gap-5'>
                    <h1>start the project</h1>
                    <div className='h-2 w-2 bg-white rounded-full'></div>
                </div>
                <h6 className='text-lg uppercase py-5'>or</h6>
                <div className='bg-transparent border-2 border-[#212121] px-7 py-4 rounded-full text-sm text-[#212121] uppercase flex items-center gap-5'>
                    <h1>hello@ochi.design</h1>
                    <div className='h-2 w-2 bg-[#212121] rounded-full'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TheProject