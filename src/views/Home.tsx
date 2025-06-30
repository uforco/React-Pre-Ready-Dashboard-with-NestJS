import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">React Pre-Ready Dashboard</h1>
          <div className="space-x-4">
            <a href="/" className="hover:text-blue-200">
              Home
            </a>
            <a href="/about" className="hover:text-blue-200">
              About
            </a>
            <a href="/services" className="hover:text-blue-200">
              Services
            </a>
            <a href="/contact" className="hover:text-blue-200">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-1 justify-center items-center">
        <h1 className="text-4xl font-bold text-blue-600">
          Welcome to React Pre-Ready Dashboard! 🎉
        </h1>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2025 React Pre-Ready Dashboard. All rights reserved.</p>
      </footer>
    </div>
  );
}
