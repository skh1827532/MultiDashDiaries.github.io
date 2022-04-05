import React from 'react'
import BigPicture from '../AssetsTwo/Curvy.webp'
import bgPic from '../AssetsTwo/Curvy.png'
// import CurvyImage from '../AssetsTwo/Curvy.svg'

export default function SecondComponent() {
  return (
      <>
     
      <div className='flex justify-center    items-center flex-col bg-black '>
     
        

          <img src={bgPic} alt="" className='mt-5 gradientColours backdrop-blur-[60px] rotate-0' />
      
          {/* <img src={CurvyImage} alt="" /> */}
      </div>

      </>
  )
}
