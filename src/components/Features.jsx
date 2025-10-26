import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Edit3, CheckCircle } from 'lucide-react';

const features = [
  {
    title: 'Instant Autofill',
    desc: 'Detects common fields like name, email, phone, and address to fill them in a click.',
    icon: CheckCircle,
    color: 'from-emerald-500/30 to-emerald-400/20',
  },
  {
    title: 'Smart & Secure',
    desc: 'Your data is encrypted and only used when you approve — privacy first by design.',
    icon: Shield,
    color: 'from-indigo-500/30 to-indigo-400/20',
  },
  {
    title: 'Editable Profiles',
    desc: 'Create and manage multiple profiles for work, school, and personal use.',
    icon: Edit3,
    color: 'from-fuchsia-500/30 to-pink-400/20',
  },
  {
    title: 'Time Saver',
    desc: 'Reduce repetitive typing and form errors across websites and portals.',
    icon: Clock,
    color: 'from-amber-500/30 to-yellow-400/20',
  },
];

const Features = () => {
  return (
    <section id="features" className="relative py-24 bg-[#0b1020]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white"
          >
            Everything you need to breeze through forms
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-white/60"
          >
            FormEase learns the fields you meet most and fills them reliably.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
            >
              <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center ring-1 ring-white/20`}>
                <f.icon className="text-white" size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-10 top-10 h-48 w-48 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute left-10 bottom-10 h-48 w-48 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>
    </section>
  );
};

export default Features;
