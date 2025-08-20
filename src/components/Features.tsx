import React from 'react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Shield, Zap, Globe, Lock, Eye, Smartphone } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Military-Grade Security",
    description: "Advanced AES-256 encryption protects your data from any threats, ensuring complete privacy and security."
  },
  {
    icon: Zap,
    title: "Lightning Speed",
    description: "Optimized servers worldwide deliver ultra-fast connections without compromising on security."
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Access the internet without restrictions from anywhere in the world."
  },
  {
    icon: Lock,
    title: "No-Log Policy",
    description: "We never track, collect, or store your online activity. Your privacy is completely protected."
  },
  {
    icon: Eye,
    title: "Kill Switch",
    description: "Automatic protection that instantly cuts your internet if the VPN connection drops unexpectedly."
  },
  {
    icon: Smartphone,
    title: "Multi-Platform",
    description: "Works seamlessly across all your devices - Windows, Mac, iOS, Android, and Linux."
  }
];

export const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="features" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6">
            Why Choose <span className="gradient-text">PyraVPN</span>?
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Experience the future of online privacy with cutting-edge technology 
            and uncompromising security standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="bg-card border border-primary/20 rounded-lg p-8 neon-glow group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl mb-4">{feature.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};