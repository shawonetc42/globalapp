import Image from "next/image";

//  react fast marquee
import Marquee from "react-fast-marquee";

// react icons
import { FaPlayCircle } from "react-icons/fa";

// next image
import work1 from "@/public/Travlog assets/work 1.png";
import work2 from "@/public/Travlog assets/Group 1.png";
import object from "@/public/Travlog assets/OBJECTS.png";
import marque1 from "@/public/Travlog assets/Group.png";
import marque2 from "@/public/Travlog assets/Group 2.png";
import marque3 from "@/public/Travlog assets/Group (1).png";
import marque4 from "@/public/Travlog assets/Group 9235.png";
import marque5 from "@/public/Travlog assets/Group 3.png";

const Hero = () => {
  return (
    <main className="bg-[#FFFCF5]">
      <div className="container mx-auto  px-4 sm:px-6 lg:px-8 pt-28 md:pt-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-5">
          <div className="w-full md:w-1/2 lg:w-[45%] xl:w-[40%] ">
            <button className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-lg">
              <h2 className="text-[#F75E9F] text-sm sm:text-base font-bold">
                Explore the world!
              </h2>
              <Image src={work1} width={20} height={20} alt="Explore icon" />
            </button>
            <div className="my-6 sm:my-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Travel <span className="text-[#F75E9F]">top destination</span>{" "}
                of the world
              </h1>
              <p className="text-[#191825] text-sm sm:text-base mt-4">
                We always make our customer happy by providing as many choices
                as possible
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
              <button className="w-full sm:w-auto bg-[#5D50C6] uppercase text-white text-sm sm:text-base px-5 py-3 rounded-full shadow-lg">
                Get Started
              </button>
              <button className="w-full sm:w-auto bg-white text-black text-sm sm:text-base px-5 py-3 rounded-full flex items-center justify-center gap-2 border border-[#5D50C6] shadow-lg">
                <FaPlayCircle className="text-[#5D50C6]" />
                Watch Demo
              </button>
            </div>
          </div>
          <div className=" mt-5 md:mt-10">
            <Image
              src={work2}
              width={400}
              height={400}
              alt="Travel illustration"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* hero bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 py-10 sm:py-20">
          <div className="hidden sm:block sm:-mt-20">
            <Image
              src={object}
              width={80}
              height={70}
              alt="Decorative object"
            />
          </div>
          <div className="w-full sm:w-auto sm:flex-grow">
            <Marquee className="flex items-center gap-5">
              {[
                marque1,
                marque2,
                marque3,
                marque4,
                marque5,
                marque2,
                marque4,
              ].map((src, index) => (
                <div key={index} className={index % 2 === 0 ? "mx-4" : ""}>
                  <Image
                    src={src}
                    width={150}
                    height={50}
                    alt={`Partner logo ${index + 1}`}
                    className="h-8 sm:h-10 w-auto"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
