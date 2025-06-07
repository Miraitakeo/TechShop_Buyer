import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome to Our App
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        This is the homepage. Use the navigation or sign in to access more
        features.
      </p>
      <div className="space-x-4">
        <a
          href="/signin"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Sign In
        </a>
        <a
          href="/signup"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Sign Up
        </a>
      </div>
    </div>
  );
}
