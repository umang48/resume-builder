import React from 'react';
import { useResumeStore } from '../../store/useResumeStore';
import MinimalistTemplate from '../Templates/MinimalistTemplate';
import CreativeTemplate from '../Templates/CreativeTemplate';

export default function ResumePreview() {
  // Fetch the entire state object to pass down
  const resumeData = useResumeStore();
  const template = useResumeStore((state) => state.template);

  return (
    <div id="resume-preview" className="shadow-lg border border-gray-200 aspect-[1/1.414] overflow-hidden rounded-lg">
      {template === 'minimalist' && <MinimalistTemplate data={resumeData} />}
      {template === 'creative' && <CreativeTemplate data={resumeData} />}
    </div>
  );
}