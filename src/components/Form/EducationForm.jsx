import React from 'react';
import { useResumeStore } from '../../store/useResumeStore';
import { Trash2, Plus } from 'lucide-react';

export default function EducationForm() {
  const { education, addEducation, updateEducation, removeEducation } = useResumeStore();

  const handleAdd = () => {
    addEducation({
      id: crypto.randomUUID(),
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
    });
  };

  const handleChange = (id, field, value) => {
    updateEducation(id, { [field]: value });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Education</h2>
        <button 
          onClick={handleAdd}
          className="flex items-center gap-1 text-sm bg-blue-50 text-blue-600 px-3 py-1.5 rounded-md hover:bg-blue-100 transition"
        >
          <Plus size={16} /> Add Education
        </button>
      </div>

      {education.length === 0 && (
        <p className="text-sm text-gray-500 italic">No education added yet.</p>
      )}

      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={edu.id} className="relative border border-gray-200 rounded-md p-4 bg-gray-50">
            <button 
              onClick={() => removeEducation(edu.id)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition"
              title="Remove Education"
            >
              <Trash2 size={18} />
            </button>
            
            <h3 className="text-sm font-medium text-gray-700 mb-3 uppercase tracking-wider">Institution {index + 1}</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">School / University</label>
                <input 
                  value={edu.school}
                  onChange={(e) => handleChange(edu.id, 'school', e.target.value)}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border bg-white" 
                  placeholder="e.g. Sakalchand Patel College of Engineering" 
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Degree / Certificate</label>
                <input 
                  value={edu.degree}
                  onChange={(e) => handleChange(edu.id, 'degree', e.target.value)}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border bg-white" 
                  placeholder="e.g. Bachelor of Engineering" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                <input 
                  type="month"
                  value={edu.startDate}
                  onChange={(e) => handleChange(edu.id, 'startDate', e.target.value)}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border bg-white" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                <input 
                  type="month"
                  value={edu.endDate}
                  onChange={(e) => handleChange(edu.id, 'endDate', e.target.value)}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border bg-white" 
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}