import React from 'react'
import Products from '../components/Sections/Products'
const page = () => {
  return (
    <div className='w-[70vw] m-auto'>
      <div className='w-full grid grid-cols-2 gap-40 my-10'>
        <div className='rounded-md shado-sm'>
          <img src='/forklift.jpg' className='rounded-xl brightness-50 max-w-[400px min-h-[400px] object-cover shadow-sm ' alt="Stock" />
        </div>
        <div className='w-full h-full text-left content-center  m-auto'>
          <p>At Ryzenz, we stock a range of products to meet all your needs. From the latest tech gadgets to everyday essentials, we have it all. Browse our collection and find what you're looking for today!</p>
        </div>
      </div>
      <div className='py-6'>
      <Products/>
      </div>
    </div>
  )
}

export default page