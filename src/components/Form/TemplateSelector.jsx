import React from 'react';
import { useResumeStore } from '../../store/useResumeStore';

export default function TemplateSelector() {
  // Isolate subscriptions so they don't break the parent app
  const template = useResumeStore((state) => state.template);
  const setTemplate = useResumeStore((state) => state.setTemplate);

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6 flex justify-between items-center">
      <span className="text-sm font-medium text-gray-700">Select Template:</span>
      <div className="flex gap-3">
        <button 
          onClick={() => setTemplate('minimalist')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition ${template === 'minimalist' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
          Minimalist
        </button>
        <button 
          onClick={() => setTemplate('creative')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition ${template === 'creative' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
          Creative (Sidebar)
        </button>
      </div>
    </div>
  );
}