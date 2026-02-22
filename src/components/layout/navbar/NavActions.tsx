import Link from "next/link";

export default function NavActions() {
    return (
        <div className="hidden lg:flex items-center gap-4">
            <Link
                href="/login"
                className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors px-2 py-2"
            >
                Log in
            </Link>
            <Link
                href="/join"
                className="rounded-full bg-[#1852CC] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5"
            >
                Join for free
            </Link>
        </div>
    );
}
