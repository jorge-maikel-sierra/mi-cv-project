import { GraduationCap, Plus, Trash2 } from 'lucide-react';

export default function EducationForm({ data, onChange }) {
  const addEducation = () => {
    const newEducation = {
      id: crypto.randomUUID(),
      institution: '',
      degree: '',
      location: '',
      startDate: '',
      endDate: '',
      description: '',
    };
    onChange([...data, newEducation]);
  };

  const removeEducation = (id) => {
    onChange(data.filter((item) => item.id !== id));
  };

  const updateEducation = (id, field, value) => {
    onChange(data.map((item) => (item.id === id ? { ...item, [field]: value } : item)));
  };

  return (
    <div className="space-y-4">
      {data.map((edu, index) => (
        <div key={edu.id} className="p-4 border border-gray-200 rounded-lg bg-white space-y-4">
          <div className="flex justify-between items-center">
            <h4 className="font-medium text-gray-700 flex items-center gap-2">
              <GraduationCap className="w-5 h-5" />
              Educación {index + 1}
            </h4>
            {data.length > 1 && (
              <button
                type="button"
                onClick={() => removeEducation(edu.id)}
                className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-colors"
                aria-label="Eliminar"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Institución</label>
              <input
                type="text"
                value={edu.institution}
                onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                placeholder="Universidad Politécnica de Madrid"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Título / Grado</label>
              <input
                type="text"
                value={edu.degree}
                onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                placeholder="Grado en Ingeniería Informática"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Ubicación</label>
              <input
                type="text"
                value={edu.location}
                onChange={(e) => updateEducation(edu.id, 'location', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                placeholder="Madrid, España"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Fecha inicio</label>
                <input
                  type="text"
                  value={edu.startDate}
                  onChange={(e) => updateEducation(edu.id, 'startDate', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder="2015"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Fecha fin</label>
                <input
                  type="text"
                  value={edu.endDate}
                  onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder="2019"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Descripción (opcional)
              </label>
              <textarea
                value={edu.description}
                onChange={(e) => updateEducation(edu.id, 'description', e.target.value)}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                placeholder="Especialización, logros, honores..."
              />
            </div>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addEducation}
        className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-primary-500 hover:text-primary-500 transition-colors flex items-center justify-center gap-2"
      >
        <Plus className="w-5 h-5" />
        Agregar educación
      </button>
    </div>
  );
}
