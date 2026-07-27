"use client";
import React from 'react';

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === 'Escape') setMenuOpen(false); }
    function onClickOutside(e: MouseEvent) {
      if (!menuRef.current) return;
      if (menuRef.current.contains(e.target as Node)) return;
      setMenuOpen(false);
    }
    if (menuOpen) {
      document.addEventListener('keydown', onKey);
      document.addEventListener('click', onClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClickOutside);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        * { font-family: 'Poppins', sans-serif; }
      `}</style>

      <section className="bg-slate-50 w-full bg-no-repeat bg-cover bg-center text-sm pb-24 pt-4">
        <nav className="flex items-center justify-between p-4 md:px-16 lg:px-24 xl:px-32 w-full">
          {/* Brand Name */}
          <a href="/" className="text-2xl font-bold tracking-tight text-slate-900">
            Hemlin Clothing
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium text-slate-700">
            <a href="#" className="hover:text-black transition-colors">Shop All</a>
            <a href="#" className="hover:text-black transition-colors">Trending</a>
            <a href="#" className="hover:text-black transition-colors">Pinterest Fits</a>
          </div>

          <button className="hidden md:block bg-black hover:bg-slate-800 text-white px-6 py-2.5 rounded-full font-medium transition">
            Follow on Pinterest
          </button>
        </nav>

        <div className="flex items-center gap-2 border border-slate-300 rounded-full w-max mx-auto px-4 py-2 mt-24">
          <span className="text-slate-600">Trending this week on Pinterest</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-semibold max-w-[850px] text-center mx-auto mt-8 text-slate-900 tracking-tight">
          Curated aesthetic fashion.
        </h1>

        <p className="text-base md:text-lg mx-auto max-w-2xl text-center mt-6 text-slate-600 max-md:px-4">
          Discover the latest trends in women's fashion. Handpicked, aesthetic styles straight from our inspiration boards to your wardrobe.
        </p>

        <div className="mx-auto w-full flex items-center justify-center gap-4 mt-8">
          <button className="bg-black hover:bg-slate-800 text-white px-8 py-3.5 rounded-full font-medium transition shadow-lg">
            Shop the Collection
          </button>
        </div>
      </section>
    </>
  );
}