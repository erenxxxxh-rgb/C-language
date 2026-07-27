import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ComingSoon() {
  return (
    <main className="flex flex-col min-h-screen bg-[#D4A373] text-neutral-900">
      
      {/* MINIMAL NAVBAR */}
      <nav className="fixed top-0 w-full z-50 flex items-center justify-center px-6 py-4 bg-black text-white border-b border-neutral-800">
        <Link href="/">
          <img src="/HEMLINE.png" alt="Hemline Clothing Logo" className="h-10 md:h-12 w-auto object-contain" />
        </Link>
      </nav>

      {/* COMING SOON CONTENT */}
      <section className="flex-grow flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl md:text-7xl font-light uppercase tracking-widest mb-6">Coming Soon</h1>
        <p className="text-neutral-500 max-w-md mx-auto mb-10 text-lg">
          We are currently curating the absolute best Pinterest styles for this collection. Check back soon for fresh drops!
        </p>
        <Link href="/shop-women" className="flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-neutral-800 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Collection
        </Link>
      </section>

    </main>
  );
}