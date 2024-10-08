import React from "react";

const NavBar = () => {
  return (
    <nav className='bg-[#2d2d2d] p-3 mb-0.5 select-none'>
      <div className='container mx-auto flex items-center justify-between'>
        <img
          src='/src/assets/android-chrome-192x192.png'
          alt='Icono'
          className='h-8 w-8'
        />
        <p className="text-[#fcfcfc]">Code Playground</p>
      </div>
    </nav>
  );
};

export default NavBar;
