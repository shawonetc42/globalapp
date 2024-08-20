import Image from "next/image";
import React from "react";

export default function Features() {
  return (
    <div
      id="features"
      className="flex flex-col justify-center p-20 max-md:px-5"
    >
      <div className="flex flex-col w-full text-center text-slate-900 max-md:max-w-full">
        <div className="w-full text-6xl font-extrabold leading-none max-md:max-w-full max-md:text-4xl">
          Focus on what matters
        </div>
        <div className="mt-6 text-lg leading-relaxed max-md:max-w-full">
          Eget at purus mauris euismod metus vitae eget. Diam massa venenatis
          pellentesque facilisis nunc, varius.
        </div>
      </div>
      <div className="flex flex-wrap items-center mt-20 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-1 shrink gap-2.5 justify-center items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
          <Image
            loading="lazy"
            src="/mobi2.png"
            width={400}
            height={500}
            alt="Background"
            className="object-contain self-stretch my-auto aspect-[0.83] w-[40%] h-[500px]"
          />
        </div>
        <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] text-slate-900 max-md:max-w-full">
          <div className="flex flex-col py-2 pl-12 w-full max-md:pl-5 max-md:max-w-full">
            <div className="w-full text-xl font-medium leading-none max-md:max-w-full">
              Bibendum gravida dolor egestas aliquam
            </div>
            <div className="mt-6 text-lg leading-7 max-md:max-w-full">
              Egestas tincidunt hendrerit nibh platea sit vivamus aenean rhoncus
              etiam. Tristique amet, sed ac ac dolor habitant. Mauris duis neque
              molestie venenatis nibh hendrerit pharetra. Tortor suscipit leo
              sit tellus ac scelerisque gravida sem.
            </div>
          </div>
          <div className="flex flex-col justify-center py-2 pl-12 mt-6 w-full text-xl font-medium leading-none max-md:pl-5 max-md:max-w-full">
            <div className="w-full max-md:max-w-full">Egestas lorem eget</div>
          </div>
          <div className="flex flex-col justify-center py-2 pl-12 mt-6 w-full text-xl font-medium leading-none max-md:pl-5 max-md:max-w-full">
            <div className="w-full max-md:max-w-full">
              Tellus eget feugiat sit
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex justify-center items-center self-center px-6 py-5 mt-20 text-2xl font-bold tracking-wide 
      leading-none text-black bg-yellow-500 rounded-lg max-md:px-5 max-md:mt-10"
      >
        <div className="self-stretch px-6 my-auto max-md:px-5">Get Started</div>
      </div>
    </div>
  );
}
