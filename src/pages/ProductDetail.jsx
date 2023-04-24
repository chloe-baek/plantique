import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../components/ui/Button';
import useCart from '../hooks/useCart';

export default function ProductDetail() {
  const { addOrUpdateItem } = useCart();
  const {
    state: {
      product: { id, image, title, description, category, price, options },
    },
  } = useLocation();
  const [success, setSuccess] = useState();
  const [selected, setSelected] = useState(options && options[0]);
  const handleSelect = (e) => {
    setSelected(e.target.value);
  };
  const handleClick = (e) => {
    const product = { id, image, title, price, option: selected, quantity: 1 };
    addOrUpdateItem.mutate(product, {
      onSuccess: () => {
        setSuccess('The plant has been successfully added to the cart.🪴');
        setTimeout(() => setSuccess(null), 4000);
      },
    });
  };
  return (
    <section className='flex flex-col md:flex-row justify-evenly p-4 mt-5'>
      <img
        className='w-full max-w-[45%] px-4 basis-7/12 sm:slef-center'
        src={image}
        alt={title}
      />
      <div className='basis-5/12 flex flex-col p-4'>
        <h2 className='text-3xl font-bold py-2 '>{title}</h2>
        <p className='mb-3 pb-2 text-gray-600 font-bold text-right border-b border-gray-400'>
          {category}
        </p>
        <p className='text-2xl font-bold py-2'>${price}</p>
        <p className='py-4 text-lg'>{description}</p>
        <div className='flex items-center w-1/5'>
          <label className='text-primary font-bold' htmlFor='select'>
            Size:
          </label>
          <select
            id='select'
            className='p-2 m-4 flex-1 border-2 border-solid border-primary outline-none text-center'
            onChange={handleSelect}
            value={selected}
          >
            {options &&
              options.map((option, index) => (
                <option key={index}>{option}</option>
              ))}
          </select>
        </div>
        {success && <p className='my-2 font-semibold text-lg'>{success}</p>}
        <Button text='Add' onClick={handleClick} />
      </div>
    </section>
  );
}
