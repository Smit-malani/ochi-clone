import React, { useState } from 'react'
import {motion, useAnimation} from 'framer-motion'

function Featured() {

    const cards = [useAnimation(), useAnimation(), useAnimation(), useAnimation(), useAnimation(), useAnimation()]

    function handleHover(index){
       cards[index].start({y: "0"})
    }

    function handleHoverEnd(index){
        cards[index].start({y: "100%"})
    }

  return (
    <div className='w-full min-h-screen bg-[#f1f1f1]'>
        <div className='pt-28 pb-9 px-12 border-b-[2px] border-zinc-300'>
            <h1 className='text-5xl'>Featured projects</h1>
        </div>
        <div className='flex- flex-col h-full'>
            <div className='w-full flex items-center gap-4 px-12 mt-9 relative mb-14'>
                <div className='w-1/2 miv-h-[90vh] flex flex-col'>
                    <div className='text flex items-center justify-start gap-1'>
                        <div className='h-[9px] w-[9px] rounded-full  bg-[#212121]'></div>
                        <h2 className='text-sm uppercase'>Cardboard Spaceship</h2>
                    </div>
                    <motion.div onHoverStart={()=>handleHover(0)} onHoverEnd={()=> handleHoverEnd(0)} className='w-full h-[90%] mt-4 relative'>
                        <h1 className='uppercase text-[80px] tracking-tighter absolute w-[150%] overflow-hidden  -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 font-bold left-full text-[#CDEA68]'>
                        {"CARDBOARD SPACESHIP".split('').map((items, index)=><motion.span initial={{y: "100%"}} animate={cards[0]} transition={{ease: [0.22, 1, 0.36, 1], delay: index*0.02, duration:0.3}} className='inline-block leading-[7vw]' key={index}>{items}</motion.span>)}
                        </h1>
                        <div className='w-full h-full rounded-xl overflow-hidden'>
                            <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" alt="" />
                        </div>
                    </motion.div>
                    <div className='flex text-sm items-center gap-3 opacity-80 mt-7'>
                        <h1 className='border-2 border-[#5e5e5e] py-1 px-2 rounded-full'>BRANDED TEMPLATE</h1>
                        <h1 className='border-2 border-[#5e5e5e] py-1 px-2 rounded-full'>SALES DECK</h1>
                        <h1 className='border-2 border-[#5e5e5e] py-1 px-2 rounded-full'>SOCIAL MEDIA TEMPLATE</h1>
                    </div>
                </div>
                <div className='w-1/2 min-h-[90vh]'>
                    <div className='flex items-center justify-start gap-1'>
                        <div className='h-[9px] w-[9px] rounded-full  bg-[#212121]'></div>
                        <h2 className='text-sm uppercase'>AH2 & Matt Horn</h2>
                    </div>
                    <motion.div  onHoverStart={()=>handleHover(1)} onHoverEnd={()=> handleHoverEnd(1)} className='w-full h-[90%] mt-4 relative'>
                        <h1 className='uppercase text-[80px] tracking-tighter absolute w-[122%] overflow-hidden  translate-x-1/2 top-1/2 -translate-y-1/2 z-20 font-bold right-full text-[#CDEA68]'>
                        {
                            "AH2 & Matt Horn".split('').map((items, index)=><motion.span initial={{y: "100%"}} animate={cards[1]} transition={{ease: [0.22, 1, 0.36, 1], delay: index*0.02, duration:0.3}} className='inline-block  leading-[7vw]' key={index}>{items}</motion.span>)
                        }
                        </h1>
                        <div className='w-full h-full rounded-xl overflow-hidden'>
                            <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png" alt="" />
                        </div>
                    </motion.div>
                    <div className='text-sm opacity-80 mt-7 flex'>
                        <h1 className='border-2 border-[#5e5e5e] py-1 px-2 rounded-full'>PITCH DECK</h1>
                    </div>
                </div>
            </div>
            <div className='w-full flex items-center gap-4 px-12 mt-9 relative mb-14'>
                <div className='w-1/2 miv-h-[90vh] flex flex-col'>
                    <div className='text flex items-center justify-start gap-1'>
                        <div className='h-[9px] w-[9px] rounded-full  bg-[#212121]'></div>
                        <h2 className='text-sm uppercase'>Fyde</h2>
                    </div>
                    <motion.div  onHoverStart={()=>handleHover(2)} onHoverEnd={()=> handleHoverEnd(2)} className='w-full h-[90%] mt-4 relative'>
                        <h1 className='uppercase text-[80px] w-[15vw] overflow-hidden tracking-tighter absolute -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 font-bold left-full text-[#CDEA68]'>
                        {"FYDE".split('').map((items, index)=><motion.span initial={{y: "100%"}} animate={cards[2]} transition={{ease: [0.22, 1, 0.36, 1], delay: index*0.02, duration:0.3}}  className='inline-block leading-[7vw]' key={index}>{items}</motion.span>)}
                        </h1>
                        <div className='w-full h-full rounded-xl overflow-hidden'>
                            <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" alt="" />
                        </div>
                    </motion.div>
                    <div className='flex text-sm items-center gap-3 opacity-80 mt-7'>
                        <h1 className='border-2 border-[#5e5e5e] py-1 px-2 rounded-full'>AUDIT</h1>
                        <h1 className='border-2 border-[#5e5e5e] py-1 px-2 rounded-full'>SALES DECK</h1>
                        <h1 className='border-2 border-[#5e5e5e] py-1 px-2 rounded-full'>COPYWRITING</h1>
                        <h1 className='border-2 border-[#5e5e5e] py-1 px-2 rounded-full'>SLIDES DESIGN</h1>
                    </div>
                </div>
                <div className='w-1/2 min-h-[90vh]'>
                    <div className='flex items-center justify-start gap-1'>
                        <div className='h-[9px] w-[9px] rounded-full  bg-[#212121]'></div>
                        <h2 className='text-sm uppercase'>Vise</h2>
                    </div>
                    <motion.div onHoverStart={()=>handleHover(3)} onHoverEnd={()=> handleHoverEnd(3)} className='w-full h-[90%] mt-4 relative'>
                        <h1 className='uppercase text-[80px] w-[15vw] tracking-tighter overflow-hidden absolute translate-x-1/2 top-1/2 -translate-y-1/2 z-20 font-bold right-full text-[#CDEA68]'>
                        {
                            "VISE".split('').map((items, index)=><motion.span initial={{y: "100%"}} animate={cards[3]} transition={{ease: [0.22, 1, 0.36, 1], delay: index*0.02, duration:0.3}} className='inline-block leading-[7vw]' key={index}>{items}</motion.span>)
                        }
                        </h1>
                        <div className='w-full h-full rounded-xl overflow-hidden'>
                            <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" alt="" />
                        </div>
                    </motion.div>
                    <div className='text-sm opacity-80 mt-7 flex items-center gap-3'>
                        <h1 className='border-2 border-[#5e5e5e] py-1 px-2 rounded-full'>PITCH DECK</h1>
                        <h1 className='border-2 border-[#5e5e5e] py-1 px-2 rounded-full'>COMPANY PRESENTATION</h1>
                    </div>
                </div>
            </div>
            <div className='w-full flex items-center gap-4 px-12 mt-9 relative'>
                <div className='w-1/2 miv-h-[90vh] flex flex-col'>
                    <div className='text flex items-center justify-start gap-1'>
                        <div className='h-[9px] w-[9px] rounded-full  bg-[#212121]'></div>
                        <h2 className='text-sm uppercase'>Trawa</h2>
                    </div>
                    <motion.div onHoverStart={()=>handleHover(4)} onHoverEnd={()=> handleHoverEnd(4)}  className='w-full h-[90%] mt-4 relative'>
                        <h1 className='uppercase text-[80px] overflow-hidden flex tracking-tighter absolute -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 font-bold left-full text-[#CDEA68]'>
                        {"TRAWA".split('').map((items, index)=><motion.span initial={{y: "100%"}} animate={cards[4]} transition={{ease: [0.22, 1, 0.36, 1], delay: index*0.02, duration:0.3}} className='inline-block  leading-[7vw]' key={index}>{items}</motion.span>)}
                        </h1>
                        <div className='w-full h-full rounded-xl overflow-hidden'>
                            <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg" alt="" />
                        </div>
                    </motion.div>
                    <div className='flex text-sm items-center gap-3 opacity-80 mt-7'>
                        <h1 className='border-2 border-[#5e5e5e] py-1 px-2 rounded-full'>BRANDED IDENTITY</h1>
                        <h1 className='border-2 border-[#5e5e5e] py-1 px-2 rounded-full'>DESIGN RESEARCH</h1>
                        <h1 className='border-2 border-[#5e5e5e] py-1 px-2 rounded-full'>INVESTOR DESK</h1>
                    </div>
                </div>
                <div className='w-1/2 min-h-[90vh]'>
                    <div className='flex items-center justify-start gap-1'>
                        <div className='h-[9px] w-[9px] rounded-full  bg-[#212121]'></div>
                        <h2 className='text-sm uppercase'>Premium Blend</h2>
                    </div>
                    <motion.div onHoverStart={()=>handleHover(5)} onHoverEnd={()=> handleHoverEnd(5)}   className='w-full h-[90%] mt-4 relative'>
                        <h1 className='uppercase text-[80px] overflow-hidden flex tracking-tighter w-[106%] absolute translate-x-1/2 top-1/2 -translate-y-1/2 z-20 font-bold right-full text-[#CDEA68]'>
                        {
                            "PREMIUM BLEND".split('').map((items, index)=><motion.span initial={{y: "100%"}} animate={cards[5]} transition={{ease: [0.22, 1, 0.36, 1], delay: index*0.02, duration:0.3}} className='inline-block  leading-[7vw]' key={index}>{items}</motion.span>)
                        }
                        </h1>
                        <div className='w-full h-full rounded-xl overflow-hidden'>
                        <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png" alt="" />
                        </div>
                    </motion.div>
                    <div className='text-sm opacity-80 mt-7 flex'>
                        <h1 className='border-2 border-[#5e5e5e] py-1 px-2 rounded-full'>BRANDED TEMPLATE</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full flex items-center justify-center py-20'>
            <div className='bg-[#211F21] px-7 py-4 rounded-full text-sm text-white uppercase flex items-center gap-5'>
                <h1>view all case studies</h1>
                <div className='h-2 w-2 bg-white rounded-full'></div>
            </div>
        </div>
        
    </div>
  )
}

export default Featured