import React from 'react';
import { useResumeStore } from '../../store/useResumeStore';
import { Trash2, Plus } from 'lucide-react';

export default function ExperienceForm() {
  const { experience, addExperience, updateExperience, removeExperience } = useResumeStore();

  const handleAdd = () => {
    addExperience({
      id: crypto.randomUUID(),
      company: '',
      role: '',
      startDate: '',
      endDate: '',
      description: '',
    });
  };

  const handleChange = (id, field, value) => {
    updateExperience(id, { [field]: value });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Work Experience</h2>
        <button 
          onClick={handleAdd}
          className="flex items-center gap-1 text-sm bg-blue-50 text-blue-600 px-3 py-1.5 rounded-md hover:bg-blue-100 transition"
        >
          <Plus size={16} /> Add Job
        </button>
      </div>

      {experience.length === 0 && (
        <p className="text-sm text-gray-500 italic">No work experience added yet.</p>
      )}

      <div className="space-y-6">
        {experience.map((exp, index) => (
          <div key={exp.id} className="relative border border-gray-200 rounded-md p-4 bg-gray-50">
            <button 
              onClick={() => removeExperience(exp.id)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition"
              title="Remove Experience"
            >
              <Trash2 size={18} />
            </button>
            
            <h3 className="text-sm font-medium text-gray-700 mb-3 uppercase tracking-wider">Job {index + 1}</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                <input 
                  value={exp.company}
                  onChange={(e) => handleChange(exp.id, 'company', e.target.value)}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border bg-white" 
                  placeholder="e.g. Metatagg Solutions" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                <input 
                  value={exp.role}
                  onChange={(e) => handleChange(exp.id, 'role', e.target.value)}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border bg-white" 
                  placeholder="e.g. Senior Web Developer" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                <input 
                  type="month"
                  value={exp.startDate}
                  onChange={(e) => handleChange(exp.id, 'startDate', e.target.value)}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border bg-white" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                <input 
                  type="month"
                  value={exp.endDate}
                  onChange={(e) => handleChange(exp.id, 'endDate', e.target.value)}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border bg-white" 
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea 
                  value={exp.description}
                  onChange={(e) => handleChange(exp.id, 'description', e.target.value)}
                  rows="3" 
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border bg-white" 
                  placeholder="Describe your responsibilities and achievements..."
                ></textarea>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}