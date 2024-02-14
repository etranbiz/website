import React from 'react'
import HeroCarousal from './HeroCarousal'

function Hero() {

    return (
        <div className='w-full h-[80vh] flex flex-col justify-end items-start px-[100px] relative'>
            <div className='flex flex-col text-white z-10 translate-y-[5rem]'>
                <h1 className='text-7xl font-[900]'>PEOPLE</h1>
                <h1 className='text-7xl font-[900]'>INNOVATION</h1>
                <h1 className='text-7xl font-[900]'>TECHNOLOGY</h1>
            </div>
            <div className='absolute bottom-0 top-0 left-0 w-full z-0'>
                <HeroCarousal />
            </div>
        </div>
    )
}

export default Hero