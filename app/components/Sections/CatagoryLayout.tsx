import React from 'react';

interface CatagoryLayoutProps {
  text: string;
  image: string;
  heading: string;
  examples?: string[]; // Optional array of examples
}

const CatagoryLayout = ({ text, image, heading, examples }: CatagoryLayoutProps) => {
  return (
    <div className='w-full grid grid-cols-2 gap-20'>
      <div className='w-full flex justify-center'>
        <img src={image} className='rounded-lg shadow-md border' alt="Image" />
      </div>
      <div className='w-full flex flex-col justify-center'>
        <h3 className='text-2xl font-bold mb-4'>{heading}</h3>
        <p className='mb-6'>{text}</p>
        {examples && examples.length > 0 && (
          <div>
            <h4 className='text-xl font-semibold mb-2'>Our Examples Include:</h4>
            <ul className='list-disc pl-5'>
              {examples.map((example, index) => (
                <li key={index} className='text-gray-700'>
                  {example}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default CatagoryLayout;
