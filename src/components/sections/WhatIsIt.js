import React from 'react';
import { BrainCircuit, Bot, BarChart3, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';

const items = [
  {
    icon: BrainCircuit,
    title: 'Bộ não trung tâm', 
    description: 'Cung cấp một "phòng điều hành" duy nhất, hiển thị toàn cảnh sức khỏe doanh nghiệp theo thời gian thực.'
  },
  {
    icon: Bot,
    title: 'Agent tự hành', 
    description: 'Giải phóng nhân sự khỏi các tác vụ lặp lại, cho phép họ tập trung vào công việc có giá trị cao hơn.'
  },
  {
    icon: BarChart3,
    title: 'Báo cáo thông minh', 
    description: 'Biến dữ liệu thô thành các báo cáo trực quan, giúp CEO nắm bắt tình hình và xu hướng ngay lập tức.'
  },
  {
    icon: Briefcase,
    title: 'Cố vấn chiến lược', 
    description: 'Đưa ra các dự báo và khuyến nghị dựa trên dữ liệu, hoạt động như một CEO cấp cao không mệt mỏi.'
  }
];

export default function WhatIsIt() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-5"></div>
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] -z-10"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, rgba(37, 99, 235, 0) 70%)'
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="AI CEO Agent SBAY là gì?"
          subtitle="HỆ THỐNG ĐIỀU HÀNH TOÀN DIỆN"
        />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-[#10152c]/80 backdrop-blur-sm group">
                <div className="p-6 text-center flex flex-col items-center h-full">
                  <div className="inline-block p-4 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-lg shadow-lg shadow-blue-500/30 transition-all duration-300 group-hover:shadow-blue-500/50 group-hover:scale-110">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-gray-400 flex-grow">{item.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 text-center max-w-3xl mx-auto"
        >
          <p className="text-lg text-gray-300">
            👉 Đây không phải là một công cụ đơn lẻ, mà là một <span className="font-bold text-white">HỆ THỐNG AI ĐIỀU HÀNH DOANH NGHIỆP TOÀN DIỆN</span>, làm việc 24/24 để tối ưu Doanh thu - Chi phí - Lợi nhuận.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
