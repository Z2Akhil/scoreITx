import { GraduationCap } from "lucide-react";
import Link from "next/link";
import { RollingText } from "@/components/ui/rolling-text";

export default function NavLogo() {
    return (
        <Link href="/" className="flex items-center gap-2 group/logo outline-none">
            {/* Icon Wrapper: No bg, just blue text, rotated 30deg by default, 0deg on hover */}
            <div className="flex h-10 w-10 items-center justify-center text-[#1852CC] transition-transform duration-300 ease-in-out rotate-30 group-hover/logo:rotate-0">
                <GraduationCap size={28} fill="currentColor" strokeWidth={1.5} />
            </div>
            <div className="text-xl font-bold tracking-tight flex">
                <div className="text-slate-900">
                    <RollingText text="Score" groupHoverClass="group-hover/logo" />
                </div>
                <div className="text-[#1852CC]">
                    <RollingText text="IT" groupHoverClass="group-hover/logo" />
                </div>
            </div>
        </Link>
    );
}
