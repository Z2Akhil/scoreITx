import { Users, Star, CheckCircle2 } from "lucide-react";
import MobileMockup from "@/components/shared/MobileMockup";
import { RollingText } from "@/components/ui/rolling-text";

export default function TestSeriesSection() {
    return (
        <section className="relative z-20 -mt-32 pt-32 pb-24 sm:pb-32 overflow-hidden">

            <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-[#F8FAFC] to-[#F8FAFC]"></div>

            <div
                className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%231852CC' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                    backgroundSize: '40px 40px'
                }}
            ></div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center lg:items-stretch">

                    <div className="relative order-2 lg:order-1 min-h-[500px] sm:min-h-[600px] lg:min-h-0 mt-8 lg:mt-0">
                        <div className="absolute top-0 -bottom-24 sm:-bottom-32 lg:-bottom-32 left-0 right-0 flex justify-center lg:justify-end">
                            <MobileMockup dynamicHeight allowScroll={false} className="transform md:rotate-2 hover:rotate-0 transition-transform duration-700 ease-in-out shadow-2xl">
                                <div className="flex justify-between items-center mb-6 mt-4">
                                    <div className="text-lg font-bold text-slate-800">Teacher Dashboard</div>
                                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                                        <div className="w-4 h-4 rounded-full bg-slate-300"></div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3 mb-6">
                                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                                        <div className="text-[11px] text-slate-500 font-medium mb-1">Active Series</div>
                                        <div className="text-2xl font-bold text-slate-800">12</div>
                                    </div>
                                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                                        <div className="text-[11px] text-slate-500 font-medium mb-1">Total Students</div>
                                        <div className="text-2xl font-bold text-slate-800">450<span className="text-sm text-green-500 ml-1">↑</span></div>
                                    </div>
                                </div>

                                <div className="w-full bg-gradient-to-br from-[#1852CC] to-indigo-800 rounded-[28px] p-5 text-white mb-6 relative overflow-hidden shadow-lg shadow-blue-500/20">
                                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>

                                    <div className="relative z-10 flex justify-between items-start mb-8">
                                        <div>
                                            <div className="bg-white/20 backdrop-blur-md rounded-full px-2.5 py-1 inline-block mb-3">
                                                <span className="text-[10px] font-semibold tracking-wider uppercase">Live Now</span>
                                            </div>
                                            <div className="font-bold text-lg leading-tight">Advanced Calculus <br /> Mock Exam</div>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                            <Users size={18} className="text-white" />
                                        </div>
                                    </div>

                                    <div className="relative z-10 flex justify-between items-end">
                                        <div>
                                            <div className="text-white/70 text-[10px] uppercase tracking-wider mb-1">Avg Score</div>
                                            <div className="text-xl font-bold">78.5%</div>
                                        </div>
                                        <button className="group/va relative overflow-hidden bg-white text-[#1852CC] px-4 py-1.5 rounded-full text-xs font-bold shadow-sm transition-transform hover:scale-105 active:scale-95">
                                            <RollingText text="View Analytics" groupHoverClass="group-hover/va" />
                                        </button>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center mb-4">
                                    <div className="text-sm font-bold text-slate-800">Recent Submissions</div>
                                </div>
                                <div className="flex flex-col gap-3">
                                    {[
                                        { name: 'Alex Johnson', score: '92%', time: '10m ago' },
                                        { name: 'Maria Garcia', score: '88%', time: '1h ago' },
                                        { name: 'James Smith', score: '75%', time: '2h ago' }
                                    ].map((item, idx) => (
                                        <div key={idx} className="bg-white p-3 rounded-2xl flex items-center gap-3 border border-slate-100 shadow-sm">
                                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">
                                                {item.name.charAt(0)}
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-xs font-bold text-slate-800">{item.name}</div>
                                                <div className="text-[10px] text-slate-400">{item.time}</div>
                                            </div>
                                            <div className="text-sm font-bold text-blue-600">{item.score}</div>
                                        </div>
                                    ))}
                                </div>
                            </MobileMockup>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 max-w-xl mx-auto lg:mx-0 text-center lg:text-left pt-12 lg:pt-0">
                        <div className="inline-flex items-center gap-2 bg-[#E9EFFC] text-[#1852CC] px-4 py-2 rounded-full text-sm font-semibold mb-6 ring-1 ring-[#1852CC]/10 shadow-sm">
                            <Star size={16} className="fill-[#1852CC]" />
                            For Educators
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.1] mb-6 tracking-tight text-[#171717]">
                            Create highly <span className="text-[#1852CC]">customized test series</span> with ease.
                        </h2>
                        <p className="text-lg text-slate-500 leading-relaxed mb-10">
                            Empower your teaching methodology. Design tailored online assessments, monitor individual student progress, and get actionable insights to ensure your instruction hits the mark.
                        </p>

                        <div className="flex flex-col gap-6 text-left max-w-md mx-auto lg:mx-0">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#E9EFFC] flex items-center justify-center shrink-0 mt-1 shadow-sm">
                                    <CheckCircle2 size={20} className="text-[#1852CC]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1 text-[#171717]">Flexible Formatting</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">Build tests with multiple choice, short answers, or essay formats tailored to your subject constraints.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#E9EFFC] flex items-center justify-center shrink-0 mt-1 shadow-sm">
                                    <CheckCircle2 size={20} className="text-[#1852CC]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1 text-[#171717]">Deep Analytics</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">Instantly analyze class-wide trends or dive deep into individual student performance metrics.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
