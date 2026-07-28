import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  // Collection Data (Easy to edit later)
  const womensCollections = [
    {
      title: "Summer Essentials",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop",
      link: "#", // You will put your Pinterest affiliate link here
    },
    {
      title: "Modern Minimalist",
      image: "https://images.unsplash.com/photo-1434389670869-c875225c93c4?q=80&w=1920&auto=format&fit=crop",
      link: "#",
    },
    {
      title: "Activewear",
      image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1920&auto=format&fit=crop",
      link: "#",
    },
  ];

  const mensCollections = [
    {
      title: "Streetwear",
      image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1920&auto=format&fit=crop",
      link: "#",
    },
    {
      title: "Smart Casual",
      image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1920&auto=format&fit=crop",
      link: "#",
    },
  ];

  return (
    <main className="flex flex-col min-h-screen bg-[#D4A373] text-neutral-900 scroll-smooth">
      
      {/* NAVIGATION BAR */}
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
          <Link href="/shop-women" className="hover:text-neutral-400 transition-colors">Shop Women</Link>
          <Link href="/shop-men" className="hover:text-neutral-400 transition-colors">Shop Men</Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative w-full h-screen flex items-center justify-center bg-neutral-100 overflow-hidden pt-20">
        <div className="absolute inset-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl">
          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-4 uppercase">Hemline</h1>
          <p className="text-lg md:text-xl text-neutral-800 mb-8 max-w-xl font-medium">
            Curated modern styles and trending aesthetics. Discover your next favorite fit, directly from our Pinterest boards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/shop-women" className="group flex items-center justify-center gap-2 bg-black text-white px-8 py-3 rounded-full hover:bg-neutral-800 transition-all">
              Shop Women <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/shop-men" className="flex items-center justify-center gap-2 bg-white text-black border border-neutral-300 px-8 py-3 rounded-full hover:bg-neutral-50 transition-all">
              Shop Men
            </Link>
          </div>
        </div>
      </section>

      {/* WOMEN'S COLLECTION GRID */}
      <section id="shop-women" className="w-full max-w-7xl mx-auto px-6 py-24 min-h-screen">
        <h2 className="text-3xl font-light text-center mb-16 uppercase tracking-wide">Trending For Women</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {womensCollections.map((collection, index) => (
            <a 
              key={index} 
              href={collection.link} 
              className="group relative block h-[500px] overflow-hidden rounded-sm bg-neutral-100"
            >
              <img 
                src={collection.image} 
                alt={collection.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Dark Overlay on Hover */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors duration-500"></div>
              
              {/* Text & Button */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-white text-3xl font-light mb-4 uppercase tracking-widest">{collection.title}</h3>
                <span className="bg-white text-black px-6 py-3 text-sm uppercase tracking-widest hover:bg-neutral-200 transition-colors">
                  Shop Now
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* MEN'S COLLECTION GRID */}
      <section id="shop-men" className="w-full max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-light text-center mb-16 uppercase tracking-wide">Men's Edit</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mensCollections.map((collection, index) => (
            <a 
              key={index} 
              href={collection.link} 
              className="group relative block h-[600px] overflow-hidden rounded-sm bg-neutral-100"
            >
              <img 
                src={collection.image} 
                alt={collection.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors duration-500"></div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-white text-3xl font-light mb-4 uppercase tracking-widest">{collection.title}</h3>
                <span className="bg-white text-black px-6 py-3 text-sm uppercase tracking-widest hover:bg-neutral-200 transition-colors">
                  Shop Now
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>
      {/* FOOTER SECTION */}
      <footer className="w-full bg-black text-white pt-16 pb-8 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          
          {/* Logo */}
          <Link href="/" className="mb-8">
            <img 
              src="/HEMLINE.png" 
              alt="Hemline Clothing Logo" 
              className="h-16 w-auto object-contain" 
            />
          </Link>

          {/* Social Links */}
          <div className="flex gap-6 mb-12">
            <a 
              href="https://pinterest.com/your-account-link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 text-sm uppercase tracking-widest"
            >
              {/* Simple Pinterest Icon using SVG */}
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.182 0 7.439 2.986 7.439 6.955 0 4.155-2.617 7.502-6.257 7.502-1.22 0-2.368-.634-2.763-1.385l-.752 2.873c-.272 1.039-.998 2.342-1.488 3.138 1.144.333 2.345.512 3.576.512 6.62 0 11.986-5.367 11.986-11.987C24 5.367 18.638 0 12.017 0z"/>
              </svg>
              Follow on Pinterest
            </a>
          </div>

        {/* Copyright & Disclaimer */}
         <div className="w-full border-t border-neutral-800 pt-8 flex flex-col items-center justify-between text-xs text-neutral-500 uppercase tracking-widest gap-4"></div>
            <p className="text-center max-w-3xl leading-relaxed">
              Hemline Clothing is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. As an Amazon Associate, I earn from qualifying purchases.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-between w-full mt-4">
              <p>&copy; {new Date().getFullYear()} Hemline Clothing. All rights reserved.</p>
              <div className="flex gap-4 mt-4 md:mt-0">
                <Link href="/" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/" className="hover:text-white transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
      </footer>

    </main>
  );
}