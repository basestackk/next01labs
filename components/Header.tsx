"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100/50">
      <nav className="container mx-auto px-8 lg:px-12 py-6 flex items-center justify-between max-w-7xl">
        <Link href="/" className="text-2xl font-light text-slate-900 tracking-tight font-mono">
          Next<span className="font-mono">0</span>1 Labs
        </Link>
        
        <div className="hidden md:flex items-center gap-12">
          <Link href="#Services" className="text-slate-600 hover:text-slate-900 transition-colors duration-300 font-light text-sm tracking-wider uppercase">
            Services
          </Link>
          <Link href="#Approach" className="text-slate-600 hover:text-slate-900 transition-colors duration-300 font-light text-sm tracking-wider uppercase">
            Approach
          </Link>
          <Link href="#Contact" className="px-6 py-2.5 bg-slate-900 text-white hover:bg-slate-800 transition-all duration-300 font-light text-sm tracking-wider uppercase">
            Contact
          </Link>
        </div>

        <button
          className="md:hidden text-slate-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100">
          <div className="container mx-auto px-8 py-8 flex flex-col gap-6">
            <Link
              href="#Services"
              className="text-slate-600 hover:text-slate-900 transition-colors font-light text-sm tracking-wider uppercase"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#Approach"
              className="text-slate-600 hover:text-slate-900 transition-colors font-light text-sm tracking-wider uppercase"
              onClick={() => setIsMenuOpen(false)}
            >
              Approach
            </Link>
            <Link
              href="#Contact"
              className="px-6 py-2.5 bg-slate-900 text-white hover:bg-slate-800 transition-all duration-300 font-light text-sm tracking-wider uppercase text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

