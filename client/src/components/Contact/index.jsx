import React, { useState } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Banner from '../../assets/footerbg.png'
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';
import { GrLocation } from 'react-icons/gr';
import axios from 'axios'

function Contact() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [subject, setSubject] = useState()
    const [notes, setNotes] = useState()

    const handleContact = async (e) => {
        e.preventDefault();

        const data = { name, email, phone, subject, notes }

        try {
            const response = await axios.post(`https://coffe-shop-btr1.onrender.com/api/contact/create`, data);

            if (response.data.success === 1) {
                console.log(response.data);
                setName('')
                setEmail('')
                setPhone('')
                setNotes('')
                setSubject('')
            } else {
                console.log(response.data.message);
            }
        } catch (error) {
            console.log('Try Again.');
        }
    }

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
                <div className='grid md:grid-cols-10 grid-cols-1 gap-10'>
                    <div className='md:col-span-4 col-span-1'>
                        <h1 className='text-[#C5A572] text-[22px]'>CONTACT US</h1>
                        <h1 className='font-[Bellefair] text-[45px]'>Get In Touch</h1>
                        <div className='text-[24px] flex items-start space-x-5 text-black opacity-60 pb-3'>
                            <GrLocation className='text-[30px] text-wrap pt-2' />
                            <p className='lg:w-[80%] w-auto'>2839 Old Dear Lane New York NY 10023 United States</p>
                        </div>
                        <div className='lg:text-[24px] text-[21px] flex items-center space-x-5 text-black opacity-60 pb-3'>
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
                    <div className='md:col-span-6 col-span-1'>
                        <iframe
                            title="Google Map Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.4078661723725!2d72.50773629999999!3d23.045503900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84ac539ac151%3A0x6acae7cc1aec8366!2sExcelsior%20Technologies%C2%AE!5e0!3m2!1sen!2sin!4v1733846566599!5m2!1sen!2sin"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
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
                            <input type="text" placeholder='Name*' className='w-full border-b-2 border-black opacity-80 pb-4 text-xl outline-none bg-transparent' value={name} onChange={(e)=> setName(e.target.value)}/>
                        </div>
                        <div className='sm:col-span-1 col-span-2'>
                            <input type="text" placeholder='E-mail*' className='w-full border-b-2 border-black opacity-80 pb-4 text-xl outline-none bg-transparent' value={email} onChange={(e)=> setEmail(e.target.value)}/>
                        </div>
                        <div className='sm:col-span-1 col-span-2'>
                            <input type="text" placeholder='Phone*' className='w-full border-b-2 border-black opacity-80 pb-4 text-xl outline-none bg-transparent' value={phone} onChange={(e)=> setPhone(e.target.value)}/>
                        </div>
                        <div className='sm:col-span-1 col-span-2'>
                            <input type="text" placeholder='Subject*' className='w-full border-b-2 border-black opacity-80 pb-4 text-xl outline-none bg-transparent' value={subject} onChange={(e)=> setSubject(e.target.value)}/>
                        </div>
                        <div className='sm:col-span-1 col-span-2'>
                            <input type="text" placeholder='Notes*' className='w-full border-b-2 border-black opacity-80 pb-4 text-xl outline-none bg-transparent' value={notes} onChange={(e)=> setNotes(e.target.value)}/>
                        </div>
                    </div>
                    <button className='bg-black text-white mt-10 py-2 px-5' type='submit' onClick={handleContact}>Send Message</button>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Contact