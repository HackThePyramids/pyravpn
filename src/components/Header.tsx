import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Shield, Menu } from 'lucide-react';

interface HeaderProps {
  smoothScroll: (elementId: string) => void;
}

export const Header = ({ smoothScroll }: HeaderProps) => { // Accept smoothScroll as prop
  const [activeSection, setActiveSection] = useState('hero'); // Default to 'hero' or first section

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['features', 'arty', 'pricing', 'testimonials', 'contact']; // Add all your section IDs
      const heroSection = document.getElementById('hero'); // Assuming hero is the first section
      const scrollPosition = window.scrollY;

      // Check if we are in the hero section based on its height
      if (heroSection && scrollPosition < heroSection.offsetHeight / 2) {
        setActiveSection('hero');
        return;
      }

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Check if the section is mostly in view
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call on mount to set initial active section
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // smoothScroll function is now passed as a prop, removed local definition
  
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-primary/20"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Shield className="w-8 h-8 text-primary" />
          <span className="text-xl font-bold gradient-text">PyraVPN</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => smoothScroll('features')}
            className={`text-foreground/80 hover:text-primary transition-colors ${activeSection === 'features' ? 'text-primary' : ''}`}
          >
            Features
          </button>
          <button
            onClick={() => smoothScroll('arty')}
            className={`text-foreground/80 hover:text-primary transition-colors ${activeSection === 'arty' ? 'text-primary' : ''}`}
          >
            Security
          </button>
          <button
            onClick={() => smoothScroll('pricing')}
            className={`text-foreground/80 hover:text-primary transition-colors ${activeSection === 'pricing' ? 'text-primary' : ''}`}
          >
            Pricing
          </button>
          <button
            onClick={() => smoothScroll('testimonials')}
            className={`text-foreground/80 hover:text-primary transition-colors ${activeSection === 'testimonials' ? 'text-primary' : ''}`}
          >
            Reviews
          </button>
          <button
            onClick={() => smoothScroll('contact')}
            className={`text-foreground/80 hover:text-primary transition-colors ${activeSection === 'contact' ? 'text-primary' : ''}`}
          >
            Contact
          </button>
        </nav>

        <div className="flex items-center space-x-4">
          {/* Removed Login Button */}
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow"
            asChild // Render Button as an anchor tag
          >
            <a href="https://discord.gg/9pk3CCXhQp" target="_blank" rel="noopener noreferrer"> {/* Link to Discord */}
              Get Started for Free
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </motion.header>
  );
};