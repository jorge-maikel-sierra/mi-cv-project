import { Code, Plus, X } from 'lucide-react';
import { useState } from 'react';

export default function SkillsForm({ data, onChange }) {
  const [inputValue, setInputValue] = useState('');

  const addSkill = () => {
    if (inputValue.trim() && !data.includes(inputValue.trim())) {
      onChange([...data, inputValue.trim()]);
      setInputValue('');
    }
  };

  const removeSkill = (skillToRemove) => {
    onChange(data.filter((skill) => skill !== skillToRemove));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addSkill();
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <div className="flex-1">
          <label className="flex items-center gap-2 text-sm font-medium text-cv-text-main mb-1">
            <Code className="w-4 h-4 text-cv-primary-500" />
            Agregar habilidad
          </label>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full px-4 py-2 border border-cv-primary-200 rounded-lg focus:ring-2 focus:ring-cv-primary-500 focus:border-transparent outline-none transition-all"
            placeholder="Ej: React.js, Python, AWS..."
          />
        </div>
        <button
          type="button"
          onClick={addSkill}
          className="self-end px-4 py-2 bg-cv-primary-600 text-white rounded-lg hover:bg-cv-primary-700 transition-colors flex items-center gap-2 font-medium"
        >
          <Plus className="w-4 h-4" />
          Agregar
        </button>
      </div>

      {data.length > 0 && (
        <div className="bg-cv-bg-lighter p-4 rounded-lg border border-cv-primary-50">
          <p className="text-sm font-medium text-cv-text-main mb-3">Habilidades ({data.length})</p>
          <div className="flex flex-wrap gap-2">
            {data.map((skill, index) => (
              <div
                key={index}
                className="bg-white border border-cv-primary-200 px-3 py-1.5 rounded-full flex items-center gap-2 group hover:border-cv-primary-400 transition-colors"
              >
                <span className="text-sm text-cv-text-main">{skill}</span>
                <button
                  type="button"
                  onClick={() => removeSkill(skill)}
                  className="text-cv-primary-400 hover:text-red-500 transition-colors"
                  aria-label={`Eliminar ${skill}`}
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {data.length === 0 && (
        <div className="text-center py-8 text-cv-text-secondary">
          <Code className="w-12 h-12 mx-auto mb-2 opacity-50 text-cv-primary-300" />
          <p className="text-sm">Aún no has agregado habilidades</p>
        </div>
      )}
    </div>
  );
}
