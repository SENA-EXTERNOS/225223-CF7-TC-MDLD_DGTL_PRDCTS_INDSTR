export default {
  global: {
    componenteFormativo:
      'Tecnologías para manufactura aditiva y tipos de impresión 3D',
    descripcionCurso:
      'Esta formación desea orientar sobre la tecnología vinculada en la manufactura aditiva y a la impresión 3D sus alcances y características, historia, ventajas y conceptos básicos que componen la realización de una óptima impresión. Además, se conocerán diferentes tipos de materiales para conocer las configuraciones de las funciones básicas de esta impresora y de las aplicaciones de la manufactura aditiva.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal-1.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Introducción a la manufactura aditiva',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Primer acercamiento a la impresión 3D',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Historia y ventajas de la impresión 3D',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Conceptos básicos de la impresión 3D',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Proceso para la impresión de una pieza 3D',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Tipos de materiales y características',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Configuración de funciones básicas de una impresora 3D',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Aplicaciones de manufactura aditiva',
        desarrolloContenidos: true,
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
      tema: 'Configuración de funciones básicas de una impresora 3D',
      referencia:
        'Diseño e Impresión 3D,. (2021). Como CONFIGURAR cualquier IMPRESORA 3D / y controlarla manualmente. [video]. Youtube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=r7umA0p6fvw',
    },
    {
      tema: 'Historia y Ventajas de la impresión 3D',
      referencia:
        'Documental DW. (2022). La impresión 3D: una revolución. [video]. Youtube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=QqrAUAXC2pQ',
    },
    {
      tema: 'Tipos de materiales y características',
      referencia:
        'Dron3D 8A,. (2020). PLA - Impresión 3D - Tipos de Material - Episodio 01. [video]. Youtube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=4xHwCWh7yGQ',
    },
    {
      tema: 'Aplicaciones de manufactura aditiva ',
      referencia:
        'UOC - Universidad Oberta de Catalunya. (2020). Aplicaciones de la fabricación aditiva en la Industria 4.0 | UOC. [video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=fhWLWRejJto',
    },
    {
      tema: 'Conceptos básicos de la impresión 3D',
      referencia:
        'Xataka TV,. (2022). IMPRESORAS 3D: TODO lo que tienes que saber antes de comprar una. [video]. Youtube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=l8_Gz8vtwZQ',
    },
  ],
  glosario: [
    {
      termino: 'Alumide',
      significado:
        'material de polvo resultante de la mezcla de aluminio gris y poliamida (tipo de polímero como el nylon), este tipo de polvo permite crear modelos impresos en 3D más resistentes. Su aspecto es arenoso y granulado; por lo anterior este material es confiable para prototipos y modelos industriales.',
    },
    {
      termino: 'Aluminio',
      significado:
        'este metal es uno de los que se utiliza en la impresión 3D por su buena relación en su resistencia y peso; teniendo además conductividad eléctrica y térmica, baja resistencia y densidad a la intemperie.',
    },
    {
      termino: 'Calibración',
      significado:
        'esta acción es importante antes de realizar la impresión 3D pues de ella dependen mucho tener una buena impresión para así hacer piezas con mayor precisión.',
    },
    {
      termino: 'Código G',
      significado:
        'es el lenguaje de programación de código numérico más utilizado, sobre todo en la fabricación asistida por ordenador para controlar máquinas herramientas automatizadas como las impresoras 3D y los CNC (controles numéricos por ordenador). En pocas palabras el código G es el lenguaje de la máquina y es lo que se utiliza para comunicarse con ella.',
    },
    {
      termino: 'Extrusora',
      significado:
        'hace parte de la impresora 3D y es la encargada de aplicar presión al material o filamento para forzar su paso por medio de una boquilla para realizar la respectiva impresión.',
    },
    {
      termino: 'Filamentos',
      significado:
        'es el material que se utiliza en la impresión 3D para realizar la pieza; la mayoría son de materia prima como el plástico, metal y polvo.',
    },
    {
      termino: 'Impresión 3D',
      significado:
        'se trata de un proceso de adición progresiva y ordenada de material a la pieza que se está consolidación o imprimiendo por medio de materiales o filamentos que se funden.',
    },
    {
      termino: 'Manufactura aditiva',
      significado:
        'es un tipo de fabricación donde un objeto tridimensional que parte de un modelo virtual se usa un proceso aditivo, donde el material se va pegando (consolidando) en capas de manera sucesiva, hasta así tener la pieza requerida.',
    },
    {
      termino: 'Metales',
      significado:
        'se utiliza esta materia prima para los filamentos de manera principal en aplicaciones que requieren mucha resistencia en el objeto a realizar; en este tipo de impresión se optimiza la topología (propiedades de los cuerpos geométricos) que es vital para así maximizar el rendimiento de esta la pieza. ',
    },
    {
      termino: 'Motores paso a paso',
      significado:
        'son motores pequeños de corriente continua que están contenidos como unas de las partes físicas de la impresión 3D; los cuales hacen el movimiento de la impresora y además hacen una correcta dispensación del material.',
    },
    {
      termino: 'PLA',
      significado:
        'filamento de plástico que se utiliza en la impresión 3D; es el más común en los materiales de plástico y contiene alta rigidez, buen acabado y es asequible.',
    },
    {
      termino: 'STL',
      significado:
        'es el formato de archivo de impresión 3D más común, que significa Stereo Lithography y recibe su nombre del primer proceso de impresión 3D.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ávila, M. (2020). ¿Qué tipos de impresión 3D existen? Cidet.',
      link:
        'https://blog.cidet.org.co/qu%C3%A9-tipos-de-impresi%C3%B3n-3d-existen',
    },
    {
      referencia:
        'Berry, P. (2021). Conceptos básicos, ventajas y ejemplos de la impresión 3D. Churchbootcamp.',
      link: 'https://es.churchbootcamp.com/3d-printing-123',
    },
    {
      referencia:
        'Castillo, C. García, A. Castruita, L. & Saucedo, F. (2022). Manufactura aditiva: métodos y aplicaciones, Cienciacierta, p. 20-32. ',
      link:
        'http://www.cienciacierta.uadec.mx/articulos/CC71/manufacturaaditiva.pdf',
    },
    {
      referencia:
        'Matus, D. (2018). La impresión en 3D es más vieja de lo que crees: te contamos su historia. Digitaltrends.',
      link:
        'https://es.digitaltrends.com/fotografia/historia-de-la-impresion-en-3d/',
    },
    {
      referencia:
        'Mondragón, E. (2021). Más ventajas y desventajas de la impresión 3D. BBVA.',
      link:
        'https://www.bbva.ch/noticia/mas-ventajas-y-desventajas-de-la-impresion-3d/',
    },
    {
      referencia:
        'Roca, J. (2021). Conoces las impresoras 3D pero, ¿sabes cómo funcionan en realidad? Hardzone. ',
      link: 'https://hardzone.es/reportajes/que-es/impresoras-3d/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
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
