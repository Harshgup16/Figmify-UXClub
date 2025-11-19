"use client";

import Image from "next/image";
import { Boxes } from "@/components/background-boxes";
import { Meteors } from "@/components/meteors";

export default function AboutEventPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Animated Background */}
      <div className="relative bg-slate-900 text-white px-4 py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Animated Boxes Background */}
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-0">
          <Boxes />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        
        {/* Content */}
        <div className="max-w-6xl mx-auto relative z-20">
          <div className="inline-block mb-4">
            <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
              48 HOUR HACKATHON
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
            Design<span style={{ color: '#ff6b35' }}>2</span>Code
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-8">
            Where great products begin with great design. A two-day sprint that takes you from wireframes to working prototypes.
          </p>
          <div className="flex flex-wrap gap-4 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#ff6b35]"></div>
              <span>Organised by UX Club, VIT Bhopal</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#ff6b35]"></div>
              <span>Open to all students</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Info Cards */}
      <div className="max-w-6xl mx-auto px-4 -mt-8 md:-mt-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          <div className="bg-white rounded-2xl p-5 md:p-6 shadow-lg border border-gray-100">
            <div className="text-[#ff6b35] font-bold text-xs md:text-sm mb-2">DAY 1 - ONLINE</div>
            <div className="text-xl md:text-2xl font-bold mb-1">23 Nov 2025</div>
            <div className="text-gray-600 text-sm md:text-base">Wireframe Submission</div>
          </div>
          <div className="bg-white rounded-2xl p-5 md:p-6 shadow-lg border border-gray-100">
            <div className="text-[#ff6b35] font-bold text-xs md:text-sm mb-2">DAY 2 - OFFLINE</div>
            <div className="text-xl md:text-2xl font-bold mb-1">27 Nov 2025</div>
            <div className="text-gray-600 text-sm md:text-base">1:00 PM - 4:20 PM • Auditorium 2</div>
          </div>
          <div className="bg-gradient-to-br from-[#ff6b35] to-[#ffa600] rounded-2xl p-5 md:p-6 shadow-lg text-white">
            <div className="font-bold text-xs md:text-sm mb-2">WINNING PRIZE</div>
            <div className="text-2xl md:text-3xl font-bold mb-1">₹4,000</div>
            <div className="text-white/90 text-sm md:text-base">Cash Gift Card</div>
          </div>
        </div>
      </div>

      {/* Entry Fees */}
      <div className="bg-gray-50 py-12 md:py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-center">
            Team Up & Register
          </h2>
          <p className="text-sm md:text-base text-gray-600 text-center mb-8 md:mb-12 max-w-2xl mx-auto px-4">
            Form your squad and choose your battle mode. Day 1 is free for everyone—Day 2 is where champions are made.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {[
              { size: "Solo", price: "₹79", members: "1 member" },
              { size: "Duo", price: "₹149", members: "2 members" },
              { size: "Squad", price: "₹189", members: "3 members" },
              { size: "Team", price: "₹219", members: "4 members" }
            ].map((tier, idx) => (
              <div key={idx} className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 border-2 border-gray-200 hover:border-[#ff6b35] transition-all cursor-pointer">
                <div className="text-xs md:text-sm font-semibold text-gray-500 mb-2">{tier.size}</div>
                <div className="text-2xl md:text-3xl font-bold mb-2">{tier.price}</div>
                <div className="text-gray-600 text-xs md:text-sm">{tier.members}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 md:mt-6 text-center text-xs md:text-sm text-gray-600 px-4">
            * Day 1 (Online Round) is free for all. Registration fee applies only if your team qualifies for Day 2.
          </div>
        </div>
      </div>

      {/* Event Format */}
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 lg:py-24">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 text-center">
          Event Format
        </h2>
        
        {/* Day 1 and Day 2 in same row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Day 1 */}
          <div>
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="bg-black text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center font-bold text-lg md:text-xl flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold">Online Design Sprint</h3>
                <p className="text-sm md:text-base text-gray-600">22-23 November 2025 • Remote</p>
              </div>
            </div>
            <div className="space-y-3 md:space-y-4">
              <div className="flex gap-3 md:gap-4">
                <div className="text-[#ff6b35] font-bold whitespace-nowrap text-sm md:text-base">9:00 AM</div>
                <div className="text-gray-700 text-sm md:text-base">Problem statement released via email</div>
              </div>
              <div className="flex gap-3 md:gap-4">
                <div className="text-[#ff6b35] font-bold whitespace-nowrap text-sm md:text-base">Throughout</div>
                <div className="text-gray-700 text-sm md:text-base">Teams brainstorm, develop user flows, and create wireframes</div>
              </div>
              <div className="flex gap-3 md:gap-4">
                <div className="text-[#ff6b35] font-bold whitespace-nowrap text-sm md:text-base">11:59 PM</div>
                <div className="text-gray-700 text-sm md:text-base">Deadline for wireframe submission (PDF/JPG/Figma link)</div>
              </div>
              <div className="flex gap-3 md:gap-4">
                <div className="text-[#ff6b35] font-bold whitespace-nowrap text-sm md:text-base">24 Nov</div>
                <div className="text-gray-700 text-sm md:text-base">Top 30 teams announced by 11:00 PM via email</div>
              </div>
            </div>
          </div>

          {/* Day 2 */}
          <div>
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="bg-gradient-to-br from-[#ff6b35] to-[#ffa600] text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center font-bold text-lg md:text-xl flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold">Offline Live Evaluation</h3>
                <p className="text-sm md:text-base text-gray-600">27 November 2025 • Auditorium 2, AB02</p>
              </div>
            </div>
            <div className="space-y-3 md:space-y-4">
              <div className="flex gap-3 md:gap-4">
                <div className="text-[#ff6b35] font-bold whitespace-nowrap text-sm md:text-base">1:00 PM</div>
                <div className="text-gray-700 text-sm md:text-base">Mandatory check-in for shortlisted teams</div>
              </div>
              <div className="flex gap-3 md:gap-4">
                <div className="text-[#ff6b35] font-bold whitespace-nowrap text-sm md:text-base">1:30 PM</div>
                <div className="text-gray-700 text-sm md:text-base">Inaugural ceremony & event briefing</div>
              </div>
              <div className="flex gap-3 md:gap-4">
                <div className="text-[#ff6b35] font-bold whitespace-nowrap text-sm md:text-base">2:00 PM</div>
                <div className="text-gray-700 text-sm md:text-base">Live evaluation begins - teams present their developed models</div>
              </div>
              <div className="flex gap-3 md:gap-4">
                <div className="text-[#ff6b35] font-bold whitespace-nowrap text-sm md:text-base">3:20 PM</div>
                <div className="text-gray-700 text-sm md:text-base">Final demos, judging, and prize distribution</div>
              </div>
            </div>
          </div>
        </div>

        {/* Judging Criteria - Centered */}
        <div className="flex justify-center px-2">
          <div className="w-full md:w-auto">
            {/* Mobile: Vertical Stack */}
            <div className="md:hidden space-y-2">
              <div className="bg-black text-white px-4 py-3 rounded-full text-sm font-semibold text-center">
                Judging Criteria
              </div>
              <div className="grid grid-cols-1 gap-2">
                <div className="bg-white text-black px-4 py-3 rounded-full text-sm font-semibold text-center border-2 border-gray-200">
                  User-Centricity
                </div>
                <div className="bg-white text-black px-4 py-3 rounded-full text-sm font-semibold text-center border-2 border-gray-200">
                  Innovation
                </div>
                <div className="bg-white text-black px-4 py-3 rounded-full text-sm font-semibold text-center border-2 border-gray-200">
                  Usability
                </div>
              </div>
            </div>
            
            {/* Desktop: Horizontal Pill */}
            <div className="hidden md:inline-flex rounded-full bg-black p-1 w-fit">
              <button className="bg-black text-white px-6 py-3 rounded-full text-base lg:text-lg font-semibold whitespace-nowrap">
                Judging Criteria
              </button>
              <button className="bg-white text-black px-6 py-3 rounded-full text-base lg:text-lg font-semibold whitespace-nowrap">
                User-Centricity
              </button>
              <button className="bg-white text-black px-6 py-3 rounded-full text-base lg:text-lg font-semibold whitespace-nowrap">
                Innovation
              </button>
              <button className="bg-white text-black px-6 py-3 rounded-full text-base lg:text-lg font-semibold whitespace-nowrap">
                Usability
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Prize & Certificates */}
      <div className="relative bg-slate-900 text-white py-12 md:py-16 lg:py-24 overflow-hidden">
        {/* Animated Boxes Background */}
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-0">
          <Boxes />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        
        {/* Content */}
        <div className="max-w-6xl mx-auto px-4 relative z-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 text-center">
            Rewards & Recognition
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 relative overflow-hidden">
              <div className="text-[#ff6b35] font-bold mb-3 md:mb-4 flex items-center gap-2 relative z-10">
                <span className="text-xl md:text-2xl">🏆</span>
                <span className="text-sm md:text-base">WINNING TEAM</span>
              </div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 relative z-10">₹4,000</div>
              <div className="text-gray-300 text-sm md:text-base relative z-10">Cash Gift Card + Official Offline Certificates for all team members</div>
              <Meteors number={15} />
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 relative overflow-hidden">
              <div className="text-[#ff6b35] font-bold mb-3 md:mb-4 flex items-center gap-2 relative z-10">
                <span className="text-xl md:text-2xl">🎓</span>
                <span className="text-sm md:text-base">ALL PARTICIPANTS</span>
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 relative z-10">Digital Certificates</div>
              <div className="text-gray-300 text-sm md:text-base relative z-10">Recognition for every team that participates in the hackathon</div>
              <Meteors number={15} />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#ff6b35] to-[#ffa600] py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 md:mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-base md:text-xl mb-6 md:mb-8 opacity-90">
            Join 120+ teams in this epic 48-hour design-to-code journey
          </p>
          <button className="bg-white text-black px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-bold hover:bg-gray-100 transition-all inline-flex items-center gap-2">
            Register Your Team <span className="text-lg md:text-xl">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
