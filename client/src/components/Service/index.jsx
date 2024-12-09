import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Banner from '../../assets/footerbg.png'
import G2 from '../../assets/services/sg1.png'
import G1 from '../../assets/services/sg2.png'
import G3 from '../../assets/services/sg3.png'
import G4 from '../../assets/services/sg4.png'
import S1 from '../../assets/services/ser1.png'
import S2 from '../../assets/services/ser2.png'
import S3 from '../../assets/services/ser3.png'
import S4 from '../../assets/services/ser4.png'
import S5 from '../../assets/services/ser5.png'
import S6 from '../../assets/services/ser6.png'
import Ring from '../../assets/services/wedding-rings.svg'
import Bar from '../../assets/services/bar.svg'
import Birthday from '../../assets/services/birthday-cakeicon.svg'
import Cheer from '../../assets/services/cheersicon.svg'
import Cut from '../../assets/services/commonicon.svg'
import Outline from '../../assets/services/outline.svg'
import Restaurantion from '../../assets/services/restauranticon.svg'
import Bg from '../../assets/services/servicesbg.png'


function Service() {
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
            <div className='w-[85%] m-auto flex sm:flex-row flex-col justify-between pt-20'>
                <div className='flex flex-col items-start xl:w-[35%] sm:w-[44%]'>
                    <h1 className='text-[22px] text-[#C5A572]'>OUR SERVICES</h1>
                    <h1 className='font-[Bellefair] lg:text-[60px] xxs:text-[43px] text-[35px]'>We Hold Events</h1>
                </div>
                <p className='sm:w-[52%] lg:text-[20px] md:text-[18px] text-[16px] opacity-60'>Iste sed saepe animi magnam voluptatibus voluptatibus natus quaerat. Sit sunt id rem. Doloribus et quam et tempora veritatis praesentium vero. Tempora repudiandae quia</p>
            </div>

            <div className='w-[85%] m-auto grid md:grid-cols-5 grid-cols-1 md:mt-20 mt-14'>
                <div className='col-span-1 md:hidden'>
                    <img src={S1} alt="S1" className='w-full'/>
                </div>
                <div className='col-span-3 bg-[#F4EEE4] flex items-center justify-center flex-col xl:px-28 lg:px-10 md:px-5 xs:px-10 px-5 md:py-0 py-10'>
                    <img src={Ring} alt="Ring" className='lg:w-auto w-[50px] h-auto' />
                    <h1 className='font-[Bellefair] xl:text-[50px] lg:text-[35px] md:text-[25px] xxs:text-[35px] text-[30px] text-center text-[#121D27]'>Wedding Events</h1>
                    <img src={Cut} alt="Cut" className='h-[18px]' />
                    <p className='opacity-60 xl:text-[20px] lg:text-[18px] md:text-[14px] xs:text-[18px] text-[15px] text-center xl:pt-3 pt-2'>Explicabo laborum facilis cupiditate sunt ducimus cupiditate quos. Quia ad vel et qui voluptas praesentium. Rerum eos cum. Sit quia quasi distinctio repellat in pariatur sit.Minus consequuntur atque voluptatem temporibus et qui optio commodi. Est non natus accusantium aperiam est deleniti.</p>
                </div>
                <div className='col-span-2 md:flex hidden'>
                    <img src={S1} alt="S1" className='w-full'/>
                </div>


                <div className='col-span-2 flex justify-center'>
                    <img src={S2} alt="S2" className='w-full'/>
                </div>
                <div className='col-span-3 flex items-center justify-center flex-col xl:px-28 lg:px-10 md:px-5 xs:px-10 px-5 md:py-0 py-10'>
                    <img src={Restaurantion} alt="Ring" className='lg:w-auto w-[50px] h-auto' />
                    <h1 className='font-[Bellefair] xl:text-[50px] lg:text-[35px] md:text-[25px] xxs:text-[35px] text-[30px] text-center text-[#121D27]'>Holiday Parties</h1>
                    <img src={Cut} alt="Cut" className='h-[18px]' />
                    <p className='opacity-60 xl:text-[20px] lg:text-[18px] md:text-[14px] xs:text-[18px] text-[15px] text-center xl:pt-3 pt-2'>Explicabo laborum facilis cupiditate sunt ducimus cupiditate quos. Quia ad vel et qui voluptas praesentium. Rerum eos cum. Sit quia quasi distinctio repellat in pariatur sit.Minus consequuntur atque voluptatem temporibus et qui optio commodi. Est non natus accusantium aperiam est deleniti.</p>
                </div>


                <div className='col-span-2 md:hidden flex justify-center'>
                    <img src={S3} alt="S1" className='w-full'/>
                </div>
                <div className='col-span-3 bg-[#F4EEE4] flex items-center justify-center flex-col xl:px-28 lg:px-10 md:px-5 xs:px-10 px-5 md:py-0 py-10'>
                    <img src={Birthday} alt="Ring" className='lg:w-auto w-[50px] h-auto' />
                    <h1 className='font-[Bellefair] xl:text-[50px] lg:text-[35px] md:text-[25px] xxs:text-[35px] text-[30px] text-center text-[#121D27]'>Birthday Parties</h1>
                    <img src={Cut} alt="Cut" className='h-[18px]' />
                    <p className='opacity-60 xl:text-[20px] lg:text-[18px] md:text-[14px] xs:text-[18px] text-[15px] text-center xl:pt-3 pt-2'>Explicabo laborum facilis cupiditate sunt ducimus cupiditate quos. Quia ad vel et qui voluptas praesentium. Rerum eos cum. Sit quia quasi distinctio repellat in pariatur sit.Minus consequuntur atque voluptatem temporibus et qui optio commodi. Est non natus accusantium aperiam est deleniti.</p>
                </div>
                <div className='col-span-2 md:flex hidden'>
                    <img src={S3} alt="S1" className='w-full'/>
                </div>


                <div className='col-span-2 flex justify-center'>
                    <img src={S4} alt="S2" className='w-full'/>
                </div>
                <div className='col-span-3 flex items-center justify-center flex-col xl:px-28 lg:px-10 md:px-5 xs:px-10 px-5 md:py-0 py-10'>
                    <img src={Bar} alt="Ring" className='lg:w-auto w-[50px] h-auto' />
                    <h1 className='font-[Bellefair] xl:text-[50px] lg:text-[35px] md:text-[25px] xxs:text-[35px] text-[30px] text-center text-[#121D27]'>Social Events</h1>
                    <img src={Cut} alt="Cut" className='h-[18px]' />
                    <p className='opacity-60 xl:text-[20px] lg:text-[18px] md:text-[14px] xs:text-[18px] text-[15px] text-center xl:pt-3 pt-2'>Explicabo laborum facilis cupiditate sunt ducimus cupiditate quos. Quia ad vel et qui voluptas praesentium. Rerum eos cum. Sit quia quasi distinctio repellat in pariatur sit.Minus consequuntur atque voluptatem temporibus et qui optio commodi. Est non natus accusantium aperiam est deleniti.</p>
                </div>


                <div className='col-span-2 md:hidden flex justify-center'>
                    <img src={S5} alt="S1" className='w-full'/>
                </div>
                <div className='col-span-3 bg-[#F4EEE4] flex items-center justify-center flex-col xl:px-28 lg:px-10 md:px-5 xs:px-10 px-5 md:py-0 py-10'>
                    <img src={Cheer} alt="Ring" className='lg:w-auto w-[50px] h-auto' />
                    <h1 className='font-[Bellefair] xl:text-[50px] lg:text-[35px] md:text-[25px] xxs:text-[35px] text-[30px] text-center text-[#121D27]'>Corporate Events</h1>
                    <img src={Cut} alt="Cut" className='h-[18px]' />
                    <p className='opacity-60 xl:text-[20px] lg:text-[18px] md:text-[14px] xs:text-[18px] text-[15px] text-center xl:pt-3 pt-2'>Explicabo laborum facilis cupiditate sunt ducimus cupiditate quos. Quia ad vel et qui voluptas praesentium. Rerum eos cum. Sit quia quasi distinctio repellat in pariatur sit.Minus consequuntur atque voluptatem temporibus et qui optio commodi. Est non natus accusantium aperiam est deleniti.</p>
                </div>
                <div className='col-span-2 md:flex hidden'>
                    <img src={S5} alt="S1" className='w-full'/>
                </div>


                <div className='col-span-2 flex justify-center'>
                    <img src={S6} alt="S2" className='w-full'/>
                </div>
                <div className='col-span-3 flex items-center justify-center flex-col xl:px-28 lg:px-10 md:px-5 xs:px-10 px-5 md:py-0 py-10'>
                    <img src={Outline} alt="Ring" className='lg:w-auto w-[50px] h-auto' />
                    <h1 className='font-[Bellefair] xl:text-[50px] lg:text-[35px] md:text-[25px] xxs:text-[35px] text-[30px] text-center text-[#121D27]'>Private Party</h1>
                    <img src={Cut} alt="Cut" className='h-[18px]' />
                    <p className='opacity-60 xl:text-[20px] lg:text-[18px] md:text-[14px] xs:text-[18px] text-[15px] text-center xl:pt-3 pt-2'>Explicabo laborum facilis cupiditate sunt ducimus cupiditate quos. Quia ad vel et qui voluptas praesentium. Rerum eos cum. Sit quia quasi distinctio repellat in pariatur sit.Minus consequuntur atque voluptatem temporibus et qui optio commodi. Est non natus accusantium aperiam est deleniti.</p>
                </div>
            </div>

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
                <button className='border-2 border-[#C5A572] py-2 px-5 text-[#C5A572] text-[26px]'>Book Table</button>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Service