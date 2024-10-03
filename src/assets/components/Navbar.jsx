import React, { useEffect, useState } from "react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Scroll effect: Adds/removes 'scrolled' class when window is scrolled.
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`navbar fixed text-white w-full top-0 z-50 h-24 px-4 py-8 transition-all duration-500 ${
        isScrolled ? "bg-gray-900 bg-opacity-100 " : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="#">
            <img
              src={'/images/logo10.png'}
              alt="Brand Logo"
              className="w-28"
            />
          </a>
          {/* <a href="#">BrandLogo</a> */}
        </div>
        <ul className={`hidden md:flex space-x-8 mr-24 ${isOpen ? "block" : ""}`}>
          <li>
            <a href="#" className="hover:text-yellow-400 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400 transition">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400 transition">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400 transition">
              Contact
            </a>
          </li>
        </ul>
        <div
          className="md:hidden flex flex-col justify-between h-6 w-8 cursor-pointer"
          onClick={toggleMenu}
        >
          <span
            className={`h-1 w-full ${isScrolled ? "bg-white" : "bg-black"}`}
          ></span>
          <span
            className={`h-1 w-full ${isScrolled ? "bg-white" : "bg-black"}`}
          ></span>
          <span
            className={`h-1 w-full ${isScrolled ? "bg-white" : "bg-black"}`}
          ></span>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="top-0 right-0 h-screen items-center justify-center md:hidden flex flex-col space-y-4 mt-4 bg-gray-900 p-4 text-center">
          <li>
            <a
              href="#"
              className="text-white my-5 hover:text-yellow-400 transition"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white my-5 hover:text-yellow-400 transition"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white my-5 hover:text-yellow-400 transition"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white my-5 hover:text-yellow-400 transition"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white my-5 hover:text-yellow-400 transition"
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
