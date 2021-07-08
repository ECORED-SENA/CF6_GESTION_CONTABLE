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

    p.mb-4 En el proceso contable se requieren diferenciar los conceptos de la caja general y caja menor, teniendo en cuenta que cada una tiene políticas de manejo y control, de acuerdo con lo establecido por la entidad.
    p.mb-4 Teniendo en cuenta que es un activo muy importante, se deben diseñar e implementar políticas para salvaguardar el activo. Algunas directrices que se pueden implementar, son las siguientes:

    separador



    #t_1_4.titulo-segundo
      .h2 1.4 Conciliación Bancaria.


    separador




    #t_1_5.titulo-segundo
      .h2 1.5 Ajuste por diferencia en cambio.
    
  
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
