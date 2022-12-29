<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-around.align-items-center.mb-5
                          
      .col-lg-7.md-5
        p.mb-4 Apreciado aprendiz sea bienvenido a este componente formativo, orientado a las tecnologías para la manufactura aditiva y tipos de impresión 3D. A lo largo del mismo, se dará a conocer qué es la manufactura aditiva, los tipos de impresión de tipo tridimensional (3D) que existen en el mercado, los tipos de filamentos que se encuentran  en la industria de la impresión 3D como pueden ser: el plástico, los metales y el polvo. Este proceso de impresión, así mismo, se genera después de dar las órdenes desde un computador para su realización, pero sin olvidar la configuración que se requiere realizar para ello, generando así piezas muy similares a las reales o a lo que se diseñó en el boceto digital inicial. Todo lo anterior, estructurándose en elementos como la historia, ventajas y revisión de cómo la manufactura aditiva tiene variadas aplicaciones en diferentes áreas como la medicina, aviación, construcción de viviendas, robótica y de alimentos; siendo este último, uno de los más revolucionarios hasta el momento. En el siguiente video conocerá de forma general, el desarrollo de esta temática.
       
      .col-lg-5.mb-4
        figure(data-aos='fade-right')
          img(src='@/assets/curso/temas/introduccion/img-1.png', alt='')


    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video









</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
