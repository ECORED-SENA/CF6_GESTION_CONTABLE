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
      

    p.mb-0 La llegada de nuevas vacunas al país supone un reto para el talento humano en salud responsable de la vacunación y desarrollar habilidades para ofrecer una orientación oportuna y segura a las personas objeto de la vacuna.

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
