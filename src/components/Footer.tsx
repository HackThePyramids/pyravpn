import React from 'react';
import { motion } from 'motion/react';
import { Shield, Twitter, Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-card/90 border-t border-primary/20 py-16" // Changed bg-card to bg-card/90 for transparency
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Shield className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold gradient-text">PyraVPN</span>
            </div>
            <p className="text-foreground/70 mb-6 max-w-md">
              Leading the future of online privacy with cutting-edge VPN technology. 
              Your security and anonymity are our top priorities.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="text-lg mb-6">Product</h3>
            <ul className="space-y-3">
              {['Features', 'Pricing', 'Downloads', 'Server Status'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg mb-6">Support</h3>
            <ul className="space-y-3">
              {['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-foreground/60 text-sm mb-4 md:mb-0">
            © 2025 PyraVPN. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm">
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
              Terms
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};