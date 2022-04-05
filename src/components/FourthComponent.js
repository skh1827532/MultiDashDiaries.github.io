import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import LeftImg from '../Images/Left.svg'
import RightImg from '../Images/Right.svg'
import imageForSwiper from '../Images/Image.webp'
import LineImageFour from '../Images/Line.svg'
// import bgImage from './Images/background.svg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper";

export default function FourthComponent() {
  const [text,setText]=useState("");
  const swiperRef=useRef(null);
  return (
    <>
   <div className="flex flex-col bg-[#1F2937]">

    <div className="my-4 flex flex-col  bg-[#1F2937] items-center justify-center">
    <img src={LineImageFour} alt="" className='my-2 w-[10px] h-[200px]' />
       <h1 className='font-bold text-[48px] my-2 text-center bg-gradient-to-br from-[#06B6D4]/30 to-[#2DD4BF]/[0.9] bg-clip-text text-transparent text-white'>Explore the Demos</h1>
       <p className='text-[18px] text-[#9CA3AF] text-center lg:w-[718px] h-[54px] mb-[40px]'>Don’t waste time in starting your next project from scratch. With over 100 screens and multiple pages, choose the one that suits your needs and start editing right away.</p>    
    </div>
    <div className="bg-black">
      
    <div className="mt-4 flex justify-center items-center ">
   
            <img src={LeftImg} className="goToPrev mx-4 my-2  w-[40px]" alt="" />
            <div className="btn">
            <button className=' border-2 bg-clip-border  border-[#4ADE80] text-[#FFFFFF] bg-[#4ADE80]/10 w-[200px]   sm:w-[220px] h-[52px] rounded-[4px] text-center' >{text}</button>

            </div>
            <img src={RightImg} alt=""  className='goToNext mx-4 my-2 w-[40px]'/>

        </div>
        <div className="flex flex-col justify-center items-center" onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
      onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}>
          
       
      <Swiper
        effect={"coverflow"}
        ref={swiperRef}
        grabCursor={true}
        centeredSlides={true}
        // centeredSlides={true}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1,
            spaceBetween: 0,


          },
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
            spaceBetween: 0,

          },

          // when window width is >= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 0,

          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
            spaceBetween: 0,

          },
        }}

        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false,

        }}

        loop={true}
        pagination={true}
        modules={[EffectCoverflow,Navigation, Pagination,Autoplay]}

        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}

        navigation={{
          nextEl: ".goToNext",
          prevEl: ".goToPrev",
        }}

        onRealIndexChange={(obj) => {
          console.log(obj.realIndex);
          let myArr=["Science","Commerce","Economics","Marketing","Business"]
          setText([myArr[obj.realIndex]])
        }}
        className="mySwiper"

        
      >
        {/* <SwiperSlide>
<img src={bgImage} alt="" />
        </SwiperSlide>
        <SwiperSlide>
<img src={bgImage} alt="" />
        </SwiperSlide>
        <SwiperSlide>
<img src={bgImage} alt="" />
        </SwiperSlide>
        <SwiperSlide>
<img src={bgImage} alt="" />
        </SwiperSlide>
        <SwiperSlide>
<img src={bgImage} alt="" />
        </SwiperSlide> */}

<SwiperSlide>
          <img src={imageForSwiper} className="w-[250px] h-[400px]" />
        </SwiperSlide>
<SwiperSlide>
          <img src={imageForSwiper} className="w-[250px] h-[400px]" />
        </SwiperSlide>
<SwiperSlide>
          <img src={imageForSwiper} className="w-[250px] h-[400px]" />
        </SwiperSlide>
<SwiperSlide>
          <img src={imageForSwiper} className="w-[250px] h-[400px]" />
        </SwiperSlide>
<SwiperSlide>
          <img src={imageForSwiper} className="w-[250px] h-[400px]" />
        </SwiperSlide>
        
       
      </Swiper>
      </div>
         
    </div>
   </div>

    </>
  );
}
