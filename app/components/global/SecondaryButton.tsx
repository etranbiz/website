import React from 'react'

interface SecondaryButtonProps {
    title: string;
   onClick?: () => void;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ title, onClick }) => {
  return (
    <button onClick={onClick} className='w-fit rounded-[7px] border-[color:var(--primary-yellow)] text-[color:var(--primary-yellow)] text-[14px] font-[600] active:scale-95 transition-all duration-200 ease-in-out flex gap-2 items-center'>{title} <span>{`>`}</span> </button>
  )
}

export default SecondaryButton