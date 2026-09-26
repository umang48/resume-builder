import React, { useEffect, useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Download, Image as ImageIcon } from 'lucide-react';
import { toPng } from 'html-to-image';
import { useResumeStore } from '../../store/useResumeStore';
import ResumePDF from './ResumePDF';

export default function DownloadButton() {
  const resumeData = useResumeStore();
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => setIsMounted(true), []);

  // Logic to capture the HTML node and download it as an image
  const handleImageDownload = async () => {
    const node = document.getElementById('resume-preview');
    
    if (!node) return;

    try {
      // toPng takes the node and converts it to a base64 data URL
      const dataUrl = await toPng(node, { 
        quality: 1, 
        backgroundColor: '#ffffff',
        // Increase pixel ratio for a sharper image (great for text)
        pixelRatio: 2 
      });
      
      // Create a temporary link element to trigger the download
      const link = document.createElement('a');
      const firstName = resumeData.personalInfo.firstName || 'My';
      link.download = `${firstName}_Resume.png`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error('Failed to generate image:', error);
      alert('Could not generate image. Please try again.');
    }
  };

  if (!isMounted) return null;

  return (
    <div className="flex gap-3">
      {/* PNG Download Button */}
      <button
        onClick={handleImageDownload}
        className="flex items-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-md font-medium transition shadow-sm"
      >
        <ImageIcon size={18} />
        Export PNG
      </button>

      {/* PDF Download Button */}
      <PDFDownloadLink
        document={<ResumePDF data={resumeData} />}
        fileName={`${resumeData.personalInfo.firstName || 'My'}_Resume.pdf`}
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition shadow-sm"
      >
        {({ loading }) => (
          <>
            <Download size={18} />
            {loading ? 'Generating PDF...' : 'Export PDF'}
          </>
        )}
      </PDFDownloadLink>
    </div>
  );
}