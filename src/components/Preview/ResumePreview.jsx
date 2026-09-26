import React from 'react';
import { useResumeStore } from '../../store/useResumeStore';

export default function ResumePreview() {
  const personalInfo = useResumeStore((state) => state.personalInfo);
const experience = useResumeStore((state) => state.experience);

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full min-h-[842px] border border-gray-200 aspect-[1/1.414]">
      {/* Header Section */}
      <div className="border-b-2 border-gray-800 pb-4 mb-4 text-center">
        <h1 className="text-3xl font-bold uppercase tracking-wider text-gray-800">
          {personalInfo.firstName || 'First Name'} {personalInfo.lastName || 'Last Name'}
        </h1>
        <p className="text-xl text-blue-600 mt-1">{personalInfo.jobTitle || 'Job Title'}</p>
        <div className="flex justify-center gap-4 text-sm text-gray-600 mt-2">
          <span>{personalInfo.email || 'email@example.com'}</span>
          <span>|</span>
          <span>{personalInfo.phone || '+91 00000 00000'}</span>
        </div>
      </div>

      // Add this chunk inside the return statement, below the summary div:
{experience.length > 0 && (
  <div className="mt-6">
    <h2 className="text-lg font-bold text-gray-800 border-b-2 border-gray-800 mb-3 uppercase tracking-wider">
      Experience
    </h2>
    <div className="space-y-4">
      {experience.map((exp) => (
        <div key={exp.id}>
          <div className="flex justify-between items-baseline">
            <h3 className="text-md font-bold text-gray-800">{exp.role || 'Job Title'}</h3>
            <span className="text-sm font-medium text-gray-600">
              {exp.startDate || 'Start Date'} - {exp.endDate || 'Present'}
            </span>
          </div>
          <div className="text-blue-600 font-medium text-sm mb-1">{exp.company || 'Company Name'}</div>
          <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
            {exp.description || 'Job description goes here...'}
          </p>
        </div>
      ))}
    </div>
  </div>
)}
      
      {/* Summary Section */}
      <div>
        <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
          {personalInfo.summary || 'Your professional summary will appear here.'}
        </p>
      </div>
    </div>
  );
}