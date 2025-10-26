import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer id="download" className="relative border-t border-white/10 bg-[#0b1020]">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="text-center md:text-left">
            <h3 className="text-white text-xl font-semibold">Get FormEase</h3>
            <p className="text-white/60">Your shortcut to effortless forms. Available for Chromium-based browsers.</p>
          </div>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6 py-3 text-white font-medium shadow-lg shadow-indigo-500/20"
          >
            Add to Chrome
          </a>
        </motion.div>
        <p className="mt-8 text-center text-xs text-white/40">© {new Date().getFullYear()} FormEase. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
