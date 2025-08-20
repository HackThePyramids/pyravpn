import React from 'react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Button } from './ui/button';
import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: "Basic",
    price: "$4.99",
    period: "/month",
    description: "Perfect for casual browsing and streaming. $5 cheaper than NordVPN's cheapest monthly plan!",
    features: [
      "1 Device Connection",
      "Connectivity to the US",
      "Standard Speed",
      "24/7 Support",
      "No-Log Policy",
      "Best for casual browsing"
    ],
    popular: false
  },
  {
    name: "Pro",
    price: "$8.99",
    period: "/month",
    description: "Best value for families and power users. $9 cheaper than NordVPN's best monthly plan!",
    features: [
      "5 Device Connections",
      "Connectivity to the US",
      "Ultra-Fast Speed",
      "Priority Support",
      "Kill Switch",
      "In Built Ad Blocker"
    ],
    popular: true
  }
];

export const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6">
            Simple <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Choose the perfect plan for your needs. All plans include our core security features 
            with a 30-day money-back guarantee.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`relative bg-card border rounded-lg p-8 ${
                plan.popular 
                  ? 'border-primary neon-glow' 
                  : 'border-primary/20'
              }`}
            >
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="absolute -top-4 z-10 w-full text-center" // Ensure outer container spans full width and centers content
                >
                  <div className="inline-flex bg-primary text-primary-foreground px-4 py-2 rounded-full items-center space-x-2 shadow-md -translate-x-[25px]"> {/* Nudge left by 4px */}
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </motion.div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-4xl gradient-text">{plan.price}</span>
                  <span className="text-foreground/60 ml-1">{plan.period}</span>
                </div>
                <p className="text-foreground/70">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: (index * 0.2) + (featureIndex * 0.1) }}
                    className="flex items-center space-x-3"
                  >
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <Button 
                className={`w-full ${
                  plan.popular 
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90 neon-glow' 
                    : 'bg-secondary border border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                }`}
                size="lg"
                asChild // Render Button as an anchor tag
              >
                <a href="https://discord.gg/9pk3CCXhQp" target="_blank" rel="noopener noreferrer"> {/* Link to Discord */}
                  Get Started
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};