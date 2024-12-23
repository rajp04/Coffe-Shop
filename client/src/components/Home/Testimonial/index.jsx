import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import Testimonialbg from '../../../assets/testimonialbg.png';
import Quote from '../../../assets/quote.svg';
import axios from 'axios'
function Testimonial() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const testimonial = async () => {
            try {
                const response = await axios.get(`http://localhost:1101/api/testimonial`);
                if (response.data.success === 1) {
                    setData(response.data.result);
                } else {
                    console.log(response.data.message);
                }
            } catch (error) {
                console.log(error.message);
            }
        };
        testimonial();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2, slidesToScroll: 1 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1, slidesToScroll: 1 },
            },
        ],
    };

    return (
        <div
            className="pb-36 mt-10"
            style={{ backgroundImage: `url(${Testimonialbg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
        >
            <div className="w-[85%] m-auto flex items-center flex-col justify-between">
                <h1 className="text-[#C5A572] text-[22px] pt-[135px] uppercase">Testimonial</h1>
                <h1 className="text-[#ffffff] pt-2 text-[60px] font-[Bellefair]">
                    In The Words Of Our Clients
                </h1>

                <div className="w-full pt-[50px] ">
                    <Slider {...settings}>
                        {data && data?.map((item, index) => (
                            <div className="widhth" key={index}>
                                <div className='bg-white p-6'>
                                    <div className="border-[2px] bg-white border-[#C5A572] flex items-center justify-center flex-col p-6">
                                        <img src={Quote} alt="quote" />
                                        <p className="text-center pt-4 pb-3">{item.description.length > 120 ? `${item.description.slice(0, 120)}...` : item.description}</p>
                                        <h1>- {item.name}</h1>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;
