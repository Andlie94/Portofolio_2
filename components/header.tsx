"use client";
import { useState } from "react";
import Link from "next/link";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(isMenuOpen === false);
  };

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full py-4 px-6 border-b bg-[--background] text-[--foreground]">
      <nav className="max-w-7xl mx-auto flex items-center justify-between text-[--foreground]">
        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="flex flex-col gap-1.5 w-8 h-8 justify-center items-center z-50"
          aria-label="Toggle menu"
        >
          {[
            { openClass: "rotate-45 translate-y-2" },
            { openClass: "hidden transition duration-300 ease-out" },
            { openClass: "-rotate-45 -translate-y-0" },
          ].map((line, index) => (
            <span
              key={index}
              className={`block w-6 h-0.5 bg-[#ffe564] transition-all duration-300 ${
                isMenuOpen ? line.openClass : ""
              }`}
            ></span>
          ))}
        </button>

        <div
          className={`fixed top-0 left-0 h-full w-100 transform bg-[#8627b5] transition-transform ease-in-out z-40 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-6 p-8 mt-20">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={toggleMenu}
                className="text-xl text-[--foreground]transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
