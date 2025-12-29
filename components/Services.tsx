"use client";

import { Music, Headphones, Mic, Radio, ListMusic, Cloud } from "lucide-react";

const features = [
  {
    title: "Music Streaming",
    description: "Stream high-quality music instantly with a smooth, lag-free experience.",
    icon: <Music size={36} />,
  },
  {
    title: "Personalized Playlists",
    description: "AI-powered playlists based on your mood, taste, and listening history.",
    icon: <ListMusic size={36} />,
  },
  {
    title: "Offline Listening",
    description: "Download your favorite tracks and enjoy music anytime, anywhere.",
    icon: <Headphones size={36} />,
  },
  {
    title: "Artist Uploads",
    description: "Independent artists can upload and share their music globally.",
    icon: <Mic size={36} />,
  },
  {
    title: "Live Radio",
    description: "Listen to live radio stations and curated shows from around the world.",
    icon: <Radio size={36} />,
  },
  {
    title: "Cloud Sync",
    description: "Your playlists and favorites stay synced across all devices.",
    icon: <Cloud size={36} />,
  },
];

const HomeServices = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">
          Experience Music Like Never Before
        </h2>
        <p className="text-gray-400 mb-12">
          Everything you need for streaming, discovering, and sharing music.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <div className="mb-4 text-green-500 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;