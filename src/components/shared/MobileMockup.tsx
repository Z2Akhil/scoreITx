import { ReactNode } from "react";

interface MobileMockupProps {
    children: ReactNode;
    className?: string;
    halfHeight?: boolean;
    dynamicHeight?: boolean;
    allowScroll?: boolean;
}

export default function MobileMockup({
    children,
    className = "",
    halfHeight = false,
    dynamicHeight = false,
    allowScroll = true
}: MobileMockupProps) {
    let heightClass = 'h-[600px] sm:h-[720px] rounded-[45px]';
    if (halfHeight) heightClass = 'h-[500px] rounded-t-[45px] rounded-b-none border-b-0 sm:border-b-0';
    if (dynamicHeight) heightClass = 'h-full min-h-[500px] lg:min-h-[600px] rounded-t-[45px] rounded-b-none border-b-0 sm:border-b-0';

    let innerClass = 'rounded-[32px]';
    if (halfHeight || dynamicHeight) innerClass = 'rounded-t-[32px] rounded-b-none';

    return (
        <div className={`relative w-[300px] sm:w-[360px] bg-slate-900 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border-[10px] sm:border-[12px] border-slate-900 overflow-hidden ${heightClass} ${className}`}>

            {/* Phone Screen/Inner Content Container */}
            <div className={`w-full h-full bg-[#FAFAFA] overflow-hidden flex flex-col relative z-0 shadow-inner ${innerClass}`}>

                {/* Phone Notch/Dynamic Island */}
                {/* We use a container that anchors to the top so it doesn't scroll with content */}
                <div className="absolute top-0 inset-x-0 h-6 bg-slate-900 rounded-b-[20px] w-32 border-b border-x border-slate-800 mx-auto z-50 transition-all duration-300 group-hover:h-8"></div>

                {/* Consumer Content */}
                <div className={`flex-1 w-full h-full ${allowScroll ? 'overflow-y-auto' : 'overflow-hidden'} pt-10 pb-6 px-5 custom-scrollbar`}>
                    {children}
                </div>
            </div>
        </div>
    );
}
