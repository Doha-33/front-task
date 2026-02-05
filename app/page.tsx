'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ShoppingBag, ArrowRight, Star, Heart, TrendingUp, Sparkles, ChevronRight } from 'lucide-react'

const CURATED_PRODUCTS = [
  {
    id: 1,
    category: 'Man Shirts',
    name: 'J.VER Long Sleeve Stretch Wrinkle-Free Shirt',
    price: 300,
    oldPrice: 350,
    rating: 4.5,
    reviews: 250,
    image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=600',
    colors: ['#CBD5E1', '#E11D48', '#847E4D']
  },
  {
    id: 2,
    category: 'Kids Wear',
    name: 'Winter Collection Polar Hoodie - Red Edition',
    price: 180,
    oldPrice: 220,
    rating: 4.9,
    reviews: 120,
    image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&q=80&w=600',
    colors: ['#E11D48', '#475569']
  },
  {
    id: 3,
    category: 'Summer Essentials',
    name: 'Premium Cotton Blend Tee - Sky Blue',
    price: 90,
    oldPrice: 120,
    rating: 4.2,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=600',
    colors: ['#93C5FD', '#CBD5E1']
  },
  {
    id: 4,
    category: 'Dresses',
    name: 'Elegant Evening Tulle Dress - Midnight Black',
    price: 900,
    oldPrice: 1300,
    rating: 5.0,
    reviews: 340,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=600',
    colors: ['#171717', '#475569']
  },
]

export default function Home() {
  const [userName, setUserName] = useState<string | null>(null)

  useEffect(() => {
    setUserName(localStorage.getItem('user_name'))
  }, [])

  return (
    <main className="min-h-screen bg-white pb-32">
      {/* Hero Section */}
      <section className="relative bg-[#f3f4f6] pt-32 pb-24 px-4 overflow-hidden">
        {/* Background Design Elements */}
        <h1 className="text-[12vw] font-extrabold text-slate-200 absolute inset-0 flex items-center justify-center pointer-events-none uppercase tracking-[0.1em] opacity-10 select-none">
          TinyTales
        </h1>
        
        <div className="max-w-7xl mx-auto text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-white rounded-full shadow-sm border border-slate-100 mb-4 animate-in fade-in slide-in-from-top-4">
             <Sparkles className="text-[#b18f84]" size={16} />
             <span className="text-xs font-bold uppercase tracking-widest text-[#b18f84]">Collection 2025</span>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 text-balance leading-[0.9] tracking-tighter">
              {userName ? (
                <>Welcome Back, <span className="text-[#b18f84] italic">{userName}</span></>
              ) : (
                <>Elevate Your <span className="text-[#b18f84] italic">Style</span> <br />With TinyTales</>
              )}
            </h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto text-balance font-medium leading-relaxed">
              Experience premium quality apparel designed for the modern lifestyle. Pixel-perfect designs for ultimate comfort and sophistication.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/product/1">
              <Button className="w-full sm:w-auto bg-[#b18f84] hover:bg-[#a07e73] text-white px-12 py-8 text-xl font-bold rounded-2xl shadow-2xl shadow-amber-900/20 transition-all hover:scale-105">
                Explore Collection <ArrowRight className="ml-2" size={24} />
              </Button>
            </Link>
            {!userName && (
              <Link href="/register">
                <Button variant="outline" className="w-full sm:w-auto px-12 py-8 text-xl bg-white border-2 border-slate-200 text-slate-600 font-bold rounded-2xl hover:border-[#b18f84] hover:text-[#b18f84] transition-all">
                  Join The Club
                </Button>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Featured Collection Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mt-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-[#b18f84] font-bold text-sm uppercase tracking-[0.2em]">
               <TrendingUp size={18} /> Our Best Sellers
            </div>
            <h2 className="text-4xl font-black text-slate-900">Trending Now</h2>
            <div className="h-1 w-24 bg-[#b18f84] rounded-full" />
          </div>
          <Link href="/shop" className="group flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-[#b18f84] transition-colors uppercase tracking-widest">
            View All Products <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {CURATED_PRODUCTS.map((product) => (
            <div key={product.id} className="group space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <Link href={`/product/${product.id}`}>
                <div className="relative aspect-[4/5] rounded-[2.5rem] bg-slate-50 overflow-hidden shadow-sm group-hover:shadow-2xl group-hover:shadow-slate-200 transition-all duration-700">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Floating Action Buttons */}
                  <div className="absolute top-6 right-6 flex flex-col gap-2 translate-x-16 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <button className="w-11 h-11 rounded-xl bg-white shadow-xl flex items-center justify-center text-slate-400 hover:text-rose-500 hover:scale-110 transition-all">
                      <Heart size={20} />
                    </button>
                    <button className="w-11 h-11 rounded-xl bg-white shadow-xl flex items-center justify-center text-slate-400 hover:text-[#b18f84] hover:scale-110 transition-all">
                      <ShoppingBag size={20} />
                    </button>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm">
                    <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">
                      {product.category}
                    </span>
                  </div>
                </div>
              </Link>

              <div className="px-2 space-y-3">
                <div className="flex justify-between items-center">
                   <div className="flex items-center gap-1 text-[10px] font-black text-slate-400">
                    <Star size={12} fill="currentColor" className="text-amber-400" /> 
                    {product.rating} <span className="text-slate-200 font-medium">({product.reviews})</span>
                  </div>
                </div>
                
                <h3 className="font-bold text-slate-800 text-lg line-clamp-1 group-hover:text-[#b18f84] transition-colors">
                  {product.name}
                </h3>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-black text-slate-900 tracking-tighter">AED {product.price}</span>
                    <span className="text-sm text-slate-300 line-through font-bold">AED {product.oldPrice}</span>
                  </div>
                  
                  <div className="flex gap-1.5">
                    {product.colors.map((color, idx) => (
                      <div key={idx} style={{backgroundColor: color}} className="w-2.5 h-2.5 rounded-full border border-slate-100" />
                    ))}
                    <span className="text-[9px] font-bold text-slate-200">+2</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Badges section to match the premium footer start */}
      <section className="max-w-7xl mx-auto px-8 mt-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 bg-slate-900 rounded-[3rem] p-12 text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-[#b18f84] opacity-5 pointer-events-none" />
           
           <div className="space-y-4 relative z-10">
             <div className="w-12 h-12 bg-[#b18f84]/20 rounded-2xl flex items-center justify-center text-[#b18f84] mx-auto">
               <ShoppingBag size={24} />
             </div>
             <h4 className="text-white font-bold text-xl">Premium Delivery</h4>
             <p className="text-slate-400 text-sm leading-relaxed">Fast and secure worldwide shipping for every order.</p>
           </div>
           
           <div className="space-y-4 relative z-10 border-y md:border-y-0 md:border-x border-white/10 py-8 md:py-0">
             <div className="w-12 h-12 bg-[#b18f84]/20 rounded-2xl flex items-center justify-center text-[#b18f84] mx-auto">
               <Heart size={24} />
             </div>
             <h4 className="text-white font-bold text-xl">High Quality</h4>
             <p className="text-slate-400 text-sm leading-relaxed">Only the finest fabrics curated for your maximum comfort.</p>
           </div>

           <div className="space-y-4 relative z-10">
             <div className="w-12 h-12 bg-[#b18f84]/20 rounded-2xl flex items-center justify-center text-[#b18f84] mx-auto">
               <Sparkles size={24} />
             </div>
             <h4 className="text-white font-bold text-xl">Secure Checkout</h4>
             <p className="text-slate-400 text-sm leading-relaxed">Your transactions are protected by industry-leading security.</p>
           </div>
        </div>
      </section>
    </main>
  )
}