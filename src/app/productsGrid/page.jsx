"use client"
import React from 'react';
import { products } from '../../../utils/data';
import { useEffect, useState } from "react";

const ProductsGrid = () => {
  const [stickyMenu, setStickyMenu] = useState(false);

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  });
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://run.mocky.io/v3/200998b7-f48d-4456-a639-0b5d2d275c12');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts().catch(console.error); 
  }, []);

  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredProducts(products.filter(product => product.name.toLowerCase().includes(query)));
  };

  return (
    <div className='my-100 bg-white'>
      <header
        className={`fixed left-0 top-0 z-99999 w-full bg-gray-100 py-4 ${
          stickyMenu
            ? "shadow-lg transition duration-100 "
            : ""
        }`}
      >
          <div className="px-4 bg-gray-100">
              <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-black">Explore</h1>
              <button className="text-green-600 font-medium">Filter</button>
              </div>
              <input
              type="text"
              placeholder="Search"
              className="mt-4 p-2 w-full rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
          </div>
      </header>
        <div className="flex-grow p-4">
            <div className="grid grid-cols-3 gap-4">
              {products.map((product) => (
                <div key={product.id} className="flex flex-col items-start bg-white rounded-lg p-2">
                  <img
                    src="https://placehold.co/110x110.png"
                    alt={product.item}
                    className="w-full object-cover mb-2 rounded-md"
                  />
                  <h2 className="font-light text-sm text-black">{product.item}</h2>
                  <p className="font-medium text-black">₹ {product.price}</p>
                </div>
              ))}
            </div>
        </div>
    </div>
    );
}
export default ProductsGrid;