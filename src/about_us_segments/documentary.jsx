import React from 'react'


const Documentary= ()=> {
  return (
    <div className="flex flex-col space-y-10 items-center h-screen p-8 justify-start">
      <div className="text-balck font-bold text-5xl leading-snug font-poppins ">
        <h1 className='text-left'>Documentary About The Project</h1>
      </div>
      <div className=" w-full max-w-lg">
        <iframe className="w-full
         rounded-lg h-72" src="https://www.youtube-nocookie.com/embed/SvQYfx4zw_k?wmode=transparent&vq=hd1080" title="TDKET SHORT VIDEO"
          allowFullScreen>
        </iframe></div>
    </div>
  );
}
export default Documentary