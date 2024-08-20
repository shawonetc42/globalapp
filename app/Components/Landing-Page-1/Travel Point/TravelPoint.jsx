import Image from "next/image";
import React from "react";

// next image
import TravelPointBanner from "@/public/Travlog assets/Group 9238.png";
import Discount from "@/public/Travlog assets/discount 1.png";
import TravelPointIcon from "@/public/Travlog assets/Frame 50.png";

const TravelPoint = () => {
  return (
    <main className="bg-[#fffcf5]">
      <div className="container mx-auto px-3 lg:px-0">
        <div className="flex flex-col md:flex-row justify-between items-center pt-5 md:pt-20">
          <div className="relative">
            <div className="absolute top-16 md:top-32 left-40 md:left-96 z-20">
              <button className="flex items-center bg-white rounded-xl px-3 md:px-5 py-2 md:py-3 shadow-xl  text-base md:text-xl roboto">
                <Image
                  src={Discount}
                  width={30}
                  height={30}
                  alt="discount token"
                />
                Discounted Price
              </button>
            </div>
            <Image
              src={TravelPointBanner}
              width={900}
              height={500}
              alt="beautiful lady"
            />
          </div>

          <div className="flex flex-col justify-center items-center gap-5 mt-10 md:mt-0">
            <div className="flex flex-col items-center gap-5  ">
              <h2 className="text-[#F85E9F] uppercase text-base font-bold roboto tracking-[7px]">
                Travel Point
              </h2>
              <p className="font-extrabold text-2xl md:text-3xl text-center text-black">
                We helping you find your dream location
              </p>
              <p className="text-[#8b8a91] text-sm text-center">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC.
              </p>
            </div>

            <div className="absolute md:ml-96 ml-40 -mt-56 md:-mt-0 z-20">
              <Image
                src={TravelPointIcon}
                width={200}
                height={200}
                alt="travel point icon"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 relative">
              {[
                { title: "500+", description: "Holiday Package" },
                { title: "100", description: "Luxury Hotel" },
                { title: "7", description: "Premium Airlines" },
                { title: "2k+", description: "Happy Customer" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center p-8 border border-[#e8e8e9] rounded-2xl shadow-xl"
                >
                  <h2 className="font-extrabold text-[#FF5722] text-2xl">
                    {item.title}
                  </h2>
                  <p className="text-base roboto mt-3">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TravelPoint;
