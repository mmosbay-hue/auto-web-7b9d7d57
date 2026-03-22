import React, { useState } from 'react';
import { Gift, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const bonus = [
  'Miễn phí gói thiết lập và tích hợp trị giá $2000.',
  'Tặng 1 buổi tư vấn 1-1 về tự động hóa với chuyên gia.',
  'Truy cập bộ tài liệu 100+ quy trình vận hành mẫu.'
];

export default function FinalCTA() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(email) {
      alert(`Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ với bạn qua email: ${email}`);
      setEmail('');
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 max-w-7xl mx-auto bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl"></div>
      </div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Sẵn sàng <span className="accent-gradient-text">giải phóng tiềm năng</span> của bạn?
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-400">
          Hãy để AI CEO Agent SBAY trở thành người đồng hành đắc lực nhất, giúp bạn xây dựng một doanh nghiệp tự động, thông minh và phát triển không giới hạn.
        </p>
        
        <div className="mt-8 bg-[#10152c]/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
          <div className="flex items-center justify-center text-yellow-400">
            <Gift className="h-6 w-6 mr-2" />
            <p className="font-semibold">Ưu đãi đặc biệt cho 50 khách hàng đầu tiên:</p>
          </div>
          <ul className="mt-4 space-y-2 text-gray-300">
            {bonus.map((item, index) => <li key={index}>- {item}</li>)}
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 max-w-lg mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Nhập email của bạn"
              required
              className="flex-grow w-full px-5 py-3 bg-[#050816] border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200"
            />
            <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
              Đăng ký Demo ngay <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </form>

      </motion.div>
    </section>
  );
}