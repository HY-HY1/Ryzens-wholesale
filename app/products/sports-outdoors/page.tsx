import React from 'react';
import sports from '../../../public//Heath.jpg';
import CatagoryLayout from '@/app/components/Sections/CatagoryLayout';

const page = () => {
  const sportsExamples = [
    'Fitness Equipment',
    'Outdoor Gear & Accessories',
    'Sports Apparel & Footwear',
    'Cycling & Hiking Equipment',
  ];

  return (
    <div className='p-8'>
      <CatagoryLayout
        heading="Sports & Outdoors"
        text="Gear up for your active lifestyle with our premium sports and outdoor products. From fitness equipment to hiking and cycling gear, find everything you need for your outdoor adventures and sports activities."
        image={sports.src}
        examples={sportsExamples}
      />
    </div>
  );
};

export default page;
