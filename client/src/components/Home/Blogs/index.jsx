import React, { useEffect, useState } from 'react'
import LeftQuote from '../../../assets/left-quote.svg'
import { FaArrowRightLong } from "react-icons/fa6";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Blogs() {

    const [blog, setBlog] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        const blog = async () => {
            try {
                const response = await axios.get(`http://localhost:1101/api/blog`);
                if (response.data.success === 1) {
                    setBlog(response.data.result);
                } else {
                    console.log(response.data.message);
                }
            } catch (error) {
                console.log(error.message);
            }
        };
        blog();
    }, [blog]);

    return (
        <div className='w-[85%] m-auto xl:py-20 sm:py-10 py-5'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='uppercase text-[#C5A572] text-[22px]'>LATEST BLOGS</h1>
                <h1 className='font-[Bellefair] sm:text-[40px] xs:text-[30px] text-[25px] lg:w-[700px] w-auto pt-2 text-center'>Praesent Condimentum Rutrum Nibh, Nec Ullamcorper Odio Laoreet Blandit.</h1>
                <div className='grid lg:grid-cols-3 grid-cols-4 xl:gap-16 gap-10 lg:pt-14 sm:pt-10 pt-5'>
                    {blog && blog
                        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                        .slice(0, 4)
                        .map((item) => (
                            <>
                                <div className='lg:col-span-1 sm:col-span-2 col-span-4 flex items-center justify-center'>
                                    <img src={item.image} alt="Blogs" className='h-auto w-full' />
                                </div>
                                <div className='lg:col-span-1 sm:col-span-2 col-span-4 flex flex-col items-start justify-center'>
                                    <h1 className='text-[#979797]'>04-12-2024  ~  {item.category}</h1>
                                    <h1 className='text-[#121D27] text-[25px]'>{item.title}</h1>
                                    <p className='opacity-60'>{item.description.length > 200 ? `${item.description.slice(0, 200)}...` : item.description}</p>
                                    <div className='flex items-center space-x-5 text-[#C5A572] cursor-pointer' onClick={() => navigate(`/blogs/blogdetails/${item._id}`)}>
                                        <h1 className='flex items-center ' >Read More</h1>
                                        <FaArrowRightLong />
                                    </div>
                                </div>
                            </>
                        ))}
                    <div className='lg:col-span-1 sm:col-span-2 col-span-4 bg-[#C5A57230] xl:p-5 p-3 lg:flex sm:hidden flex flex-col justify-center items-center space-y-5 h-auto'>
                        <img src={LeftQuote} alt="LeftQuote" />
                        <h1 className='text-[#121D27] text-[25px] text-center'>Nihil quas ut adipisci est excepturi molestias.</h1>
                        <p className='text-black opacity-40'>Dorian Hackett Sr.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs