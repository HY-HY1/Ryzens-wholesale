import React from 'react'
import { NavItems } from './NavItems'

const Navbar = () => {
  return (
    <div className='w-full h-20 border-b'>
        <div className='w-[70vw] h-full grid grid-cols-2 gap-8 place-content-center m-auto'>
            <div className='w-full h-full '>
                <h2>Ryzenz Wholesale</h2>
            </div>
            <div className='w-full h-full  flex justify-end'>
              <NavItems/>
            </div>
        </div>
    </div>
  )
}

export default Navbar