import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Shield, Zap, Globe } from 'lucide-react';

interface HeroProps {
  smoothScroll: (elementId: string) => void;
}

export const Hero = ({ smoothScroll }: HeroProps) => { // Accept smoothScroll as prop
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              left: `${20 + i * 20}%`,
              top: `${30 + i * 10}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 rounded-full border-2 border-primary/30 flex items-center justify-center"
            >
              <Shield className="w-10 h-10 text-primary" />
            </motion.div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl mb-6 leading-tight"
          >
            Finally,
            <span className="gradient-text block">A VPN That Works</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-3xl mx-auto"
          >
            Experience blazing-fast speeds with military-grade encryption.
            Your privacy is our priority in the decentralized future.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg"
            asChild
          >
            <a href="https://discord.gg/9pk3CCXhQp" target="_blank" rel="noopener noreferrer">
              Start Free Trial
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg"
            onClick={() => smoothScroll('pricing')} // smoothScroll is now available via prop
          >
            View Plans
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { icon: Zap, title: "Lightning Fast", desc: "99.9% uptime guaranteed" },
            { icon: Shield, title: "Military Grade", desc: "AES-256 encryption" },
            { icon: Globe, title: "Bypass Restrictions", desc: "View the internet from the USA" }
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-6"
            >
              <feature.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg mb-2">{feature.title}</h3>
              <p className="text-foreground/60">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};