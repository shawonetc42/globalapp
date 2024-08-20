"use client";
import React, { useRef } from "react";
import Image from "next/image";

// swiper js
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

// react icons
import { FaStar } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// next image
import DestinationImage1 from "@/public/Travlog assets/Rectangle 6.png";
import DestinationImage2 from "@/public/Travlog assets/Rectangle 6 (1).png";
import DestinationImage3 from "@/public/Travlog assets/Rectangle 6 (2).png";

const Destination = () => {
  const swiperRef = useRef(null);

  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const destinations = [
    {
      image: DestinationImage1,
      title: "Paradise Beach, Bantayan Island",
      price: "$550.16",
      location: "Rome, Italy",
      rating: "4.8",
    },
    {
      image: DestinationImage2,
      title: "Ocean with full of Colors",
      price: "$20.99",
      location: "Maldives",
      rating: "4.5",
    },
    {
      image: DestinationImage3,
      title: "Mountain View, Above the cloud",
      price: "$150.99",
      location: "United Arab Emirates",
      rating: "5.0",
    },
    {
      image: DestinationImage2,
      title: "Another Destination",
      price: "$299.99",
      location: "Some Location",
      rating: "4.7",
    },
  ];

  return (
    <main className="bg-[#fffcf5]">
      <div className="container mx-auto px-3 lg:px-0">
        <div className="">
          <div className="flex flex-col md:flex-row justify-center md:justify-between">
            <div className="flex flex-col  gap-5 justify-center md:justify-start items-center md:items-start md:mx-8 mb-10">
              <h2 className="text-[#F85E9F] uppercase text-base font-bold roboto tracking-[7px]">
                Top Destination
              </h2>
              <p className="font-extrabold text-2xl md:text-3xl text-black">
                Explore top destinations
              </p>
            </div>
            <div className="flex justify-between gap-5 mb-5 md:mb-0">
              <button
                onClick={handlePrevClick}
                className="text-[#5D50C6] text-base cursor-pointer border border-gray-400 h-16 w-16 rounded-full flex items-center justify-center "
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={handleNextClick}
                className="text-[#fff] text-xl cursor-pointer bg-[#5D50C6] h-16 w-16 rounded-full flex items-center justify-center"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>

          {/* slider */}
          <div className="">
            <Swiper
              ref={swiperRef}
              slidesPerView={1}
              spaceBetween={20}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Navigation]}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
            >
              {destinations.map((destination, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white rounded-lg shadow-xl overflow-hidden p-4 mx-auto max-w-[300px] md:max-w-[350px] lg:max-w-[400px] mb-10">
                    <Image
                      src={destination.image}
                      alt="Destination"
                      layout="responsive"
                      width={300}
                      height={500}
                      className="object-cover"
                    />
                    <div className="flex flex-col gap-2 mb-4">
                      <div className="flex justify-between items-center my-5">
                        <h2 className="text-lg font-bold">
                          {destination.title}
                        </h2>
                        <h2 className="text-[#F85E9F] font-bold text-base">
                          {destination.price}
                        </h2>
                      </div>
                      <p className="text-[#191825] text-sm">
                        {destination.location}
                      </p>
                      <div className="flex items-center gap-2">
                        <h2 className="text-[#FF5722] font-bold">
                          {destination.rating}
                        </h2>
                        <FaStar className="text-[#FF5722]" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Destination;
