"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  const icons = [
    "/icons/Facebook.svg",
    "/icons/Vector.svg",
    "/icons/Vector (1).svg",
    "/icons/Vector (2).svg",
    "/icons/combo shape.svg",
    "/icons/Vector (3).svg",
  ];
  return (
    <footer
      className="
  relative w-full
  text-white
  -mt-16
  overflow-hidden
  py-16 md:py-20
"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/footerbg.jpg)" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#020202B2]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4 space-y-8">
          <img loading="lazy" src="/logo.png" alt="Logo" />
          <p className="text-[#FFFFFFB2] text-[14px] leading-relaxed max-w-sm font-medium">
            Ipsam in eos qui consequatur ab cum maxime.Soluta dolor quae Ipsam
            in eos qui consequatur ab .Soluta dolor quae Ipsam in eos
            quconsequatur ab cum maxime.Soluta dolor quae
          </p>
        </div>

        <div className="lg:col-span-4 grid grid-cols-2 gap-8">
          <div className=" space-y-8">
            <h4 className="text-[24px] font-semibold">Let Us Help</h4>
            <ul className="space-y-2 text-white opacity-70 text-[16px] font-medium">
              {["My Account", "FAQs", "Categories", "All Products"].map((i) => (
                <li key={i}>
                  <Link href="#" className="hover:text-white transition">
                    {i}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className=" space-y-8">
            <h4 className="text-[24px] font-semibold">Policies</h4>
            <ul className="space-y-2 text-[#FFFFFFB2] text-[16px] font-medium">
              {[
                "Refund Policy",
                "About Us",
                "Cancellation Policy",
                "Terms and Conditions",
                "Privacy Policy",
              ].map((i) => (
                <li key={i}>
                  <Link href="#" className="hover:text-white transition">
                    {i}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="lg:col-span-4 space-y-8">
          <h4 className="text-[24px] font-semibold">Send Email</h4>

          <div className="flex p-2 bg-white rounded-2xl">
            <input
              type="text"
              placeholder="Email address"
              className="flex-1 bg-transparent px-4 py-3 text-slate-900 text-sm outline-none placeholder:text-slate-400"
            />
            <button className="bg-[#BE968E] hover:bg-[#a07e73] text-white px-8 rounded-xl font-semibold text-sm transition">
              Send
            </button>
          </div>

          <div className="space-y-4">
            <p className="text-[16px] font-semibold">Follow Us</p>
            <div className="flex gap-4">
              {icons.map((Icon, idx) => (
                <Link key={idx} href="#">
                  <img
                    loading="lazy"
                    src={Icon}
                    alt="social"
                    className="w-6 h-6 hover:opacity-80 transition"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
