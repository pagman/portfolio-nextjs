"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/#home", label: "Αρχική" },
  { href: "/#projects", label: "Έργα" },
  { href: "/#about", label: "Σχετικά" },
  { href: "/#contact", label: "Επικοινωνία" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl">
        <div className="backdrop-blur-xl bg-white/3 border border-white/8 rounded-full px-5 py-3 flex justify-between items-center shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
          <Link href="/" className="text-sm font-bold tracking-tight gradient-text shrink-0">
            mCubedDevLabs
          </Link>

          <ul className="hidden md:flex gap-1 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/50 hover:text-white transition-colors duration-200 text-sm px-4 py-1.5 rounded-full hover:bg-white/6 block"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden text-white/50 p-1 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed top-18 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-3xl">
          <div className="backdrop-blur-xl bg-black/80 border border-white/8 rounded-2xl p-2">
            <ul className="flex flex-col list-none">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm font-medium block py-3 px-4 rounded-xl hover:bg-white/6"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
