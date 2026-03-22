import React from 'react';
import { Plane, Hotel, Sparkles, ShoppingCart, School, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';

const industries = [
  { icon: Hotel, name: 'Khách sạn & Du lịch' },
  { icon: ShoppingCart, name: 'E-commerce' },
  { icon: Sparkles, name: 'Spa & Dịch vụ' },
  { icon: School, name: 'Giáo dục & Đào tạo' },
  { icon: Plane, name: 'Bán vé máy bay' },
  { icon: Building2, name: 'Doanh nghiệp SME' },
];

export default function UseCases() {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: 'spring',
        stiffness: 150
      }
    })
  };

  return (
    <section className="py-24 bg-[#10152c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="AI CEO Agent phù hợp với ai?"
          subtitle="ỨNG DỤNG ĐA NGÀNH NGHỀ"
        />
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <Card className="p-6 flex flex-col items-center justify-center h-full">
                <div className="p-4 bg-purple-600/10 text-purple-400 rounded-full">
                  <industry.icon className="h-8 w-8" />
                </div>
                <h3 className="mt-4 font-semibold text-white">{industry.name}</h3>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
