import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wand2, Eraser, Send } from 'lucide-react';

const sampleData = {
  fullName: 'Avery Johnson',
  email: 'avery.johnson@example.com',
  phone: '+1 (415) 555-0199',
  address: '742 Evergreen Terrace, Springfield',
  city: 'Springfield',
  state: 'IL',
  zip: '62701',
};

const Input = ({ label, type = 'text', value, onChange, name, placeholder }) => (
  <label className="block">
    <span className="text-sm text-white/80">{label}</span>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-indigo-500/60"
    />
  </label>
);

const DemoForm = () => {
  const [form, setForm] = useState({ ...sampleData, fullName: '', email: '', phone: '', address: '', city: '', state: '', zip: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const autofill = () => setForm(sampleData);
  const clear = () => setForm({ fullName: '', email: '', phone: '', address: '', city: '', state: '', zip: '' });
  const submit = (e) => {
    e.preventDefault();
    alert(`Submitted!\n\n${JSON.stringify(form, null, 2)}`);
  };

  return (
    <section id="demo" className="relative py-24 bg-gradient-to-b from-[#0b1020] to-[#0e1430]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white"
          >
            Try the live demo form
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-white/60"
          >
            Click Auto-Fill to simulate how the extension completes common fields instantly.
          </motion.p>
        </div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-xl"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <Input label="Full Name" name="fullName" value={form.fullName} onChange={handleChange} placeholder="Jane Doe" />
            <Input label="Email" type="email" name="email" value={form.email} onChange={handleChange} placeholder="jane@domain.com" />
            <Input label="Phone" name="phone" value={form.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" />
            <Input label="Address" name="address" value={form.address} onChange={handleChange} placeholder="123 Main St" />
            <Input label="City" name="city" value={form.city} onChange={handleChange} placeholder="City" />
            <Input label="State" name="state" value={form.state} onChange={handleChange} placeholder="State" />
            <Input label="ZIP" name="zip" value={form.zip} onChange={handleChange} placeholder="00000" />
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={autofill}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-2.5 text-white font-medium shadow-lg shadow-indigo-500/20"
            >
              <Wand2 size={18} /> Auto-Fill Demo
            </button>
            <button
              type="button"
              onClick={clear}
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-white/90 backdrop-blur-xl hover:bg-white/10 transition"
            >
              <Eraser size={18} /> Clear
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-white text-gray-900 px-5 py-2.5 font-medium hover:bg-white/90 transition"
            >
              <Send size={18} /> Submit
            </button>
          </div>
        </motion.form>
      </div>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-10 -translate-x-1/2 h-56 w-[36rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.25),transparent_60%)] blur-2xl" />
      </div>
    </section>
  );
};

export default DemoForm;
