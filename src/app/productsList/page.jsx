"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const ProductsList = () => {
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
        <div className="flex-grow bg-white">
            <ul className="divide-y divide-gray-200">
            {products.map((product) => (
                <li key={product.createdAt} className="flex p-4">
                <img
                    src={`/${product.image_url}`}
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
