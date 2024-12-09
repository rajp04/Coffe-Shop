import React from 'react'
import Header from '../Header'
import Banner from '../../assets/footerbg.png'
import Footer from '../Footer'
import G1 from '../../assets/gallery/g1.png'
import G2 from '../../assets/gallery/g2.png'
import G3 from '../../assets/gallery/g3.png'
import G4 from '../../assets/gallery/g4.png'
import G5 from '../../assets/gallery/g5.png'
import G6 from '../../assets/gallery/g6.png'
import G7 from '../../assets/gallery/g7.png'
import G8 from '../../assets/gallery/g8.png'
import G9 from '../../assets/gallery/g9.png'
import G10 from '../../assets/gallery/g10.png'
import G11 from '../../assets/gallery/g11.png'
import G12 from '../../assets/gallery/g13.png'

function Gallery() {
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
                    <div className='md:col-span-1 xs:col-span-2 col-span-4 bg-[#F4EEE4]'>
                        <img src={G1} alt="G1" />
                        <h1 className='font-[Bellefair] lg:text-[30px] text-[25px] lg:p-4 p-3 text-[#121D27]'>Grilled Roast Meat</h1>
                    </div>
                    <div className='md:col-span-1 xs:col-span-2 col-span-4 bg-[#F4EEE4]'>
                        <img src={G2} alt="G2" />
                        <h1 className='font-[Bellefair] lg:text-[30px] text-[25px] lg:p-4 p-3 text-[#121D27]'>Ginger Chicken Kabob</h1>
                    </div>
                    <div className='md:col-span-1 xs:col-span-2 col-span-4 bg-[#F4EEE4]'>
                        <img src={G3} alt="G3" />
                        <h1 className='font-[Bellefair] lg:text-[30px] text-[25px] lg:p-4 p-3 text-[#121D27]'>Tandoori Fish</h1>
                    </div>
                    <div className='md:col-span-1 xs:col-span-2 col-span-4 bg-[#F4EEE4]'>
                        <img src={G4} alt="G4" />
                        <h1 className='font-[Bellefair] lg:text-[30px] text-[25px] lg:p-4 p-3 text-[#121D27]'>Night Life</h1>
                    </div>
                    <div className='md:col-span-1 xs:col-span-2 col-span-4 bg-[#F4EEE4]'>
                        <img src={G5} alt="G5" />
                        <h1 className='font-[Bellefair] lg:text-[30px] text-[25px] lg:p-4 p-3 text-[#121D27]'>Events Images</h1>
                    </div>
                    <div className='md:col-span-1 xs:col-span-2 col-span-4 bg-[#F4EEE4]'>
                        <img src={G6} alt="G6" />
                        <h1 className='font-[Bellefair] lg:text-[30px] text-[25px] lg:p-4 p-3 text-[#121D27]'>Indoors</h1>
                    </div>
                    <div className='md:col-span-1 xs:col-span-2 col-span-4 bg-[#F4EEE4]'>
                        <img src={G7} alt="G7" />
                        <h1 className='font-[Bellefair] lg:text-[30px] text-[25px] lg:p-4 p-3 text-[#121D27]'>Grilled Potato Pizza</h1>
                    </div>
                    <div className='md:col-span-1 xs:col-span-2 col-span-4 bg-[#F4EEE4]'>
                        <img src={G8} alt="G8" />
                        <h1 className='font-[Bellefair] lg:text-[30px] text-[25px] lg:p-4 p-3 text-[#121D27]'>Mexican Cheese Burger</h1>
                    </div>
                    <div className='md:col-span-1 xs:col-span-2 col-span-4 bg-[#F4EEE4]'>
                        <img src={G9} alt="G9" />
                        <h1 className='font-[Bellefair] lg:text-[30px] text-[25px] lg:p-4 p-3 text-[#121D27]'>Raspberry Cupcake Dessert</h1>
                    </div>
                    <div className='md:col-span-1 xs:col-span-2 col-span-4 bg-[#F4EEE4]'>
                        <img src={G10} alt="G10" />
                        <h1 className='font-[Bellefair] lg:text-[30px] text-[25px] lg:p-4 p-3 text-[#121D27]'>little India Cosmo</h1>
                    </div>
                    <div className='md:col-span-1 xs:col-span-2 col-span-4 bg-[#F4EEE4]'>
                        <img src={G11} alt="G8" />
                        <h1 className='font-[Bellefair] lg:text-[30px] text-[25px] lg:p-4 p-3 text-[#121D27]'>American Grilled Chiken</h1>
                    </div>
                    <div className='md:col-span-1 xs:col-span-2 col-span-4 bg-[#F4EEE4]'>
                        <img src={G12} alt="G8" />
                        <h1 className='font-[Bellefair] lg:text-[30px] text-[25px] lg:p-4 p-3 text-[#121D27]'>Mexican Cheese Roll</h1>
                    </div>
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