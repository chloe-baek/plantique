import React from 'react';
import { CiCirclePlus } from 'react-icons/ci';
import { CiCircleMinus } from 'react-icons/ci';
import { RiDeleteBinLine } from 'react-icons/ri';
import { addOrUpdateToCart, removeFromCart } from '../api/firebase';

const ICON_CLASS =
  'transition-all cursor-pointer hover:text-primary hover:scale-105 mx-1';
export default function CartItem({
  product,
  product: { id, image, title, option, quantity, price },
  uid,
}) {
  const handleMinus = () => {
    if (quantity < 2) return;
    addOrUpdateToCart(uid, { ...product, quantity: quantity - 1 });
  };
  const handlePlus = () => {
    addOrUpdateToCart(uid, { ...product, quantity: quantity + 1 });
  };
  const handleDelete = () => {
    removeFromCart(uid, id);
  };
  return (
    <li className='flex justify-between my-2 items-center'>
      <img className='w-24 md:w-48 rounded-lg' src={image} alt={title} />
      <div className='flex-1 flex justify-between ml-4'>
        <div className='basis-3/5'>
          <p className='text-lg'>{title}</p>
          <p className='text-xl font-bold text-primary'>{option}</p>
          <p>${price}</p>
        </div>
        <div className='text-2xl flex items-center'>
          <CiCircleMinus className={ICON_CLASS} onClick={handleMinus} />
          <span>{quantity}</span>
          <CiCirclePlus className={ICON_CLASS} onClick={handlePlus} />
          <RiDeleteBinLine className={ICON_CLASS} onClick={handleDelete} />
        </div>
      </div>
    </li>
  );
}
