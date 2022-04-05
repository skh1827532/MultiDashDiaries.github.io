import React from 'react'

import { useState,useRef } from 'react'
import HamburgerIcon from '../AssetsOne/Hamburger.svg'
import CloseIcon from '../AssetsOne/Close.svg'
import Logo from '../AssetsOne/Logo.svg'
import { Link } from 'react-router-dom'
  

export default function Navbar() {

    // const [currentState, setState]=useState(HamburgerIcon);
    // const [currentOp,setOpacity]=useState(0)
    // const [currentTop, setTop]=useState("-400px")
   const [isActive, setActive]=useState(false)
const hamburgerIcon=useRef(null);
const mobileNavBar=useRef(null);
    const mobileNavHandler=()=>{
      

   console.log(hamburgerIcon.current);
   hamburgerIcon.current.classList.toggle("active");
   if(hamburgerIcon.current.classList.contains("active")){
    //    mobileNavBar.current.classList.remove("top-[80px]")
       mobileNavBar.current.classList.add("left-[-800px]")
       mobileNavBar.current.classList.remove("left-[0px]")
      //  mobileNavBar.current.classList.remove("top-[80px]")
       hamburgerIcon.current.src=HamburgerIcon
   
      
   }
   else{
        //  mobileNavBar.current.classList.add("top-[80px]")
        
        
         mobileNavBar.current.classList.remove("left-[-800px]")
          mobileNavBar.current.classList.add("left-[0px]")

            hamburgerIcon.current.src=CloseIcon
   }

        

    }
  return (
      
   

    
    <>
      

     
      <nav className="p-5   md:flex bg-black text-white">
        
        <div className="flex justify-between lg:w-full items-center ">
          <div className='flex mx-4 lg:mx-[140px] justify-between items-center'>

          
           <img src={Logo} alt="" />
         
    
           <img src={HamburgerIcon} ref={hamburgerIcon} alt="" onClick={mobileNavHandler} className="invert w-[30px] absolute right-2 lg:hidden" />
           <ul  className={`deskstop-nav lg:flex  hidden   md:items-center z-10 opacity-100 md:z-auto md:static absolute  md:py-0 py-4  md:pl-0 pl-7 md:opacity-100   text-white  transition-all ease-in duration-500 mx-5 `} >
           <li className="mx-2 my-6 md:my-0">
            <Link to="/" className="text-[14px] hover:text-cyan-500 hover:underline-offset-4 hover:underline duration-500">COMPONENTS          </Link>
          </li>
          <li className="mx-2 my-6 md:my-0">
            <Link to="templates" className="text-[14px] hover:text-cyan-500 duration-500 hover:underline-offset-4 hover:underline">TEMPLATES          </Link>
          </li>
          <li className="mx-2 my-6 md:my-0">
            <Link to="blog" className="text-[14px] hover:text-cyan-500 duration-500 hover:underline-offset-4 hover:underline">BLOG          </Link>
          </li>
          <li className="mx-2 my-6 md:my-0">
            <Link to="pricing" className="text-[14px] hover:text-cyan-500 duration-500 hover:underline-offset-4 hover:underline">PRICING          </Link>
          </li>
          <li className="mx-2 my-6 md:my-0">
            <Link to="faq" className="text-[14px] hover:text-cyan-500 duration-500 hover:underline-offset-4 hover:underline ">FAQ    </Link>
          </li>
          <li className="mx-2 w-max my-6 md:my-0">
            <Link to="loginIn" className="text-[14px] hover:text-cyan-500 duration-500 hover:underline-offset-4 hover:underline ">LOG IN    </Link>
          </li>
    
          
    
        </ul>
        </div>
        <div className='my-6 hidden lg:block'>
          <button className='text-[14px] text-center w-[130px] rounded-[6px] h-[38px] backdrop-blur-[50px] hover:bg-gradient-to-br from-slate-100 to-slate-600 backgroundProperty mx-12 '>VIEW PRICING</button>

        </div>
        
        </div>
    
       
      </nav>
       <ul ref={mobileNavBar} className={`mobile-navbar  lg:hidden w-[80vw] h-[100vh]  lg:items-center z-10 opacity-100 lg:z-auto lg:static absolute  lg:w-auto lg:py-0 py-4 lg:pl-0 pl-7 lg:opacity-100  left-[-800px]  text-white  bg-blue-900 transition-all ease-in duration-500  lg:mx-[60px] `} >
          <li className="mx-2 my-6 md:my-0">
            <Link to="/" className="text-xl hover:text-orange-500 hover:underline-offset-4 hover:underline duration-500">COMPONENTS          </Link>
          </li>
          <li className="mx-2 my-6 md:my-0">
            <Link to="templates" className="text-xl hover:text-orange-500 duration-500 hover:underline-offset-4 hover:underline">TEMPLATES          </Link>
          </li>
          <li className="mx-2 my-6 md:my-0">
            <Link to="blog" className="text-xl hover:text-orange-500 duration-500 hover:underline-offset-4 hover:underline">BLOG          </Link>
          </li>
          <li className="mx-2 my-6 md:my-0">
            <Link to="pricing" className="text-xl hover:text-orange-500 duration-500 hover:underline-offset-4 hover:underline">PRICING          </Link>
          </li>
          <li className="mx-2 my-6 md:my-0">
            <Link to="faq" className="text-xl hover:text-orange-500 duration-500 hover:underline-offset-4 hover:underline active:">FAQ    </Link>
          </li>
          <li className="mx-2 my-6 md:my-0">
            <Link to="loginIn" className="text-xl hover:text-orange-500 duration-500 hover:underline-offset-4 hover:underline active:">LOG IN    </Link>
          </li>
    
          
    <h2 className=""></h2>
        </ul>
        
       {/* <script>
        function Menu(e){
          let list = document.querySelector('ul');
          e.name === 'menu' ? (e.name = "close",list.classNameList.add('top-[80px]') , list.classNameList.add('opacity-100')) :( e.name = "menu" ,list.classNameList.remove('top-[80px]'),list.classNameList.remove('opacity-100'))
        }
      </script> */}
      </>
    
    
     
    
   
  )
}
