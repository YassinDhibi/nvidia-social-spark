
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '@/hooks/useLanguage';

const navItems = [
  { name: "Introduction", nameFr: "Introduction", href: "#introduction" },
  { name: "Timeline", nameFr: "Chronologie", href: "#timeline" },
  { name: "Case Studies", nameFr: "Études de Cas", href: "#case-studies" },
  { name: "Media", nameFr: "Médias", href: "#media" },
  { name: "Team", nameFr: "Équipe", href: "#team" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language } = useLanguage();
  
  // Handle hash navigation to ensure proper scrolling
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          // Add a small delay to ensure smooth scrolling
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-nvidia-green">NVIDIA</span>
          <span className="text-sm font-medium">Social Spark</span>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex md:items-center md:gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-nvidia-green"
            >
              {language === 'en' ? item.name : item.nameFr}
            </a>
          ))}
          <LanguageToggle />
        </nav>
        
        {/* Mobile Nav Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      
      {/* Mobile Nav */}
      <div
        className={cn(
          "container md:hidden",
          isMenuOpen ? "block" : "hidden"
        )}
      >
        <nav className="flex flex-col space-y-4 py-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-nvidia-green"
              onClick={() => setIsMenuOpen(false)}
            >
              {language === 'en' ? item.name : item.nameFr}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
