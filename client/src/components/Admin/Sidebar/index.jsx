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
    const [nestedDropdownOpen, setNestedDropdownOpen] = useState('');

    const navigate = useNavigate();

    const toggleDropdown = (item) => {
        setDropdownOpen(dropdownOpen === item ? '' : item);
    };

    const toggleNestedDropdown = (item) => {
        setNestedDropdownOpen(nestedDropdownOpen === item ? '' : item);
    };

    return (
        <div className="flex flex-col">
            <div className="flex items-center lg:justify-center justify-between px-5 pt-3">
                <img src={Logo} alt="Logo" className='cursor-pointer' onClick={() => navigate('/admin')} />
                <FaArrowLeft
                    onClick={() => setSidebarOpen(false)}
                    className="lg:hidden flex text-3xl text-gray-400 cursor-pointer"
                />
            </div>

            <div className="pt-10 px-5 space-y-1">
                {/* Dashboard */}
                <div
                    onClick={() => toggleDropdown('dashboard')}
                    className={`flex items-center px-3 py-2 rounded-[3px] text-[#EEE5DE] text-[18px] cursor-pointer ${selectedItem === 'dashboard' ? 'bg-[#333a48]' : ''
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
                    className={`flex items-center px-3 py-2 rounded-[3px] text-[#EEE5DE] text-[18px] cursor-pointer ${selectedItem === 'booking' ? 'bg-[#333a48]' : ''
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
                        className={`flex items-center justify-between px-3 py-2 rounded-[3px] text-[#EEE5DE] text-[18px] cursor-pointer ${selectedItem === 'menu' ? 'bg-[#333a48]' : ''
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
                        className={`flex items-center justify-between px-3 py-2 rounded-[3px] text-[#EEE5DE] text-[18px] cursor-pointer ${selectedItem === 'gallery' ? 'bg-[#333a48]' : ''
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
                        className={`flex items-center justify-between px-3 py-2 rounded-[3px] text-[#EEE5DE] text-[18px] cursor-pointer ${selectedItem === 'service' ? 'bg-[#333a48]' : ''
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

                {/* Blogs */}
                <div>
                    <div
                        onClick={() => toggleDropdown('blog')}
                        className={`flex items-center justify-between px-3 py-2 rounded-[3px] text-[#EEE5DE] text-[18px] cursor-pointer ${selectedItem === 'blog' ? 'bg-[#333a48]' : ''
                            }`}
                    >
                        <div className="flex items-center space-x-3">
                            <RxDashboard />
                            <h1>Blog</h1>
                        </div>
                        <div>{dropdownOpen === 'blog' ? <FaAngleUp /> : <FaAngleDown />}</div>
                    </div>
                    {dropdownOpen === 'blog' && (
                        <div className="bg-[#333a48] text-[#EEE5DE] w-full">
                            <ul className="flex flex-col">
                                <Link
                                    to={'blog'}
                                    className="px-4 py-2 hover:bg-[#444444] cursor-pointer"
                                >
                                    Blog
                                </Link>
                                <Link
                                    to={'addblog'}
                                    className="px-4 py-2 hover:bg-[#444444] cursor-pointer"
                                >
                                    Add Blog
                                </Link>
                            </ul>
                        </div>
                    )}
                </div>

                {/* Home */}
                <div>
                    {/* Main Dropdown */}
                    <div
                        onClick={() => toggleDropdown('home')}
                        className={`flex items-center justify-between px-3 py-2 rounded-[3px] text-[#EEE5DE] text-[18px] cursor-pointer ${dropdownOpen === 'home' ? 'bg-[#333a48]' : ''
                            }`}
                    >
                        <div className="flex items-center space-x-3">
                            <RxDashboard />
                            <h1>Home</h1>
                        </div>
                        <div>{dropdownOpen === 'home' ? <FaAngleUp /> : <FaAngleDown />}</div>
                    </div>

                    {/* Home Dropdown Content */}
                    {dropdownOpen === 'home' && (
                        <div className="bg-[#333a48] text-[#EEE5DE] w-full">

                            {/* Nested Dropdown for Banner Options */}
                            <div
                                onClick={() => toggleNestedDropdown('banner')}
                                className="px-4 py-2 flex justify-between items-center cursor-pointer hover:bg-[#444444]"
                            >
                                <span>Banner Options</span>
                                {nestedDropdownOpen === 'banner' ? <FaAngleUp /> : <FaAngleDown />}
                            </div>
                            {nestedDropdownOpen === 'banner' && (
                                <div className="bg-[#444444] pl-6">
                                    <ul className="flex flex-col">
                                        <Link
                                            to={'home/banner'}
                                            className="px-4 py-2 hover:bg-[#555555] cursor-pointer"
                                        >
                                            View Banner
                                        </Link>
                                        <Link
                                            to={'home/addbanner'}
                                            className="px-4 py-2 hover:bg-[#555555] cursor-pointer"
                                        >
                                            Add Banner
                                        </Link>
                                    </ul>
                                </div>
                            )}

                            {/* Nested Dropdown for Testimonial Options */}
                            <div
                                onClick={() => toggleNestedDropdown('testimonial')}
                                className="px-4 py-2 flex justify-between items-center cursor-pointer hover:bg-[#444444]"
                            >
                                <span>Testimonial Options</span>
                                {nestedDropdownOpen === 'testimonial' ? <FaAngleUp /> : <FaAngleDown />}
                            </div>
                            {nestedDropdownOpen === 'testimonial' && (
                                <div className="bg-[#444444] pl-6">
                                    <ul className="flex flex-col">
                                        <Link
                                            to={'home/testimonial'}
                                            className="px-4 py-2 hover:bg-[#555555] cursor-pointer"
                                        >
                                            View Testimonial
                                        </Link>
                                        <Link
                                            to={'home/addtestimonial'}
                                            className="px-4 py-2 hover:bg-[#555555] cursor-pointer"
                                        >
                                            Add Testimonial
                                        </Link>
                                    </ul>
                                </div>
                            )}

                            {/* Nested Dropdown for Team Member Options */}
                            <div
                                onClick={() => toggleNestedDropdown('team')}
                                className="px-4 py-2 flex justify-between items-center cursor-pointer hover:bg-[#444444]"
                            >
                                <span>Team Member Options</span>
                                {nestedDropdownOpen === 'team' ? <FaAngleUp /> : <FaAngleDown />}
                            </div>
                            {nestedDropdownOpen === 'team' && (
                                <div className="bg-[#444444] pl-6">
                                    <ul className="flex flex-col">
                                        <Link
                                            to={'home/team'}
                                            className="px-4 py-2 hover:bg-[#555555] cursor-pointer"
                                        >
                                            View Team Member
                                        </Link>
                                        <Link
                                            to={'home/addteam'}
                                            className="px-4 py-2 hover:bg-[#555555] cursor-pointer"
                                        >
                                            Add Team Member
                                        </Link>
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Contact */}
                <div
                    onClick={() => toggleDropdown('contact')}
                    className={`flex items-center px-3 py-2 rounded-[3px] text-[#EEE5DE] text-[18px] cursor-pointer ${selectedItem === 'contact' ? 'bg-[#333a48]' : ''
                        }`}
                >
                    <Link to={'contact'} className="flex items-center space-x-3">
                        <RxDashboard />
                        <h1>Contact</h1>
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default Sidebar;