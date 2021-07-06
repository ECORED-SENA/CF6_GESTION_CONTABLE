<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Efectivo y equivalentes al efectivo



    #t_1_1.titulo-segundo
      .h2 1.1 Política contable.




    separador



    #t_1_2.titulo-segundo
      .h2 1.2 Reconocimiento, medición, presentación y revelación.





    separador




    #t_1_3.titulo-segundo
      .h2 1.3 Arqueo de caja.




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
