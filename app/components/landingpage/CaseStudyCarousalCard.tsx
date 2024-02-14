import React from 'react'
import SecondaryButton from '../global/SecondaryButton'
import PrimaryButton from '../global/PrimaryButton'
import Image from 'next/image'

interface CaseStudyCarousalCardProps {
    title: string;
    content: string;
    image: string;
}

const CaseStudyCarousalCard: React.FC<CaseStudyCarousalCardProps> = ({ title, content, image }) => {
  return (
    <div className='w-full flex gap-'>
    <div className='w-full'>
        <div className='w-fit max-w-[550px] flex flex-col'>
            <h1 className='text-[20px] text-[color:var(--primary-teal)] font-[800]'>OUR CASE STUDIES</h1>
            <p className='text-[40px] text-white leading-[40px] mt-5 mb-2.5'>{title}</p>
            <p className='text-[16px] text-white mt-2.5 mb-5 font-[500]'>{content}</p>
            <div className='flex flex-col gap-5'>
                <SecondaryButton title='READ MORE' />
            </div>
        </div>
    </div>
    <div className='w-fit  pr-5'>
        <Image src={image} width={600} alt='case study' />
    </div>
</div>
  )
}

export default CaseStudyCarousalCard