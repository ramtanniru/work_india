"use client";
import { useEffect, useState } from "react";

const ProductsList = () => {
  const [stickyMenu, setStickyMenu] = useState(false);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", handleStickyMenu);
    };
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://run.mocky.io/v3/200998b7-f48d-4456-a639-0b5d2d275c12"
      );
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data); 
    };

    fetchProducts().catch(console.error);
  }, []);

  const filterProducts = () => {
    const filtered = products.filter((product) =>
      product.item.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="my-100">
      <header
        className={`fixed left-0 top-0 z-99999 w-full bg-gray-100 py-4 ${
          stickyMenu ? "shadow-lg transition duration-100" : ""
        }`}
      >
        <div className="px-4 bg-gray-100">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-black">Explore</h1>
            <button
              onClick={filterProducts}
              className="text-green-600 font-medium"
            >
              Filter
            </button>
          </div>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="mt-4 text-slate-700 p-2 w-full rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
        </div>
      </header>
      <div className="flex-grow bg-white mt-28">
        <ul className="divide-y">
          {filteredProducts.map((product) => (
            <li key={product.createdAt} className="flex p-4">
              <img
                src="https://placehold.co/50x50.png"
                alt={product.item}
                className="w-[50px] h-[50px] object-cover mb-2 rounded-md"
              />
              <div className="ml-4 flex-grow">
                <h2 className="font-medium text-lg text-black">
                  {product.item}
                </h2>
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
