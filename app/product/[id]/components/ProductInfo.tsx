"use client";

import React, { useState } from "react";
import { ShoppingBag, Heart, ChevronDown, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ProductInfoProps {
  product: {
    name: string;
    price: number;
    originalPrice: number;
    description: string;
    colors: { name: string; code: string }[];
    sizes: string[];
  };
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const [selectedSize, setSelectedSize] = useState("2XL");
  const [selectedColor, setSelectedColor] = useState("#CBD5E1");
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    toast.success("Added to Bag", {
      description: `${product.name} has been added.`,
      style: { backgroundColor: "#b18f84", color: "#fff" },
    });
  };

  return (
    <div className="space-y-1">
      {/* Top section: Category and Actions */}
      <div className="flex justify-between items-start">
        <div className="space-y-4">
          <span className="inline-block bg-white text-[#BE968E] text-[14px] font-medium px-6 py-2 rounded-full tracking-widest border border-[#BE968E] shadow-sm">
            T-Shirt
          </span>
          <h1 className="text-[24px] font-medium font-500 text-slate-900">
            {product.name}
          </h1>
        </div>

        <div className="flex gap-3">
          <button className="w-12 h-12 rounded-2xl border border-[#BE968E] bg-white flex items-center justify-center transition-all shadow-sm">
            <div className="relative">
              <img src="/icons/bag-add.png" alt="Share" />
            </div>
          </button>
          <button className="w-12 h-12 rounded-2xl border border-[#BE968E] bg-white flex items-center justify-center text-[#BE968E] transition-all shadow-sm">
            <Heart size={22} />
          </button>
        </div>
      </div>

      {/* Pricing */}
      <div className="mb-2">
        <div className="flex items-center gap-2">
          <span className="text-[20px] font-medium text-[#020202] tracking-tighter">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-[16px] text-[#8A8A8A] line-through font-regular">
            ${product.originalPrice.toFixed(2)}
          </span>
        </div>
        <p className="text-[12px] font-regular text-[#333333]">
          This price is exclusive of taxes.
        </p>
      </div>

      {/* Description */}
      <p className="text-black-500 text-[14px] leading-relaxed font-regular pb-4 mb-2 border-b border-slate-50">
        {product.description}
      </p>

      {/* Selection Fields */}
      <div className="space-y-2 mb-6">
        {/* TYPE */}
        <div className="space-y-2">
          <label className="text-[12px] font-regular text-[#020202] tracking-widest">
            Type
          </label>

          <div className="relative w-full">
            <select
              className="
      w-full
      appearance-none
      bg-white
      border border-slate-200
      rounded-lg
      px-5 pr-12 py-3
      text-sm font-medium text-slate-900
      focus:outline-none
      focus:ring-2 focus:ring-[#b18f84]/20
      transition
    "
            >
              <option>Cotton</option>
            </select>

            <ChevronDown
              size={16}
              className="
      absolute
      right-4
      top-1/2
      -translate-y-1/2
      text-[#020202]
      pointer-events-none
    "
            />
          </div>
        </div>

        {/* SIZE */}
        <div className="space-y-2">
          <label className="text-[12px] font-regular text-[#020202] tracking-widest">
            Size
          </label>

          <div className="relative w-full">
            <select
              className="
      w-full
      appearance-none
      bg-white
      border border-slate-200
      rounded-lg
      px-5 pr-12 py-3
      text-sm font-medium text-slate-900
      focus:outline-none
      focus:ring-2 focus:ring-[#b18f84]/20
      transition
    "
            >
              {product.sizes.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>

            <ChevronDown
              size={16}
              className="
      absolute
      right-4
      top-1/2
      -translate-y-1/2
      text-[#020202]
      pointer-events-none
    "
            />
          </div>
        </div>
      </div>

      {/* Color Selection */}
      <div className="space-y-4">
        <label className="text-[20px] font-medium text-[#020202] tracking-widest block">
          Colors
        </label>
        <div className="flex gap-5 items-center">
          {product.colors.map((color) => (
            <div key={color.code} className="flex flex-col items-center">
              <div
                className={`relative w-[60px] h-[60px] bg-[#F4F7F9] rounded-full mb-4 ${selectedColor === color.code ? "ring-2 ring-slate-900" : ""}`}
              >
                <button
                  onClick={() => setSelectedColor(color.code)}
                  style={{ backgroundColor: color.code }}
                  className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[32px] h-[32px] rounded-full transition-all `}
                />
              </div>
              {selectedColor === color.code && (
                <span
                  className="text-[10px] font-medium tracking-widest"
                  style={{ color: color.code }}
                >
                  {color.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Quantity and Price Bar matching mockup exactly */}
      <div className="pt-8 border-t border-slate-50 space-y-4">
        <p className="text-[20px] font-medium text-[#020202]">
          Quantity{" "}
          <span className="text-[#8A8A8A] text-[16px] font-regular ml-2">
            ($300.00 for Piece)
          </span>
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="flex items-center bg-slate-50/80 rounded-2xl p-2 border border-slate-100 w-full h-[56px] sm:w-auto">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-slate-400 hover:text-slate-900 transition-colors font-bold text-xl"
            >
              －
            </button>
            <span className="px-8 text-[24] font-medium text-slate-900 min-w-[4rem] text-center">
              {quantity.toString().padStart(2, "0")}
            </span>
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-slate-400 hover:text-slate-900 transition-colors font-bold text-xl"
            >
              ＋
            </button>
          </div>
          <span className="text-[24] font-medium text-slate-900 pr-4">
            ${(product.price * quantity).toFixed(2)}
          </span>
          <Button
            onClick={handleAddToCart}
            className="w-full h-[56px] sm:flex-1 bg-[#BE968E] hover:bg-[#a07e73] text-white rounded-2xl font-medium text-lg shadow-sm shadow-amber-900/20 flex items-center justify-center gap-3 transition-all hover:scale-[1.02]"
          >
            Add To Cart <ShoppingBag size={24} className="opacity-40" />
          </Button>
        </div>
      </div>
    </div>
  );
}
