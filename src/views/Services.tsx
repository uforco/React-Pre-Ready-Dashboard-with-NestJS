import React from 'react';

export default function Services() {
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
      {/* Services Content */}
      <div className="flex-1 container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Real-Time Analytics
            </h3>
            <p className="text-gray-600">
              Monitor and visualize your data with real-time updates, powered by
              NestJS and React.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Customizable UI
            </h3>
            <p className="text-gray-600">
              TailwindCSS enables fully customizable, responsive designs
              tailored to your brand.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Scalable Backend
            </h3>
            <p className="text-gray-600">
              NestJS provides a robust, modular backend to handle complex
              business logic with ease.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Hot Reload
            </h3>
            <p className="text-gray-600">
              Accelerate development with live reload for instant feedback on
              code changes.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2025 React Pre-Ready Dashboard. All rights reserved.</p>
      </footer>
    </div>
  );
}
