"use client";
import React from "react";
import ProductCards from "@/components/showPorduct";
import Hero from "@/components/page/Ladning/hero";

export default function HomeView() {
  return (
    <div>
      <Hero />
        <ProductCards />
    </div>
  );
}