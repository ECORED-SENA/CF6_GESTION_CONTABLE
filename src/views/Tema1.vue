<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Efectivo y equivalentes al efectivo

    .row.mb-5
      .col-lg-8
        p.mb-4 Las empresas en el desarrollo normal de sus operaciones deben aplicar criterios y lineamientos para el adecuado manejo del efectivo y sus equivalentes. El objetivo es tener la habilidad para tomar decisiones que aumenten la capacidad de generar liquidez y, de esta manera, atender las necesidades de la organización o, en su defecto, realizar inversiones que generen rentabilidad. El efectivo y equivalentes al efectivo pertenecen al activo corriente del estado de la situación financiera.
        p.mb-2 Teniendo en cuenta lo anterior, es importante conocer su clasificación; por ende, se analizarán los conceptos necesarios que permitan continuar con los lineamientos para el diseño de políticas contables que le conciernen:
      .col-lg-4 
        figure.mb-2
          img(src="@/assets/curso/tema1/img1.svg", alt="Efectivo y quivalentes al efectivo", style="width:298px;").mx-auto

    .h3.mb-4 Efectivo
    p.mb-4 Efectivo: hace referencia al dinero que se encuentra en caja general, caja menor y en las entidades financieras, que son de disponibilidad inmediata. A continuación, se presentan las definiciones de cada una de estas:
    figure.mb-5
        img(src="@/assets/curso/tema1/img2.svg", alt="Efectivo", style="width:460px;").mx-auto


    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img3.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .p-4
              h3.text-center Caja general
              p.text-center Se refiere al dinero en efectivo con un valor monetario significativo, que cubre el pago de gastos operacionales, compra de inventarios, etc., registrando la transacción como una disminución del efectivo (crédito). De igual forma, se perciben ingresos ordinarios por la actividad que desarrolla la empresa, lo que constituye un aumento en el efectivo (débito).

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img4.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .p-4
              h3.text-center Caja menor
              p.text-center Las empresas constituyen el fondo de caja menor, de acuerdo con la política establecida y su cuantía depende del tipo de empresa. Es un fondo fijo que se contabiliza en el momento de su creación, aumento, disminución o eliminación. Su objetivo es manejar gastos de menor cuantía, por ende, siempre se maneja en efectivo para cubrir gastos menos representativos.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img5.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .p-4
              h3.text-center Bancos
              p.text-center Están constituidos por los depósitos en las cuentas de ahorros y corrientes, las cuales son administradas por las entidades financieras. Se presentan en moneda nacional o extranjera.

    .h3.mb-4 Equivalentes al efectivo
    p.mb-4 Este concepto hace énfasis a las inversiones a corto plazo (menor a 90 días), que tienen gran liquidez y se encuentran sujetas a un riesgo insignificante. Entre los equivalentes al efectivo encontramos las siguientes inversiones: Certificado de depósito a término (CDT), bonos y fiducia.
    p.mb-5 De acuerdo con la Norma Internacional de Contabilidad (NIC) 7 “Estados de flujos de efectivo”, expresa lo siguiente sobre los equivalentes al efectivo:

    .row.justify-content-center.mb-5
        .col-lg-5.align-self-center
          .row
            .col-lg-12.align-self-center
              .tarjeta-avatar-b
                img(src='@/assets/curso/tema1/num1.svg',alt='AvatarNum',style='align-self: flex-start; margin-top: 25px')
                .tarjeta.transparent1
                  .p-4
                    p.mb-0 Un equivalente al efectivo no se tiene para propósitos de inversión, sino que su propósito es para cumplir los compromisos de pago a corto plazo.
            .col-lg-12.align-self-center
              .tarjeta-avatar-b
                img(src='@/assets/curso/tema1/num2.svg',alt='AvatarNum',style='align-self: flex-start; margin-top: 25px')
                .tarjeta.transparent1
                  .p-4
                    p.mb-0 Debe poder ser fácilmente convertible a una cantidad determinada de efectivo.
            .col-lg-12.align-self-center
              .tarjeta-avatar-b
                img(src='@/assets/curso/tema1/num3.svg',alt='AvatarNum',style='align-self: flex-start; margin-top: 25px')
                .tarjeta.transparent1
                  .p-4
                    p.mb-0 Debe estar sujeta a un riesgo insignificante de cambios en su valor.
            .col-lg-12.align-self-center
              .tarjeta-avatar-b
                img(src='@/assets/curso/tema1/num4.svg',alt='AvatarNum',style='align-self: flex-start; margin-top: 25px')
                .tarjeta.transparent1
                  .p-4
                    p.mb-0 En el caso de inversiones, deben tener un vencimiento próximo de, al menos, tres meses o menos desde la fecha de adquisición.
            .col-lg-12.align-self-center
              .tarjeta-avatar-b
                img(src='@/assets/curso/tema1/num5.svg',alt='AvatarNum',style='align-self: flex-start; margin-top: 25px')
                .tarjeta.transparent2
                  .p-4
                    p.mb-0 Los sobregiros bancarios, forman parte de la gestión del efectivo de la entidad (Varón, 2018, párr.5).
        .col-auto.align-self-center.mb-4
          figure
            img(src='@/assets/curso/tema1/img6.svg',alt='Equivalentes al efectivo',style='width: 540px;').mx-auto
    
    .h3.mb-5 Clasificación inversiones

    .row.justify-content-center.mb-5
      .col-lg-11.tarjeta--palida
        .row.justify-content-center.py-5
          .col-lg-7
            .h3.mb-4 De acuerdo con la intención de realización
            ul.lista-ul
              li 
                i.fas.fa-check
                p #[strong Inversiones Temporales:] son inversiones que se hacen efectivas en un periodo inferior a un año.
              li 
                i.fas.fa-check
                p #[strong Inversiones Permanentes:] su objetivo es mantenerlas hasta su vencimiento; es decir, no se espera convertirlas en efectivo antes un año.
          .col-lg-4.align-self-center.mb-2
            figure
              img(src='@/assets/curso/tema1/img7.svg',alt='De acuerdo con la intención de realización ',style='width: 365px;').mx-auto 
    .row.justify-content-center.mb-5
      .col-lg-11.tarjeta--palida
        .row.justify-content-center.py-5
          .col-lg-7
            .h3.mb-4 De acuerdo con los rendimientos que generen
            ul.lista-ul
              li 
                i.fas.fa-check
                p #[strong Inversiones de renta fija:] son inversiones que su rendimiento no cambia durante su vigencia, es decir, siempre produce los mismos rendimientos.
              li 
                i.fas.fa-check
                p #[strong Inversiones de renta variable:] son inversiones cuyos rendimientos dependen del mercado, es decir, que se encuentra asociado al comportamiento de la oferta y la demanda.
          .col-lg-4.align-self-center.mb-2
            figure
              img(src='@/assets/curso/tema1/img8.svg',alt='De acuerdo con los rendimientos que generen ',style='width: 365px;').mx-auto 
    .row.justify-content-center.mb-5
      .col-lg-11.tarjeta--palida
        .row.justify-content-center.py-5
          .col-lg-7
            .h3.mb-4 De acuerdo con el control que ejerzan sobre el ente emisor
            ul.lista-ul
              li 
                i.fas.fa-check
                p #[strong Inversiones de controlantes:] son aquellas que se realizan a fin de ejercer un control sobre el ente emisor.
              li 
                i.fas.fa-check
                p #[strong Inversiones no controlantes:] no existe control de un ente, es decir, se poseen menos del 50 % de participación.
          .col-lg-4.align-self-center.mb-2
            figure
              img(src='@/assets/curso/tema1/img9.svg',alt='De acuerdo con el control que ejerzan sobre el ente emisor ',style='width: 365px;').mx-auto 
    
    
    
    
    
    separador
    #t_1_1.titulo-segundo
      .h2 1.1 Política contable.

    .row.justify-content-center.mb-4
      .col-lg-7.align-self-center
        p.mb-4 Las políticas contables son las bases, normas y procedimientos que debe tener en cuenta una entidad para la medición, presentación y revelación de los elementos de los Estados Financieros.
        p.mb-4 Así mismo, es importante definir las directrices para dar cumplimiento a dichos criterios, los cuales varían de acuerdo con el tipo de negocio y al entorno en el cual se desenvuelve.
        p.mb-4 En unidades anteriores, se abordó la temática de políticas contables, donde se hizo hincapié en el marco conceptual y el direccionamiento estratégico de la organización, con el fin de conocer la entidad y, de esta manera, continuar con las políticas de acuerdo con los elementos de los estados financieros.
      .col-lg-5.align-self-center
        figure
          img(src='@/assets/curso/tema1/tema1-1/img1.svg',alt='politica contable',style='width: 462px;').mx-auto 
    
    p.mb-5 Por lo anterior, para el diseño de políticas contables, del efectivo y sus equivalentes, es importante tener en cuenta, que estos hacen parte del activo; por ende, debe incluir como mínimo:

    .row.justify-content-center
      .col-lg-9
        .tarjeta-avatar-b.mb-3
          img(src='@/assets/curso/tema1/tema1-1/icon1.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              p.mb-4 #[strong Reconocimiento de los activos:] debe dar cumplimiento al concepto de activo, de acuerdo con los elementos que lo componen para el proceso de incorporación en el Estado de situación financiera.
              p.mb-4  Recordemos que un activo es “un recurso controlado por la entidad como resultado de sucesos pasados, del que la entidad espera obtener, en el futuro, beneficios económicos” (Moncayo, 2016, párr.1).
              p.mb-4 Los activos se reconocen en el momento que se presenta la transacción en efectivo o es transferido a una entidad financiera.
      .col-lg-9
        .tarjeta-avatar-b.mb-3
          img(src='@/assets/curso/tema1/tema1-1/icon2.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              p.mb-2 #[strong Medición:] es el proceso mediante el cual se reconocen y registran contablemente los hechos económicos. Aquí se establece si la entidad, en el reconocimiento, medirá los activos a costo histórico o valor razonable teniendo en cuenta la moneda funcional y el hecho económico que se esté presentando, además de analizar las normas internacionales aplicables para seleccionar la base de medición más idónea para la empresa.
      .col-lg-9
        .tarjeta-avatar-b.mb-3
          img(src='@/assets/curso/tema1/tema1-1/icon3.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              p.mb-2 #[strong Presentación:] se define como el proceso mediante el cual se incorpora la información financiera y se presenta en los estados financieros para ser analizados por los usuarios de la información contable.
      .col-lg-9
        .tarjeta-avatar-b.mb-3
          img(src='@/assets/curso/tema1/tema1-1/icon4.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              p.mb-2 #[strong Revelación:] este proceso se realiza a través de la presentación de los estados financieros, teniendo en cuenta las notas que reflejan, de forma detallada y desagregada, la información contable y financiera, para la adecuada toma de decisiones por parte de la administración.
      .col-lg-9 
        .tarjeta-avatar-b.mb-3
          img(src='@/assets/curso/tema1/tema1-1/icon5.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              p.mb-2 #[strong Definir el objetivo de las políticas:] se debe establecer en verbo infinitivo, el fin que persigue el diseño de las políticas contables, que es dar aplicabilidad a la Norma Internacional de Información Financiera.
      .col-lg-9
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/tema1/tema1-1/icon6.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              p.mb-2 #[strong Relacionar el alcance:] expresar los elementos o partidas monetarias que se aplicarán a dicha política, en este sentido, dará aplicación al efectivo y sus equivalentes.

    p.mb-4 De igual manera, se deben definir los criterios de reconocimiento, medición y presentación del efectivo y equivalentes.
    p.mb-5 Recordemos que, los activos (efectivo y equivalentes al efectivo), son considerados instrumentos financieros bajo la norma internacional; por ello, es indispensable analizar las siguientes normas, con el fin de tener en cuenta las bases de medición, como son costo histórico, valor razonable y costo amortizado, de acuerdo con la clasificación del instrumento:
    
    
    LineaTiempoD.color-primario.mb-5
        .row.ps-4(numero="1" titulo="Norma Internacional de contabilidad (NIC) 32 - Instrumentos financieros: presentación, que expresa lo siguiente")
          .col-md-7.mt-3.mb-4.mb-md-0
            p.mb-4  #[strong Objetivo:] el objetivo de esta norma es establecer principios para presentar los instrumentos financieros como pasivos o patrimonio y para compensar activos y pasivos financieros. 
            p.mb-4  Aplica a la clasificación de los instrumentos financieros (desde la perspectiva del emisor) en activos y pasivos financieros, e instrumentos de patrimonio; en la clasificación de los intereses, dividendos, pérdidas y ganancias relacionadas con ellos, y en las circunstancias que obligan a la compensación de activos y pasivos financieros. 
            p.mb-4  Los principios de esta norma complementan los principios de reconocimiento y medición de los activos y pasivos financieros de la NIIF 9- Instrumentos financieros y a la información a revelar sobre ellos en la NIIF 7- Instrumentos financieros: información a revelar. Consejo Técnico de la contaduría pública (CTCP, 2019a, p.229).
  
          .col-md-5.mt-3.p-0
            figure(style="text-align: -webkit-right;")
              img(src='@/assets/curso/tema1/tema1-1/img2.svg', alt='Texto que describa la imagen', style="width:415px;")
              

        .row.ps-4(numero="2" titulo="Norma Internacional de Información Financiera (NIIF) 7- Instrumentos financieros: información a revelar")
          .col-md-7.mt-3.mb-4.mb-md-0
            .row
              .col-lg-12.align-self-center
                .tarjeta-avatar-b
                  img(src='@/assets/curso/tema1/num1.svg',alt='AvatarNum',style='align-self: flex-start; margin-top: 25px')
                  .tarjeta
                    .p-4
                      p.mb-4 El objetivo de esta NIIF es requerir a las entidades que, en sus estados financieros, revelen información que permita a los usuarios evaluar:
                      ol.lista-ol--cuadro
                        li 
                          .lista-ol--cuadro__vineta
                            span a
                          | la relevancia de los instrumentos financieros en la situación financiera y en el rendimiento de la entidad; y 
                        li 
                          .lista-ol--cuadro__vineta
                            span b
                          | la naturaleza y alcance de los riesgos procedentes de los instrumentos financieros a los que la entidad se haya expuesto durante el periodo y lo esté al final del periodo sobre el que se informa; así como la forma de gestionar dichos riesgos.
              .col-lg-12.align-self-center
                .tarjeta-avatar-b
                  img(src='@/assets/curso/tema1/num2.svg',alt='AvatarNum',style='align-self: flex-start; margin-top: 25px')
                  .tarjeta.transparent1
                    .p-4
                      p.mb-0 Los principios contenidos en esta NIIF complementan a los de reconocimiento, medición y presentación de los activos financieros y los financieros de la NIC 32 Instrumentos Financieros: Presentación y de la NIIF 9 Instrumentos Financieros. (CTCP, 2019a, p.229).
          
          .col-md-5.mt-3.align-self-center
            figure
              img(src='@/assets/curso/tema1/tema1-1/img3.svg', alt='Texto que describa la imagen', style="width:388px;").mx-auto

        .row.ps-4(numero="3" titulo="Norma Internacional de Información Financiera (NIIF) 9- Instrumentos financieros")
          .col-md-7.mt-3.mb-4.mb-md-0
            p #[strong Objetivo:] el objetivo de esta Norma es establecer los principios para la información financiera, sobre activos y pasivos financieros, de tal manera que se presente información útil y relevante para los usuarios de los estados financieros, para la evaluación de los importes, calendario e incertidumbre de los flujos de efectivo futuros de la entidad (CTCP, 2019b, p.340).
          .col-md-5.mt-3
            figure
              img(src='@/assets/curso/tema1/tema1-1/img4.svg', alt='Texto que describa la imagen', style="width:388px;").mx-auto
    
    .row.justify-content-center
      .col-lg-10
        .tarjeta.custom_bg.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/tema1/tema1-1/img5.svg" alt="imagen que acompaña enlace", style="width:62px;")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0              
                  p.mb-0.text-white Para ampliar el alcance y lineamientos aplicables, es importante revisar la norma internacional vigente; para ello, explore los siguientes enlaces:
                .col-sm-auto
                  a.boton.boton--c(href="http://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Codigo/30019323" target="_blank")
                    span.px-4 Ver
                    i.fas.fa-link
    
    
    
    separador
    #t_1_2.titulo-segundo
      .h2 1.2 Reconocimiento, medición, presentación y revelación.

    p.mb-5 Una vez se ha realizado el proceso de reconocimiento de la definición de activos, es importante aplicar los criterios al efectivo y sus equivalentes, teniendo en cuenta lo siguiente:

    TabsA.color-secundario.mb-5
  
      .tarjeta.color-primario.p-4(titulo="Reconocimiento de efectivo")
        .row
          .col-xl-8.px-5.pt-4
            h4.mb-2 Reconocimiento de efectivo y equivalente de efectivo:
            p.mb-4 la entidad define las partidas que hacen parte del efectivo y sus equivalentes, siendo muy detallada su descripción. Cabe resaltar, que el efectivo hace parte el dinero que se encuentra en caja y las entidades financieras, sea de moneda nacional o extranjera.
            p.mb-0 Dentro de los equivalentes al efectivo, es fundamental definir qué inversiones hacen parte de este, conforme al tiempo de duración, disponibilidad inmediata y el riesgo de la negociación.
          .col-xl-4.mb-2.align-self-center
            figure
              img(src='@/assets/curso/tema1/tema1-2/img1.svg', alt='Reconocimiento de efectivo y equivalente de efectivo', style="width:368px;").mx-auto
      .tarjeta.color-primario.p-4(titulo="Medición")
        .row 
          .col-xl-8.px-5.pt-4
            h4.mb-2 Medición:
            p.mb-4 la entidad debe registrar la base de medición inicial y posterior del efectivo y equivalentes al efectivo, teniendo en cuenta la normatividad legal vigente. Cabe resaltar, que debe especificarse el manejo, control características y directrices de caja general, caja menor y bancos, haciendo referencia al efectivo.
            p.mb-2 De igual forma, se establecen los elementos que pertenecen a equivalente al efectivo, directrices, clasificación y manejo. Recuerda que debe definirse lo que corresponde a equivalentes al efectivo y a inversiones, con el fin de dar aplicabilidad a la norma internacional, de acuerdo con las bases establecidas.
          .col-xl-4.mb-2.align-self-center
            figure
              img(src='@/assets/curso/tema1/tema1-2/img2.svg', alt='Medición', style="width:260px;").mx-auto
      .tarjeta.color-primario.p-4(titulo="Presentación")
        .row
          .col-xl-6.px-5.py-4
            h4.mb-2 Presentación:
            p.mb-4 e realiza a través de los estados financieros, teniendo en cuenta las políticas contables y normativa vigente.
          .col-xl-6.mb-2
            figure
              img(src='@/assets/curso/tema1/tema1-2/img3.svg', alt='Presentación', style="width:368px;").mx-auto
      .tarjeta.color-primario.p-4(titulo="Revelación")
        
        .row
          
          .col-xl-6.px-5.py-4
            h4.mb-2 Revelación:
            p.mb-4 la revelación se presenta a través de las notas a los estados financieros, con el fin de proporcionar información clara, comprensible y oportuna para la toma de decisiones.
          .col-xl-6.mb-2
            figure
              img(src='@/assets/curso/tema1/tema1-2/img4.svg', alt='Revelación', style="width:216px;").mx-auto
              



    separador
    #t_1_3.titulo-segundo
      .h2 1.3 Arqueo de caja.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-4 Por lo anterior, es fundamental realizar arqueos de caja, lo cual consiste en analizar y comprobar que la información contable coincida con el efectivo que se encuentra de forma física (billetes, monedas, cheques).  Se debe verificar que no presenten faltantes o sobrantes de caja, de llegar a suceder, se realiza el respectivo ajuste mediante una nota contable. El faltante resulta cuando se realiza el arqueo y se observa que el valor en la caja es menor que el saldo que se refleja en los libros.
    p.mb-5 La entidad elabora el formato para registrar la información obtenida en el arqueo de caja. A continuación, observa el formato guía para su análisis:

    .row.justify-content-center.mb-5
      .col-lg-7
        .row.justify-content-center
          .col-lg-10.p-4(style="background-color: #6595BF;").mb-0
            h4.text-center.text-white.mb-0 Arqueo Caja Menor

          .col-lg-10.p-4(style="background-color: #fcf9f8;")
            h5.mb-2(style="color:#f00") Fecha de elaboración:
            .tabla-a.color-acento-contenido.mb-5
              table
                thead(style="border-color: snow;")
                  tr
                    th.text-start(style="width:50%;background-color:#f6f6f6; border-left: none; font-weight:normal;") Logo de la <br>empresa
                    td(colspan='2',style="background-color: #fcf9f8; border: none;")
                    
                tbody
                  tr(style="background-color: #aed3f273;")
                    th.text-start(style="font-weight:normal;") Nombre de la empresa: 
                    td(colspan='2')
                  tr(style="background-color: #e8e8e885;")
                    th.text-start(style="font-weight:normal;") Nit de la empresa: 
                    td.text-center(colspan='2') Teléfono: 
                  tr(style="background-color: #aed3f273;")
                    th.text-start(style="font-weight:normal;") Dirección de la empresa:
                    td(colspan='2')
                  tr
                    th(colspan='3', style="background-color: #cac6c6; border-right: snow;") ACTA DE ARQUEO CAJA
                  tr(style="background-color: #aed3f273;")
                    th.text-start(style="font-weight:normal;") Nombre responsable: 
                    td.text-center(colspan='2') XXXXXXX 
                  tr(style="background-color: #e8e8e885;")
                    th.text-start(style="font-weight:normal;") Fehca y hora de realización:
                    td.text-center(colspan='2')  DIA/MES/AÑO
                  tr(style="background-color: #aed3f273;")
                    th.text-start(style="font-weight:normal;") Saldo segun libro de caja:
                    td.text-center(colspan='2') 0.000.000.00
                  tr
                    th(colspan='3', style="border:none;")
                    
                  tr(style="background-color: #aed3f273;")
                    th.text-start(style="font-weight:normal;") Efectivo
                    td.text-center(colspan='2') $
                    
                  tr(style="background-color: #e8e8e885;")
                    th.text-start(style="font-weight:normal;") 
                    th.text-center(colspan='1', style="font-weight:normal;")  Unidades
                    td.text-center(colspan='1')  Total
                  
                  tr
                    th(colspan='3', style="border:none;")
                  
                  tr(style="background-color: #aed3f273;")
                    th.text-start(style="font-weight:normal;") Billetes de 50.000 
                    th.text-center(colspan='1', style="font-weight:normal;")  
                    td.text-end(colspan='1')  0,00
                  tr(style="background-color: #e8e8e885;")
                    th.text-start(style="font-weight:normal;") Billetes de 20.000 
                    th.text-center(colspan='1', style="font-weight:normal;")  
                    td.text-end(colspan='1')  0,00
                  tr(style="background-color: #aed3f273;")
                    th.text-start(style="font-weight:normal;") Billetes de 10.000 
                    th.text-center(colspan='1', style="font-weight:normal;")  
                    td.text-end(colspan='1')  0,00
                  tr(style="background-color: #e8e8e885;")
                    th.text-start(style="font-weight:normal;") Billetes de 5.000 
                    th.text-center(colspan='1', style="font-weight:normal;")  
                    td.text-end(colspan='1')  0,00
                  tr(style="background-color: #aed3f273;")
                    th.text-start(style="font-weight:normal;") Billetes de 2.000 
                    th.text-center(colspan='1', style="font-weight:normal;")  
                    td.text-end(colspan='1')  0,00
                  tr(style="background-color: #e8e8e885;")
                    th.text-start(style="font-weight:normal;") Billetes de 1.000 
                    th.text-center(colspan='1', style="font-weight:normal;")  
                    td.text-end(colspan='1')  0,00
                  tr(style="background-color: #aed3f273;")
                    th.text-start(style="font-weight:normal;") Monedas de 1.000 
                    th.text-center(colspan='1', style="font-weight:normal;")  
                    td.text-end(colspan='1')  0,00
                  tr(style="background-color: #e8e8e885;")
                    th.text-start(style="font-weight:normal;") Monedas de 500 
                    th.text-center(colspan='1', style="font-weight:normal;")  
                    td.text-end(colspan='1')  0,00
                  tr(style="background-color: #aed3f273;")
                    th.text-start(style="font-weight:normal;") Monedas de 200 
                    th.text-center(colspan='1', style="font-weight:normal;")  
                    td.text-end(colspan='1')  0,00
                  tr(style="background-color: #e8e8e885;")
                    th.text-start(style="font-weight:normal;") Monedas de 100 
                    th.text-center(colspan='1', style="font-weight:normal;")  
                    td.text-end(colspan='1')  0,00
                  tr(style="background-color: #aed3f273;")
                    th.text-start(style="font-weight:normal;") Monedas de 50 
                    th.text-center(colspan='1', style="font-weight:normal;")  
                    td.text-end(colspan='1')  0,00

                  tr
                    th(colspan='3', style="border:none;")
                  
                  tr(style="background-color: #aed3f273;")
                    th.text-start(style="font-weight:normal;") Otros fondos
                    td.text-end(colspan='2')  0,00
                  tr(style="background-color: #e8e8e885;")
                    th.text-start(style="font-weight:normal;") Vales
                    td.text-end(colspan='2')  0,00
                  tr(style="background-color: #aed3f273;")
                    th.text-start(style="font-weight:normal;") Facturas
                    td.text-end(colspan='2')  0,00
                  tr(style="background-color: #e8e8e885;")
                    th.text-start(style="font-weight:normal;") Anticipos
                    td.text-end(colspan='2')  0,00
                  tr(style="background-color: #aed3f273;")
                    th.text-start(style="font-weight:normal;") Otros fondos
                    td.text-end(colspan='2')  0,00
                  tr(style="background-color: #EACCB2;")
                    th.text-start(style="") TOTAL SALDO CAJA
                    td.text-end(colspan='2')  0
            p(style="margin-bottom: 60px;") #[strong CERTIFICO: ] que el efectivo y justificantes de caja mencionados, fueron verificados en mi presencia y devueltos. No existiendo otros fondos, valores o documentos en poder que no hayan sido mostrados en el arqueo.
            p(style="margin-bottom: 80px;") #[strong Observaciones:]
            .row(style="justify-content:space-around;")
              
              .col-lg-5.mb-4
                hr.text-center.mx-auto(style= "width:90%; background-color:#000")
                p.text-center.mt-2 #[strong Firma supervisor]
              .col-lg-5.mb-4
                hr.text-center.mx-auto(style= "width:90%")
                p.text-center.mt-2 #[strong Firma responsable]

          .col-lg-10.p-0(style="").mb-0
            figcaption Fuente: http://media.actualicese.com/Arqueo-caja-menor.xls
    
    
    p.mb-4 #[strong Ejemplo:]
    p.mb-4 La empresa Gestión contable SAS tiene como política contable la constitución del fondo de caja menor por valor de $500.000; por lo tanto, se debe registrar la transacción.  La encargada del fondo de caja menor es Ligia Carvajal.
    p.mb-4 La empresa presenta la siguiente información para realizar el reconocimiento y medición de las transacciones, de igual forma, se solicita realizar el reembolso y arqueo de caja menor.
    

    .row.justify-content-center.mb-0
      .col-lg-6.p-4

            .tabla-a.color-acento-contenido.mb-0
              table
                thead(style="border-color: snow;")
                  tr(style="background-color: #6595BF;")
                    th.text-white(colspan='2',style="") Concepto
                    th.text-white(style="border:none;") Valor
                    
                tbody
                  tr(style="background-color: #aed3f273;")
                    th.text-start(colspan='2', style="font-weight:normal;") Elementos de aseo
                    td.text-end(style="") $120.000
                  
                  tr(style="background-color: #f2e9e496;")
                    th.text-start(colspan='2', style="font-weight:normal;") Papelería
                    td.text-end(style="") $80.000
                  tr(style="background-color: #aed3f273;")
                    th.text-start(colspan='2', style="font-weight:normal;") Transporte
                    td.text-end(style="") $150.000
                  
                  tr(style="background-color: #f2e9e496;")
                    th.text-start(colspan='2', style="font-weight:normal;") Almuerzos 
                    td.text-end(style="") $80.000
                  tr(style="background-color: #aed3f273;")
                    th.text-start(colspan='2', style="font-weight:normal;") Gasolina
                    td.text-end(style="") $50.000
                  
                  tr(style="background-color: #f2e9e496;")
                    th.text-start(colspan='2', style="") TOTAL
                    th.text-end(style="border:none;") $480.000
                  
  .container.tarjeta.tarjeta--especial.p-4.p-md-5
    .row.justify-content-center.mb-4
      .col-lg-6
        .row.justify-content-center
          .col-lg-12
            .tarjeta-avatar-b.mb-2
              img(src='@/assets/curso/tema1/tema1-3/icon1.svg' alt='AvatarTop')
              .tarjeta.transparent1
                .p-4
                  h4.mb-4 Constitución fondo de caja menor

          .col-lg-11.p-0
            .tabla-a.color-acento-contenido.mb-2
              table
                thead(style="border-color: snow;")
                  tr(style="background-color: #6595BF;")
                    th.text-white(style="") Cuenta
                    th.text-white(style="") Debe
                    th.text-white(style="border:none;") Haber
                    
                tbody
                  tr(style="background-color: #aed3f273;")
                    th.text-start(style="font-weight:normal;") Caja menor
                    th.text-center(style="font-weight:normal;") $500.000
                    td
                  
                  tr(style="background-color: #f2e9e496;")
                    th.text-start(style="font-weight:normal;") Bancos
                    th(style="") 
                    td.text-end(style="font-weight:normal;") $500.000

                  tr(style="background-color: #eaccb2;")
                    th.text-start(style="") Total
                    th.text-end(style="") $500.000
                    th.text-end(style="border:none;") $500.000
            figcaption.mt-1 Fuente: elaboración propia
      

      .col-lg-6
        .row.justify-content-center
          .col-lg-12
            .tarjeta-avatar-b.mb-2
              img(src='@/assets/curso/tema1/tema1-3/icon2.svg' alt='AvatarTop')
              .tarjeta.transparent1
                .p-4
                  h4.mb-4 Reembolso de caja menor
          
          .col-lg-11.p-0(style="background-color: #fcfaf8;")
            figure.mb-0
              img(src='@/assets/curso/tema1/tema1-3/img1.svg' alt='tabla empresa gestión contable sas',style="width:564px;")
            .tabla-a.color-acento-contenido.mb-5
              table
                thead(style="border-color: snow;")
                  tr(style="background-color: #eaccb2;")
                    th(style="") Pagado a
                    th(style="") Concepto
                    th(style="border:none;") Valor
                    
                tbody
                  tr(style="background-color: #aed3f273;")
                    th.text-start(style="font-weight:normal;") Almacén Alkosto
                    th.text-center(style="font-weight:normal;") Elementos de aseo
                    td.text-end(style="font-weight:normal;") $120.000
                    
                  
                  tr(style="background-color: #f2e9e496;")
                    th.text-start(style="font-weight:normal;") Papelería Panamericana
                    th.text-start(style="font-weight:normal;") Papelería
                    td.text-end(style="font-weight:normal;") $80.000
                  
                  tr(style="background-color: #aed3f273;")
                    th.text-start(style="font-weight:normal;") Transportes García
                    th.text-center(style="font-weight:normal;") Transporte
                    td.text-end(style="font-weight:normal;") $150.000
                    
                  
                  tr(style="background-color: #f2e9e496;")
                    th.text-start(style="font-weight:normal;") Papelería Panamericana
                    th.text-start(style="font-weight:normal;") Almuerzos
                    td.text-end(style="font-weight:normal;") $80.000
                  
                  tr(style="background-color: #aed3f273;")
                    th.text-start(style="font-weight:normal;") Combustibles y lubricantes RJ
                    th.text-start(style="font-weight:normal;") Gasolina
                    td.text-end(style="font-weight:normal;") $50.000

                  tr(style="")
                    th.text-start(style="border:none;") 
                    th.text-start(style="border:none; background-color: #eaccb2;") TOTAL REINTEGRO
                    th.text-end(style="border:none; background-color: #eaccb2;") $480.000
            .col-4(style="border-top: 1px solid #00223D")
              p.me-2.text-end #[strong Firma]
                  
  .container.tarjeta.tarjeta--blanca2.p-4.p-md-5

    .h5.text-center Reintegro de caja menor.
    .row.justify-content-center.mb-4
      .col-lg-6(style="padding-inline:4px;")
        .tabla-a.color-acento-contenido.mb-5
              table
                thead(style="border-color: snow;")
                  tr(style="background-color: #eaccb2;")
                    th(style="width:50%") Cuenta
                    th(style="width:25%") Debe
                    th(style="border:none;") Haber
                    
                tbody
                    
                  
                  tr(style="background-color: #f2e9e496;")
                    th.p-1.text-start(style="font-weight:normal;") Combustibles y lubricantes
                    th.text-end(style="font-weight:normal;") $50.000
                    td.text-end(style="font-weight:normal;")
                  
                  tr(style="background-color: #aed3f273;")
                    th.text-start(style="font-weight:normal;") Elementos de aseo
                    th.text-end(style="font-weight:normal;") $120.000
                    td.text-end(style="font-weight:normal;") 
                  
                  tr(style="background-color: #f2e9e496;")
                    th.text-start(style="font-weight:normal;") Transporte y fletes
                    th.text-end(style="font-weight:normal;") $150.000
                    td.text-end(style="font-weight:normal;")
                  
                  tr(style="background-color: #aed3f273;")
                    th.text-start(style="font-weight:normal;") Útiles, papelería y fotocopias
                    th.text-end(style="font-weight:normal;") $80.000
                    td.text-end(style="font-weight:normal;") 

                  tr(style="background-color: #f2e9e496;")
                    th.text-start(style="font-weight:normal;") Casino y restaurante
                    th.text-end(style="font-weight:normal;") $80.000
                    td.text-end(style="font-weight:normal;")

                  tr(style="background-color: #aed3f273;")
                    th.text-start(style="font-weight:normal;") Bancos
                    th.text-end(style="font-weight:normal;") 
                    td.text-end(style="font-weight:normal;") $480.000

                  tr(style="")
                    th.text-start(style="background-color: #eaccb2;") TOTAL
                    th.text-center(style=" background-color: #eaccb2;") $480.000
                    th.text-end(style="border:none; background-color: #eaccb2;") $480.000

    .row.justify-content-center.mb-5
      .col-lg-7
        .row.justify-content-center
          .col-lg-10.p-4(style="background-color: #6595BF;").mb-0
            h4.text-center.text-white.mb-0 Arqueo Caja Menor

          .col-lg-10.p-4(style="background-color: #fcf9f8;")
            h5.mb-1(style="") Fecha de elaboración:
            p.mb-0 28 de julio de 2020
            .tabla-a.color-acento-contenido.mb-5
              table
                thead(style="border-color: snow;")
                  tr
                    th.text-start(style="width:50%;background-color:#f6f6f6; border-left: none; font-weight:normal;") Logo de la <br>empresa
                    td(colspan='2',style="background-color: #fcf9f8; border: none;")
                    
                tbody
                  tr(style="background-color: #aed3f273;")
                    th.text-start(style="font-weight:normal;") Nombre de la empresa: 
                    td(colspan='2')
                  tr(style="background-color: #e8e8e885;")
                    th.text-start(style="font-weight:normal;") Nit de la empresa: 
                    td.text-center 900256189 
                    td.text-center Teléfono: 

                  tr(style="background-color: #aed3f273;")
                    th.text-start(style="font-weight:normal;") Dirección de la empresa:
                    td.text-center(colspan='2') Cra 52 A
                  tr
                    th(colspan='3', style="background-color: #cac6c6; border-right: snow;") Acta de arqueo caja
                  tr(style="background-color: #aed3f273;")
                    th.text-start(style="font-weight:normal;") Nombre responsable: 
                    td.text-center(colspan='2') Ligia Carvajal 
                  tr(style="background-color: #e8e8e885;")
                    th.text-start(style="font-weight:normal;") Fehca y hora de realización:
                    td.text-center(colspan='2')  08/07/2020
                  tr(style="background-color: #aed3f273;")
                    th.text-start(style="font-weight:normal;") Saldo segun libro de caja:
                    td.text-center(colspan='2') $20.000
                  tr
                    th(colspan='3', style="border:none;")
                    
                  tr(style="background-color: #aed3f273;")
                    th.text-start(style="font-weight:normal;") Efectivo
                    td.text-center(colspan='2') $500.000
                    
                  tr(style="background-color: #e8e8e885;")
                    th.text-start(style="font-weight:normal;") 
                    th.text-center(colspan='1', style="font-weight:normal;")  Unidades
                    td.text-center(colspan='1')  Total
                  
                  tr
                    th(colspan='3', style="border:none;")
                  
                  tr(style="background-color: #aed3f273;")
                    th.text-start(style="font-weight:normal;") Billetes de 50.000 
                    th.text-center(colspan='1', style="font-weight:normal;")  
                    td.text-end(colspan='1')  $-

                  tr(style="background-color: #e8e8e885;")
                    th.text-start(style="font-weight:normal;") Billetes de 20.000 
                    th.text-center(colspan='1', style="font-weight:normal;")  
                    td.text-end(colspan='1')  $-

                  tr(style="background-color: #aed3f273;")
                    th.text-start(style="font-weight:normal;") Billetes de 10.000 
                    th.text-center(colspan='1', style="font-weight:normal;")  1
                    td.text-end(colspan='1')  $10.000
                  tr(style="background-color: #e8e8e885;")
                    th.text-start(style="font-weight:normal;") Billetes de 5.000 
                    th.text-center(colspan='1', style="font-weight:normal;")  1
                    td.text-end(colspan='1')  $5.000
                  tr(style="background-color: #aed3f273;")
                    th.text-start(style="font-weight:normal;") Billetes de 2.000 
                    th.text-center(colspan='1', style="font-weight:normal;") 2
                    td.text-end(colspan='1')  $4.000
                  tr(style="background-color: #e8e8e885;")
                    th.text-start(style="font-weight:normal;") Billetes de 1.000 
                    th.text-center(colspan='1', style="font-weight:normal;") 1
                    td.text-end(colspan='1')  $1.000
                  tr(style="background-color: #aed3f273;")
                    th.text-start(style="font-weight:normal;") Monedas de 1.000 
                    th.text-center(colspan='1', style="font-weight:normal;")  
                    td.text-end(colspan='1')  $-
                  tr(style="background-color: #e8e8e885;")
                    th.text-start(style="font-weight:normal;") Monedas de 500 
                    th.text-center(colspan='1', style="font-weight:normal;")  
                    td.text-end(colspan='1')  $-
                  tr(style="background-color: #aed3f273;")
                    th.text-start(style="font-weight:normal;") Monedas de 200 
                    th.text-center(colspan='1', style="font-weight:normal;")  
                    td.text-end(colspan='1')  $-
                  tr(style="background-color: #e8e8e885;")
                    th.text-start(style="font-weight:normal;") Monedas de 100 
                    th.text-center(colspan='1', style="font-weight:normal;")  
                    td.text-end(colspan='1')  $-
                  tr(style="background-color: #aed3f273;")
                    th.text-start(style="font-weight:normal;") Monedas de 50 
                    th.text-center(colspan='1', style="font-weight:normal;")  
                    td.text-end(colspan='1')  $-

                  tr
                    th(colspan='3', style="border:none;")
                  
                  tr(style="background-color: #aed3f273;")
                    th.text-start(style="font-weight:normal;") Otros fondos
                    td.text-end(colspan='2')  $-

                  tr(style="background-color: #e8e8e885;")
                    th.text-start(style="font-weight:normal;") Vales
                    td.text-end(colspan='2')  $-

                  tr(style="background-color: #aed3f273;")
                    th.text-start(style="font-weight:normal;") Facturas
                    td.text-end(colspan='2')  $480,000

                  tr(style="background-color: #e8e8e885;")
                    th.text-start(style="font-weight:normal;") Anticipos
                    td.text-end(colspan='2')  $-

                  tr(style="background-color: #aed3f273;")
                    th.text-start(style="font-weight:normal;") Otros fondos
                    td.text-end(colspan='2')  $-

                  tr(style="background-color: #EACCB2;")
                    th.text-start(style="") TOTAL SALDO CAJA
                    td.text-end(colspan='2') $20.000
            p(style="margin-bottom: 60px;") #[strong CERTIFICO: ] que el efectivo y justificantes de caja mencionados, fueron verificados en mi presencia y devueltos. No existiendo otros fondos, valores o documentos en poder que no hayan sido mostrados en el arqueo.
            p(style="margin-bottom: 80px;") #[strong Observaciones:]
            .row(style="justify-content:space-around;")
              
              .col-lg-5.mb-4
                hr.text-center.mx-auto(style= "width:90%; background-color:#000")
                p.text-center.mt-2 #[strong Firma supervisor]
              .col-lg-5.mb-4
                hr.text-center.mx-auto(style= "width:90%")
                p.text-center.mt-2 #[strong Firma responsable]

    separador
    #t_1_4.titulo-segundo
      .h2 1.4 Conciliación Bancaria.
    
    .row.justify-content-center.mb-5
      .col-lg-12
        figure
          <iframe width="1224" height="557" src="https://www.youtube.com/embed/FgKN_MPbQLk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
    .h4.mb-5 Causa de las diferencias entre los libros auxiliares y el extracto bancario: 
    .row(style="justify-content: space-between; margin-bottom:60px;")
        .col-lg-6.align-self-center
          .row
            .col-lg-12.align-self-center
              .tarjeta-avatar-b
                img(src='@/assets/curso/tema1/num1.svg',alt='AvatarNum',style='')
                .tarjeta.transparent3
                  .p-5
                    
                    p.mb-0 Transacciones contabilizadas por la empresa y no registradas por el banco.
            
            .col-lg-12.align-self-center
              .tarjeta-avatar-b
                img(src='@/assets/curso/tema1/num2.svg',alt='AvatarNum',style='')
                .tarjeta.transparent3
                  .p-5
                    p.mb-0 Valores que aparecen en el extracto y no han sido contabilizadas por la empresa. En este caso requiere ajustes.
            
            .col-lg-12.align-self-center
              .tarjeta-avatar-b
                img(src='@/assets/curso/tema1/num3.svg',alt='AvatarNum',style='')
                .tarjeta.transparent2
                  .p-5
                    p.mb-0 Errores y omisiones de la empresa y/o del banco. Errores en los libros (Amador, A., 2013, p.2).
        
        .col-lg-5.align-self-center
          figure  
            img(src='@/assets/curso/tema1/tema1-4/img1.svg',alt='Causa de las diferencias entre los libros auxiliares y el extracto bancario',style='width:440px;').mx-auto

    .h4.mb-5 Las siguientes, son las etapas que deben seguirse para preparar una conciliación bancaria:

    .row.justify-content-center
      .col-lg-10
        PasosA.color-primario.mb-5(tipo="n")
          .row
            .col-md-12.mb-4.mb-md-0
              p Comparar los recibos de las consignaciones efectuadas y las notas crédito recibidas con las consignaciones y las notas crédito que aparezcan en el extracto bancario. Si hay diferencia, debe precisarse el error y corregirlo.

          .row
            .col-md-12.mb-4.mb-md-0
              p Confrontar la lista de cheques registrados en los libros auxiliares y las notas débito recibidas con la columna cheques y notas débito del extracto. Las diferencias deben eliminarse.
              

          .row
            .col-md-12.mb-4.mb-md-0
              p Totalizar las correcciones de las consignaciones en los libros auxiliares.

          .row
            .col-md-12.mb-4.mb-md-0
              p Totalizar las correcciones de cheques girados en los libros auxiliares.

    p.mb-4 A continuación, observa la estructura básica de elaboración de la conciliación bancaria (Conciliación bancaria, s.f., párr.14):

    .row.justify-content-center
      .col-lg-9.p-4.ps-5.pe-5.mb-2(style="background-color: #f2e9e47d;")
        table
          tbody
            tr
              th.text-start(style="font-weight:normal; border-left:none; border-right:none; border-top:2px solid #e8e8e8e8; border-bottom:none;") Saldo del extracto bancario:    
              td.text-start(style="font-weight:normal; border-left:none; border-right:none; border-top:2px solid #e8e8e8e8; border-bottom:none;") XXX
            tr
              th.text-start(style="font-weight:normal; border-left:none; border-right:none; border-top:2px solid #e8e8e8e8; border-bottom:none;") (-) Cheques pendientes de cobro:      
              td.text-start(style="font-weight:normal; border-left:none; border-right:none; border-top:2px solid #e8e8e8e8; border-bottom:none;") XXX  

            tr
              th.text-start(style="font-weight:normal; border-left:none; border-right:none; border-top:2px solid #e8e8e8e8; border-bottom:none;") (-) Notas crédito no registradas  
              td.text-start(style="font-weight:normal; border-left:none; border-right:none; border-top:2px solid #e8e8e8e8; border-bottom:none;") XXX
            tr
              th.text-start(style="font-weight:normal; border-left:none; border-right:none; border-top:2px solid #e8e8e8e8; border-bottom:none;") (+) Consignaciones pendientes 
              td.text-start(style="font-weight:normal; border-left:none; border-right:none; border-top:2px solid #e8e8e8e8; border-bottom:none;") XXX 
            tr
              th.text-start(style="font-weight:normal; border-left:none; border-right:none; border-top:2px solid #e8e8e8e8; border-bottom:none;") (+) Notas debito no registradas  
              td.text-start(style="font-weight:normal; border-left:none; border-right:none; border-top:2px solid #e8e8e8e8; border-bottom:none;") XXX  

            tr
              th.text-start(style="font-weight:normal; border-left:none; border-right:none; border-top:2px solid #e8e8e8e8; border-bottom:none;") (±) Errores en el auxiliar  
              td.text-start(style="font-weight:normal; border-left:none; border-right:none; border-top:2px solid #e8e8e8e8; border-bottom:none;") XXX
            tr
              th.text-start(style="font-weight:normal; border-left:none; border-right:none; border-top:2px solid #e8e8e8e8; border-bottom:2px solid #e8e8e8e8;;") = Saldo en libros
              td.text-start(style="font-weight:normal; border-left:none; border-right:none; border-top:2px solid #e8e8e8e8; border-bottom:2px solid #e8e8e8e8;") XXX
      .col-lg-9.p-0.mb-5
        figcaption Fuente:  Sinisterra V., Polanco L., y Henao H. (2011)

    .h3.mb-4 Métodos de la conciliación bancanria
    p.mb-5 #[strong Método saldos encontrados:] este método se basa en la elaboración de la conciliación, empezando con alguno de los dos saldos, (el de banco o el de la empresa), para luego reflejar en una sola columna las diferencias, depósitos o cheques que compensen las discrepancias entre ambos para que, al final, se encuentre en saldo contrario, lo cual resulta ser la finalidad de este método (Palmera, 2015, p. 3).
    
    .row.justify-content-center.mb-5
      .col-lg-10
        figure  
          img(src='@/assets/curso/tema1/tema1-4/img2.svg',alt='Tabla metodos de conciliación bancaria',style='width:788px;').mx-auto

    .row.justify-content-center.mb-5
      .col-lg-11
        figure  
          img(src='@/assets/curso/tema1/tema1-4/img3.svg',alt='Tabla de conciliación bancaria',style='width:1013px;').mx-auto


    .h4.mb-5 Ejemplo:

    .row.justify-content-center.mb-0
      .col-lg-11.mb-0
        .tarjeta-avatar-b
          img(src='@/assets/curso/tema1/num1.svg' alt='AvatarTop')
          .tarjeta.transparent1
            .p-5
              p.mb-0 Realice la conciliación bancaria teniendo en cuenta utilizar el formato básico y aplicar el método “Saldos encontrados” y “Saldos correctos”, con la siguiente información suministrada por la empresa Gestión contable SAS:

    .row.justify-content-center.mb-4
      .col-lg-7
        .tabla-a.color-acento-contenido.mb-0
              table
                thead(style="border-color: snow;")
                  tr(style="background-color: #6595BF; height: 54px;")
                    th.text-white(colspan='2',style="") Concepto
                    th.text-white(style="border:none;") Valor
                    
                tbody
                  tr(style="background-color: #aed3f273;") 
                    th.text-start(colspan='2', style="font-weight:normal;") Saldo según libro auxiliar de bancos
                    td.text-end(style="") $ 1.170.122
                  
                  tr(style="background-color: #f2e9e496;") 
                    th.text-start(colspan='2', style="font-weight:normal;") Saldo según extracto bancario
                    td.text-end(style="") $8.955.336 
                  tr(style="background-color: #EACCB2;") 
                    th.text-start(colspan='2', style="font-weight:normal;")  Valores no registrados en libros
                    td.text-end(style="") 
                  tr(style="background-color: #aed3f273;") 
                    th.text-start(colspan='2', style="font-weight:normal;") Nota débito GMF
                    td.text-end(style="")  $ 115.220
                  
                  tr(style="background-color: #f2e9e496;")
                    th.text-start(colspan='2', style="font-weight:normal;") Nota débito comisiones bancarias
                    td.text-end(style="")  $          155.896
                  tr(style="background-color: #aed3f273;")
                    th.text-start(colspan='2', style="font-weight:normal;") Nota débito chequera
                    td.text-end(style="")  $          255.000
                  
                  tr(style="background-color: #f2e9e496;")
                    th.text-start(colspan='2', style="font-weight:normal;") Nota débito IVA chequera
                    td.text-end(style="") $             48.450 
                  tr(style="background-color: #aed3f273;")
                    th.text-start(colspan='2', style="font-weight:normal;") Nota débito timbre chequera
                    td.text-end(style="") $               5.100 
                  
                  tr(style="background-color: #f2e9e496;")
                    th.text-start(colspan='2', style="font-weight:normal;") Nota crédito rendimientos financieros
                    td.text-end(style="")  $             12.566 

                  tr(style="background-color: #EACCB2;")
                    th.text-start(colspan='2', style="font-weight:normal;") Valores no registrados en el extracto
                    td.text-end(style="") 

                  tr(style="background-color: #aed3f273;")
                    th.text-start(colspan='2', style="font-weight:normal;") Consignaciones en tránsito
                    td.text-end(style="") $       1.955.336 
                  
                  tr(style="background-color: #e8e8e8;")
                    th.text-start(colspan='2', style="font-weight:normal;") Cheques pendientes de cobro
                    td.text-end(style="") $     10.307.650 

    p.mb-2.text-center #[strong Formato Básico]

    .row.justify-content-center.mb-5
      .col-lg-7
        .tabla-a.color-acento-contenido.mb-0
              table
                thead(style="border-color: snow;")
                  tr(style="background-color: #6595BF; height: 54px;")
                  th.text-white(colspan='3',style="background-color: #6595BF;") Conciliación Bancaria
                  
                tbody
                  tr(style="background-color: #aed3f273;") 
                    th.text-start(colspan='2', style="font-weight:normal;") Saldo en libros
                    td.text-end(style="") $ 1.170.122
                  
                  tr(style="background-color: #f2e9e496;") 
                    th.text-start(colspan='2', style="font-weight:normal;") Menos: Notas débito
                    td.text-end(style="")  $ 579.666
                  tr(style="background-color: #aed3f273;") 
                    th.text-start(colspan='2', style="font-weight:normal;") Más: Notas crédito
                    td.text-end(style="") $ 12.566
                  
                  tr(style="background-color: #f2e9e496;") 
                    th.text-start(colspan='2', style="font-weight:normal;") Saldo ajustado en libros
                    td.text-end(style="") $ 603.022 
                  tr(style="background-color: #aed3f273;") 
                    th.text-start(colspan='2', style="font-weight:normal;") Saldo en extracto bancario a 31 marzo
                    td.text-end(style="") $ 8.955.336 
                  
                  tr(style="background-color: #f2e9e496;") 
                    th.text-start(colspan='2', style="font-weight:normal;") Más: consignaciones en tránsito
                    td.text-end(style="")  $ 1.955.336 

                  tr(style="background-color: #aed3f273;") 
                    th.text-start(colspan='2', style="font-weight:normal;") Menos: cheques girados y no cobrados 
                    td.text-end(style="") $ 10.307.650
                  
                  tr(style="background-color: #f2e9e496;") 
                    th.text-start(colspan='2', style="font-weight:normal;") Saldo ajustado al extracto
                    td.text-end(style="") $ 603.022 

    p.mb-0.text-center #[strong Método saldos correctos:]
    .row.justify-content-center.mb-5
      .col-lg-11.p-4
        figure
          img(src='@/assets/curso/tema1/tema1-4/img4.svg' alt=' Tabla Método saldos correctos', style="951px;")

    p.mb-2.text-center #[strong Método saldos encontrados:]
    .row.justify-content-center.mb-4
      .col-lg-10.mb-0
        figure
          img(src='@/assets/curso/tema1/tema1-4/img5.svg' alt=' Tabla Método saldos encontrados', style="938px;")
          

    p.mb-5 Con el fin de profundizar en el proceso de elaboración de la conciliación bancaria, es importante explorar la Biblioteca SENA y los siguientes enlaces:

    .row.justify-content-center
      .col-lg-10
        .tarjeta.custom_bg.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/tema1/tema1-1/img5.svg" alt="imagen que acompaña enlace", style="width:62px;")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0              
                  p.mb-0.text-white Angulo, U. (2018). Contabilidad financiera, correlacionado con NIIF. (2a. ed.) Ediciones de la U.
                .col-sm-auto
                  a.boton.boton--c(href="http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=8047" target="_blank")
                    span.px-4 Ver
                    i.fas.fa-link

    separador
    #t_1_5.titulo-segundo
      .h2 1.5 Ajuste por diferencia en cambio.
    

    p.mb-5 Las empresas se encuentran expuestas al riesgo cambiario, teniendo en cuenta que realizan operaciones en moneda extranjera; con base en ello, es importante aplicar las normas internacionales en el registro de los hechos económicos.
  
    .row.justify-content-center.mb-4
      .col-lg-11.p-4(style="background-color: #fdeada63")
        .h4  Norma Internacional de Contabilidad 21.
        .h4.mb-4 Efectos de las variaciones en las tasas de cambio de la moneda extranjera
        p.mb-1 #[strong Objetivo:]
        p.mb-4 una entidad puede llevar a cabo actividades en el extranjero de dos maneras diferentes. Puede realizar transacciones en moneda extranjera o bien puede tener negocios en el extranjero. Además, una entidad puede presentar sus estados financieros en una moneda extranjera. El objetivo de esta norma es prescribir cómo se incorporan, en los estados financieros de una entidad, las transacciones en moneda extranjera y los negocios en el extranjero, y cómo convertir los estados financieros a la moneda de presentación elegida. 
        p.mb-5 Los principales problemas que se presentan son la tasa o tasas de cambio a utilizar, así como la manera de informar sobre los efectos de las variaciones en las tasas de cambio dentro de los estados financieros. Consejo Técnico de la contaduría pública (CTCP, 2019c, p.503).
        
        p.mb-1 #[strong Alcance:]
        p.mb-4 Esta norma se aplicará:
        .row.justify-content-center
          .col-lg-7.align-self-center
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span a
                | Al contabilizar las transacciones y saldos en moneda extranjera, excepto las transacciones y saldos con derivados que estén dentro del alcance de la NIIF 9- Instrumentos financieros; 
              li 
                .lista-ol--cuadro__vineta
                  span b
                | al convertir los resultados y la situación financiera de los negocios en el extranjero que se incluyan en los estados financieros de la entidad, ya sea por consolidación o por el método de la participación; y
              li 
                .lista-ol--cuadro__vineta
                  span c
                | al convertir los resultados y la situación financiera de la entidad en una moneda de presentación. (CTCP, 2019c, p.503).
          .col-lg-5.align-self-center
            figure
              img(src="@/assets/curso/tema1/tema1-5/img1.svg" alt="Alcance", style="width:485px;").mx-auto

    .row.justify-content-center
      p.mb-4 Para ampliar el alcance y lineamientos aplicables es importante revisar la Norma Internacional vigente; para ello, explore los siguientes enlaces:
      .col-lg-11
        .row.justify-content-center
          .col-lg-12.mb-4
            a.anexo.mb-4.mb-lg-0(href=" https://www.ctcp.gov.co/noticias/2019/presidencia-de-la-republica-expidio-el-decreto-227" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p.mb-0 Norma Internacional de Contabilidad 21.
          .col-lg-12
            a.anexo.mb-4.mb-lg-0(href="https://www.ctcp.gov.co/proyectos/contabilidad-e-informacion-financiera/documentos-organismos-internacionales/enmiendas-niif-16-y-segundo-semestre-2016/1514470523-2378" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p.mb-0 Presidencia de la República expidió el Decreto 2270 de 2019


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
