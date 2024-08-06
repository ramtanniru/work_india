"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
  const [stickyMenu, setStickyMenu] = useState(false);

  const pathUrl = usePathname();

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  const products = [
    { id: 1, name: 'Item 1', price: '₹100.0', sameDayShipping: true },
    { id: 2, name: 'Item 2', price: '₹10.0', sameDayShipping: true },
    { id: 3, name: 'Item 3', price: '₹130.0', sameDayShipping: false },
    { id: 4, name: 'Item 4', price: '₹230.0', sameDayShipping: false },
    { id: 5, name: 'Item 5', price: '₹230.0', sameDayShipping: false },
    { id: 6, name: 'Item 6', price: '₹230.0', sameDayShipping: false },
    { id: 7, name: 'Item 7', price: '₹230.0', sameDayShipping: false },
    { id: 8, name: 'Item 8', price: '₹230.0', sameDayShipping: false },
];

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  });

  return (
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
  );
};

export default Header;

