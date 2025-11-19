"use client";

import CircularText from "@/components/circular_Text";
import EvaluationCommittee from "@/components/EvaluationCommittee";
import EventDetailsSection from "@/components/EventsSection";
import Image from "next/image";
import ScrollDown from '../components/ScrollDown';
export default function Home() {
  const scrollToContent = () => {
    document.getElementById('content-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCommittee = () => {
    document.getElementById('committee-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <div className="glow-box relative">
        
        <div className="absolute top-3.5 left-1/2 -translate-x-1/2 md:top-8 md:left-8 md:translate-x-0 z-50">
          <h1 className="text-4xl md:text-6xl lg:text-8xl text-white font-bold">
            Design<span style={{ color: '#ff6b35' }}>2</span>code
          </h1>
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-50">
          <div className="inline-flex rounded-full bg-black p-1 w-fit">
            <button className="bg-black text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-base md:text-lg font-semibold">
              NPM INSTALL
            </button>
            <button onClick={scrollToContent} className="bg-white text-black px-4 py-2 md:px-6 md:py-3 rounded-full text-base md:text-lg font-semibold flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer hover:bg-gray-100 transition-colors">
              GET START <span>→</span>
            </button>
          </div>
        </div>

        <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 z-50 flex items-center gap-2 md:gap-4">
          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white"></div>
          <div>
            <p className="text-white text-sm md:text-xl">Let's build & code</p>
            <p className="text-white text-sm md:text-xl">beautiful designs together.</p>
          </div>
        </div>

        <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-50">
          <Image src="/VITB Logo (1) 1.svg" alt="VITB Logo" width={100} height={100} className="md:w-[150px] md:h-[150px]" />
        </div>
      </div>

      {/* <div className="relative -mt-16 z-[100] flex justify-center">
        <ScrollDown />
      </div> */}

      <div id="content-section" className="flex flex-col lg:flex-row lg:justify-between items-stretch">
        <div className="flex flex-col justify-center max-w-2xl px-4 py-6 md:px-8 md:py-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 md:mb-6">
            Make yourself usable with 48hrs hackathon
          </h2>
          <p className="text-gray-700 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
            We're hosting a 2-day sprint to find the best front-end champs on campus. 
            Bring up the designs (must be beautiful) and the food (it's free). You just 
            show up, team up, and code. This is for the coders who want to flex their 
            CSS skills and the designers who want to see their vision built right.
          </p>
          <div className="inline-flex rounded-full bg-black p-1 w-fit">
            <button className="bg-black text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-base md:text-lg font-semibold whitespace-nowrap">
              NPM INSTALL
            </button>
            {/* <button className="bg-white text-black px-4 py-2 md:px-6 md:py-3 rounded-full text-base md:text-lg font-semibold flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer hover:bg-gray-100 transition-colors"> */}
            <button className="bg-white text-black px-4 py-2 md:px-6 md:py-3 rounded-full text-base md:text-lg font-semibold flex items-center justify-center gap-2">
              <span>DESIGN<span style={{color:'#ff6b35'}}>2</span>CODE</span> <span>→</span>
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden w-full lg:w-[450px] min-h-[500px] lg:min-h-[700px] rounded-t-3xl lg:rounded-l-3xl lg:rounded-t-none" style={{
          background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 50%, #ffa600 100%)'
        }}>
          <div className="absolute top-6 left-6 md:top-8 md:left-8">
            <Image src="/ux design club 1.svg" alt="UX Design Club" width={120} height={40} />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <CircularText
              text="DESIGN*CODE*PUBLISH*"
              onHover="speedUp"
              spinDuration={20}
              className="custom-class w-32 h-32"
            />
          </div>
          <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 lg:bottom-16">
            <button onClick={scrollToCommittee} className="bg-white/20 backdrop-blur-md text-white px-5 py-2.5 md:px-6 md:py-3 rounded-full text-xl md:text-xl lg:text-2xl font-bold cursor-pointer hover:bg-white/30 transition-all whitespace-nowrap border border-white/30 flex items-center gap-2">
              Registration Open <span className="text-2xl md:text-3xl">→</span>
            </button>
          </div>
        </div>
      </div>
      <div id="events-section">
        <EventDetailsSection />
      </div>
    </div>
  );
}
