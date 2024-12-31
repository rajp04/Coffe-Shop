import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OurServiceImg from "../../../assets/ourserviceimg.png";
import axios from 'axios'

const Service = () => {

    const [data, setData] = useState()

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
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
        <div
            className="pb-36"
            style={{
                backgroundImage: `url(${OurServiceImg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        >
            <div className="w-[85%] m-auto flex items-center flex-col">
                <h1 className="text-[#C5A572] text-[22px] pt-[135px]">OUR SERVICES</h1>
                <h1 className="text-[#ffffff] text-[60px] md:text-[40px] text-center font-[Bellefair]">
                    We Hold Events
                </h1>

                <div className="w-full">
                    <Slider {...settings}>
                        {data && data?.map((item) => (
                            <div className="pt-[85px] px-5" key={item._id}>
                                <div className="border-[1px] border-[#C5A572] w-auto h-auto text-center p-5 relative m-auto" >
                                    <div className="flex items-center justify-center">
                                        <div className="absolute -top-16 bg-[#2D3232] p-5 rounded-full">
                                            <img
                                                src={item.subImage}
                                                alt="Holidayparies"
                                                className="h-[60px] w-[60px]"
                                            />
                                        </div>
                                    </div>
                                    <h1 className="text-[#C5A572] text-[35px] font-[Bellefair] pt-5">
                                        {item.name}
                                    </h1>
                                    <p className="opacity-60 text-white text-[19px]">
                                        {item.description.length > 280 ? `${item.description.slice(0, 280)}...` : item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Service;
