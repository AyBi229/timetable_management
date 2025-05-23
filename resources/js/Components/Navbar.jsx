import { usePage } from '@inertiajs/react';
import React from 'react';
import { handleLogout } from './LogoutButton';

export default function Navbar() {
  const { props } = usePage();
  console.log(props);
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
          { props?.auth?.user ? (
            <button onClick={handleLogout} className="text-white hover:text-gray-300 transition-colors duration-300">
                Log Out
            </button>
          )
          : (
            <a
              href="/login"
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              Login
            </a>
          )}
        </li>
      </ul>
    </nav>
  );
}
