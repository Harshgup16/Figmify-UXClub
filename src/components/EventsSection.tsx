"use client";

import { useRouter } from 'next/navigation';

export default function EventDetailsSection() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push('/about-event');
  };

  return (
    <div className="bg-white py-8 md:py-10">
      {/* Full width container without side padding */}
      <div className="w-full px-4">
        {/* Single container with black border wrapping both image and content - full width */}
        <div className="border-4 border-black rounded-3xl p-6 md:p-8 lg:p-10 shadow-lg">
          {/* Flex layout for image on left and content on right */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-16">
            {/* Left side - heading and description */}
            <div className="lg:w-7/12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-4 md:mb-6 leading-tight">
                We&apos;re talking real, cold, 4K+ prize money for your creative team.
              </h2>

              <p className="text-base md:text-lg lg:text-lg text-gray-700 mb-4 md:mb-5 leading-relaxed">
                At the UX Club, we believe a brilliant idea isn&apos;t finished until it&apos;s built right.
                We&apos;re more than just designers — we are the people obsessed with making ideas work
                in real life. Because honestly, achieving pixel-perfect fidelity is the ultimate
                front-end challenge. Join us to prove that you can not only code, but you can code
                with the user experience in mind!
              </p>
            </div>
            
            {/* Right side - buttons and event details */}
            <div className="lg:w-5/12">
              <div className="flex flex-wrap gap-2 mb-5 justify-center">
                <div className="inline-flex rounded-full bg-black p-1.5 md:p-2 w-fit max-w-full">
                  <button className="bg-black text-white px-3 py-1.5 md:px-5 md:py-2 lg:px-7 lg:py-3 rounded-full text-sm md:text-base lg:text-lg font-semibold">
                    NPM INSTALL
                  </button>
                  <button 
                    onClick={handleNavigate}
                    className="bg-white text-black px-3 py-1.5 md:px-5 md:py-2 lg:px-7 lg:py-3 rounded-full text-sm md:text-base lg:text-lg font-semibold flex items-center justify-center gap-1 md:gap-2 whitespace-nowrap cursor-pointer hover:bg-gray-100 transition-colors overflow-hidden"
                  >
                    <span className="hidden lg:inline">DESIGN<span style={{color:'#ff6b35'}}>2</span>CODE</span>
                    <span className="hidden md:inline lg:hidden">DESIGN<span style={{color:'#ff6b35'}}>2</span>CODE</span>
                    <span>→</span>
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <div className="border-2 border-black rounded-2xl p-4 bg-gray-100">
                  <p className="text-black text-sm font-medium text-center">
                    Teams size of 1-4.
                  </p>
                </div>

                <div 
                  onClick={handleNavigate}
                  className="border-2 border-black rounded-2xl p-4 bg-gray-100 cursor-pointer hover:bg-gray-200 transition-colors"
                >
                  <p className="text-black text-sm font-medium text-center">
                    Free entry →
                  </p>
                </div>

                <div className="border-2 border-black rounded-2xl p-4 bg-gray-100">
                  <p className="text-black text-xs font-medium text-center leading-relaxed">
                    Day 1: 8:00AM - 6:00PM (Saturday, 22/11/2025)<br />
                    Day 2: 10:00AM - 6:00PM (Sunday, 23/11/2025)
                  </p>
                </div>

                <div className="border-2 border-black rounded-2xl p-4 bg-gray-100">
                  <p className="text-black text-sm font-medium text-center">
                    See the 48-hour sprint plan &amp; rules
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}