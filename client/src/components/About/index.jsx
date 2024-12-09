import React from 'react'
import Header from '../Header'
import Banner from '../../assets/footerbg.png'
import Outline from '../../assets/outline.svg'
import Happiness from '../../assets/happiness.svg'
import Cheers from '../../assets/cheers.svg'
import Sp1 from '../../assets/sp1.png'
import Sp2 from '../../assets/sp2.png'
import Sp3 from '../../assets/sp3.png'
import BlogsImg from '../../assets/blog/blogimg10.png'
import { FaPlay } from 'react-icons/fa'
import Gallery from '../Home/Gallery'
import Footer from '../Footer'
import TeamMember from '../Home/TeamMember'

function About() {
    return (
        <div>
            <div className='w-[100%] overflow-x-hidden font-[Montserrat] text-[24px]' style={{ backgroundImage: `url(${Banner})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

                {/* Header Season */}
                <Header />

                <div className='bg-gradient-to-r from-[#121D2773] to-[#121D27E8] flex flex-col items-center py-40 whitespace-nowrap'>
                    <h1 className='text-[#C5A572] text-[60px] font-[Bellefair]'>About Us</h1>
                    <h1 className='text-[20px] opacity-70 text-[#ffffff]'>Home / About Us</h1>
                </div>
            </div>

            {/* Story Season */}
            <div className='flex flex-col items-center w-[85%] m-auto pt-[60px] pb-[60px]'>
                <h1 className='uppercase text-[#C5A572] text-[22px]'>our story</h1>
                <h1 className='font-[Bellefair] text-[#000000] text-[48px] pb-10'>Since 2007</h1>
                <div className='flex sm:flex-row flex-col items-center justify-center lg:space-x-20 md:space-x-8 sm:space-x-5 sm:space-y-0 space-y-5'>
                    <div className='text-center border-[2px] border-[#C5A572] py-3 lg:px-10 md:px-5 px-2 md:space-y-3 space-y-2'>
                        <h1 className='font-[Bellefair] lg:text-[45px] text-[35px]'>Who We Are</h1>
                        <p className='opacity-60'>Iste sed saepe animi magnam voluptatibus voluptatibus natus quaerat. Sit sunt id rem. Doloribus et quam et tempora veritatis praesentium vero. Tempora repudiandae quia.Dicta dolorum neque illum sit quam nemo labore asperiores sed. Exercitationem voluptatem ut qui accusamus veniam. Fugit voluptatem dignissimos aperiam beatae labore esse.</p>
                    </div>
                    <div className='text-center border-[2px] border-[#C5A572] py-3 lg:px-10 md:px-5 px-2 md:space-y-3 space-y-2'>
                        <h1 className='font-[Bellefair] lg:text-[45px] text-[35px]'>Who We Are</h1>
                        <p className='opacity-60'>Iste sed saepe animi magnam voluptatibus voluptatibus natus quaerat. Sit sunt id rem. Doloribus et quam et tempora veritatis praesentium vero. Tempora repudiandae quia.Dicta dolorum neque illum sit quam nemo labore asperiores sed. Exercitationem voluptatem ut qui accusamus veniam. Fugit voluptatem dignissimos aperiam beatae labore esse.</p>
                    </div>

                </div>
            </div>

            {/* About Cafe Season*/}
            <div className='bg-[#F4EEE4]'>
                <div className=' w-[85%] m-auto grid grid-cols-4 py-16'>
                    <div className='md:col-span-1 xxs:col-span-2 col-span-4 xxs:border-r xxs:border-b-0 border-b-2 border-[#C5A572] lg:px-5 px-3 mb-8'>
                        <h1 className='font-[Bellefair] xl:text-[45px] lg:text-[35px] text-[30px] xxs:text-start text-center xxs:pb-0 pb-5'>Every day We get Better for you</h1>
                    </div>
                    <div className='md:col-span-1 xxs:col-span-2 col-span-4 flex items-center flex-col md:border-r border-[#C5A572] lg:px-5 px-3 lg:space-y-5 space-y-3 mb-8 xxs:border-b-0 border-b-2'>
                        <img src={Outline} alt="Outline" className='h-14' />
                        <h1 className='font-[Bellefair] text-[48px] text-[#121D27] border-b-2 border-[#121D27]'>150</h1>
                        <p className='text-[25px] opacity-60 text-center xxs:pb-0 pb-5'>Dishes Menu</p>
                    </div>
                    <div className='md:col-span-1 xxs:col-span-2 col-span-4 flex items-center flex-col xxs:border-r border-[#C5A572] lg:px-5 px-3 lg:space-y-5 space-y-3 mb-8 xxs:border-b-0 border-b-2'>
                        <img src={Happiness} alt="Happiness" className='h-14' />
                        <h1 className='font-[Bellefair] text-[48px] text-[#121D27] border-b-2 border-[#121D27]'>2000</h1>
                        <p className='text-[25px] opacity-60 text-center xxs:pb-0 pb-5'>Happy Customers</p>
                    </div>
                    <div className='md:col-span-1 xxs:col-span-2 col-span-4 flex items-center flex-col lg:px-5 px-3 lg:space-y-5 space-y-3 '>
                        <img src={Cheers} alt="Cheers" className='h-14' />
                        <h1 className='font-[Bellefair] text-[48px] text-[#121D27] border-b-2 border-[#121D27]'>450</h1>
                        <p className='text-[25px] opacity-60 text-center'>Featured Events</p>
                    </div>
                </div>
            </div>

            {/* Video Season */}
            <div className='w-[85%] m-auto py-20'>
                <div className='md:h-[536px] h-[400px] bg-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(${BlogsImg})` }} >
                    <div className='bg-[#121D27BA] w-full h-full flex items-center justify-center'>
                        <div className='bg-slate-200 rounded-full p-2'>
                            <button className='bg-white p-5 rounded-full'>
                                <FaPlay className='text-[#C5A572] text-[20px]' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* OUR SPECIALITIES Season */}
            <div className='w-[85%] m-auto pb-10'>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-[#C5A572] text-[22px]'>OUR SPECIALITIES</h1>
                    <h1 className='font-[Bellefair] text-[45px] text-center'>Praesent Condimentum Rutrum Nibh.</h1>
                    <div className='grid grid-cols-3 xl:gap-10 lg:gap-8 gap-3 lg:pt-10 md:pt-5 pt-3'>
                        <div className='md:col-span-1 col-span-3 flex md:flex-col xs:flex-row flex-col items-start justify-between'>
                            <img src={Sp1} alt="Sp1" className='md:w-auto xs:w-[45%]' />
                            <div className='md:w-auto sm:w-[45%] xs:w-[50%] md:items-center items-start justify-start flex flex-col'>
                                <h1 className='lg:text-[40px] sm:text-[40px] xs:text-[30px] text-[40px] font-[Bellefair] xl:pb-2 xl:pt-8 lg:pt-5 md:pt-3 xs:pt-0 pt-3'>Fine Dining</h1>
                                <p className='opacity-60 md:text-center'>Alias suscipit iure voluptas ea et et voluptatibus. Animi assumenda libero. At natus id. Perferendis sunt repudiandae tenetur fugit.</p>
                            </div>
                        </div>
                        <div className='md:col-span-1 col-span-3 flex md:flex-col xs:flex-row flex-col items-start justify-between'>
                            <img src={Sp2} alt="Sp1" className='md:w-auto xs:w-[45%]' />
                            <div className='md:w-auto sm:w-[45%] xs:w-[50%] md:items-center items-start justify-start flex flex-col'>
                                <h1 className='lg:text-[40px] md:text-[35px] sm:text-[40px] xs:text-[30px] text-[40px] font-[Bellefair] xl:pb-2 xl:pt-8 lg:pt-5 md:pt-3 xs:pt-0 pt-3'>Spicy Cocktails</h1>
                                <p className='opacity-60 md:text-center'>Alias suscipit iure voluptas ea et et voluptatibus. Animi assumenda libero. At natus id. Perferendis sunt repudiandae tenetur fugit.</p>
                            </div>
                        </div>
                        <div className='md:col-span-1 col-span-3 flex md:flex-col xs:flex-row flex-col items-start justify-between'>
                            <img src={Sp3} alt="Sp1" className='md:w-auto xs:w-[45%]' />
                            <div className='md:w-auto sm:w-[45%] xs:w-[50%] md:items-center items-start justify-start flex flex-col'>
                                <h1 className='lg:text-[40px] sm:text-[40px] xs:text-[30px] text-[40px] font-[Bellefair] xl:pb-2 xl:pt-8 lg:pt-5 md:pt-3 xs:pt-0 pt-3'>Best Veggie</h1>
                                <p className='opacity-60 md:text-center'>Alias suscipit iure voluptas ea et et voluptatibus. Animi assumenda libero. At natus id. Perferendis sunt repudiandae tenetur fugit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Standards Season */}
            <div className='w-[85%] m-auto bg-[#F4EEE4] sm:px-10 px-2 flex flex-col items-center justify-center py-20'>
                <h1 className='text-[#C5A572] text-[22px]'>OUR STANDARDS</h1>
                <h1 className='text-[#000000] font-[Bellefair] sm:text-[45px] xs:text-[40px] text-[30px] text-center'>There Are Many Variations Of Passages</h1>
                <div className='grid grid-cols-3 lg:gap-5 gap-2 lg:pt-8 pt-5'>
                    <div className='md:col-span-1 col-span-3 text-center lg:px-5 md:px-2 md:border-r md:border-b-0 border-b  border-[#c5a57279]'>
                        <div className='flex md:flex-col sm:flex-row flex-col justify-between md:pb-0 pb-5'>
                            <h1 className='text-white lg:text-[82px] text-[60px] font-[Bellefair] md:w-auto sm:w-[30%] w-auto'>01</h1>
                            <div className='md:items-center items-start md:justify-center justify-start md:w-auto sm:w-[70%] w-auto'>
                                <h1 className='lg:text-[25px] text-[22px] text-[#121D27] pb-3'>Choose Music Carefully Sapiente.</h1>
                                <p className='opacity-60'>Sed ipsa et id ea saepe sint. Eligendi aut ea ea. Quos cupiditatei est est doloremque quasi velit earum non.</p>
                            </div>
                        </div>
                    </div>
                    <div className='md:col-span-1 col-span-3 text-center lg:px-5 md:px-2 md:border-r md:border-b-0 border-b  border-[#c5a57279]'>
                        <div className='flex md:flex-col sm:flex-row flex-col justify-between md:pb-0 pb-5'>
                            <h1 className='text-white lg:text-[82px] text-[60px] font-[Bellefair] md:w-auto sm:w-[30%] w-auto'>02</h1>
                            <div className='md:items-center items-start md:justify-center justify-start md:w-auto sm:w-[70%] w-auto'>
                                <h1 className='lg:text-[25px] text-[22px] text-[#121D27] pb-3'>Never Serve Food That Has Expired.</h1>
                                <p className='opacity-60'>Sed ipsa et id ea saepe sint. Eligendi aut ea ea. Quos cupiditatei est est doloremque quasi velit earum non.</p>
                            </div>
                        </div>
                    </div>
                    <div className='md:col-span-1 col-span-3 text-center lg:px-5 md:px-2 md:border-b-0 border-b  border-[#c5a57279]'>
                        <div className='flex md:flex-col sm:flex-row flex-col justify-between md:pb-0 pb-5'>
                            <h1 className='text-white lg:text-[82px] text-[60px] font-[Bellefair] md:w-auto sm:w-[30%] w-auto'>03</h1>
                            <div className='md:items-center items-start md:justify-center justify-start md:w-auto sm:w-[70%] w-auto'>
                                <h1 className='lg:text-[25px] text-[22px] text-[#121D27] pb-3'>Keep The Restaurant Spotless.</h1>
                                <p className='opacity-60'>Sed ipsa et id ea saepe sint. Eligendi aut ea ea. Quos cupiditatei est est doloremque quasi velit earum non.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Team Member Season */}
            <TeamMember />

            {/* Gallery Season */}
            <Gallery />

            {/* Footer Season */}
            <Footer />
        </div>
    )
}

export default About