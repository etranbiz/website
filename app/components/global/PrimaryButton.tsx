import React from 'react'
import link_img from '@/app/assets/icons/link.svg'
import Image from 'next/image';

interface PrimaryButtonProps {
  title: string;
  onClick?: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ title, onClick }) => {
  return (
    <button onClick={onClick} className="relative rounded-[5px] w-fit px-4 py-2.5 text-black text-[14px] font-[600] z-[110] active:scale-95 duration-200 ease-in-out flex items-center gap-5 justify-center overflow-hidden bg-[color:var(--primary-yellow)] shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-gray-200 before:duration-500 before:ease-out hover:shadow-gray-200 hover:before:h-56 hover:before:w-56">
      <p className='relative z-10'>{title}</p>
      <Image src={link_img} alt='Link image' className='relative z-10' width={18} />
    </button>
  )
}

export default PrimaryButton