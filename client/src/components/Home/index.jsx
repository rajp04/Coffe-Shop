import React, { useEffect, useState } from 'react'
import Header from '../Header'
import Banner from '../../assets/bgcafe.png'
import Cafe from '../../assets/cafe.svg'
import Story1 from '../../assets/ourstory1.png'
import Story2 from '../../assets/ourstory2.png'
import Service from './Service'
import Drinks from '../../assets/drinks.png'
import Reservation from './Reservation'
import Testimonial from './Testimonial'
import Blogs from './Blogs'
import Gallery from './Gallery'
import Footer from '../Footer'
import TeamMember from './TeamMember'
import axios from 'axios'

function Home() {

    const [banner, setBanner] = useState([]);

    useEffect(() => {
        const banner = async () => {
            try {
                const response = await axios.get(`http://localhost:1101/api/banner`);
                if (response.data.success === 1) {
                    setBanner(response.data.result);
                } else {
                    console.log(response.data.message);
                }
            } catch (error) {
                console.log(error.message);
            }
        };
        banner();
    }, [banner]);

    return (
        <div>
            {banner && banner?.map((item, index)=> (
                <div className='h-screen w-[100%] overflow-x-hidden font-[Montserrat] text-[24px]' key={index} style={{ backgroundImage: `url(${item.image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

                    {/* Header Season */}
                    <Header />

                    {/* Banner Season */}
                    <div className='flex flex-col items-center justify-center h-[80%]'>
                        <h1 className='text-[#C5A572] xs:text-[60px] text-[35px] tracking-wide welcomeFont text-center'>{item.title}</h1>
                        <h2 className='text-white xs:text-[60px] text-[35px] tracking-wide font-[Bellefair] text-center md:w-[60%] w-[85%]'>{item.description}</h2>
                        <div className='flex items-center space-x-2 pb-3'>
                            <p className='h-[2px] w-14 bg-[#C5A572]'></p>
                            <img src={Cafe} alt="Cafe" />
                            <p className='h-[2px] w-14 bg-[#C5A572]'></p>
                        </div>
                        <p className='text-white opacity-80 pb-4 text-center w-[90%]'>{item.message}</p>
                        <button className='border-2 py-2 px-5 text-white font-[24px] opacity-80' ><a href="#booking">Book A Table</a></button>
                    </div>
                </div>
            ))}
            {/* Story Season */}
            <div className='xl:py-[115px] lg:py-[80px] py-[40px]'>
                <div className='w-[85%] m-auto grid grid-cols-4 items-center justify-center gap-5'>
                    <div className='md:col-span-2 col-span-4 flex flex-col justify-center'>
                        <h1 className='uppercase text-[#C5A572] text-[24px] pb-2'>OUR STORY</h1>
                        <h1 className='text-[#000000] font-[Bellefair] lg:text-[37px] text-[30px] pb-2'>A Brief History Of How We Started.</h1>
                        <p className='text-[#000000] opacity-60 lg:text-[18px] text-[15px] tracking-tight pb-5'>Iste sed saepe animi magnam voluptatibus voluptatibus natus quaerat. Sit sunt id rem. Doloribus et quam et tempora veritatis praesentium vero. Tempora repudiandae quia.Dicta dolorum neque illum sit quam nemo labore asperiores sed. Exercitationem voluptatem ut qui accusamus veniam. Fugit voluptatem dignissimos aperiam beatae labore esse.</p>
                        <button className='border-2 border-[#C5A572] py-2 px-5 text-[#C5A572] font-[24px] opacity-80 w-[150px]'><a href="#booking">Book A Table</a></button>
                    </div>
                    <img src={Story1} alt="story1" className='h-auto md:col-span-1 xxs:col-span-2 col-span-4' />
                    <img src={Story2} alt="story2" className='h-auto md:col-span-1 xxs:col-span-2 col-span-4' />
                </div>
            </div>

            {/* Service Season */}
            <Service />

            {/* Special Day */}
            <div className='w-[85%] m-auto pt-[60px] pb-5'>
                <div className='sm:flex sm:flex-row flex-col items-center justify-between'>
                    <div className='sm:w-[40%] w-full'>
                        <h1 className='text-[#C5A572] text-[24px]'>SPECIAL TODAY</h1>
                        <h1 className='font-[Bellefair] md:text-[45px] text-[35px]'>Feel The Authentic & Original Taste From Us</h1>
                    </div>
                    <div className='sm:w-[55%] w-full'>
                        <p className='opacity-60 sm:text-[21px] text-[18px]'>Iste sed saepe animi magnam voluptatibus voluptatibus natus quaerat. Sit sunt id rem. Doloribus et quam et tempora veritatis praesentium vero. Tempora repudiandae quia</p>
                    </div>
                </div>
                <div className='flex sm:flex-row flex-col  items-center justify-start sm:mt-10 mt-5 lg:space-x-10 sm:space-x-4 space-x-0  sm:space-y-0 space-y-3 '>
                    <div className='flex h-[500px] xs:w-[450px] w-full sm:p-0 p-5 flex-col items-center justify-center text-white' style={{ backgroundImage: `url(${Drinks})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} >
                        <h1 className='font-[Bellefair] text-[45px] text-white'>DRINKS</h1>
                        <h1 className='w-36 h-[2px] mb-1 bg-[#C5A572]'></h1>
                        <h1 className='w-24 h-[2px] bg-[#C5A572]'></h1>
                        <h1 className='text-[24px] mt-4'>Menu</h1>
                        <p className='text-[20px] opacity-60 mt-3'>Beer</p>
                        <p className='text-[20px] opacity-60 mt-1'>Coffee</p>
                        <p className='text-[20px] opacity-60 mt-1'>Ice Tea</p>
                        <p className='text-[20px] opacity-60 mt-1'>Juice</p>
                        <p className='text-[20px] opacity-60 mt-1'>Milk Tea</p>
                        <p className='text-[20px] opacity-60 mt-1'>Smoothie</p>
                        <p className='text-[20px] opacity-60 mt-1'>Soft Drink</p>
                        <p className='text-[20px] opacity-60 mt-1'>...</p>
                        <h1 className='text-[24px] text-[#C5A572] opacity-60 mt-1'>Explore More</h1>
                    </div>
                    <div className='flex h-[500px] xs:w-[450px] w-full sm:p-0 p-5 flex-col items-center justify-center text-white' style={{ backgroundImage: `url(${Drinks})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} >
                        <h1 className='font-[Bellefair] text-[45px] text-white'>DINNER</h1>
                        <h1 className='w-36 h-[2px] mb-1 bg-[#C5A572]'></h1>
                        <h1 className='w-24 h-[2px] bg-[#C5A572]'></h1>
                        <h1 className='text-[24px] mt-4'>Menu</h1>
                        <p className='text-[20px] opacity-60 mt-3'>Appetizers</p>
                        <p className='text-[20px] opacity-60 mt-1'>Bruschetta</p>
                        <p className='text-[20px] opacity-60 mt-1'>Pizza</p>
                        <p className='text-[20px] opacity-60 mt-1'>Rice & Flesh</p>
                        <p className='text-[20px] opacity-60 mt-1'>Seafood</p>
                        <p className='text-[20px] opacity-60 mt-1'>Sides</p>
                        <p className='text-[20px] opacity-60 mt-1'>Veal & Beef</p>
                        <p className='text-[20px] opacity-60 mt-1'>...</p>
                        <h1 className='text-[24px] text-[#C5A572] opacity-60 mt-1'>Explore More</h1>
                    </div>
                    <div className='flex h-[500px] xs:w-[450px] w-full sm:p-0 p-5 flex-col items-center justify-center text-white' style={{ backgroundImage: `url(${Drinks})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} >
                        <h1 className='font-[Bellefair] text-[45px] text-white'>LUNCH</h1>
                        <h1 className='w-36 h-[2px] mb-1 bg-[#C5A572]'></h1>
                        <h1 className='w-24 h-[2px] bg-[#C5A572]'></h1>
                        <h1 className='text-[24px] mt-4'>Menu</h1>
                        <p className='text-[20px] opacity-60 mt-3'>Appetizers</p>
                        <p className='text-[20px] opacity-60 mt-1'>Cakes</p>
                        <p className='text-[20px] opacity-60 mt-1'>Fire It Up</p>
                        <p className='text-[20px] opacity-60 mt-1'>Pastas</p>
                        <p className='text-[20px] opacity-60 mt-1'>Salads</p>
                        <p className='text-[20px] opacity-60 mt-1'>Sandwiches</p>
                        <p className='text-[20px] opacity-60 mt-1'>Soups</p>
                        <p className='text-[20px] opacity-60 mt-1'>...</p>
                        <h1 className='text-[24px] text-[#C5A572] opacity-60 mt-1'>Explore More</h1>
                    </div>
                </div>
            </div>

            {/* Reservation Season */}
            <Reservation />

            {/* Team Member Season */}
            <TeamMember />

            {/* Testimonial Season */}
            <Testimonial />

            {/* Blogs Season */}
            <Blogs />

            {/* Gallery Season */}
            <Gallery />

            {/* Footer Season */}
            <Footer />
        </div >
    )
}

export default Home