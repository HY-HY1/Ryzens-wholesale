import React from 'react'
import ContactForm from '../components/Forms/ContactForm'

const page = () => {
  return (
    <div className=' w-[90vw] lg:w-[40vw] m-auto'>
        <h1 className='border-b p-2'>Ryzenz Contact Form</h1>
        <div className='mt-4'>
        <ContactForm/>
        </div>
    </div>
  )
}

export default page