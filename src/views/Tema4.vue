<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Configuración de funciones básicas de una impresora 3D

    .bloque-texto-a.color-secundario-custom.invert.p-4.p-md-5.mb-5
      .row.m-0.align-items-center.justify-content-between
        .col-md-10
          .bloque-texto-a__texto.p-4
            p.mb-0 La configuración de la calibración es una función de la impresora 3D y es un aspecto básico e importante que se tiene que aprender; algunas de las características de la calibración resaltan varios aspectos que se verán a continuación:
        .col-md-2.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/temas/T4/img-1.png', alt='')



    .tarjeta.color-linea-tiempo-c.p-4.mb-5
      LineaTiempoC.color-acento-botones
        .row.justify-content-around.align-items-center(titulo="Aspecto 1")
          .col-md-6
            p En la actualidad las casas fabricantes de impresoras están abriendo la puerta a que la calibración sea de manera automática o automatizada.

          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/T4/img-2.png', alt='Texto que describa la imagen')

          
        
        .row.justify-content-around.align-items-center(titulo="Aspecto 2")
          .col-md-6
            p Al conocer este tipo de configuración se impacta directamente sobre el resultado final de la impresión; así mismo es útil para lograr resultados y soluciones variadas.

          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/T4/img-3.png', alt='Texto que describa la imagen')

          

        .row.justify-content-around.align-items-center(titulo="Aspecto 3")
          .col-md-6
            p Al ser la calibración repetitiva, una vez que se haya tenido la experiencia suficiente para calibrar con lo que respecta a la primera capa del material, el motor, la extrusora, ejes, filamento y temperatura, el resto sucederá de manera más intuitiva y sistemática de manera sucesiva, así resultará más fácil completar la calibración.

          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/T4/img-4.png', alt='Texto que describa la imagen')

          

        .row.justify-content-around.align-items-center(titulo="Aspecto 4")
          .col-md-6
            p Por último, cuando no hay una correcta calibración de la impresora se pueden crear impresiones defectuosas; por ello es que de la calibración dependen muchas cosas para tener una buena impresión. Es la configuración que impulsa a hacer piezas con mayor precisión debido a que sin una adecuada precisión los diseños realizados por los programas informáticos CAD, no serán de utilidad alguna cuando sean impresos. 
          
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/T4/img-5.png', alt='Texto que describa la imagen')

          


        .row.justify-content-around.align-items-center(titulo="Aspecto 5")
          .col-md-6
            p La configuración decide la lectura o lecturas que hace la impresora 3D del diseño frente a un estándar, para así garantizar la precisión de la máquina de una manera constante en el momento de la impresión del objeto o pieza diseñada.
          
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/T4/img-6.png', alt='Texto que describa la imagen')

          
    p.mb-5 Configuración básica de una impresora 3D en el siguiente video.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video


    

</template>

<script>
export default {
  name: 'Tema3',
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

<style lang="sass"></style>
