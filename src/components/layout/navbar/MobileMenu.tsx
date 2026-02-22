"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const N_LINKS = [
    { name: "Find Tutors", href: "/tutors" },
    { name: "How it Works", href: "/how-it-works" },
    { name: "Pricing", href: "/pricing" },
    { name: "Become a Tutor", href: "/become-tutor" },
];

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <div className="lg:hidden flex items-center">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full bg-[#EFF4FF] text-slate-700 hover:bg-[#E0E8FA] transition-colors"
                aria-label="Toggle menu"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-x-0 top-[80px] bg-white border-b border-slate-100 shadow-xl transition-all duration-300 ease-in-out z-40 ${isOpen ? "max-h-[calc(100vh-80px)] opacity-100 overflow-y-auto pb-4" : "max-h-0 opacity-0 overflow-hidden"
                    }`}
            >
                <div className="px-6 py-6 flex flex-col gap-4">
                    {N_LINKS.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`text-base font-medium px-4 py-3 rounded-xl transition-colors flex items-center gap-3 ${isActive
                                    ? "bg-[#EFF4FF] text-[#1852CC]"
                                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                    }`}
                            >
                                <span className={`w-1.5 h-1.5 bg-[#1852CC] rounded-full transition-opacity ${isActive ? "opacity-100" : "opacity-0"}`} />
                                {link.name}
                            </Link>
                        );
                    })}

                    <div className="h-px w-full bg-slate-100 my-2" />

                    <div className="flex flex-col gap-3 px-4">
                        <Link
                            href="/login"
                            onClick={() => setIsOpen(false)}
                            className="text-center font-semibold text-slate-700 py-3 rounded-xl hover:bg-slate-50 transition-colors"
                        >
                            Log in
                        </Link>
                        <Link
                            href="/join"
                            onClick={() => setIsOpen(false)}
                            className="text-center font-semibold text-white bg-[#1852CC] py-3 rounded-xl hover:bg-blue-700 transition-colors shadow-md shadow-blue-200"
                        >
                            Join for free
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
