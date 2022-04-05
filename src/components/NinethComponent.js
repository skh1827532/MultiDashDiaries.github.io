import React from 'react'
import githubImg from '../AssetsNine/github.svg'
import twitterImg from '../AssetsNine/twitter.svg'
import MoonImg from '../AssetsNine/Moon.svg'
import downArrowImg from '../AssetsNine/downArrow.svg'
import { Link } from 'react-router-dom'

export default function NinethComponent() {
  return (
    <>
    <div className='flex flex-col  justify-center items-center lg:items-start  lg:justify-between lg:flex-row bg-[#374151] text-white'>
        <div className='lg:mx-[100px] my-[100px]'>
            <ul className='flex flex-col'>
                <li className='my-1'>  <Link to="/" className="text-[14px] hover:text-cyan-500 hover:underline-offset-4 hover:underline duration-500">Components          </Link></li>
                <li className='my-1'><Link to="templates" className="text-[14px] hover:text-cyan-500 duration-500 hover:underline-offset-4 hover:underline">Templates          </Link></li>
                <li className='my-1'> <Link to="pricing" className="text-[14px] hover:text-cyan-500 duration-500 hover:underline-offset-4 hover:underline">Pricing          </Link></li>
                <li className='my-1'> <Link to="faq" className="text-[14px] hover:text-cyan-500 duration-500 hover:underline-offset-4 hover:underline ">FAQ    </Link></li>
                <li className='my-1 text-[14px] hover:text-cyan-500 duration-500 hover:underline-offset-4 hover:underline'>Documents</li>

            </ul>
        </div>
        <div className='my-[100px]'>
            <ul>
            <li className='text-[14px] hover:text-cyan-500 duration-500 hover:underline-offset-4 hover:underline'>Free Components</li>
                <li className='my-1 text-[14px] hover:text-cyan-500 duration-500 hover:underline-offset-4 hover:underline'>Roadmap</li>
                <li className='my-1 text-[14px] hover:text-cyan-500 duration-500 hover:underline-offset-4 hover:underline'>Blog</li>
                <li className='my-1 text-[14px] hover:text-cyan-500 duration-500 hover:underline-offset-4 hover:underline'>Changeblog</li>
                
            </ul>

        </div>

        <div className='my-[100px]'>
            <ul>
                <li className='my-1 text-[14px] hover:text-cyan-500 duration-500 hover:underline-offset-4 hover:underline'>Privacy Policy</li>
                <li className='my-1 text-[14px] hover:text-cyan-500 duration-500 hover:underline-offset-4 hover:underline'>Terms of Services</li>
            </ul>
        </div>
        

        <div className='flex flex-col lg:mr-[50px] my-[100px]'>
            <div className='flex my-2'>
                <img src={githubImg} alt="" />
                <img src={twitterImg} className="mx-2" alt="" />
            </div>
            <div className='flex w-[141px] h-[40px]  mt-[70px] border-2 justify-between border-gray-50 rounded-[4px] cursor-pointer items-center'>
                <div className='flex mx-2'>

                <img src={MoonImg} alt="" />
                <p className='font-bold mx-2'>Dark</p>
                </div>
                <img src={downArrowImg} alt="" className='mx-3'/>               
            </div>
            


            

        </div>

    </div>
    </>
  )
}
