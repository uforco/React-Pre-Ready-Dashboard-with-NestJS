import React from 'react';

export default function About() {
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

      {/* About Content */}
      <div className="flex-1 container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">About Us</h2>
        <p className="text-lg text-gray-600 mb-4">
          The React Pre-Ready Dashboard is a powerful, modern full-stack
          application built with <strong>NestJS</strong> and{' '}
          <strong>React</strong>, styled with <strong>TailwindCSS</strong>. Our
          goal is to provide a scalable, responsive, and developer-friendly
          dashboard solution for your business needs.
        </p>
        <p className="text-lg text-gray-600 mb-4">
          With server-side rendering and hot reload capabilities, this project
          ensures a seamless development experience and fast, SEO-friendly page
          loads. Whether you're managing data, visualizing analytics, or
          building custom features, our dashboard is pre-ready to accelerate
          your workflow.
        </p>
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h3>
          <p className="text-gray-600">
            To empower developers with a robust, customizable dashboard
            framework that combines the best of modern web technologies.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2025 React Pre-Ready Dashboard. All rights reserved.</p>
      </footer>
    </div>
  );
}
