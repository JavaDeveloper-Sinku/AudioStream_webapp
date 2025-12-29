"use client";

import Link from "next/link";
import { PlayCircle } from "lucide-react";

const HomeCTA = () => {
  return (
    <section className="py-28 bg-gradient-to-r from-green-500 to-emerald-600 text-black">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Start Listening Without Limits
        </h2>
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
          Millions of songs. Zero ads. Offline listening. Upgrade your sound
          experience today.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/auth/signup"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-black text-green-400 font-semibold rounded-full hover:bg-gray-900 transition"
          >
            <PlayCircle className="w-6 h-6" />
            Start Free Trial
          </Link>

          <Link
            href="/premium"
            className="inline-flex items-center justify-center px-10 py-4 border-2 border-black text-black font-semibold rounded-full hover:bg-black hover:text-green-400 transition"
          >
            View Plans
          </Link>
        </div>

        <p className="mt-8 text-sm opacity-80">
          Cancel anytime. No credit card required.
        </p>
      </div>
    </section>
  );
};

export default HomeCTA;