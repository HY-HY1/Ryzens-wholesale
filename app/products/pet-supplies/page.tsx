import React from 'react';
import Pet from '../../../public/Pet.jpg';
import CatagoryLayout from '@/app/components/Sections/CatagoryLayout';

const page = () => {
  const petExamples = [
    'Pet Food & Treats',
    'Pet Grooming Products',
    'Pet Beds & Furniture',
    'Pet Toys & Accessories',
  ];

  return (
    <div className='p-8'>
      <CatagoryLayout
        heading="Pet Supplies"
        text="Keep your furry friends happy and healthy with our wide selection of pet supplies. From nutritious food and treats to grooming products and toys, we have everything your pet needs."
        image={Pet.src}
        examples={petExamples}
      />
    </div>
  );
};

export default page;
