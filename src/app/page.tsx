import {
    ArrowUpRight,
    Plus,
} from "lucide-react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import TestSeriesSection from "@/components/home/TestSeriesSection";

export default function Home() {
    return (
        <div className="min-h-screen bg-[#FDFDFD] font-poppins text-slate-900 selection:bg-blue-100 selection:text-blue-900">
            <Navbar />

            <main className="pt-16">
                <section className="relative overflow-hidden pt-[120px] pb-32 sm:pb-20 lg:pb-32 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 min-h-[90vh]">
                    <div
                        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%231852CC' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                            backgroundSize: '40px 40px'
                        }}
                    ></div>

                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] rounded-full bg-blue-100/50 blur-[100px] pointer-events-none z-0"></div>
                    <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-indigo-100/40 blur-[100px] pointer-events-none z-0"></div>

                    <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">

                        <div className="flex items-center gap-3 bg-[#E9EFFC] rounded-full py-2 px-5 pr-2 mb-10 border border-white/50 shadow-sm transition-transform hover:-translate-y-1 cursor-pointer">
                            <span className="text-[#1852CC] font-semibold text-sm pl-2">Get Started Now</span>
                            <div className="bg-[#1852CC] rounded-full p-1.5 flex items-center justify-center">
                                <ArrowUpRight size={16} className="text-white" />
                            </div>
                        </div>

                        <h1 className="text-[40px] sm:text-[52px] lg:text-[64px] font-medium leading-[1.1] tracking-tight mb-8">
                            <span className="block text-[#171717]">Unlock Your</span>
                            <span className="block text-[#171717]">Academic Potential</span>
                            <span className="block text-slate-500 mt-2">With ScoreIT</span>
                        </h1>

                        <div className="my-6">
                            <Plus size={32} strokeWidth={1} className="text-[#1852CC] opacity-60" />
                        </div>

                        <p className="max-w-[540px] text-[16px] sm:text-[18px] text-slate-500 leading-relaxed mb-12">
                            Simplify your learning journey. Our intuitive platform makes connecting with top-tier tutors effortless.
                        </p>

                        <div className="flex flex-col items-center gap-4 mt-8">
                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="h-12 w-12 rounded-full border-[3px] border-[#FDFDFD] bg-slate-100 shadow-sm overflow-hidden z-[4-i]">
                                            <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt={`user ${i}`} className="h-full w-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                                <div className="text-[32px] sm:text-[40px] font-medium text-[#171717] tracking-tight">
                                    2.3M+
                                </div>
                            </div>
                            <p className="text-sm text-slate-500 font-medium">
                                Trusted to use by active students over 140 countries
                            </p>
                        </div>

                    </div>
                </section>

                <TestSeriesSection />

                <section className="py-20 lg:py-32">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="relative overflow-hidden rounded-[3rem] bg-slate-900 py-16 px-8 shadow-2xl lg:px-20 lg:py-24">
                            <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl"></div>
                            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"></div>

                            <div className="relative grid gap-12 text-center lg:grid-cols-3 lg:text-left">
                                <div>
                                    <h2 className="text-3xl font-bold text-white lg:text-4xl">Proven results for every learner</h2>
                                    <p className="mt-4 text-slate-400 text-lg">We help thousands of students achieve their academic goals through personalized attention.</p>
                                </div>
                                <div className="grid grid-cols-2 gap-8 lg:col-span-2">
                                    <div className="space-y-2">
                                        <p className="text-5xl font-black text-indigo-400">10k+</p>
                                        <p className="text-sm font-bold uppercase tracking-wider text-slate-500">Active Students</p>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-5xl font-black text-blue-400">500+</p>
                                        <p className="text-sm font-bold uppercase tracking-wider text-slate-500">Expert Tutors</p>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-5xl font-black text-indigo-400">50+</p>
                                        <p className="text-sm font-bold uppercase tracking-wider text-slate-500">Subjects</p>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-5xl font-black text-blue-400">4.9/5</p>
                                        <p className="text-sm font-bold uppercase tracking-wider text-slate-500">Average Rating</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
