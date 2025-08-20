import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue } from 'motion/react';

export const Arty = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null); // Create a ref for the section

  // Use useScroll to track scroll progress for the specific section
  const { scrollYProgress } = useScroll({
    target: sectionRef, // Target the section element
    offset: ["start end", "end start"] // When section starts appearing to when it fully leaves view
  });
  
  // Transform scroll progress to radar sweep angle (0 to 360 degrees for a full sweep)
  const radarAngle = useTransform(scrollYProgress, [0, 1], [0, 360]); // 0 to 360 degrees

  useEffect(() => {
    // Update scroll progress state for reactive updates
    const unsubscribe = scrollYProgress.onChange((progress) => {
      setScrollProgress(progress);
    });
    
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Calculate radar sweep angle based on scroll progress
  // Now, scrollProgress will be from 0 to 1 as the section comes into and leaves view.
  // We want a full 360-degree sweep within this range.
  const sweepAngle = (scrollProgress * 360); // 0 to 360 degrees
  
  return (
    <section ref={sectionRef} className="relative min-h-screen bg-black overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-20 flex items-center justify-center min-h-screen">
        <div className="text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl mb-8">
              <span className="gradient-text">Powerful Ad Blocker</span>
              <br />
              <span className="text-white">Enhanced Browsing Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Our cutting-edge ad blocker eliminates intrusive ads, trackers, and malware,
              ensuring a faster, cleaner, and more secure browsing experience for you.
            </p>
          </motion.div>

          {/* Main Radar Component */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative w-96 h-96 mx-auto mb-12"
          >
            {/* Radar Background Circles */}
            <div className="absolute inset-0 rounded-full border border-primary/20" />
            <div className="absolute inset-4 rounded-full border border-primary/30" />
            <div className="absolute inset-8 rounded-full border border-primary/40" />
            <div className="absolute inset-12 rounded-full border border-primary/50" />
            
            {/* Grid Lines */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-primary/20" />
            <div className="absolute top-0 left-1/2 w-px h-full bg-primary/20" />
            
            {/* Center Dot */}
            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 neon-glow" />
            
            {/* Scanning Line */}
            <motion.div
              className="absolute bottom-1/2 left-1/2 origin-bottom"
              style={{
                transformOrigin: 'bottom center',
                transform: `translate(-50%, 0) rotate(${sweepAngle}deg)`,
              }}
            >
              <div 
                className="w-px h-48 bg-gradient-to-t from-primary via-primary/60 to-transparent"
                style={{
                  boxShadow: '0 0 20px rgba(0, 255, 136, 0.8), 0 0 40px rgba(0, 255, 136, 0.4)',
                }}
              />
            </motion.div>
            
            {/* Sweep Trail Effect */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background: `conic-gradient(from ${sweepAngle - 15}deg, transparent 0deg, rgba(0, 255, 136, 0.1) 15deg, transparent 30deg)`,
              }}
            />
            
            {/* Progress Indicator */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="text-sm text-primary/60">
                Scan Progress: {Math.round(scrollProgress * 100)}%
              </div>
            </div>
            
            {/* Threat Detection Blips */}
            {[
              { x: 70, y: 60, delay: 0 },
              { x: 30, y: 80, delay: 0.5 },
              { x: 80, y: 30, delay: 1 },
              { x: 20, y: 40, delay: 1.5 },
              { x: 60, y: 20, delay: 2 },
            ].map((blip, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-red-500 rounded-full"
                style={{
                  left: `${blip.x}%`,
                  top: `${blip.y}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: blip.delay,
                }}
              />
            ))}
            
            {/* Security Nodes */}
            {[
              { x: 85, y: 70, type: 'secure' },
              { x: 25, y: 25, type: 'secure' },
              { x: 75, y: 15, type: 'secure' },
              { x: 15, y: 85, type: 'secure' },
            ].map((node, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-primary rounded-full"
                style={{
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                }}
                animate={{
                  opacity: [0.5, 1, 0.5],
                  boxShadow: [
                    '0 0 10px rgba(0, 255, 136, 0.5)',
                    '0 0 20px rgba(0, 255, 136, 0.8)',
                    '0 0 10px rgba(0, 255, 136, 0.5)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.7,
                }}
              />
            ))}
          </motion.div>

          {/* Stats Display */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-6 ">
              <div className="text-2xl text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground">Ads Blocked</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-6 ">
              <div className="text-2xl text-primary mb-2">2x</div>
              <div className="text-muted-foreground">Faster Loading</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-6 ">
              <div className="text-2xl text-primary mb-2">Privacy</div>
              <div className="text-muted-foreground">Enhanced</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};