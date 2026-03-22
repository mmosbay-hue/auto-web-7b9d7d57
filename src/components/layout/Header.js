import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }} 
      animate={{ y: 0 }} 
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold accent-gradient-text">
              SBAY
            </a>
          </div>
          {/* <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Tính năng</a>
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Lợi ích</a>
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Bảng giá</a>
            </div>
          </nav> */}
          <div>
            <Button variant="primary">Đăng ký Demo</Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}