import React, { useEffect, useState } from 'react'
import Header from '../Header'
import Banner from '../../assets/footerbg.png'
import Footer from '../Footer'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

function BlogDetails() {
    const { id } = useParams();
    const [data, setData] = useState()
    const [blog, setBlog] = useState()
    const [blogData, setBlogData] = useState()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [comment, setComment] = useState()
    const [searchTerm, setSearchTerm] = useState('');
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const comment = async () => {
            try {
                const response = await axios.get(`https://coffe-shop-btr1.onrender.com/api/comment/get/${id}`);
                if (response.data.success === 1) {
                    setData(response.data.result);
                } else {
                    console.log(response.data.message);
                }
            } catch (error) {
                console.log(error.message);
            }
        };
        comment();
    }, [data]);

    useEffect(() => {
        const comment = async () => {
            try {
                const response = await axios.get(`https://coffe-shop-btr1.onrender.com/api/blog`);
                if (response.data.success === 1) {
                    setBlog(response.data.result);
                } else {
                    console.log(response.data.message);
                }
            } catch (error) {
                console.log(error.message);
            }
        };
        comment();
    }, [blog]);

    useEffect(() => {
        const blogs = async () => {
            try {
                const response = await axios.get(`https://coffe-shop-btr1.onrender.com/api/blog/${id}`);
                if (response.data.success === 1) {
                    setBlogData(response.data.result);
                } else {
                    console.log(response.data.message);
                }
            } catch (error) {
                console.log(error.message);
            }
        };
        blogs();
    }, [blogData]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = { name, email, comment, blogId: id }

        try {
            const response = await axios.post(`https://coffe-shop-btr1.onrender.com/api/comment/create`, data);

            if (response.data.success === 1) {
                // console.log(response.data);
                setName('')
                setEmail('')
                setComment('')
            } else {
                console.log(response.data.message);
            }
        } catch (error) {
            console.log('Try Again.');
        }
    }

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(`https://coffe-shop-btr1.onrender.com/api/blog/blogs/search?title=${searchTerm}`);

                if (response?.data?.success === 1) {
                    setBlogs(response?.data?.blogs);
                } else {
                    setBlogs([]);
                }
            } catch (error) {
                console.error("Error fetching blogs:", error);
                setBlogs([]);
            }
        };

        fetchBlogs();
    }, [searchTerm])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);


    return (
        <div className=''>
            <div className='w-[100%] overflow-x-hidden font-[Montserrat] text-[24px]' style={{ backgroundImage: `url(${Banner})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

                {/* Header Season */}
                <Header />

                <div className='bg-gradient-to-r from-[#121D2773] to-[#121D27E8] flex flex-col items-center py-40 whitespace-nowrap'>
                    <h1 className='text-[#C5A572] text-[60px] font-[Bellefair]'>Blog Details</h1>
                    <h1 className='text-[20px] opacity-70 text-[#ffffff]'>Home / Blogs / Blog Details</h1>
                </div>
            </div>

            {/* Details */}
            <div className='w-[85%] m-auto grid grid-cols-6 md:gap-10 gap-5 pt-20 pb-10'>
                <div className='sm:col-span-4 col-span-6'>
                    {blogData &&
                        <>
                            <img src={blogData.image} alt="BPIMG2" />
                            <div className='space-y-3 pt-8'>
                                <h1 className='text-[#C5A572] text-[25px]'>{blogData.category} ~ {new Date(blogData.createdAt).toLocaleDateString()}</h1>
                                <h1 className='lg:text-[30px] text-[26px] text-[#121D27] font-medium'>{blogData.title}</h1>
                                <p className='opacity-60 text-justify'>{blogData.description}</p>
                            </div>
                        </>
                    }
    
                    {/* Comments */}
                    <div>
                        <h1 className='text-[#121D27] font-[Bellefair] sm:text-[55px] text-[40px] pt-10 pb-3'>Comments</h1>
                        {data && data?.map((item, index) => (
                            <div className='bg-[#C5A57217] flex md:flex-row flex-col md:space-x-5 p-5 relative mt-5' key={index}>
                                {/* <img src={RP1} alt="RP1" /> */}
                                <div>
                                    <h1 className='font-[Bellefair] lg:text-[40px] text-[30px]'>{item.name}</h1>
                                    <p className='text-[#979797]'> {new Date(item.createdAt).toLocaleDateString('en-GB')} {new Date(item.createdAt).toLocaleTimeString('en-GB')}</p>
                                    <p className='opacity-60'>{item.comment}</p>
                                </div>
                                <p className='text-[25px] absolute md:right-5 md:top-0 bottom-2 right-5'>Reply</p>
                            </div>
                        ))}
                    </div>

                    {/* Reply */}
                    <div>
                        <h1 className='text-[#121D27] sm:text-[55px] text-[40px] font-[Bellefair] pt-10'>Leave a Reply</h1>
                        <p className='text-[#979797]'>Your email address will not be published.</p>
                        <input type="text" placeholder='Comments*' className='outline-none border-b w-full py-3 mt-5 border-gray-400 text-[20px]' value={comment} onChange={(e) => setComment(e.target.value)} />
                        <div className='sm:flex items-center justify-between sm:space-x-5'>
                            <input type="text" placeholder='Name*' className='outline-none border-b w-full py-3 mt-5 border-gray-400 text-[20px]' value={name} onChange={(e) => setName(e.target.value)} />
                            <input type="text" placeholder='E-mail*' className='outline-none border-b w-full py-3 mt-5 border-gray-400 text-[20px]' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <button className='text-white bg-black py-2 px-5 text-[20px] mt-8' type='submit' onClick={handleSubmit}>Post Comments</button>
                    </div>
                </div>

                <div className='sm:col-span-2 col-span-6'>

                    {/* Search */}
                    <div className='sm:flex flex-col grid xxs:grid-cols-2 grid-cols-1 gap-3'>
                        <h1 className='text-[#121D27] text-[25px] font-semibold col-span-2'>Search</h1>
                        <input
                            type='text'
                            className='outline-none border-2 border-[#121d276b] w-full px-5 py-2 mb-5 col-span-2'
                            placeholder='Search here....'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        {blogs.map((item, index) => (
                            <Link
                                key={index}
                                className='sm:flex lg:flex-row sm:flex-col justify-between lg:space-x-3 py-4 border-b xxs:col-span-1 col-span-2 overflow-hidden' to={`http://localhost:5173/blogs/blogdetails/${item._id}`} onClick={() => setSearchTerm('')}
                            >
                                <img src={item.image} alt={item.title} className='lg:w-[60%]' />
                                <div className='space-y-1 lg:w-[40%]'>
                                    <h1 className='text-[20px] text-[#121D27]'>{item.title}</h1>
                                    <p className='opacity-40'>
                                        {new Date(item.createdAt).toLocaleDateString('en-GB')}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Recent Post */}
                    <div className='sm:flex flex-col grid xxs:grid-cols-2 grid-cols-1 gap-3'>
                        <h1 className='text-[#121D27] text-[25px] font-semibold col-span-2'>Recent Post</h1>
                        {blog &&
                            blog
                                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                                .slice(0, 4)
                                .map((item, index) => (
                                    <Link
                                        className='sm:flex lg:flex-row sm:flex-col justify-between lg:space-x-3 py-4 border-b xxs:col-span-1 col-span-2 overflow-hidden'
                                        key={index} to={`http://localhost:5173/blogs/blogdetails/${item._id}`}
                                    >
                                        <img src={item.image} alt={item.name} className='lg:w-[60%]' />
                                        <div className='space-y-1 lg:w-[40%]'>
                                            <h1 className='text-[20px] text-[#121D27]'>{item.title}</h1>
                                            <p className='opacity-40'>
                                                {new Date(item.createdAt).toLocaleDateString('en-GB')}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                    </div>

                    {/* tag */}
                    <div>
                        <div className='py-5'>
                            <h1 className='text-[#121D27] text-[25px] font-semibold pb-3'>Tage</h1>
                            <p className='text-[#121D27]'>Citrus ~ Creamy ~ Darker ~ Organic ~ Smooth ~ Sweet</p>
                        </div>
                        <div>
                            <h1 className='text-[#121D27] text-[25px] font-semibold pb-5'>Share Blog</h1>
                            <div className='text-[#121D27] flex items-center space-x-5'>
                                <FaInstagram className='text-[30px]' />
                                <FaFacebookF className='text-[30px]' />
                                <FaTwitter className='text-[30px]' />
                                <FaLinkedinIn className='text-[30px]' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default BlogDetails