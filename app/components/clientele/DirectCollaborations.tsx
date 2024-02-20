import React from 'react'
import hp from '@/app/assets/images/hp.svg'
import dxc from '@/app/assets/images/dxc.svg'
import neutrinos from '@/app/assets/images/neutrinos.svg'
import oracle from '@/app/assets/images/oracle.svg'
import infosys from '@/app/assets/images/infosys.svg'
import inatech from '@/app/assets/images/inatech.svg'
import enrich from '@/app/assets/images/enrich.svg'
import ujjivan from '@/app/assets/images/ujjivan.svg'
import Image from 'next/image';

const DirectCollaborations = () => {

    const clients = {
        directClients: [
            {
                id: 0,
                title: 'Hewlett Packard',
                image: hp,
            },
            {
                id: 1,
                title: 'DXC Tech',
                image: dxc,
            },
            {
                id: 2,
                title: 'Neutrinos',
                image: neutrinos,
            },
            {
                id: 3,
                title: 'Oracle',
                image: oracle,
            },
            {
                id: 4,
                title: 'Infosys',
                image: infosys,
            },
            {
                id: 5,
                title: 'Inatech',
                image: inatech,
            },
            {
                id: 6,
                title: 'enrich',
                image: enrich,
            },
            {
                id: 7,
                title: 'ujjivan',
                image: ujjivan,
            },
        ],
    };

  return (
    <div className='w-full px-[18rem]'>
        <h1 className='font-[700] text-[20px] text-[color:var(--primary-teal)] pl-4'>Our direct collaborations</h1>
        <div className='w-fit grid grid-cols-4 lg:grid-cols-6 gap-3'>
            {
                clients?.directClients?.map((data) => (
                    <div className='w-full flex justify-start items-center' key={data?.id}>
                        <Image src={data?.image} alt='Company Logo' className='border' />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default DirectCollaborations