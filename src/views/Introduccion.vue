<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    figure.mb-5
      img(src="@/assets/curso/introduc.svg", alt="", style="width:690px").mx-auto
      
    p.mb-4 Continúemos avanzando con entusiasmo y motivación en la formación, para fortalecer los conocimientos sobre el proceso contable, mediante la aplicación de los criterios de reconocimiento, medición, presentación, revelación del efectivo y equivalentes de efectivo.
    p.mb-4 En la presente unidad se analizarán las siguientes temáticas:
    p.mb-4 1 Efectivo y equivalentes al efectivo.
      | #[br]  1.1 Política contable.
      | #[br] 1.2 Reconocimiento, medición, presentación y revelación.
      | #[br] 1.3 Arqueo de caja.
      | #[br] 1.4 Conciliación Bancaria.
      | #[br] 1.5 Ajuste por diferencia en cambio.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
