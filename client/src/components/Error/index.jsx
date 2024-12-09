import React from 'react'
import Header from '../Header'
import { FaArrowRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import ErrorImg from '../../assets/404.png'

function Error() {

    const navigate = useNavigate();

    return (
        <div>
            <div className='h-screen w-[100%] overflow-hidden font-[Montserrat] text-[24px] bg-[#121D27]'>

                {/* Header Season */}
                <Header />

                {/* Banner Season */}
                <div className='flex flex-col items-center justify-center h-[80%] text-white'>
                    {/* <h1 className='text-[#A88E63] xl:text-[270px] xs:text-[200px] xxs:text-[150px] text-[120px] font-semibold'>404</h1> */}
                    <img src={ErrorImg} alt="errorImg" />
                    <h1 className='text-[35px] md:pt-0 pt-10'>Whoops....</h1>
                    <p className='opacity-70 text-center px-5'>We can't seem to find the page you are looking for</p>
                    <div className='flex items-center justify-center space-x-5 pt-5 cursor-pointer' onClick={() => navigate('/')}>
                        <FaArrowRight />
                        <h1 className='font-[Bellefair] xxs:text-[35px] text-[25px]'>Back to Home page</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error