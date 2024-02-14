import React from 'react'
import SecondaryButton from './SecondaryButton'

const ContactForm = () => {
    return (
        <div className='w-full max-w-[550px] flex flex-col gap-4'>
            <div className='w-full flex'>
                <div className='w-full'><input type="text" name="" className='bg-[color:var(--secondary-color)] outline-none w-full border rounded-[10px] p-4' id="" placeholder='Name' /></div>
            </div>
            <div className='w-full flex gap-4'>
                <div className='w-full'><input type="text" name="" className='bg-[color:var(--secondary-color)] outline-none w-full border rounded-[10px] p-4' id="" placeholder='Email' /></div>
                <div className='w-full'><input type="text" name="" className='bg-[color:var(--secondary-color)] outline-none w-full border rounded-[10px] p-4' id="" placeholder='Password' /></div>
            </div>
            <div className='w-full flex'>
                <div className='w-full'><textarea cols={30} rows={4} className='w-full bg-[color:var(--secondary-color)] outline-none p-4 border rounded-[10px]' placeholder='Message' /></div>
            </div>
            <div className='w-full flex justify-end'>
                <SecondaryButton title='SUBMIT' />
            </div>
        </div>
    )
}

export default ContactForm