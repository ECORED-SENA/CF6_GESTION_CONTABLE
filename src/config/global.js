export default {
  global: {
    componenteFormativo: 'Manejo de efectivo y equivalente al efectivo',
    descripcionCurso:
      'En este componente se desarrollan los conceptos efectivo y equivalente al efectivo, para ello se tendrán en cuenta los criterios de reconocimiento, medición, presentación y revelación, estos elementos son importantes en el ámbito empresarial, toda vez, que permiten dar cumplimiento a los compromisos adquiridos, teniendo en cuenta, la capacidad de liquidez y a su vez la fomentación de un adecuado manejo, que permita salvaguardar el activo de la organización, de ahí la importancia de tomar buenas decisiones, las cuales se verán reflejadas en una adecuada administración de la organización.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner.svg'),
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
        titulo: 'Efectivo y equivalentes al efectivo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Política contable',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Reconocimiento, medición, presentación y revelación',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Arqueo de caja',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Conciliación bancaria',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Ajuste por diferencia en cambio',
            hash: 't_1_5',
          },
        ],
      },
    ],
    subMenu: [
      /*{
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },*/
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
  referencias: [
    {
      referencia: 'Amador, A. (2011). Conciliación bancaría.',
      link:
        'http://files.sena-contable.webnode.es/200000504-9a9dd9b934/Conciliaci%C3%B2n%20Bancaria.pdf',
    },
    {
      referencia:
        'Angulo, U. (2018). Contabilidad financiera, correlacionado con NIIF. (2a. ed.) Ediciones de la U.',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=8047',
    },
    {
      referencia:
        'Consejo Técnico de la Contaduría Pública – CTCP- (2020a, 01 de noviembre). Decreto 2270 de 2019.',
      link:
        'http://www.ctcp.gov.co/noticias/2019/presidencia-de-la-republica-expidio-el-decreto-227',
    },
    {
      referencia:
        'Consejo Técnico de la Contaduría Pública – CTCP- (2020a, 01 de noviembre). Norma Internacional de Contabilidad 7: estado de flujos de efectivo. Normas Internacionales de Información Financiera.',
      link:
        'https://www.ctcp.gov.co/proyectos/contabilidad-e-informacion-financiera/documentos-organismos-internacionales/compilacion-marcos-tecnicos-de-informacion-financi/1534368973-9784',
    },
    {
      referencia:
        'Consejo Técnico de la Contaduría Pública – CTCP- (2020a, 01 de noviembre). Norma Internacional de Información Financiera 9: Instrumentos financieros.',
      link:
        'https://www.ctcp.gov.co/proyectos/contabilidad-e-informacion-financiera/documentos-discusion-publica/enmienda-a-la-niif-9-instrumentos/doc-ctcp-xl8w9-141',
    },
    {
      referencia:
        'Fierro Martínez, Ángel María (2011). Contabilidad General (4ª ed.). Ecoe Ediciones.',
      link:
        'http://www.digitaliapublishing.com.bdigital.sena.edu.co/visor/29895#',
    },
    {
      referencia:
        'Fierro Martínez, Ángel María (2015). Contabilidad de activos con enfoque NIIF para pymes (3ª ed.). Ecoe Ediciones.',
      link:
        'http://www.digitaliapublishing.com.bdigital.sena.edu.co/visor/39427',
    },
    {
      referencia:
        'Instituto Nacional de Contadores Públicos. (2020, 01 de noviembre).',
      link: 'https://www.incp.org.co/',
    },
    {
      referencia: 'Junta Central de Contadores. (2020, 01 de noviembre). ',
      link: 'http://www.jcc.gov.co/',
    },
    {
      referencia:
        'Moncayo, C. Definición de activos y pasivos en las normas internacionales de información financiera (NIIF). Instituto Nacional de Contadores Públicos de Colombia. ',
      link:
        'https://www.incp.org.co/definicion-de-activos-y-pasivos-en-las-normas-internacionales-de-informacion-financiera-niif/',
    },
    {
      referencia: 'Normas Internacionales de Contabilidad.',
      link:
        'https://normasinternacionalesdecontabilidad.es/normas-internacionales/',
    },
    {
      referencia:
        'Sinisterra V., Polanco L., y Henao H. (2011). Contabilidad: sistema de información para las organizaciones. Mc. Graw Hill.  ',
    },
    {
      referencia:
        'Varón, L. (2018). Efectivo y equivalentes al efectivo (Nic).',
      link: 'https://www.gerencie.com/efectivo-y-equivalentes-al-efectivo.html',
    },
  ],
  glosario: [
    {
      termino: 'Activo',
      significado:
        'Es un recurso controlado que viene de eventos pasados y, en un futuro, se espera obtener beneficios económicos.',
    },
    {
      termino: 'Banco',
      significado:
        'Es una cuenta contable que refleja los depósitos financieros, se puede presentar en moneda nacional o extranjera.',
    },
    {
      termino: 'Caja menor',
      significado:
        'Es una cuenta contable que maneja cuantías menores, dependiendo de las políticas empresariales. A este fondo se asigna un responsable para su administración y control.',
    },
    {
      termino: 'Conciliación bancaria',
      significado:
        'Es la confrontación y verificación de la información contable registrada en una cuenta de ahorros o corriente por la empresa, con la otorgada por la entidad financiera en el extracto bancario.',
    },
    {
      termino: 'Costo histórico',
      significado:
        'Hace referencia al valor que se registra en el momento de adquisición o compra de un bien o servicio.',
    },
    {
      termino: 'Efectivo',
      significado:
        'Hace referencia al dinero que se encuentra en caja general, caja menor y en las entidades financieras, que son de disponibilidad inmediata.',
    },
    {
      termino: 'Equivalentes de efectivo',
      significado:
        'Este concepto hace énfasis a las inversiones a corto plazo (menor a 90 días), que tienen gran liquidez y se encuentran sujetas a un riesgo insignificante.',
    },
    {
      termino: 'Extracto bancario',
      significado:
        'Es el documento que expide la entidad financiera, donde se refleja el saldo y los diferentes movimientos (entradas y salidas) de una cuenta de ahorros o corriente.',
    },
    {
      termino: 'Políticas contables',
      significado:
        'Son las bases, normas y procedimientos que debe de tener en cuenta una entidad para la medición, presentación y revelación de los elementos de los estados financieros.',
    },
    {
      termino: 'Valor razonable',
      significado: 'Hace referencia a las mediciones basadas en el mercado.',
    },
  ],
  complementario: [
    {
      texto:
        'Fierro Martínez, Ángel María (2011). Contabilidad General (4ª ed.). Ecoe Ediciones.',
      tipo: 'Capítulo 5, página 145.',
      link:
        'https://www.digitaliapublishing.com.bdigital.sena.edu.co/visor/29895#',
    },
    {
      texto:
        'Fierro Martínez, Ángel María (2015). Contabilidad de activos con enfoque NIIF para pymes (3ª ed.). Ecoe Ediciones.',
      tipo: 'Capítulo 3, página 47',
      link:
        'https://www.digitaliapublishing.com.bdigital.sena.edu.co/visor/39427',
    },
    {
      texto: 'Decreto 2270 de 2019',
      tipo: 'Decreto',
      link:
        'https://www.ctcp.gov.co/noticias/2019/presidencia-de-la-republica-expidio-el-decreto-227',
    },
    {
      texto: 'Elaboración conciliación bancaria',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=JguCZCEl5Jg',
    },
    {
      texto: 'Elaboración conciliación',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=Zq4z-rvXfYw&list=TLPQMTgwOTIwMjBLvU-jF1v5uA&index=2',
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
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Patricia Mantilla Galvis',
        cargo: 'Instructora',
        centro: 'Centro de Servicios Financieros Regional Distrito Capital',
      },
      {
        nombre: 'Maryuri Agudelo Franco',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología Regional Distrito Capital',
      },
      {
        nombre: 'Julieth Paola Vital López',
        cargo: 'Corrección de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Marcela González Gómez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nelson Iván Vera Briceño',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Víctor Raúl Cárdenas Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro Industrial del Diseño y la Manufactura Regional Tolima',
      },
      {
        nombre: 'John Andres Ayala Angarita',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jenny Paola Montillo Gélvez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
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
