import React, { useEffect, useState } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Banner from '../../assets/footerbg.png'
import { FaArrowRightLong } from 'react-icons/fa6'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Blogs() {

    const navigate = useNavigate()

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState('All');
    const [visibleItems, setVisibleItems] = useState(6);

    useEffect(() => {
        const gallery = async () => {
            try {
                const response = await axios.get(`http://localhost:1101/api/blog`);
                if (response.data.success === 1) {
                    setData(response.data.result);
                } else {
                    console.log(response.data.message);
                }
            } catch (error) {
                console.log(error.message);
            }
        };
        gallery();
    }, []);

    const filterData = filter === 'All' ? data : data.filter(item => item.category === filter);

    const visibleData = filterData.slice(0, visibleItems);

    const handleViewMore = () => {
        setVisibleItems(prev => prev + 6);
    }

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
                <h1 className={`border-b-2 ${filter === "All" ? "border-black" : "border-transparent"} inline-block cursor-pointer`} onClick={() => setFilter('All')}>All</h1>
                <h1 className={`border-b-2 ${filter === "Food" ? "border-black" : "border-transparent"} inline-block cursor-pointer`} onClick={() => setFilter('Food')}>Food</h1>
                <h1 className={`border-b-2 ${filter === "Achievement" ? "border-black" : "border-transparent"} inline-block cursor-pointer`} onClick={() => setFilter('Achievement')}>Achievement</h1>
                <h1 className={`border-b-2 ${filter === "News" ? "border-black" : "border-transparent"} inline-block cursor-pointer`} onClick={() => setFilter('News')}>Latest News</h1>
            </div>

            <div className='w-[85%] m-auto mb-5'>
                <div className='grid lg:grid-cols-3 grid-cols-4 xl:gap-16 gap-10 sm:pt-10 pt-5'>
                    {visibleData && visibleData?.map((item, index) => (
                        <div className='lg:col-span-1 sm:col-span-2 col-span-4 flex flex-col justify-center space-y-2' key={index} onClick={() => navigate(`blogdetails/${item._id}`)}>
                            <img src={item.image} alt="Blogs" className='h-auto w-full' />
                            <h1 className='text-[#979797] text-start pt-3'>{new Date(item.createdAt).toLocaleDateString('en-GB')}  ~  {item.category}</h1>
                            <h1 className='text-[#121D27] text-[25px]'>{item.title.length > 50 ? `${item.title.slice(0, 50)}...` : item.title}</h1>
                            <p className='opacity-60'>{item.description.length > 280 ? `${item.description.slice(0, 280)}...` : item.description}</p>
                            <div className='flex items-center space-x-5 text-[#C5A572]'>
                                <h1 className='flex items-center'>Read More</h1>
                                <FaArrowRightLong />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {visibleItems < filterData.length && (
                <div className='flex items-center justify-center'>
                    <button
                        className='border-2 border-[#C5A572] text-[#C5A572] text-[26px] p-3 mt-10'
                        onClick={handleViewMore}
                    >
                        View More
                    </button>
                </div>
            )}

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Blogs