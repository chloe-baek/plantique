import React, { useState } from 'react';
import Button from '../components/ui/Button';
import { uploadImage } from '../api/uploader';
import { addNewProduct } from '../api/firebase';

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFile(files && files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUploading(true);
    uploadImage(file) //
      .then((url) => {
        console.log(url);
        addNewProduct(product, url) //
          .then(() => {
            setSuccess('The product has been successfully added.');
            setTimeout(() => {
              setSuccess(null);
            }, 4000);
          });
      })
      .finally(() => setIsUploading(false));
  };
  return (
    <section className='w-full text-center'>
      <h2 className='text-2xl font-bold my-4'>Registering a new product.</h2>
      {success && <p className='my-2'>✅ {success}</p>}
      {file && (
        <img
          className='w-96 mx-auto mb-2'
          src={URL.createObjectURL(file)}
          alt='local file'
        />
      )}
      <form className='flex flex-col px-12' onSubmit={handleSubmit}>
        <input
          type='file'
          accept='image/*'
          name='file'
          required={true}
          onChange={handleChange}
        />
        <input
          type='text'
          name='title'
          value={product.title ?? ''}
          placeholder='Product name'
          required={true}
          onChange={handleChange}
        />
        <input
          type='number'
          name='price'
          value={product.price ?? ''}
          placeholder='Price'
          required={true}
          onChange={handleChange}
        />
        <input
          type='text'
          name='category'
          value={product.category ?? ''}
          placeholder='Category'
          required={true}
          onChange={handleChange}
        />
        <input
          type='text'
          name='description'
          value={product.description ?? ''}
          placeholder='Description'
          required={true}
          onChange={handleChange}
        />
        <input
          type='text'
          name='options'
          value={product.options ?? ''}
          placeholder='Options(콤마(,)로 구분)'
          required={true}
          onChange={handleChange}
        />
        <Button
          text={isUploading ? 'Loading...' : 'Add Product'}
          disabled={isUploading}
        />
      </form>
    </section>
  );
}
