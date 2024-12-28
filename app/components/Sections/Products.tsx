import React from 'react';
import HCP from '../../../public/HPC.jpg';
import Kitchen from '../../../public/kitchen.jpg';
import Health from '../../../public/Heath.jpg';
import Pet from '../../../public/pet.jpg';  
import Baby from '../../../public/baby.jpg';
import Electronics from '../../../public/Electronics.webp';
import Link from 'next/link';

const productArray = [
    { image: HCP, text: 'Health & Personal Care', url: 'health-personal-care' },
    { image: Kitchen, text: 'Home & Kitchen', url: 'home-kitchen' },
    { image: Health, text: 'Sports & Outdoors', url: 'sports-outdoors' },
    { image: Pet, text: 'Pet Supplies', url: 'pet-supplies' },
    { image: Baby, text: 'Baby Products', url: 'baby-products' },
    { image: Electronics, text: 'Electronics & Accessories', url: 'electronics-accessories' },
];

const Products = () => {
  return (
    <div className='w-[70vw] m-auto mt-10'>
        <div className='py-2 border-b w-full'>
            <h2>Our Products</h2>
        </div>
        <div className='w-full grid grid-cols-3 gap-8 my-4'>
            {productArray.map((product, index) => (
                <Link href={`/products/${encodeURIComponent(product.url)}`} key={index}>
                    <div className='w-full h-[30vh] rounded-md hover:scale-105 transition-all bg-cover bg-center relative' style={{ backgroundImage: `url(${product.image.src})` }}>
                        <div className='absolute inset-0 rounded-md bg-black opacity-60'></div>
                        <div className='absolute inset-0 flex justify-center items-center'>
                            <h3 className='text-white'>{product.text}</h3>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Products;
