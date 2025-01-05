import React from 'react'

function ClientReviews() {

    const data = [
        { company: "Planetly", author: "Nina Walloch", action: "READ" },
        { company: "Workiz Easy", author: "Tomer Levy", action: "READ" },
        { company: "Premium Blend", author: "Ellen Kim", action: "READ" },
        { company: "Hypercare Systems", author: "Brendan Goss", action: "READ" },
        { company: "Officevibe", author: "Raff Labrie", action: "READ" },
        { company: "Orderlion", author: "Stefan Strohmer", action: "READ" },
        { company: "Black Book", author: "Jaci Smith", action: "READ" },
        { company: "Trawa Energy", author: "David Budde", action: "READ" },
      ]

  return (
    <div className='bg-[#f1f1f1] min-h-screen mt-10'>
        <div >
            <h1 className='text-5xl px-12 w-full border-b-[2px] border-zinc-300 pb-9'>Clients' reviews</h1>
            <div className='w-full h-[75vh] pb-20 flex items-center justify-around px-12 mt-4 '>
                <div className='h-full w-full'>
                    <h1 className='underline opacity-85'>Karman Ventures</h1>
                </div>
                <div className='h-full w-full flex flex-col gap-14 items-start'>
                    <h1 className='opacity-85'>Services:</h1>
                    <div className='flex flex-col items-start'>
                        <h1 className='border-2 text-sm py-[2px] px-5 uppercase rounded-full border-zinc-500'>investor desk</h1>
                        <h1 className='border-2 mt-4 text-sm py-[2px] px-5 uppercase rounded-full border-zinc-500'>sales deck</h1>
                    </div>
                </div> 
                <div className='h-full w-full flex flex-col items-start gap-14'>
                    <h1 className='opacity-85'>William Barnes</h1>
                    <div  className='flex flex-col gap-7 items-start w-[30vw]'>
                        <div>
                            <img className='h-24 rounded-xl' src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png" alt="" />
                        </div>
                        <p className='tracking-tight leading-6'>
                            They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5
                        </p>
                    </div>
                </div>
                <div className='h-full w-[70%]'>
                    <h1 className='uppercase text-right opacity-40'>read</h1>
                </div>
            </div>
            {
                data.map((item,index)=>(
                    <div key={index} className='w-full px-12 py-4 flex items-center justify-between uppercase border-t-[1px] border-zinc-300'>
                        <h1 className='underline w-40 text-left opacity-85'>{item.company}</h1>
                        <h1 className='w-40 text-left opacity-85'>{item.author}</h1>
                        <h1 className='underline w-40 text-right opacity-85'>{item.action}</h1>
                    </div>
                ))}
        </div>
    </div>
  )
}

export default ClientReviews