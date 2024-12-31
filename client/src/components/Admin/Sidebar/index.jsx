import React, { useContext, useEffect, useState } from 'react';
import Logo from '../../../assets/cafelogo.svg';
import { RxDashboard } from "react-icons/rx";
import { FaAngleDown, FaAngleUp, FaArrowLeft } from "react-icons/fa6";
import { MyContext } from '..';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Sidebar() {
    const { setSidebarOpen } = useContext(MyContext);
    const [selectedItem, setSelectedItem] = useState('dashboard');
    const [dropdownOpen, setDropdownOpen] = useState('');
    const [nestedDropdownOpen, setNestedDropdownOpen] = useState('');
    const [permissions, setPermissions] = useState(null);

    const navigate = useNavigate();

    const toggleDropdown = (item) => {
        setDropdownOpen(dropdownOpen === item ? '' : item);
    };

    const toggleNestedDropdown = (item) => {
        setNestedDropdownOpen(nestedDropdownOpen === item ? '' : item);
    };

    useEffect(() => {
        const fetchPermissions = async () => {
            try {
                const token = sessionStorage.getItem('Admin');
                const response = await axios.get('https://coffe-shop-btr1.onrender.com/api/admin/admin-panel', {
                    headers: { Authorization: `Bearer ${token}` },
                });

                if (response.data.success === 1) {
                    setPermissions(response.data.permissions || {});
                } else {
                    console.error('Failed to fetch permissions:', response.data.message);
                    setPermissions({});
                }
            } catch (error) {
                console.error('Error fetching permissions:', error.message);
                setPermissions({});
            }
        };

        fetchPermissions();
    }, []);


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
                {permissions && permissions.dashboard?.includes('view') && (
                    <div
                        onClick={() => toggleDropdown('dashboard')}
                        className={`flex items-center px-3 py-2 rounded-[3px] text-[#EEE5DE] text-[18px] cursor-pointer ${selectedItem === 'dashboard' ? 'bg-[#333a48]' : ''}`}>
                        <Link to={'/admin'} className="flex items-center space-x-3">
                            <RxDashboard />
                            <h1>Dashboard</h1>
                        </Link>
                    </div>
                )}

                {/* Booking */}
                {permissions && permissions.booking?.includes('view') && (
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
                )}

                {/* Menu */}
                {(permissions?.menu?.includes('view') || permissions?.menu?.includes('add')) && (
                    <div>
                        <div
                            onClick={() => toggleDropdown('menu')}
                            className={`flex items-center justify-between px-3 py-2 rounded-[3px] text-[#EEE5DE] text-[18px] cursor-pointer ${dropdownOpen === 'menu' ? 'bg-[#333a48]' : ''}`}
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
                                    {permissions.menu?.includes('view') && (
                                        <Link to={'menu'} className="px-4 py-2 hover:bg-[#444444] cursor-pointer">
                                            Menu
                                        </Link>
                                    )}
                                    {permissions.menu?.includes('add') && (
                                        <Link to={'addmenu'} className="px-4 py-2 hover:bg-[#444444] cursor-pointer">
                                            Add Menu
                                        </Link>
                                    )}
                                </ul>
                            </div>
                        )}
                    </div>
                )}

                {/* Gallery */}
                {(permissions?.gallery?.includes('view') || permissions?.gallery?.includes('add')) && (
                    <div>
                        <div
                            onClick={() => toggleDropdown('gallery')}
                            className={`flex items-center justify-between px-3 py-2 rounded-[3px] text-[#EEE5DE] text-[18px] cursor-pointer ${dropdownOpen === 'gallery' ? 'bg-[#333a48]' : ''}`}
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
                                    {permissions.gallery?.includes('view') && (
                                        <Link to={'gallery'} className="px-4 py-2 hover:bg-[#444444] cursor-pointer">
                                            Gallery
                                        </Link>
                                    )}
                                    {permissions.gallery?.includes('add') && (
                                        <Link to={'addgallery'} className="px-4 py-2 hover:bg-[#444444] cursor-pointer">
                                            Add Gallery
                                        </Link>
                                    )}
                                </ul>
                            </div>
                        )}
                    </div>
                )}

                {/* Service */}
                {(permissions?.service?.includes('view') || permissions?.service?.includes('add')) && (
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
                                    {permissions.service?.includes('view') && (
                                        <Link
                                            to={'service'}
                                            className="px-4 py-2 hover:bg-[#444444] cursor-pointer"
                                        >
                                            Service
                                        </Link>
                                    )}
                                    {permissions.service?.includes('add') && (
                                        <Link
                                            to={'addservice'}
                                            className="px-4 py-2 hover:bg-[#444444] cursor-pointer"
                                        >
                                            Add Service
                                        </Link>
                                    )}
                                </ul>
                            </div>
                        )}
                    </div>
                )}

                {/* Blogs */}
                {(permissions?.blog?.includes('view') || permissions?.blog?.includes('add')) && (
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
                                    {permissions.blog?.includes('view') && (
                                        <Link
                                            to={'blog'}
                                            className="px-4 py-2 hover:bg-[#444444] cursor-pointer"
                                        >
                                            Blog
                                        </Link>
                                    )}
                                    {permissions.blog?.includes('add') && (
                                        <Link
                                            to={'addblog'}
                                            className="px-4 py-2 hover:bg-[#444444] cursor-pointer"
                                        >
                                            Add Blog
                                        </Link>
                                    )}
                                </ul>
                            </div>
                        )}
                    </div>
                )}

                {/* Home */}
                {/* Main Dropdown */}
                {(permissions?.homebanner?.includes('view') ||
                    permissions?.hometeammember?.includes('view') ||
                    permissions?.hometestimonial?.includes('view') ||
                    permissions?.homebanner?.includes('add') ||
                    permissions?.hometeammember?.includes('add') ||
                    permissions?.hometestimonial?.includes('add')) && (
                        <div>
                            <div
                                onClick={() => toggleDropdown('home')}
                                className={`flex items-center justify-between px-3 py-2 rounded-[3px] text-[#EEE5DE] text-[18px] cursor-pointer ${dropdownOpen === 'home' ? 'bg-[#333a48]' : ''}`}
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
                                    {(permissions?.homebanner?.includes('view') || permissions?.homebanner?.includes('add')) && (
                                        <div>
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
                                                        {permissions?.homebanner?.includes('view') && (
                                                            <Link
                                                                to={'home/banner'}
                                                                className="px-4 py-2 hover:bg-[#555555] cursor-pointer"
                                                            >
                                                                View Banner
                                                            </Link>
                                                        )}
                                                        {permissions?.homebanner?.includes('add') && (
                                                            <Link
                                                                to={'home/addbanner'}
                                                                className="px-4 py-2 hover:bg-[#555555] cursor-pointer"
                                                            >
                                                                Add Banner
                                                            </Link>
                                                        )}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* Nested Dropdown for Testimonial Options */}
                                    {(permissions?.hometestimonial?.includes('view') || permissions?.hometestimonial?.includes('add')) && (
                                        <div>
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
                                                        {permissions?.hometestimonial?.includes('view') && (
                                                            <Link
                                                                to={'home/testimonial'}
                                                                className="px-4 py-2 hover:bg-[#555555] cursor-pointer"
                                                            >
                                                                View Testimonial
                                                            </Link>
                                                        )}
                                                        {permissions?.hometestimonial?.includes('add') && (
                                                            <Link
                                                                to={'home/addtestimonial'}
                                                                className="px-4 py-2 hover:bg-[#555555] cursor-pointer"
                                                            >
                                                                Add Testimonial
                                                            </Link>
                                                        )}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* Nested Dropdown for Team Member Options */}
                                    {(permissions?.hometeammember?.includes('view') || permissions?.hometeammember?.includes('add')) && (
                                        <div>
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
                                                        {permissions?.hometeammember?.includes('view') && (
                                                            <Link
                                                                to={'home/team'}
                                                                className="px-4 py-2 hover:bg-[#555555] cursor-pointer"
                                                            >
                                                                View Team Member
                                                            </Link>
                                                        )}
                                                        {permissions?.hometeammember?.includes('add') && (
                                                            <Link
                                                                to={'home/addteam'}
                                                                className="px-4 py-2 hover:bg-[#555555] cursor-pointer"
                                                            >
                                                                Add Team Member
                                                            </Link>
                                                        )}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}



                {/* Contact */}
                {permissions && permissions.contact?.includes('view') && (
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
                )}

                {/* Role */}
                {(permissions?.role?.includes('view') || permissions?.role?.includes('add')) && (
                    <div>
                        <div
                            onClick={() => toggleDropdown('role')}
                            className={`flex items-center justify-between px-3 py-2 rounded-[3px] text-[#EEE5DE] text-[18px] cursor-pointer ${selectedItem === 'role' ? 'bg-[#333a48]' : ''
                                }`}
                        >
                            <div className="flex items-center space-x-3">
                                <RxDashboard />
                                <h1>Role</h1>
                            </div>
                            <div>{dropdownOpen === 'role' ? <FaAngleUp /> : <FaAngleDown />}</div>
                        </div>
                        {dropdownOpen === 'role' && (
                            <div className="bg-[#333a48] text-[#EEE5DE] w-full">
                                <ul className="flex flex-col">
                                    {permissions.role?.includes('view') && (
                                        <Link
                                            to={'role'}
                                            className="px-4 py-2 hover:bg-[#444444] cursor-pointer"
                                        >
                                            Role
                                        </Link>
                                    )}
                                    {permissions.role?.includes('add') && (
                                        <Link
                                            to={'addrole'}
                                            className="px-4 py-2 hover:bg-[#444444] cursor-pointer"
                                        >
                                            Add Role
                                        </Link>
                                    )}
                                </ul>
                            </div>
                        )}
                    </div>
                )}
            </div>

        </div>
    );
}

export default Sidebar;