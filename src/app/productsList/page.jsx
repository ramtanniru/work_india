"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const ProductsList = () => {
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

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://run.mocky.io/v3/200998b7-f48d-4456-a639-0b5d2d275c12');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts().catch(console.error); 
  }, []);

  return (
    <div className="my-100">
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
        <div className="flex-grow bg-white">
            <ul className="divide-y divide-gray-200">
            {products.map((product) => (
                <li key={product.createdAt} className="flex p-4">
                <img
                    src="https://placehold.co/50x50.png"
                    alt={product.item}
                    className="w-[50] h-[50] object-cover mb-2 rounded-md"
                  />
                <div className="ml-4 flex-grow">
                    <h2 className="font-medium text-lg text-black">{product.item}</h2>
                    <p className="text-gray-500">MRP: ₹{product.price}</p>
                </div>
                {product.shipping_method && (
                    <div className="flex items-center justify-center">
                    <span className="text-gray-400">{product.shipping_method}</span>
                    </div>
                )}
                </li>
            ))}
            </ul>
        </div>
    </div>
  );
};

export default ProductsList;
