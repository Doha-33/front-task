"use client";

import React from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ReviewSectionProps {
  rating: number;
  totalReviews: string;
}

export default function ReviewSection({
  rating,
  totalReviews,
}: ReviewSectionProps) {
  return (
    <div className="mt-32 pt-20 border-t border-slate-100">
      <div className="flex flex-col items-start gap-4 mb-8">
        <h3 className="text-[24px] font-semibold text-[#020202]">
          Rating & Reviews
        </h3>
        <div className="h-1 w-20 bg-[#b18f84] rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
        <div className="lg:col-span-3 flex flex-col items-center border-r border-slate-50">
          <div className="flex items-baseline gap-2">
            <span className="text-[120px] font-medium text-[#020202] tracking-tighter">
              4,5
            </span>
            <span className="text-[24px] font-medium text-[#B0B0B0]">/5</span>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-4 px-8">
          {[5, 4, 3, 2, 1].map((stars) => (
            <div key={stars} className="flex items-center gap-6">
              <div className="flex items-center gap-2 w-10">
                <Star size={24} fill="#BE968E" stroke="none" />
                <span className="text-[#020202] text-[20px]">{stars}</span>
              </div>
              <div className="flex-1 h-2 bg-[#E6E6E6] rounded-full overflow-hidden shadow-inner">
                <div
                  className="h-full bg-[#BE968E] rounded-full"
                  style={{
                    width:
                      stars === 5
                        ? "67%"
                        : stars === 4
                          ? "15%"
                          : stars === 3
                            ? "6%"
                            : stars === 2
                              ? "3%"
                              : "9%",
                  }}
                />
              </div>
              <div className="w-12 text-right text-[#020202]">
                %
                {stars === 5
                  ? "67"
                  : stars === 4
                    ? "15"
                    : stars === 3
                      ? "6"
                      : stars === 2
                        ? "3"
                        : "9"}
              </div>
            </div>
          ))}
        </div>

        <div className="hidden lg:col-span-4 lg:block text-center space-y-4">
          <p className="text-[16px] text-[#545454] font-regular">
            Total Reviews
          </p>
          <div className="text-[60px] font-semibold text-[#020202] tracking-tighter">
            {totalReviews}
          </div>
          <Button className="h-[56px] px-10 bg-[#BE968E] hover:bg-[#a07e73] text-white rounded-2xl font-medium text-lg shadow-sm shadow-amber-900/20 transition-all hover:scale-[1.02]">
            Add Comment
          </Button>
        </div>
      </div>

      <div className="relative mt-24 space-y-16 max-w-5xl">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="pb-12 border-b-2 border-slate-50 last:border-0 group"
          >
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-4">
                <h4 className="text-[20px] font-semibold text-[#000000]">
                  Alex Daewn
                </h4>
                <div className="flex gap-1 text-amber-400">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      fill={s <= 4 ? "#BE968E" : "#e4d4d1"}
                      stroke={s <= 4 ? "none" : "none"}
                      size={18}
                    />
                  ))}
                </div>
              </div>
              <span className="text-[14px] text-[#545454] font-medium tracking-widest">
                4 months ago
              </span>
            </div>
            <p className="text-[#020202] text-[16px] leading-relaxed font-regular">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        ))}
        {/* Decorative Brand Icon from Mockup */}
        <div className="absolute bottom-[25px] left-0">
          <img src="/brand.png" alt="" />
        </div>
        <div className="flex justify-center pt-8">
          <button className="bg-[#F5F5F5] text-[#BE968E] px-12 py-4 rounded-2xl font-semibold text-[14px] transition-all">
            View More Comments
          </button>
        </div>
      </div>
    </div>
  );
}
