import { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { ChevronDown, Download, User, GraduationCap, Briefcase, Code } from 'lucide-react';
import PersonalInfoForm from './components/cv-form/PersonalInfoForm';
import EducationForm from './components/cv-form/EducationForm';
import ExperienceForm from './components/cv-form/ExperienceForm';
import SkillsForm from './components/cv-form/SkillsForm';
import CVPreview from './components/cv-preview/CVPreview';
import { initialData } from './data/initialData';

function App() {
  const [cvData, setCvData] = useState(initialData);
  const [openSection, setOpenSection] = useState('personal');
  const cvRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => cvRef.current,
    documentTitle: `CV_${cvData.personalInfo.fullName.replace(/\s+/g, '_') || 'Mi_CV'}`,
  });

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sections = [
    {
      id: 'personal',
      title: 'Información Personal',
      icon: User,
      component: (
        <PersonalInfoForm
          data={cvData.personalInfo}
          onChange={(data) => setCvData({ ...cvData, personalInfo: data })}
        />
      ),
    },
    {
      id: 'experience',
      title: 'Experiencia Laboral',
      icon: Briefcase,
      component: (
        <ExperienceForm
          data={cvData.experience}
          onChange={(data) => setCvData({ ...cvData, experience: data })}
        />
      ),
    },
    {
      id: 'education',
      title: 'Educación',
      icon: GraduationCap,
      component: (
        <EducationForm
          data={cvData.education}
          onChange={(data) => setCvData({ ...cvData, education: data })}
        />
      ),
    },
    {
      id: 'skills',
      title: 'Habilidades',
      icon: Code,
      component: (
        <SkillsForm
          data={cvData.skills}
          onChange={(data) => setCvData({ ...cvData, skills: data })}
        />
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Generador de CV Profesional</h1>
              <p className="text-sm text-gray-600 mt-1">
                Crea tu currículum de forma rápida y profesional
              </p>
            </div>
            <button
              onClick={handlePrint}
              className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors flex items-center gap-2 shadow-md hover:shadow-lg"
            >
              <Download className="w-5 h-5" />
              Descargar PDF
            </button>
          </div>
        </div>
      </header>

      {/* Main Content - Split Screen */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Panel - Forms */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Editar Información</h2>
            {sections.map((section) => {
              const Icon = section.icon;
              const isOpen = openSection === section.id;

              return (
                <div
                  key={section.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
                >
                  {/* Section Header */}
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-white to-gray-50 hover:from-gray-50 hover:to-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary-100 rounded-lg">
                        <Icon className="w-5 h-5 text-primary-600" />
                      </div>
                      <span className="font-semibold text-gray-900">{section.title}</span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Section Content */}
                  {isOpen && (
                    <div className="px-6 py-4 border-t border-gray-100">{section.component}</div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Panel - CV Preview */}
          <div className="lg:sticky lg:top-8 h-fit">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Vista Previa</h2>
            <div className="bg-gray-200 p-4 rounded-lg shadow-xl overflow-auto max-h-[calc(100vh-12rem)]">
              <CVPreview ref={cvRef} data={cvData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
