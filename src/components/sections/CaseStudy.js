import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import { TrendingUp, TrendingDown, Clock, BarChart3, Users, Loader, Quote, ArrowRight } from 'lucide-react';
import AnimatedNumber from '../ui/AnimatedNumber';

const BeforeCard = ({ data }) => (
  <Card className="p-8 border-2 border-red-500/50 hover:border-red-500/80 h-full bg-gradient-to-br from-[#10152c] to-red-900/20">
    <h3 className="text-2xl font-bold text-red-400">TRƯỚC KHI DÙNG SBAY</h3>
    <div className="mt-6 space-y-6">
      <div className="flex items-center">
        <BarChart3 className="h-10 w-10 text-red-400 mr-4" />
        <div>
          <p className="text-gray-400">Doanh thu</p>
          <p className="text-4xl font-bold text-white">{data.revenue}</p>
        </div>
      </div>
      <div className="flex items-center">
        <Users className="h-10 w-10 text-red-400 mr-4" />
        <div>
          <p className="text-gray-400">Nhân sự</p>
          <p className="text-4xl font-bold text-white">{data.staff}</p>
        </div>
      </div>
      <div className="flex items-center">
        <Loader className="h-10 w-10 text-red-400 mr-4 animate-spin" />
        <div>
          <p className="text-gray-400">Tình trạng CEO</p>
          <p className="text-4xl font-bold text-white">{data.ceoStatus}</p>
        </div>
      </div>
    </div>
  </Card>
);

const AfterCard = ({ data }) => (
  <Card className="p-8 border-2 border-green-500/50 hover:border-green-500/80 h-full bg-gradient-to-br from-[#10152c] to-green-900/20">
    <h3 className="text-2xl font-bold text-green-400">SAU KHI DÙNG SBAY</h3>
    <div className="mt-6 space-y-6">
      <div className="flex items-center">
        <TrendingUp className="h-10 w-10 text-green-400 mr-4" />
        <div>
          <p className="text-gray-400">Doanh thu</p>
          <p className="text-4xl font-bold text-green-400">
            Tăng <AnimatedNumber to={2.3} suffix=" lần" />
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <TrendingDown className="h-10 w-10 text-green-400 mr-4" />
        <div>
          <p className="text-gray-400">Chi phí</p>
          <p className="text-4xl font-bold text-green-400">
            Giảm <AnimatedNumber to={30} suffix="%" />
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <Clock className="h-10 w-10 text-green-400 mr-4" />
        <div>
          <p className="text-gray-400">Thời gian làm việc CEO</p>
          <p className="text-4xl font-bold text-green-400">{data.ceoHours}</p>
        </div>
      </div>
    </div>
  </Card>
);


export default function CaseStudy() {
  const before = { revenue: '300 triệu/tháng', staff: '12 người', ceoStatus: 'Luôn quá tải' };
  const after = { ceoHours: '2-3h/ngày' };
  const story = '"Từ chỗ quá tải, doanh thu chỉ 300 triệu/tháng, giờ đây tôi chỉ cần làm việc 2-3 giờ mỗi ngày mà doanh thu tăng gấp 2.3 lần, chi phí lại giảm 30%. AI CEO Agent thực sự đã giải phóng tôi."';
  const author = "Anh Hùng, Chủ khách sạn tại Đà Nẵng";

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-5"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-purple-900/50 to-transparent translate-x-1/2 translate-y-1/2 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Hiệu quả đã được chứng minh"
          subtitle="CASE STUDY THỰC TẾ"
        />
        <div className="mt-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <BeforeCard data={before} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <AfterCard data={after} />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.4, type: 'spring' }}
            className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full shadow-2xl shadow-blue-500/50"
          >
            <ArrowRight className="w-12 h-12 text-white" />
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.7 }}
          className="mt-12"
        >
          <div className="relative max-w-4xl mx-auto p-8 bg-[#131a33] rounded-xl border border-gray-700 shadow-lg shadow-blue-500/10">
            <motion.div
              className="absolute top-4 left-4"
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Quote className="h-12 w-12 text-blue-500/30" />
            </motion.div>
            <motion.div
              className="absolute bottom-4 right-4"
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
            >
              <Quote className="h-12 w-12 text-blue-500/30" />
            </motion.div>
            <div className="relative z-10 text-center">
              <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80" alt={author} className="w-20 h-20 rounded-full border-2 border-blue-400 object-cover mb-4 mx-auto" />
              <p className="text-xl italic text-gray-300">
                {story}
              </p>
              <p className="mt-4 font-semibold text-white text-lg">- {author} -</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
