import React from 'react'
import ClientDropdown from './ClientDropdown';

const ClientsLanding = () => {
  return (
    <div className='w-full pb-[180px] px-[18rem]'>
      <h1 className='text-[20px] text-[color:var(--primary-teal)] font-[800] mb-5'>CLIENTS ACROSS MULTIPLE INDUSTRIES</h1>
      <div className='w-full'>
        <ClientDropdown />
      </div>
    </div>
  )
}

export default ClientsLanding
