import Link from "next/link";
import { ArrowLeft, ExternalLink, ArrowRight } from "lucide-react";

export default function OutfitsPage() {
  const products = [
    {
      id: "two-piece-linen-set",
      name: "LILLUSORY Womens 2 Piece Lounge Sets Fall Outfits Airport Travel Sweatsuits",
      category: "Pre-Designed Outfits",
      image: "/2a.png", // Remember to drop a pic in the public folder!
      description: "Comfy Comfrt Sweat Set, Cute Matching Pajamas Pjs, Fashion Henley Loungewear, 2026 Winter Clothes.",
      amazonUrl: "https://link.amazon/B01gP4P7d", // Grab your link from SiteStripe
      detailRoute: "/shop-women/outfits/two-piece-linen-set",
    },
    {
      id: "ribbed-knit-midi-set",
      name: "Ribbed Knit Midi Skirt Set",
      category: "Pre-Designed Outfits",
      image: "/4d.png", // Remember to drop a pic in the public folder!
      description: "A flattering ribbed knit two-piece set featuring a cropped tank and a midi skirt with a side slit. Perfect for transition weather.",
      amazonUrl: "https://amzn.to/3TsagFM", // Grab your link from SiteStripe
      detailRoute: "/shop-women/outfits/ribbed-knit-midi-set",
    },
    // Future outfits will be pasted right below here!
  ];

  return (
    <main className="flex flex-col min-h-screen bg-[#D4A373] text-neutral-900">
      
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

      {/* HEADER SECTION */}
      <section className="w-full pt-32 pb-12 px-6 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <Link href="/shop-women" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-800 hover:text-black mb-6 transition-colors font-medium">
            <ArrowLeft className="w-4 h-4" /> Back to Women's Collection
          </Link>
          <h1 className="text-4xl md:text-6xl font-light uppercase tracking-widest mb-4 text-black">
            Pre-Designed Outfits
          </h1>
          <p className="text-neutral-800 max-w-xl text-base md:text-lg font-medium">
            Complete, coordinated aesthetics. Curated matching sets and fully styled looks ready for your wardrobe.
          </p>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {products.map((item) => (
            <div 
              key={item.id} 
              className="group flex flex-col bg-white/50 backdrop-blur-md rounded-2xl overflow-hidden border border-white/30 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-200">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product Info & Action Buttons */}
              <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-neutral-600">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-light uppercase tracking-wider text-black mt-1 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-neutral-800 text-xs leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-col gap-2 pt-2 border-t border-black/10">
                  {/* Direct Buy Button */}
                  <a
                    href={item.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-black text-white py-3 px-4 rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-neutral-800 transition-colors shadow-sm"
                  >
                    <span>Buy on Amazon</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  {/* Blog / Detail Page Button */}
                  <Link
                    href={item.detailRoute}
                    className="w-full flex items-center justify-center gap-2 bg-white/60 text-black py-2.5 px-4 rounded-full text-xs uppercase tracking-widest font-semibold border border-black/20 hover:bg-white transition-colors"
                  >
                    <span>Style Guide & Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>

    </main>
  );
}