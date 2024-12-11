import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Banner from '../../assets/gallery/g10.png'
import Menu1 from '../../assets/menu/menu1.png'
import Menu2 from '../../assets/menu/menu2.png'
import Menu3 from '../../assets/menu/menu3.png'
import Menu4 from '../../assets/menu/menu4.png'
import Menu5 from '../../assets/menu/menu5.png'
import Menu6 from '../../assets/menu/menu6.png'
import Menu7 from '../../assets/menu/menu7.png'
import Cut from '../../assets/menu/cut.svg'
import Cutwhite from '../../assets/menu/cutwhite.svg'
import BgMenu from '../../assets/menu/bgmenuimg.png'
import sm1 from '../../assets/menu/smi1.png'
import sm2 from '../../assets/menu/smi2.png'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

function Menu() {
  return (
    <div>
      <div className='w-[100%] overflow-x-hidden font-[Montserrat] text-[24px]' style={{ backgroundImage: `url(${Banner})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

        {/* Header Season */}
        <Header />

        <div className='bg-gradient-to-r from-[#121D2773] to-[#121D27E8] flex flex-col items-center py-40 whitespace-nowrap'>
          <h1 className='text-[#C5A572] text-[60px] font-[Bellefair]'>Our Menu</h1>
          <h1 className='text-[20px] opacity-70 text-[#ffffff]'>Home / Menu</h1>
        </div>
      </div>

      <div className='w-[85%] m-auto grid md:grid-cols-7 xs:grid-cols-3 xxs:grid-cols-2 grid-cols-1 xl:gap-5 gap-2 py-20'>
        <div className='col-span-1 bg-cover bg-center bg-no-repeat lg:h-[140px] md:h-[120px] h-[140px]' style={{ backgroundImage: `url(${Menu6})` }}>
          <h1 className='bg-[#121D27AD] text-white text-[22px] flex items-center justify-center h-full'>Starters</h1>
        </div>
        <div className='col-span-1 bg-cover bg-center bg-no-repeat lg:h-[140px] md:h-[120px] h-[140px]' style={{ backgroundImage: `url(${Menu1})` }}>
          <h1 className='bg-[#121D27AD] text-white text-[22px] flex items-center justify-center h-full'>Breakfast</h1>
        </div>
        <div className='col-span-1 bg-cover bg-center bg-no-repeat lg:h-[140px] md:h-[120px] h-[140px]' style={{ backgroundImage: `url(${Menu3})` }}>
          <h1 className='bg-[#121D27AD] text-white text-[22px] flex items-center justify-center h-full'>Lunch</h1>
        </div>
        <div className='col-span-1 bg-cover bg-center bg-no-repeat lg:h-[140px] md:h-[120px] h-[140px]' style={{ backgroundImage: `url(${Menu5})` }}>
          <h1 className='bg-[#121D27AD] text-white text-[22px] flex items-center justify-center h-full'>Dinner</h1>
        </div>
        <div className='col-span-1 bg-cover bg-center bg-no-repeat lg:h-[140px] md:h-[120px] h-[140px]' style={{ backgroundImage: `url(${Menu4})` }}>
          <h1 className='bg-[#121D27AD] text-white text-[22px] flex items-center justify-center h-full'>Desserts</h1>
        </div>
        <div className='col-span-1 bg-cover bg-center bg-no-repeat lg:h-[140px] md:h-[120px] h-[140px]' style={{ backgroundImage: `url(${Menu7})` }}>
          <h1 className='bg-[#121D27AD] text-white text-[22px] flex items-center justify-center h-full'>Coffee</h1>
        </div>
        <div className='col-span-1 md:grid xxs:hidden bg-cover bg-center bg-no-repeat lg:h-[140px] md:h-[120px] h-[140px]' style={{ backgroundImage: `url(${Menu2})` }}>
          <h1 className='bg-[#121D27AD] text-white text-[22px] flex items-center justify-center h-full'>Mocktails</h1>
        </div>
      </div>

      {/* STARTERS */}
      <div className='w-[85%] m-auto flex flex-col pb-20'>
        <h1 className='text-[40px] font-[Bellefair] text-[#C5A572] text-center'>STARTERS</h1>
        <div className='flex items-center justify-center'>
          <img src={Cut} alt="cut" className='w-[160px]' />
        </div>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-10 pt-14'>
          <div className='col-span-1'>
            <div className='flex items-center justify-between space-x-2'>
              <h1 className='font-[Bellefair] sm:text-[35px] xs:text-[30px] text-[25px] text-[#121D27]'>Harum Deunt Exercitationem</h1>
              <p className='font-[Bellefair] text-[35px] text-[#121D27]'>$20</p>
            </div>
            <p className='opacity-60'>Eum id harum, Dolores enim, Omnis autem.</p>
          </div>
          <div className='col-span-1'>
            <div className='flex items-center justify-between space-x-2'>
              <h1 className='font-[Bellefair] sm:text-[35px] xs:text-[30px] text-[25px] text-[#121D27]'>Et Officiis Eaque</h1>
              <p className='font-[Bellefair] text-[35px] text-[#121D27]'>$50</p>
            </div>
            <p className='opacity-60'>Eum id harum, Dolores enim, Omnis autem.</p>
          </div>
          <div className='col-span-1'>
            <div className='flex items-center justify-between space-x-2'>
              <h1 className='font-[Bellefair] sm:text-[35px] xs:text-[30px] text-[25px] text-[#121D27]'>Molestias Quod Voluptatem</h1>
              <p className='font-[Bellefair] text-[35px] text-[#121D27]'>$250</p>
            </div>
            <p className='opacity-60'>Eum id harum, Dolores enim, Omnis autem.</p>
          </div>
          <div className='col-span-1'>
            <div className='flex items-center justify-between space-x-2'>
              <h1 className='font-[Bellefair] sm:text-[35px] xs:text-[30px] text-[25px] text-[#121D27]'>Dolore Qui Maiores</h1>
              <p className='font-[Bellefair] text-[35px] text-[#121D27]'>$300</p>
            </div>
            <p className='opacity-60'>Eum id harum, Dolores enim, Omnis autem.</p>
          </div>
          <div className='col-span-1'>
            <div className='flex items-center justify-between space-x-2'>
              <h1 className='font-[Bellefair] sm:text-[35px] xs:text-[30px] text-[25px] text-[#121D27]'>Architecto Nesciunt Tenetur</h1>
              <p className='font-[Bellefair] text-[35px] text-[#121D27]'>$40</p>
            </div>
            <p className='opacity-60'>Eum id harum, Dolores enim, Omnis autem.</p>
          </div>
          <div className='col-span-1'>
            <div className='flex items-center justify-between space-x-2'>
              <h1 className='font-[Bellefair] sm:text-[35px] xs:text-[30px] text-[25px] text-[#121D27]'>Doloremque Esse Aspernatur</h1>
              <p className='font-[Bellefair] text-[35px] text-[#121D27]'>$250</p>
            </div>
            <p className='opacity-60'>Eum id harum, Dolores enim, Omnis autem.</p>
          </div>
          <div className='col-span-1'>
            <div className='flex items-center justify-between space-x-2'>
              <h1 className='font-[Bellefair] sm:text-[35px] xs:text-[30px] text-[25px] text-[#121D27]'>In Suscipit Sequi</h1>
              <p className='font-[Bellefair] text-[35px] text-[#121D27]'>$50</p>
            </div>
            <p className='opacity-60'>Eum id harum, Dolores enim, Omnis autem.</p>
          </div>
          <div className='col-span-1'>
            <div className='flex items-center justify-between space-x-2'>
              <h1 className='font-[Bellefair] sm:text-[35px] xs:text-[30px] text-[25px] text-[#121D27]'>Aut Fuga Cupiditate</h1>
              <p className='font-[Bellefair] text-[35px] text-[#121D27]'>$150</p>
            </div>
            <p className='opacity-60'>Eum id harum, Dolores enim, Omnis autem.</p>
          </div>
          <div className='col-span-1'>
            <div className='flex items-center justify-between space-x-2'>
              <h1 className='font-[Bellefair] sm:text-[35px] xs:text-[30px] text-[25px] text-[#121D27]'>Rerum Possimus Possimus</h1>
              <p className='font-[Bellefair] text-[35px] text-[#121D27]'>$20</p>
            </div>
            <p className='opacity-60'>Eum id harum, Dolores enim, Omnis autem.</p>
          </div>
          <div className='col-span-1'>
            <div className='flex items-center justify-between space-x-2'>
              <h1 className='font-[Bellefair] sm:text-[35px] xs:text-[30px] text-[25px] text-[#121D27]'>Beatae Nulla Illo</h1>
              <p className='font-[Bellefair] text-[35px] text-[#121D27]'>$60</p>
            </div>
            <p className='opacity-60'>Eum id harum, Dolores enim, Omnis autem.</p>
          </div>

        </div>
      </div>

      {/* Lunch */}
      <div style={{ backgroundImage: `url(${BgMenu})` }}>
        <div className='w-[85%] m-auto text-white flex flex-col py-20' style={{ backgroundImage: `url(${BgMenu})` }}>
          <h1 className='text-[40px] font-[Bellefair] text-[#C5A572] text-center'>LUNCH</h1>
          <div className='flex items-center justify-center'>
            <img src={Cutwhite} alt="cut" className='w-[160px] logo-img' />
          </div>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-10 pt-14'>
            <div className='col-span-1'>
              <div className='flex items-center justify-between space-x-2'>
                <h1 className='font-[Bellefair] sm:text-[35px] xs:text-[30px] text-[25px] text-white'>Harum Deunt Exercitationem</h1>
                <p className='font-[Bellefair] text-[35px] text-white'>$20</p>
              </div>
              <p className='opacity-60'>Eum id harum, Dolores enim, Omnis autem.</p>
            </div>
            <div className='col-span-1'>
              <div className='flex items-center justify-between space-x-2'>
                <h1 className='font-[Bellefair] sm:text-[35px] xs:text-[30px] text-[25px] text-white'>Et Officiis Eaque</h1>
                <p className='font-[Bellefair] text-[35px] text-white'>$50</p>
              </div>
              <p className='opacity-60'>Eum id harum, Dolores enim, Omnis autem.</p>
            </div>
            <div className='col-span-1'>
              <div className='flex items-center justify-between space-x-2'>
                <h1 className='font-[Bellefair] sm:text-[35px] xs:text-[30px] text-[25px] text-white'>Molestias Quod Voluptatem</h1>
                <p className='font-[Bellefair] text-[35px] text-white'>$250</p>
              </div>
              <p className='opacity-60'>Eum id harum, Dolores enim, Omnis autem.</p>
            </div>
            <div className='col-span-1'>
              <div className='flex items-center justify-between space-x-2'>
                <h1 className='font-[Bellefair] sm:text-[35px] xs:text-[30px] text-[25px] text-white'>Dolore Qui Maiores</h1>
                <p className='font-[Bellefair] text-[35px] text-white'>$300</p>
              </div>
              <p className='opacity-60'>Eum id harum, Dolores enim, Omnis autem.</p>
            </div>
            <div className='col-span-1'>
              <div className='flex items-center justify-between space-x-2'>
                <h1 className='font-[Bellefair] sm:text-[35px] xs:text-[30px] text-[25px] text-white'>Architecto Nesciunt Tenetur</h1>
                <p className='font-[Bellefair] text-[35px] text-white'>$40</p>
              </div>
              <p className='opacity-60'>Eum id harum, Dolores enim, Omnis autem.</p>
            </div>
            <div className='col-span-1'>
              <div className='flex items-center justify-between space-x-2'>
                <h1 className='font-[Bellefair] sm:text-[35px] xs:text-[30px] text-[25px] text-white'>Doloremque Esse Aspernatur</h1>
                <p className='font-[Bellefair] text-[35px] text-white'>$250</p>
              </div>
              <p className='opacity-60'>Eum id harum, Dolores enim, Omnis autem.</p>
            </div>
            <div className='col-span-1'>
              <div className='flex items-center justify-between space-x-2'>
                <h1 className='font-[Bellefair] sm:text-[35px] xs:text-[30px] text-[25px] text-white'>In Suscipit Sequi</h1>
                <p className='font-[Bellefair] text-[35px] text-white'>$50</p>
              </div>
              <p className='opacity-60'>Eum id harum, Dolores enim, Omnis autem.</p>
            </div>
            <div className='col-span-1'>
              <div className='flex items-center justify-between space-x-2'>
                <h1 className='font-[Bellefair] sm:text-[35px] xs:text-[30px] text-[25px] text-white'>Aut Fuga Cupiditate</h1>
                <p className='font-[Bellefair] text-[35px] text-white'>$150</p>
              </div>
              <p className='opacity-60'>Eum id harum, Dolores enim, Omnis autem.</p>
            </div>
            <div className='col-span-1'>
              <div className='flex items-center justify-between space-x-2'>
                <h1 className='font-[Bellefair] sm:text-[35px] xs:text-[30px] text-[25px] text-white'>Rerum Possimus Possimus</h1>
                <p className='font-[Bellefair] text-[35px] text-white'>$20</p>
              </div>
              <p className='opacity-60'>Eum id harum, Dolores enim, Omnis autem.</p>
            </div>
            <div className='col-span-1'>
              <div className='flex items-center justify-between space-x-2'>
                <h1 className='font-[Bellefair] sm:text-[35px] xs:text-[30px] text-[25px] text-white'>Beatae Nulla Illo</h1>
                <p className='font-[Bellefair] text-[35px] text-white'>$60</p>
              </div>
              <p className='opacity-60'>Eum id harum, Dolores enim, Omnis autem.</p>
            </div>
          </div>
        </div>
      </div>

      {/* DINNER */}
      <div className='w-[85%] m-auto flex flex-col py-20'>
        <h1 className='text-[40px] font-[Bellefair] text-[#C5A572] text-center'>DINNER</h1>
        <div className='flex items-center justify-center'>
          <img src={Cut} alt="cut" className='w-[160px]' />
        </div>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-10 pt-14'>
          <div className='col-span-1'>
            <div className='flex items-center justify-between space-x-2'>
              <h1 className='font-[Bellefair] sm:text-[35px] xs:text-[30px] text-[25px] text-[#121D27]'>Harum Deunt Exercitationem</h1>
              <p className='font-[Bellefair] text-[35px] text-[#121D27]'>$20</p>
            </div>
            <p className='opacity-60'>Eum id harum, Dolores enim, Omnis autem.</p>
          </div>
          <div className='col-span-1'>
            <div className='flex items-center justify-between space-x-2'>
              <h1 className='font-[Bellefair] sm:text-[35px] xs:text-[30px] text-[25px] text-[#121D27]'>Et Officiis Eaque</h1>
              <p className='font-[Bellefair] text-[35px] text-[#121D27]'>$50</p>
            </div>
            <p className='opacity-60'>Eum id harum, Dolores enim, Omnis autem.</p>
          </div>
          <div className='col-span-1'>
            <div className='flex items-center justify-between space-x-2'>
              <h1 className='font-[Bellefair] sm:text-[35px] xs:text-[30px] text-[25px] text-[#121D27]'>Molestias Quod Voluptatem</h1>
              <p className='font-[Bellefair] text-[35px] text-[#121D27]'>$250</p>
            </div>
            <p className='opacity-60'>Eum id harum, Dolores enim, Omnis autem.</p>
          </div>
          <div className='col-span-1'>
            <div className='flex items-center justify-between space-x-2'>
              <h1 className='font-[Bellefair] sm:text-[35px] xs:text-[30px] text-[25px] text-[#121D27]'>Dolore Qui Maiores</h1>
              <p className='font-[Bellefair] text-[35px] text-[#121D27]'>$300</p>
            </div>
            <p className='opacity-60'>Eum id harum, Dolores enim, Omnis autem.</p>
          </div>
          <div className='col-span-1'>
            <div className='flex items-center justify-between space-x-2'>
              <h1 className='font-[Bellefair] sm:text-[35px] xs:text-[30px] text-[25px] text-[#121D27]'>Architecto Nesciunt Tenetur</h1>
              <p className='font-[Bellefair] text-[35px] text-[#121D27]'>$40</p>
            </div>
            <p className='opacity-60'>Eum id harum, Dolores enim, Omnis autem.</p>
          </div>
          <div className='col-span-1'>
            <div className='flex items-center justify-between space-x-2'>
              <h1 className='font-[Bellefair] sm:text-[35px] xs:text-[30px] text-[25px] text-[#121D27]'>Doloremque Esse Aspernatur</h1>
              <p className='font-[Bellefair] text-[35px] text-[#121D27]'>$250</p>
            </div>
            <p className='opacity-60'>Eum id harum, Dolores enim, Omnis autem.</p>
          </div>
          <div className='col-span-1'>
            <div className='flex items-center justify-between space-x-2'>
              <h1 className='font-[Bellefair] sm:text-[35px] xs:text-[30px] text-[25px] text-[#121D27]'>In Suscipit Sequi</h1>
              <p className='font-[Bellefair] text-[35px] text-[#121D27]'>$50</p>
            </div>
            <p className='opacity-60'>Eum id harum, Dolores enim, Omnis autem.</p>
          </div>
          <div className='col-span-1'>
            <div className='flex items-center justify-between space-x-2'>
              <h1 className='font-[Bellefair] sm:text-[35px] xs:text-[30px] text-[25px] text-[#121D27]'>Aut Fuga Cupiditate</h1>
              <p className='font-[Bellefair] text-[35px] text-[#121D27]'>$150</p>
            </div>
            <p className='opacity-60'>Eum id harum, Dolores enim, Omnis autem.</p>
          </div>
          <div className='col-span-1'>
            <div className='flex items-center justify-between space-x-2'>
              <h1 className='font-[Bellefair] sm:text-[35px] xs:text-[30px] text-[25px] text-[#121D27]'>Rerum Possimus Possimus</h1>
              <p className='font-[Bellefair] text-[35px] text-[#121D27]'>$20</p>
            </div>
            <p className='opacity-60'>Eum id harum, Dolores enim, Omnis autem.</p>
          </div>
          <div className='col-span-1'>
            <div className='flex items-center justify-between space-x-2'>
              <h1 className='font-[Bellefair] sm:text-[35px] xs:text-[30px] text-[25px] text-[#121D27]'>Beatae Nulla Illo</h1>
              <p className='font-[Bellefair] text-[35px] text-[#121D27]'>$60</p>
            </div>
            <p className='opacity-60'>Eum id harum, Dolores enim, Omnis autem.</p>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-4 pb-14'>
        <div className='col-span-1 bg-[#F4EEE4] flex flex-col xl:items-center xl:justify-center xl:ps-0 ps-2 relative'>
          <h1 className='font-[Bellefair] lg:text-[40px] text-[30px] text-[#C5A572]'>Special Menu</h1>
          <p className='opacity-60 pb-5'>Occaecati Cum, Sunt Ducimus, Perspiciatis.</p>
          <div className='xl:p-5 p-3 bg-white text-[#C5A572] text-center absolute bottom-0 xl:right-14 right-10 cursor-pointer'>
            <FaChevronLeft />
          </div>
          <div className='xl:p-5 p-3 bg-[#C5A572] text-white text-center absolute bottom-0 right-0 cursor-pointer'>
            <FaChevronRight />
          </div>
        </div>
        <div className='col-span-1 '>
          <img src={sm1} alt="sm1" />
        </div>
        <div className='col-span-1 '>
          <img src={sm2} alt="sm2" />
        </div>
        <div className='col-span-1 bg-[#F4EEE4] flex flex-col xl:items-center xl:justify-center relative xl:ps-0 ps-2'>
          <h1 className='font-[Bellefair] lg:text-[40px] text-[30px] text-[#C5A572]'>Coffee Of The Day</h1>
          <p className='opacity-60 pb-5'>Architecto Mollitia, Asperiores Earum.</p>
          <div className='xl:p-5 p-3 bg-white text-[#C5A572] text-center absolute bottom-0 xl:left-14 left-10 cursor-pointer'>
            <FaChevronRight />
          </div>
          <div className='xl:p-5 p-3 bg-[#C5A572] text-white text-center absolute bottom-0 left-0 cursor-pointer'>
            <FaChevronLeft />
          </div>
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

export default Menu