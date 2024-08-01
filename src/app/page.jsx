import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-center py-20 pt-40">
        <h1 className="text-5xl font-bold mb-4">Welcome to YT Playlist Share!</h1>
        <p className="text-xl mb-8">
          Create and share YouTube playlists with your friends, rate videos, and compare your tastes.
        </p>
        <button className="bg-white text-purple-600 font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300">
          Get Started
        </button>
      </header>

      {/* Features Section */}
      <section className="py-20">
        <h2 className="text-4xl font-semibold text-center text-purple-600 mb-12">Features</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-purple-600">Create Playlists</h3>
              <p className="text-gray-600">
                Easily create playlists of your favorite YouTube videos.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-purple-600">Share with Friends</h3>
              <p className="text-gray-600">
                Share your playlists and see what your friends are watching.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-purple-600">Rate Videos</h3>
              <p className="text-gray-600">
                Rate each video in your playlists and compare with your friends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-100">
        <h2 className="text-4xl font-semibold text-center text-purple-600 mb-12">How It Works</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
              <Image
                src="/3.png"
                alt="Create Playlist"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-purple-600">Create</h3>
            <p className="text-gray-600">
              Add your favorite YouTube videos to a playlist.
            </p>
          </div>
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
              <Image
                src="/2.jpg"
                alt="Share with Friends"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-purple-600">Share</h3>
            <p className="text-gray-600">
              Share your playlists with your friends.
            </p>
          </div>
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
              <Image
                src="/1.png"
                alt="Rate Videos"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-purple-600">Rate</h3>
            <p className="text-gray-600">
              Rate and compare videos with your friends.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="text-center py-6 bg-gray-200">
        <p className="text-gray-600">&copy; 2024 YT Playlist Share. All rights reserved.</p>
      </footer>
    </div>
  );
}
