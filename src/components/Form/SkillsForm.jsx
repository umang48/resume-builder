import React from 'react';
import { useResumeStore } from '../../store/useResumeStore';

export default function SkillsForm() {
  const { skills, updateSkills } = useResumeStore();

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Skills</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          List your skills (comma separated)
        </label>
        <textarea 
          value={skills}
          onChange={(e) => updateSkills(e.target.value)}
          rows="4" 
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border bg-white" 
          placeholder="e.g. PHP, Laravel, React.js, Tailwind CSS, MySQL"
        ></textarea>
      </div>
    </div>
  );
}