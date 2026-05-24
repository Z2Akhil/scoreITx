"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { CustomButton } from '@/components/ui/custom-button';
import { 
  BarChart3, 
  BrainCircuit, 
  TrendingUp, 
  Users, 
  Sparkles,
  Zap,
  ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const indicators = [
  { text: "Built for Coaching Institutes", icon: Users, href: "/#partner-form" },
  { text: "Real-Time Academic Analytics", icon: TrendingUp, href: "/#features" },
  { text: "Batch & Student Intelligence", icon: BrainCircuit, href: "/#features" },
  { text: "Performance Tracking Infrastructure", icon: BarChart3, href: "/#features" }
];

// --- COLORFUL SVGS START ---

const BatchPerformanceHeatmap = () => (
  <svg viewBox="0 0 280 170" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <text x="0" y="15" fontSize="11" fontWeight="700" fill="#64748b" className="uppercase tracking-wider">Batch Performance Heatmap</text>
    <g transform="translate(0, 30)">
      {Array.from({length: 48}).map((_, i) => {
        const row = Math.floor(i / 12);
        const col = i % 12;
        const colors = [
          '#dcfce7', '#c7f0d8', '#a3e635', '#84cc16', '#65a30d', '#4b5320',
          '#fef3c7', '#fde68a', '#fcd34d', '#fbbf24', '#f59e0b', '#d97706',
          '#fee2e2', '#fecaca', '#fca5a5', '#f87171', '#ef4444', '#dc2626',
        ];
        const colorIndex = (row * 6 + (col % 6)) % colors.length;
        return (
          <rect
            key={i}
            x={col * 22}
            y={row * 14}
            width="20"
            height="12"
            fill={colors[colorIndex]}
            rx="2"
          />
        );
      })}
    </g>
    <g transform="translate(0, 115)">
      <text x="0" y="10" fontSize="9" fontWeight="500" fill="#94a3b8">Excellent</text>
      <rect x="50" y="2" width="10" height="8" fill="#dcfce7" rx="1" />
      <text x="75" y="10" fontSize="9" fontWeight="500" fill="#94a3b8">Average</text>
      <rect x="120" y="2" width="10" height="8" fill="#fcd34d" rx="1" />
      <text x="145" y="10" fontSize="9" fontWeight="500" fill="#94a3b8">Critical</text>
      <rect x="190" y="2" width="10" height="8" fill="#ef4444" rx="1" />
    </g>
    <text x="0" y="160" fontSize="11" fontWeight="700" fill="#1852CC">78% Avg Score • 12 Topics Analyzed</text>
  </svg>
);

const StudentProgressionChart = () => (
  <svg viewBox="0 0 180 170" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="progressGrad" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#2970FF" />
        <stop offset="100%" stopColor="#0040c1" />
      </linearGradient>
    </defs>
    <text x="0" y="15" fontSize="11" fontWeight="700" fill="#64748b" className="uppercase tracking-wider">Student Progression</text>
    <line x1="5" y1="130" x2="175" y2="130" stroke="#e2e8f0" strokeWidth="1" />
    {[35, 65, 45, 85, 95].map((h, i) => (
      <rect
        key={i}
        x={10 + i * 32}
        y={130 - h}
        width="22"
        height={h}
        fill="url(#progressGrad)"
        rx="3"
      />
    ))}
    <g transform="translate(0, 148)">
      {['S1', 'S2', 'S3', 'S4', 'S5'].map((s, i) => (
        <text key={i} x={21 + i * 32} y="0" fontSize="9" fontWeight="500" fill="#94a3b8" textAnchor="middle">{s}</text>
      ))}
    </g>
    <text x="0" y="165" fontSize="11" fontWeight="700" fill="#22c55e">↑ 23.5% Overall Growth</text>
  </svg>
);

const TopicStrengthAnalysis = () => (
  <svg viewBox="0 0 280 170" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <text x="0" y="15" fontSize="11" fontWeight="700" fill="#64748b" className="uppercase tracking-wider">Topic Strength</text>
    {[
      { label: 'Algebra', width: 170, color: '#22c55e' },
      { label: 'Geometry', width: 120, color: '#f59e0b' },
      { label: 'Calculus', width: 90, color: '#ef4444' },
      { label: 'Stats', width: 140, color: '#f59e0b' }
    ].map((item, i) => (
      <g key={i} transform={`translate(0, ${40 + i * 22})`}>
        <text x="0" y="10" fontSize="10" fontWeight="600" fill="#475569">{item.label}</text>
        <rect x="70" y="0" width="180" height="12" fill="#f8fafc" rx="2" />
        <rect x="70" y="0" width={item.width} height="12" fill={item.color} rx="2" opacity="0.8" />
        <text x={75 + item.width} y="10" fontSize="10" fontWeight="700" fill="#1e293b">{Math.round(item.width/1.8)}%</text>
      </g>
    ))}
    <g transform="translate(0, 155)">
      <rect x="0" y="0" width="8" height="8" fill="#22c55e" rx="1" />
      <text x="12" y="8" fontSize="9" fontWeight="500" fill="#64748b">Strong</text>
      <rect x="60" y="0" width="8" height="8" fill="#ef4444" rx="1" />
      <text x="72" y="8" fontSize="9" fontWeight="500" fill="#64748b">Weak</text>
    </g>
  </svg>
);

const ComparativeAnalytics = () => (
  <svg viewBox="0 0 280 170" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="batchGrad1" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#0040c1" />
        <stop offset="100%" stopColor="#2970FF" />
      </linearGradient>
      <linearGradient id="batchGrad2" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#60a5fa" />
        <stop offset="100%" stopColor="#93c5fd" />
      </linearGradient>
    </defs>
    <text x="0" y="15" fontSize="11" fontWeight="700" fill="#64748b" className="uppercase tracking-wider">Batch Comparison</text>
    <g transform="translate(0, 40)">
      <text x="0" y="0" fontSize="10" fontWeight="700" fill="#1852CC">Batch A</text>
      {[35, 42, 38].map((h, i) => (
        <rect key={i} x={50 + i * 45} y={15 - h/2} width="18" height={h} fill="url(#batchGrad1)" rx="2" />
      ))}
    </g>
    <g transform="translate(0, 90)">
      <text x="0" y="0" fontSize="10" fontWeight="700" fill="#60a5fa">Batch B</text>
      {[28, 31, 26].map((h, i) => (
        <rect key={i} x={50 + i * 45} y={15 - h/2} width="18" height={h} fill="url(#batchGrad2)" rx="2" />
      ))}
    </g>
    <text x="70" y="135" fontSize="9" fontWeight="600" fill="#94a3b8">Test 1</text>
    <text x="115" y="135" fontSize="9" fontWeight="600" fill="#94a3b8">Test 2</text>
    <text x="160" y="135" fontSize="9" fontWeight="600" fill="#94a3b8">Test 3</text>
    <text x="0" y="165" fontSize="11" fontWeight="700" fill="#1852CC">A: 78.3% Avg vs B: 68% Avg</text>
  </svg>
);

// --- COLORFUL SVGS END ---

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-[#FDFDFD] font-poppins text-slate-900">
      {/* Background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] rounded-full bg-blue-50/40 blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 left-0 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-indigo-50/30 blur-[100px] pointer-events-none z-0"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%231852CC' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px' 
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Animated Headline */}
        <motion.h1
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.1 }}
           className="text-[44px] md:text-7xl lg:text-[88px] font-bold tracking-tighter leading-[1.02] max-w-5xl text-[#171717] mb-10"
        >
          Your Institute Runs on Results. <br/>
          Fuel It with <span className="text-[#1852CC]">Intelligence.</span>
        </motion.h1>

        {/* Concise Subheadline */}
        <motion.p
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.2 }}
           className="text-slate-500 text-lg md:text-xl max-w-2xl leading-relaxed mb-12 font-medium"
        >
          ScoreIT turns test data into actionable insights—identify learning gaps, track student progress, and improve outcomes instantly.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-6 mb-24"
        >
          <CustomButton 
            text="Book a Demo" 
            variant="primary" 
            href="/#partner-form" 
            className="text-lg py-8 px-12 shadow-[0_20px_50px_-15px_rgba(24,82,204,0.3)] rounded-2xl group transition-all duration-300 hover:shadow-[0_25px_60px_-15px_rgba(24,82,204,0.4)]" 
          />
          <CustomButton 
            text="Start Free Trial" 
            variant="outline" 
            href="/#partner-form" 
            className="text-lg py-8 px-12 border-blue-200 bg-white rounded-2xl hover:bg-blue-50 hover:border-blue-400 transition-all duration-300 text-slate-700 hover:text-blue-700" 
          />
        </motion.div>

        {/* Colorful Dashboard Visual */}
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="relative w-full max-w-6xl rounded-[40px] border border-blue-100 bg-white shadow-[0_32px_80px_-20px_rgba(24,82,204,0.12)] p-4 md:p-10 overflow-hidden mb-32 hover:shadow-[0_40px_100px_-20px_rgba(24,82,204,0.18)] transition-all duration-700 hover:-translate-y-1"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/20 via-transparent to-indigo-50/20 pointer-events-none"></div>
          
          <div className="flex items-center justify-between border-b border-slate-100 pb-6 mb-8 relative z-10 px-2 lg:px-0">
             <div className="flex gap-2">
               <div className="w-3 h-3 rounded-full bg-slate-200"></div>
               <div className="w-3 h-3 rounded-full bg-slate-200"></div>
               <div className="w-3 h-3 rounded-full bg-slate-200"></div>
             </div>
             <div className="flex items-center gap-4">
               <div className="h-6 w-32 rounded-lg bg-slate-50"></div>
               <div className="h-8 w-8 rounded-full bg-blue-50"></div>
             </div>
          </div>

          <Link href="/#dashboard" className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 px-2 lg:px-0 group/grid">
            {/* Row 1 */}
            <div className="md:col-span-2 rounded-2xl bg-white border border-slate-100 p-6 shadow-sm group-hover/grid:border-blue-200 group-hover/grid:shadow-md transition-all duration-500">
              <BatchPerformanceHeatmap />
            </div>
            <div className="rounded-2xl bg-white border border-slate-100 p-6 shadow-sm group-hover/grid:border-blue-200 group-hover/grid:shadow-md transition-all duration-500">
              <StudentProgressionChart />
            </div>
            
            {/* Row 2 */}
            <div className="rounded-2xl bg-white border border-slate-100 p-6 shadow-sm group-hover/grid:border-blue-200 group-hover/grid:shadow-md transition-all duration-500 text-left">
              <TopicStrengthAnalysis />
            </div>
            <div className="md:col-span-2 rounded-2xl bg-white border border-slate-100 p-6 shadow-sm group-hover/grid:border-blue-200 group-hover/grid:shadow-md transition-all duration-500">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
                  <ComparativeAnalytics />
                  <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-100 group-hover/grid:bg-white transition-colors duration-500">
                    <div className="flex items-center gap-3 text-blue-800 font-bold mb-3 uppercase tracking-tighter">
                      <Zap size={18} className="fill-blue-600 animate-pulse" />
                      AI Insights Alert
                    </div>
                    <p className="text-sm text-blue-700 leading-relaxed text-left font-medium">
                      "Batch B-12 shows a recurring weakness in inorganic chemistry. Recommend focused revision session before Test 4."
                    </p>
                  </div>
               </div>
            </div>
          </Link>
        </motion.div>

        {/* Instinct vs Intelligence Section */}
        <div className="flex flex-col items-center text-center max-w-4xl mb-32 px-4 w-full">
          <Link href="/#partner-form" className="w-full">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="w-full p-8 md:p-16 rounded-[48px] bg-white border border-blue-100 shadow-2xl shadow-blue-500/[0.04] relative overflow-hidden text-left hover:border-blue-300 transition-all duration-500 group hover:shadow-[0_40px_100px_-20px_rgba(24,82,204,0.08)] hover:-translate-y-2"
            >
              <div className="absolute -top-12 -right-12 opacity-[0.04] text-blue-600 rotate-12 group-hover:rotate-0 transition-transform duration-1000 ease-out"><Zap size={240} /></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-5xl font-bold mb-10 text-[#171717] tracking-tight leading-tight group-hover:text-blue-700 transition-colors">
                  Instinct vs. <span className="text-[#1852CC]">Intelligence</span>
                </h3>
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div className="space-y-4">
                    <div className="text-slate-400 font-bold uppercase tracking-widest text-xs group-hover:text-slate-500 transition-colors">The Problem</div>
                    <p className="text-slate-600 text-lg leading-relaxed">Most institutes conduct tests but never fully understand what the data is actually saying.</p>
                  </div>
                  <div className="space-y-4 border-t md:border-t-0 md:border-l border-slate-100 pt-8 md:pt-0 md:pl-8 group-hover:border-blue-100 transition-colors">
                    <div className="text-blue-600 font-bold uppercase tracking-widest text-xs">The Solution</div>
                    <p className="text-slate-900 text-lg font-semibold leading-relaxed">ScoreIT detects learning gaps and uncover patterns to help you make smarter decisions.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 w-full max-w-6xl border-t border-slate-100 pt-20 mb-20"
        >
          {indicators.map((item, i) => (
            <Link key={i} href={item.href} className="flex flex-col items-center lg:items-start gap-4 group cursor-pointer">
              <div className="w-16 h-16 rounded-[22px] bg-blue-50/50 flex items-center justify-center text-[#1852CC] group-hover:bg-[#1852CC] group-hover:text-white transition-all duration-500 shadow-sm border border-blue-50 group-hover:rotate-[8deg] group-hover:scale-110 group-hover:shadow-blue-200 group-hover:shadow-xl">
                <item.icon size={28} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-1 items-center lg:items-start">
                <span className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                  {item.text}
                </span>
                <span className="text-xs text-slate-400 font-bold tracking-wide flex items-center gap-1 group-hover:text-blue-500 transition-all duration-300">
                  Explore <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                </span>
              </div>
            </Link>
          ))}
        </motion.div>

        <motion.p
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="text-slate-300 text-xs font-bold uppercase tracking-[0.4em]"
        >
          From marksheets to meaningful insights.
        </motion.p>

      </div>
    </section>
  );
}