import { useState } from 'react';
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
import MenuButton from '../components/MenuButton';
type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">      
      <div className="button-container">
          <UserButton />
          <MenuButton toggleSidebar={toggleSidebar} />
        </div>
        </div>
      <ul className="sidebar-links">
        <li className="p-4 hover:bg-gray-100">
          <Link href="/">Home</Link>
        </li>
        <li className="p-4 hover:bg-gray-100">
          <Link href="/about">About</Link>
        </li>
        <li className="p-4 hover:bg-gray-100">
          <Link href="/fundraiserinfo">Fundraiser Info</Link>
        </li>
        <li className="p-4 hover:bg-gray-100">
          <Link href="/information">Basic Info</Link>
        </li>        <li className="p-4 hover:bg-gray-100">
          <Link href="/community">Community</Link>
        </li>
        <li className="p-4 hover:bg-gray-100">
          <Link href="https://cash.app/$jessicalynne10?text=AudhditiesSupport">Donate via Cash App</Link>
        </li>
        <li className="p-4 hover:bg-gray-100">
          <Link href="https://www.paypal.me/Tjdpoetry?text=AudhditiesSupport">Donate via PayPal</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;