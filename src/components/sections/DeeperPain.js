import React from 'react';
import { XCircle, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';

const rootCauses = [
  'Làm việc theo cảm tính',
  'Không có hệ thống',
  'Nhân sự phụ thuộc',
  'Dữ liệu rời rạc',
  'Không đo lường được hiệu quả',
];

const consequences = [
  'Doanh thu chậm',
  'Chi phí tăng',
  'Áp lực cao',
  'Bối rối khi ra quyết định',
];

export default function DeeperPain() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Vấn đề không nằm ở nỗ lực của bạn"
          subtitle="ĐÁNH TRÚNG INSIGHT"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mt-12 text-center max-w-3xl mx-auto"
        >
          <p className="text-xl text-gray-400">
            Anh/chị không thiếu nỗ lực... Nhưng đang mắc kẹt vì:
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-3 bg-[#10152c] p-8 rounded-xl border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-6">Những "kẻ ngáng đường" vô hình:</h3>
            <ul className="space-y-4">
              {rootCauses.map((cause, index) => (
                <motion.li 
                  key={index} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center text-lg"
                >
                  <XCircle className="h-6 w-6 text-red-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{cause}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 bg-yellow-900/20 p-8 rounded-xl border border-yellow-500/30">
            <h3 className="text-2xl font-bold text-yellow-400 mb-6">Và đây là kết quả:</h3>
            <ul className="space-y-4">
              {consequences.map((consequence, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center text-lg"
                >
                  <AlertTriangle className="h-6 w-6 text-yellow-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{consequence}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
