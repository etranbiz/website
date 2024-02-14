'use client';

import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import { heroCarousalData } from '@/app/data/landingPageData';

const HeroCarousal = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
    };

    return (
        <div>
            <Slider {...settings}>
                {
                    heroCarousalData?.map((data) => (
                        <div key={data?.id} className='relative w-full'>
                            <Image src={data?.image} alt='Hero Image' className='z-[70] static max-h-[80vh] object-cover' />
                            <div className='absolute bg-gradient-to-b from-transparent to-[#131313] bottom-0 top-0 right-0 left-0'></div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

export default HeroCarousal