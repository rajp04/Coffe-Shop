import React from 'react'
import G4 from '../../../assets/g4.png'
import G3 from '../../../assets/G3.png'
import G2 from '../../../assets/G2.png'
import G1 from '../../../assets/G1.png'

function Gallery() {
    return (
        <div className='w-[90%] m-auto xs:py-10 py-5 flex flex-col items-center justify-center'>
            <h1 className='text-[24px] text-[#C5A572] uppercase'>take a tour</h1>
            <h1 className='text-[#121D27] xs:text-[45px] text-[30px] font-[Bellefair] text-center'>Our Restaurant Gallery</h1>
            <div className='grid grid-cols-4 gap-10 md:pt-14 xs:pt-10 pt-6'>
                <img src={G4} alt="G4" className='lg:col-span-1 xs:col-span-2 col-span-4' />
                <img src={G3} alt="G3" className='lg:col-span-1 xs:col-span-2 col-span-4' />
                <img src={G2} alt="G2" className='lg:col-span-1 xs:col-span-2 col-span-4' />
                <img src={G1} alt="G1" className='lg:col-span-1 xs:col-span-2 col-span-4' />
            </div>
        </div>
    )
}

export default Gallery