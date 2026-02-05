"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ShoppingBag,
  Bell,
  Heart,
  User,
  Menu,
  X,
  ChevronDown,
  LogOut,
  Settings,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const name = localStorage.getItem("user_name");
    if (name) setUserName(name);
  }, []);

  const navLinks = [
    { name: "Home", href: "/", icon: "/icons/home.svg" },
    { name: "Our Category", href: "/shop", icon: "/icons/dash.svg" },
    { name: "About Us", href: "/about", icon: "/icons/about.svg" },
    { name: "Contact Us", href: "/contact", icon: "/icons/contact.svg" },
    { name: "FAQs", href: "/faqs", icon: "/icons/faq.svg" },
  ];

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex justify-between items-center gap-10">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2">
              <Link href="/" className="flex items-center gap-2">
                <img loading="lazy" src="/Group.png" alt="TinyTales Logo" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-10 items-center">
              {navLinks.map((link) => (
                <div className="flex items-center gap-2">
                  <img loading="lazy" src={link.icon} alt="" />
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm text-[#8A8A8A]"
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
            </nav>
          </div>

          {/* Utility Icons */}
          <div className="flex items-center gap-1 sm:gap-4">
            <button className="p-2 text-slate-400 hover:text-slate-900 transition-colors hidden sm:block">
              <img loading="lazy" src="/icons/bag.svg" alt="" />
            </button>
            <button className="p-2 text-slate-400 hover:text-slate-900 transition-colors hidden sm:block relative">
              <img loading="lazy" src="/icons/notification.svg" alt="" />
            </button>
            <button className="p-2 text-slate-400 hover:text-slate-900 transition-colors hidden sm:block">
              <img loading="lazy" src="/icons/fav.png" alt="" />
            </button>

            <button className="hidden lg:flex items-center gap-1 text-sm text-black hover:text-slate-900 transition-colors group px-2">
              <span className="uppercase tracking-widest">EN</span>
              <ChevronDown
                size={14}
                className="group-hover:rotate-180 transition-transform"
              />
            </button>

            {userName ? (
              <div className="hidden lg:flex items-center gap-3 pl-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center gap-2 outline-none group">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#b18f84] to-[#c7a79d] flex items-center justify-center font-bold text-white shadow-lg shadow-amber-900/10 group-hover:scale-105 transition-transform">
                        {userName.substring(0, 1)}
                      </div>
                      <ChevronDown
                        size={14}
                        className="text-slate-400 group-hover:text-slate-900 transition-colors"
                      />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="w-56 rounded-xl p-2 mt-2"
                  >
                    <DropdownMenuLabel className="px-3 py-2">
                      <p className="text-sm font-bold text-slate-900">
                        {userName}
                      </p>
                      <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">
                        Verified Account
                      </p>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="rounded-lg gap-3 py-3 cursor-pointer">
                      <User size={16} /> My Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem className="rounded-lg gap-3 py-3 cursor-pointer">
                      <Settings size={16} /> Settings
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={handleLogout}
                      className="rounded-lg gap-3 py-3 text-rose-500 focus:text-rose-500 cursor-pointer"
                    >
                      <LogOut size={16} /> Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <Link
                href="/login"
                className="flex items-center gap-2 pl-2 group"
              >
                <img loading="lazy" src="/icons/man.svg" alt="" />
                <ChevronDown
                  size={14}
                  className="group-hover:rotate-180 transition-transform"
                />
              </Link>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-slate-500"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 animate-in slide-in-from-top-4 duration-300">
          <div className="px-4 pt-4 pb-8 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-lg font-bold text-slate-900 border-b border-slate-50 pb-2"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex gap-6 pt-6 px-2">
              <ShoppingBag size={24} className="text-slate-400" />
              <Bell size={24} className="text-slate-400" />
              <Heart size={24} className="text-slate-400" />
            </div>
            {userName && (
              <button
                onClick={handleLogout}
                className="w-full text-left font-bold text-rose-500 pt-4 flex items-center gap-2"
              >
                <LogOut size={18} /> Logout {userName}
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
