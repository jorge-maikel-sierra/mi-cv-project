export const initialData = {
  personalInfo: {
    fullName: 'Jorge Maikel Sierra',
    jobTitle: 'Desarrollador Full Stack Senior',
    email: 'jorgemaikelsierraamaya@gmail.com',
    phone: '+57 318 759 2617',
    location: 'Riohacha, La Guajira, Colombia',
    website: 'www.jorgemaikelsierra.dev',
    linkedin: 'https://www.linkedin.com/in/jorgemaikelsierra/',
    summary:
      'Desarrollador Full Stack con más de 5 años de experiencia en la creación de aplicaciones web escalables y eficientes. Especializado en React, Node.js y arquitecturas cloud. Apasionado por escribir código limpio y mantener las mejores prácticas de desarrollo.',
    photo: null,
  },
  education: [
    {
      id: crypto.randomUUID(),
      institution: 'Universidad De La Guajira',
      degree: 'Grado en Ingeniería Informática',
      location: 'Riohacha, La Guajira, Colombia',
      startDate: '2015',
      endDate: '2019',
      description: 'Especialización en Ingeniería del Software y Sistemas de Información.',
    },
    {
      id: crypto.randomUUID(),
      institution: 'Platzi',
      degree: 'Certificación Profesional en React Avanzado',
      location: 'Online',
      startDate: '2021',
      endDate: '2021',
      description: 'Curso especializado en patrones avanzados de React, optimización y testing.',
    },
  ],
  experience: [
    {
      id: crypto.randomUUID(),
      company: 'TechCorp Solutions',
      position: 'Senior Full Stack Developer',
      location: 'Madrid, España',
      startDate: 'Ene 2021',
      endDate: 'Presente',
      current: true,
      description: `• Lideré el desarrollo de una plataforma SaaS que gestiona más de 50,000 usuarios activos
• Implementé arquitectura de microservicios usando Node.js, Docker y Kubernetes
• Reduje el tiempo de carga de la aplicación en un 40% mediante optimizaciones de rendimiento
• Mentoré a un equipo de 4 desarrolladores junior en mejores prácticas de React y TypeScript`,
    },
    {
      id: crypto.randomUUID(),
      company: 'StartupLab',
      position: 'Frontend Developer',
      location: 'Barcelona, España',
      startDate: 'Jun 2019',
      endDate: 'Dic 2020',
      current: false,
      description: `• Desarrollé interfaces de usuario responsivas para aplicaciones web y móviles
• Colaboré con el equipo de diseño para implementar sistemas de diseño escalables
• Integré APIs RESTful y GraphQL en aplicaciones React
• Participé en revisiones de código y procesos de CI/CD`,
    },
  ],
  skills: [
    'JavaScript (ES6+)',
    'TypeScript',
    'React.js',
    'Node.js',
    'Next.js',
    'Express',
    'PostgreSQL',
    'MongoDB',
    'Docker',
    'AWS',
    'Git',
    'Tailwind CSS',
    'REST APIs',
    'GraphQL',
    'Jest',
    'Cypress',
  ],
};
