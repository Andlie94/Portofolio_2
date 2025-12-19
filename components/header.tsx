'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';


export default function Header() {

   const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="text-white mt-10">
      <nav className="flex justify-center space-x-24 relative border-2 border-[#dfcc63] p-4 mt-2 rounded-4xl max-w-fit mx-auto">
        {navigation.map((item) => (
          <Link
          key={item.name}
          href={item.href}
          >{item.name}</Link>
        ))}
      </nav>
    </header>
  );
}