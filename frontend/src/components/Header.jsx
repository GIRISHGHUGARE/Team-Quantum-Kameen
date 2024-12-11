import React, { useState } from "react";
import SustainHerLogo from "./../assets/SustainHerLogo.png"

const Header = () => {
    // State for mobile menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // State for "Services" dropdown in mobile view
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full px-6 flex items-center justify-between z-50 bg-white bg-opacity-5 backdrop-blur-lg shadow-lg border-b border-white/10">
            {/* Logo */}
            <div className="text-xl font-bold text-grey">
                <a href="#"><img src={SustainHerLogo} alt="logo" className="h-[100px] w-[100px] ml-[70px]" /></a>
            </div>

            {/* Center Options (Desktop) */}
            <nav className="hidden md:flex space-x-8 relative ml-20">
                <a
                    href="#home"
                    className="text-creme font-semibold text-xl hover:text-olive hover:font-extrabold hover:underline transition"
                >
                    Home
                </a>
                <a
                    href="#about"
                    className="text-creme font-semibold text-xl hover:text-olive hover:font-extrabold transition"
                >
                    About
                </a>

                {/* Services with Dropdown (Desktop) */}
                <div
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                >
                    <a
                        href="#services"
                        className="text-creme font-semibold text-xl hover:text-olive hover:font-extrabold transition"
                    >
                        Services
                    </a>
                    {isServicesOpen && (
                        <div className="absolute left-0 mt-2 w-48 bg-white bg-opacity-50 shadow-lg rounded-lg flex flex-col">
                            <a
                                href="#courses"
                                className="px-4 py-2 text-brown hover:bg-creme hover:text-gray-800 transition"
                            >
                                Courses
                            </a>
                            <a
                                href="#microloans"
                                className="px-4 py-2 text-brown hover:bg-creme hover:text-gray-800 transition"
                            >
                                Microloans
                            </a>
                            <a
                                href="#marketplace"
                                className="px-4 py-2 text-brown hover:bg-creme hover:text-gray-800 transition"
                            >
                                Marketplace
                            </a>
                            <a
                                href="#community"
                                className="px-4 py-2 text-brown hover:bg-creme hover:text-gray-800 transition"
                            >
                                Community
                            </a>
                        </div>
                    )}
                </div>
                <a
                    href="#contact"
                    className="text-creme font-semibold text-xl hover:text-olive hover:font-extrabold transition"
                >
                    Contact
                </a>
            </nav>

            {/* Right Buttons */}
            <div className="hidden md:flex space-x-4">
                {/* Login and Signup Buttons (Desktop view)*/}
                <button
                    class="relative flex items-center gap-2 px-4 py-3 rounded-md min-h-[2.4em] min-w-[3em] text-[18px] tracking-[0.05em] leading-none font-bold text-[hsla(0,0%,90%)] border-none transition-all duration-100 ease-[cubic-bezier(0.22,0.61,0.36,1)] 
  shadow-[inset_0.4px_1px_4px_hsla(0,0%,50%,0.8)] bg-gradient-to-br from-olive to-brown
  hover:shadow-[inset_0.4px_1px_4px_hsla(0,0%,50%,1),2px_4px_8px_rgba(0,0,0,0.295)] hover:scale-110 hover:text-shadow-[0px_0px_10px_rgba(255,255,255,0.4)] 
  active:shadow-[inset_0.4px_1px_8px_hsla(0,0%,50%,1),0px_0px_8px_hsla(240,40%,50%,0.6)] active:text-shadow-[0px_0px_20px_rgba(255,255,255,1)] active:text-white active:tracking-[0.1em] active:scale-100"
                >
                    Login
                </button>
                <button class="relative inline-block text-center font-bold text-[18px] tracking-[2px] px-5 py-3 border-3 border-white rounded-md shadow-lg shadow-white/10 text-grey transition-all duration-300 hover:text-white focus:text-white focus:outline-none overflow-hidden hover:shadow-[inset_0.4px_1px_4px_hsla(0,0%,50%,1),2px_4px_8px_rgba(0,0,0,0.295)] hover:scale-110 hover:text-shadow-[0px_0px_10px_rgba(255,255,255,0.4)] ">
                    Signup
                </button>
            </div>

            {/* Mobile view */}
            <div className=" md:hidden flex ml-[200px] space-x-2">
                {/* Login and Signup Buttons (Mobile view)*/}
                <button
                    class="relative flex items-center gap-2 px-4 py-3 rounded-md min-h-[2.4em] min-w-[3em] text-[18px] tracking-[0.05em] leading-none font-bold text-[hsla(0,0%,90%)] border-none transition-all duration-100 ease-[cubic-bezier(0.22,0.61,0.36,1)] 
  shadow-[inset_0.4px_1px_4px_hsla(0,0%,50%,0.8)] bg-gradient-to-br from-olive to-brown
  hover:shadow-[inset_0.4px_1px_4px_hsla(0,0%,50%,1),2px_4px_8px_rgba(0,0,0,0.295)] hover:scale-110 hover:text-shadow-[0px_0px_10px_rgba(255,255,255,0.4)] 
  active:shadow-[inset_0.4px_1px_8px_hsla(0,0%,50%,1),0px_0px_8px_hsla(240,40%,50%,0.6)] active:text-shadow-[0px_0px_20px_rgba(255,255,255,1)] active:text-white active:tracking-[0.1em] active:scale-100"
                >
                    Login
                </button>
                <button class="relative inline-block text-center font-bold text-[18px] tracking-[2px] px-5 py-3 border-2 border-grey rounded-md shadow-lg shadow-black/10 text-olive transition-all duration-300 hover:text-white focus:text-white focus:outline-none overflow-hidden hover:shadow-[inset_0.4px_1px_4px_hsla(0,0%,50%,1),2px_4px_8px_rgba(0,0,0,0.295)] hover:scale-110 hover:text-shadow-[0px_0px_10px_rgba(255,255,255,0.4)] ">
                    Signup
                </button>
            </div>

            {/* Mobile Hamburger Menu */}
            <div className="relative md:hidden">
                <button
                    className="text-xl p-2 text-creme font-semibold hover:font-extrabold hover:bg-grey hover:border-slate-200 hover:rounded-xl transition"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    ☰
                </button>

                {/* Dropdown Menu (Mobile) */}
                {isMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white bg-opacity-50 shadow-lg rounded-lg flex flex-col">
                        <a
                            href="#home"
                            className="px-4 py-2 text-brown hover:bg-creme hover:text-gray-800 transition"
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            className="px-4 py-2 text-brown hover:bg-creme hover:text-gray-800 transition"
                        >
                            About
                        </a>

                        {/* Services with Nested Dropdown (Mobile) */}
                        <div>
                            <button
                                className="w-full text-left px-4 py-2 text-brown hover:bg-creme hover:text-gray-800 transition"
                                onClick={() => setIsServicesOpen(!isServicesOpen)}
                            >
                                Services
                            </button>
                            {isServicesOpen && (
                                <div className="ml-4 mt-2 flex flex-col">
                                    <a
                                        href="#courses"
                                        className="px-4 py-2 text-brown hover:bg-creme hover:text-gray-800 transition"
                                    >
                                        Courses
                                    </a>
                                    <a
                                        href="#microloans"
                                        className="px-4 py-2 text-brown hover:bg-creme hover:text-gray-800 transition"
                                    >
                                        Microloans
                                    </a>
                                    <a
                                        href="#marketplace"
                                        className="px-4 py-2 text-brown hover:bg-creme hover:text-gray-800 transition"
                                    >
                                        Marketplace
                                    </a>
                                    <a
                                        href="#community"
                                        className="px-4 py-2 text-brown hover:bg-creme hover:text-gray-800 transition"
                                    >
                                        Community
                                    </a>
                                </div>
                            )}
                        </div>

                        <a
                            href="#contact"
                            className="px-4 py-2 text-brown hover:bg-creme hover:text-gray-800 transition"
                        >
                            Contact
                        </a>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
