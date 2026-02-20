import {
    BookOpen,
    Users,
    Calendar,
    Star,
    ArrowRight,
    CheckCircle2,
    GraduationCap,
    Sparkles,
    Search,
    ChevronRight
} from "lucide-react";

export default function Home() {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
            {/* Navbar */}
            <nav className="fixed top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-200">
                            <GraduationCap size={24} />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-slate-900">
                            Tution<span className="text-indigo-600">App</span>
                        </span>
                    </div>

                    <div className="hidden items-center gap-8 md:flex text-sm font-medium text-slate-600">
                        <a href="#" className="hover:text-indigo-600 transition-colors">Find Tutors</a>
                        <a href="#" className="hover:text-indigo-600 transition-colors">How it Works</a>
                        <a href="#" className="hover:text-indigo-600 transition-colors">Pricing</a>
                        <a href="#" className="hover:text-indigo-600 transition-colors">Become a Tutor</a>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="hidden text-sm font-semibold text-slate-700 hover:text-indigo-600 sm:block">
                            Log in
                        </button>
                        <button className="rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-100 transition-all hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-200">
                            Join for free
                        </button>
                    </div>
                </div>
            </nav>

            <main className="pt-16">
                {/* Hero Section */}
                <section className="relative overflow-hidden py-20 lg:py-32">
                    {/* Abstract background elements */}
                    <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 blur-3xl opacity-20">
                        <div className="h-96 w-96 rounded-full bg-indigo-600"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 blur-3xl opacity-10">
                        <div className="h-96 w-96 rounded-full bg-blue-400"></div>
                    </div>

                    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid items-center gap-12 lg:grid-cols-2">
                            <div className="max-w-2xl text-center lg:text-left">
                                <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl xl:text-7xl">
                                    Unlock your <br />
                                    <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                                        academic potential
                                    </span>
                                </h1>
                                <p className="mt-8 text-lg leading-relaxed text-slate-600 md:text-xl">
                                    Connect with world-class tutors for personalized online lessons.
                                    Tailored learning experiences that help you excel in any subject.
                                </p>

                                <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                                    <div className="relative w-full max-w-md">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                                            <Search size={20} />
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="What do you want to learn?"
                                            className="block w-full rounded-full border border-slate-200 bg-white py-4 pl-12 pr-4 text-sm shadow-sm transition-all focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 outline-none"
                                        />
                                    </div>
                                    <button className="flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-slate-800 focus:ring-4 focus:ring-slate-100 sm:w-auto">
                                        Search Now
                                        <ArrowRight size={18} />
                                    </button>
                                </div>

                                <div className="mt-8 flex items-center justify-center gap-4 lg:justify-start">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-slate-100 ring-2 ring-transparent transition-all hover:scale-110 hover:ring-indigo-400">
                                                <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" className="h-full w-full rounded-full object-cover" />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-sm">
                                        <div className="flex items-center gap-1 font-bold text-slate-900">
                                            <Star size={16} className="fill-yellow-400 text-yellow-400" />
                                            4.9/5
                                        </div>
                                        <div className="text-slate-500 font-medium">from 20,000+ reviews</div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative hidden lg:block">
                                <div className="relative mx-auto h-[500px] w-full max-w-[500px]">
                                    {/* Decorative card 1 */}
                                    <div className="absolute -left-12 top-12 z-10 w-64 animate-float rounded-2xl bg-white p-6 shadow-2xl shadow-indigo-100/50 ring-1 ring-slate-100">
                                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-50 text-green-600">
                                            <CheckCircle2 size={24} />
                                        </div>
                                        <h3 className="font-bold text-slate-900">Vetted Tutors</h3>
                                        <p className="mt-2 text-sm text-slate-500">Only the top 3% of applicants are selected.</p>
                                    </div>

                                    {/* Decorative card 2 */}
                                    <div className="absolute bottom-12 -right-12 z-10 w-64 animate-float-delayed rounded-2xl bg-white p-6 shadow-2xl shadow-indigo-100/50 ring-1 ring-slate-100">
                                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                                            <Calendar size={24} />
                                        </div>
                                        <h3 className="font-bold text-slate-900">Flexible Schedule</h3>
                                        <p className="mt-2 text-sm text-slate-500">Learn at your own pace, anytime, anywhere.</p>
                                    </div>

                                    {/* Main graphic */}
                                    <div className="h-full w-full overflow-hidden rounded-3xl bg-indigo-50 ring-8 ring-indigo-50/50 transition-transform duration-500 hover:scale-[1.02]">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-transparent to-blue-400/20"></div>
                                        <div className="flex h-full flex-col items-center justify-center p-12 text-center">
                                            <div className="h-40 w-40 rounded-full bg-white shadow-xl flex items-center justify-center mb-8">
                                                <BookOpen size={64} className="text-indigo-600" />
                                            </div>
                                            <h2 className="text-2xl font-bold text-slate-800">Master any subject</h2>
                                            <div className="mt-6 flex flex-wrap justify-center gap-3">
                                                {['Mathematics', 'Science', 'Coding', 'Languages'].map(subject => (
                                                    <span key={subject} className="rounded-full bg-white/80 px-4 py-1.5 text-xs font-semibold text-indigo-700 shadow-sm backdrop-blur-sm">
                                                        {subject}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="bg-slate-50 py-24">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-600">Why Choose Us</h2>
                            <p className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                                Expertise you can trust
                            </p>
                            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
                                Our platform is built to provide students with the highest quality learning experience possible.
                            </p>
                        </div>

                        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {[
                                {
                                    title: "Expert Tutors",
                                    desc: "Learn from subject matter experts and certified teachers with years of experience.",
                                    icon: <GraduationCap className="text-indigo-600" />,
                                    bg: "bg-indigo-50"
                                },
                                {
                                    title: "Interactive Sessions",
                                    desc: "Engage in real-time with our collaborative whiteboard and video learning tools.",
                                    icon: <Users className="text-blue-600" />,
                                    bg: "bg-blue-50"
                                },
                                {
                                    title: "Progress Tracking",
                                    desc: "Visualize your growth with detailed analytics and regular feedback reports.",
                                    icon: <Star className="text-yellow-600" />,
                                    bg: "bg-yellow-50"
                                }
                            ].map((feature, idx) => (
                                <div key={idx} className="group relative rounded-3xl bg-white p-8 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-100">
                                    <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${feature.bg} transition-transform group-hover:scale-110 group-hover:rotate-6`}>
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
                                    <p className="mt-4 leading-relaxed text-slate-600">{feature.desc}</p>
                                    <a href="#" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-indigo-600">
                                        Learn more
                                        <ChevronRight size={16} />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-20 lg:py-32">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="relative overflow-hidden rounded-[3rem] bg-slate-900 py-16 px-8 shadow-2xl lg:px-20 lg:py-24">
                            {/* Decorative elements */}
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

            <footer className="border-t border-slate-100 bg-white py-12">
                <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                    <div className="flex items-center justify-center gap-2 mb-8">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-lg">
                            <GraduationCap size={18} />
                        </div>
                        <span className="text-lg font-bold tracking-tight text-slate-900">
                            Tution<span className="text-indigo-600">App</span>
                        </span>
                    </div>
                    <p className="text-slate-500 text-sm">
                        © 2026 TutionApp. All rights reserved.
                        <span className="mx-2 hidden sm:inline">|</span>
                        <br className="sm:hidden" />
                        Empowering students worldwide.
                    </p>
                </div>
            </footer>
        </div>
    );
}
