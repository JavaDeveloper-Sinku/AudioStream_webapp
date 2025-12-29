"use client";

import React from "react";
import Link from "next/link";

const TestHero = () => {
  return (
    <section
      className="relative w-full h-[95vh] flex items-center justify-center text-center"
      style={{
        backgroundImage: "url('/srcone.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90"></div>

      {/* Content */}
      <div className="relative z-10 px-5 max-w-4xl">
        {/* Tag */}
        <p className="inline-block px-4 py-2 mb-4 text-sm rounded-full bg-white/10 text-green-400 border border-white/20">
          🎧 Feel The Music • Stream • Discover • Enjoy
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
          Unlimited <span className="text-green-500">Music</span>,  
          <br />
          Anytime. Anywhere.
        </h1>

        <p className="text-gray-300 text-lg md:text-xl mt-4">
          Listen to millions of songs, create playlists and feel the beat of life.
        </p>

        {/* Animated Equalizer */}
        <div className="flex justify-center gap-1 mt-4">
          {[1, 2, 3, 4, 5].map((bar) => (
            <span
              key={bar}
              className="w-1 h-6 bg-green-500 animate-pulse rounded-full"
              style={{ animationDelay: `${bar * 0.2}s` }}
            ></span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
          <Link href="/auth/signup">
            <button className="bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-full font-semibold transition shadow-lg shadow-green-600/30">
              Start Listening Free
            </button>
          </Link>

          <Link href="/about">
            <button className="bg-white/20 hover:bg-white/30 border border-white/30 text-white px-7 py-3 rounded-full font-semibold transition">
              Explore More
            </button>
          </Link>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-8 mt-8 text-gray-300 text-sm">
          <p>🎵 10M+ Songs</p>
          <p>👤 2M+ Users</p>
          <p>⭐ Top Streaming Platform</p>
        </div>
      </div>
    </section>
  );
};

export default TestHero;
