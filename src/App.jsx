import React from 'react';
import PersonalInfoForm from './components/Form/PersonalInfoForm';
import ResumePreview from './components/Preview/ResumePreview';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Modern Resume Builder</h1>
          {/* We will add the Export Buttons here later */}
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Form Editor (Scrollable) */}
          <div className="h-[85vh] overflow-y-auto pr-2 pb-10">
            <PersonalInfoForm />
            {/* Experience and Education forms will go here next */}
          </div>

          {/* Right Column: Live Preview (Sticky) */}
          <div className="flex justify-center lg:sticky top-8 h-fit">
            <div className="w-full max-w-[21cm]"> 
              <ResumePreview />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;