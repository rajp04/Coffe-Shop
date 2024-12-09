import React from 'react'
import G1 from '../../../assets/G1.png'
import G2 from '../../../assets/G2.png'
import LeftQuote from '../../../assets/left-quote.svg'
import BlogsImg from '../../../assets/blog/blogimg5.png'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";

function Blogs() {
    return (
        <div className='w-[85%] m-auto xl:py-20 sm:py-10 py-5'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='uppercase text-[#C5A572] text-[22px]'>LATEST BLOGS</h1>
                <h1 className='font-[Bellefair] sm:text-[40px] xs:text-[30px] text-[25px] lg:w-[700px] w-auto pt-2 text-center'>Praesent Condimentum Rutrum Nibh, Nec Ullamcorper Odio Laoreet Blandit.</h1>
                <div className='grid lg:grid-cols-3 grid-cols-4 xl:gap-16 gap-10 lg:pt-14 sm:pt-10 pt-5'>
                    <div className='lg:col-span-1 sm:col-span-2 col-span-4 flex items-center justify-center'>
                        <img src={G1} alt="Blogs" className='h-auto w-full' />
                    </div>
                    <div className='lg:col-span-1 sm:col-span-2 col-span-4 bg-[#C5A57230] xl:p-5 p-3 flex flex-col justify-center items-center xl:space-y-5 space-y-3 h-auto w-auto'>
                        <img src={LeftQuote} alt="LeftQuote" />
                        <h1 className='text-[#121D27] text-[25px] text-center'>Eum offica culpa expedita molltia corporis.</h1>
                        <p className='text-black opacity-40'>Marshall Artis, Head Chef</p>
                    </div>
                    <div className='lg:col-span-1 sm:col-span-2 col-span-4 lg:flex sm:hidden flex items-center justify-center'>
                        <img src={G2} alt="Blogs" className='h-auto w-full' />
                    </div>
                    <div className='lg:col-span-1 sm:col-span-2 col-span-4 flex flex-col items-start justify-center'>
                        <h1 className='text-[#979797]'>04-12-2024  ~  Food</h1>
                        <h1 className='text-[#121D27] text-[25px]'>Macarons vs. Macaroons: What's the Difference There?</h1>
                        <p className='opacity-60'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute duis aute lorem sit.</p>
                        <div className='flex items-center space-x-5 text-[#C5A572]'>
                            <h1 className='flex items-center'>Read More</h1>
                            <FaArrowRightLong />
                        </div>
                    </div>

                    <div className='lg:col-span-1 sm:col-span-2 col-span-4 lg:hidden sm:flex hidden items-center justify-center'>
                        <img src={G2} alt="Blogs" className='h-auto' />
                    </div>
                    <div className='lg:col-span-1 sm:col-span-2 col-span-4'>
                        <div className='flex items-center justify-center w-auto xl:h-[320px] h-[280px]' style={{ backgroundImage: `url(${BlogsImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} >
                            <div className='bg-slate-200 rounded-full p-2'>
                                <button className='bg-white p-5 rounded-full'>
                                    <FaPlay className='text-[#C5A572] text-[20px]'/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='lg:col-span-1 sm:col-span-2 col-span-4 space-y-3 flex flex-col items-start justify-center'>
                        <h1 className='text-[#979797]'>04-12-2024  ~  Food</h1>
                        <h1 className='text-[#121D27] text-[25px]'>Ut doloremque exercitationem molestias rerum?</h1>
                        <p className='opacity-60'>Alias suscipit iure voluptas ea et et voluptatibus. Animi assumenda libero. At natus id. Perferendis sunt repudiandae tenetur fugit.</p>
                        <div className='flex items-center space-x-5 text-[#C5A572]'>
                            <h1 className='flex items-center'>Read More</h1>
                            <FaArrowRightLong />
                        </div>
                    </div>
                    <div className='lg:col-span-1 sm:col-span-2 col-span-4 bg-[#C5A57230] xl:p-5 p-3 lg:flex sm:hidden flex flex-col justify-center items-center space-y-5 h-auto'>
                        <img src={LeftQuote} alt="LeftQuote" />
                        <h1 className='text-[#121D27] text-[25px] text-center'>Nihil quas ut adipisci est excepturi molestias.</h1>
                        <p className='text-black opacity-40'>Dorian Hackett Sr.</p>
                    </div>
                    <div className='lg:col-span-1 sm:col-span-2 col-span-4 space-y-3 flex flex-col items-start justify-start'>
                        <h1 className='text-[#979797]'>04-12-2024  ~  Food</h1>
                        <h1 className='text-[#121D27] text-[25px]'>How to Make the Perfect Double Dutch in 5 Steps</h1>
                        <p className='opacity-60'>Id veritatis culpa voluptas explicabo eum in facilis cupiditate. Vel eos possimus accusamus qui nihil. Exercitationem asperiores dolor aut beatae.</p>
                        <div className='flex items-center space-x-5 text-[#C5A572]'>
                            <h1 className='flex items-center'>Read More</h1>
                            <FaArrowRightLong />
                        </div>
                    </div>
                    <div className='lg:col-span-1 sm:col-span-2 col-span-4 bg-[#C5A57230] xl:p-5 p-3 lg:hidden sm:flex hidden flex-col justify-center items-center space-y-5 h-auto'>
                        <img src={LeftQuote} alt="LeftQuote" />
                        <h1 className='text-[#121D27] text-[25px] text-center'>Nihil quas ut adipisci est excepturi molestias.</h1>
                        <p className='text-black opacity-40'>Dorian Hackett Sr.</p>
                    </div>
                    <div className='lg:col-span-1 col-span-4 bg-[#C5A57230] xl:p-5 p-3 lg:flex sm:hidden flex flex-col justify-center items-center xl:space-y-5 space-y-3 h-auto'>
                        <img src={LeftQuote} alt="LeftQuote" />
                        <h1 className='text-[#121D27] text-[25px] text-center'>Accusamus voluptatum dolores tenetur et autem.</h1>
                        <p className='text-black opacity-40'>Keegan Leuschke</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs