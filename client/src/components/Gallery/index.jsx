import React, { useEffect, useState } from 'react';
import Header from '../Header';
import Banner from '../../assets/footerbg.png';
import Footer from '../Footer';
import axios from 'axios';

function Gallery() {
    const [data, setData] = useState([]); 
    const [filter, setFilter] = useState("All"); 
    const [visibleItems, setVisibleItems] = useState(12);

    useEffect(() => {
        const gallery = async () => {
            try {
                const response = await axios.get(`https://coffe-shop-btr1.onrender.com/api/gallery`);
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

    const filteredData = filter === "All" ? data : data.filter(item => item.category === filter);

    const visibleData = filteredData.slice(0, visibleItems);

    const handleViewMore = () => {
        setVisibleItems(prev => prev + 6);
    };

    return (
        <div>
            <div
                className='w-[100%] overflow-x-hidden font-[Montserrat] text-[24px]'
                style={{
                    backgroundImage: `url(${Banner})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}
            >
                {/* Header */}
                <Header />

                <div className='bg-gradient-to-r from-[#121D2773] to-[#121D27E8] flex flex-col items-center py-40 whitespace-nowrap'>
                    <h1 className='text-[#C5A572] text-[60px] font-[Bellefair]'>Take a tour</h1>
                    <h1 className='text-[20px] opacity-70 text-[#ffffff]'>Home / Gallery</h1>
                </div>
            </div>

            <div className='w-[85%] m-auto pt-20'>
                <div className='xs:flex lg:flex-row flex-col lg:items-center sm:text-[22px] text-[20px]'>
                    <div className='xs:flex xs:flex-row flex-col xl:space-x-8 xs:space-x-5'>
                        {/* Category Filters */}
                        <h1
                            className={`border-b-2 ${filter === "All" ? "border-black" : "border-transparent"} inline-block cursor-pointer`}
                            onClick={() => setFilter("All")}
                        >
                            All
                        </h1>
                        <h1
                            className={`cursor-pointer ${filter === "Food" ? "border-b-2 border-black" : ""}`}
                            onClick={() => setFilter("Food")}
                        >
                            Food
                        </h1>
                        <h1
                            className={`cursor-pointer ${filter === "CafeInterior" ? "border-b-2 border-black" : ""}`}
                            onClick={() => setFilter("CafeInterior")}
                        >
                            Cafe Interior
                        </h1>
                        <h1
                            className={`cursor-pointer ${filter === "ItalianFood" ? "border-b-2 border-black" : ""}`}
                            onClick={() => setFilter("ItalianFood")}
                        >
                            Italian Food
                        </h1>
                        <h1
                            className={`cursor-pointer ${filter === "NonVeg Food" ? "border-b-2 border-black" : ""}`}
                            onClick={() => setFilter("NonVeg Food")}
                        >
                            Non-Veg Food
                        </h1>
                        <h1
                            className={`cursor-pointer ${filter === "Vegetarian" ? "border-b-2 border-black" : ""}`}
                            onClick={() => setFilter("Vegetarian")}
                        >
                            Vegetarian
                        </h1>
                        <h1
                            className={`cursor-pointer ${filter === "Event" ? "border-b-2 border-black" : ""}`}
                            onClick={() => setFilter("Event")}
                        >
                            Event/ Celebration
                        </h1>
                    </div>
                </div>

                {/* Gallery Items */}
                <div className='grid md:grid-cols-3 grid-cols-4 lg:gap-8 sm:gap-4 gap-3 lg:pt-[80px] md:pt-[60px] pt-[40px]'>
                    {visibleData.map(item => (
                        <div className='md:col-span-1 xs:col-span-2 col-span-4 bg-[#F4EEE4]' key={item._id}>
                            <img src={item.image} alt={item.name} />
                            <h1 className='font-[Bellefair] lg:text-[30px] text-[25px] lg:p-4 p-3 text-[#121D27]'>{item.name}</h1>
                        </div>
                    ))}
                </div>

                {/* View More Button */}
                {visibleItems < filteredData.length && (
                    <div className='flex items-center justify-center'>
                        <button
                            className='border-2 border-[#C5A572] text-[#C5A572] text-[26px] p-3 mt-10'
                            onClick={handleViewMore}
                        >
                            View More
                        </button>
                    </div>
                )}
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Gallery;