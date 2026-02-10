import { User, Mail, Phone, MapPin, Globe, Linkedin, FileText, Camera } from 'lucide-react';
import { useRef } from 'react';

export default function PersonalInfoForm({ data, onChange }) {
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    // Validar tipo de archivo
    if (!file.type.startsWith('image/')) {
      alert('Por favor selecciona un archivo de imagen válido');
      return;
    }

    // Validar tamaño (máx 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('La imagen no debe superar los 5MB');
      return;
    }

    // Crear URL temporal para previsualización
    const photoURL = URL.createObjectURL(file);
    onChange({ ...data, photo: photoURL });
  };

  const handleRemovePhoto = () => {
    if (data.photo) {
      URL.revokeObjectURL(data.photo);
      onChange({ ...data, photo: null });
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-4">
      {/* Foto de perfil */}
      <div className="flex flex-col items-center gap-4 p-4 bg-gray-50 rounded-lg">
        {data.photo ? (
          <div className="relative">
            <img
              src={data.photo}
              alt="Foto de perfil"
              className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <button
              type="button"
              onClick={handleRemovePhoto}
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition-colors shadow-lg"
              aria-label="Eliminar foto"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        ) : (
          <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center">
            <Camera className="w-12 h-12 text-gray-400" />
          </div>
        )}
        <label className="cursor-pointer bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center gap-2">
          <Camera className="w-4 h-4" />
          {data.photo ? 'Cambiar foto' : 'Cargar foto'}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
            className="hidden"
          />
        </label>
        <p className="text-xs text-gray-500">Máx 5MB - JPG, PNG o GIF</p>
      </div>

      {/* Información personal */}
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
            <User className="w-4 h-4" />
            Nombre completo
          </label>
          <input
            type="text"
            name="fullName"
            value={data.fullName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
            placeholder="Ej: Ana García Rodríguez"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
            <FileText className="w-4 h-4" />
            Título profesional
          </label>
          <input
            type="text"
            name="jobTitle"
            value={data.jobTitle}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
            placeholder="Ej: Desarrolladora Full Stack Senior"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
              <Mail className="w-4 h-4" />
              Email
            </label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
              placeholder="tu@email.com"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
              <Phone className="w-4 h-4" />
              Teléfono
            </label>
            <input
              type="tel"
              name="phone"
              value={data.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
              placeholder="+34 612 345 678"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
              <MapPin className="w-4 h-4" />
              Ubicación
            </label>
            <input
              type="text"
              name="location"
              value={data.location}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
              placeholder="Madrid, España"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
              <Globe className="w-4 h-4" />
              Sitio web
            </label>
            <input
              type="text"
              name="website"
              value={data.website}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
              placeholder="www.tuportfolio.com"
            />
          </div>
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </label>
          <input
            type="text"
            name="linkedin"
            value={data.linkedin}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
            placeholder="linkedin.com/in/tuperfil"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
            <FileText className="w-4 h-4" />
            Resumen profesional
          </label>
          <textarea
            name="summary"
            value={data.summary}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
            placeholder="Describe brevemente tu experiencia y objetivos profesionales..."
          />
        </div>
      </div>
    </div>
  );
}
