import { GraduationCap } from "lucide-react";
import Link from "next/link";

export default function NavLogo() {
    return (
        <Link href="/" className="flex items-center gap-2 group">
            {/* Icon Wrapper: No bg, just blue text, rotated 30deg by default, 0deg on hover */}
            <div className="flex h-10 w-10 items-center justify-center text-[#1852CC] transition-transform duration-300 ease-in-out rotate-30 group-hover:rotate-0">
                <GraduationCap size={28} fill="currentColor" strokeWidth={1.5} />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
                Score<span className="text-[#1852CC]">IT</span>
            </span>
        </Link>
    );
}
