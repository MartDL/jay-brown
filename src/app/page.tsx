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
            <Logo size={20} />
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

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/carp-4.jpg"
            alt="Commercial shopfitting and construction"
            fill
            priority
            className="object-cover brightness-[0.75] saturate-[1.1]"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/40 to-black/70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 px-6 py-20 text-background max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-accent mb-2 tracking-wide">
            JB Shopfitting & Construction
          </h1>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
            Transforming Retail & Commercial Spaces
          </h2>
          <p className="text-lg md:text-xl text-background/90 leading-relaxed max-w-2xl mx-auto mb-10">
            Specialists in bespoke shopfitting, commercial interiors, and
            construction — delivering precision, reliability, and a finish that
            reflects your brand’s quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-accent text-background px-8 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-accent-dark transition-all duration-300"
            >
              Request a Consultation
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

      {/* Services / Showcase */}
      <section className="mt-8 space-y-16">
        {/* Section 1 */}
        <div className="card flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto px-4">
          <div className="flex-1">
            <Image
              src="/carp-1.jpg"
              alt="Retail shopfitting example"
              width={600}
              height={400}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-accent-dark mb-2">
              Precision Retail Fit-Outs
            </h3>
            <p className="text-muted leading-relaxed">
              From boutique stores to large retail chains, we deliver
              high-quality fit-outs designed to impress customers and withstand
              everyday use. Our team manages every detail from start to finish —
              on time and within budget.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="card flex flex-col md:flex-row-reverse items-center gap-8 max-w-6xl mx-auto px-4">
          <div className="flex-1">
            <Image
              src="/carp-2.jpg"
              alt="Commercial interior joinery"
              width={600}
              height={400}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-accent-dark mb-2">
              Commercial Interiors & Joinery
            </h3>
            <p className="text-muted leading-relaxed">
              We craft and install bespoke joinery, counters, and display units
              tailored to your brand identity. Our interiors combine modern
              design with durable materials for a professional and welcoming
              customer experience.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="card flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto px-4 pb-20">
          <div className="flex-1">
            <Image
              src="/carp-3.jpg"
              alt="Construction and refurbishment project"
              width={600}
              height={400}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-accent-dark mb-2">
              Construction & Refurbishment
            </h3>
            <p className="text-muted leading-relaxed">
              Whether it’s a full commercial build, structural refurbishment, or
              an interior transformation, we bring together skilled trades and
              meticulous project management to deliver dependable results.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-background py-20 px-4 border-t border-foreground/10">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-heading mb-10">
            What Our Customers Say
          </h3>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-card-bg shadow-md rounded-xl p-6 flex flex-col items-center text-center transition-shadow hover:shadow-lg">
              <p className="text-muted italic">
                “JB Shopfitting completely transformed our retail space —
                professional from start to finish. The workmanship and attention
                to detail are outstanding.”
              </p>
              <div className="mt-4">
                <p className="font-semibold text-accent-dark">Sarah M.</p>
                <p className="text-sm text-muted">Leicester</p>
              </div>
            </div>

            <div className="bg-card-bg shadow-md rounded-xl p-6 flex flex-col items-center text-center transition-shadow hover:shadow-lg">
              <p className="text-muted italic">
                “Reliable, skilled, and efficient. The JB team fitted out our
                café beautifully and managed everything seamlessly — highly
                recommended.”
              </p>
              <div className="mt-4">
                <p className="font-semibold text-accent-dark">Tom W.</p>
                <p className="text-sm text-muted">Lutterworth</p>
              </div>
            </div>

            <div className="bg-card-bg shadow-md rounded-xl p-6 flex flex-col items-center text-center transition-shadow hover:shadow-lg">
              <p className="text-muted italic">
                “Outstanding results on our office refurbishment. Great
                communication throughout and delivered exactly as promised.”
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
          © {new Date().getFullYear()} JB Shopfitting & Construction
        </p>
        <p className="text-background/80 text-sm mt-1">
          Delivering precision, quality, and craftsmanship across every project.
        </p>
      </footer>
    </main>
  );
}
