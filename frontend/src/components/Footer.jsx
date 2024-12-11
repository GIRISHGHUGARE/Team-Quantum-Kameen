import React from "react";
import SustainHerLogo from "./../assets/SustainHerLogo.png";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-brown to-olive text-white mt-[100px] py-6">
      <div className="container mx-auto">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <a href="#">
              <img src={SustainHerLogo} alt="Logo" className="h-30 w-40" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <h3 className="text-lg font-semibold">QUICK LINKS</h3>
              <ul>
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">About us</a></li>
                <li><a href="#" className="hover:underline">Services</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">LEGAL</h3>
              <ul>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Terms &amp; Conditions</a></li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-4 border-gray-700" />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <p className="text-sm text-gray-400">
            &copy; 2024 SustainHer™. All rights reserved.
          </p>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <a href="#" className="text-brown hover:text-white">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-brown hover:text-white">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-brown hover:text-white">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
