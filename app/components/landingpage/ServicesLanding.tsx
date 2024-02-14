'use client'

import React from 'react'
import ServiceCard from './ServiceCard'
import Slider from 'react-slick';
import { serviceDataLanding } from '@/app/data/landingPageData';

function ServicesLanding() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };

  return (
    <div className='pt-[300px] pb-[100px] px-[7rem] xl:px-[15rem]'>
      <h1 className='text-[20px] text-[color:var(--primary-teal)] font-[800] mb-5'>WHAT WE OFFER AS SERVICES</h1>
      <div className='w-full'>
        <Slider {...settings} className='w-full flex gap-4 pb-10'>
          {
            serviceDataLanding?.map((data) => (
              <div className='w-fit pr-4' key={data?.id}>
                <ServiceCard {...data} />
              </div>
            ))
          }
        </Slider>
      </div>
    </div>
  )
}

export default ServicesLanding