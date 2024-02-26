'use client'

import React, { useState } from 'react'
import link_img from '@/app/assets/icons/link.svg'
import link_white from '@/app/assets/icons/link-white.svg'
import link_black from '@/app/assets/icons/link-black.svg'
import Image from 'next/image';

interface PrimaryButtonProps {
  title: string;
  onClick?: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ title, onClick }) => {

  const [hoverTrue, setHoverTrue] = useState(false);

  return (
    <button onMouseEnter={() => setHoverTrue(true)} onMouseLeave={() => setHoverTrue(false)} onClick={onClick} className={`relative rounded-[5px] w-fit px-4 py-2.5 text-black hover:text-white text-[14px] font-[600] z-[110] active:scale-95 duration-200 ease-in-out flex items-center gap-5 justify-center overflow-hidden bg-[color:var(--primary-yellow)] hover:bg-transparent transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#282828] before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56`}>
      <p className='relative z-10'>{title}</p>
      <Image src={hoverTrue ? link_white : link_black} alt='Link image' className='relative z-10' width={18} />
    </button>
  )
}

export default PrimaryButton