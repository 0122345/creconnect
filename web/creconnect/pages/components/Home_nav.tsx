import React from 'react'

export default function HomeNavi() {
  return (
    <main className='flex border border-solid border-[#ffffff] bg-blue w-60dvw h-[48px] text-white text-lg justify-center items-center gap-4'>
       <div className="">
          <span className="">Location</span>
          <span className=""> Type as space</span>
          <span className=""> Activity</span>
          <span className=""> Date & time</span>
          <span className="bg-white border border-1 border-solid border-white text-black h-[48px] "> Search</span>
       </div>
    </main>
  )
}
