import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OurServiceImg from "../../../assets/ourserviceimg.png";
import Holidayparies from "../../../assets/holidayparies.svg";
import Birthday from "../../../assets/birthday.svg";
import Anniversaries from "../../../assets/anniversaries.svg";

const Service = () => {
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
                        <div className="pt-[85px] px-5">
                            <div className="border-[1px] border-[#C5A572] w-auto h-auto text-center p-5 relative m-auto">
                                <div className="flex items-center justify-center">
                                    <img
                                        src={Holidayparies}
                                        alt="Holidayparies"
                                        className="absolute -top-16"
                                    />
                                </div>
                                <h1 className="text-[#C5A572] text-[35px] font-[Bellefair] pt-5">
                                    Holiday Parties
                                </h1>
                                <p className="opacity-60 text-white text-[19px]">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Sequi nihil aliquid nam alias ea. Magni adipisci ad unde, cum
                                    quia non temporibus voluptas quod, quis quae voluptatibus
                                    impedit reprehenderit quibusdam.
                                </p>
                            </div>
                        </div>
                        <div className="pt-[85px] px-5">
                            <div className="border-[1px] border-[#C5A572] w-auto h-auto text-center p-5 relative m-auto">
                            <div className="flex items-center justify-center">
                                <img
                                    src={Birthday}
                                    alt="Birthday"
                                    className="absolute -top-16"
                                />
                                </div>
                                <h1 className="text-[#C5A572] text-[35px] font-[Bellefair] pt-5">
                                    Birthday Parties
                                </h1>
                                <p className="opacity-60 text-white text-[19px]">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Sequi nihil aliquid nam alias ea. Magni adipisci ad unde, cum
                                    quia non temporibus voluptas quod, quis quae voluptatibus
                                    impedit reprehenderit quibusdam.
                                </p>
                            </div>
                        </div>
                        <div className="pt-[85px] px-5">
                            <div className="border-[1px] border-[#C5A572] w-auto h-auto text-center p-5 relative m-auto">
                            <div className="flex items-center justify-center">
                                <img
                                    src={Anniversaries}
                                    alt="Anniversaries"
                                    className="absolute -top-16 "
                                    />
                                    </div>
                                <h1 className="text-[#C5A572] xl:text-[35px] text-[30px] font-[Bellefair] pt-5">
                                    Anniversaries Parties
                                </h1>
                                <p className="opacity-60 text-white text-[19px]">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Sequi nihil aliquid nam alias ea. Magni adipisci ad unde, cum
                                    quia non temporibus voluptas quod, quis quae voluptatibus
                                    impedit reprehenderit quibusdam.
                                </p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Service;
