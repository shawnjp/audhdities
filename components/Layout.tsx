import React, { ReactNode } from 'react';
import Sidebar from './Sidebar';

type LayoutProps = {
  children: ReactNode;
  isOpen: boolean;
  toggleSidebar: () => void;
};

const Layout: React.FC<LayoutProps> = ({ children, isOpen, toggleSidebar }) => {
  return (
    <div className="flex">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="content flex-1 p-4">
        {children}
      </div>
    </div>
  );
};

export default Layout;