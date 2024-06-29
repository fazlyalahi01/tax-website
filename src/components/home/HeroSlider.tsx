'use client'
import Image from 'next/image';
import React from 'react';
import Slider from "react-slick";

const HeroSlider: React.FC = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false
    };
    return (
        <div>
            <Slider {...settings}>
                <Image src={"/images/hero_slider_1.jpg"} height={600} width={1200} alt='hero slider 1' />
                <Image src={"/images/hero_slider_2.jpg"} height={600} width={1200} alt='hero slider 2' />
                <Image src={"/images/hero_slider_3.jpg"} height={600} width={1200} alt='hero slider 3' />
            </Slider>
        </div>
    );
};

export default HeroSlider;