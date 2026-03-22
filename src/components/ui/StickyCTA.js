import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

export default function StickyCTA() {
  return (
    <motion.div 
      initial={{ y: 200 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 1.5, type: 'spring' }}
      className="fixed bottom-0 left-0 right-0 md:bottom-8 md:right-8 md:left-auto md:w-auto z-50"
    >
      <div className="bg-black/50 backdrop-blur-lg p-3 md:rounded-xl md:p-0">
        <div className="max-w-7xl mx-auto md:max-w-none">
          <Button variant="primary" size="lg" className="w-full md:w-auto">
            Dùng thử miễn phí
          </Button>
        </div>
      </div>
    </motion.div>
  );
}