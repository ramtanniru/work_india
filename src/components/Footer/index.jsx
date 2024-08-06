"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-white shadow-md fixed bottom-0 w-full h-16 flex items-center justify-around">
      <a
        href='/productsList'
        className={`w-8 h-8 rounded-full focus:outline-none transition-colors duration-200 ${
          activeIndex === 0 ? 'bg-green-600' : 'bg-gray-400 hover:bg-gray-500'
        }`}
      ></a>
      <a
        href='/productsGrid'
        className={`w-8 h-8 rounded-full focus:outline-none transition-colors duration-200 ${
          activeIndex === 0 ? 'bg-green-600' : 'bg-gray-400 hover:bg-gray-500'
        }`}
      ></a>
      <a
        href='/addItem'
        className={`w-8 h-8 rounded-full focus:outline-none transition-colors duration-200 ${
          activeIndex === 0 ? 'bg-green-600' : 'bg-gray-400 hover:bg-gray-500'
        }`}
      ></a>
      <a
        href='/productsList'
        className={`w-8 h-8 rounded-full focus:outline-none transition-colors duration-200 ${
          activeIndex === 0 ? 'bg-green-600' : 'bg-gray-400 hover:bg-gray-500'
        }`}
      ></a>
      <a
        href='/productsList'
        className={`w-8 h-8 rounded-full focus:outline-none transition-colors duration-200 ${
          activeIndex === 0 ? 'bg-green-600' : 'bg-gray-400 hover:bg-gray-500'
        }`}
      ></a>
    </div>
  );
};

export default Footer;

