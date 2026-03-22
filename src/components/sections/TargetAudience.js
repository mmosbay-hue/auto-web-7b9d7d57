import React from 'react';
import { UserCheck, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';

const who = [
  'CEO, Founder các doanh nghiệp SME.',
  'Giám đốc điều hành (COO), Giám đốc vận hành.',
  'Các doanh nghiệp muốn tự động hóa để tăng trưởng đột phá.',
  'Các công ty đang gặp vấn đề về hiệu suất nhân sự.'
];

const when = [
  'Khi bạn cảm thấy bị "mắc kẹt" trong vận hành.',
  'Khi doanh nghiệp tăng trưởng nóng nhưng hệ thống không theo kịp.',
  'Khi bạn muốn nhân bản chính mình để làm những việc lớn hơn.',
  'Khi bạn cần một hệ thống báo cáo tin cậy để ra quyết định.'
];

export default function TargetAudience() {
  return (
    <section className="py-24 bg-[#10152c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Giải pháp này có phù hợp với bạn?"
          subtitle="ĐỐI TƯỢNG & THỜI ĐIỂM"
        />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center text-2xl font-bold mb-6">
              <UserCheck className="h-8 w-8 text-blue-400 mr-3" />
              <h3>DÀNH CHO AI? (WHO)</h3>
            </div>
            <ul className="space-y-4">
              {who.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-400 font-bold mr-3">✓</span>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center text-2xl font-bold mb-6">
              <AlertTriangle className="h-8 w-8 text-yellow-400 mr-3" />
              <h3>KHI NÀO CẦN? (WHEN)</h3>
            </div>
            <ul className="space-y-4">
              {when.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-yellow-400 font-bold mr-3">✓</span>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}