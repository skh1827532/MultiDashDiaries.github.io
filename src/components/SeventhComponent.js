import React from 'react'
import LineSeven from '../AssetsSeven/LineSeven.svg'

export default function SeventhComponent() {
  return (
   <>
   

   
   <div className='bg-[#374151] flex flex-col justify-center items-center '>
   
       <img src={LineSeven} className="w-[10px] h-[140px] my-2" alt="" />
       <h1 className='font-bold my-2 lg:text-[48px] text-[26px] text-white bg-gradient-to-tr from-[#FFAEC1]  via-[#FF7293]  to-[#FF3565] bg-clip-text text-transparent'>Join our Newsletter</h1>

       <div className='w-[300px] h-auto sm:w-[600px] flex sm:h-[56px] backdrop-blur-[50px] bg-gradient-to-br my-4 justify-between items-center from-[#ADADAD]/[4] to-[#ADADAD]/5 rounded-[12px]'>
           <input type="email" name="" id="" className='sm:w-[350px] rounded-[12px] h-[56px] bg-transparent placeholder:text-white text-white  bg-gradient-to-br from-[#ADADAD]/[4] to-[#ADADAD]/5 justify-between ' placeholder='johnnyappleseed@gmail.com '/>
          

           <button className='w-[120px]  group h-[40px] mx-4 rounded-[6px] bg-white  hover:bg-gradient-to-b from-[#FF3565]/[54]      via-[#FF3596] to-[#FF3596]'>
               <span className='text-center bg-gradient-to-b group-hover:text-white from-[#FF3565]/[54] bg-clip-text text-transparent    via-[#FF3596] to-[#FF3596]'>

               Join Now
               </span>
               </button>

       </div>
   </div>


   </>
  )
}
