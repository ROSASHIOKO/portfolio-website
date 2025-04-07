"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navlinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="relative top-auto right-0 left-0 z-auto bg-gray-500 bg-opacity-100">
      <div className="flex items-center justify-between px-4 py-2">
        <Link href="/" className="text-2xl md:text-5xl text-black font-semibold">
          LOGO
        </Link>
        <div className="mobile-menu block md:hidden">
          {navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              aria-label="Close menu"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              aria-label="Open menu"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div
          className={`menu ${navbarOpen ? "block" : "hidden"} md:block md:w-auto`}
          id="navbar"
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 items-end p-4 md:p-0">
            {navlinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;