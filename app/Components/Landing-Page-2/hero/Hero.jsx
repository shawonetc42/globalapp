"use client";
import Image from "next/image";
import { motion } from "framer-motion"; // Framer Motion import

// react icons
import { FaPlayCircle } from "react-icons/fa";

// next image
import work1 from "@/public/Travlog assets/work 1.png";
import work2 from "@/public/mobi.png";

const Hero = () => {
  return (
    <main className="bg-[#FFFCF5] mt-0 md:mt-12">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-5">
          <div className="w-full md:w-1/2 lg:w-[45%] xl:w-[40%] ">
            <button className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-lg">
              <h2 className="text-[#5e6df7] text-sm sm:text-base font-bold">
                Explore the app world!
              </h2>

              <Image src={work1} width={20} height={20} alt="Explore icon" />
            </button>

            <section className="flex flex-col w-full max-md:max-w-full">
              <h1 className="w-full text-7xl font-extrabold leading-[79px] text-slate-900 max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
                Building apps just got easier
              </h1>
              <p className="mt-6 text-lg leading-7 text-slate-900 max-md:max-w-full">
                Our platform offers a user-friendly interface with drag-and-drop
                features, pre-built templates, and customizable options, making
                it accessible to everyone, regardless of coding experience. From
                concept to deployment, our step-by-step guides and expert
                support ensure a smooth development process.
              </p>
            </section>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
              <button className="w-full sm:w-auto bg-yellow-500 text-black text-sm sm:text-base px-5 py-3 rounded-full flex items-center justify-center gap-2 border ">
                <div className="text-[#5D50C6]" />
                Get Started
              </button>
              <button className="w-full sm:w-auto bg-white text-[#FBBC05] text-sm sm:text-base px-5 py-3 rounded-full flex items-center justify-center gap-2 border shadow-lg">
                <FaPlayCircle className="text-[#8FBBC05]" />
                Watch Video
              </button>
            </div>
          </div>
          <div className="mt-5 md:mt-10">
            <motion.div
              animate={{
                x: [0, 10, 0], // হালকা নড়াচড়ার জন্য X-axis এ পরিবর্তন
              }}
              transition={{
                duration: 1, // একটি সম্পূর্ণ চক্রের সময়
                repeat: Infinity, // এনিমেশনটি অসীমবার রিপিট হবে
                repeatType: "loop", // লুপ করার টাইপ
              }}
            >
              <Image
                src={work2}
                width={400}
                height={400}
                alt="Travel illustration"
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>

        {/* hero bottom */}
      </div>
    </main>
  );
};

export default Hero;
