import React from 'react';
import { motion } from 'framer-motion';

export default function CoreSolution() {
  return (
    <section className="py-24">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2 className="text-base font-semibold text-blue-400 tracking-wider uppercase">Giải pháp cốt lõi</h2>
        <p className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">
          Giới thiệu <span className="accent-gradient-text">AI CEO AGENT SBAY</span>
        </p>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-400">
          Đây không chỉ là một phần mềm, mà là một bộ não điều hành thứ hai, một giám đốc vận hành số (Digital COO) làm việc 24/7 không mệt mỏi để tối ưu và phát triển doanh nghiệp của bạn.
        </p>
      </motion.div>
    </section>
  );
}