"use client";

import React from "react";
import Image from "next/image";
import {
  Heart,
  ShoppingBag,
  Star,
  ChevronLeft,
  ChevronRight,
  Plus,
} from "lucide-react";

export default function SimilarItems() {
  const items = [
    {
      id: 1,
      category: "Dresses",
      name: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free",
      price: 900,
      rating: 4.5,
      img: "/p1.png",
    },
    {
      id: 2,
      category: "Dresses",
      name: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free",
      price: 900,
      oldPrice: 1300,
      rating: 4.5,
      img: "/p2.png",
      discount: "25% OFF",
    },
    {
      id: 3,
      category: "Dresses",
      name: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free",
      price: 900,
      rating: 4.5,
      img: "/p3.png",
    },
    {
      id: 4,
      category: "Dresses",
      name: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free",
      price: 900,
      oldPrice: 1300,
      rating: 4.5,
      img: "/p4.png",
      discount: "25% OFF",
    },
  ];

  return (
    <div className="mt-20 mb-20">
      <div className="flex flex-col items-start gap-4 mb-8">
        <h3 className="text-[24px] font-semibold text-[#020202]">
          Similar Items
        </h3>
        <div className="h-1 w-20 bg-[#b18f84] rounded-full" />
      </div>

      <div
        className="
  flex gap-6 overflow-x-auto pb-4
  lg:grid lg:grid-cols-4 lg:overflow-visible
"
      >
        {items.map((item) => (
          <div key={item.id} className="group space-y-6">
            <div className="relative aspect-[4/4.5] rounded-[2.5rem] bg-white overflow-hidden shadow-sm transition-all duration-500 hover:shadow-2xl">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-[2.5rem] overflow-hidden">
                <Image
                  loading="lazy"
                  src={item.img}
                  alt={item.name}
                  width={250}
                  height={350}
                  className="group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Discount Badge */}
              {item.discount && (
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm">
                  <span className="text-[10px] font-black text-[#b18f84] uppercase tracking-wider">
                    {item.discount}
                  </span>
                </div>
              )}

              {/* Action Buttons */}
              <div className="absolute top-6 right-6 flex gap-3 transition-all duration-500">
                <button className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#BE968E]">
                  <ShoppingBag size={18} />
                </button>
                <button className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#BE968E]">
                  <Heart size={18} />
                </button>
              </div>
            </div>

            <div className="px-2 space-y-3">
              <div className="flex justify-between items-center font-medium text-[12px] tracking-widest text-slate-300">
                <span className="text-[#545454]">{item.category}</span>
                <div className="flex items-center gap-1 text-[#020202]">
                  <Star size={12} fill="#BE968E" stroke="none" />
                  {item.rating}{" "}
                  <span className="text-[#545454] text-[10px] font-regular">
                    (2910)
                  </span>
                </div>
              </div>

              <h5 className="font-medium text-[#020202] text-[14px] line-clamp-2 leading-snug group-hover:text-[#BE968E] transition-colors">
                {item.name}
              </h5>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2">
                  <span className="text-[16px] font-medium text-[#020202] tracking-tighter">
                    AED {item.price}
                  </span>
                  {item.oldPrice && (
                    <span className="text-[12px] text-[#8A8A8A] line-through font-regular">
                      AED {item.oldPrice}
                    </span>
                  )}
                </div>
                <div className="flex gap-1.5">
                  {["#c7a79d", "#171717", "#e2e8f0"].map((c, i) => (
                    <div
                      key={i}
                      style={{ backgroundColor: c }}
                      className="w-[20px] h-[20px] rounded-full border border-slate-100"
                    />
                  ))}
                  <span className="text-[14px] font-medium text-[#020202]">
                    +2
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mockup Pagination Arrows */}
      <div className="flex justify-center gap-4 mt-16">
        <button className="w-14 h-14 bg-[#E8EDF2] rounded-full flex items-center justify-center text-[#020202] hover:bg-slate-100 transition-all shadow-sm">
          <ChevronLeft size={24} />
        </button>
        <button className="w-14 h-14 bg-[#BE968E] rounded-full flex items-center justify-center text-white hover:bg-[#a07e73] transition-all shadow-xl shadow-amber-900/20">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
