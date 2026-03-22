import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeader({ subtitle, title }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      {subtitle && <h2 className="text-base font-semibold text-blue-400 tracking-wider uppercase">{subtitle}</h2>}
      <p className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight text-white">
        {title}
      </p>
    </motion.div>
  );
}