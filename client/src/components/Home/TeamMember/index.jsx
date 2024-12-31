import React, { useEffect, useState } from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPlay, FaTwitter } from 'react-icons/fa'
import axios from 'axios'

function TeamMember() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const gallery = async () => {
            try {
                const response = await axios.get(`https://coffe-shop-btr1.onrender.com/api/team`);
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
    }, [data]);

    return (
        <div className="w-[85%] m-auto xl:pt-[60px] pt-[40px] pb-5">
            <div className="sm:flex sm:flex-row flex-col items-center justify-between">
                <div className="sm:w-[40%] w-full">
                    <h1 className="text-[#C5A572] text-[24px]">TEAM MEMBER</h1>
                    <h1 className="font-[Bellefair] md:text-[45px] text-[35px] whitespace-nowrap">Meet Our Team</h1>
                </div>
                <div className="sm:w-[55%] w-full">
                    <p className="opacity-60 md:text-[18px] text-[15px]">
                        Omnis fuga velit temporibus ut unde quas occaecati. Quia dolorem vel similique. Temporibus et tempore. A et eos ducimus recusandae ut.Sunt blanditiis assumenda suscipit.
                    </p>
                </div>
            </div>
            <div className="xxs:flex xxs:flex-row flex-col w-full items-center justify-start mt-5 sm:mt-10 lg:space-x-10 xxs:space-x-3 space-x-0 sm:space-y-0 space-y-3">
                {data && data?.map((item, index) => (
                    <div className="relative w-full sm:block flex  xxs:hidden  group xl:h-[500px] lg:h-[430px] md:h-[350px] sm:h-[250px] h-[400px]" key={index}>
                        <img
                            className="absolute inset-0 w-full h-full object-cover"
                            src={item.image}
                            alt="Team Member"
                        />
                        <div
                            className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-opacity duration-500"
                        ></div>
                        <div
                            className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-1/4 transition-all duration-500 text-center z-10"
                        >
                            <p className="text-[30px] text-[Bellefair] text-white">{item.name}</p>
                            <p className="opacity-60 text-white text-[22px]">{item.expertise}</p>
                            <div className='flex text-white space-x-5 justify-center pt-3'>
                                {item.facebook && <a href={item.facebook} target='_blank'><FaFacebookF /></a>}
                                {item.instagram && <a href={item.instagram} target='_blank'><FaInstagram /></a>}
                                {item.linkedin && <a href={item.linkedin} target='_blank'><FaLinkedinIn /></a>}
                                {item.twitter && <a href={item.twitter} target='_blank'><FaTwitter /></a>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default TeamMember