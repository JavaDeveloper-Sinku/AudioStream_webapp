"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Music, Search, Bell, Menu, X } from "lucide-react";

const MusicNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [browseOpen, setBrowseOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [notifOpen, setNotifOpen] = useState(false);
  const notifRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close notification dropdown if click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
        setNotifOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [notifRef]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    setSearchQuery("");
    setSearchOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between text-white">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <Music className="text-green-500" />
          MusicLife
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 text-sm">
          <li><Link href="/" className="hover:text-green-400">Home</Link></li>
          <li
            className="relative"
            onMouseEnter={() => setBrowseOpen(true)}
            onMouseLeave={() => setBrowseOpen(false)}
          >
            <span className="cursor-pointer hover:text-green-400">Browse</span>
            {browseOpen && (
              <ul className="absolute top-7 left-0 w-48 bg-black border border-gray-700 rounded-lg shadow-lg">
                <li className="px-4 py-2 hover:bg-gray-800"><Link href="/browse/trending">Trending</Link></li>
                <li className="px-4 py-2 hover:bg-gray-800"><Link href="/browse/playlists">Playlists</Link></li>
                <li className="px-4 py-2 hover:bg-gray-800"><Link href="/browse/artists">Artists</Link></li>
                <li className="px-4 py-2 hover:bg-gray-800"><Link href="/browse/albums">Albums</Link></li>
              </ul>
            )}
          </li>
          <li><Link href="/library" className="hover:text-green-400">Your Library</Link></li>
          <li><Link href="/premium" className="hover:text-green-400">Premium</Link></li>
        </ul>

        {/* RIGHT ACTIONS */}
        <div className="hidden md:flex items-center gap-4 relative">
          {/* SEARCH */}
          <Search
            className="w-5 h-5 cursor-pointer hover:text-green-400"
            onClick={() => setSearchOpen(true)}
          />

          {/* NOTIFICATION */}
          <div ref={notifRef} className="relative">
            <Bell
              className="w-5 h-5 cursor-pointer hover:text-green-400"
              onClick={() => setNotifOpen(prev => !prev)}
            />
            {notifOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-black border border-gray-700 rounded-lg shadow-lg text-white overflow-hidden">
                <div className="p-4 font-semibold border-b border-gray-700">Notifications</div>
                <ul className="max-h-64 overflow-y-auto">
                  <li className="px-4 py-2 hover:bg-gray-800">New album released!</li>
                  <li className="px-4 py-2 hover:bg-gray-800">Your playlist has 5 new likes.</li>
                  <li className="px-4 py-2 hover:bg-gray-800">Subscription expiring soon.</li>
                  <li className="px-4 py-2 hover:bg-gray-800">New artist you follow dropped a song.</li>
                </ul>
              </div>
            )}
          </div>

          {/* LOGIN/SIGNUP */}
          <Link
            href="/auth/login"
            className="text-sm px-4 py-1 rounded-full border border-white/30 hover:bg-white/10"
          >
            Login
          </Link>
          <Link
            href="/auth/signup"
            className="text-sm px-4 py-1 rounded-full bg-green-500 text-black font-semibold hover:bg-green-400"
          >
            Sign Up
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md text-white">
          <ul className="flex flex-col items-center gap-6 py-6">
            <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link href="/browse" onClick={() => setIsOpen(false)}>Browse</Link></li>
            <li><Link href="/library" onClick={() => setIsOpen(false)}>Your Library</Link></li>
            <li><Link href="/premium" onClick={() => setIsOpen(false)}>Premium</Link></li>

            <div className="flex gap-4 pt-2">
              <Link href="/auth/login" className="px-4 py-1 rounded-full border border-white/40">Login</Link>
              <Link href="/auth/signup" className="px-4 py-1 rounded-full bg-green-500 text-black font-semibold">Sign Up</Link>
            </div>
          </ul>
        </div>
      )}

      {/* SEARCH MODAL CENTER */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md"
          onClick={() => setSearchOpen(false)}
        >
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center gap-2 w-full max-w-lg p-4 rounded-full border border-gray-300"
            onClick={e => e.stopPropagation()}
          >
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search music..."
              className="flex-1 px-4 py-3 rounded-full outline-none bg-white/10 placeholder-gray-300 text-white"
              autoFocus
            />
            <button
              type="button"
              className="flex items-center justify-center w-10 h-10 bg-gray-700/50 rounded-full hover:bg-gray-600 transition"
              onClick={() => setSearchOpen(false)}
            >
              <X className="w-5 h-5 text-white" />
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-green-500 text-black font-semibold rounded-full hover:bg-green-400 transition"
            >
              Search
            </button>
          </form>
        </div>
      )}
    </nav>
  );
};

export default MusicNavbar;
