"use client"
import React from 'react';
import { products } from '../../../utils/data';
import { useEffect, useState } from "react";

const ProductsGrid = () => {

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
    <div className='my-100'>
        <div className="flex-grow p-4">
            <div className="grid grid-cols-3 gap-4">
              {products.map((product) => (
                <div key={product.id} className="flex flex-col items-start bg-white rounded-lg shadow-md p-4">
                  <img
                    src={`/${product.image_url}`}
                    alt={product.item}
                    className="w-[100] h-[100] object-cover mb-2 rounded-md"
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