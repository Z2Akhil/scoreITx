import { GraduationCap } from "lucide-react";

export default function Navbar() {
    return (
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
    );
}
