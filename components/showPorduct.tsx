"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import products from "@/data/products.json";

function useProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const showArrows = products.length > 1;

  const getPrevIndex = () =>
    currentIndex === 0 ? products.length - 1 : currentIndex - 1;
  const getNextIndex = () =>
    currentIndex === products.length - 1 ? 0 : currentIndex + 1;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  return {
    currentIndex,
    showArrows,
    handlePrev,
    handleNext,
    getPrevIndex,
    getNextIndex,
  };
}

export default function Carousel() {
  const {
    currentIndex,
    showArrows,
    handlePrev,
    handleNext,
    getPrevIndex,
    getNextIndex,
  } = useProductCarousel();
  const currentProduct = products[currentIndex];
  const prevProduct = products[getPrevIndex()];
  const nextProduct = products[getNextIndex()];

  return (
    <div className="relative w-full mx-auto px-4 sm:px-20 py-16 overflow-hidden">
      <div className="relative h-96 md:h-125 flex items-center justify-center">
        <div className="absolute left-10 w-48 md:w-72 h-64 md:h-96 opacity-30 scale-75 transition-all duration-300 z-0 pointer-events-none">
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            <Image
              src={prevProduct.image}
              alt={prevProduct.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        </div>

        <div className="relative w-72 md:w-150 h-80 md:h-125 z-10 transition-all duration-500">
          <div className="relative w-full h-full bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            <Link href={`/product/${currentProduct.id}`}>
              <div className="relative w-full h-full">
                <Image
                  src={currentProduct.image}
                  alt={currentProduct.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
              </div>
            </Link>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-[#8627b5]/30 backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[#ffe564]">
                {currentProduct.title}
              </h2>
              <p className="mb-4 line-clamp-2 text-sm md:text-base">
                {currentProduct.description}
              </p>
              <div className="flex gap-3">
                <Link
                  href={`/product/${currentProduct.id}`}
                  className="bg-[#ffe564] text-[#8627b5] py-2 px-4 md:px-6 rounded-lg hover:bg-yellow-200 transition-colors font-semibold text-sm"
                >
                  View Details
                </Link>
                <a
                  href={currentProduct.url1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#8627b5] text-[#ffe564] py-2 px-4 md:px-6 rounded-lg hover:bg-purple-700 transition-colors font-semibold text-sm"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Next Card (Peek Right) */}
        <div className="absolute right-10 w-48 md:w-72 h-64 md:h-96 opacity-30 scale-75 transition-all duration-300 z-0 pointer-events-none">
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            <Image
              src={nextProduct.image}
              alt={nextProduct.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        </div>

        {/* Navigation Buttons - Only show if multiple products */}
        {showArrows && (
          <>
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-[#ffe564] text-[#8627b5] hover:bg-yellow-200 p-3 md:p-4 rounded-full shadow-lg transition-all z-20 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 cursor-pointer"
              aria-label="Previous slide"
            >
              <p className="rotate-90 font-bold text-3xl">v</p>
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-[#ffe564] text-[#8627b5] hover:bg-yellow-200 p-3 md:p-4 rounded-full shadow-lg transition-all z-20 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 cursor-pointer"
              aria-label="Next slide"
            >
              <p className="-rotate-90 font-bold text-3xl">v</p>
            </button>
          </>
        )}
      </div>

      {/* Dots Navigation */}
    </div>
  );
}
