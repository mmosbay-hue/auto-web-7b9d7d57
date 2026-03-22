import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import { Database, BrainCircuit, Target, PlayCircle } from 'lucide-react';

const steps = [
  { icon: Database, step: 1, title: 'Kết nối dữ liệu', description: 'Hợp nhất dữ liệu từ CRM, Zalo, Facebook, Website, ERP...' },
  { icon: BrainCircuit, step: 2, title: 'AI phân tích', description: 'Phân tích chéo dữ liệu doanh thu, khách hàng, hiệu suất nhân sự.' },
  { icon: Target, step: 3, title: 'Đề xuất chiến lược', description: 'Gợi ý các hành động tối ưu cho Marketing, Sales, và Vận hành.' },
  { icon: PlayCircle, step: 4, title: 'Tự động thực thi', description: 'AI tự động giao việc, theo dõi tiến độ và báo cáo kết quả 24/7.' }
];

const TimelineItem = ({ item, index }) => {
  const isEven = index % 2 === 0;
  const itemVariants = {
    hidden: { opacity: 0, x: isEven ? -50 : 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className={`flex md:justify-${isEven ? 'start' : 'end'} w-full`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={itemVariants}
        className="md:w-5/12 w-full"
      >
        <Card className="relative p-6 w-full group">
          <div className={`hidden md:block absolute top-8 h-0 w-0 border-y-8 border-y-transparent ${isEven ? 'right-0 -mr-4 border-l-8 border-l-gray-800' : 'left-0 -ml-4 border-r-8 border-r-gray-800'}`}></div>
          
          <div className="flex items-center mb-3">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white mr-4 shadow-md shadow-blue-500/30 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-blue-500/40">
              <item.icon className="h-6 w-6" />
            </div>
            <div>
              <span className="text-sm font-semibold text-blue-400">BƯỚC {item.step}</span>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
            </div>
          </div>
          <p className="text-gray-400">{item.description}</p>
        </Card>
      </motion.div>
    </div>
  );
};

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden bg-[#050816]">
      <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-900/50 to-transparent -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Hệ thống hoạt động như thế nào?"
          subtitle="QUY TRÌNH 4 BƯỚC ĐƠN GIẢN"
        />
        <div className="mt-20 relative">
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent hidden md:block origin-top"
            style={{ scaleY: scrollYProgress }}
            aria-hidden="true"
          />
          
          <div className="space-y-12 md:space-y-16">
            {steps.map((item, index) => (
              <div key={item.step} className="relative flex items-center">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.5, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#10152c] border-2 border-blue-500 rounded-full items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.5)]"
                >
                  <motion.div 
                    className="w-3 h-3 bg-blue-400 rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </motion.div>
                <TimelineItem item={item} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
