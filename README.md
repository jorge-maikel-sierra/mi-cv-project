# 📄 Generador de CV Profesional

> Aplicación web moderna para crear currículums profesionales en formato PDF con vista previa en tiempo real

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.3.1-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.18-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## ✨ Características

- 🎨 **Interfaz Intuitiva**: Editor visual con vista previa en tiempo real
- 📱 **Diseño Responsivo**: Optimizado para desktop y tablets
- 🖼️ **Foto de Perfil**: Soporte para subir y previsualizar imagen (máx 5MB)
- 📝 **Secciones Completas**:
  - ✅ Información personal con foto
  - 💼 Experiencia laboral (múltiples entradas)
  - 🎓 Educación (múltiples entradas)
  - 💻 Habilidades técnicas (sistema de tags)
- 📄 **Exportación a PDF**: Genera PDF de calidad profesional con formato A4
- 🎨 **Paleta de Colores Personalizada**: Tonos terrosos cálidos para un aspecto profesional
- ⚡ **Actualizaciones en Tiempo Real**: Cambios instantáneos con HMR de Vite
- 🔄 **Gestión de Estado Local**: Sin dependencias de estado global

## 🚀 Inicio Rápido

### Prerrequisitos

- **Node.js 18+** ([Descargar](https://nodejs.org/))
- **npm 9+** (incluido con Node.js)

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/mi-cv-project.git
cd mi-cv-project

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en **http://localhost:5173**

## 📦 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor con Hot Module Replacement

# Producción
npm run build        # Build optimizado para producción
npm run preview      # Vista previa del build de producción

# Calidad de Código
npm run lint         # Ejecutar ESLint
npm run lint:fix     # Auto-corregir errores de ESLint
npm run format       # Formatear código con Prettier
npm run format:check # Verificar formato sin modificar
```

## 🏗️ Arquitectura del Proyecto

```
mi-cv-project/
├── src/
│   ├── components/
│   │   ├── cv-form/              # Formularios de edición
│   │   │   ├── PersonalInfoForm.jsx
│   │   │   ├── EducationForm.jsx
│   │   │   ├── ExperienceForm.jsx
│   │   │   └── SkillsForm.jsx
│   │   └── cv-preview/           # Vista previa del CV
│   │       └── CVPreview.jsx
│   ├── data/
│   │   └── initialData.js        # Datos de ejemplo
│   ├── App.jsx                   # Componente principal
│   ├── main.jsx                  # Punto de entrada
│   └── index.css                 # Estilos globales (Tailwind + tema)
├── public/                       # Recursos estáticos
├── .github/
│   └── copilot-instructions.md   # Guía para AI coding
├── .vscode/
│   ├── settings.json             # Configuración del editor
│   └── extensions.json           # Extensiones recomendadas
├── vite.config.js                # Configuración de Vite
├── eslint.config.js              # Configuración de ESLint
├── postcss.config.js             # Configuración de PostCSS
├── .prettierrc                   # Configuración de Prettier
└── package.json
```

### Estructura de Componentes

```
App (Estado principal)
├── Header (con botón de descarga)
├── Left Panel - Formularios (acordeón)
│   ├── PersonalInfoForm
│   ├── ExperienceForm
│   ├── EducationForm
│   └── SkillsForm
└── Right Panel - Vista Previa
    └── CVPreview (exportable a PDF)
```

## 🎨 Tecnologías

### Core

- **React 19.2.0**: Biblioteca UI con hooks modernos
- **Vite 7.3.1**: Build tool ultrarrápido con HMR
- **Tailwind CSS 4.1.18**: Framework CSS utility-first con tema personalizado

### Bibliotecas Principales

- **react-to-print 3.2.0**: Generación de PDFs desde componentes React
- **lucide-react 0.563.0**: Iconos SVG modernos y ligeros

### Herramientas de Desarrollo

- **ESLint 9.39.1**: Linter con configuración para React
- **Prettier 3.8.1**: Formateador de código
- **@vitejs/plugin-react 5.1.1**: Soporte oficial de React para Vite

## 💡 Uso de la Aplicación

### 1. Editar Información Personal

- Completa tu nombre, título profesional, contacto
- Sube una foto de perfil (JPG, PNG, GIF - máx 5MB)
- Escribe un resumen profesional

### 2. Agregar Experiencia Laboral

- Haz clic en "Agregar experiencia"
- Completa empresa, puesto, fechas, ubicación
- Describe tus responsabilidades y logros (usa viñetas •)
- Marca "Trabajo actual" si es tu empleo presente

### 3. Añadir Educación

- Haz clic en "Agregar educación"
- Ingresa institución, título, fechas, ubicación
- Opcionalmente añade descripción (especialización, honores)

### 4. Gestionar Habilidades

- Escribe el nombre de la habilidad
- Presiona Enter o clic en "Agregar"
- Elimina habilidades con el botón ❌

### 5. Descargar PDF

- Haz clic en **"Descargar PDF"** en la cabecera
- El CV se exportará en formato A4 profesional
- Los colores y formatos se preservan en la impresión

## 🎨 Personalización de Colores

El proyecto usa una **paleta personalizada de tonos terrosos** definida en [`src/index.css`](src/index.css):

```css
@theme {
  --color-cv-primary-500: #9c4a2f; /* Terracota principal */
  --color-cv-bg-lighter: #f5ead9; /* Crema claro */
  --color-cv-text-main: #2e1a12; /* Marrón oscuro */
  /* ... más colores */
}
```

**Cómo personalizar**:

1. Edita las variables CSS en [`src/index.css`](src/index.css)
2. Los cambios se aplicarán automáticamente en toda la app
3. Tailwind CSS detecta las variables con el prefijo `cv-`

## 🔧 Configuración de Desarrollo

### VS Code (Recomendado)

#### Extensiones Necesarias

Instala las extensiones recomendadas al abrir el proyecto:

- **Prettier** (`esbenp.prettier-vscode`)
- **ESLint** (`dbaeumer.vscode-eslint`)

#### Configuración Automática

El archivo [`.vscode/settings.json`](.vscode/settings.json) configura:

- ✅ Formateo automático al guardar con Prettier
- ✅ Auto-fix de ESLint al guardar
- ✅ Prettier como formateador por defecto

### Reglas de Código

#### ESLint

- **Target**: ES2020 con JSX
- **Plugins**: React Hooks, React Refresh, Prettier
- **Variables en mayúsculas**: Permitidas (componentes, constantes)
- **Archivos ignorados**: `/dist`

#### Prettier

```json
{
  "semi": true,
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2
}
```

## 📝 Datos Iniciales

El proyecto incluye datos de ejemplo en [`src/data/initialData.js`](src/data/initialData.js):

```javascript
export const initialData = {
  personalInfo: { fullName, jobTitle, email, phone, ... },
  education: [{ id, institution, degree, ... }],
  experience: [{ id, company, position, ... }],
  skills: ["JavaScript", "React", ...]
};
```

**Nota**: Los datos se pierden al recargar la página. Considera implementar `localStorage` para persistencia.

## 🔍 Características Técnicas

### Gestión de Estado

- **useState** para estado local en cada componente
- **Sin Redux/Context**: Arquitectura simple con props drilling
- **Estado elevado**: [`App.jsx`](src/App.jsx) mantiene el estado global del CV

### Manejo de Formularios

- **Controlados**: Todos los inputs usan `value` y `onChange`
- **Spread operator**: Para actualizaciones inmutables de estado
- **Validación de archivos**: Tipo y tamaño para la foto de perfil

### Exportación a PDF

```javascript
// En App.jsx
const handlePrint = useReactToPrint({
  contentRef: componentRef,
  documentTitle: `CV_${nombre}`,
  pageStyle: '/* CSS para impresión */',
});
```

### Secciones Acordeón

- Un solo panel abierto a la vez
- Estado `openSection` controla qué sección está visible
- Animaciones suaves con Tailwind

## 🐛 Problemas Conocidos

1. **Sin validación de formularios**: Los campos aceptan cualquier entrada
2. **Sin persistencia**: Los datos se reinician al recargar
3. **Idioma**: Toda la UI está en español (sin i18n)
4. **Solo formato A4**: No soporta otros tamaños de papel
5. **Fotos no persistentes**: Las URLs de `ObjectURL` se pierden al recargar

## 🚧 Roadmap

- [ ] Agregar validación de formularios con mensajes de error
- [ ] Implementar `localStorage` para guardar datos
- [ ] Soporte multi-idioma (i18n) - español/inglés
- [ ] Múltiples temas de colores personalizables
- [ ] Plantillas de CV alternativas (moderno, clásico, minimalista)
- [ ] Exportar a Word/JSON
- [ ] Modo oscuro
- [ ] Drag & drop para reordenar secciones
- [ ] Vista previa responsive (móvil/tablet)
- [ ] Importar datos desde LinkedIn/JSON

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo LICENSE para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Guía de Estilo

- Sigue las reglas de ESLint/Prettier configuradas
- Usa commits semánticos (Add, Fix, Update, Remove)
- Documenta nuevas funcionalidades en el README
- Añade comentarios para lógica compleja

## 👨‍💻 Autor

**Jorge Maikel Sierra Amaya**

- 📧 Email: jorgemaikelsierraamaya@gmail.com
- 🌐 LinkedIn: [jorgemaikelsierra](https://www.linkedin.com/in/jorgemaikelsierra/)
- 🌍 Portfolio: www.jorgemaikelsierra.dev
- 📍 Ubicación: Riohacha, La Guajira, Colombia

## 🙏 Agradecimientos

- [React Team](https://react.dev/) - Por React 19
- [Vite Team](https://vitejs.dev/) - Por la herramienta de build ultrarrápida
- [Tailwind Labs](https://tailwindcss.com/) - Por Tailwind CSS v4
- [Lucide](https://lucide.dev/) - Por los iconos SVG elegantes
- [react-to-print](https://github.com/MatthewHerbst/react-to-print) - Por la funcionalidad de impresión

## 📚 Recursos Adicionales

- [Documentación de React](https://react.dev/learn)
- [Guía de Vite](https://vitejs.dev/guide/)
- [Tailwind CSS v4 Beta](https://tailwindcss.com/docs/v4-beta)
- [AI Coding Instructions](.github/copilot-instructions.md) - Guía para asistentes de IA

---

⭐ **Si este proyecto te fue útil, considera darle una estrella en GitHub!**

**Última actualización**: Febrero 2026
