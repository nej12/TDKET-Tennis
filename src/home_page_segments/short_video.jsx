import React from 'react'

const Short_video = () => {
  return (
    <div className='flex px-20 my-24 space-x-16'>
        
        <div className=''>
            <iframe
            className="h-screen w-[33rem] rounded-2xl"
            src="https://www.youtube-nocookie.com/embed/SvQYfx4zw_k?wmode=transparent&vq=hd1080"
            title="TDKET SHORT VIDEO"
            allowFullScreen
            ></iframe>
        </div>
        <div className='space-y-10'>
            <div><h1 className=' text-black font-bold text-5xl leading-snug font-poppins'>Transforming Good <br />Intentions into Good <br />Actions</h1></div>
            <div><h3 className=' text-gray-500'>The two brothers and founders of TDKET are Tariku and Desta Tesfaye. The brothers themselves come from poor backgrounds and even managed to become tennis players in the Ethiopian national team. Click the button below to know more...</h3> </div>
            <div className='pt-20'> <button className=' bg-black text-white rounded-xl w-full p-4 font-poppins font-bold'>VIEW DETAILS</button></div>
        </div>
      
    </div>
  )
}

export default Short_video
