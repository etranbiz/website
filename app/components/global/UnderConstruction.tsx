'use client'

import React from 'react'
import PrimaryButton from '@/app/components/global/PrimaryButton'
import settingIcon from '@/app/assets/icons/setting.svg'
import Image from 'next/image'
import logo from '@/app/assets/icons/logo-main-white.svg'

const UnderConstruction = () => {

    const handleButtonClick = () => {
        window.location.href = 'mailto:info@etranbiz.com';
      };

    return (
        <div className='w-full relative h-screen flex flex-col justify-center items-center bg-[#131313] text-center px-6'>
            <div className='w-full flex justify-center items-center absolute top-12'>
                <Image src={logo} alt='Logo' className='w-full max-w-[200px]' />
            </div>
            <div className='w-fit flex flex-col justify-center items-center z-10 leading-none gap-3 -translate-y-14 md:-translate-y-0'>
                <h1 className='text-[40px] md:text-[50px] font-[400] text-white mb-4'>Hello!</h1>
                <p className='text-[20px] md:text-[25px] font-[400] text-[color:var(--primary-yellow)]'>Our new website is under construction.</p>
                <p className='text-[30px] md:text-[40px] font-[400] text-white mb-4'>We will be seeing you in spring!</p>
                <PrimaryButton title={`Let's talk`} onClick={handleButtonClick} />
            </div>
            <div className='absolute w-full flex justify-center items-end pb-20 md:pb-10 bottom-0 h-[40vh] bg-gradient-to-b from-[#131313] to-[#16796f51] z-0'>
                <div className='w-fit flex flex-col items-center '>
                    <Image src={settingIcon} className='w-[26px] spin-div' alt='Settings Icon' />
                    <div className='flex gap-1'>
                        <Image src={settingIcon} className='w-[50px] spin-div' alt='Settings Icon' />
                        <Image src={settingIcon} className='w-[36px] spin-div' alt='Settings Icon' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UnderConstruction