import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface SecondaryHeroSectionProps {
    title: string;
    content: string;
    image: string | StaticImageData;
}

const SecondaryHeroSection: React.FC<SecondaryHeroSectionProps> = ({ title, content, image }) => {
    return (
        <div className='w-full h-[55vh] relative flex justify-start items-end'>
            <div className='w-full h-full absolute inset-0 z-0'>
                <Image src={image} alt='Hero Image' className='w-full h-full object-cover' />
                <div className='w-full h-full bg-gradient-to-b from-transparent to-[color:var(--primary-black)] absolute inset-0 z-0' />
            </div>
            <div className='static z-10 py-12 w-full text-white px-[18rem]'>
                <h1 className='text-[65px] font-[300]'>{title}</h1>
                <p className='text-[18px] font-[500]'>{content}</p>
            </div>
        </div>
    )
}

export default SecondaryHeroSection