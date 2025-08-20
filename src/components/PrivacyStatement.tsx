import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';

export const PrivacyStatement = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 }); // Trigger animation when 50% in view

  const [animatedText, setAnimatedText] = useState('??????');
  const placeholders = ['??????', '######', '******', '123456', '987654', '??????', "<CENSORED>", "ERROR 404"]; // Cycle through these

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isInView) {
      let index = 0;
      interval = setInterval(() => {
        setAnimatedText(placeholders[index % placeholders.length]);
        index++;
        // Removed the condition to stop the interval and set final text
      }, 150); // Change every 150ms
    }

    return () => clearInterval(interval);
  }, [isInView]); // Re-run effect when isInView changes

  return (
    <section id="privacy-statement" className="py-20 bg-background/50"> {/* Changed to bg-background/50 for guaranteed transparency */}
      <div className="container mx-auto px-6 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            Connecting{' '}
            <span className="bg-primary text-primary-foreground px-3 py-1 rounded-md inline-block min-w-[120px]">
              {animatedText}
            </span>{' '}
            Users to the Internet
          </h2>
          <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto">
            Just joking! Unlike other providers, we don't hold any data about our users.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
