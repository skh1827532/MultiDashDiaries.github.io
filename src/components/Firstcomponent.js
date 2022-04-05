import React from 'react'

export default function Firstcomponent() {
  return (
  <>
  <div className='flex flex-col mx-auto items-center justify-center bg-black'>

    <h1 className='font-bold text-center w-auto h-auto text-[26px]  lg:w-[800px]  lg:text-[80px] mt-4 mb-2 headingBg'>MODA Admin Dashboard Template</h1>

    <p className='text-center text-[#9CA3AF] -tracking-[0.03rem] lg:w-[600px] w-auto h-auto mb-2 lg:h-[60px] mx-4'>A one-of-its kind Dashboard Template with almost 100 Screens. Every screen is highly detailed with interactions embedded down to the smallest component.</p>

    <div className='buttons flex flex-col lg:flex-row'>
        <div>

        <button className='mx-4 my-4 btnBg bg-gradient-to-br from-[#7DD3FC]/[120] to-[#3B82F6]/[0.9] hover:bg-gradient-to-bl rounded-[4px] text-white w-[216px] h-[52px] text-[20px]'>Buy Now at $79</button>
        </div>
        <div>

        <button className='mx-4 my-4 rounded-[4px] text-white w-[216px] h-[52px] text-[20px] hover:text-red-600 hover:border-blue-500 border-white border-2'>Browse Demos</button>
        </div>

    </div>
  </div>
  {/* -webkit-background-clip */}

  </>
  )
}
