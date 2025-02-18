
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('https://1k002xq9d0.ufs.sh/f/1NTnhDMDLmwf4Hary6mWfyOlsATBp3Q7nV6KDNaz8v9tqhUi')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-32">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1 mb-6 rounded-full bg-sage/90 backdrop-blur-sm text-white text-sm tracking-wide animate-fade-in">
            
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            A Journey Through Indigenous History
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Discover the rich heritage and untold stories of the Khoe and San people through our documentary series and healing traditions.
          </p>
          <div className="space-x-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <a href="/booking" className="inline-block px-8 py-3 bg-white text-earth rounded-full hover:bg-white/90 transition-colors">
              Book a Journey
            </a>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
