import Image from "next/image";
import React from "react";

export default function Service() {
  return (
    <div
      id="about"
      className="flex flex-col justify-center p-20 text-slate-900 max-md:px-5"
    >
      <div className="flex flex-col w-full text-center max-md:max-w-full">
        <div className="w-full text-6xl font-extrabold leading-none max-md:max-w-full max-md:text-4xl">
          All the essential tools
        </div>
        <div className="mt-6 text-lg leading-relaxed max-md:max-w-full">
          Odio vulputate cras vel lacinia turpis volutpat adipiscing.
          Sollicitudin at velit, blandit tempus nunc in.
        </div>
      </div>
      <div className="flex flex-wrap items-center mt-20 w-full max-md:mt-10 max-md:max-w-full">
        <Image
          loading="lazy"
          src="/home.png"
          width={200}
          height={500}
          alt="Background"
          className="object-contain flex-1 shrink self-stretch w-[20%] h-[500px]
          my-auto  aspect-[1.02] basis-0  max-md:max-w-full"
        />
        <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col py-2 pl-12 w-full max-md:pl-5 max-md:max-w-full">
            <div className="w-full text-xl font-medium leading-none max-md:max-w-full">
              Sem augue tempus
            </div>
            <div className="mt-6 text-lg leading-7 max-md:max-w-full">
              Venenatis blandit habitasse nunc, sapien enim elit in. Arcu,
              pharetra, et cursus sit senectus in blandit. Aliquet enim
              fermentum non semper nibh ut neque. Pellentesque ut tincidunt
              vitae arcu bibendum malesuada lorem sapien volutpat.
            </div>
          </div>
          <div className="flex flex-col justify-center py-2 pl-12 mt-6 w-full text-xl font-medium leading-none max-md:pl-5 max-md:max-w-full">
            <div className="w-full max-md:max-w-full">
              Habitant integer interdum a
            </div>
          </div>
          <div className="flex flex-col justify-center py-2 pl-12 mt-6 w-full text-xl font-medium leading-none max-md:pl-5 max-md:max-w-full">
            <div className="w-full max-md:max-w-full">Tempus natoque id</div>
          </div>
        </div>
      </div>
    </div>
  );
}
