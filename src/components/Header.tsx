"use client";

import { useState } from "react";
import Link from "next/link";
import LogoWithName from "./LogoWithName";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-background/90 backdrop-blur-sm border-b border-foreground/10 shadow-sm z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <LogoWithName size={64} />
        </div>

        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <Link
            href="/"
            className="text-accent-dark hover:text-accent transition-colors"
          >
            Home
          </Link>
          <Link
            href="/gallery"
            className="text-accent-dark hover:text-accent transition-colors"
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className="text-accent-dark hover:text-accent transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/reviews"
            className="text-accent-dark hover:text-accent transition-colors"
          >
            Reviews
          </Link>
        </nav>

        {/* Hamburger (mobile) */}
        <button
          className="flex flex-col justify-between w-8 h-6 md:hidden group"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`h-1 w-full rounded transition-all duration-300 ${
              isOpen
                ? "rotate-45 translate-y-2 bg-accent-dark"
                : "bg-accent group-hover:bg-accent-dark"
            }`}
          />
          <span
            className={`h-1 w-full rounded transition-all duration-300 ${
              isOpen
                ? "opacity-0"
                : "bg-accent group-hover:bg-accent-dark opacity-100"
            }`}
          />
          <span
            className={`h-1 w-full rounded transition-all duration-300 ${
              isOpen
                ? "-rotate-45 -translate-y-2 bg-accent-dark"
                : "bg-accent group-hover:bg-accent-dark"
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`absolute left-0 w-full bg-background/95 backdrop-blur-sm shadow-md transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-6 text-sm font-medium">
          <li>
            <Link
              href="/"
              className="hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/gallery"
              className="hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/reviews"
              className="hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
