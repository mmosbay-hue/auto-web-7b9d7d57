import React from 'react';
import { XCircle, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';

const pains = [
  'Làm CEO nhưng mỗi ngày như “nhân viên tổng hợp”?',
  'Doanh thu không ổn định dù đã rất cố gắng?',
  'Có team nhưng không kiểm soát được hiệu suất?',
  'Quyết định dựa vào cảm tính hơn là dữ liệu?',
  'Mất ngủ vì hàng trăm việc nhỏ không tên?',
];

const wants = [
  'Tăng doanh thu rõ ràng từng ngày',
  'Giảm chi phí vận hành tối đa',
  'Có hệ thống làm việc tự động 24/24',
  'Có “bộ não AI” hỗ trợ ra quyết định',
  'Thoát khỏi vòng xoáy bận rộn',
];

const cardVariants = {
  initial: { opacity: 0, y: 50 },
  inView: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function PainPoints() {
  return (
    <section className="py-24 bg-[#10152c] relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <motion.div 
          className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-red-900/50 to-transparent rounded-full blur-3xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-green-900/50 to-transparent rounded-full blur-3xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader 
          title="Có phải đây là những gì anh/chị đang đối mặt?"
          subtitle="THẤU HIỂU NỖI ĐAU"
        />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            variants={cardVariants}
            initial="initial"
            whileInView="inView"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-gradient-to-br from-[#1c101b]/90 to-[#10152c]/90 backdrop-blur-sm p-8 rounded-xl shadow-lg shadow-red-900/20 border border-red-500/30 relative overflow-hidden transition-all duration-300 hover:shadow-red-500/30 hover:border-red-500/60 hover:-translate-y-2"
          >
            <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-red-500 to-transparent"></div>
            <h3 className="text-2xl font-bold text-red-400">CÓ PHẢI ANH/CHỊ ĐANG…?</h3>
            <ul className="mt-6 space-y-4">
              {pains.map((pain, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <XCircle className="h-6 w-6 text-red-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{pain}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            variants={cardVariants}
            initial="initial"
            whileInView="inView"
            transition={{ delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-gradient-to-br from-[#101c23]/90 to-[#10152c]/90 backdrop-blur-sm p-8 rounded-xl shadow-lg shadow-green-900/20 border border-green-500/30 relative overflow-hidden transition-all duration-300 hover:shadow-green-500/30 hover:border-green-500/60 hover:-translate-y-2"
          >
            <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-green-500 to-transparent"></div>
            <h3 className="text-2xl font-bold text-green-400">VÀ ANH/CHỊ MUỐN…</h3>
            <ul className="mt-6 space-y-4">
              {wants.map((solution, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{solution}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
