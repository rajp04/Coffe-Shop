import React, { useEffect, useState } from 'react'
import Header from '../Header'
import Banner from '../../assets/footerbg.png'
import Footer from '../Footer'
import axios from 'axios'

function Gallery() {

    const [data, setData] = useState()

    useEffect(() => {
        const gallery = async () => {
            try {
                const response = await axios.get(`http://localhost:1101/api/gallery`);
                if (response.data.success === 1) {
                    // console.log(response.data);
                    setData(response.data.result)
                } else {
                    console.log(response.data.message);
                }
            } catch (error) {
                console.log(error.message);
            }
        }
        gallery()
    })

    // console.log(data[0].name);


    return (
        <div>
            <div className='w-[100%] overflow-x-hidden font-[Montserrat] text-[24px]' style={{ backgroundImage: `url(${Banner})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

                {/* Header Season */}
                <Header />

                <div className='bg-gradient-to-r from-[#121D2773] to-[#121D27E8] flex flex-col items-center py-40 whitespace-nowrap'>
                    <h1 className='text-[#C5A572] text-[60px] font-[Bellefair]'>Take a tour</h1>
                    <h1 className='text-[20px] opacity-70 text-[#ffffff]'>Home / Gallery</h1>
                </div>
            </div>

            <div className='w-[85%] m-auto pt-20'>
                <div className='xs:flex lg:flex-row flex-col lg:items-center sm:text-[22px] text-[20px]'>
                    <div className='xs:flex xs:flex-row flex-col xl:space-x-8 xs:space-x-5'>
                        <h1 className='border-b-2 border-black inline-block'>All</h1>
                        <h1>Food</h1>
                        <h1 className='whitespace-nowrap'>Cafe Interior</h1>
                        <h1 className='whitespace-nowrap xs:pe-8'>Italian Food</h1>
                    </div>
                    <div className='xs:flex xs:flex-row flex-col xl:space-x-8 xs:space-x-5'>
                        <h1 className='whitespace-nowrap'>Non-Veg Food</h1>
                        <h1>Vegatarian</h1>
                        <h1 className='whitespace-nowrap'>Event/ Celebration</h1>
                    </div>
                </div>

                <div className='grid md:grid-cols-3 grid-cols-4 lg:gap-8 sm:gap-4 gap-3 lg:pt-[80px] md:pt-[60px] pt-[40px]'>
                    {data && data?.map(item => (
                        <div className='md:col-span-1 xs:col-span-2 col-span-4 bg-[#F4EEE4]' key={item._id}>
                            <img src={item.image} alt="G1" />
                            <h1 className='font-[Bellefair] lg:text-[30px] text-[25px] lg:p-4 p-3 text-[#121D27]'>{item.name}</h1>
                        </div>
                    ))}
                </div>
                <div className='flex items-center justify-center'>
                    <button className='border-2 border-[#C5A572] text-[#C5A572] text-[26px] p-3 mt-10'>View More</button>
                </div>
            </div>

            {/* Footer Season */}
            <Footer />
        </div>
    )
}

export default Gallery