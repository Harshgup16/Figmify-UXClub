"use client";
import { Linkedin } from 'lucide-react';

interface CommitteeMemberProps {
  name: string;
  role: string;
  imageUrl?: string;
  linkedinUrl?: string;
}

export default function CommitteeMember({
  name,
  role,
  imageUrl,
  linkedinUrl
}: CommitteeMemberProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative bg-gradient-to-br from-slate-200 to-slate-300 w-full aspect-[3/4] mb-4 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-100 to-slate-100 flex items-center justify-center">
            <div className="text-slate-400 text-sm">Photo</div>
          </div>
        )}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
      </div>

      <div className="space-y-2">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 text-sm leading-tight">
              {name}
            </h3>
            <p className="text-xs text-gray-600 mt-1 font-medium tracking-wide">
              {role}
            </p>
          </div>

          <button
            onClick={() => linkedinUrl && window.open(linkedinUrl, '_blank')}
            className="flex-shrink-0 p-2 hover:bg-blue-50 rounded-full transition-all duration-200 transform hover:scale-110 active:scale-95"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4 text-blue-600" />
          </button>
        </div>
      </div>
    </div>
  );
}