"use client";
import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full h-96 md:h-125 mt-10 mb-10 ">
      <div className="container mx-auto px-4 h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center">
          {/* Text Section */}
          <div className="relative z-10 text-center md:text-left">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-outline tracking-wide">
              Welcome to my Portfolio
            </h1>
            <p className="text-lg md:text-2xl text-[#ffffff]">
              Discover my projects and skills
            </p>
          </div>

          {/*right Side*/}
          <div className="relative w-64 h-64 md:w-90 md:h-90 lg:w-100 lg:h-100 mx-auto  md:mr-0 rounded-full overflow-hidden shadow-2xl bg-[#349667]">
            <Image
              src="/avatar.png"
              alt="Portfolio hero image"
              fill
              quality={100}
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
