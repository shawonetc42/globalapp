"use client";
import { useRef } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import bg1 from "@/public/Travlog assets/Layer_1.png";
import T1 from "@/public/Travlog assets/Ellipse 22.png";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";

const Testimonial = () => {
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

  return (
    <main className="bg-[#fffcf5]">
      <div className="container mx-auto px-3 lg:px-0 pt-[30em] md:pt-40">
        <section className="bg-[#fffcf5] relative">
          <div className="absolute top-0 left-0 right-0 z-10 mt-28 md:-mt-40">
            <Image
              src={bg1}
              alt="Background"
              layout="responsive"
              objectFit="cover"
              quality={100}
            />
          </div>
          <div className="container mx-auto px-4 relative z-20">
            <div className="text-center py-20">
              <h2 className="text-[#F85E9F] uppercase text-sm font-bold tracking-[4px] mb-3">
                Testimonials
              </h2>
              <p className="font-extrabold text-3xl md:text-4xl text-gray-800">
                What Our Clients Say
              </p>
            </div>

            <div className="relative -mt-20 md:-mt-0">
              <Swiper
                ref={swiperRef}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                loop={true}
                className="w-full relative z-20"
              >
                {[...Array(3)].map((_, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex flex-col justify-center items-center gap-5 relative z-30 mt-10 md:mt-36">
                      <Image
                        src={T1}
                        alt="Testimonial author"
                        width={60}
                        height={60}
                        className="relative z-30"
                      />
                      <div className="flex items-center gap-1">
                        <span className="text-[#ff562f] font-bold text-xl">
                          Mark Smith
                        </span>
                        <span className="text-[#53525c] font-bold text-xl">
                          / Travel Enthusiast
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-[#FACD49] text-base">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>
                      <p className="text-[#53525c] text-sm md:max-w-2xl text-center leading-6 md:leading-8">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC.
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 flex justify-between px-4 md:px-10 mt-8">
                <button
                  onClick={handlePrevClick}
                  className="w-12 h-12 md:w-16 md:h-16 bg-white hover:bg-[#5D50C6] flex items-center justify-center rounded-full shadow-xl transition-colors duration-300 group cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <FaArrowLeft className="text-[#5D50C6] group-hover:text-white text-base md:text-lg" />
                </button>
                <button
                  onClick={handleNextClick}
                  className="w-12 h-12 md:w-16 md:h-16 bg-[#5D50C6] hover:bg-white flex items-center justify-center rounded-full shadow-xl transition-colors duration-300 group cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <FaArrowRight className="text-white group-hover:text-[#5D50C6] text-base md:text-lg" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Testimonial;
