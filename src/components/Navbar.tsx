import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const logo = "/logo_dark.PNG";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img
                src={logo}
                alt="logo"
                className="h-10 w-auto md:h-12"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <a href="#services" className="text-white/80 hover:text-evolvair-blue transition-colors">
              Services
            </a>
            <a href="#process" className="text-white/80 hover:text-evolvair-blue transition-colors">
              How We Work
            </a>
            <a href="#case-studies" className="text-white/80 hover:text-evolvair-blue transition-colors">
              Case Studies
            </a>
            <a href="#about" className="text-white/80 hover:text-evolvair-blue transition-colors">
              About Us
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-gradient-to-r from-evolvair-blue to-evolvair-purple hover:from-evolvair-blue-light hover:to-evolvair-purple-light text-white rounded-md transition-all duration-300"
            >
              <a href="#contact">Get Started</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-evolvair-blue"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-card animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#services"
              className="block px-3 py-2 text-white/80 hover:text-evolvair-blue"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#process"
              className="block px-3 py-2 text-white/80 hover:text-evolvair-blue"
              onClick={() => setMobileMenuOpen(false)}
            >
              How We Work
            </a>
            <a
              href="#case-studies"
              className="block px-3 py-2 text-white/80 hover:text-evolvair-blue"
              onClick={() => setMobileMenuOpen(false)}
            >
              Case Studies
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-white/80 hover:text-evolvair-blue"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </a>
            <div className="px-3 py-2">
              <Button
                asChild
                className="w-full bg-gradient-to-r from-evolvair-blue to-evolvair-purple hover:from-evolvair-blue-light hover:to-evolvair-purple-light"
              >
                <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                  Get Started
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
