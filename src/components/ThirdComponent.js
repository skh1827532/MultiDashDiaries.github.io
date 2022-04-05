import React from 'react'
import LinePic from '../AssetsThree/Line.svg'
import backThree from '../AssetsThree/BackgroundThree.svg'
import BigPicture from '../AssetsTwo/Curvy.webp'
import curve from '../AssetsTwo/curve.png'
import BgTwo from '../AssetsTwo/BackgroundTwo.png'



export default function ThirdComponent() {
  return (
    <>
    <div className='bg-[#1F2937]'>
    <div className='flex justify-center  flex-col  items-center bg-[black] '>
     
        

    <img src={BgTwo} alt="" className='translate-y-10' />
     <img src={curve} alt="" className='z-10'/>
 
     {/* <img src={CurvyImage} alt="" /> */}
 </div>

    <div className='flex flex-col justify-center items-center bg-[#1F2937]'>
        <div className="image">
            <img src={LinePic} alt="" />

        </div>
        <h1 className='mt-5 mb-1 text-center bg-gradient-to-tr from-[#E879F9] to-[#C084FC] text-transparent bg-clip-text font-bold text-[48px] mx-4 w-auto'>KickStart your next Project</h1>
        <p className='text-[#9CA3AF] w-auto text-center lg:w-[610px] mx-2'>Don’t waste time in starting your next project from scratch. With over 100 screens and multiple pages, choose the one that suits your needs and start editing right away.</p>
        <div className='my-12 relative'>
            <p className='font-bold  text-white absolute top-[15vh] md:top-[20vh] lg:top-[45vh] lg:left-[40vw]  left-[30vw]'>Video Placeholder</p>
            <img src={backThree} className="h-[30vh] w-[80vw] md:h-[40vh] lg:w-[90vw] lg:h-[90vh]" alt="" />
        </div>
    </div>
    </div>

    </>
  )
}
