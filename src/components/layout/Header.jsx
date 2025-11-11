// Header.jsx
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  BookOpen,
  UserPlus,
  Leaf,          // 3-D leaf for logo
} from "lucide-react";
import logo from "../../assets/logo.png";


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* ==== Google Font ==== */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <header
        className="shadow bg-white sticky top-0 z-50"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
          {/* ==== Logo ==== */}
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-bold text-green-700"
          >
                        <img src={logo} alt="AgroShiksha Logo" className="w-10 h-10 object-contain" />
            
            {/* <Leaf className="w-7 h-7 text-green-600" strokeWidth={2.5} /> */}
            AgroShop Course
          </Link>

          {/* ==== Desktop Menu ==== */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-1.5 transition-colors ${
                  isActive
                    ? "text-green-600 font-semibold"
                    : "text-gray-700 hover:text-green-600"
                }`
              }
            >
              <Home className="w-5 h-5" />
              Home
            </NavLink>

            <NavLink
              to="/syllabus"
              className={({ isActive }) =>
                `flex items-center gap-1.5 transition-colors ${
                  isActive
                    ? "text-green-600 font-semibold"
                    : "text-gray-700 hover:text-green-600"
                }`
              }
            >
              <BookOpen className="w-5 h-5" />
              Syllabus
            </NavLink>

            <NavLink
              to="/register"
              className={({ isActive }) =>
                `flex items-center gap-1.5 transition-colors ${
                  isActive
                    ? "text-green-600 font-semibold"
                    : "text-gray-700 hover:text-green-600"
                }`
              }
            >
              <UserPlus className="w-5 h-5" />
              Register
            </NavLink>
          </div>

          {/* ==== Mobile Toggle ==== */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-green-700 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* ==== Mobile Dropdown ==== */}
        {menuOpen && (
          <div className="md:hidden bg-green-50 border-t border-green-100 shadow-inner">
            <div className="flex flex-col items-center space-y-5 py-5">
              <NavLink
                onClick={closeMenu}
                to="/"
                className={({ isActive }) =>
                  `flex items-center gap-2 transition-colors ${
                    isActive
                      ? "text-green-700 font-semibold"
                      : "text-gray-700 hover:text-green-700"
                  }`
                }
              >
                <Home className="w-5 h-5" />
                Home
              </NavLink>

              <NavLink
                onClick={closeMenu}
                to="/syllabus"
                className={({ isActive }) =>
                  `flex items-center gap-2 transition-colors ${
                    isActive
                      ? "text-green-700 font-semibold"
                      : "text-gray-700 hover:text-green-700"
                  }`
                }
              >
                <BookOpen className="w-5 h-5" />
                Syllabus
              </NavLink>

              <NavLink
                onClick={closeMenu}
                to="/register"
                className={({ isActive }) =>
                  `flex items-center gap-2 transition-colors ${
                    isActive
                      ? "text-green-700 font-semibold"
                      : "text-gray-700 hover:text-green-700"
                  }`
                }
              >
                <UserPlus className="w-5 h-5" />
                Register
              </NavLink>
            </div>
          </div>
        )}
      </header>
    </>
  );
}