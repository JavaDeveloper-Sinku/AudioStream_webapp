"use client";

const HomeAbout = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-14">
        
        {/* LEFT IMAGE */}
        <div className="md:w-1/2">
          <img
            src="/cloud.jpeg"
            alt="Music streaming experience"
            className="rounded-3xl shadow-2xl"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Music, Your Vibe
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            MusicLife is built for true music lovers. Discover new tracks, stream
            high-quality audio, create playlists, and enjoy your favorite songs
            anytime, anywhere — all in one powerful platform.
          </p>

          {/* STATS */}
          <div className="flex flex-wrap justify-center md:justify-start gap-10">
            <div>
              <h3 className="text-3xl font-bold text-green-500">10M+</h3>
              <p className="text-gray-400">Active Listeners</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-green-500">50M+</h3>
              <p className="text-gray-400">Songs Available</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-green-500">1M+</h3>
              <p className="text-gray-400">Artists Worldwide</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeAbout;