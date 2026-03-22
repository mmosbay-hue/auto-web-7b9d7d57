import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import PainPoints from './components/sections/PainPoints';
import CoreSolution from './components/sections/CoreSolution';
import DeeperPain from './components/sections/DeeperPain';
import WhatIsIt from './components/sections/WhatIsIt';
import WhySbay from './components/sections/WhySbay';
import DashboardPreview from './components/sections/DashboardPreview';
import HowItWorks from './components/sections/HowItWorks';
import TargetAudience from './components/sections/TargetAudience';
import UseCases from './components/sections/UseCases';
import CaseStudy from './components/sections/CaseStudy';
import Commitment from './components/sections/Commitment';
import FinalCTA from './components/sections/FinalCTA';
import StickyCTA from './components/ui/StickyCTA';
import ChatWidget from './components/ui/ChatWidget';

export default function App() {
  return (
    <div className="bg-[#050816] text-gray-100 overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <CoreSolution />
        <DeeperPain />
        <WhatIsIt />
        <WhySbay />
        <DashboardPreview />
        <HowItWorks />
        <TargetAudience />
        <UseCases />
        <CaseStudy />
        <Commitment />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTA />
      <ChatWidget />
    </div>
  );
}
