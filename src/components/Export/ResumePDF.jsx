import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Create styles for the PDF
const styles = StyleSheet.create({
  page: { padding: 40, fontFamily: 'Helvetica', backgroundColor: '#ffffff' },
  header: { borderBottomWidth: 1, borderBottomColor: '#1f2937', paddingBottom: 15, marginBottom: 15, textAlign: 'center' },
  name: { fontSize: 24, fontWeight: 'bold', textTransform: 'uppercase', color: '#1f2937' },
  jobTitle: { fontSize: 14, color: '#2563eb', marginTop: 4 },
  contact: { flexDirection: 'row', justifyContent: 'center', fontSize: 10, color: '#4b5563', marginTop: 8 },
  separator: { marginHorizontal: 8 },
  sectionTitle: { fontSize: 12, fontWeight: 'bold', borderBottomWidth: 1, borderBottomColor: '#1f2937', paddingBottom: 3, marginTop: 15, marginBottom: 8, textTransform: 'uppercase', color: '#1f2937' },
  text: { fontSize: 10, color: '#374151', lineHeight: 1.5 },
  block: { marginBottom: 10 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 2 },
  boldText: { fontSize: 11, fontWeight: 'bold', color: '#111827' },
  dateText: { fontSize: 10, color: '#4b5563' },
  subText: { fontSize: 10, color: '#2563eb', marginBottom: 4 },
  skillsWrapper: { flexDirection: 'row', flexWrap: 'wrap', gap: 5, marginTop: 5 },
});

// The PDF Document Component
export default function ResumePDF({ data }) {
  const { personalInfo, experience, education, skills } = data;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>
            {personalInfo.firstName || 'First Name'} {personalInfo.lastName || 'Last Name'}
          </Text>
          <Text style={styles.jobTitle}>{personalInfo.jobTitle || 'Job Title'}</Text>
          <View style={styles.contact}>
            <Text>{personalInfo.email || 'email@example.com'}</Text>
            <Text style={styles.separator}>|</Text>
            <Text>{personalInfo.phone || '+91 00000 00000'}</Text>
          </View>
        </View>

        {/* Summary */}
        {personalInfo.summary && (
          <View>
            <Text style={styles.text}>{personalInfo.summary}</Text>
          </View>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <View>
            <Text style={styles.sectionTitle}>Experience</Text>
            {experience.map((exp) => (
              <View key={exp.id} style={styles.block}>
                <View style={styles.row}>
                  <Text style={styles.boldText}>{exp.role}</Text>
                  <Text style={styles.dateText}>{exp.startDate} - {exp.endDate || 'Present'}</Text>
                </View>
                <Text style={styles.subText}>{exp.company}</Text>
                <Text style={styles.text}>{exp.description}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Education */}
        {education.length > 0 && (
          <View>
            <Text style={styles.sectionTitle}>Education</Text>
            {education.map((edu) => (
              <View key={edu.id} style={styles.block}>
                <View style={styles.row}>
                  <Text style={styles.boldText}>{edu.degree}</Text>
                  <Text style={styles.dateText}>{edu.startDate} - {edu.endDate}</Text>
                </View>
                <Text style={styles.subText}>{edu.school}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Skills */}
        {skills && (
          <View>
            <Text style={styles.sectionTitle}>Skills</Text>
            <Text style={styles.text}>{skills}</Text>
          </View>
        )}
      </Page>
    </Document>
  );
}