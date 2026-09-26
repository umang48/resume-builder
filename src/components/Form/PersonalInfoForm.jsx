import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useResumeStore } from '../../store/useResumeStore';

export default function PersonalInfoForm() {
  const { register, watch } = useForm();
  const updatePersonalInfo = useResumeStore((state) => state.updatePersonalInfo);

  // Watch all inputs to sync with global state in real-time
  const formValues = watch();

  useEffect(() => {
    updatePersonalInfo(formValues);
  }, [formValues, updatePersonalInfo]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Personal Details</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
          <input 
            {...register('firstName')} 
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border" 
            placeholder="John" 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
          <input 
            {...register('lastName')} 
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border" 
            placeholder="Doe" 
          />
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
          <input 
            {...register('jobTitle')} 
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border" 
            placeholder="e.g. Senior PHP Developer" 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input 
            type="email" 
            {...register('email')} 
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border" 
            placeholder="john@example.com" 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input 
            type="tel" 
            {...register('phone')} 
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border" 
            placeholder="+91 98765 43210" 
          />
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Professional Summary</label>
          <textarea 
            {...register('summary')} 
            rows="3" 
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border" 
            placeholder="A brief summary of your professional background..."
          ></textarea>
        </div>
      </div>
    </div>
  );
}