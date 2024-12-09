import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Banner from '../../assets/footerbg.png'
import B1 from '../../assets/blog/blogimg1.png'
import B2 from '../../assets/blog/blogimg2.png'
import B3 from '../../assets/blog/blogimg3.png'
import { FaArrowRightLong } from 'react-icons/fa6'

function Blogs() {
    return (
        <div>
            <div className='w-[100%] overflow-x-hidden font-[Montserrat] text-[24px]' style={{ backgroundImage: `url(${Banner})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

                {/* Header Season */}
                <Header />

                <div className='bg-gradient-to-r from-[#121D2773] to-[#121D27E8] flex flex-col items-center py-40 whitespace-nowrap'>
                    <h1 className='text-[#C5A572] text-[60px] font-[Bellefair]'>Blogs</h1>
                    <h1 className='text-[20px] opacity-70 text-[#ffffff]'>Home / Blogs</h1>
                </div>
            </div>

            <div className='w-[85%] m-auto xs:flex xs:space-x-5 py-10 text-[22px]'>
                <h1 className='border-b-2 border-black inline-block'>All</h1>
                <h1 className=' border-black'>Events</h1>
                <h1 className=' border-black'>Achievement</h1>
                <h1 className=' border-black'>Latest News</h1>
            </div>

            <div className='w-[85%] m-auto mb-5'>
                <div className='grid lg:grid-cols-3 grid-cols-4 xl:gap-16 gap-10 sm:pt-10 pt-5'>
                    <div className='lg:col-span-1 sm:col-span-2 col-span-4 flex flex-col justify-center space-y-2'>
                        <img src={B1} alt="Blogs" className='h-auto w-full' />
                        <h1 className='text-[#979797] text-start pt-3'>04-12-2024  ~  Food</h1>
                        <h1 className='text-[#121D27] text-[25px]'>Macarons vs. Macaroons: What's the Difference There?</h1>
                        <p className='opacity-60'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute duis aute lorem sit.</p>
                        <div className='flex items-center space-x-5 text-[#C5A572]'>
                            <h1 className='flex items-center'>Read More</h1>
                            <FaArrowRightLong />
                        </div>
                    </div>
                    <div className='lg:col-span-1 sm:col-span-2 col-span-4 flex flex-col justify-center space-y-2'>
                        <img src={B1} alt="Blogs" className='h-auto w-full' />
                        <h1 className='text-[#979797] text-start pt-3'>04-12-2024  ~  Food</h1>
                        <h1 className='text-[#121D27] text-[25px]'>Macarons vs. Macaroons: What's the Difference There?</h1>
                        <p className='opacity-60'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute duis aute lorem sit.</p>
                        <div className='flex items-center space-x-5 text-[#C5A572]'>
                            <h1 className='flex items-center'>Read More</h1>
                            <FaArrowRightLong />
                        </div>
                    </div>
                    <div className='lg:col-span-1 sm:col-span-2 col-span-4 flex flex-col justify-center space-y-2'>
                        <img src={B1} alt="Blogs" className='h-auto w-full' />
                        <h1 className='text-[#979797] text-start pt-3'>04-12-2024  ~  Food</h1>
                        <h1 className='text-[#121D27] text-[25px]'>Macarons vs. Macaroons: What's the Difference There?</h1>
                        <p className='opacity-60'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute duis aute lorem sit.</p>
                        <div className='flex items-center space-x-5 text-[#C5A572]'>
                            <h1 className='flex items-center'>Read More</h1>
                            <FaArrowRightLong />
                        </div>
                    </div>
                    <div className='lg:col-span-1 sm:col-span-2 col-span-4 flex flex-col justify-center space-y-2'>
                        <img src={B1} alt="Blogs" className='h-auto w-full' />
                        <h1 className='text-[#979797] text-start pt-3'>04-12-2024  ~  Food</h1>
                        <h1 className='text-[#121D27] text-[25px]'>Macarons vs. Macaroons: What's the Difference There?</h1>
                        <p className='opacity-60'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute duis aute lorem sit.</p>
                        <div className='flex items-center space-x-5 text-[#C5A572]'>
                            <h1 className='flex items-center'>Read More</h1>
                            <FaArrowRightLong />
                        </div>
                    </div>
                    <div className='lg:col-span-1 sm:col-span-2 col-span-4 flex flex-col justify-center space-y-2'>
                        <img src={B1} alt="Blogs" className='h-auto w-full' />
                        <h1 className='text-[#979797] text-start pt-3'>04-12-2024  ~  Food</h1>
                        <h1 className='text-[#121D27] text-[25px]'>Macarons vs. Macaroons: What's the Difference There?</h1>
                        <p className='opacity-60'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute duis aute lorem sit.</p>
                        <div className='flex items-center space-x-5 text-[#C5A572]'>
                            <h1 className='flex items-center'>Read More</h1>
                            <FaArrowRightLong />
                        </div>
                    </div>
                    <div className='lg:col-span-1 sm:col-span-2 col-span-4 flex flex-col justify-center space-y-2'>
                        <img src={B1} alt="Blogs" className='h-auto w-full' />
                        <h1 className='text-[#979797] text-start pt-3'>04-12-2024  ~  Food</h1>
                        <h1 className='text-[#121D27] text-[25px]'>Macarons vs. Macaroons: What's the Difference There?</h1>
                        <p className='opacity-60'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute duis aute lorem sit.</p>
                        <div className='flex items-center space-x-5 text-[#C5A572]'>
                            <h1 className='flex items-center'>Read More</h1>
                            <FaArrowRightLong />
                        </div>
                    </div>                
                </div>
            </div>

            {/* Footer */}
            <Footer/>
        </div>
    )
}

export default Blogs