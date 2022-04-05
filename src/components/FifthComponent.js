import React from 'react'
import LineImage from '../AssetsFive/Line.svg'
import AssetsFiveImage from '../AssetsFive/AssetFiveImage.jpg'
import ButtonImage from '../AssetsFive/ButtonImage.svg'
import downBtn1 from '../AssetsFive/downBtn1.svg'
import downBtn2 from '../AssetsFive/downBtn2.svg'
import downBtn3 from '../AssetsFive/downBtn3.svg'
import downBtn4 from '../AssetsFive/downBtn4.svg'


export default function FifthComponent() {
  return (
  <>
   <div className='flex flex-col items-center justify-center bg-[#374151]'>
       <img src={LineImage} alt="" className='my-2' />
       <h1 className='font-bold text-[48px] my-2 text-center bg-gradient-to-br from-[#06B6D4]/30 to-[#2DD4BF]/[0.9] bg-clip-text text-transparent text-white'>Explore the Demos</h1>
       <p className='text-[18px] text-[#9CA3AF] text-center lg:w-[718px] h-[54px] mb-[40px]'>Don’t waste time in starting your next project from scratch. With over 100 screens and multiple pages, choose the one that suits your needs and start editing right away.</p>
       <div className='flex flex-col lg:flex-row ' >
           <div className="firstPart flex flex-col   items-center justify-center my-4 lg:mx-4">
          <div className='bg-[#E5E5E5] px-2 py-2 rounded-[4px]'>

          <img src={AssetsFiveImage} alt="" className='w-[340px] h-[300px]' />
          </div>
          <img src={ButtonImage} alt="" className='my-4 cursor-pointer' />
          <div className='flex flex-row '>
               <img src={downBtn1} alt="" className='mx-2  cursor-pointer '  />
               <img src={downBtn2} alt="" className='mx-2  cursor-pointer' />
               <img src={downBtn3} alt="" className='mx-2 cursor-pointer' />
               <img src={downBtn4} alt="" className='mx-2  cursor-pointer'/>
           </div>
           </div>
           <div className="secondPart flex flex-col   items-center justify-center my-4 lg:mx-4">
          <div className='bg-[#E5E5E5] px-2 py-2 rounded-[4px]'>

          <img src={AssetsFiveImage} alt="" className='w-[340px] h-[300px] cursor-pointer' />
          </div>
          <img src={ButtonImage} alt="" className='my-4 cursor-pointer' />
          <div className='flex flex-row '>
               <img src={downBtn1} alt="" className='mx-2 cursor-pointer'  />
               <img src={downBtn2} alt="" className='mx-2 cursor-pointer' />
               <img src={downBtn3} alt="" className='mx-2 cursor-pointer'/>
               <img src={downBtn4} alt="" className='mx-2 cursor-pointer'/>
           </div>
           </div>
           <div className="thirdPart flex flex-col   items-center justify-center my-4 lg:mx-4">
          <div className='bg-[#E5E5E5] px-2 py-2 rounded-[4px]'>

          <img src={AssetsFiveImage} alt="" className='w-[340px] h-[300px]' />
          </div>
          <img src={ButtonImage} alt="" className='my-4 cursor-pointer' />
          <div className='flex flex-row '>
               <img src={downBtn1} alt="" className='mx-2 cursor-pointer'  />
               <img src={downBtn2} alt="" className='mx-2 cursor-pointer' />
               <img src={downBtn3} alt="" className='mx-2 cursor-pointer'/>
               <img src={downBtn4} alt="" className='mx-2 cursor-pointer'/>
           </div>
           </div>

           
       </div>
       <div className='flex flex-col lg:flex-row mx-auto' >
           <div className="firstPart flex flex-col   items-center justify-center my-4 lg:mx-4">
          <div className='bg-[#E5E5E5] px-2 py-2 rounded-[4px]'>

          <img src={AssetsFiveImage} alt="" className='w-[340px] h-[300px]' />
          </div>
          <img src={ButtonImage} alt="" className='my-4 cursor-pointer' />
          <div className='flex flex-row '>
               <img src={downBtn1} alt="" className='mx-2 cursor-pointer'  />
               <img src={downBtn2} alt="" className='mx-2 cursor-pointer' />
               <img src={downBtn3} alt="" className='mx-2 cursor-pointer'/>
               <img src={downBtn4} alt="" className='mx-2 cursor-pointer'/>
           </div>
           </div>
           <div className="secondPart flex flex-col   items-center justify-center my-4 lg:mx-4">
          <div className='bg-[#E5E5E5] px-2 py-2 rounded-[4px]'>

          <img src={AssetsFiveImage} alt="" className='w-[340px] h-[300px]' />
          </div>
          <img src={ButtonImage} alt="" className='my-4 cursor-pointer' />
          <div className='flex flex-row '>
               <img src={downBtn1} alt="" className='mx-2 cursor-pointer'  />
               <img src={downBtn2} alt="" className='mx-2 cursor-pointer' />
               <img src={downBtn3} alt="" className='mx-2 cursor-pointer'/>
               <img src={downBtn4} alt="" className='mx-2'/>
           </div>
           </div>
           

           
       </div>
   </div>
  </>
  )
}
