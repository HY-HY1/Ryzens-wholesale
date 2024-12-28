import React from 'react';
import CatagoryLayout from '@/app/components/Sections/CatagoryLayout';

const page = () => {
  const electronicsExamples = [
    'Smartphones & Accessories',
    'Laptops & Tablets',
    'Headphones & Speakers',
    'Smart Home Devices',
  ];

  return (
    <div className='p-8'>
      <CatagoryLayout
        heading="Electronics & Accessories"
        text="Discover our wide range of electronics, from the latest smartphones and laptops to smart home devices and accessories. Whether you're upgrading your tech or searching for innovative gadgets, we have you covered."
        examples={electronicsExamples}
        image='/Electronics.webp'
      />
    </div>
  );
};

export default page;
