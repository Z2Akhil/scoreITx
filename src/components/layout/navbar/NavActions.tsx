import Link from "next/link";
import { AnimatedText } from "@/components/ui/animated-text";

export default function NavActions() {
    return (
        <div className="hidden lg:flex items-center gap-4">
            <Link
                href="/login"
                className="group/login text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors px-2 py-2"
            >
                <AnimatedText text="Log in" groupHoverClass="group-hover/login" />
            </Link>
            <Link
                href="/join"
                className="group/btn relative overflow-hidden inline-flex items-center justify-center rounded-full bg-[#1852CC] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5"
            >
                <AnimatedText text="Join for free" groupHoverClass="group-hover/btn" />
            </Link>
        </div>
    );
}
