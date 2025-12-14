"use client";
import React from "react";

interface PageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: PageProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Product Details</h1>
      <p className="text-xl">Product ID: {params.id}</p>
    </main>
  );
}
