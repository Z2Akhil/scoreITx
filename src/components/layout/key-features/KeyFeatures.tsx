"use client";
import React, { useRef } from 'react';
import { CustomButton } from '@/components/ui/custom-button';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function KeyFeatures() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const varietyX = useTransform(smoothProgress, [0, 1], [-250, -500]);
  const varietyY = useTransform(smoothProgress, [0, 1], [0, 0]);     // remove Y
  const varietyScale = useTransform(smoothProgress, [0, 1], [1, 1]); // remove scale

  const featuresX = useTransform(smoothProgress, [0, 1], [250, 500]);
  const featuresY = useTransform(smoothProgress, [0, 1], [0, 0]);
  const featuresScale = useTransform(smoothProgress, [0, 1], [1, 1]);

  return (
    <section className="bg-white py-24 w-full overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Header - Centered as in design */}
        <div className="text-center mb-20 flex flex-col items-center">
          <div className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d1e0ff] bg-white px-5 py-2 text-sm font-semibold text-[#0040c1] shadow-sm mb-8 transition-transform hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-5 h-5" fill="currentColor">
              <path d="M248,80a28,28,0,1,0-51.12,15.77l-26.79,33L146,73.4a28,28,0,1,0-36.06,0L85.91,128.74l-26.79-33a28,28,0,1,0-26.6,12L47,194.63A16,16,0,0,0,62.78,208H193.22A16,16,0,0,0,209,194.63l14.47-86.85A28,28,0,0,0,248,80ZM128,40a12,12,0,1,1-12,12A12,12,0,0,1,128,40ZM24,80A12,12,0,1,1,36,92,12,12,0,0,1,24,80ZM193.22,192H62.78L48.86,108.52,81.79,149A8,8,0,0,0,88,152a7.83,7.83,0,0,0,1.08-.07,8,8,0,0,0,6.26-4.74l29.3-67.4a27,27,0,0,0,6.72,0l29.3,67.4a8,8,0,0,0,6.26,4.74A7.83,7.83,0,0,0,168,152a8,8,0,0,0,6.21-3l32.93-40.52ZM220,92a12,12,0,1,1,12-12A12,12,0,0,1,220,92Z" />
            </svg>
            Key Features
          </div>

          <div className="flex flex-col items-center gap-0">
            <h2 className="text-5xl font-semibold tracking-tight text-slate-900 sm:text-7xl text-center leading-[1.1]">
              Explore Our
            </h2>
            <h2 className="text-5xl font-semibold tracking-tight text-[#0040c1] sm:text-7xl text-center leading-[1.1]">
              Standout Features
            </h2>
          </div>
        </div>

        {/* 2x2 Bento Grid with specific gaps and rounded corners */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-32">

          {/* Card 1: Expense & Income Tracking */}
          <div className="group relative overflow-hidden rounded-[32px] bg-[#f0f5ff] min-h-[580px] md:min-h-[640px] flex flex-col p-10 md:p-14 lg:p-16 transition-all duration-500 hover:shadow-2xl border border-slate-50">
            <img
              src="https://framerusercontent.com/images/AmwXrcpwI566WaiIbAL7PmGMYPQ.png"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt=""
            />

            <div className="relative z-20 mb-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-[#171717] mb-4 leading-tight">Expense & Income Tracking</h3>
              <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-[420px]">
                Record and categorize expense & income automatically or manually.
              </p>
            </div>

            {/* Graphics centered in the lower part */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none mt-40 transition-transform duration-700 group-hover:scale-110">
              <div className="relative w-full max-w-[400px] aspect-[716/414]">
                <div className="relative w-full h-full rounded-[18px] overflow-hidden shadow-[rgba(0,64,193,0.25)_7px_10px_40px_0px] transform rotate-[-3deg] transition-all duration-700 group-hover:rotate-0">
                  <img
                    src="https://framerusercontent.com/images/K1dKqLkgescF2YxTRGcgcziP0.png"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Smart Savings Goals */}
          <div className="group relative overflow-hidden rounded-[32px] bg-[#f0f5ff] min-h-[580px] md:min-h-[640px] flex flex-col p-10 md:p-14 lg:p-16 transition-all duration-500 hover:shadow-2xl border border-slate-50">
            <img
              src="https://framerusercontent.com/images/vqovzzbe2Aal0uT3daXxOyAqy0.png"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt=""
            />

            <div className="relative z-20 mb-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-[#171717] mb-4 leading-tight">Smart Savings Goals</h3>
              <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-[420px]">
                Set specific savings goals and track progress towards them.
              </p>
            </div>

            <div className="absolute inset-x-0 bottom-0 flex flex-col items-center pointer-events-none transition-transform duration-700 group-hover:-translate-y-8">
              <div className="relative w-full max-w-[400px] flex flex-col items-center">
                <img src="https://framerusercontent.com/images/UBWiwgfWh2xmwtaNFXrxv5sfWl8.png" className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)] transform translate-y-4" alt="" />
              </div>
            </div>
          </div>

          {/* Card 3: Financial Analytics */}
          <div className="group relative overflow-hidden rounded-[32px] bg-[#f0f5ff] min-h-[580px] md:min-h-[640px] flex flex-col p-10 md:p-14 lg:p-16 transition-all duration-500 hover:shadow-2xl border border-slate-50">
            <img
              src="https://framerusercontent.com/images/L3WMq2rdRHO8rdWDG8h0cMj29Bw.png"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt=""
            />

            <div className="relative z-20 mb-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-[#171717] mb-4 leading-tight">Financial Analytics</h3>
              <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-[420px]">
                Generate reports and visualizations to analyze spending habits.
              </p>
            </div>

            <div className="absolute bottom-[-10%] right-[-10%] w-[450px] md:w-[550px] pointer-events-none transition-all duration-700 group-hover:-translate-y-6">
              <div style={{ transform: 'rotate(15deg)' }} className="relative w-full transition-transform duration-700 group-hover:scale-105">
                <img src="https://framerusercontent.com/images/OQeFoCnJIzw1rB9itvFvGGvY.png" className="w-[50%] mx-auto h-auto drop-shadow-2xl" alt="" />
                <img src="https://framerusercontent.com/images/gxQmZxFYa1dUokFSYyuBGf0Zko.png" className="absolute top-[2.2%] left-[29.8%] w-[40.4%] h-auto rounded-[3rem]" alt="" />
                <img src="https://framerusercontent.com/images/4jj9r0OSqzbOznhxzfxQPGJWyhQ.png" className="absolute top-[35%] left-[5%] w-[85%] shadow-[rgba(0,64,193,0.25)_0px_15px_44px_0px] z-40 transition-transform duration-700 group-hover:translate-x-4" alt="" />
              </div>
            </div>
          </div>

          {/* Card 4: Get Choice App (Blue Theme) */}
          <div className="group relative overflow-hidden rounded-[32px] bg-[#0040c1] min-h-[580px] md:min-h-[640px] flex flex-col justify-end p-10 md:p-14 lg:p-16 transition-all duration-500 hover:shadow-2xl border border-blue-600">
            <img
              src="https://framerusercontent.com/images/b3Iyt6cDu9CxsRz3ZsKERuOSYZ8.png"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              alt=""
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 pointer-events-none transition-all duration-1000 group-hover:rotate-[-10deg] group-hover:scale-110 opacity-60">
              <img src="https://framerusercontent.com/images/jc4HJpos41KVgY76kiPyn8nwGc.svg" className="w-full h-full" alt="" />
            </div>

            <div className="relative z-20">
              <h4 className="text-5xl md:text-6xl font-bold text-white mb-10 tracking-tight">Get the app</h4>
              <div className="flex">
                <CustomButton text="Get the template" variant="white" href="#" className="text-xl py-6 px-12 rounded-full font-bold shadow-xl transition-all duration-300 hover:px-14" />
              </div>
            </div>
          </div>
        </div>

        {/* --- Addition Section --- */}
        <div className="mt-40 mb-20 text-center">
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
            <span className="inline-block transition-transform duration-700 hover:translate-y-[-5px]">...and</span>{" "}
            <span className="inline-block transition-transform duration-700 hover:translate-y-[-5px]">more</span>{" "}
            <span className="inline-block transition-transform duration-700 hover:translate-y-[-5px]">additional</span>{" "}
            <span className="inline-block transition-transform duration-700 hover:translate-y-[-5px]">features</span>
          </h3>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-40">
          {[
            {
              title: 'Budgeting',
              desc: 'Track budgets for different categories.',
              color: 'rgb(209, 224, 255)',
              iconColor: 'rgb(41, 112, 255)',
              icon: <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm71.87,53.27L136,114.14V40.37A88,88,0,0,1,199.87,77.27ZM120,40.37v83l-71.89,41.5A88,88,0,0,1,120,40.37ZM128,216a88,88,0,0,1-71.87-37.27L207.89,91.12A88,88,0,0,1,128,216Z" />
            },
            {
              title: 'Debt Management',
              desc: 'Track debt balances, interest rates, and create plans.',
              color: 'rgb(209, 224, 255)',
              iconColor: 'rgb(41, 112, 255)',
              icon: <path d="M244.24,60a8,8,0,0,0-7.75-.4c-42.93,21-73.59,11.16-106,.78-34-10.89-69.25-22.14-117.95,1.64A8,8,0,0,0,8,69.24V189.17a8,8,0,0,0,11.51,7.19c42.93-21,73.59-11.16,106.05-.78,19.24,6.15,38.84,12.42,61,12.42,17.09,0,35.73-3.72,56.91-14.06a8,8,0,0,0,4.49-7.18V66.83A8,8,0,0,0,244.24,60ZM232,181.67c-40.6,18.17-70.25,8.69-101.56-1.32-19.24-6.15-38.84-12.42-61-12.42a122,122,0,0,0-45.4,9V74.33c40.6-18.17,70.25-8.69,101.56,1.32S189.14,96,232,79.09ZM128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,144ZM56,96v48a8,8,0,0,1-16,0V96a8,8,0,1,1,16,0Zm144,64V112a8,8,0,1,1,16,0v48a8,8,0,1,1-16,0Z" />
            },
            {
              title: 'Investment Tracking',
              desc: 'Track investments, including stocks, bonds, and funds.',
              color: 'rgb(232, 249, 255)',
              iconColor: 'rgb(18, 173, 231)',
              icon: <path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0V156.69l50.34-50.35a8,8,0,0,1,11.32,0L128,132.69,180.69,80H160a8,8,0,0,1,0-16h40a8,8,0,0,1,8,8v40a8,8,0,0,1-16,0V91.31l-58.34,58.35a8,8,0,0,1-11.32,0L96,123.31l-56,56V200H224A8,8,0,0,1,232,208Z" />
            },
            {
              title: 'Bill Payment',
              desc: 'Pay bills directly through the app. One stop for all.',
              color: 'rgb(255, 222, 243)',
              iconColor: 'rgb(255, 58, 183)',
              icon: <path d="M28,128a8,8,0,0,1,0-16H56a8,8,0,0,0,0-16H40a24,24,0,0,1,0-48,8,8,0,0,1,16,0h8a8,8,0,0,1,0,16H40a8,8,0,0,0,0,16H56a24,24,0,0,1,0,48,8,8,0,0,1-16,0ZM232,56V192a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V152a8,8,0,0,1,16,0v40H160V160H80a8,8,0,0,1,0-16h80V112H104a8,8,0,0,1,0-16H216V64H96a8,8,0,0,1,0-16H224A8,8,0,0,1,232,56Zm-56,88h40V112H176Zm40,48V160H176v32Z" />
            },
            {
              title: 'Tax Preparation',
              desc: 'Get assistance with tax preparation and filing.',
              color: 'rgb(223, 249, 224)',
              iconColor: 'rgb(61, 176, 66)',
              icon: <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z" />
            }
          ].map((f, i) => (
            <div key={i} className="group/f relative flex flex-col p-8 rounded-[20px] bg-gradient-to-r from-[#f5faff] to-[#f9fcff] transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px]">
              <div className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center shadow-[0_0_0_4px_white] transition-transform duration-300 group-hover/f:scale-110" style={{ backgroundColor: f.color }}>
                <svg viewBox="0 0 256 256" className="w-7 h-7" style={{ fill: f.iconColor }}>{f.icon}</svg>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">{f.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Phone Wrapper Section */}
        <div ref={containerRef} className="relative w-full py-40 flex flex-col items-center justify-center">
          {/* Background Text Overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 flex-col">
            {/* VARIETY — top-left, drifts left */}
            <motion.div
              style={{ x: varietyX }}
              className="absolute mb-[8%] text-[clamp(64px,10vw,160px)] font-bold text-[#eff4ff] select-none whitespace-nowrap pointer-events-none leading-none"
            >
              VARIETY
            </motion.div>

            {/* FEATURES — bottom-right, drifts right */}
            <motion.div
              style={{ x: featuresX }}
              className="absolute mt-[8%] text-[clamp(64px,10vw,160px)] font-bold text-[#eff4ff] select-none whitespace-nowrap pointer-events-none leading-none"
            >
              FEATURES
            </motion.div>
          </div>

          {/* Central Phone Mockup */}
          <div className="relative z-10 w-[300px] md:w-[462px] aspect-[462/923] group/phone">
            <div className="absolute inset-0 bg-blue-100 blur-[100px] opacity-50 -z-10 group-hover/phone:opacity-80 transition-opacity"></div>

            {/* Frame */}
            <img
              src="https://framerusercontent.com/images/JDSot5NIN3WyEkAj3NoSKPG7f0c.png"
              className="w-full h-full object-cover rounded-[60px]"
              alt="iPhone Frame"
            />

            {/* Screen Content */}
            <div className="absolute top-[2.5%] left-[4.5%] right-[4.5%] bottom-[2.5%] overflow-hidden rounded-[54px]">
              <img
                src="https://framerusercontent.com/images/yJLaUZwB3qYDuKfwXuJj6zQvge0.png"
                className="w-full h-full object-cover transition-transform duration-700 group-hover/phone:scale-110"
                alt="Phone Screen"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
