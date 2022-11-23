<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Primer acercamiento a la impresión

    .row.justify-content-center
      .col-md-6
        figure
          img(src='@/assets/curso/temas/T2/img-1.png', alt='Texto que describa la imagen')
      .col-md-6.mb-4.mb-md-0
        p.mb-3 En términos generales la impresión tipo 3D es un proceso de adición progresiva y ordenada de material hasta conformar la pieza que se está consolidación o imprimiendo. Toda esta tecnología ha pasado por varios años de maduración o de desarrollo para consolidarse, haciendo parte de la cuarta revolución industrial propiamente dicha en este momento actual.
        p.mb-5 Desde los inicios entre los años 1980 y 2000 en donde además de su aparición se evidencia el crecimiento e importancia de la misma por sus múltiples beneficios como la creación de objetos o de piezas, según la necesidad del cliente o del contexto(mercado) toda esta tecnología está muy desarrollada ahora en el área industrial; el punto transversal del presente documento. 

    p.mb-5 La impresión 3D o tridimensional tiene ciertos conceptos o términos que se deben conocer para así poder manejarla con propiedad cuando se realice la impresión. Estos conceptos están relacionados al proceso de la impresión en sí mismo.
      

    .row.justify-content-center.mb-3
      .col-5
        figure
          img(src="@/assets/curso/temas/T2/img-2.png", alt="Texto que describa la imagen")
      .col-7
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Primer Concepto")
            p El primer concepto es la creación del contenido, es decir la pieza que se diseña; gracias a un software tipo CAD (diseño asistido por computador).

          .row(titulo="Segundo Concepto")
            p El segundo término o concepto es generar un formato compatible para que así la impresora pueda realizar la impresión. Este formato es denominado formato STL que significa <i>Stereo Lithography</i>.

          .row(titulo="Tercer Concepto")
            p El siguiente concepto es el rebanado, que es el proceso de traducir el archivo 3D en instrucciones para que la impresora 3D las siga.

          .row(titulo="Cuarto Concepto")
            p El cuarto concepto es por su puesto el correspondiente a la impresión propiamente dicha.

          .row(titulo="Quinto Concepto")
            p Después sigue la extracción de la pieza; es decir el retiro del objeto que ya se imprimió, para ello se requieren habilidades profesionales debido a que es un proceso técnico.

          .row(titulo="Sexto Concepto")
            p El último concepto corresponde al pos- procesamiento de la pieza, en donde se mejoran de manera considerable detalles como los contornos resultantes de la pieza por medio de técnicas adecuadas como el lijado, el pulido, la pintura y otros métodos que se describirán en los siguientes temas.
          
    #t_2_1.titulo-segundo.color-acento-botones
      h2 2.1 Historia y ventajas de la impresión 3D

    p.mb-5 La impresión 3D ha tenido gran desarrollo a través del tiempo; a continuación, se mencionan algunos momentos que han servido de impulso en este desarrollo.
    
    .tarjeta.color-linea-tiempo-c.p-4.mb-5
      LineaTiempoC.color-acento-botones(text-small)
        .row.justify-content-around.align-items-center(titulo="Inicio")
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T2/img-3.png', alt='Texto que describa la imagen')

          .col-md-6.mb-4.mb-md-0
            p Antes de que existiera el proceso de impresión tridimensional o (3D) las piezas o los prototipos se tallaban en madera o se pegaban con trozos de plástico o cartón; lo que implicaba invertir mucho tiempo y además podía tardar varios días o incluso semanas en hacerse; por ende, era común que su precio fuera muy costoso.
        
        .row.justify-content-around.align-items-center(titulo="Funciones <br>básicas")
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T2/img-4.png', alt='Texto que describa la imagen')

          .col-md-6.mb-4.mb-md-0
            p El autor de ciencia ficción Arthur Clarke fue uno de los primeros en describir las diferentes funciones a nivel básico de una impresora tipo 3D en el año 1964.

        .row.justify-content-around.align-items-center(titulo="Primera <br>impresora 3D")
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T2/img-5.png', alt='Texto que describa la imagen')

          .col-md-6.mb-4.mb-md-0
            p La historia cuenta que la primera impresora 3D fue lanzada en el año 1987 gracias a la empresa 3D <i>Systems</i> y para ese tiempo se utilizaba el proceso de «estereolitografía» (SLA) que perdura en la actualidad.

        .row.justify-content-around.align-items-center(titulo="Otras <br>tecnologías")
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T2/img-6.png', alt='Texto que describa la imagen')

          .col-md-6.mb-4.mb-md-0
            p En lo que respecta a los años 1900 y 2000 se lanzaron otras impresoras 3D con distintas tecnologías, en la empresa <i>Stratasys</i> y de la empresa 3D <i>System</i>; en esa época estas máquinas tenían un costo alto y su utilización era principalmente en el área de la creación de prototipos de tipo industrial.

        .row.justify-content-around.align-items-center(titulo="Fabricación <br>aditiva")
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T2/img-7.png', alt='Texto que describa la imagen')

          .col-md-6.mb-4.mb-md-0
            p En el año 2009 se publicó un documento con la terminología general sobre fabricación aditiva y en este se estableció la impresión 3D como una tecnología de fabricación de tipo industrial.

        .row.justify-content-around.align-items-center(titulo="Impresoras de <br>mesa")
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T2/img-8.png', alt='Texto que describa la imagen')

          .col-md-6.mb-4.mb-md-0
            p Después del año 2009 nacieron las primeras impresoras 3D de mesa que eran de bajo costo.

        .row.justify-content-around.align-items-center(titulo="Crecimiento")
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T2/img-9.png', alt='Texto que describa la imagen')

          .col-md-6.mb-4.mb-md-0
            p En los años subsiguientes, la adopción de la impresión 3D sigue creciendo y entre 2015 y 2017 ya que se vendieron más de un millón de impresoras 3D de mesa en todo el mundo y las ventas de impresoras industriales tipo (metal) se duplicaron en 2017 respecto al año inmediatamente anterior.
          

</template>

<script>
export default {
  name: 'Tema2',
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
