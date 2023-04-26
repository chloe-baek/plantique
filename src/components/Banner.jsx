import React from 'react';

export default function Banner() {
  return (
    <section className='h-96 bg-primary relative'>
      <div className='w-full h-full bg-cover bg-banner opacity-50'></div>
      <div className='absolute w-full top-40 text-center text-gray-100  drop-shadow-2xl'>
        <h2 className='text-4xl font-serif'>
          Shop our plant collection online and bring life to your home or office
        </h2>
      </div>
    </section>
  );
}
