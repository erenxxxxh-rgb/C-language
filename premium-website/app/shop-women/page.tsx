import Link from "next/link";

export default function ShopWomen() {
  // Your Category Data
  const categories = [
    {
      name: "Pre-Designed Outfits",
      image: "https://images.unsplash.com/photo-1485230895905-efd54316a9a7?q=80&w=1920&auto=format&fit=crop",
      link: "/coming-soon", // Update,
    },
    {
      name: "Tops & Blouses",
      image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1920&auto=format&fit=crop",
      link: "/shop-women/tops",
    },
    {
      name: "Shorts & Bottoms",
      image: "https://images.unsplash.com/photo-1591369822096-bbc1f11c1207?q=80&w=1920&auto=format&fit=crop",
      link: "/coming-soon",
    },
    {
      name: "Dresses",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1920&auto=format&fit=crop",
      link: "/coming-soon",
    },
    {
      name: "Activewear",
      image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1920&auto=format&fit=crop",
      link: "/coming-soon",
    },
    {
      name: "Accessories",
      image: "https://images.unsplash.com/photo-1509319117193-57bab727e09d?q=80&w=1920&auto=format&fit=crop",
      link: "/coming-soon",
    },
  ];

  return (
    <main className="flex flex-col min-h-screen bg-[#D4A373] text-neutral-900">
      
      {/* NAVIGATION BAR (Matches Homepage) */}
      <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-black text-white border-b border-neutral-800">
        <Link href="/" className="flex items-center">
          <img 
            src="/HEMLINE.png" 
            alt="Hemline Clothing Logo" 
            className="h-10 md:h-12 w-auto object-contain" 
          />
        </Link>
        <div className="flex gap-6 md:gap-8 text-sm uppercase tracking-widest font-light">
          <Link href="/" className="hover:text-neutral-400 transition-colors">Home</Link>
          <Link href="/shop-women" className="text-neutral-400 transition-colors">Shop Women</Link>
          <Link href="/shop-men" className="hover:text-neutral-400 transition-colors">Shop Men</Link>
        </div>
      </nav>

      {/* PAGE HEADER */}
      <section className="w-full pt-40 pb-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-light tracking-wide uppercase mb-4">Women's Collection</h1>
        <p className="text-neutral-500 max-w-2xl mx-auto">
          Explore our curated categories. From pre-designed aesthetics to everyday essentials, find your signature style.
        </p>
      </section>

      {/* CATEGORY GRID */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20 min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link 
              key={index} 
              href={category.link} 
              className="group relative block h-[450px] overflow-hidden rounded-sm bg-neutral-100"
            >
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3 className="text-white text-2xl font-light tracking-widest uppercase text-center px-4">
                  {category.name}
                </h3>
                <span className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white text-black px-6 py-2 text-xs uppercase tracking-widest">
                  View Category
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FOOTER SECTION (Matches Homepage) */}
      <footer className="w-full bg-black text-white pt-16 pb-8 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          <Link href="/" className="mb-8">
            <img 
              src="/HEMLINE.png" 
              alt="Hemline Clothing Logo" 
              className="h-16 w-auto object-contain" 
            />
          </Link>
          <div className="flex gap-6 mb-12">
            <a 
              href="https://pinterest.com/your-account-link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 text-sm uppercase tracking-widest"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.182 0 7.439 2.986 7.439 6.955 0 4.155-2.617 7.502-6.257 7.502-1.22 0-2.368-.634-2.763-1.385l-.752 2.873c-.272 1.039-.998 2.342-1.488 3.138 1.144.333 2.345.512 3.576.512 6.62 0 11.986-5.367 11.986-11.987C24 5.367 18.638 0 12.017 0z"/>
              </svg>
              Follow on Pinterest
            </a>
          </div>
          <div className="w-full border-t border-neutral-800 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-500 uppercase tracking-widest">
            <p>&copy; {new Date().getFullYear()} Hemline Clothing. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}