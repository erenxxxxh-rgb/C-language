import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ShopWomen() {
  const categories = [
    {
      title: "Pre-Designed Outfits",
      description: "Complete, coordinated fits curated for instant effortless style.",
      image: "/2a.png",
      href: "/shop-women/outfits",
    },
    {
      title: "Tops & Blouses",
      description: "From minimalist tees to structured blouses and statement tops.",
      image: "/Zeagoo Womens Tops Summer Casual Cap Sleeve Tshirts Shirts Business Blouses 3.png",
      href: "/shop-women/tops",
    },
    {
      title: "Shorts & Bottoms",
      description: "Tailored linen shorts, aesthetic denim, and relaxed trousers.",
      image: "/bottoms.jpg",
      href: "/shop-women/bottoms",
    },
  ];

  return (
    <main className="flex flex-col min-h-screen bg-[#D4A373] text-neutral-900">
      
      {/* NAVIGATION BAR */}
      <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-black text-white border-b border-neutral-800">
        <Link href="/" className="flex items-center">
          <img src="/HEMLINE.png" alt="Hemline Clothing Logo" className="h-10 md:h-12 w-auto object-contain" />
        </Link>
        <div className="flex gap-6 md:gap-8 text-sm uppercase tracking-widest font-light">
          <Link href="/" className="hover:text-neutral-400 transition-colors">Home</Link>
          <Link href="/shop-women" className="text-neutral-400 transition-colors">Shop Women</Link>
          <Link href="/shop-men" className="hover:text-neutral-400 transition-colors">Shop Men</Link>
        </div>
      </nav>

      {/* PAGE HEADER */}
      <section className="w-full pt-32 pb-12 px-6 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <Link href="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-800 hover:text-black mb-6 transition-colors font-medium">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-light uppercase tracking-widest mb-4 text-black">
            Women's Collection
          </h1>
          <p className="text-neutral-800 max-w-xl text-base md:text-lg font-medium">
            Explore our curated categories. From pre-designed aesthetics to everyday essentials, find your signature style.
          </p>
        </div>
      </section>

      {/* CATEGORY GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <Link 
              key={index} 
              href={cat.href}
              className="group flex flex-col bg-white/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-200">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-light uppercase tracking-wider text-black mb-2 group-hover:text-neutral-700 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-neutral-800 text-sm leading-relaxed mb-6 font-medium">
                    {cat.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-black group-hover:translate-x-1 transition-transform">
                  <span>Explore Category</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}