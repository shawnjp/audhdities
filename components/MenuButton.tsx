import React from 'react';
import Image from 'next/image';
import kpLogo from '../public/kp-logo.png';

type MenuButtonProps = {
  toggleSidebar: () => void;
};

const MenuButton = ({ toggleSidebar }: MenuButtonProps) => {
    console.log("Rendering MenuButton");
  return (
    <button onClick={toggleSidebar} className="fixed top-4 left-4 z-50 bg-transparent">
      <Image src={kpLogo} className="logo2" alt="Logo" width={100} height={100} />
    </button>
  );
};

export default MenuButton;