'use client'

import React from 'react'
import Slider from 'react-slick'
import PrimaryButton from '@/app/components/global/PrimaryButton'
import CaseStudyCarousalCard from './CaseStudyCarousalCard'
import { caseStudyCarousalData } from '@/app/data/landingPageData'

const CaseStudyCarousal = () => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
    };

    return (
        <div className='w-full px-[18rem] pt-[140px] pb-[60px]'>
            <div className='relative'>
                <Slider {...settings} className='pb-8'>
                    {
                        caseStudyCarousalData?.map((data) => (
                            <div key={data?.id} className='mr-4'>
                                <CaseStudyCarousalCard title={data?.title} content={data?.content} image={data?.image} />
                            </div>
                        ))
                    }
                </Slider>
                <div className=''>
                    <PrimaryButton title='View all case studies' />
                </div>
            </div>
        </div>
    )
}

export default CaseStudyCarousal