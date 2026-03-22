import React from 'react';
import { Rocket, TrendingDown, LayoutDashboard, Zap, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';

const items = [
  {
    icon: Rocket,
    title: '1. TĂNG DOANH THU',
    benefits: [
      'Phân tích hành vi khách hàng',
      'Gợi ý chiến lược bán hàng',
      'Tối ưu tỷ lệ chuyển đổi'
    ]
  },
  {
    icon: TrendingDown,
    title: '2. GIẢM CHI PHÍ',
    benefits: [
      'Tự động hóa quy trình lặp lại',
      'Cắt giảm nhân sự dư thừa',
      'Tối ưu hóa chi phí vận hành'
    ]
  },
  {
    icon: LayoutDashboard,
    title: '3. QUẢN TRỊ MINH BẠCH',
    benefits: [
      'Dashboard real-time 24/7',
      'KPI rõ ràng cho từng phòng ban',
      'Hệ thống báo cáo tự động'
    ]
  },
  {
    icon: Zap,
    title: '4. TỰ ĐỘNG HÓA 24/24',
    benefits: [
      'AI tự động giao việc',
      'AI theo dõi & nhắc việc',
      'AI báo cáo kết quả tức thì'
    ]
  }
];

export default function WhySbay() {
  return (
    <section className="py-24 bg-[#10152c] relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <motion.div 
          className="absolute top-1/2 left-1/2 w-2/3 h-2/3 bg-gradient-to-tr from-purple-900/50 to-blue-900/50 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-40"
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 10, 0],
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
          title="AI CEO Agent giúp anh/chị"
          subtitle="GIẢI PHÁP CỦA SBAY"
        />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group p-px rounded-xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
            >
              <div className="h-full bg-[#10152c]/80 backdrop-blur-sm rounded-[11px] p-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center h-14 w-14 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-lg shadow-lg shadow-blue-500/30 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-blue-500/40">
                      <item.icon className="h-7 w-7" />
                    </div>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  </div>
                </div>
                <ul className="mt-6 space-y-3">
                  {item.benefits.map((benefit, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 + i * 0.1 }}
                    >
                      <CheckCircle className="h-5 w-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
