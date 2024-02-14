'use client'

import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'

interface ServiceCardProps {
    id: number;
    image: string | StaticImageData;
    title: string;
    content: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ id, title, content, image }) => {

    const [activeCard, setActiveCard] = useState<number | null>(null)

    return (
        <div onMouseEnter={() => setActiveCard(id)} onMouseLeave={() => setActiveCard(null)} key={id} className='w-full max-w-[300px] relative overflow-hidden rounded-[20px]'>
            <div className='w-full h-full relative overflow-hidden'>
                <Image src={image} className={`object-contain ${activeCard === id ? 'scale-[300%] translate-x-[300px] blur-sm' : ''} transition-all duration-500 ease-in-out`} alt="" />
                <div className='w-full bg-gradient-to-b from-transparent to-black absolute bottom-0 left-0 h-[70%] flex items-end p-6'></div>
            </div>
            <div className={`${activeCard === id ? 'pt-8' : 'translate-y-[65%] 2xl:translate-y-[70%]'} w-full px-4 2xl:px-8 pb-8 h-full flex justify-center items-start absolute left-0 bottom-0 overflow-hidden bg-gradient-to-b from-transparent to-black bg-opacity-60 transition-all duration-500 ease-in-out`}>
                <div className='flex flex-col gap-10'>
                    <h1 className={`text-3xl text-white font-[600] transition-all duration-500 ease-in-out text-wrap flex items-end ${activeCard === id && title?.length < 30 ? 'h-[65px]' : 'h-[110px]'}`}>{title}</h1>
                    <h1 className='text-white text-xl font-[500] min-w-[200px]'>{content}</h1>
                    <button className='w-fit text-white border px-5 py-1 rounded-[4px]'>read more</button>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard