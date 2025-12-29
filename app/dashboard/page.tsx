"use client";

import { useState } from "react";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Music,
  Search,
  Bell,
  User,
} from "lucide-react";

/* ------------------ TYPES ------------------ */
interface MusicItem {
  id: number;
  title: string;
  artist: string;
  duration: string;
}

/* ------------------ DEMO DATA ------------------ */
const MUSIC_LIST: MusicItem[] = [
  { id: 1, title: "Starboy", artist: "The Weeknd", duration: "3:50" },
  { id: 2, title: "Circles", artist: "Post Malone", duration: "3:35" },
  { id: 3, title: "Passionfruit", artist: "Drake", duration: "4:58" },
  { id: 4, title: "Peaches", artist: "Justin Bieber", duration: "3:18" },
  { id: 5, title: "Under The Influence", artist: "Chris Brown", duration: "3:04" },
];

/* ------------------ PAGE ------------------ */
export default function MusicDashboard() {
  const [search, setSearch] = useState("");
  const [current, setCurrent] = useState<MusicItem | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const filteredMusic = MUSIC_LIST.filter(
    m =>
      m.title.toLowerCase().includes(search.toLowerCase()) ||
      m.artist.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">

      {/* ---------------- NAVBAR ---------------- */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xl font-bold">
            <Music className="text-green-500" />
            AudioStream
          </div>

          <div className="flex items-center gap-4">
            <Bell className="w-5 h-5 cursor-pointer hover:text-green-400" />
            <User className="w-6 h-6 cursor-pointer hover:text-green-400" />
          </div>
        </div>
      </nav>

      {/* ---------------- SEARCH ---------------- */}
      <div className="pt-28 pb-8 flex justify-center">
        <div className="w-full max-w-xl flex items-center gap-3 px-5 py-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20">
          <Search className="w-5 h-5 text-white/60" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search music..."
            className="flex-1 bg-transparent outline-none text-white placeholder-white/50"
          />
        </div>
      </div>

      {/* ---------------- MUSIC LIST ---------------- */}
      <main className="max-w-5xl mx-auto px-6 pb-40 space-y-3">
        {filteredMusic.map(music => (
          <div
            key={music.id}
            onClick={() => {
              setCurrent(music);
              setIsPlaying(true);
            }}
            className="
              group flex items-center justify-between
              px-5 py-4 rounded-2xl
              bg-white/5 backdrop-blur-md
              border border-white/10
              hover:bg-white/10
              transition cursor-pointer
            "
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center group-hover:bg-green-500 transition">
                <Play className="w-4 h-4" />
              </div>
              <div>
                <p className="font-medium">{music.title}</p>
                <p className="text-sm text-white/60">{music.artist}</p>
              </div>
            </div>
            <span className="text-sm text-white/60">{music.duration}</span>
          </div>
        ))}
      </main>

      {/* ---------------- MUSIC PLAYER ---------------- */}
      {current && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[420px] max-w-[90%] bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-4 flex items-center justify-between shadow-2xl">
          <div>
            <p className="font-semibold text-sm">{current.title}</p>
            <p className="text-xs text-white/60">{current.artist}</p>
          </div>

          <div className="flex items-center gap-4">
            <button className="hover:text-green-400">
              <SkipBack />
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-10 h-10 rounded-full bg-green-500 text-black flex items-center justify-center hover:scale-105 transition"
            >
              {isPlaying ? <Pause /> : <Play />}
            </button>

            <button className="hover:text-green-400">
              <SkipForward />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
