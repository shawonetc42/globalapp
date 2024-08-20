import React from "react";
import Image from "next/image";

// next images
import KeyFeature1 from "@/public/Travlog assets/Group 9239.png";
import KeyFeature2 from "@/public/Travlog assets/Group 9239 (1).png";
import KeyFeature3 from "@/public/Travlog assets/Group 9239 (2).png";
import bg from "@/public/Travlog assets/BACKGROUND.png";
import album1 from "@/public/Travlog assets/Rectangle 9.png";
import album2 from "@/public/Travlog assets/Rectangle 10.png";
import map1 from "@/public/Travlog assets/map.11 1.png";

const KeyFeature = () => {
  return (
    <main className="bg-[#fffcf5]">
      <div className="container mx-auto px-3 lg:px-0">
        <div className=" flex flex-col md:flex-row md:gap-60">
          <div className="pt-20">
            <div className="flex flex-col  gap-5 justify-center md:justify-start items-center md:items-start md:mx-8 mb-10">
              <h2 className="text-[#F85E9F] uppercase text-base font-bold roboto tracking-[7px]">
                Key features
              </h2>
              <p className="font-extrabold text-2xl md:text-3xl text-black">
                We offer best services
              </p>
              <p className="text-sm text-[#8c8b92]">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-5 border border-[#e8e8e9] p-5 rounded-2xl shadow-xl">
                <Image
                  src={KeyFeature1}
                  width={70}
                  height={70}
                  alt="Picture of the author"
                />
                <div className="flex flex-col gap-1">
                  <h2 className="font-bold text-xl">We offer best services</h2>
                  <p className="text-sm text-[#8c8b92]">
                    Lorem Ipsum is not simply random text
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-5 border border-[#e8e8e9] p-5 rounded-2xl shadow-xl">
                <Image
                  src={KeyFeature2}
                  width={70}
                  height={70}
                  alt="Picture of the author"
                />
                <div className="flex flex-col gap-1">
                  <h2 className="font-bold text-xl">Schedule your trip</h2>
                  <p className="text-sm text-[#8c8b92]">
                    It has roots in a piece of classical
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-5 border border-[#e8e8e9] p-5 rounded-2xl shadow-xl">
                <Image
                  src={KeyFeature3}
                  width={70}
                  height={70}
                  alt="Picture of the author"
                />
                <div className="flex flex-col gap-1">
                  <h2 className="font-bold text-xl">We offer best services</h2>
                  <p className="text-sm text-[#8c8b92]">
                    Lorem Ipsum is not simply random text
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="absolute z-10 mt-40 md:mt-40 md:ml-10">
              <button className="flex items-center gap-1 bg-white shadow-xl px-5 py-3 rounded-2xl text-base roboto">
                <Image
                  src={map1}
                  width={20}
                  height={20}
                  alt="Picture of the author"
                />
                Paradise on Earth
              </button>
            </div>
            <div className="relative mt-20">
              <Image
                src={bg}
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>
            <div className="absolute -mt-40 md:-ml-52">
              <Image
                src={album1}
                width={400}
                height={400}
                alt="Picture of the author"
              />
            </div>
            <div className="absolute ml-5">
              <Image
                src={album2}
                width={400}
                height={400}
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default KeyFeature;
