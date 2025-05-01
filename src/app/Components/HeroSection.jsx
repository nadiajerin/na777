"use client"
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import Image from 'next/image';


const HeroSection = () => {
    return (
        <div className='lg:mt-6'>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide>
                    <Image src={"/image_155351.jpg"} className='w-full' width={5000} height={100} alt='Image'></Image>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default HeroSection
