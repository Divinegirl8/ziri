import React, { useState } from 'react';
import logo from "../assets/nav/applogo.svg";
import arrDown from "../assets/nav/Icon.svg";
import FilledButton from './FilledButton';


const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white px-6 md:px-[5rem] py-6  relative font-['Manrope']">
    
      <div className='flex justify-between items-center'>
        {/* Left: Logo + Nav Links (desktop only) */}
        <div className='flex items-center gap-20'>
          {/* Logo */}
          <div>
            <img src={logo} alt="Logo" className="w-[7rem] h-auto object-contain" />
          </div>

          {/* Nav Links (desktop only) */}
          <div className='hidden md:flex gap-6 text-[#8E94A4] text-[15px]'>
            <p className='cursor-pointer hover:text-black'>About</p>
            <p className='cursor-pointer hover:text-black'>Help</p>
            <p className='cursor-pointer hover:text-black'>Watch Demo</p>
          </div>
        </div>

        {/* Right: Sign In button (desktop only) */}
        <div className="hidden md:block">
          <FilledButton text='Sign in' textColor='#1355FF' backgroundColor='#E7EEFF' img={arrDown} pathname='/signIn' width="8rem"/>
        </div>

        {/* Hamburger (mobile only) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="flex flex-col justify-center items-center w-8 h-8">
            {isOpen ? (
              // X icon
              <div className="relative w-6 h-6">
                <span className="absolute top-1/2 left-0 w-6 h-[2px]  bg-[#1355FF] rotate-45"></span>
                <span className="absolute top-1/2 left-0 w-6 h-[2px] bg-[#1355FF] -rotate-45"></span>
              </div>
            ) : (
              // Hamburger icon
              <div className="flex flex-col justify-between w-6 h-4">
                <span className="w-full h-[2px]  bg-[#1355FF]"></span>
                <span className="w-full h-[2px]  bg-[#1355FF]"></span>
                <span className="w-full h-[2px]  bg-[#1355FF]"></span>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu (visible when open) */}
      {isOpen && (
  <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md z-50 px-6 py-4 flex flex-col gap-4 text-[#8E94A4] text-[15px]">
    <p className='cursor-pointer hover:text-black'>About</p>
    <p className='cursor-pointer hover:text-black'>Help</p>
    <p className='cursor-pointer hover:text-black'>Watch Demo</p>
    <FilledButton
      text='Sign in'
      textColor='#1355FF'
      backgroundColor='#E7EEFF'
      img={arrDown}
      pathname='/signIn'
      width="8rem"
    />
  </div>
)}

    </nav>
  );
};

export default Nav;
