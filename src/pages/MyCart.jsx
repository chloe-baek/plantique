import React from 'react';
import { getCart } from '../api/firebase';
import { useQuery } from '@tanstack/react-query';
import { useUserContext } from '../context/UserContext';
import CartItem from '../components/CartItem';
import { BsPlus } from 'react-icons/bs';
import { CgMathEqual } from 'react-icons/cg';
import PriceCard from '../components/PriceCard';
import Button from '../components/ui/Button';

const SHIPPING = 3;
export default function MyCart() {
  const { uid } = useUserContext();
  const { isLoading, data: products } = useQuery(['carts'], () => getCart(uid));

  if (isLoading) return <p>Loading...</p>;

  const hasProducts = products && products.length > 0;
  const totalPrice =
    products &&
    products.reduce(
      (prev, current) => prev + parseInt(current.price) * current.quantity,
      0
    );
  return (
    <section className='p-8 flex flex-col'>
      <p className='text-2xl text-center font-bold pb-4 border-b border-gray-400'>
        Shopping Cart
      </p>
      {!hasProducts && <p>No product</p>}
      {hasProducts && (
        <>
          <ul className='border-b border-gray-300 mb-8 p-4 px-8'>
            {products &&
              products.map((product) => (
                <CartItem key={product.id} product={product} uid={uid} />
              ))}
          </ul>
          <div className='flex justify-between items-center mb-6 px-2 md:px-8 lg:px-10'>
            <PriceCard text='Total' price={totalPrice} />
            <BsPlus className='shrink-0' />
            <PriceCard text='Shipping' price={SHIPPING} />
            <CgMathEqual className='shrink-0' />
            <PriceCard text='Shipping' price={totalPrice + SHIPPING} />
          </div>
          <Button text='Place an Order' />
        </>
      )}
    </section>
  );
}
