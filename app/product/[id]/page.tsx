"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ImageGallery from "./components/ImageGallery";
import ProductInfo from "./components/ProductInfo";
import ReviewSection from "./components/ReviewSection";
import SimilarItems from "./components/SimilarItems";
import { Toaster } from "@/components/ui/sonner";

const MOCK_PRODUCT = {
  id: 1,
  name: "J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With Blue",
  price: 300,
  originalPrice: 350,
  rating: 4.5,
  totalReviews: "3.0K",
  description:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy lorem ipsum dolor sit amet, diam nonummy.",
  colors: [
    { name: "Red", code: "#E11D48" },
    { name: "Blue", code: "#CBD5E1" },
    { name: "Olive", code: "#847E4D" },
    { name: "Light Blue", code: "#93C5FD" },
    { name: "Dark Gray", code: "#475569" },
  ],
  sizes: ["XS", "S", "M", "L", "XL", "2XL"],
  images: [
    "/pro11.png",
    "/pro12.png",
    "/pro13.png",
    "/pro14.png"
  ],
};

export default function ProductPage() {
  return (
    <div className="bg-white min-h-screen selection:bg-[#b18f84] selection:text-white">
      <Toaster position="top-right" />

      {/* Simplified Top Banner Branding */}
      <div
        className="bg-[#f3f4f6] py-12 text-center relative overflow-hidden"
        style={{
          backgroundImage: "url(/bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1
          className="
text-4xl md:text-5xl font-extrabold
text-transparent
absolute inset-0
flex items-center justify-center
pointer-events-none
tracking-widest
opacity-20
[-webkit-text-stroke:1px_#64748b]
"
        >
          Product Details
        </h1>
        <h2 className="relative text-2xl font-bold text-slate-900 z-10">
          Product Details
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 my-4 rounded-full">
        {/* Breadcrumbs matching mockup gray bar */}
        <nav className="flex items-center gap-3 text-[16px] font-medium tracking-widest text-slate-400 mt-4 mb-10 bg-slate-50/80 py-5 px-8 rounded-[1.5rem] border border-slate-100 shadow-sm">
          <Link href="/" className="text-slate-900 transition-colors">
            Home
          </Link>
          <ChevronRight size={24} className="text-slate-900" />
          <Link href="/shop" className="text-slate-900 transition-colors">
            Our Category
          </Link>
          <ChevronRight size={24} className="text-slate-900" />
          <span className="text-slate-300">Product Details</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24 items-start">
          {/* Left: Image Gallery */}
          <div className="lg:col-span-6">
            <ImageGallery images={MOCK_PRODUCT.images} />
          </div>

          {/* Right: Product Info */}
          <div className="lg:col-span-6 lg:sticky lg:top-24">
            <ProductInfo product={MOCK_PRODUCT} />
          </div>
        </div>

        {/* Rating & Reviews Section */}
        <ReviewSection
          rating={MOCK_PRODUCT.rating}
          totalReviews={MOCK_PRODUCT.totalReviews}
        />

        {/* Similar Items Section */}
        <SimilarItems />
      </div>
    </div>
  );
}
