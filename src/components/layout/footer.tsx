import { GraduationCap } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-slate-100 bg-white py-12">
            <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                <div className="flex items-center justify-center gap-2 mb-8">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-lg">
                        <GraduationCap size={18} />
                    </div>
                    <span className="text-lg font-bold tracking-tight text-slate-900">
                        ScoreIT
                    </span>
                </div>
                <p className="text-slate-500 text-sm">
                    © {new Date().getFullYear()} TutionApp. All rights reserved.
                    <span className="mx-2 hidden sm:inline">|</span>
                    <br className="sm:hidden" />
                    Empowering students worldwide.
                </p>
            </div>
        </footer>
    );
}
