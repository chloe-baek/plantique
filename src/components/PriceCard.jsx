import React from 'react';

export default function PriceCard({ text, price }) {
  return (
    <div className='bg-gray-50 p-8 m-2 rounded-2xl text-center text-lg md:text-lg'>
      <p>{text}</p>
      <p className='font-bold text-primary text-xl md:text-2xl'>${price}</p>
    </div>
  );
}
