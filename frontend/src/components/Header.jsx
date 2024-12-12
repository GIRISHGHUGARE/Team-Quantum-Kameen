import React, { useState } from "react";
import SustainHerLogo from "./../assets/SustainHerLogo.png";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full px-6 flex items-center justify-between z-50 bg-white bg-opacity-5 backdrop-blur-lg shadow-lg border-b border-white/10">
      {/* Logo */}
      <div className="text-xl font-bold text-grey">
        <a href="#">
          <img
            src={SustainHerLogo}
            alt="logo"
            className="h-[100px] w-[100px] ml-[70px]"
          />
        </a>
      </div>

      {/* Center Options (Desktop) */}
      <nav className="hidden md:flex space-x-8 relative ml-20">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer text-creme font-semibold text-xl hover:text-olive hover:font-extrabold hover:underline transition"
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="cursor-pointer text-creme font-semibold text-xl hover:text-olive hover:font-extrabold transition"
        >
          About
        </Link>

        {/* Services with Dropdown (Desktop) */}
        <div
          className="relative"
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}
        >
          <span
            className="cursor-pointer text-creme font-semibold text-xl hover:text-olive hover:font-extrabold transition"
          >
            Services
          </span>
          {isServicesOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white bg-opacity-50 shadow-lg rounded-lg flex flex-col">
              <Link
                to="services" // Ensure this points to the "services" section id
                smooth={true}
                duration={500}
                className="cursor-pointer px-4 py-2 text-brown hover:bg-creme hover:text-gray-800 transition"
              >
                Our Services
              </Link>
            </div>
          )}
        </div>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="cursor-pointer text-creme font-semibold text-xl hover:text-olive hover:font-extrabold transition"
        >
          Contact
        </Link>
      </nav>

      {/* Right Buttons */}
      <div className="hidden md:flex space-x-4">
        <button className="relative flex items-center gap-2 px-4 py-3 rounded-md text-[18px] font-bold text-[hsla(0,0%,90%)] bg-gradient-to-br from-olive to-brown hover:scale-110 transition">
          <RouterLink to="/login">Login</RouterLink>
        </button>
        <button className="relative px-5 py-3 rounded-md border-2 border-white text-grey hover:text-white hover:scale-110 transition">
          <RouterLink to="/signup">Signup</RouterLink>
        </button>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="relative md:hidden">
        <button
          className="text-xl p-2 text-creme font-semibold hover:font-extrabold hover:bg-grey hover:rounded-xl transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Dropdown Menu (Mobile) */}
        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white bg-opacity-50 shadow-lg rounded-lg flex flex-col">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer px-4 py-2 text-brown hover:bg-creme hover:text-gray-800 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer px-4 py-2 text-brown hover:bg-creme hover:text-gray-800 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="cursor-pointer px-4 py-2 text-brown hover:bg-creme hover:text-gray-800 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer px-4 py-2 text-brown hover:bg-creme hover:text-gray-800 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
