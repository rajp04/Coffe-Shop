import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../../assets/cafelogo.svg';
import { useNavigate } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate()

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-[#121D27]">
      <div className="flex items-center justify-between w-[90%] h-[104px] m-auto py-[10px]">
        <div onClick={() => navigate('/')}>
          <img src={Logo} alt="Logo" className="lg:h-[66px] h-[50px] cursor-pointer" />
        </div>

        <div className="hidden md:flex items-center lg:text-[25px] text-[20px] text-[#FFFFFF] lg:font-semibold xl:space-x-12 space-x-4">
          <div className='relative flex flex-col items-center'>
            <li className="list-none cursor-pointer" onClick={() => navigate('/')}>Home</li>
            {/* <p className='border-[3px] rounded-md border-[#C5A572] w-20 top-[63px] absolute'></p> */}
          </div>
          <div className='relative flex flex-col items-center'>
            <li className="list-none cursor-pointer" onClick={() => navigate('/menu')}>Menu</li>
            {/* <p className='border-[3px] rounded-md border-[#C5A572] w-20 top-[63px] absolute'></p> */}
          </div>
          <div className='relative flex flex-col items-center'>
            <li className="list-none cursor-pointer whitespace-nowrap" onClick={() => navigate('/about')}>About Us</li>
            {/* <p className='border-[3px] rounded-md border-[#C5A572] w-20 top-[63px] absolute'></p> */}
          </div>
          <div className='relative flex flex-col items-center'>
            <li className="list-none cursor-pointer" onClick={() => navigate('/gallery')}>Gallery</li>
            {/* <p className='border-[3px] rounded-md border-[#C5A572] w-20 top-[63px] absolute'></p> */}
          </div>
          <div className='relative flex flex-col items-center'>
            <li className="list-none cursor-pointer" onClick={() => navigate('/service')}>Services</li>
            {/* <p className='border-[3px] rounded-md border-[#C5A572] w-20 top-[63px] absolute'></p> */}
          </div>
          <div className='relative flex flex-col items-center'>
            <li className="list-none cursor-pointer whitespace-nowrap" onClick={() => navigate('/contact')}>Contact Us</li>
            {/* <p className='border-[3px] rounded-md border-[#C5A572] w-20 top-[63px] absolute'></p> */}
          </div>
        </div>

        <div className="md:hidden text-[#FFFFFF] text-2xl cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#121D27] text-[#FFFFFF] font-semibold">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li className="cursor-pointer" onClick={() => navigate('/')}>Home</li>
            <li className="cursor-pointer" onClick={() => navigate('/menu')}>Menu</li>
            <li className="cursor-pointer" onClick={() => navigate('/about')}>About Us</li>
            <li className="cursor-pointer" onClick={() => navigate('/gallery')}>Gallery</li>
            <li className="cursor-pointer" onClick={() => navigate('/service')}>Services</li>
            <li className="cursor-pointer" onClick={() => navigate('/contact')}>Contact Us</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
