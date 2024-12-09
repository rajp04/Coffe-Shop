import React from 'react'
import BgFooter from '../../assets/footerbg.png'
import Logo from '../../assets/cafelogo.svg'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { GoDash } from "react-icons/go";

function Footer() {
    return (
        <div className='mt-10 ' style={{ backgroundImage: `url(${BgFooter})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className='bg-[#121D27ED] m-auto flex flex-col items-center justify-center md:py-[66px] py-[20px]'>
                <div className='flex items-center justify-center xs:space-x-16 xs:w-[85%]'>
                    <p className='border-t-2 border-dashed w-96 border-[#c5a57257] xs:flex hidden'></p>
                    <img src={Logo} alt="Logo" className='h-[86px]' />
                    <p className='border-t-2 border-dashed w-96 border-[#c5a57257] xs:flex hidden'></p>
                </div>
                <div className='flex items-center justify-center xs:space-x-10 space-x-3'>
                    <button className='bg-[#3D3D3D] rounded-full p-3 mt-12'>
                        <FaFacebookF className='text-[#949494] text-[30px]' />
                    </button>
                    <button className='bg-[#3D3D3D] rounded-full p-3 mt-10'>
                        <FaTwitter className='text-[#949494] text-[30px]' />
                    </button>
                    <button className='bg-[#3D3D3D] rounded-full p-3 mt-10'>
                        <FaLinkedinIn className='text-[#949494] text-[30px]' />
                    </button>
                    <button className='bg-[#3D3D3D] rounded-full p-3 mt-10'>
                        <FaInstagram className='text-[#949494] text-[30px]' />
                    </button>
                </div>

                <div className='grid w-[90%] m-auto grid-cols-4 xs:pt-14 pt-5 text-[15px]'>
                    <div className='space-y-5 lg:col-span-1 xs:col-span-2 col-span-4 xs:border-r border-dashed border-[#c5a57257] xl:px-10 px-3 mb-5'>
                        <h1 className='text-[#C5A572] text-[25px]'>Contact Us </h1>
                        <div className='text-[15px] flex items-start space-x-3 text-white opacity-60 border-b border-gray-700 pb-1'>
                            <IoLocationOutline className='pt-1 text-[20px]'/>
                            <p className='w-36'>2839 Old Dear Lane New York NY 10023 United States</p>
                        </div>
                        <div className='text-[15px] flex items-center space-x-3 text-white opacity-60 border-b border-gray-700 pb-1'>
                            <FiPhoneCall />
                            <p>+ (0712) 819 79 555</p>
                        </div>
                        <div className='text-[15px] flex items-center space-x-3 text-white opacity-60 border-b border-gray-700 pb-1'>
                            <MdOutlineEmail />
                            <p>info@havnor.com</p>
                        </div>
                    </div>
                    <div className='space-y-[3px] lg:border-r lg:col-span-1 xs:col-span-2 col-span-4 border-dashed border-[#c5a57257] xl:px-10 px-3 whitespace-nowrap mb-5'>
                        <h1 className='text-[#C5A572] text-[25px] pb-5'>Services </h1>
                        <div className='text-[15px] flex items-center space-x-3 text-white opacity-60 pb-1'>
                            <GoDash />
                            <p>Fine Dining & Concierge</p>
                        </div>
                        <div className='text-[15px] flex items-baseline space-x-3 text-white opacity-60 pb-1'>
                            <GoDash />
                            <p>Quick Counter Service</p>
                        </div>
                        <div className='text-[15px] flex space-x-3 text-white opacity-60 pb-1'>
                            <GoDash />
                            <p>Banquet Table Service</p>
                        </div>
                        <div className='text-[15px] flex space-x-3 text-white opacity-60 pb-1'>
                            <GoDash />
                            <p>Family Style Service</p>
                        </div>
                        <div className='text-[15px] flex space-x-3 text-white opacity-60 pb-1'>
                            <GoDash />
                            <p>Quick Delivery Service</p>
                        </div>
                        <div className='text-[15px] flex space-x-3 text-white opacity-60 pb-1'>
                            <GoDash />
                            <p>Buffet Table Service</p>
                        </div>
                        <div className='text-[15px] flex space-x-3 text-white opacity-60 pb-1'>
                            <GoDash />
                            <p>Traditional Counter Service</p>
                        </div>
                    </div>
                    <div className='space-y-3 xs:border-r lg:col-span-1 xs:col-span-2 col-span-4 border-dashed border-[#c5a57257] xl:px-10 px-3 mb-5'>
                        <h1 className='text-[#C5A572] text-[25px] pb-2'>Opening Hours </h1>
                        <div className='text-[15px] flex space-x-10 text-white opacity-60 border-b border-gray-700 pb-1'>
                            <p>Mon - Fri</p>
                            <p>09:00 AM - 08:00 PM</p>
                        </div>
                        <div className='text-[15px] flex space-x-10 text-white opacity-60 border-b border-gray-700 pb-1'>
                            <p>Sat - Sun</p>
                            <p>09:00 AM - 05:00 PM</p>
                        </div>
                        <h1 className='text-[#C5A572] text-[25px] pt-2'>Coffee Bar Opening</h1>
                        <div className='text-[15px] flex space-x-10 text-white opacity-60 border-b border-gray-700 pb-1'>
                            <p>Mon - Fri</p>
                            <p>09:00 AM - 08:00 PM</p>
                        </div>
                        <div className='text-[15px] flex space-x-10 text-white opacity-60 border-b border-gray-700 pb-1'>
                            <p>Sat - Sun</p>
                            <p>09:00 AM - 05:00 PM</p>
                        </div>
                    </div>
                    <div className='space-y-5 xl:px-10 px-3 lg:col-span-1 xs:col-span-2 col-span-4'>
                        <h1 className='text-[#C5A572] text-[25px]'>Newsletter</h1>
                        <p className='text-white opacity-80'>Stay always in touch! Subscribe to our newsletter.</p>
                        <div className='bg-[#ffffff55] rounded-md'>
                            <input type="email" placeholder='Enter Your Email' className='bg-transparent outline-none px-5 py-2 text-white text-[17px] w-full' />
                        </div>
                        <button className='bg-[#C5A572] w-full text-white py-2 text-[20px] rounded-md'>Subscribe Now</button>
                    </div>
                </div>
                <h1 className='text-[#949494] md:pt-10 pt-5 text-center xs:px-0 px-3'>COPYRIGHT &copy; ALL RIGHTS RESERVED BY ONELINE CAFE</h1>
            </div>
        </div>
    )
}

export default Footer