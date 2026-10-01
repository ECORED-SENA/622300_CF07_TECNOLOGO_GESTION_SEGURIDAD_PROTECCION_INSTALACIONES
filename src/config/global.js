export default {
  global: {
    Name: 'Redacción de informes y planeación de matriz de riesgo en seguridad',
    Description:
      'El componente desarrolla las competencias necesarias para fortalecer la gestión de la seguridad privada mediante el análisis del entorno, la comunicación técnica y la gestión del riesgo. Integra herramientas para identificar amenazas, valorar riesgos, elaborar informes, aplicar matrices de riesgo y diseñar medidas de mitigación que contribuyan a la prevención de incidentes y a la protección de personas, bienes e instalaciones.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Área técnica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Desarrollo del pensamiento lógico y analítico',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Fundamentos y desarrollo de la atención y la percepción',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Comunicación aplicada a la seguridad privada',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Importancia de la comunicación en la seguridad privada',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Concepto de informe',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Infraestructura',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Tipos de infraestructura',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Características operativas de las infraestructuras',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Organización y entorno',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Fundamentos de riesgos, amenazas y vulnerabilidades en instalaciones de seguridad privada',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Riesgo: tipos, clases y características',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Vulnerabilidad: tipos, clases y características',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Amenazas: tipos, clases y características',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Peligro: tipos, clases y características',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Incidentes de seguridad: tipos, clases y características',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Tipos de incidentes',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Clases de incidentes',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Características de los incidentes',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Incidentes de seguridad',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo:
              'Nivel de riesgo: concepto, clasificación, niveles y escalas',
            hash: 't_5_5',
          },
          {
            numero: '5.6',
            titulo: 'Escalas de medición',
            hash: 't_5_6',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Matriz de riesgos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Tipos de matrices de riesgo',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Funcionamiento de la matriz de riesgos',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Proceso de aplicación de la matriz de riesgos',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Casuística y aplicación práctica',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Matriz de riesgos aplicada a la seguridad privada',
            hash: 't_6_5',
          },
          {
            numero: '6.6',
            titulo:
              'Inspección de vulnerabilidades de las instalaciones y medios que deben protegerse',
            hash: 't_6_6',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Mitigación en la seguridad privada',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Características de la mitigación',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Clases de mitigación',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Aplicación en seguridad privada',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Plan de mitigación',
            hash: 't_7_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/622300_CF07_CFA.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Amenaza',
      significado:
        'Factor, situación o agente con capacidad de ocasionar daños a las personas, los bienes o las operaciones.',
    },
    {
      termino: 'Atención',
      significado:
        'Capacidad para concentrarse en estímulos relevantes y detectar oportunamente situaciones de interés.',
    },
    {
      termino: 'Incidente',
      significado:
        'Evento que altera el desarrollo normal de las actividades y requiere una respuesta oportuna.',
    },
    {
      termino: 'Infraestructura',
      significado:
        'Conjunto de instalaciones, equipos y recursos físicos que soportan una organización.',
    },
    {
      termino: 'Informe técnico',
      significado:
        'Documento que registra de forma objetiva hechos, observaciones y acciones relacionadas con el servicio de seguridad.',
    },
    {
      termino: 'Matriz de riesgos',
      significado:
        'Herramienta que permite identificar, valorar y priorizar riesgos para apoyar la toma de decisiones.',
    },
    {
      termino: 'Mitigación',
      significado:
        'Conjunto de acciones orientadas a reducir la probabilidad de ocurrencia o el impacto de un riesgo.',
    },
    {
      termino: 'Riesgo',
      significado:
        'Posibilidad de que una amenaza afecte un activo y genere consecuencias negativas.',
    },
    {
      termino: 'Vulnerabilidad',
      significado:
        'Debilidad o condición que facilita la materialización de una amenaza.',
    },
    {
      termino: 'Valoración del riesgo',
      significado:
        'Proceso mediante el cual se determina el nivel de riesgo considerando la probabilidad de ocurrencia y el impacto de sus consecuencias.',
    },
  ],
  referencias: [
    {
      referencia: 'ASIS. (2011). Manual POA investigación ASIS.',
      link: '',
    },
    {
      referencia:
        'Aven, T. (2016). Risk assessment and risk management: Review of recent advances on their foundation. European Journal of Operational Research.',
      link: '',
    },
    {
      referencia:
        'Congreso de Colombia. (1994). Decreto 356 de 1994. Estatuto de Vigilancia y Seguridad Privada.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=1341',
    },
    {
      referencia:
        'Cybersecurity and Infrastructure Security Agency. (s. f.). Critical infrastructure security and resilience.',
      link: 'https://www.cisa.gov/topics/critical-infrastructure-security-and-resilience',
    },
    {
      referencia: 'ICONTEC. (2004). NTC 5254. Gestión del riesgo.',
      link: 'https://syeconsultoress.wordpress.com/wp-content/uploads/2018/09/ntc-5254-gestion-del-riesgo.pdf',
    },
    {
      referencia:
        'ICONTEC. (2012). GTC 45. Guía para la identificación de los peligros y la valoración de los riesgos en seguridad y salud en el trabajo.',
      link: 'https://syeconsultoress.files.wordpress.com/2018/09/gtc-45-identificacion-de-peligros-y-valoracion-de-los-riesgos-2012.pdf',
    },
    {
      referencia:
        'National Institute of Standards and Technology. (2018). Framework for Improving Critical Infrastructure Cybersecurity.',
      link: 'https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.04162018.pdf',
    },
    {
      referencia:
        'Prosegur. (s. f.). Qué es una matriz de riesgo y cómo aplicarla.',
      link: 'https://www.prosegur.es/blog/seguridad/matriz-de-riesgo',
    },
    {
      referencia:
        'SafetyCulture. (2025). Guía para entender la matriz de riesgo 5x5.',
      link: 'https://safetyculture.com/es/temas/evaluacion-de-riesgos/matriz-de-riesgo',
    },
    {
      referencia:
        'Vector Solutions. (2023). Risk matrix calculations: Severity, probability and risk assessment.',
      link: 'https://www.vectorsolutions.com/resources/blogs/risk-matrix-calculations-severity-probability-risk-assessment/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06  <br> Responsable Ecosistema Virtual de Recursos Educativos Digitales  ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Eliana Audrey Manchola Pérez ',
          cargo: 'Experto temático ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila ',
        },
        {
          nombre: 'Paola Alexandra Moya ',
          cargo: 'Evaluadora instruccional ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan José Calderón Gutiérrez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Henry Alvarez Astudillo',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta ',
          cargo: 'Intérprete lenguaje de señas  ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura ',
          cargo: 'Intérprete lenguaje de señas ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania ',
          cargo: 'Animador y productor audiovisual ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada ',
          cargo: 'Animador y productor audiovisual ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez ',
          cargo: 'Locución ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos ',
          cargo: 'Locución ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
