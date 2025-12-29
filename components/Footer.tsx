"use client";

import Link from "next/link";
import { Music, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const HomeFooter = () => {
  return (
    <footer className="bg-black text-gray-400 pt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* BRAND */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Music className="text-green-500" />
            <h1 className="text-2xl font-bold text-white">MusicLife</h1>
          </div>
          <p className="text-sm leading-relaxed">
            Stream millions of songs, discover new artists, and enjoy music
            without limits — anytime, anywhere.
          </p>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
            <li><Link href="/press" className="hover:text-white">Press</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* PRODUCT */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Product</h3>
          <ul className="space-y-2">
            <li><Link href="/premium" className="hover:text-white">Premium</Link></li>
            <li><Link href="/mobile" className="hover:text-white">Mobile App</Link></li>
            <li><Link href="/library" className="hover:text-white">Your Library</Link></li>
            <li><Link href="/features" className="hover:text-white">Features</Link></li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white"><Facebook /></Link>
            <Link href="#" className="hover:text-white"><Twitter /></Link>
            <Link href="#" className="hover:text-white"><Instagram /></Link>
            <Link href="#" className="hover:text-white"><Youtube /></Link>
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="mt-12 border-t border-gray-800 py-6 text-center text-sm">
        © {new Date().getFullYear()} MusicLife. All rights reserved.
      </div>
    </footer>
  );
};

export default HomeFooter;