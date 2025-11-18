"use client";

export default function EventDetailsSection() {
  return (
    <div className="bg-white py-8 md:py-10">
      {/* Full width container without side padding */}
      <div className="w-full px-4">
        {/* Single container with black border wrapping both image and content - full width */}
        <div className="border-4 border-black rounded-3xl p-6 md:p-8 lg:p-10 shadow-lg">
          {/* Flex layout for image on left and content on right */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left side - image with border - aligned to top left */}
            <div className="lg:w-5/12 flex items-start justify-start">
              <div className="w-full h-[300px] md:h-[400px] lg:h-[450px] flex items-start justify-start bg-gray-100 rounded-2xl overflow-hidden">
                {/* Replace this with your actual image component */}
                <div className="text-left p-4 pt-4">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 ml-4 mt-4" />
                  <p className="text-gray-500 font-medium ml-4 mt-2">Event Image/Visual</p>
                  <p className="text-gray-400 text-sm ml-4">Replace with your image</p>
                </div>
              </div>
            </div>
            
            {/* Center gap - empty space between image and content */}
            <div className="hidden lg:block lg:w-2/12"></div>
            
            {/* Right side - event details content */}
            <div className="lg:w-5/12">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-4 md:mb-5 leading-tight">
                We&apos;re talking real, cold, 5K+ prize money for your creative team.
              </h2>

              <p className="text-gray-700 text-sm md:text-base mb-4 md:mb-5 leading-relaxed">
                At the UX Club, we believe a brilliant idea isn&apos;t finished until it&apos;s built right.
                We&apos;re more than just designers — we are the people obsessed with making ideas work
                in real life. Because honestly, achieving pixel-perfect fidelity is the ultimate
                front-end challenge. Join us to prove that you can not only code, but you can code
                with the user experience in mind!
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                <div className="inline-flex rounded-full bg-black p-1.5 w-fit">
                  <button className="bg-black text-white px-4 py-1 md:px-5 md:py-1.5 rounded-full text-base md:text-lg font-semibold">
                    NPM INSTALL
                  </button>
                  <button className="bg-white text-black px-4 py-1 md:px-5 md:py-1.5 rounded-full text-base md:text-lg font-semibold flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer hover:bg-gray-100 transition-colors">
                    <span className="hidden md:inline">FIGMIFY: Design-to-Code Hackathon</span> <span>→</span>
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <div className="border-2 border-black rounded-2xl p-4 bg-gray-100">
                  <p className="text-black text-sm font-medium text-center">
                    Teams of 2-4. No lone wolves (it&apos;s more fun with friends)
                  </p>
                </div>

                <div className="border-2 border-black rounded-2xl p-4 bg-gray-100">
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
                    See the 48-hour sprint plan &amp; rules →
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