"use client";
import CommitteeMember from './CommitteeMember';

const committeeMembers = [
  { id: 1, name: 'Tanishk Kapoor', role: 'President', contactType: 'email' as const },
  { id: 2, name: 'Tanishk Kapoor', role: 'Vice President', contactType: 'email' as const },
  { id: 3, name: 'Tanishk Kapoor', role: 'General secretary', contactType: 'email' as const },
  { id: 4, name: 'Tanishk Kapoor', role: 'Design lead', contactType: 'email' as const },
  { id: 5, name: 'Tanishk Kapoor', role: 'Tech lead', contactType: 'email' as const },
  { id: 6, name: 'Tanishk Kapoor', role: 'Design co-lead', contactType: 'email' as const },
  { id: 7, name: 'Tanishk Kapoor', role: 'Tech co-lead', contactType: 'email' as const },
  { id: 8, name: 'Tanishk Kapoor', role: 'President', contactType: 'linkedin' as const },
];

export default function EvaluationCommittee() {
     const scrollToContent = () => {
    document.getElementById('committee-section')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-3 text-center mb-16">
          <div className="inline-flex rounded-full bg-black p-1 w-fit">
  <button className="bg-black text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-base md:text-lg font-semibold flex items-center justify-center">
    <span className="text-4xl">•</span>
  </button>
  <button onClick={scrollToContent} className="bg-white text-black px-4 py-2 md:px-6 md:py-3 rounded-full text-base md:text-lg font-semibold flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer hover:bg-gray-100 transition-colors">
    Evaluation Committee <span>→</span>
  </button>
</div>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Meet our talented team members
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {committeeMembers.map((member) => (
            <CommitteeMember
              key={member.id}
              name={member.name}
              role={member.role}
              contactType={member.contactType}
            />
          ))}
        </div>
      </div>
    </div>
  );
}