import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import { BarChart, TrendingUp, Users, Zap, ArrowRight, TrendingDown, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, change, changeType, color }) => {
  const colorClasses = {
    green: { bg: 'bg-green-500/20', text: 'text-green-400' },
    blue: { bg: 'bg-blue-500/20', text: 'text-blue-400' },
    red: { bg: 'bg-red-500/20', text: 'text-red-400' },
  };
  const selectedColor = colorClasses[color] || colorClasses.blue;

  return (
    <div className="bg-[#1c233a]/60 p-4 rounded-lg border border-gray-700/50">
      <div className="flex items-center">
        <div className={`p-2 rounded-md ${selectedColor.bg}`}>
          <Icon className={`h-6 w-6 ${selectedColor.text}`} />
        </div>
        <p className="ml-3 text-sm font-medium text-gray-400">{label}</p>
      </div>
      <p className="mt-2 text-3xl font-bold text-white">{value}</p>
      <div className={`mt-1 flex items-center text-sm ${changeType === 'increase' ? 'text-green-400' : 'text-red-400'}`}>
        {changeType === 'increase' ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
        <span>{change} so với tháng trước</span>
      </div>
    </div>
  );
};

const AITask = ({ title, assignedTo, status, statusColor, icon: Icon }) => (
  <div className="flex items-center justify-between py-3 border-b border-gray-700/50 last:border-b-0">
    <div className="flex items-center">
      <Zap className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
      <div>
        <p className="text-white font-medium text-sm">{title}</p>
        <p className="text-xs text-gray-400">Giao cho: {assignedTo}</p>
      </div>
    </div>
    <div className="flex items-center space-x-3">
      <div className={`flex items-center text-xs font-semibold px-2 py-1 rounded-full ${statusColor.bg} ${statusColor.text}`}>
        <Icon className="h-3 w-3 mr-1" />
        {status}
      </div>
      <ArrowRight className="h-5 w-5 text-gray-500 hover:text-white transition-colors cursor-pointer" />
    </div>
  </div>
);

const aiTasks = [
  { title: "Tối ưu chiến dịch 'Summer Sale'", assignedTo: "Linh (Marketing)", status: "Đang thực hiện", statusColor: { bg: 'bg-blue-500/20', text: 'text-blue-300' }, icon: Clock },
  { title: "Chăm sóc 5 KH tiềm năng nhất", assignedTo: "An (Sales)", status: "Hoàn thành", statusColor: { bg: 'bg-green-500/20', text: 'text-green-300' }, icon: CheckCircle },
  { title: "Cập nhật quy trình onboarding", assignedTo: "Hà (Vận hành)", status: "Cần review", statusColor: { bg: 'bg-yellow-500/20', text: 'text-yellow-300' }, icon: AlertCircle },
  { title: "Phân tích báo cáo P&L tháng 7", assignedTo: "AI CEO Agent", status: "Đã xong", statusColor: { bg: 'bg-purple-500/20', text: 'text-purple-300' }, icon: CheckCircle },
];

export default function DashboardPreview() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-24 bg-[#10152c] relative overflow-hidden">
       <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-5"></div>
       <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] -z-10"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, rgba(99, 102, 241, 0) 70%)'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Quản trị doanh nghiệp trong một màn hình"
          subtitle="DASHBOARD TRỰC QUAN"
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 p-2 md:p-4 bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-2xl shadow-2xl shadow-blue-500/20 border border-gray-700"
        >
          <div className="bg-[#0b0f21] rounded-xl overflow-hidden">
            <motion.div variants={itemVariants} className="px-6 py-4 border-b border-gray-700 flex justify-between items-center">
              <h3 className="text-xl font-bold text-white">Bảng điều khiển CEO</h3>
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                <div className="h-3 w-3 bg-green-500 rounded-full"></div>
              </div>
            </motion.div>

            <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <StatCard icon={BarChart} label="Doanh thu" value="₫ 680M" change="+12.5%" changeType="increase" color="green" />
                  <StatCard icon={Users} label="Khách hàng mới" value="1,204" change="+8.1%" changeType="increase" color="blue" />
                  <StatCard icon={TrendingDown} label="Chi phí vận hành" value="₫ 85M" change="-2.3%" changeType="decrease" color="red" />
                </motion.div>
                
                <motion.div variants={itemVariants} className="bg-[#1c233a]/60 p-4 rounded-lg border border-gray-700/50">
                  <h4 className="text-lg font-semibold text-white mb-4">Biểu đồ Doanh thu (6 tháng)</h4>
                  <div className="h-64 flex items-end justify-between px-2 space-x-2 md:space-x-4">
                    {[45, 60, 75, 55, 80, 95].map((h, i) => (
                      <motion.div
                        key={i}
                        className="w-full bg-gradient-to-t from-blue-600 to-purple-500 rounded-t-md"
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 + i * 0.1, ease: 'easeOut' }}
                      ></motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <motion.div 
                variants={itemVariants} 
                className="lg:col-span-1 bg-[#1c233a]/60 p-4 rounded-lg border border-gray-700/50"
                animate={{
                  boxShadow: [
                    "0 0 0px 0px rgba(250, 204, 21, 0)",
                    "0 0 20px 5px rgba(250, 204, 21, 0.3)",
                    "0 0 0px 0px rgba(250, 204, 21, 0)",
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <h4 className="text-lg font-semibold text-white mb-4">Đề xuất từ AI</h4>
                <div className="space-y-2">
                  {aiTasks.map((task, i) => <AITask key={i} {...task} />)}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
