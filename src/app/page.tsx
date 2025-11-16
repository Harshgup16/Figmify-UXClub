import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="glow-box relative">
        
        <div className="absolute top-4 left-4 md:top-8 md:left-8 z-50">
          <h1 className="text-4xl md:text-6xl lg:text-8xl text-white font-bold">Figmify</h1>
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

      <div className="flex flex-col lg:flex-row lg:justify-between items-stretch">
        {/* Left Side - Text Content */}
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
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-black text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold">
              NPM INSTALL
            </button>
            <button className="bg-white text-black border-2 border-black px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold flex items-center justify-center gap-2">
              FIGMIFY <span>→</span>
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden w-full lg:w-[450px] min-h-[500px] lg:min-h-[700px] rounded-t-3xl lg:rounded-l-3xl lg:rounded-t-none" style={{
          background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 50%, #ffa600 100%)'
        }}>
          <div className="absolute top-6 left-6 md:top-8 md:left-8">
            <Image src="/ux design club 1.svg" alt="UX Design Club" width={120} height={40} />
          </div>
          <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">Registration</h3>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Open</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
