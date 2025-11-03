"use client";
import { useState } from "react";
import Image from "next/image";
import Logo from "@/components/Logo";
import Link from "next/link";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-background/90 backdrop-blur-sm border-b border-foreground/10 shadow-sm z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <Logo size={20} /> {/* Adjust size if needed */}
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            <Link
              href="/"
              className="text-accent-dark hover:text-accent transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/gallery"
              className="text-accent-dark hover:text-accent transition-colors duration-200"
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="text-accent-dark hover:text-accent transition-colors duration-200"
            >
              Contact
            </Link>
            <Link
              href="/reviews"
              className="text-accent-dark hover:text-accent transition-colors duration-200"
            >
              Reviews
            </Link>
          </nav>

          {/* Hamburger */}
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

        {/* Top dropdown overlay */}
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

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-[80vh] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/carp-4.jpg" // Replace with a high-quality wood, joinery, or workshop image
            alt="Jay Brown Carpentry workshop background"
            fill
            priority
            className="object-cover brightness-[0.75] saturate-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 py-20 text-background max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-accent mb-2 tracking-wide">
            Jay Brown Carpentry
          </h1>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
            Handcrafted Woodwork, Built to Last
          </h2>
          <p className="text-lg md:text-xl text-background/90 leading-relaxed max-w-2xl mx-auto mb-10">
            Beautifully crafted kitchens, interiors, and bespoke furniture —
            handmade in Leicester with care, precision, and pride.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-accent text-background px-8 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-accent-dark transition-all duration-300"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/gallery"
              className="border border-background/70 text-background px-8 py-3 rounded-lg text-lg font-semibold hover:bg-background/10 transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
      {/* Showcase Section */}
      <section className="mt-8 space-y-16">
        {/* Item 1 */}
        <div className="card flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto px-4">
          <div className="flex-1">
            <Image
              src="/carp-1.jpg"
              alt="Handcrafted carpentry example"
              width={600}
              height={400}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-accent-dark mb-2">
              Exceptional Quality
            </h3>
            <p className="text-muted leading-relaxed">
              Every piece is carefully handcrafted with attention to the
              smallest detail — delivering finishes that stand the test of time.
              Precision and passion define every project we take on.
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="card flex flex-col md:flex-row-reverse items-center gap-8 max-w-6xl mx-auto px-4">
          <div className="flex-1">
            <Image
              src="/carp-2.jpg"
              alt="Woodwork detail"
              width={600}
              height={400}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-accent-dark mb-2">
              Trusted Craftsmanship
            </h3>
            <p className="text-muted leading-relaxed">
              With years of experience, our carpentry work has earned the trust
              of homeowners and builders alike — from bespoke interiors to
              complete home renovations.
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="card flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto px-4 pb-20">
          <div className="flex-1">
            <Image
              src="/carp-3.jpg"
              alt="Bespoke carpentry project"
              width={600}
              height={400}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-accent-dark mb-2">
              Built to Last
            </h3>
            <p className="text-muted leading-relaxed">
              We use premium hardwoods, sustainable materials, and time-tested
              joinery methods to ensure every piece we create is not only
              beautiful but durable for generations.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-background py-20 px-4 border-t border-foreground/10">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-heading mb-10">
            What Our Customers Say
          </h3>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="bg-card-bg shadow-md rounded-xl p-6 flex flex-col items-center text-center transition-shadow hover:shadow-lg">
              <p className="text-muted italic">
                “Jay did an incredible job on our new oak staircase — every
                detail is perfect. We’ll definitely be using him again for our
                kitchen!”
              </p>
              <div className="mt-4">
                <p className="font-semibold text-accent-dark">Sarah M.</p>
                <p className="text-sm text-muted">Leicester</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-card-bg shadow-md rounded-xl p-6 flex flex-col items-center text-center transition-shadow hover:shadow-lg">
              <p className="text-muted italic">
                “Professional, reliable and excellent craftsmanship. My fitted
                wardrobes look amazing — better than I imagined.”
              </p>
              <div className="mt-4">
                <p className="font-semibold text-accent-dark">Tom W.</p>
                <p className="text-sm text-muted">Lutterworth</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-card-bg shadow-md rounded-xl p-6 flex flex-col items-center text-center transition-shadow hover:shadow-lg">
              <p className="text-muted italic">
                “From the first consultation to the final finish, Jay’s work was
                top-notch. Highly recommend for anyone needing bespoke
                carpentry.”
              </p>
              <div className="mt-4">
                <p className="font-semibold text-accent-dark">Emma L.</p>
                <p className="text-sm text-muted">Market Harborough</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent-dark text-background py-8 mt-16 text-center">
        <p className="font-medium">
          © {new Date().getFullYear()} Jay Brown Carpentry
        </p>
        <p className="text-background/80 text-sm mt-1">
          Handcrafted with care in every detail.
        </p>
      </footer>
    </main>
  );
}
