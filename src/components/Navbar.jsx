import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Nimblefinlogo from "../assets/nimblefinalmedlogo.png"
import NimbinfinSmalllogo from "../assets/nimblefinlogo.png"

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    // <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black'>
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black bg-transparent relative z-20'>
      <Link to="/">
        <img
          className="w-[90%] max-w-[500px] sm:max-w-[380px]"
          src={Nimblefinlogo}
          alt="nimblefin logo"
        />
      </Link>
      <ul className='hidden md:flex'>
        <li className='p-4 '><Link to="/" className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-[#ba0707] after:transition-all after:duration-300 hover:after:w-full">Home</Link></li>
        <li className='p-4'><Link to="/about" className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-[#ba0707] after:transition-all after:duration-300 hover:after:w-full">About</Link></li>
        <li className='p-4'><Link to="/services" className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-[#ba0707] after:transition-all after:duration-300 hover:after:w-full">Services</Link></li>
        <li className='p-4'><Link to="/contact" className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-[#ba0707] after:transition-all after:duration-300 hover:after:w-full">Contact</Link></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      {nav && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-30 md:hidden" onClick={handleNav}></div>
      )}
      <ul className={nav
        ? 'fixed left-0 top-0 z-50 w-[60%] h-full overflow-y-auto border-r border-r-gray-900 bg-white ease-in-out duration-500'
        : 'fixed left-[-100%] top-0 z-50 w-[60%] h-full overflow-y-auto border-r border-r-gray-900 bg-white ease-in-out duration-500'}>
        <li className="flex justify-center items-center h-24 border-b border-gray-600">
          <Link to="/">
            <img className="w-2/5 mx-auto" src={NimbinfinSmalllogo} alt="nimblefin logo" />
          </Link>
        </li>
        <li className='p-4 border-b border-gray-600'><Link to='/'>Home</Link></li>
        <li className='p-4 border-b border-gray-600'><Link to='/about'>About</Link></li>
        <li className='p-4 border-b border-gray-600'><Link to='/services'>Services</Link></li>
        <li className='p-4 border-b border-gray-600'><Link to='/contact'>Contact</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
