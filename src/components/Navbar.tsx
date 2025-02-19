
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <a
              href="/"
              className="text-earth font-serif text-2xl font-bold tracking-wider hover:text-earth/90 transition-colors"
            >
              Khoe Story
            </a>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#sacred-sites" className="text-earth/80 hover:text-earth transition-colors">
              Sacred Sites
            </a>
            <a href="#herbs" className="text-earth/80 hover:text-earth transition-colors">
              Herbs
            </a>
            <a href="#about" className="text-earth/80 hover:text-earth transition-colors">
              About
            </a>
            <a href="#booking" className="text-earth/80 hover:text-earth transition-colors">
              Book your journey
            </a>
            <a href="#documentary-series" className="text-earth/80 hover:text-earth transition-colors">
              Documentary Series
            </a>
            <a href="https://holocenefilmscontact.uwu.ai/" target="_blank" rel="noopener noreferrer" className="ml-2 px-6 py-2 bg-earth text-white rounded-full hover:bg-earth/90 transition-colors">
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-earth hover:bg-earth/5"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-md shadow-lg animate-fade-in">
            <div className="px-4 pt-2 pb-4 space-y-4">
              <a
                href="#sacred-sites"
                className="block text-earth/80 hover:text-earth transition-colors"
              >
                Sacred Sites
              </a>
              <a
                href="#herbs"
                className="block text-earth/80 hover:text-earth transition-colors"
              >
                Herbs
              </a>
              <a
                href="#about"
                className="block text-earth/80 hover:text-earth transition-colors"
              >
                About
              </a>
              <a
                href="#booking"
                className="block text-earth/80 hover:text-earth transition-colors"
              >
                Book your journey
              </a>
              <a
                href="#documentary-series"
                className="block text-earth/80 hover:text-earth transition-colors"
              >
                Documentary Series
              </a>
              <a
                href="https://holocenefilmscontact.uwu.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-2 bg-earth text-white rounded-full hover:bg-earth/90 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
