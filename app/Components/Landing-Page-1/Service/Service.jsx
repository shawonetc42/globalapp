"use client";
import Image from "next/image";

// swiper js
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules"; // Import Pagination here

// next images
import destination1 from "@/public/Travlog assets/destination 1.png";
import destination2 from "@/public/Travlog assets/booking 1.png";

const Service = () => {
  return (
    <main className="bg-[#FFFCF5] py-10">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          <div className="flex flex-col gap-5 w-full lg:w-1/3 text-center lg:text-left mb-10">
            <h2 className="text-[#F85E9F] uppercase text-base font-bold roboto tracking-[7px]">
              Services
            </h2>
            <p className="font-extrabold text-2xl md:text-3xl text-black">
              Our Top Value Categories for You
            </p>
          </div>
          <div className="w-full lg:w-2/3">
            <Swiper
              slidesPerView="auto"
              spaceBetween={20}
              centeredSlides={false}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Pagination, Autoplay]} // Include Pagination in the modules array
              className="pb-12"
            >
              {[
                { title: "Best Tour Guide", image: destination1 },
                { title: "Easy Booking", image: destination2 },
                { title: "Weather Forecast", image: destination1 },
                { title: "Easy Booking", image: destination2 },
              ].map((slide, index) => (
                <SwiperSlide
                  key={index}
                  className="!w-[280px] bg-white shadow-xl py-10 px-6 rounded-xl mb-10"
                >
                  <div className="flex flex-col items-center">
                    <Image
                      src={slide.image}
                      width={50}
                      height={50}
                      alt={slide.title}
                    />
                    <h2 className="font-bold text-base my-5">{slide.title}</h2>
                    <p className="text-sm text-[#191825] text-center">
                      {index === 1
                        ? "Square, was moving across the sand in their direction."
                        : "What looks like a small patch of purple glass, above five feet."}
                    </p>
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

export default Service;
