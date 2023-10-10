<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Introducción a la manufactura aditiva

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/T1/img-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La fabricación o las tecnologías para la realización de manufactura aditiva existen en la industria desde 1980 aproximadamente; desde ese entonces siempre ha tenido éxito tanto en el sector de la industria como en el textil, de joyería, medicina, aeronáutica hasta llegar al arquitectónico. Gracias a este tipo de fabricación, se ve con mayor velocidad nuevos objetos en el mercado; en especial en el área industrial.

    p.mb-5 Este tipo de fabricación de un objeto tridimensional con tecnología de manufactura aditiva tiene ciertas consideraciones para tener en cuenta, como lo pueden ser:
      
  
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.config-slyder-f.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/T1/img-2.svg' alt='AvatarTop')
        p.text-center Parte de un modelo virtual.

      .tarjeta.config-slyder-f.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/T1/img-3.svg' alt='AvatarTop')
        p.text-center Se usa un proceso aditivo. 

      .tarjeta.config-slyder-f.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/T1/img-4.svg' alt='AvatarTop')
        p.text-center En el proceso aditivo el material se va pegando (consolidando) en capas de manera sucesiva hasta tener la pieza requerida.

      .tarjeta.config-slyder-f.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/T1/img-5.svg' alt='AvatarTop')
        p.text-center La diferencia de los métodos comunes de fabricación como el corte, el fresado o el mecanizado es que en los anteriores procesos se elimina el material; en vez de añadirlo como se hace en el proceso aditivo.

    p.mb-5 Las ventajas de este tipo de fabricación son:

    .row.justify-content-center.mb-3
      .col-8
        TabsA.color-acento-contenido.mb-5      
          .tarjeta.color-acento-botones--borde.p-4(titulo="Producción <br>directa")
            h4 Producción directa
            p Ejecutar la producción de manera directa, reduciendo los tiempos y costos.
            
          .tarjeta.color-acento-botones--borde.p-4(titulo="Herramientas<br> especializadas")
            h4 Herramientas especializadas
            p La no utilización de herramientas especializadas.
                
          .tarjeta.color-acento-botones--borde.p-4(titulo="Reducción <br>de pesos")
            h4 Reducción de pesos
            p Reducción considerable de los pesos de los objetos o piezas fabricados, creando así diseños livianos.
            
          .tarjeta.color-acento-botones--borde.p-4(titulo="Reducción <br>de unión")
            h4 Reducción de unión
            p Se reducen puntos de unión en la piezas u objetos fabricados, debido a que se fabrica por medio de menor cantidad de piezas o incluso solo se hace una pieza.
            
          .tarjeta.color-acento-botones--borde.p-4(titulo="Complejidad <br>en el diseño")
            h4 Complejidad en el diseño
            p Producir cualquier pieza u objeto que ha sido diseñada de manera virtual o digital, con ello se tiene la libertad para el desarrollo de su diseño; con lo anterior se aumenta la complejidad del diseño de la pieza sin tener sobrecostos adicionales. 

          .tarjeta.color-acento-botones--borde.p-4(titulo="Pasos cortos")
            h4 Pasos cortos
            p En la realización de piezas u objetos complejos estos son producidos en un solo paso, eliminando pasos extensos para su realización.

      .col-md-3
        figure
          img(src="@/assets/curso/temas/T1/img-6.png", alt="Texto que describa la imagen")
    
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

<style lang="sass"></style>
