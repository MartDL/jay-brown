"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

const images = [
  "/IMG1.JPG",
  "/IMG2.JPG",
  "/IMG3.JPG",
  "/IMG4.JPG",
  "/IMG5.JPG",
  "/IMG6.JPG",
  "/IMG7.JPG",
  "/IMG8.JPG",
  "/IMG9.jpeg",
  "/IMG10.jpeg",
  "/IMG11.Jpeg",
  "/IMG12.png",
  "/IMG13.png",
  "/IMG14.png",
  "/IMG15.png",
];

export default function GalleryPage() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (emblaApi && open) emblaApi.scrollTo(index);
  }, [emblaApi, open, index]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <main className="relative min-h-screen bg-background text-text-primary">
      {/* Hero section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/carp-4.JPG"
          alt="Gallery background"
          fill
          className="object-cover brightness-[0.6] saturate-[1.1]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
        <div className="relative z-10 px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-background mb-4">
            Our Work in Focus
          </h1>
          <p className="text-background/90 text-lg leading-relaxed">
            From office fit outs and commercial renovations to bespoke joinery
            and interior transformations — every project is delivered with
            precision, efficiency, and a finish built to last.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold text-accent-dark mb-6">
          Commercial Fit Outs, Joinery & Renovations
        </h2>
        <p className="text-muted leading-relaxed text-lg">
          Explore a selection of recent projects including office fit outs,
          shopfitting, bespoke joinery, commercial installations, and specialist
          renovation works. Each image reflects the care, planning, and
          attention to detail we bring — using modern materials and proven
          methods to deliver professional results.
        </p>
      </section>

      {/* Image grid */}
      <section className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto px-6 pb-20">
        {images.map((src, i) => (
          <div key={i}>
            <Image
              src={src}
              alt={`Gallery image ${i + 1}`}
              width={600}
              height={400}
              className="rounded-lg shadow-md cursor-pointer hover:opacity-80 transition"
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
            />
          </div>
        ))}
      </section>

      {/* Lightbox modal */}
      {open && (
        <div
          className="fixed inset-0 bg-black/85 flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {images.map((src, i) => (
                  <div
                    key={i}
                    className="flex-[0_0_100%] flex items-center justify-center min-h-[70vh]"
                  >
                    <Image
                      src={src}
                      alt=""
                      width={900}
                      height={600}
                      className="rounded-xl object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Controls */}
            <button
              onClick={scrollPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl font-bold hover:text-accent transition"
            >
              ‹
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl font-bold hover:text-accent transition"
            >
              ›
            </button>

            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-white text-2xl font-bold"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
