import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

export default function Hero({ videoSrc = 'https://videos.pexels.com/video-files/8570448/8570448-hd_1920_1080_25fps.mp4' }) {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/60"></div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 px-4"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
          Trợ lý <span className="accent-gradient-text">CEO AI</span> đầu tiên tại Việt Nam
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-300">
          Tự động hóa 90% công việc vận hành, giúp CEO x3 hiệu suất và tự do phát triển doanh nghiệp.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Button variant="primary" size="lg">
            Trải nghiệm ngay <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="secondary" size="lg">Tìm hiểu thêm</Button>
        </div>
      </motion.div>
    </section>
  );
}