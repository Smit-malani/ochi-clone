import React from 'react'

function About() { 
  return (
    <div className='w-full pt-20 pb-10 min-h-screen rounded-tl-3xl rounded-tr-3xl -mt-12  bg-[#CDEA68]'>
        <div  className='border-b-[1px] border-[#3E7870] px-12 pb-12'>
            <h1 className='text-[55px] font-normal leading-[3.65rem] tracking-tighter'>Ochi is a strategic presentation agency for forward-thinking businesses that need to <span className=' underline'>raise funds</span>, <span className=' underline'>sell products</span>, <span className=' underline'>explain complex ideas</span>, and <span className=' underline'>hire great people</span>.</h1>
        </div>
        <div className='w-full px-12 mt-4 opacity-90 flex border-b-[1px] border-[#3E7870] pb-28'>
          <div className='w-1/2'>
            <p>What you can expect:</p>
          </div>
          <div className='w-1/2 flex items-end gap-28'>
            <div className='w-1/2 flex flex-col gap-6'>
              <p className=''>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it's live or digital, delivered for one or a hundred people.</p>
              <p className=''>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
            </div>
            <div>
              <p className='mb-5'>S:</p>
              <ul>
                <li className='underline'>instagram</li>
                <li className='underline'>Behance</li>
                <li className='underline'>Facebook</li>
                <li className='underline'>Linkedin</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='mt-4 px-12 flex items-start'>
          <div className='w-1/2'>
            <h1 className='text-5xl'>Our approach:</h1>
            <button className='uppercase bg-zinc-800 text-white text-sm mt-6 px-7 py-4 rounded-full flex items-center gap-7'>Read More
              <div className='w-2 h-2 rounded-full bg-white'></div>
            </button>
          </div>
          <div className='w-1/2 h-[70vh] bg-gray-500 rounded-xl overflow-hidden'>
            <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" className='h-full w-full object-cover'/>
          </div>
        </div>
    </div>
  )
}

export default About