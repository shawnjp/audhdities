import React, { ReactNode, useState } from 'react';
import Sidebar from './Sidebar';
import Image from 'next/image';
import kpLogo from '../public/kp-logo.png';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      <Sidebar />
      {!isSidebarOpen && (
        <button onClick={toggleSidebar} className="fixed top-4 left-4 z-50">
          <Image src={kpLogo} alt="Logo" width={50} height={50} />
        </button>
      )}
      <div className="content flex-1 p-4">
        {children}
      </div>
    </div>
  );
};

export default Layout;