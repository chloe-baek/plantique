import React from 'react';
import { TbShoppingBag } from 'react-icons/tb';
import useCart from '../hooks/useCart';

export default function CartStatus() {
  const {
    cartQuery: { data: products },
  } = useCart();

  return (
    <div className='relative'>
      <TbShoppingBag className='text-3xl' />
      {products && (
        <p className='w-5 h-5 text-sm text-center bg-primary text-white font-bold rounded-full absolute -top-1 -right-2'>
          {products.length}
        </p>
      )}
    </div>
  );
}
