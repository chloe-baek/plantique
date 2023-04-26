import React from 'react';

export default function Button({ text, onClick }) {
  return (
    <button
      className=' bg-primary text-white py-2 px-4 rounded-lg hover:brightness-110'
      onClick={onClick}
    >
      {text}
    </button>
  );
}
