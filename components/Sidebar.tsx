import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';

const Sidebar = () => {
  return (
    <div className="sidebar w-64 h-full shadow-md bg-white absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <div className="sidebar-header p-4 flex justify-between items-center">
        <h1 className="text-lg font-bold">Menu</h1>
      </div>
      <div className="user-button-large">
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
          <Link href="/services">
            Services
          </Link>
        </li>
        <li className="p-4 hover:bg-gray-100">
          <Link href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;