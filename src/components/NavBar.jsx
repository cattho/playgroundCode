import React from "react";

const NavBar = () => {
  return (
    <nav className='bg-[#000] p-3 mb-0.5'>
      <div className='container mx-auto flex items-center justify-around'>
        <img
          src='/src/assets/android-chrome-192x192.png'
          alt='Icono'
          className='h-8 w-8 text-white'
        />
      </div>
    </nav>
  );
};

export default NavBar;
