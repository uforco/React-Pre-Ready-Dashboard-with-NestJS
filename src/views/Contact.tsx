import React from 'react';

export default function Contact() {
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

      {/* Contact Content */}
      <div className="flex-1 container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Get in Touch
            </h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-600 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-600 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-600 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  rows={5}
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Contact Information
            </h3>
            <p className="text-gray-600 mb-2">
              <strong>Email:</strong> srka780@gmail.com
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Phone:</strong> +880 19987 69191
            </p>
            <p className="text-gray-600">
              <strong>Address:</strong> dhaka, cantonment, Bangladesh
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
