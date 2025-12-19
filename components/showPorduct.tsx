"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import products from "@/data/products.json";

export default function ProductCards() {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-10 text-center mt-20">FEATURED PRODUCTS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-48">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="pl-4 pt-4 pb-4 bg-[#349667]/55 backdrop-blur-lg backdrop-saturate-150">
              <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
              <p className="mb-4">
                {product.description.substring(0, 120)}...
              </p>
              <Link
                href={`/product/${product.id}`}
                className="text-white hover:underline"
              >
                <p className="cursor-pointer">View Details</p>
              </Link>
                <div className=" mt-2 flex flex-wrap gap-2">
                {product.tags.map((tag,i)=>(
                  <p key={i} className="inline-block bg-[#349667] text-[#ffffff] rounded-full px-3 py-1 text-sm font-semibold mb-2">{tag}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
