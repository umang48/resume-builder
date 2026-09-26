import React, { useEffect, useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Download } from 'lucide-react';
import { useResumeStore } from '../../store/useResumeStore';
import ResumePDF from './ResumePDF';

export default function DownloadButton() {
  // Isolate the state subscription to just this button
  const resumeData = useResumeStore();
  
  // @react-pdf can sometimes clash with initial React mounts. 
  // This simple state ensures it only renders the PDF link after the UI is ready.
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  if (!isMounted) return null;

  return (
    <PDFDownloadLink
      document={<ResumePDF data={resumeData} />}
      fileName={`${resumeData.personalInfo.firstName || 'My'}_Resume.pdf`}
      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition shadow-sm"
    >
      {({ loading }) => (
        <>
          <Download size={18} />
          {loading ? 'Generating PDF...' : 'Download PDF'}
        </>
      )}
    </PDFDownloadLink>
  );
}