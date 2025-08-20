import React from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Arty } from './components/Arty';
import { PrivacyStatement } from './components/PrivacyStatement'; // Import new component
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

export default function App() {
  // Define smoothScroll function here
  const smoothScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const headerOffset = 60; // Reverted to a more common header offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground grid-bg"> {/* Added grid-bg here */}
      <CustomCursor />
      <Header smoothScroll={smoothScroll} /> {/* Pass smoothScroll to Header */}
      <main>
        <Hero smoothScroll={smoothScroll} />
        <section id="features">
          <Features />
        </section>
        <section id="arty">
          <Arty />
        </section>
        <section id="privacy-statement">
          <PrivacyStatement />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
      </main>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}