import React, { useEffect, useState } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Banner from '../../assets/footerbg.png'
import G2 from '../../assets/services/sg1.png'
import G1 from '../../assets/services/sg2.png'
import G3 from '../../assets/services/sg3.png'
import G4 from '../../assets/services/sg4.png'
import Cut from '../../assets/services/cut.svg'
import Bg from '../../assets/services/servicesbg.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Service() {

    const [data, setData] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        const service = async () => {
            try {
                const response = await axios.get(`https://coffe-shop-btr1.onrender.com/api/service`);
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
        service()
    }, [])

    return (
        <div>
            <div className='w-[100%] overflow-x-hidden font-[Montserrat] text-[24px]' style={{ backgroundImage: `url(${Banner})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

                {/* Header Season */}
                <Header />

                <div className='bg-gradient-to-r from-[#121D2773] to-[#121D27E8] flex flex-col items-center py-40 whitespace-nowrap'>
                    <h1 className='text-[#C5A572] text-[60px] font-[Bellefair]'>Our Services</h1>
                    <h1 className='text-[20px] opacity-70 text-[#ffffff]'>Home / Services</h1>
                </div>
            </div>

            {/* Service */}
            <div className='w-[85%] m-auto flex sm:flex-row flex-col justify-between pt-20 md:pb-20 pb-14'>
                <div className='flex flex-col items-start xl:w-[35%] sm:w-[44%]'>
                    <h1 className='text-[22px] text-[#C5A572]'>OUR SERVICES</h1>
                    <h1 className='font-[Bellefair] lg:text-[60px] xxs:text-[43px] text-[35px]'>We Hold Events</h1>
                </div>
                <p className='sm:w-[52%] lg:text-[20px] md:text-[18px] text-[16px] opacity-60'>Iste sed saepe animi magnam voluptatibus voluptatibus natus quaerat. Sit sunt id rem. Doloribus et quam et tempora veritatis praesentium vero. Tempora repudiandae quia</p>
            </div>

            {data && data?.map((item, index) => (
                <div className='w-[85%] m-auto main_grid_reverse grid md:grid-cols-5 bg-[#F4EEE4] grid-cols-1' key={index}>
                    <div className='col-span-2 flex'>
                        <img src={item.image} alt="S1" className='w-full' key={item._id} />
                    </div>
                    <div className='col-span-3 flex items-center justify-center flex-col xl:px-28 lg:px-10 md:px-5 xs:px-10 px-5 md:py-0 py-10'>
                        <img src={item.subImage} alt="Ring" className='lg:w-auto w-[50px] h-auto' />
                        <h1 className='font-[Bellefair] xl:text-[50px] lg:text-[35px] md:text-[25px] xxs:text-[35px] text-[30px] text-center text-[#121D27]'>{item.name}</h1>
                        <img src={Cut} alt="Cut" className='h-[18px]' />
                        <p className='opacity-60 xl:text-[20px] lg:text-[18px] md:text-[14px] xs:text-[18px] text-[15px] text-center xl:pt-3 pt-2'>Explicabo laborum facilis cupiditate sunt ducimus cupiditate quos. Quia ad vel et qui voluptas praesentium. Rerum eos cum. Sit quia quasi distinctio repellat in pariatur sit.Minus consequuntur atque voluptatem temporibus et qui optio commodi. Est non natus accusantium aperiam est deleniti.</p>
                    </div>
                </div>
            ))}

            {/* Goal */}
            <div className='my-10' style={{ backgroundImage: `url(${Bg})` }}>
                <div className='bg-[#121D27] opacity-80 flex flex-col items-center justify-center sm:py-28 py-20'>
                    <h1 className='sm:text-[40px] text-[30px] font-[Bellefair] text-white text-center lg:w-[60%] md:w-[80%] w-[90%] pb-5'>With A Full Range Of Event Management Service And Super Menu, Our Client Achieve <span className='text-[#C5A572]'>Successful</span> And Prosperous Events!</h1>
                    <button className='text-[26px] py-2 px-5 text-white border-2'>Read More</button>
                </div>
            </div>

            {/* Tour Season */}
            <div className='w-[90%] m-auto xs:py-10 py-5 flex flex-col items-center justify-center'>
                <h1 className='text-[24px] text-[#C5A572] uppercase'>take a tour</h1>
                <h1 className='text-[#121D27] xs:text-[45px] text-[30px] font-[Bellefair] text-center'>Our Happy Moments</h1>
                <div className='grid grid-cols-4 gap-10 md:pt-14 xs:pt-10 pt-6'>
                    <img src={G4} alt="G4" className='lg:col-span-1 xs:col-span-2 col-span-4' />
                    <img src={G3} alt="G3" className='lg:col-span-1 xs:col-span-2 col-span-4' />
                    <img src={G2} alt="G2" className='lg:col-span-1 xs:col-span-2 col-span-4' />
                    <img src={G1} alt="G1" className='lg:col-span-1 xs:col-span-2 col-span-4' />
                </div>
            </div>

            {/* Contact us */}
            <div className='w-[85%] m-auto flex flex-col items-center justify-center space-y-3'>
                <h1 className='text-[#C5A572] text-[22px] uppercase'>contact us</h1>
                <h1 className='font-[Bellefair] md:text-[45px] text-[30px] text-center'>Book Your Reservation Today</h1>
                <p className='opacity-60 text-center lg:w-[70%] md:w-[85%] pb-3'>Dolorum corrupti nesciunt repellendus sapiente et dolorum est. Possimus voluptatem nemo harum. Nihil autem sed praesentium odit et consequatur quis. Sint id et dolorem nulla sapiente eos harum eum.</p>
                <button className='border-2 border-[#C5A572] py-2 px-5 text-[#C5A572] text-[26px]' onClick={() => navigate('/#booking')}>Book Table</button>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Service