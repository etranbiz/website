'use client'

import React, { useState } from 'react'
import logo from '@/app/assets/icons/logo-main-white.svg'
import Image from 'next/image';
import Link from 'next/link';
import { navData } from '@/app/data/navData';
import PrimaryButton from './PrimaryButton';

function Navbar() {

    const [currentLinkId, setCurrentLinkId] = useState<number | null>(null);

    const [navBg, setNavBg] = useState<boolean>(false);

    const changeNavBg: () => void = () => {
        if (window !== undefined) {
            window.scrollY >= 750 ? setNavBg(true) : setNavBg(false);
        }
    }

    window.addEventListener('scroll', changeNavBg);

    const handleTextHover = (id: number) => {
        setCurrentLinkId(id);
    };

    const handleDropdownClose = () => {
        setCurrentLinkId(null);
    };


    return (
        <div className={`bg-transparent w-full fixed top-0 left-0 text-[14px] z-[110] ${navBg ? 'bg-[color:var(--primary-black)]' : 'bg-transparent'}`}>
            <div className='w-full flex items-center pt-6'>
                <div className='w-fit pb-5'>
                    <div className='w-[250px] mr-2 flex justify-center items-center z-[110] relative'>
                        <Image src={logo} width={160} alt='Main Logo' />
                    </div>
                </div>
                <div className='text-gray-400 flex justify-start items-center gap-16 w-full'>
                    {
                        navData?.map((data) => (
                            <span className='relative h-[60px] pt-2' key={data?.id} onMouseEnter={() => handleTextHover(data?.id)} onMouseLeave={handleDropdownClose}>
                                <div className='relative'>
                                    <Link href={data?.route}>
                                        <h1 className='hover:text-[color:var(--primary-yellow)] text-white font-[500] z-[110]'>{data?.title}</h1>
                                    </Link>
                                </div>
                                <div className={`w-full rounded-[15px] absolute top-[102%] -translate-x-[36px] min-w-[300px] bg-[#131313] flex flex-col gap-8 overflow-hidden ${currentLinkId === data?.id && data?.subRoutes?.length ? 'h-[400px] px-9 py-10' : 'h-0'} transition-all duration-200 ease-in-out`}>
                                    {
                                        data?.subRoutes?.map((sub_data) => (
                                            <span key={sub_data?.id} className={`group w-fit`}>
                                                <p className={`cursor-pointer text-[14px] text-white`}>{sub_data?.title}</p>
                                                <div className='w-0 h-[1px] bg-white mt-1 group-hover:w-full transition-all duration-200 ease-in-out'></div>
                                            </span>
                                        ))
                                    }
                                </div>
                            </span>
                        ))
                    }
                </div>
                <div className='w-[30%] flex justify-end pr-14 items-center pb-5'>
                    <PrimaryButton title={`Let's connect`} />
                </div>
            </div>
        </div>
    )
}

export default Navbar