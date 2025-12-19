"use client";
import React from "react";
import products from "@/data/products.json";
import Image from "next/image";
import Link from "next/link";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ProductPage({ params }: PageProps) {
  const { id } = React.use(params);
  const product = products.find((product) => product.id === Number(id));

  if (product === undefined) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Product Not Found</h1>
        <p className="text-gray-600 mb-4">Looking for product ID: {id}</p>
        <Link href="/" className="text-[#ffffff] hover:underline">
          <p>Go Back to Home</p>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-24">
      <Link
        href="/"
        className="inline-block mb-8 hover:text-[#dee950] transition-colors"
      >
        Back to products
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="relative h-96 lg:h-150 bg-gray-200 rounded-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            fill
            quality={100}
            className="object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-6">{product.title}</h1>
          <p className="text-lg mb-8 leading-relaxed">
            {product.mainDescription}
          </p>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center bg-[#349667] text-[#ffffff] py-3 px-8 rounded-lg hover:bg-[#2c7a52] transition-colors font-semibold"
            >
              View on GitHub
            </a>
            <a
              href={product.url1}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center bg-[#349667] text-[#ffffff] py-3 px-8 rounded-lg hover:bg-[#2c7a52] transition-colors font-semibold"
            >
              View Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
