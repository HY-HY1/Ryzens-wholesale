import React from 'react'
import Warehouse from '@/public/warehouse.jpg'

const Hero = () => {
  return (
    <div className='w-full h-[50vh] bg-cover bg-center flex justify-center items-center relative text-white ' style={{ backgroundImage: `url(${Warehouse.src})` }}>
        <div className='absolute inset-0 bg-black opacity-60'></div>
        <div className='w-[70vw] m-auto relative'>
            <h1 className='text-white'>Welcome to Ryzenz Wholesale</h1>
            <p className='w-[50vw] opacity-80'> At Ryzenz Wholesale, we pride ourselves on providing top-quality products at unbeatable prices. Our extensive inventory and exceptional customer service make us the go-to choice for businesses looking to stock their shelves with the best goods available. Join us and experience the difference in wholesale shopping.</p>
        </div>
    </div>
  )
}

export default Hero