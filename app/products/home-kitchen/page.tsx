import React from 'react';
import kitchen from '../../../public//Kitchen.jpg';
import CatagoryLayout from '@/app/components/Sections/CatagoryLayout';

const page = () => {
  const kitchenExamples = [
    'Cookware & Bakeware',
    'Small Kitchen Appliances',
    'Storage & Organization',
    'Dining Essentials',
  ];

  return (
    <div className='p-8'>
      <CatagoryLayout
        heading="Home & Kitchen"
        text="Upgrade your home and kitchen with our top-quality products. From cookware and appliances to dining essentials and storage solutions, find everything you need to make your space functional and stylish."
        image={kitchen.src}
        examples={kitchenExamples}
      />
    </div>
  );
};

export default page;
