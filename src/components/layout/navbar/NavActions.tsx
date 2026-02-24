import Link from "next/link";
import { RollingText } from "@/components/ui/rolling-text";

export default function NavActions() {
    return (
        <div className="hidden lg:flex items-center gap-4">
            <Link
                href="#partner-form"
                className="group/btn relative overflow-hidden inline-flex items-center justify-center rounded-full bg-[#1852CC] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5"
            >
                <RollingText text="Get Started" groupHoverClass="group-hover/btn" />
            </Link>
        </div>
    );
}
