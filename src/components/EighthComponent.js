import React from 'react'
import EighthImage from '../AssetsEight/slide.png'

export default function EighthComponent() {
  return (
   <>
   <div className='flex flex-col lg:flex-row items-center justify-center lg:justify-between bg-black box-border'> 
   <div className='firstItem flex flex-col sm:ml-[100px] ml-[50px]'>
       <h1 className='mt-3 mb-1 font-bold text-[48px] text-white '>One Time Payment.</h1>
       <h1 className=' mb-1 font-bold text-[48px] text-white'>Lifetime Access.</h1>
       <p className='my-2 text-[#9CA3AF]'>Simple and Transparent Pricing. No BS.</p>
       <ul className='list-disc my-2 flex-col mx-5 text-[#9CA3AF] flex'>
           <li>90+ Screens</li>
           <li>200+ Components</li>
           <li>HTML &amp TailwindCSS</li>
           <li>WCAG Accessible Design</li>
           <li>Premium Support</li>
           <li>Use on Unlimited Projects</li>
       </ul>

       <button className='bg-gradient-to-br from-[#7DD3FC] text-[20px] text-white to-[#3B82F6] hover:bg-gradient-to-bl w-[216px] h-[52px] text-center rounded-[4px] mb-4'>Buy Now at $79</button>
      

   </div>

   <div>
       <img src={EighthImage} className="lg:w-[800px] w-auto h-[600px]" alt="" />
   </div>

   </div>
   </>
  )
}
