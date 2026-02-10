import { Mail, Phone, MapPin, Globe, Linkedin, GraduationCap, Briefcase, Code } from 'lucide-react';
import { forwardRef } from 'react';

const CVPreview = forwardRef(({ data }, ref) => {
  const { personalInfo, education, experience, skills } = data;

  return (
    <div
      ref={ref}
      className="bg-white shadow-2xl print-exact"
      style={{
        width: '210mm',
        minHeight: '297mm',
        padding: '15mm',
        margin: '0 auto',
      }}
    >
      {/* Header Section */}
      <div
        className="border-b-4 border-cv-primary-600 pb-6 mb-6"
        style={{ pageBreakInside: 'avoid' }}
      >
        <div className="flex items-start gap-6">
          {personalInfo.photo && (
            <img
              src={personalInfo.photo}
              alt={personalInfo.fullName}
              className="w-24 h-24 rounded-full object-cover border-4 border-cv-primary-100"
            />
          )}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-cv-text-main mb-1">
              {personalInfo.fullName || 'Tu Nombre'}
            </h1>
            <p className="text-lg text-cv-primary-600 font-medium mb-3">
              {personalInfo.jobTitle || 'Tu Título Profesional'}
            </p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-cv-text-secondary">
              {personalInfo.email && (
                <div className="flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-cv-primary-600" />
                  <span>{personalInfo.email}</span>
                </div>
              )}
              {personalInfo.phone && (
                <div className="flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-cv-primary-600" />
                  <span>{personalInfo.phone}</span>
                </div>
              )}
              {personalInfo.location && (
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-cv-primary-600" />
                  <span>{personalInfo.location}</span>
                </div>
              )}
              {personalInfo.website && (
                <div className="flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-cv-primary-600" />
                  <span>{personalInfo.website}</span>
                </div>
              )}
              {personalInfo.linkedin && (
                <div className="flex items-center gap-1.5 col-span-2">
                  <Linkedin className="w-4 h-4 text-cv-primary-600" />
                  <span>{personalInfo.linkedin}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Summary Section */}
      {personalInfo.summary && (
        <div className="mb-6" style={{ pageBreakInside: 'avoid' }}>
          <h2 className="text-xl font-bold text-cv-text-main mb-3 pb-2 border-b-2 border-cv-primary-100">
            Perfil Profesional
          </h2>
          <p className="text-sm text-cv-text-main leading-relaxed">{personalInfo.summary}</p>
        </div>
      )}

      {/* Experience Section */}
      {experience.length > 0 && experience.some((exp) => exp.company || exp.position) && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-cv-text-main mb-3 pb-2 border-b-2 border-cv-primary-100 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-cv-primary-600" />
            Experiencia Laboral
          </h2>
          <div className="space-y-4">
            {experience.map(
              (exp) =>
                (exp.company || exp.position) && (
                  <div
                    key={exp.id}
                    className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-cv-primary-600 before:rounded-full"
                    style={{ pageBreakInside: 'avoid' }}
                  >
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="text-base font-semibold text-cv-text-main">
                        {exp.position || 'Puesto'}
                      </h3>
                      <span className="text-sm text-cv-text-secondary">
                        {exp.startDate} - {exp.endDate || 'Presente'}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-cv-primary-700 font-medium mb-2">
                      <span>{exp.company}</span>
                      {exp.location && (
                        <>
                          <span className="text-cv-primary-300">•</span>
                          <span className="text-cv-text-secondary">{exp.location}</span>
                        </>
                      )}
                    </div>
                    {exp.description && (
                      <div className="text-sm text-cv-text-main whitespace-pre-line leading-relaxed">
                        {exp.description}
                      </div>
                    )}
                  </div>
                )
            )}
          </div>
        </div>
      )}

      {/* Education Section */}
      {education.length > 0 && education.some((edu) => edu.institution || edu.degree) && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-cv-text-main mb-3 pb-2 border-b-2 border-cv-primary-100 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-cv-primary-600" />
            Educación
          </h2>
          <div className="space-y-4">
            {education.map(
              (edu) =>
                (edu.institution || edu.degree) && (
                  <div
                    key={edu.id}
                    className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-cv-primary-600 before:rounded-full"
                    style={{ pageBreakInside: 'avoid' }}
                  >
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="text-base font-semibold text-cv-text-main">
                        {edu.degree || 'Título'}
                      </h3>
                      <span className="text-sm text-cv-text-secondary">
                        {edu.startDate} {edu.startDate && edu.endDate && '-'} {edu.endDate}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-cv-primary-700 font-medium mb-1">
                      <span>{edu.institution}</span>
                      {edu.location && (
                        <>
                          <span className="text-cv-primary-300">•</span>
                          <span className="text-cv-text-secondary">{edu.location}</span>
                        </>
                      )}
                    </div>
                    {edu.description && (
                      <p className="text-sm text-cv-text-main leading-relaxed">{edu.description}</p>
                    )}
                  </div>
                )
            )}
          </div>
        </div>
      )}

      {/* Skills Section */}
      {skills.length > 0 && (
        <div className="mb-6" style={{ pageBreakInside: 'avoid' }}>
          <h2 className="text-xl font-bold text-cv-text-main mb-3 pb-2 border-b-2 border-cv-primary-100 flex items-center gap-2">
            <Code className="w-5 h-5 text-cv-primary-600" />
            Habilidades Técnicas
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-cv-primary-50 text-cv-primary-700 text-sm font-medium rounded-full border border-cv-primary-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
});

CVPreview.displayName = 'CVPreview';

export default CVPreview;
