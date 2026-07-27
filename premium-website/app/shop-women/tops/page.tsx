import Link from "next/link";

export default function TopsAndBlouses() {
  // Placeholder Affiliate Products (You will replace links with Pinterest URLs)
  const products = [
    {
      id: 1,
      name: "Ribbed Knit Crop Top",
      image: "https://images.unsplash.com/photo-1554568218-0f1715e72254?q=80&w=1000&auto=format&fit=crop",
      link: "#pinterest-link",
    },
    {
      id: 2,
      name: "Satin Wrap Blouse",
      image: "https://images.unsplash.com/photo-1564222256577-45e728f2c611?q=80&w=1000&auto=format&fit=crop",
      link: "#pinterest-link",
    },
    {
      id: 3,
      name: "Oversized Linen Shirt",
      image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=1000&auto=format&fit=crop",
      link: "#pinterest-link",
    },
    {
      id: 4,
      name: "Lace Trim Cami",
      image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1000&auto=format&fit=crop",
      link: "#pinterest-link",
    },
    {
      id: 5,
      name: "Vintage Graphic Tee",
      image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1000&auto=format&fit=crop",
      link: "#pinterest-link",
    },
    {
      id: 6,
      name: "Puff Sleeve Crop",
      image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1000&auto=format&fit=crop",
      link: "#pinterest-link",
    },
    {
      id: 7,
      name: "Silk Button Down",
      image: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=1000&auto=format&fit=crop",
      link: "#pinterest-link",
    },
    {
      id: 8,
      name: "Ribbed Halter Top",
      image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1000&auto=format&fit=crop",
      link: "#pinterest-link",
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
      <section className="w-full pt-40 pb-12 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-light tracking-wide uppercase mb-4">Tops & Blouses</h1>
        <p className="text-neutral-500 max-w-xl mx-auto text-sm uppercase tracking-widest">
          Curated picks for your aesthetic
        </p>
      </section>

      {/* PRODUCT GRID */}
      <section className="w-full max-w-7xl mx-auto px-6 py-8 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
          {products.map((product) => (
            <a key={product.id} href={product.link} className="group block cursor-pointer">
              {/* Product Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 mb-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-300"></div>
                {/* Affiliate Shop Button that appears on hover */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <span className="bg-white text-black px-6 py-2 text-xs uppercase tracking-widest whitespace-nowrap shadow-lg">
                    Shop on Pinterest
                  </span>
                </div>
              </div>
              
              {/* Product Name */}
              <h3 className="text-sm text-neutral-800 uppercase tracking-wide group-hover:text-black transition-colors text-center">
                {product.name}
              </h3>
            </a>
          ))}
        </div>
      </section>

      {/* MINIMAL FOOTER */}
      <footer className="w-full bg-black text-white py-12 border-t border-neutral-800 text-center">
        <p className="text-xs text-neutral-500 uppercase tracking-widest">&copy; {new Date().getFullYear()} Hemline Clothing. All rights reserved.</p>
      </footer>
    </main>
  );
}