import React from 'react';
import { BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';

const items = [
  'Đồng hành 1-1 đến khi ra kết quả.',
  'Bảo mật tuyệt đối dữ liệu doanh nghiệp.',
  'Hoàn tiền 100% nếu không hài lòng trong 30 ngày.',
  'Cam kết hiệu quả bằng hợp đồng (ROI > 5x).'
];

export default function Commitment() {
  return (
    <section className="py-24 bg-[#10152c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Cam kết của chúng tôi"
          subtitle="YÊN TÂM TUYỆT ĐỐI"
        />
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="mt-16 max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10"
        >
          {items.map((item, index) => (
            <div key={index} className="flex items-start">
              <BadgeCheck className="h-8 w-8 text-blue-400 mr-3 flex-shrink-0" />
              <span className="text-lg text-gray-300">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
