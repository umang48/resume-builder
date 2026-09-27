import React from 'react';
import { Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// PDF specific styles matching our Creative Tailwind theme
const styles = StyleSheet.create({
  page: { flexDirection: 'row', backgroundColor: '#ffffff', fontFamily: 'Helvetica' },
  sidebar: { width: '33%', backgroundColor: '#1e40af', padding: 30, color: '#ffffff' },
  main: { width: '67%', padding: 30 },
  
  // Sidebar Styles
  name: { fontSize: 24, fontWeight: 'bold', textTransform: 'uppercase', marginBottom: 5, lineHeight: 1.2 },
  jobTitle: { fontSize: 12, color: '#bfdbfe', marginBottom: 30 },
  sectionTitleSidebar: { fontSize: 12, fontWeight: 'bold', textTransform: 'uppercase', borderBottomWidth: 1, borderBottomColor: '#3b82f6', paddingBottom: 5, marginBottom: 10, marginTop: 20 },
  textSidebar: { fontSize: 10, marginBottom: 6, color: '#dbeafe' },
  
  // Main Content Styles
  sectionTitleMain: { fontSize: 14, fontWeight: 'bold', textTransform: 'uppercase', borderBottomWidth: 2, borderBottomColor: '#e5e7eb', paddingBottom: 5, marginBottom: 15, marginTop: 15, color: '#1f2937' },
  block: { marginBottom: 15 },
  role: { fontSize: 12, fontWeight: 'bold', color: '#1f2937' },
  companyDate: { fontSize: 10, color: '#2563eb', marginBottom: 5 },
  textMain: { fontSize: 10, color: '#374151', lineHeight: 1.5 },
  degree: { fontSize: 12, fontWeight: 'bold', color: '#1f2937' },
  schoolDate: { fontSize: 10, color: '#4b5563' }
});

export default function CreativePDF({ data }) {
  const { personalInfo, experience, education, skills } = data;

  return (
    <Page size="A4" style={styles.page}>
      {/* Left Sidebar */}
      <View style={styles.sidebar}>
        <Text style={styles.name}>
          {personalInfo.firstName || 'First'}
          {'\n'}
          {personalInfo.lastName || 'Last'}
        </Text>
        <Text style={styles.jobTitle}>{personalInfo.jobTitle || 'Job Title'}</Text>
        
        <View>
          <Text style={styles.sectionTitleSidebar}>Contact</Text>
          <Text style={styles.textSidebar}>{personalInfo.email || 'email@example.com'}</Text>
          <Text style={styles.textSidebar}>{personalInfo.phone || '+91 00000 00000'}</Text>
        </View>

        {skills && (
          <View>
            <Text style={styles.sectionTitleSidebar}>Skills</Text>
            {skills.split(',').map((skill, index) => {
              const trimmed = skill.trim();
              return trimmed ? <Text key={index} style={styles.textSidebar}>• {trimmed}</Text> : null;
            })}
          </View>
        )}
      </View>

      {/* Right Main Content */}
      <View style={styles.main}>
        {personalInfo.summary && (
          <View>
            <Text style={styles.sectionTitleMain}>Profile</Text>
            <Text style={styles.textMain}>{personalInfo.summary}</Text>
          </View>
        )}

        {experience.length > 0 && (
          <View>
            <Text style={styles.sectionTitleMain}>Experience</Text>
            {experience.map((exp) => (
              <View key={exp.id} style={styles.block}>
                <Text style={styles.role}>{exp.role}</Text>
                <Text style={styles.companyDate}>
                  {exp.company} | {exp.startDate} - {exp.endDate || 'Present'}
                </Text>
                <Text style={styles.textMain}>{exp.description}</Text>
              </View>
            ))}
          </View>
        )}

        {education.length > 0 && (
          <View>
            <Text style={styles.sectionTitleMain}>Education</Text>
            {education.map((edu) => (
              <View key={edu.id} style={styles.block}>
                <Text style={styles.degree}>{edu.degree}</Text>
                <Text style={styles.schoolDate}>
                  {edu.school} | {edu.startDate} - {edu.endDate}
                </Text>
              </View>
            ))}
          </View>
        )}
      </View>
    </Page>
  );
}