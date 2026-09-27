import { create } from 'zustand';

export const useResumeStore = create((set) => ({
  // State
  personalInfo: {
    firstName: '',
    lastName: '',
    jobTitle: '',
    email: '',
    phone: '',
    summary: '',
  },
  experience: [], // Array of objects: { id, company, role, startDate, endDate, description }
  education: [],  // Array of objects: { id, school, degree, startDate, endDate }
  skills: '',     // Comma-separated string for simplicity in the UI
  template: 'minimalist', // 'minimalist' or 'creative'

  setTemplate: (templateName) => set(() => ({ template: templateName })),
  // Actions
  updatePersonalInfo: (data) =>
    set((state) => ({ personalInfo: { ...state.personalInfo, ...data } })),

  // Experience Actions
  addExperience: (exp) =>
    set((state) => ({ experience: [...state.experience, exp] })),
  updateExperience: (id, updatedExp) =>
    set((state) => ({
      experience: state.experience.map((exp) => (exp.id === id ? { ...exp, ...updatedExp } : exp)),
    })),
  removeExperience: (id) =>
    set((state) => ({ experience: state.experience.filter((exp) => exp.id !== id) })),

  // Education Actions
  addEducation: (edu) =>
    set((state) => ({ education: [...state.education, edu] })),
  updateEducation: (id, updatedEdu) =>
    set((state) => ({
      education: state.education.map((edu) => (edu.id === id ? { ...edu, ...updatedEdu } : edu)),
    })),
  removeEducation: (id) =>
    set((state) => ({ education: state.education.filter((edu) => edu.id !== id) })),

  // Skills Action
  updateSkills: (skills) => set(() => ({ skills })),
}));