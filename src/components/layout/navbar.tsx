import NavLogo from "./navbar/NavLogo";
import NavLinks from "./navbar/NavLinks";
import NavActions from "./navbar/NavActions";
import MobileMenu from "./navbar/MobileMenu";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-[80px] items-center justify-between bg-transparent backdrop-blur-xs pr-2 pl-4 sm:pl-6 transition-all duration-300">

                <NavLogo />

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block">
                    <NavLinks />
                </div>

                <div className="flex items-center gap-2">
                    <NavActions />
                    <MobileMenu />
                </div>

            </div>
        </nav>
    );
}
