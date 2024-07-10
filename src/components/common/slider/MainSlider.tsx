"use client";
import SliderItem from "@/components/home/SliderItem";
import React from "react";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type TSliderProps = {
  children?: React.ReactNode;
};

SwiperCore.use([Autoplay, Pagination, Navigation]);

const MainSlider: React.FC<TSliderProps> = ({ children }) => {
  return (
    <Swiper
      effect="fade"
      fadeEffect={{ crossFade: true }}
      slidesPerView={1}
      spaceBetween={0}
      centeredSlides={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation={true}
      speed={1000}
      loop={true}
    >
      <SwiperSlide>
        <section
          className={`relative flex bg-[url('/images/new_york_city_1.jpg')] bg-cover bg-no-repeat bg-center md:pb-20 pb-8 `}
        >
          <SliderItem
            title="Expert Tax Preparation Services"
            heading="Tax Consultant"
            description="Get the most out of your tax return with our expert tax preparation services. Our experienced professionals ensure accuracy and maximize your refund. Let us handle the paperwork while you enjoy peace of mind."
          />
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section
          className={`relative flex bg-[url("/images/new_york_city_2.jpg")] bg-cover bg-no-repeat bg-center md:pb-20 pb-8`}
        >
          <SliderItem
            title="Comprehensive Accounting Solutions"
            heading="Accounting Consultant"
            description="From bookkeeping to financial analysis, we offer comprehensive accounting solutions tailored to your business needs. Our team of certified accountants helps you stay on top of your finances and make informed decisions."
          />
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section
          className={`relative flex bg-[url('/images/new_york_city_3.jpg')] bg-cover bg-no-repeat bg-center md:pb-20 pb-8`}
        >
          <SliderItem
            title="Provide the real estate services"
            heading="Real Estate Consultant"
            description="We provide the best real estate services in the city. Our team of experienced real estate professionals ensures that your property is in good hands. Contact us today to get started."
          />
        </section>
      </SwiperSlide>
    </Swiper>
  );
};

export default MainSlider;
