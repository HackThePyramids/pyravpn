import React from 'react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Digital Nomad",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face", // Updated with a new, working Unsplash photo URL
    content: "PyraVPN has been a game-changer for my remote work. The speed is incredible and I never worry about security when using public WiFi.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Cybersecurity Expert",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "As someone in cybersecurity, I'm very picky about VPNs. PyraVPN's encryption standards and no-log policy are exactly what I need.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Content Creator",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content: "I stream content globally and PyraVPN gives me access to everything I need. The multiple device support is perfect for my setup.",
    rating: 5
  },
  {
    name: "David Thompson",
    role: "Business Owner",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content: "Our entire team uses PyraVPN for remote work. It's reliable, fast, and the enterprise features give us exactly what we need.",
    rating: 5
  },
  {
    name: "Lisa Park",
    role: "Privacy Advocate",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    content: "Privacy is everything to me. PyraVPN's transparent no-log policy and commitment to user privacy makes them my top choice.",
    rating: 5
  },
  {
    name: "Alex Kumar",
    role: "Gamer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "Gaming with a VPN usually means lag, but not with PyraVPN. The speeds are amazing and I can access servers worldwide.",
    rating: 5
  }
];

export const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="testimonials" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6">
            What Our <span className="gradient-text">Users</span> Say
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Join thousands of satisfied customers who trust PyraVPN 
            to protect their online privacy and freedom.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="bg-card border border-primary/20 rounded-lg p-6 neon-glow"
            >
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-primary/50 mr-3" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-foreground/80 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 border-2 border-primary/20"
                />
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-foreground/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};