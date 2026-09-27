import React from 'react';

export default function CreativeTemplate({ data }) {
  const { personalInfo, experience, education, skills } = data;

  return (
    <div className="bg-white w-full min-h-[842px] flex">
      {/* Sidebar */}
      <div className="w-1/3 bg-blue-800 text-white p-6 flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold uppercase leading-tight">
            {personalInfo.firstName} <br /> {personalInfo.lastName}
          </h1>
          <p className="text-blue-200 mt-2 font-medium">{personalInfo.jobTitle}</p>
        </div>
        
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider mb-2 border-b border-blue-600 pb-1">Contact</h3>
          <div className="text-sm space-y-2 text-blue-100">
            <p>{personalInfo.email}</p>
            <p>{personalInfo.phone}</p>
          </div>
        </div>

        {skills && (
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-2 border-b border-blue-600 pb-1">Skills</h3>
            <div className="flex flex-col gap-1 text-sm text-blue-100">
              {skills.split(',').map((skill, i) => skill.trim() && <span key={i}>• {skill.trim()}</span>)}
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="w-2/3 p-6 bg-white">
        {personalInfo.summary && (
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 border-b-2 border-gray-200 mb-2 uppercase">Profile</h3>
            <p className="text-sm text-gray-700 leading-relaxed">{personalInfo.summary}</p>
          </div>
        )}

        {experience.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 border-b-2 border-gray-200 mb-4 uppercase">Experience</h3>
            <div className="space-y-4">
              {experience.map((exp) => (
                <div key={exp.id}>
                  <h4 className="text-md font-bold text-gray-800">{exp.role}</h4>
                  <div className="text-sm text-blue-600 font-medium mb-1">
                    {exp.company} | {exp.startDate} - {exp.endDate || 'Present'}
                  </div>
                  <p className="text-sm text-gray-700">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {education.length > 0 && (
          <div>
            <h3 className="text-lg font-bold text-gray-800 border-b-2 border-gray-200 mb-4 uppercase">Education</h3>
            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.id}>
                  <h4 className="text-md font-bold text-gray-800">{edu.degree}</h4>
                  <div className="text-sm text-gray-600">
                    {edu.school} | {edu.startDate} - {edu.endDate}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}