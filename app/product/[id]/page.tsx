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
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold mb-8">Product Not Found</h1>
        <p className="text-gray-600 mb-4">Looking for product ID: {id}</p>
        <Link href="/" className="text-blue-600 hover:underline">
          Go back to home
        </Link>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <Link
        href="/"
        className="inline-block mb-8 hover:text-yellow-600 transition-colors"
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
              className="text-center bg-[#ffe564] text-[#8627b5] py-3 px-8 rounded-lg hover:bg-yellow-200 transition-colors font-semibold"
            >
              View on GitHub
            </a>
            <a
              href={product.url1}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center bg-[#ffe564] text-[#8627b5] py-3 px-8 rounded-lg hover:bg-yellow-200 transition-colors font-semibold"
            >
              View Live Demo
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
