export default {
  global: {
    componenteFormativo: 'Normatividad general',
    descripcionCurso:
      'En este componente formativo se abordarán los temas relacionados con la historia de la farmacia, la Política Farmacéutica Nacional y la normatividad del proceso de dispensación de productos farmacéuticos y los códigos de ética.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Historia de la farmacia: origen de los medicamentos y evolución del sector farmacéutico',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Política Farmacéutica Nacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Antecedentes de la Política Farmacéutica Nacional',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Marco conceptual y enfoque',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Diagnóstico de la situación farmacéutica nacional',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo:
              'Estrategias para contrarrestar las debilidades de la Política Farmacéutica Nacional',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Normatividad del proceso de dispensación de productos farmacéuticos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Proceso de dispensación de productos farmacéuticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Normatividad del proceso de dispensación',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Obligaciones y prohibiciones del dispensador',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo:
          'Proceso de distribución de medicamentos y dispositivos médicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Infraestructura necesaria para el proceso de distribución',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Proceso de reempaque de medicamentos',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo:
          'Funciones y responsabilidades del Tecnólogo en Regencia de Farmacia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Ética profesional del Tecnólogo en Regencia de Farmacia',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
  complementario: [
    {
      tema: '',
      referencia:
        'González Núñez, J. (2009). La farmacia en la historia, una aproximación desde la ciencia, el arte y la literatura. https://esferasalud.com/wp-content/uploads/2014/03/Historia-de-la-farmacia.pdf',
      tipo: 'PDF',
      descarga: 'downloads/Historia-de-la-farmacia.pdf',
    },
    {
      tema: '',
      referencia:
        'EVILAF Escuela para Farmacéuticos. (2017). Historia de la farmacia (parte 1) (Video). Youtube. https://www.youtube.com/watch?v=H6PLv9wZGTc ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=H6PLv9wZGTc ',
    },
    {
      tema: '',
      referencia:
        'CONPES 155. (2012). Política Farmacéutica Nacional. https://colaboracion.dnp.gov.co/CDT/Conpes/Social/155.pdf',
      tipo: 'PDF',
      descarga: 'downloads/155.pdf',
    },
    {
      tema: '',
      referencia:
        'Decreto 0780 de 2016. (2016). Por medio del cual se expide el Decreto Único Reglamentario del Sector Salud y Protección Social. https://www.minsalud.gov.co/Normatividad_Nuevo/Decreto%200780%20de%202016.pdf',
      tipo: 'PDF',
      descarga: '/downloads/Decreto_0780_2016.pdf',
    },
    {
      tema: '',
      referencia:
        'Resolución 1403 de 2007. (2007).  Por la cual se determina el Modelo de Gestión del Servicio Farmacéutico, se adopta el Manual de Condiciones Esenciales y Procedimientos y se dictan otras disposiciones. https://www.invima.gov.co/documents/20143/453029/Resoluci%C3%B3n+1403+de+2007.pdf/6b2e1ce1-bb34-e17f-03ef-34e35c126949',
      tipo: 'PDF',
      descarga: '/downloads/Resolución_1403_2007.pdf',
    },
    {
      tema: '',
      referencia:
        'Ley 485 de 1998. (1998). Por medio de la cual se reglamenta la profesión de Tecnólogo en Regencia de Farmacia y se dictan otras disposiciones. http://www.saludpereira.gov.co/medios/Ley_485_de_1998.pdf',
      tipo: 'PDF',
      descarga: '/downloads/Ley_485_de_1998.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Denominación Común Internacional',
      significado:
        'es el nombre recomendado por la Organización Mundial de la Salud (OMS) para cada medicamento. La finalidad de la Denominación Común Internacional, DCI, es conseguir una buena identificación de cada fármaco en el ámbito internacional.',
    },
    {
      termino: 'Distribución intrahospitalaria de medicamentos',
      significado:
        'es el proceso que comprende la prescripción de un medicamento a un paciente en una Institución Prestadora de Servicios de Salud, por parte del profesional legalmente autorizado, la dispensación por parte del servicio farmacéutico, la administración correcta en la dosis y vía prescrita y en el momento oportuno por el profesional de la salud legalmente autorizado para tal fin.',
    },
    {
      termino: 'Dispensación',
      significado:
        'es la entrega de uno o más medicamentos y dispositivos médicos a un paciente y la información sobre su uso adecuado realizada por el químico farmacéutico y el tecnólogo en regencia de farmacia.',
    },
    {
      termino: 'Dispositivo médico',
      significado:
        'se define como instrumento, aparato, equipo, software, equipo biomédico, utilizado solo o en combinación incluyendo sus componentes y programas informáticos, usado para diagnosticar.',
    },
    {
      termino: 'Medicamento',
      significado:
        'producto químico elaborado por un laboratorio farmacéutico a partir de uno o varios principios activos, con o sin sustancias auxiliares, que se somete a una serie de procesos para ser comercializado bajo una forma farmacéutica (tabletas, jarabe, pomada, etc.) Utilizado en la prevención, alivio, tratamiento, curación o rehabilitación de las enfermedades del hombre y de los animales.',
    },
    {
      termino: 'Medicamento esencial',
      significado:
        'es aquel que reúne las características de ser el más costo efectivo en el tratamiento de una enfermedad, en razón de su eficacia y seguridad farmacológica., por dar una respuesta más favorable a los problemas de mayor relevancia en el perfil de morbimortalidad de una comunidad y porque sus costos se ajustan a las condiciones de la economía del país.',
    },
    {
      termino: 'Medicamento genérico',
      significado:
        'se entiende por medicamento genérico aquel que utiliza la denominación común internacional para su prescripción y expendio.',
    },
    {
      termino: 'Perfil farmacoterapéutico',
      significado:
        'es la relación de los datos referentes a un paciente, su tratamiento farmacológico y su evolución, realizada en el servicio farmacéutico, con el objeto de hacer el seguimiento farmacológico que garantice el uso seguro y eficaz de los medicamentos y detecte los problemas que surjan en la farmacoterapia o el incumplimiento de la misma.',
    },
    {
      termino: 'Procedimiento',
      significado:
        'acto, método o manera de proceder en algunos procesos o en cierto curso de acción.',
    },
    {
      termino: 'Proceso',
      significado:
        'es el conjunto de actividades de trabajo interrelacionadas, que se caracterizan por requerir ciertos insumos y tareas particulares que implican valor agregado con miras a obtener ciertos resultados.',
    },
    {
      termino: 'Servicio farmacéutico',
      significado:
        'es el servicio de atención en salud responsable de las actividades, procedimientos e intervenciones de carácter técnico, científico y administrativo, relacionados con los medicamentos y los dispositivos médicos utilizados en la promoción de la salud y la prevención, diagnóstico, tratamiento y rehabilitación de la enfermedad, con el fin de contribuir en forma armónica e integral al mejoramiento de la calidad de vida individual y colectiva de la comunidad.',
    },
  ],
  referencias: [
    {
      referencia:
        'CONPES 155. Política Farmacéutica Nacional. Consejo Nacional de Política Económica y Social República de Colombia Departamento Nacional de Planeación. Bogotá D.C., 30 de agosto de 2012.',
      link: '',
    },
    {
      referencia:
        'Decreto 0780 de 2016. Por medio del cual se expide el Decreto Único Reglamentario del Sector Salud y Protección Social. 6 de mayo de 2016.',
      link: '',
    },
    {
      referencia:
        'González Nuñez, J (2009). La farmacia en la historia, una aproximación desde la ciencia, el arte y la literatura.',
      link:
        'https://esferasalud.com/wp-content/uploads/2014/03/Historia-de-la-farmacia.pdf',
    },
    {
      referencia:
        'Lafuente M., Navarro J., y Navarro J. (2005). Ilustración de moda. Sistema de Bibliotecas SENA',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000025549',
    },
    {
      referencia:
        'Ley 485 de 1998. Por medio de la cual se reglamenta la profesión de Tecnólogo en Regencia de Farmacia y se dictan otras disposiciones. Diario Oficial No. 43.461, de 29 de diciembre de 1998.',
    },
    {
      referencia:
        'Resolución 1403 de 2007. Por la cual se determina el Modelo de Gestión del Servicio Farmacéutico, se adopta el Manual de Condiciones Esenciales y Procedimientos y se dictan otras Disposiciones.14 de mayo de 2007.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Nombre',
          cargo: 'Actividad Didáctica',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
