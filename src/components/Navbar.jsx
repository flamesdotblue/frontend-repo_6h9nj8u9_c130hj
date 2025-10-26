import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Zap } from 'lucide-react';

const Navbar = () => {
  const navItems = [
    { href: '#features', label: 'Features' },
    { href: '#demo', label: 'Demo' },
    { href: '#download', label: 'Download' },
  ];

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[95%] md:w-[90%]"
    >
      <div className="mx-auto flex items-center justify-between rounded-2xl border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-xl shadow-lg shadow-black/10">
        <a href="#home" className="flex items-center gap-2">
          <div className="flex items-center justify-center h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
            <Rocket size={18} />
          </div>
          <span className="font-semibold text-white tracking-tight">FormEase</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-white/90">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#download"
            className="group inline-flex items-center gap-2 rounded-xl bg-white/90 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-white transition-colors"
          >
            <Zap size={16} className="text-yellow-600 group-hover:rotate-12 transition-transform" />
            Add to Chrome
          </a>
        </div>
      </div>
      <div className="pointer-events-none">
        <div className="absolute inset-0 -z-0 blur-3xl opacity-30 bg-[radial-gradient(800px_400px_at_50%_-20%,rgba(99,102,241,0.6),transparent),radial-gradient(600px_300px_at_80%_20%,rgba(236,72,153,0.4),transparent)]" />
      </div>
    </motion.header>
  );
};

export default Navbar;
