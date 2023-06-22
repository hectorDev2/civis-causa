import * as assets from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'Sobre mi'
  },
  {
    id: 'work',
    title: 'Mis Proyectos'
  },
  {
    id: 'contact',
    title: 'Contacto'
  }
]

const services = [
  {
    title: 'Web Developer',
    icon: assets.web
  },
  {
    title: 'Frontend Developer',
    icon: assets.mobile
  },
  {
    title: 'Backend Developer',
    icon: assets.backend
  }
]

const technologiesFrontend = [
  {
    name: 'HTML 5',
    icon: assets.html
  },
  {
    name: 'CSS 3',
    icon: assets.css
  },
  {
    name: 'JavaScript',
    icon: assets.javascript
  },
  {
    name: 'TypeScript',
    icon: assets.typescript
  },
  {
    name: 'React JS',
    icon: assets.reactjs
  },
  {
    name: 'Redux Toolkit',
    icon: assets.redux
  },
  {
    name: 'Node JS',
    icon: assets.nodejs
  },

  {
    name: 'git',
    icon: assets.git
  },
  {
    name: 'figma',
    icon: assets.figma
  },
  {
    name: 'tailwind',
    icon: assets.tailwind
  }
]
const technologiesBackend = [
  {
    name: 'Node JS',
    icon: assets.nodejs
  },
  ,
  {
    name: 'TypeScript',
    icon: assets.typescript
  },
  {
    name: 'MongoDB',
    icon: assets.mongodb
  },
  {
    name: 'Nest',
    icon: assets.nest
  },
  {
    name: 'PostgreSQL',
    icon: assets.postgresql
  }
]

const experiences = [
  {
    title: 'Web Developer trainee',
    company_name: 'Digenio',
    description:
      'Digenio es una empresa local que hace pequeñas aplicaciones web para empresas PYMES.',
    icon: assets.digenio,
    iconBg: '#383E56',
    date: 'Mayo 2021 - Diciembre 2021',
    points: [
      'Contribui a la construccion de una aplicación SPA para ver doramas utilizando tecnologías como React y Redux.',
      'Trabaje en equipo con otros desarrolladores experimentados en la empresa.',
      'Aprendi y trabaje con herramientas de desarrollo como Webpack y Babel para compilar y empaquetar el código de la aplicación.',
      'Integró servicios externos, como servicios de streaming de video y servicios de análisis de datos, para mejorar la funcionalidad de la aplicación.',
      'Participó en la optimización del rendimiento y la velocidad de la aplicación utilizando técnicas como la carga progresiva y la optimización de imágenes para mejorar la experiencia del usuario.'
    ],
    technologies: [
      'React',
      'Redux',
      'Webpack',
      'Babel',
      'MongoDb',
      'NextJs',
      'Figma',
      'Css'
    ]
  },

  {
    title: 'React Frontend Developer',
    company_name: 'Enova',
    description:
      'Enova es una empresa que hace tiendas online para empresas de Peru y Latinoamerica.',
    icon: assets.enova,
    iconBg: '#E6DEDD',
    date: 'Mayo 2021 - Febrero 2022',
    points: [
      'Desarrollo de tiendas online utilizando tecnologías como React, VTEX y NEXT para construir la interfaz de usuario y la funcionalidad de la tienda.',
      'Integración de sistemas de terceros para mejorar la funcionalidad de la tienda, como sistemas de pago en línea, envío y seguimiento de paquetes y análisis de datos.',
      'Desarrollo de microservicios para la gestión de diferentes funcionalidades de la tienda, como inventario, pedidos y clientes.',
      'Optimización de la velocidad y el rendimiento de la tienda mediante técnicas como la optimización de imágenes y del código.',
      'Mantenimiento y corrección de errores para garantizar el correcto funcionamiento de la tienda en todo momento.'
    ],
    technologies: ['React', 'VTEX', 'NextJs', 'Figma', 'Gasby', 'GraphQL']
  },
  {
    title: 'Full Stack Developer',
    company_name: 'AWTO',
    description:
      'AWTO es una startup que proporciona una plataforma para que las empresas de alquiler de coches gestionen su flota y sus clientes.',
    icon: assets.awto,
    iconBg: '#383E56',
    date: 'Abril 2022 - Abril 2023',
    points: [
      'Desarrollar y mantener aplicaciones web utilizando React.js y otras tecnologías relacionadas',
      'Colaborar con equipos interfuncionales que incluyen diseñadores, gerentes de producto y otros desarrolladores para crear productos de alta calidad',
      'Implementar diseños responsivos y asegurar la compatibilidad entre navegadores',
      'Participar en revisiones de código y brindar comentarios constructivos a otros desarrolladores'
    ],
    technologies: [
      'React',
      'Redux',
      'Node',
      'Sql',
      'MongoDb',
      'NestJs',
      'Angular',
      'Nest'
    ]
  }
]

const projects = [
  {
    name: 'tablas de data en car sharing',
    description:
      'migracion de tablas paginadas con filtros y ordenamiento de data en car sharing',
    tags: [
      {
        name: 'angular',
        color: 'pink-text-gradient'
      },
      {
        name: 'nestjs',
        color: 'pink-text-gradient'
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient'
      }
    ],
    image: assets.carrent,
    source_code_link: 'https://github.com/'
  },
  {
    name: 'Single Page Doramas',
    description:
      'Una aplicación SPA para ver doramas utilizando tecnologías como React(NextJs) y Redux.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'NextJs',
        color: 'green-text-gradient'
      },
      {
        name: 'GraphQL',
        color: 'blue-text-gradient'
      },
      {
        name: 'restapi',
        color: 'green-text-gradient'
      },
      {
        name: 'scss',
        color: 'pink-text-gradient'
      }
    ],
    image: assets.jobit,
    source_code_link: 'https://github.com/'
  },
  {
    name: 'Tienda Online',
    description:
      'Desarrollo de tiendas online utilizando tecnologías como React, VTEX y NEXT para construir la interfaz de usuario y la funcionalidad de la tienda.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient'
      },
      {
        name: 'VTEX',
        color: 'green-text-gradient'
      },
      {
        name: 'styled-components',
        color: 'pink-text-gradient'
      }
    ],
    image: assets.tripguide,
    source_code_link: 'https://github.com/'
  },
  {
    name: 'Traductor de idiomas Toogol',
    description:
      'migracion de tablas paginadas con filtros y ordenamiento de data en car sharing',
    tags: [
      {
        name: 'angular',
        color: 'pink-text-gradient'
      },
      {
        name: 'nestjs',
        color: 'pink-text-gradient'
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient'
      }
    ],
    image: assets.carrent,
    source_code_link: 'https://github.com/'
  }
]

export {
  services,
  technologiesFrontend,
  technologiesBackend,
  experiences,
  projects
}
