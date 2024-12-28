import React from 'react';
import CatagoryLayout from '@/app/components/Sections/CatagoryLayout';

const page = () => {
  const healthExamples = [
    'Skincare Products',
    'Haircare Essentials',
    'Vitamins & Supplements',
    'Fitness Equipment',
  ];

  return (
    <div className='p-8'>
      <CatagoryLayout
        heading="Health & Personal Care"
        text="Enhance your well-being with our premium health and personal care products. From skincare essentials to fitness equipment, find everything you need to support a healthier, more vibrant lifestyle."
        examples={healthExamples}
        image='/HPC.jpg'
      />
    </div>
  );
};

export default page;
