import Image from "next/image";
import React from "react";

export default function RightService() {
  return (
    <div
      id="get-started"
      className="flex flex-wrap gap-5 container mx-auto px-3 justify-center items-center self-stretch p-20 bg-slate-100 max-md:px-5 "
    >
      <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] text-slate-900 max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="w-full text-6xl font-extrabold leading-[62px] max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
            Start now and get the best services
          </div>
          <div className="mt-6 text-lg leading-7 max-md:max-w-full">
            Ac urna elementum purus vulputate tincidunt. Quam maecenas feugiat
            congue orci, eget tellus pellentesque aliquet. Felis fringilla morbi
            dui ac consequat risus pharetra odio pulvinar. Id pellentesque in
            tortor nec nulla cras sapien. Adipiscing nisi tellus quisque aliquet
            sit risus elementum scelerisque.
          </div>
          <div className="flex gap-4 items-center self-start mt-6 text-2xl font-bold tracking-wide leading-none text-black">
            <div className="flex justify-center items-center self-stretch px-6 py-5 my-auto bg-yellow-500 rounded-lg max-md:px-5">
              <div className="self-stretch px-6 my-auto max-md:px-5">
                Get Started
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 shrink gap-2.5 justify-center items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
        <Image
          loading="lazy"
          src="/details.png"
          width={560}
          height={560}
          alt="Background"
          className="object-contain self-stretch my-auto aspect-[0.89] min-w-[240px] w-[560px]"
        />
      </div>
    </div>
  );
}
