import Image from "next/image";
import React from "react";

// next image
import Flogo from "@/public/Travlog assets/Frame 1.png";

// react icons
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <main className="bg-[#fffcf5]">
      <div className="container mx-auto px-3 lg:px-0">
        <div>
          <footer className="w-full text-slate-500">
            <div className="border-t border-slate-200 bg-slate-100 pt-16 pb-12 text-sm">
              <div className="container mx-auto px-6">
                <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
                  <div className="col-span-4 md:col-span-8 lg:col-span-4 flex flex-col justify-start items-center gap-5">
                    <Image
                      src={Flogo}
                      width={150}
                      height={150}
                      alt="Picture of the author"
                      className="ml-2"
                    />
                    <p className="text-[#8c8b92] text-sm text-center">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC.
                    </p>
                    <div className="flex items-center justify-center gap-3 mt-3">
                      <button className="bg-[#5D50C6] text-base p-2 rounded-full">
                        <FaFacebookF className="text-white" />
                      </button>
                      <button className="bg-[#5D50C6] text-base p-2 rounded-full">
                        <FaTwitter className="text-white" />
                      </button>
                      <button className="bg-[#5D50C6] text-base p-2 rounded-full">
                        <FaInstagram className="text-white" />
                      </button>
                    </div>
                  </div>
                  <nav className="col-span-2 md:col-span-4 lg:col-span-2 flex flex-col gap-3">
                    <h2 className="text-base font-bold text-[#000]">Company</h2>
                    <p className="text-sm text-[#53525c]">About</p>
                    <p className="text-sm text-[#53525c]">Career</p>
                    <p className="text-sm text-[#53525c]">Mobile</p>
                  </nav>
                  <nav className="col-span-2 md:col-span-4 lg:col-span-2 flex flex-col gap-3">
                    <h2 className="text-base font-bold text-[#000]">Contact</h2>
                    <p className="text-sm text-[#53525c]">Why Travlog?</p>
                    <p className="text-sm text-[#53525c]">Partner with us</p>
                    <p className="text-sm text-[#53525c]">FAQ’s</p>
                    <p className="text-sm text-[#53525c]">Blog</p>
                  </nav>
                  <nav className="col-span-2 md:col-span-4 lg:col-span-2 flex flex-col gap-3">
                    <h2 className="text-base font-bold text-[#000]">Meet Us</h2>
                    <p className="text-sm text-[#53525c]">+00 92 1234 56789</p>
                    <p className="text-sm text-[#53525c]">info@travlog.com</p>
                    <p className="text-sm text-[#53525c]">
                      205. R Street, New York
                    </p>
                    <p className="text-sm text-[#53525c]">BD23200</p>
                  </nav>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
};

export default Footer;
