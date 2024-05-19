import React from 'react';
import Image from 'next/image';
import kpLogo from '../public/kp-logo.png';

type MenuButtonProps = {
  toggleSidebar: () => void;
};

const MenuButton = ({ toggleSidebar }: MenuButtonProps) => {
    console.log("Rendering MenuButton");
  return (
    <button onClick={toggleSidebar} className="fixed top-4 left-4 z-50">
      <Image src={kpLogo} className="logo" alt="Logo" width={50} height={50} />
    </button>
  );
};

export default MenuButton;