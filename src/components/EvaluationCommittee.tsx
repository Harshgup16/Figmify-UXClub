"use client";
import { i } from 'framer-motion/client';
import CommitteeMember from './CommitteeMember';

const committeeMembers = [
  { id: 1, name: 'Dr. T Venkateswara Rao', role: 'Faculty Co-ordinator', linkedinUrl: 'https://www.linkedin.com/in/dr-t-venkateswara-rao/' },
  { id: 2, name: 'Tanishk Kapoor', role: 'President', imageUrl: 'https://res.cloudinary.com/dy5utqlkm/image/upload/v1763376310/D56_0101_-_Copy_sbe7g9.png', linkedinUrl: 'https://www.linkedin.com/in/tanishk-kapoor-64722828a/' },
  { id: 3, name: 'Sujal Singh', role: 'Vice President', imageUrl: 'https://res.cloudinary.com/dy5utqlkm/image/upload/v1763482021/Untitled_design__1_-removebg-preview_nhpkbh.png', linkedinUrl: 'https://www.linkedin.com/in/sujal-singh/' },
  { id: 4, name: 'Sonakshi Saxena', role: 'General secretary', imageUrl: 'https://res.cloudinary.com/dy5utqlkm/image/upload/v1763376454/IMG-20251117-WA0020_q9ewge.png', linkedinUrl: 'https://www.linkedin.com/in/sona14saxena' },
  { id: 5, name: 'Yeshu Agarwal', role: 'Tech Lead', imageUrl: 'https://res.cloudinary.com/dy5utqlkm/image/upload/v1763375023/img_yeshu_v41boo.png', linkedinUrl: 'https://www.linkedin.com/in/yeshu-agarwal-linkdedin' },
  { id: 6, name: 'Nitin Vishwakarma', role: 'Design Lead', imageUrl: 'https://res.cloudinary.com/dy5utqlkm/image/upload/v1763377075/Untitled_design-removebg-preview_lpfvlu.png', linkedinUrl: 'https://www.linkedin.com/in/nitin-vishwakarma/' },
];

export default function EvaluationCommittee() {
     const scrollToContent = () => {
    document.getElementById('content-section')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-3 text-center mb-16">
          <div className="inline-flex rounded-full bg-black p-1 w-fit">
  <button className="bg-black text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-base md:text-lg font-semibold flex items-center justify-center">
    <span className="text-4xl">•</span>
  </button>
  <button className="bg-white text-black px-4 py-2 md:px-6 md:py-3 rounded-full text-base md:text-lg font-semibold flex items-center justify-center gap-2 ">
    Evaluation Committee <span>→</span>
  </button>
</div>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Meet our talented team members
          </p>
        </div>

        {/* First row - 4 cards */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-4 sm:mb-6 lg:mb-8">
          {committeeMembers.slice(0, 4).map((member) => (
            <CommitteeMember
              key={member.id}
              name={member.name}
              role={member.role}
              imageUrl={member.imageUrl}
              linkedinUrl={member.linkedinUrl}
            />
          ))}
        </div>
        
        {/* Second row - 2 cards centered */}
        <div className="flex justify-center">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-16 max-w-2xl">
            {committeeMembers.slice(4, 6).map((member) => (
              <CommitteeMember
                key={member.id}
                name={member.name}
                role={member.role}
                imageUrl={member.imageUrl}
                linkedinUrl={member.linkedinUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}