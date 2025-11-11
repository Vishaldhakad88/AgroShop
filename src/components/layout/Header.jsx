import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="shadow bg-white sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-xl font-bold text-green-700">
          🌾 AgroShop Course
        </Link>
        <div className="space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-green-600 font-semibold" : "text-gray-700"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/syllabus"
            className={({ isActive }) =>
              isActive ? "text-green-600 font-semibold" : "text-gray-700"
            }
          >
            Syllabus
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive ? "text-green-600 font-semibold" : "text-gray-700"
            }
          >
            Register
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
