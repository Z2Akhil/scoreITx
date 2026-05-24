import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Hero from "@/components/home/Hero";
import TestSeriesSection from "@/components/home/TestSeriesSection";
import KeyFeatures from "@/components/layout/key-features/KeyFeatures";
import CoachingInquiryForm from "@/components/forms/CoachingInquiryForm";
import { RollingText } from "@/components/ui/rolling-text";

export default function Home() {
    return (
        <div className="min-h-screen bg-[#FDFDFD] font-poppins text-slate-900 selection:bg-blue-100 selection:text-blue-900">
            <Navbar />

            <main className="pt-0">
                <Hero />

                {/* Features Section */}
                <section className="relative overflow-hidden bg-slate-50 py-24">
                    <div
                        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%231852CC' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                            backgroundSize: '40px 40px'
                        }}
                    ></div>
                    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-600">Why Choose Us</h2>
                            <p className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                                Expertise you can trust
                            </p>
                            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
                                Our platform is built to provide students with the highest quality learning experience possible.
                            </p>
                        </div>
                    </div>
                </section>

                <TestSeriesSection />
                
                {/* Coaching Inquiry Section */}
                <section id="partner-form" className="relative overflow-hidden py-24 bg-white">
                    <div
                        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%231852CC' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                            backgroundSize: '40px 40px'
                        }}
                    ></div>
                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-6">
                                    Become a Partner Institute
                                </h2>
                                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                    Join hundreds of coaching industries that use ScoreIT to provide their students with state-of-the-art assessment tools and detailed performance analytics. 
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Automated Test Generation",
                                        "Real-time Performance Tracking",
                                        "Detailed AI-powered Insights",
                                        "Batch-wise student management"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                                                <div className="w-2 h-2 rounded-full bg-blue-600" />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <CoachingInquiryForm />
                        </div>
                    </div>
                </section>
                <KeyFeatures />
            </main>

            <Footer />
        </div>
    );
}
