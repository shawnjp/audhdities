import { useState } from 'react';
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage sidebar visibility

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className="sidebar w-64 h-full shadow-md bg-white absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <div className="sidebar-header p-14 flex justify-between items-center">
        
      <UserButton />
   
      </div>
 
      <ul className="sidebar-links">
        <li className="p-4 hover:bg-gray-100">
          <Link href="/">
            Home
          </Link>
        </li>
        <li className="p-4 hover:bg-gray-100">
          <Link href="/about">
            About
          </Link>
        </li>
        <li className="p-4 hover:bg-gray-100">
          <Link href="/fundraiserinfo">
            Fundraiser Info
          </Link>
        </li>
        <li className="p-4 hover:bg-gray-100">
          <Link href="https://cash.app/$jessicalynne10?text=AudhditiesSupport">
          Donate via Cash App
          </Link>
        </li>
        <li className="p-4 hover:bg-gray-100">
          <Link href="https://www.paypal.me/Tjdpoetry?text=AudhditiesSupport">
          Donate via PayPal
          </Link>
        </li>
        
      </ul>
    </div>
  );
};

export default Sidebar;