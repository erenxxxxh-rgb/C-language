import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ShopMenComingSoon() {
  return (
    <main className="flex flex-col min-h-screen bg-[#D4A373] text-neutral-900">
      
      {/* NAVIGATION BAR */}
      <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-black text-white border-b border-neutral-800">
        <Link href="/" className="flex items-center">
          <img src="/HEMLINE.png" alt="Hemline Clothing Logo" className="h-10 md:h-12 w-auto object-contain" />
        </Link>
        <div className="flex gap-6 md:gap-8 text-sm uppercase tracking-widest font-light">
          <Link href="/" className="hover:text-neutral-400 transition-colors">Home</Link>
          <Link href="/shop-women" className="hover:text-neutral-400 transition-colors">Shop Women</Link>
          <Link href="/shop-men" className="text-neutral-400 transition-colors">Shop Men</Link>
        </div>
      </nav>

      {/* COMING SOON CONTENT */}
      <section className="flex-grow flex flex-col items-center justify-center text-center px-6 pt-20">
        <h1 className="text-5xl md:text-7xl font-light uppercase tracking-widest mb-4 text-black">
          Men's Edit
        </h1>
        <h2 className="text-2xl md:text-3xl font-light uppercase tracking-wide mb-6 text-neutral-800">
          Coming Soon
        </h2>
        <p className="text-neutral-800 max-w-md mx-auto mb-10 text-lg font-medium">
          We are currently curating the absolute best streetwear and smart casual fits for this collection. Check back soon for fresh drops!
        </p>
        
        <Link href="/" className="flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-neutral-800 transition-colors shadow-lg border border-transparent hover:border-neutral-500">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </section>

    </main>
  );
}