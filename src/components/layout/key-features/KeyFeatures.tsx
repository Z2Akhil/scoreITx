"use client";
import React from 'react';
import { CustomButton } from '@/components/ui/custom-button';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function KeyFeatures() {
  // SVG Component: Real-Time Test Analytics
  const RealTimeAnalyticsSVG = () => (
    <svg viewBox="0 0 620 380" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="areaGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2970FF" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#2970FF" stopOpacity="0.06" />
        </linearGradient>
      </defs>

      <rect width="620" height="380" rx="20" fill="#f7fbff" />

      {/* KPI chips */}
      <g>
        <rect x="28" y="22" width="140" height="56" rx="12" fill="#fff" stroke="#e9f1ff" />
        <text x="44" y="50" fontSize="14" fontWeight="700" fill="#0040c1">Avg Score</text>
        <text x="44" y="76" fontSize="22" fontWeight="800" fill="#0b3b91">86%</text>

        <rect x="184" y="22" width="160" height="56" rx="12" fill="#fff" stroke="#e9f1ff" />
        <text x="200" y="50" fontSize="14" fontWeight="700" fill="#0040c1">Active Students</text>
        <text x="200" y="76" fontSize="22" fontWeight="800" fill="#0b3b91">3.4k</text>

        <rect x="364" y="22" width="220" height="56" rx="12" fill="#fff" stroke="#e9f1ff" />
        <text x="380" y="50" fontSize="14" fontWeight="700" fill="#0040c1">Avg Time / Test</text>
        <text x="380" y="76" fontSize="22" fontWeight="800" fill="#0b3b91">32m</text>
      </g>

      {/* Line chart area */}
      <g transform="translate(28,108)">
        <rect x="0" y="0" width="564" height="240" rx="14" fill="#fff" stroke="#eef6ff" />
        <path d="M12 188 C 72 140, 132 116, 192 128 C 252 140, 312 108, 372 124 C 432 140, 492 96, 552 64" fill="none" stroke="#2970FF" strokeWidth="4" strokeLinecap="round" />
        <path d="M12 188 C 72 140, 132 116, 192 128 C 252 140, 312 108, 372 124 C 432 140, 492 96, 552 64 L552 240 L12 240 Z" fill="url(#areaGrad2)" opacity="0.95" />

        {/* Points */}
        <g fill="#fff" stroke="#2970FF" strokeWidth="2">
          <circle cx="48" cy="156" r="5" />
          <circle cx="120" cy="128" r="5" />
          <circle cx="192" cy="140" r="5" />
          <circle cx="264" cy="108" r="5" />
          <circle cx="336" cy="124" r="5" />
          <circle cx="408" cy="92" r="5" />
          <circle cx="480" cy="68" r="5" />
        </g>

        {/* X labels */}
        <text x="12" y="224" fontSize="12" fill="#6b7280">Wk1</text>
        <text x="100" y="224" fontSize="12" fill="#6b7280">Wk2</text>
        <text x="188" y="224" fontSize="12" fill="#6b7280">Wk3</text>
        <text x="276" y="224" fontSize="12" fill="#6b7280">Wk4</text>
        <text x="364" y="224" fontSize="12" fill="#6b7280">Wk5</text>
        <text x="452" y="224" fontSize="12" fill="#6b7280">Wk6</text>
        <text x="540" y="224" fontSize="12" fill="#6b7280">Wk7</text>
      </g>
    </svg>
  );

  // SVG Component: Student Performance Tracking
  const StudentPerformanceSVG = () => (
    <svg viewBox="0 0 620 380" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="620" height="380" rx="18" fill="#f7fbff" />

      {/* Left: Donut + small stats */}
      <g transform="translate(28,32)">
        <rect x="0" y="0" width="240" height="316" rx="12" fill="#fff" stroke="#eef6ff" />
        <circle cx="120" cy="122" r="72" fill="#fff" />
        <circle cx="120" cy="122" r="72" stroke="#e6f0ff" strokeWidth="34" strokeDasharray="220 200" strokeLinecap="round" fill="none" transform="rotate(-90 120 122)" />
        <text x="120" y="132" fontSize="26" fontWeight="800" textAnchor="middle" fill="#0b3b91">84%</text>
        <text x="120" y="156" fontSize="12" textAnchor="middle" fill="#6b7280">Class Avg</text>

        <g transform="translate(28,200)">
          <text x="0" y="22" fontSize="12" fill="#6b7280">Top 3 Students</text>
          <text x="0" y="44" fontSize="14" fontWeight="700" fill="#111827">1. Alex J — 92%</text>
          <text x="0" y="64" fontSize="14" fontWeight="700" fill="#111827">2. Maria G — 89%</text>
          <text x="0" y="84" fontSize="14" fontWeight="700" fill="#111827">3. Sam K — 87%</text>
        </g>
      </g>

      {/* Right: Timeline sparkline and bars */}
      <g transform="translate(288,32)">
        <rect x="0" y="0" width="304" height="316" rx="12" fill="#fff" stroke="#eef6ff" />
        <path d="M12 240 L48 200 L84 220 L120 180 L156 210 L192 160 L228 190 L264 140" stroke="#2970FF" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="translate(0,-80)" />
        <g transform="translate(24,176)">
          <rect x="0" y="28" width="28" height="64" rx="6" fill="#cfe9ff" />
          <rect x="40" y="8" width="28" height="84" rx="6" fill="#93c5fd" />
          <rect x="80" y="44" width="28" height="48" rx="6" fill="#60a5fa" />
          <rect x="120" y="0" width="28" height="92" rx="6" fill="#2970FF" />
          <rect x="160" y="20" width="28" height="72" rx="6" fill="#1e40af" />
        </g>
        <text x="16" y="308" fontSize="11" fill="#6b7280">Mon</text>
        <text x="64" y="308" fontSize="11" fill="#6b7280">Tue</text>
        <text x="112" y="308" fontSize="11" fill="#6b7280">Wed</text>
        <text x="160" y="308" fontSize="11" fill="#6b7280">Thu</text>
        <text x="208" y="308" fontSize="11" fill="#6b7280">Fri</text>
      </g>
    </svg>
  );

  // SVG Component: Batch Intelligence Dashboard
  const BatchIntelligenceSVG = () => (
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background */}
      <rect width="400" height="300" fill="#f0f5ff" rx="16"/>
      
      <defs>
        <linearGradient id="heatmapGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#fef08a', stopOpacity: 1}} />
          <stop offset="50%" style={{stopColor: '#fbbf24', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#f97316', stopOpacity: 1}} />
        </linearGradient>
      </defs>

      {/* Heatmap Grid */}
      <g filter="drop-shadow(0 6px 16px rgba(0,64,193,0.1))">
        <rect x="35" y="50" width="330" height="220" fill="white" rx="12" stroke="#e0e7ff" strokeWidth="1"/>
        
        {/* Title */}
        <text x="55" y="80" fontSize="14" fontWeight="600" fill="#1f2937">Batch Performance Heatmap</text>
        
        {/* Heatmap cells - representing students and topics */}
        {/* Row 1 */}
        <rect x="55" y="100" width="25" height="25" fill="#dcfce7" rx="3"/>
        <rect x="85" y="100" width="25" height="25" fill="#bbf7d0" rx="3"/>
        <rect x="115" y="100" width="25" height="25" fill="#86efac" rx="3"/>
        <rect x="145" y="100" width="25" height="25" fill="#4ade80" rx="3"/>
        <rect x="175" y="100" width="25" height="25" fill="#22c55e" rx="3"/>
        <rect x="205" y="100" width="25" height="25" fill="#16a34a" rx="3"/>
        
        {/* Row 2 */}
        <rect x="55" y="135" width="25" height="25" fill="#fef3c7" rx="3"/>
        <rect x="85" y="135" width="25" height="25" fill="#fde68a" rx="3"/>
        <rect x="115" y="135" width="25" height="25" fill="#fcd34d" rx="3"/>
        <rect x="145" y="135" width="25" height="25" fill="#fbbf24" rx="3"/>
        <rect x="175" y="135" width="25" height="25" fill="#f59e0b" rx="3"/>
        <rect x="205" y="135" width="25" height="25" fill="#d97706" rx="3"/>
        
        {/* Row 3 */}
        <rect x="55" y="170" width="25" height="25" fill="#fee2e2" rx="3"/>
        <rect x="85" y="170" width="25" height="25" fill="#fecaca" rx="3"/>
        <rect x="115" y="170" width="25" height="25" fill="#fca5a5" rx="3"/>
        <rect x="145" y="170" width="25" height="25" fill="#f87171" rx="3"/>
        <rect x="175" y="170" width="25" height="25" fill="#ef4444" rx="3"/>
        <rect x="205" y="170" width="25" height="25" fill="#dc2626" rx="3"/>
        
        {/* Legend */}
        <text x="240" y="118" fontSize="11" fontWeight="500" fill="#6b7280">Excellent</text>
        <text x="240" y="153" fontSize="11" fontWeight="500" fill="#6b7280">Average</text>
        <text x="240" y="188" fontSize="11" fontWeight="500" fill="#6b7280">Needs Work</text>
        
        {/* Comparison arrow */}
        <path d="M 280 200 Q 310 180 340 200" stroke="#0040c1" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <text x="290" y="235" fontSize="12" fontWeight="600" fill="#0040c1">78% Avg Score</text>
      </g>
    </svg>
  );

  // SVG Component: Get ScoreIT (keeping the wave design)
  const GetScoreITSVG = () => (
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{stopColor: '#1e3a8a', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#0040c1', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      
      {/* Background */}
      <rect width="400" height="300" fill="url(#waveGradient)"/>
      
      {/* Wave Shape */}
      <path d="M 0 150 Q 100 100 200 150 T 400 150 L 400 300 L 0 300 Z" fill="#2970FF" opacity="0.3"/>
      <path d="M 0 180 Q 100 140 200 180 T 400 180 L 400 300 L 0 300 Z" fill="#2970FF" opacity="0.2"/>
      
      {/* Floating circles for visual interest */}
      <circle cx="80" cy="80" r="20" fill="#60a5fa" opacity="0.3"/>
      <circle cx="320" cy="120" r="35" fill="#3b82f6" opacity="0.2"/>
      <circle cx="150" cy="60" r="15" fill="#93c5fd" opacity="0.25"/>
    </svg>
  );

  return (
    <section id="features" className="relative bg-white py-24 w-full overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%231852CC' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
        }}
      ></div>
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Header - Centered */}
        <div className="text-center mb-20 flex flex-col items-center">
          <Link href="/#features" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d1e0ff] bg-white px-5 py-2 text-sm font-semibold text-[#0040c1] shadow-sm mb-8 transition-transform hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-5 h-5" fill="currentColor">
              <path d="M248,80a28,28,0,1,0-51.12,15.77l-26.79,33L146,73.4a28,28,0,1,0-36.06,0L85.91,128.74l-26.79-33a28,28,0,1,0-26.6,12L47,194.63A16,16,0,0,0,62.78,208H193.22A16,16,0,0,0,209,194.63l14.47-86.85A28,28,0,0,0,248,80ZM128,40a12,12,0,1,1-12,12A12,12,0,0,1,128,40ZM24,80A12,12,0,1,1,36,92,12,12,0,0,1,24,80ZM193.22,192H62.78L48.86,108.52,81.79,149A8,8,0,0,0,88,152a7.83,7.83,0,0,0,1.08-.07,8,8,0,0,0,6.26-4.74l29.3-67.4a27,27,0,0,0,6.72,0l29.3,67.4a8,8,0,0,0,6.26,4.74A7.83,7.83,0,0,0,168,152a8,8,0,0,0,6.21-3l32.93-40.52ZM220,92a12,12,0,1,1,12-12A12,12,0,0,1,220,92Z" />
            </svg>
            Core Features
          </Link>

          <div className="flex flex-col items-center gap-0">
            <h2 className="text-5xl font-semibold tracking-tight text-slate-900 sm:text-7xl text-center leading-[1.1]">
              Discover Our
            </h2>
            <h2 className="text-5xl font-semibold tracking-tight text-[#0040c1] sm:text-7xl text-center leading-[1.1]">
              Analytics Capabilities
            </h2>
          </div>
        </div>

        {/* 2x2 Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-32">

          {/* Card 1: Real-Time Test Analytics */}
          <Link href="/#partner-form" className="group relative overflow-hidden rounded-[32px] bg-[#f0f5ff] min-h-[580px] md:min-h-[640px] flex flex-col p-10 md:p-14 lg:p-16 transition-all duration-500 hover:shadow-2xl border border-slate-50">
            <img
              src="https://framerusercontent.com/images/AmwXrcpwI566WaiIbAL7PmGMYPQ.png"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-0"
              alt=""
            />

            <div className="relative z-20 mb-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-[#171717] mb-4 leading-tight group-hover:text-[#0040c1] transition-colors">Real-Time Test Analytics</h3>
              <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-[420px]">
                Conduct tests and instantly generate detailed student performance metrics with real-time data visualization.
              </p>
            </div>

            {/* Graphics centered in the lower part */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none mt-24 transition-transform duration-700 group-hover:scale-105">
              <div className="relative w-full max-w-[620px] aspect-[16/9]">
                <RealTimeAnalyticsSVG />
              </div>
            </div>
          </Link>

          {/* Card 2: Student Performance Tracking */}
          <Link href="/#partner-form" className="group relative overflow-hidden rounded-[32px] bg-[#f0f5ff] min-h-[580px] md:min-h-[640px] flex flex-col p-10 md:p-14 lg:p-16 transition-all duration-500 hover:shadow-2xl border border-slate-50">
            <img
              src="https://framerusercontent.com/images/vqovzzbe2Aal0uT3daXxOyAqy0.png"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-0"
              alt=""
            />

            <div className="relative z-20 mb-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-[#171717] mb-4 leading-tight group-hover:text-[#0040c1] transition-colors">Student Performance Tracking</h3>
              <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-[420px]">
                Track individual student progress across multiple tests and identify improvement areas with visual progress timelines.
              </p>
            </div>

            <div className="absolute inset-x-0 bottom-0 flex flex-col items-center pointer-events-none transition-transform duration-700 group-hover:-translate-y-8">
              <div className="relative w-full max-w-[620px] aspect-[16/9]">
                <StudentPerformanceSVG />
              </div>
            </div>
          </Link>

          {/* Card 3: Batch Intelligence Dashboard */}
          <Link href="/#partner-form" className="group relative overflow-hidden rounded-[32px] bg-[#f0f5ff] min-h-[580px] md:min-h-[640px] flex flex-col p-10 md:p-14 lg:p-16 transition-all duration-500 hover:shadow-2xl border border-slate-50">
            <img
              src="https://framerusercontent.com/images/L3WMq2rdRHO8rdWDG8h0cMj29Bw.png"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-0"
              alt=""
            />

            <div className="relative z-20 mb-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-[#171717] mb-4 leading-tight group-hover:text-[#0040c1] transition-colors">Batch Intelligence Dashboard</h3>
              <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-[420px]">
                Optimize batch distribution and identify group-wide performance gaps with advanced analytics.
              </p>
            </div>

            <div className="absolute bottom-0 right-0 w-[520px] md:w-[640px] pointer-events-none transition-all duration-700 group-hover:-translate-y-3">
              <div style={{ transform: 'rotate(10deg)' }} className="relative w-full transition-transform duration-700 group-hover:scale-105">
                <div className="w-full h-auto scale-100 origin-top-right">
                  <BatchIntelligenceSVG />
                </div>
              </div>
            </div>
          </Link>

          {/* Card 4: Get ScoreIT App (Blue Theme) */}
          <div className="group relative overflow-hidden rounded-[32px] bg-[#0040c1] min-h-[580px] md:min-h-[640px] flex flex-col justify-end p-10 md:p-14 lg:p-16 transition-all duration-500 hover:shadow-2xl border border-blue-600">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src="https://framerusercontent.com/images/b3Iyt6cDu9CxsRz3ZsKERuOSYZ8.png"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                alt=""
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 pointer-events-none transition-all duration-1000 group-hover:rotate-[-10deg] group-hover:scale-110 opacity-55">
              <img src="https://framerusercontent.com/images/jc4HJpos41KVgY76kiPyn8nwGc.svg" className="w-full h-full" alt="" />
            </div>
            <div className="relative z-20">
              <h4 className="text-5xl md:text-6xl font-bold text-white mb-10 tracking-tight">Get ScoreIT</h4>
              <div className="flex">
                <CustomButton text="Join Now" variant="white" href="/#partner-form" className="text-xl py-6 px-12 rounded-full font-bold shadow-xl transition-all duration-300 hover:px-14" />
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features Section */}
        <div className="mt-40 mb-20 text-center">
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
            <span className="inline-block transition-transform duration-700 hover:translate-y-[-5px]">Complete</span>{" "}
            <span className="inline-block transition-transform duration-700 hover:translate-y-[-5px]">Academic</span>{" "}
            <span className="inline-block transition-transform duration-700 hover:translate-y-[-5px]">Intelligence</span>{" "}
            <span className="inline-block transition-transform duration-700 hover:translate-y-[-5px]">Platform</span>
          </h3>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-40">
          {[
            {
              title: 'Smart Test Creation',
              desc: 'Create customized tests with multiple choice, short answers, and essay formats in minutes.',
              color: 'rgb(209, 224, 255)',
              iconColor: 'rgb(41, 112, 255)',
              icon: <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm71.87,53.27L136,114.14V40.37A88,88,0,0,1,199.87,77.27ZM120,40.37v83l-71.89,41.5A88,88,0,0,1,120,40.37ZM128,216a88,88,0,0,1-71.87-37.27L207.89,91.12A88,88,0,0,1,128,216Z" />
            },
            {
              title: 'Topic-Wise Analysis',
              desc: 'Identify weak topics and strength areas with detailed performance breakdowns by subject.',
              color: 'rgb(209, 224, 255)',
              iconColor: 'rgb(41, 112, 255)',
              icon: <path d="M244.24,60a8,8,0,0,0-7.75-.4c-42.93,21-73.59,11.16-106,.78-34-10.89-69.25-22.14-117.95,1.64A8,8,0,0,0,8,69.24V189.17a8,8,0,0,0,11.51,7.19c42.93-21,73.59-11.16,106.05-.78,19.24,6.15,38.84,12.42,61,12.42,17.09,0,35.73-3.72,56.91-14.06a8,8,0,0,0,4.49-7.18V66.83A8,8,0,0,0,244.24,60ZM232,181.67c-40.6,18.17-70.25,8.69-101.56-1.32-19.24-6.15-38.84-12.42-61-12.42a122,122,0,0,0-45.4,9V74.33c40.6-18.17,70.25-8.69,101.56,1.32S189.14,96,232,79.09ZM128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,144ZM56,96v48a8,8,0,0,1-16,0V96a8,8,0,1,1,16,0Zm144,64V112a8,8,0,1,1,16,0v48a8,8,0,1,1-16,0Z" />
            },
            {
              title: 'Rank & Progress Tracking',
              desc: 'Rank students, track progress over time, and motivate with detailed performance comparisons.',
              color: 'rgb(232, 249, 255)',
              iconColor: 'rgb(18, 173, 231)',
              icon: <path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0V156.69l50.34-50.35a8,8,0,0,1,11.32,0L128,132.69,180.69,80H160a8,8,0,0,1,0-16h40a8,8,0,0,1,8,8v40a8,8,0,0,1-16,0V91.31l-58.34,58.35a8,8,0,0,1-11.32,0L96,123.31l-56,56V200H224A8,8,0,0,1,232,208Z" />
            },
            {
              title: 'Batch Comparison',
              desc: 'Compare performance across multiple batches and cohorts with advanced heatmaps and charts.',
              color: 'rgb(255, 222, 243)',
              iconColor: 'rgb(255, 58, 183)',
              icon: <path d="M28,128a8,8,0,0,1,0-16H56a8,8,0,0,0,0-16H40a24,24,0,0,1,0-48,8,8,0,0,1,16,0h8a8,8,0,0,1,0,16H40a8,8,0,0,0,0,16H56a24,24,0,0,1,0,48,8,8,0,0,1-16,0ZM232,56V192a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V152a8,8,0,0,1,16,0v40H160V160H80a8,8,0,0,1,0-16h80V112H104a8,8,0,0,1,0-16H216V64H96a8,8,0,0,1,0-16H224A8,8,0,0,1,232,56Zm-56,88h40V112H176Zm40,48V160H176v32Z" />
            },
            {
              title: 'Exportable Reports',
              desc: 'Generate detailed, professional reports for students, parents, and institute management instantly.',
              color: 'rgb(223, 249, 224)',
              iconColor: 'rgb(61, 176, 66)',
              icon: <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z" />
            },
            {
              title: 'Time Management Insights',
              desc: 'Analyze question-wise time allocation and identify students struggling with time management.',
              color: 'rgb(255, 240, 210)',
              iconColor: 'rgb(255, 140, 0)',
              icon: <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm60.61-119.61a8,8,0,0,1-11.22,11.22L128,107.05V72a8,8,0,0,1,16,0v36.66Z" />
            }
          ].map((f, i) => (
            <Link key={i} href="/#partner-form" className="group/f relative flex flex-col p-8 rounded-[20px] bg-gradient-to-r from-[#f5faff] to-[#f9fcff] transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px]">
              <div className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center shadow-[0_0_0_4px_white] transition-transform duration-300 group-hover/f:scale-110" style={{ backgroundColor: f.color }}>
                <svg viewBox="0 0 256 256" className="w-7 h-7" style={{ fill: f.iconColor }}>{f.icon}</svg>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover/f:text-[#0040c1] transition-colors">{f.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </Link>
          ))}
        </div>
    
      </div>
    </section>
  );
}