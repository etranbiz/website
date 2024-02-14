'use client'

import React, { useEffect, useState } from 'react'
import logo from '@/app/assets/icons/logo-main-white.svg'
import Image from 'next/image';

const PreLoader = () => {
    
    const [firstLoad, setFirstLoad] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => {
            setFirstLoad(false);
        }, 2000)
    }, []);

  return (
    <div className={`w-full ${firstLoad ? 'h-screen' : 'h-0'} overflow-hidden transition-all duration-500 ease-in-out bg-[color:var(--primary-black)] z-[200] fixed left-0 right-0 bottom-0 top-0 flex justify-center items-center`}>
      <Image src={logo} alt='Logo' className={`animate-pulse ${firstLoad ? '' : 'scale-0'} transition-all duration-500 ease-in-out`} width={600}  />
    </div>
  )
}

export default PreLoader