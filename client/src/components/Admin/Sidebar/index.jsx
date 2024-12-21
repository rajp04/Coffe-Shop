import React, { useContext, useState } from 'react';
import Logo from '../../../assets/cafelogo.svg';
import { RxDashboard } from "react-icons/rx";
import { FaAngleDown, FaAngleUp, FaArrowLeft } from "react-icons/fa6";
import { MyContext } from '..';
import { Link, useNavigate } from 'react-router-dom';

function Sidebar() {
    const { setSidebarOpen } = useContext(MyContext);
    const [selectedItem, setSelectedItem] = useState('dashboard'); 
    const [dropdownOpen, setDropdownOpen] = useState('');

    const navigate = useNavigate();

    const toggleDropdown = (item) => {
        if (dropdownOpen === item) {
            setDropdownOpen(''); 
        } else {
            setDropdownOpen(item); 
        }
        setSelectedItem(item);
    };

    return (
        <div className="flex flex-col">
            <div className="flex items-center lg:justify-center justify-between px-5 pt-3">
                <img src={Logo} alt="Logo" onClick={() => navigate('/admin')} />
                <FaArrowLeft
                    onClick={() => setSidebarOpen(false)}
                    className="lg:hidden flex text-3xl text-gray-400 cursor-pointer"
                />
            </div>

            <div className="pt-10 px-5 space-y-1">
                {/* Dashboard */}
                <div
                    onClick={() => toggleDropdown('dashboard')}
                    className={`flex items-center px-3 py-2 rounded-[3px] text-[#EEE5DE] text-[18px] cursor-pointer ${
                        selectedItem === 'dashboard' ? 'bg-[#333a48]' : ''
                    }`}
                >
                    <Link to={'/admin'} className="flex items-center space-x-3">
                        <RxDashboard />
                        <h1>Dashboard</h1>
                    </Link>
                </div>

                {/* Booking */}
                <div
                    onClick={() => toggleDropdown('booking')}
                    className={`flex items-center px-3 py-2 rounded-[3px] text-[#EEE5DE] text-[18px] cursor-pointer ${
                        selectedItem === 'booking' ? 'bg-[#333a48]' : ''
                    }`}
                >
                    <Link to={'booking'} className="flex items-center space-x-3">
                        <RxDashboard />
                        <h1>Booking</h1>
                    </Link>
                </div>

                {/* Menu */}
                <div>
                    <div
                        onClick={() => toggleDropdown('menu')}
                        className={`flex items-center justify-between px-3 py-2 rounded-[3px] text-[#EEE5DE] text-[18px] cursor-pointer ${
                            selectedItem === 'menu' ? 'bg-[#333a48]' : ''
                        }`}
                    >
                        <div className="flex items-center space-x-3">
                            <RxDashboard />
                            <h1>Menu</h1>
                        </div>
                        <div>{dropdownOpen === 'menu' ? <FaAngleUp /> : <FaAngleDown />}</div>
                    </div>
                    {dropdownOpen === 'menu' && (
                        <div className="bg-[#333a48] text-[#EEE5DE] w-full">
                            <ul className="flex flex-col">
                                <Link
                                    to={'menu'}
                                    className="px-4 py-2 hover:bg-[#444444] cursor-pointer"
                                >
                                    Menu
                                </Link>
                                <Link
                                    to={'addmenu'}
                                    className="px-4 py-2 hover:bg-[#444444] cursor-pointer"
                                >
                                    Add Menu
                                </Link>
                            </ul>
                        </div>
                    )}
                </div>

                {/* Gallery */}
                <div>
                    <div
                        onClick={() => toggleDropdown('gallery')}
                        className={`flex items-center justify-between px-3 py-2 rounded-[3px] text-[#EEE5DE] text-[18px] cursor-pointer ${
                            selectedItem === 'gallery' ? 'bg-[#333a48]' : ''
                        }`}
                    >
                        <div className="flex items-center space-x-3">
                            <RxDashboard />
                            <h1>Gallery</h1>
                        </div>
                        <div>{dropdownOpen === 'gallery' ? <FaAngleUp /> : <FaAngleDown />}</div>
                    </div>
                    {dropdownOpen === 'gallery' && (
                        <div className="bg-[#333a48] text-[#EEE5DE] w-full">
                            <ul className="flex flex-col">
                                <Link
                                    to={'gallery'}
                                    className="px-4 py-2 hover:bg-[#444444] cursor-pointer"
                                >
                                    Gallery
                                </Link>
                                <Link
                                    to={'addgallery'}
                                    className="px-4 py-2 hover:bg-[#444444] cursor-pointer"
                                >
                                    Add Gallery
                                </Link>
                            </ul>
                        </div>
                    )}
                </div>

                {/* Service */}
                <div>
                    <div
                        onClick={() => toggleDropdown('service')}
                        className={`flex items-center justify-between px-3 py-2 rounded-[3px] text-[#EEE5DE] text-[18px] cursor-pointer ${
                            selectedItem === 'service' ? 'bg-[#333a48]' : ''
                        }`}
                    >
                        <div className="flex items-center space-x-3">
                            <RxDashboard />
                            <h1>Service</h1>
                        </div>
                        <div>{dropdownOpen === 'service' ? <FaAngleUp /> : <FaAngleDown />}</div>
                    </div>
                    {dropdownOpen === 'service' && (
                        <div className="bg-[#333a48] text-[#EEE5DE] w-full">
                            <ul className="flex flex-col">
                                <Link
                                    to={'service'}
                                    className="px-4 py-2 hover:bg-[#444444] cursor-pointer"
                                >
                                    Service
                                </Link>
                                <Link
                                    to={'addservice'}
                                    className="px-4 py-2 hover:bg-[#444444] cursor-pointer"
                                >
                                    Add Service
                                </Link>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;