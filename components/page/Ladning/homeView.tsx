"use client";
import React from "react";
import Carousel from "@/components/showPorduct";

export default function HomeView() {
  return (
    <div>
        <h2 className="text-2xl font-bold mb-4 text-center mt-5">FEATURED PRODUCTS</h2>
        <Carousel />
    </div>
  );
}