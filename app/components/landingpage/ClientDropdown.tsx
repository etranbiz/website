'use client'

import React, { useState } from 'react'
import SecondaryButton from '../global/SecondaryButton';
import Image from 'next/image';
import { clientsLandingData } from '@/app/data/landingPageData';

const ClientDropdown = () => {

    const [currentId, setCurrentId] = useState<number | null>(null);

    const handleClickDropdown = (id: number) => {
        if (id !== currentId) {
            setCurrentId(id)
        } else {
            setCurrentId(null);
        }
    };

    return (
        <div className='w-full'>
            {
                clientsLandingData?.map((data) => (
                    <div key={data?.id} className='w-full relative'>
                        <div className={`w-full flex justify-between items-center py-8`} onClick={() => handleClickDropdown(data?.id)}>
                            <h1 className='text-white text-[40px] font-[400]'>{data?.title}</h1>
                            <SecondaryButton title={currentId === data?.id ? 'READ LESS' : 'READ MORE'} />
                        </div>
                        <div className={`w-full ${data?.id === currentId ? 'h-[380px]' : 'h-0'} ${data?.id === 3 ? '' : ' border-b border-white'} flex justify-between items-center overflow-hidden transition-all duration-200 ease-in-out`}>
                            <div className='w-[50%] flex flex-col justify-start items-center'>
                                {
                                    data?.content?.map((content_data, i) => (
                                        <p key={i} className='text-white text-[18px] font-[400] mb-4'>{content_data}</p>
                                    ))
                                }
                            </div>
                            <div className='w-fit'>
                                <Image src={data?.image} alt='Client Image' width={350} className='rounded-[20px]' />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ClientDropdown