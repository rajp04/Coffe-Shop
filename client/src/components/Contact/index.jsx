import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Banner from '../../assets/footerbg.png'
import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';

function Contact() {
    return (
        <div>
            <div className='w-[100%] overflow-x-hidden font-[Montserrat] text-[24px]' style={{ backgroundImage: `url(${Banner})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

                {/* Header Season */}
                <Header />

                <div className='bg-gradient-to-r from-[#121D2773] to-[#121D27E8] flex flex-col items-center py-40 whitespace-nowrap'>
                    <h1 className='text-[#C5A572] text-[60px] font-[Bellefair]'>Contact Us</h1>
                    <h1 className='text-[20px] opacity-70 text-[#ffffff]'>Home / Contact Us</h1>
                </div>
            </div>

            {/* Contact */}
            <div className='w-[85%] m-auto pt-20'>
                <div className='grid grid-cols-10 gap-10'>
                    <div className='col-span-4'>
                        <h1 className='text-[#C5A572] text-[22px]'>CONTACT US</h1>
                        <h1 className='font-[Bellefair] text-[45px]'>Get In Touch</h1>
                        <div className='text-[24px] flex items-start space-x-5 text-black opacity-60 pb-3'>
                            <IoLocationOutline className='text-[30px] pt-2' />
                            <p className='w-[80%]'>2839 Old Dear Lane New York NY 10023 United States</p>
                        </div>
                        <div className='text-[24px] flex items-center space-x-5 text-black opacity-60 pb-3'>
                            <FiPhoneCall />
                            <p>+ (0712) 819 79 555</p>
                        </div>
                        <div className='text-[24px] flex items-center space-x-5 text-black opacity-60 pb-3'>
                            <MdOutlineEmail />
                            <p>info@havnor.com</p>
                        </div>

                        <h1 className='text-[25px] pb-2'>Opening Hours </h1>
                        <div className='text-[20px] flex space-x-10 text-black opacity-80'>
                            <p>Mon - Fri</p>
                            <p>09:00 AM - 08:00 PM</p>
                        </div>
                        <div className='text-[20px] flex space-x-10 text-black opacity-80'>
                            <p>Sat - Sun</p>
                            <p>09:00 AM - 05:00 PM</p>
                        </div>
                    </div>
                    <div className='col-span-6'>
                        
                    </div>
                </div>
            </div>

            {/* Send Message */}
            <div className='h-auto sm:p-10 p-5 w-[85%] m-auto bg-[#F4EEE4] lg:mt-20 mt-10'>
                <div className='flex flex-col h-full items-center justify-center'>
                    <h1 className='font-[Bellefair] text-[30px] text-[#C5A572] pt-3 text-center'>SEND A MESSAGE</h1>
                    <p className='opacity-80 text-[20px] md:w-[70%] sm:w-[85%] w-[90%] text-center'>Do you have anything in your mind to tell us? please don't hesitate to get in touch to us via our contact form.</p>
                    <div className='sm:w-[75%] xs:w-[80%] xxs:w-[90%] w-[95%] grid grid-cols-2 sm:gap-10 gap-5 lg:pt-14 sm:pt-8 pt-5'>
                        <div className='sm:col-span-1 col-span-2'>
                            <input type="text" placeholder='Name*' className='w-full border-b-2 border-black opacity-80 pb-4 text-xl outline-none bg-transparent' />
                        </div>
                        <div className='sm:col-span-1 col-span-2'>
                            <input type="text" placeholder='E-mail*' className='w-full border-b-2 border-black opacity-80 pb-4 text-xl outline-none bg-transparent' />
                        </div>
                        <div className='sm:col-span-1 col-span-2'>
                            <input type="text" placeholder='Phone*' className='w-full border-b-2 border-black opacity-80 pb-4 text-xl outline-none bg-transparent' />
                        </div>
                        <div className='sm:col-span-1 col-span-2'>
                            <input type="text" placeholder='Subject*' className='w-full border-b-2 border-black opacity-80 pb-4 text-xl outline-none bg-transparent' />
                        </div>
                        <div className='sm:col-span-1 col-span-2'>
                            <input type="text" placeholder='Notes*' className='w-full border-b-2 border-black opacity-80 pb-4 text-xl outline-none bg-transparent' />
                        </div>
                    </div>
                    <button className='bg-black text-white mt-10 py-2 px-5'>Send Message</button>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Contact