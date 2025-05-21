import React from 'react';

export default function Navbar() {
  return (
    <nav className="p-4 shadow-lg" style={{ backgroundColor: 'rgb(99, 99, 135)' }}>
      <ul className="flex space-x-6 justify-center">
        <li>
          <a
            href="/"
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/login"
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
}
