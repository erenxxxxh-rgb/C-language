"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight, Star, ShoppingBag } from "lucide-react";

export default function LinenShirtDetailPage() {
  // PRODUCT DATA
  const amazonAffiliateUrl = "https://amzn.to/4wQqck5"; // Your exact Amazon link
  
  const mediaContent = [
    { type: "image", src: "/6b.png", alt: "Front view of linen shirt" },
    { type: "image", src: "/6a.png", alt: "Styled look with jeans" }, 
    { type: "image", src: "/6c.png", alt: "Fabric detail" }, 
    { type: "image", src: "/6d.png", alt: "Side view" }, 
  ];

  const colors = [
    { name: "Crisp White", hex: "#F8F9FA", active: true },
    { name: "Coastal Blue", hex: "#7E90A3", active: false },
    { name: "Olive Green", hex: "#556B2F", active: false },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextMedia = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaContent.length);
  const prevMedia = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + mediaContent.length) % mediaContent.length);

  return (
    <main className="flex flex-col min-h-screen bg-[#D4A373] text-neutral-900 pt-28 pb-16 px-6 md:px-12">
      
      {/* NAVIGATION BAR */}
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-black text-white border-b border-neutral-800">
        <Link href="/" className="flex items-center">
          <img src="/HEMLINE.png" alt="Hemline Clothing Logo" className="h-10 md:h-12 w-auto object-contain" />
        </Link>
        <div className="flex gap-6 md:gap-8 text-sm uppercase tracking-widest font-light">
          <Link href="/" className="hover:text-neutral-400 transition-colors">Home</Link>
          <Link href="/shop-women" className="text-neutral-400 transition-colors">Shop Women</Link>
          <Link href="/shop-men" className="hover:text-neutral-400 transition-colors">Shop Men</Link>
        </div>
      </nav>

      {/* BACK BUTTON */}
      <div className="max-w-6xl mx-auto w-full mb-8">
        <Link href="/shop-women/tops" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-neutral-800 hover:text-black transition-colors font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to Tops & Blouses
        </Link>
      </div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* LEFT COLUMN: IMAGE SLIDER */}
        <div className="relative w-full h-[60vh] md:h-[80vh] bg-white/40 rounded-2xl border border-white/30 overflow-hidden shadow-lg group">
          
          {mediaContent[currentIndex].type === "image" ? (
            <img src={mediaContent[currentIndex].src} alt={mediaContent[currentIndex].alt} className="w-full h-full object-contain transition-opacity duration-500" />
          ) : (
            <video autoPlay loop muted playsInline className="w-full h-full object-contain">
              <source src={mediaContent[currentIndex].src} type="video/mp4" />
            </video>
          )}

          <button onClick={prevMedia} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md text-black hover:bg-white transition-all opacity-0 group-hover:opacity-100">
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button onClick={nextMedia} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md text-black hover:bg-white transition-all opacity-0 group-hover:opacity-100">
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {mediaContent.map((_, idx) => (
              <button key={idx} onClick={() => setCurrentIndex(idx)} className={`w-2.5 h-2.5 rounded-full transition-all shadow-sm ${currentIndex === idx ? "bg-black scale-110" : "bg-white/60 hover:bg-white"}`} />
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: PRODUCT DETAILS */}
        <div className="flex flex-col gap-8 bg-white/50 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-white/30 shadow-sm sticky top-32">
          
          <div>
            <p className="text-xs uppercase tracking-widest font-semibold text-neutral-600 mb-2">Capsule Essentials</p>
            <h1 className="text-3xl md:text-4xl font-light uppercase tracking-widest text-black mb-4">
              Oversized Button-Down Linen Shirt
            </h1>
            
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-black">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current opacity-50" />
              </div>
              <span className="text-xs font-medium text-neutral-700">(245 Reviews)</span>
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest font-bold text-black mb-3">Color Options</h3>
            <div className="flex gap-4">
              {colors.map((color, idx) => (
                <div key={idx} className="flex flex-col items-center gap-1 cursor-pointer group">
                  <span className={`w-8 h-8 rounded-full border-2 transition-transform ${color.active ? 'border-black scale-110' : 'border-white/60 group-hover:border-black/40'} shadow-sm`} style={{ backgroundColor: color.hex }} />
                  <span className="text-[10px] text-neutral-800 font-medium uppercase">{color.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest font-bold text-black mb-3">About this item</h3>
            
            <div className="mb-5 text-xs text-neutral-800 bg-white/40 p-4 rounded-xl border border-white/20 grid grid-cols-2 gap-3 shadow-sm">
              <div><span className="font-bold text-black">Fabric:</span> 70% Cotton, 30% Linen</div>
              <div><span className="font-bold text-black">Care:</span> Hand Wash / Line Dry</div>
              <div><span className="font-bold text-black">Fit:</span> Relaxed / Oversized</div>
            </div>

            <ul className="text-sm text-neutral-800 space-y-3 list-disc list-inside leading-relaxed font-medium">
              <li><strong>Breathable Blend:</strong> The cotton-linen fabric provides maximum airflow, making it the perfect layer for warm weather and beach days.</li>
              <li><strong>Effortless Silhouette:</strong> Designed with dropped shoulders and a curved hem to create a flowy, relaxed aesthetic.</li>
              <li><strong>Endless Versatility:</strong> Wear it fully buttoned for a smart-casual office look, or leave it unbuttoned over a crop top for weekend styling.</li>
              <li><strong>Classic Detailing:</strong> Features a structured collar, button cuffs, and a single chest pocket for a tailored touch.</li>
            </ul>
          </div>

          <div className="pt-6 border-t border-black/10">
            <a href={amazonAffiliateUrl} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-3 bg-black text-white py-4 px-6 rounded-full uppercase tracking-widest text-sm font-semibold hover:bg-neutral-800 transition-all shadow-lg group">
              <ShoppingBag className="w-4 h-4" />
              <span>Buy Now on Amazon</span>
            </a>
            <p className="text-[10px] uppercase tracking-widest text-neutral-600 text-center mt-4">
              Secure checkout & fulfillment by Amazon
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}