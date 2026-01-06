"use client";
import { useState } from "react";
import Image from "next/image";
import Logo from "@/components/Logo";
import Link from "next/link";
import LogoWithName from "@/components/LogoWithName";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-background/90 backdrop-blur-sm border-b border-foreground/10 shadow-sm z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <LogoWithName size={64} />
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
            {["Home", "Gallery", "Contact", "Reviews"].map((label, i) => (
              <li key={label}>
                <Link
                  href={["/", "/gallery", "/contact", "/reviews"][i]}
                  className="hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
      {/* Hero Section */}
      <section className="relative min-h-[55vh] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/carp-4.JPG"
            alt="JB Shopfitting and Construction"
            fill
            priority
            className="object-cover brightness-[0.75] saturate-[1.1]"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/55 to-black/80" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 px-6 py-16 text-background max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
            Transforming Retail, Office & Commercial Spaces
          </h2>

          <p className="text-lg md:text-xl text-background/90 leading-relaxed max-w-2xl mx-auto mb-10">
            With over 25 years of experience in construction and shopfitting, we
            specialise in full office fit outs, bespoke joinery, commercial
            renovations, and complete interior transformations. Every project is
            delivered with precision, efficiency, modern materials, and a finish
            built to last.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-accent text-background px-8 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-accent-dark transition-all"
            >
              Request a Consultation
            </Link>
            <a
              href="tel:+447700900123"
              className="inline-flex justify-center rounded-lg bg-accent px-6 py-3 text-background font-semibold hover:bg-accent-dark transition"
            >
              Call 07899 957 096
            </a>
            <Link
              href="/gallery"
              className="border border-background/70 text-background px-8 py-3 rounded-lg text-lg font-semibold hover:bg-background/10 transition-all"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
      {/* Services */}
      <section className="mt-8 space-y-16">
        {/* Office Fit Outs */}
        <div className="card flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto p-6">
          <div className="flex-1">
            <div className="relative h-[240px] md:h-[350px] w-full">
              <Image
                src="/IMG12.png"
                alt="Office fit outs"
                fill
                className="rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-accent-dark mb-2">
              Full Office Fit Outs
            </h3>
            <p className="text-muted leading-relaxed">
              Including plasterboard partitions, fire-rated partitions, glass
              partitions, bespoke desk dividers, office segregation solutions,
              and suspended ceilings. Designed to create modern, functional,
              safe working environments.
            </p>
          </div>
        </div>

        {/* Joinery */}
        <div className="card flex flex-col md:flex-row-reverse items-center gap-8 max-w-6xl mx-auto p-6">
          <div className="flex-1">
            <Image
              src="/IMG8.JPG"
              alt="Joinery services"
              width={600}
              height={400}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-accent-dark mb-2">
              Bespoke Joinery & Commercial Installations
            </h3>
            <p className="text-muted leading-relaxed">
              Kitchens, bespoke counters, bars, desks, wall panelling, hygienic
              commercial-grade PVC cladding, fire doors and frames, skirting,
              architrave, trims, and decorative paneling — all crafted with
              precision and long-lasting materials.
            </p>
          </div>
        </div>

        {/* Construction & Renovation */}
        <div className="card flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto p-6 mb-4">
          <div className="flex-1">
            <Image
              src="/IMG5.JPG"
              alt="Construction and renovation"
              width={600}
              height={400}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-accent-dark mb-2">
              Commercial Renovation & Specialist Works
            </h3>
            <p className="text-muted leading-relaxed">
              Including aluminium chequer plate protection, impact-resistant PVC
              panelling, concrete plinth bases and repairs, steel security
              doors, epoxy floor coatings, and bund coatings. Ideal for
              commercial, manufacturing, and sterile environments.
            </p>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="bg-background py-18 px-4 border-t border-foreground/10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-heading mb-6">
            Over 25 Years of Experience
          </h3>

          <p className="text-muted leading-relaxed text-lg">
            We pride ourselves on delivering a wide scope of construction and
            shopfitting services — from office fit outs to full commercial
            renovation projects. We work closely with customers to design and
            build modern, usable spaces using the latest materials and ideas.
            <br />
            <br />
            Our experience ensures competitive pricing with no compromise on
            quality or finish. All projects are executed with precision,
            practical planning, and forward thinking to make the entire
            experience smooth, efficient, and stress free.
            <br />
            <br />
            Safety is paramount. All staff are fully trained and competent, and
            every project includes risk assessments, planning, and management to
            safeguard both teams and customers.
            <br />
            <br />
            We have extensive experience working in aerospace engineering
            environments, understanding the need for speed, precision,
            cleanliness, and minimal disruption.
          </p>

          <p className="text-accent-dark mt-8 text-lg font-semibold">
            Contact us for a free, friendly consultation and quotation — we look
            forward to working with you.
          </p>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-accent-dark text-background py-8 text-center">
        <p className="font-medium">
          © {new Date().getFullYear()} JB Shopfitting & Construction
        </p>

        <p className="text-background/80 text-sm mt-1">
          Delivering precision, quality, and craftsmanship across every project.
        </p>

        <div className="mt-4 space-y-1 text-sm">
          <p>
            <span className="text-background/80">Phone:</span>{" "}
            <a href="tel:+447700900123" className="font-medium hover:underline">
              07899 957 096
            </a>
          </p>

          <p>
            <span className="text-background/80">Email:</span>{" "}
            <a
              href="mailto:hello@jbshopfitting.co.uk"
              className="font-medium hover:underline"
            ></a>
          </p>

          <p className="text-background/70">Leicester & surrounding areas</p>
        </div>
      </footer>
    </main>
  );
}
