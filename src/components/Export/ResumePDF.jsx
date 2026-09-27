import React from 'react';
import { Document } from '@react-pdf/renderer';
import MinimalistPDF from './MinimalistPDF';
import CreativePDF from './CreativePDF';

export default function ResumePDF({ data }) {
  return (
    <Document>
      {data.template === 'creative' ? (
        <CreativePDF data={data} />
      ) : (
        <MinimalistPDF data={data} />
      )}
    </Document>
  );
}