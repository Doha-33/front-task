"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageGalleryProps {
  images: string[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () =>
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="space-y-6 relative">
      {/* Main Image */}
      <div className="relative aspect-[1/1.15] bg-slate-100 rounded-[2.5rem] overflow-hidden shadow-sm">
        <Image
          src={images[activeIndex]}
          alt="Product"
          fill
          className="object-cover"
        />

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-[48px] h-[48px] bg-[#C4C4C4] backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/30 transition-all z-10"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-[48px] h-[48px] bg-[#BE968E] backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[#b18f84] transition-all z-10"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-3 gap-4">
        {images.map((img, idx) => {
          if (idx === activeIndex) return null; // مش عايزين الصورة اللي فوق تظهر تحت
          return (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className="relative aspect-square rounded-[1.5rem] overflow-hidden transition-all hover:opacity-100 opacity-70"
            >
              <Image
                src={img}
                alt={`Thumb ${idx}`}
                fill
                className="object-cover"
              />
              {idx === 3 && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-2xl font-black">
                  +2
                </div>
              )}
            </button>
          );
        })}
      </div>
      {/* Decorative Brand Icon from Mockup */}
      <div className="absolute bottom-[-55px] left-0">
        <img src="/brand.png" alt="" />
      </div>
    </div>
  );
}
