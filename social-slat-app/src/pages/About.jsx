import React from 'react';

export default function About() {
  return (
    <div className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">Welcome to Social Slat</h1>
        <p className="text-lg md:text-xl text-center mb-12">
          The vibrant community app designed to keep you connected and engaged with the events unfolding in your area.
        </p>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border-2 border-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Discover</h2>
            <p className="text-lg">
              Whether you're seeking the latest gatherings, workshops, or social happenings, Social Slat offers a comprehensive platform to explore upcoming events scheduled for the days and months ahead.
            </p>
          </div>
          <div className="border-2 border-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Connect</h2>
            <p className="text-lg">
              With Social Slat, users have the power to create personalized profiles, host their own events, and forge meaningful connections with like-minded individuals in their community.
            </p>
          </div>
        </div>
        <div className="text-center mt-12">
          <p className="text-lg md:text-xl">
            Stay informed, stay connected, and stay involved with Social Slat.
          </p>
          <p className="text-lg md:text-xl mt-4">
            Currently in active development, Social Slat is continuously evolving to enhance user experiences and expand its feature set.
          </p>
        </div>
      </div>
    </div>
  );
}
