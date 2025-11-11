import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="shadow bg-white sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-green-700">
          🌾 AgroShop Course
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 font-semibold"
                : "text-gray-700 hover:text-green-600"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/syllabus"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 font-semibold"
                : "text-gray-700 hover:text-green-600"
            }
          >
            Syllabus
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 font-semibold"
                : "text-gray-700 hover:text-green-600"
            }
          >
            Register
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 hover:text-green-700"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-green-50 border-t border-green-100 shadow-inner">
          <div className="flex flex-col items-center space-y-4 py-4">
            <NavLink
              onClick={closeMenu}
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-green-700 font-semibold"
                  : "text-gray-700 hover:text-green-700"
              }
            >
              Home
            </NavLink>
            <NavLink
              onClick={closeMenu}
              to="/syllabus"
              className={({ isActive }) =>
                isActive
                  ? "text-green-700 font-semibold"
                  : "text-gray-700 hover:text-green-700"
              }
            >
              Syllabus
            </NavLink>
            <NavLink
              onClick={closeMenu}
              to="/register"
              className={({ isActive }) =>
                isActive
                  ? "text-green-700 font-semibold"
                  : "text-gray-700 hover:text-green-700"
              }
            >
              Register
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
