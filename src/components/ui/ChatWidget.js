import React from 'react';
import { MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ChatWidget() {
  return (
    <motion.button 
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 2, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1, rotate: 10 }}
      className="fixed bottom-24 right-4 md:bottom-8 md:right-48 z-50 h-16 w-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#050816] focus:ring-blue-500"
      aria-label="Chat with AI assistant"
    >
      <MessageSquare className="h-8 w-8 text-white" />
    </motion.button>
  );
}