"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { RollingText } from "@/components/ui/rolling-text";

const N_LINKS = [
    { name: "Home", href: "/#hero" },
    { name: "Why ScoreIT", href: "/#why-scoreit" },
    { name: "Dashboard", href: "/#dashboard" },
    { name: "Features", href: "/#features" },
    { name: "Partner", href: "/#partner-form" },
];

export default function NavLinks() {
    const pathname = usePathname();
    const [hoveredPath, setHoveredPath] = useState<string | null>(null);

    return (
        <div className="flex items-center justify-center bg-[#EFF4FF] rounded-full p-1 mx-auto">
            {N_LINKS.map((link) => {
                const isActive = pathname === link.href;
                const isHovered = hoveredPath === link.href;

                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        onMouseEnter={() => setHoveredPath(link.href)}
                        onMouseLeave={() => setHoveredPath(null)}
                        className={`group/link relative px-5 py-2.5 rounded-full text-[14px] font-medium transition-all duration-300 ease-in-out flex items-center gap-2 ${isActive
                                ? "bg-white text-[#1852CC] shadow-sm"
                                : isHovered
                                    ? "bg-transparent text-slate-900"
                                    : "bg-transparent text-slate-600"
                            }`}
                    >
                        <span
                            className={`w-1.5 h-1.5 rounded-full bg-[#1852CC] transition-all duration-300 ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-0 w-0"
                                }`}
                        />
                        <RollingText text={link.name} groupHoverClass="group-hover/link" />
                    </Link>
                );
            })}
        </div>
    );
}
