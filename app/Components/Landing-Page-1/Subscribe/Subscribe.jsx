import Image from "next/image";
import React from "react";

// react icons
import { IoMail } from "react-icons/io5";

// next image
import sbg from "@/public/Travlog assets/Graphic_Elements.png";

const Subscribe = () => {
  return (
    <main className="bg-[#fffcf5] pt-5">
      <div className="container mx-auto px-3 lg:px-0">
        <div className="">
          <div className=" absolute">
            <Image
              src={sbg}
              width={100}
              height={100}
              alt="Picture of the author"
            />
          </div>
          <div className="bg-[#fff8e7] mt-40 pb-32">
            <div className="text-center py-20">
              <h2 className="text-[#F85E9F] uppercase text-sm font-bold tracking-[4px] mb-3">
                subscribe to our newsletter
              </h2>
              <p className="font-extrabold text-3xl md:text-4xl text-gray-800">
                Prepare yourself & let’s explore the beauty of the world
              </p>
            </div>
            <div className="flex justify-center items-center">
              <div className="flex flex-col md:flex-row items-center gap-5">
                <div className="flex items-center">
                  <IoMail className="absolute z-20 ml-5" />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="bg-white outline-none py-5 px-10 rounded-2xl relative z-10"
                  />
                </div>
                <input
                  type="submit"
                  value="Subscribe"
                  className="bg-[#5953c2] px-8 py-4 text-white font-bold rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Subscribe;
