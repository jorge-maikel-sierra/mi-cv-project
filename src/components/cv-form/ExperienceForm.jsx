import { Briefcase, Plus, Trash2 } from 'lucide-react';

export default function ExperienceForm({ data, onChange }) {
  const addExperience = () => {
    const newExperience = {
      id: crypto.randomUUID(),
      company: '',
      position: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
    };
    onChange([...data, newExperience]);
  };

  const removeExperience = (id) => {
    onChange(data.filter((item) => item.id !== id));
  };

  const updateExperience = (id, field, value) => {
    onChange(data.map((item) => (item.id === id ? { ...item, [field]: value } : item)));
  };

  return (
    <div className="space-y-4">
      {data.map((exp, index) => (
        <div key={exp.id} className="p-4 border border-gray-200 rounded-lg bg-white space-y-4">
          <div className="flex justify-between items-center">
            <h4 className="font-medium text-gray-700 flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              Experiencia {index + 1}
            </h4>
            {data.length > 1 && (
              <button
                type="button"
                onClick={() => removeExperience(exp.id)}
                className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-colors"
                aria-label="Eliminar"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Empresa</label>
              <input
                type="text"
                value={exp.company}
                onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                placeholder="TechCorp Solutions"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Puesto</label>
              <input
                type="text"
                value={exp.position}
                onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                placeholder="Senior Full Stack Developer"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Ubicación</label>
              <input
                type="text"
                value={exp.location}
                onChange={(e) => updateExperience(exp.id, 'location', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                placeholder="Madrid, España"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Fecha inicio</label>
                <input
                  type="text"
                  value={exp.startDate}
                  onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder="Ene 2021"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Fecha fin</label>
                <input
                  type="text"
                  value={exp.endDate}
                  onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                  disabled={exp.current}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                  placeholder="Dic 2023"
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id={`current-${exp.id}`}
                checked={exp.current}
                onChange={(e) => {
                  updateExperience(exp.id, 'current', e.target.checked);
                  if (e.target.checked) {
                    updateExperience(exp.id, 'endDate', 'Presente');
                  }
                }}
                className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
              />
              <label htmlFor={`current-${exp.id}`} className="text-sm text-gray-700">
                Trabajo actual
              </label>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Descripción / Logros
              </label>
              <textarea
                value={exp.description}
                onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                placeholder="• Desarrollé una plataforma que...&#10;• Lideré un equipo de...&#10;• Implementé mejoras que..."
              />
              <p className="text-xs text-gray-500 mt-1">
                Usa viñetas (•) para listar logros y responsabilidades
              </p>
            </div>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addExperience}
        className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-primary-500 hover:text-primary-500 transition-colors flex items-center justify-center gap-2"
      >
        <Plus className="w-5 h-5" />
        Agregar experiencia
      </button>
    </div>
  );
}
