<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Tipos de materiales y características

    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/temas/T3/img-1.png', alt='Texto que describa la imagen')
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p Los materiales que se utilizan en este tipo de impresión denominada 3D están debidamente relacionados con el mismo proceso de la impresión; en este punto se abordarán los materiales más tradicionales o comunes que se utilizan en este momento en la impresión 3D y sus características más importantes; con ello, es importante aclarar que cada proceso de impresión es compatible con una gama variada de materiales.
              br
              br
              | Los materiales más utilizados para la impresión 3D son:

    
    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/T3/img-2.svg' alt='AvatarTop')
          .tarjeta.color-tar-avatar
            .text-black.p-4
              p.text-center Plásticos. 

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/T3/img-2.svg' alt='AvatarTop')
          .tarjeta.color-tar-avatar
            .p-4
              p.text-center Metales.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/T3/img-2.svg' alt='AvatarTop')
          .tarjeta.color-tar-avatar
            .p-4
              p Polvo.
        
    p.mb-5 
      i.fas.fa-circle.text-small.cac.me-2
      b Plásticos

    .row.justify-content-center.mb-3
      .col-8
        TabsA.color-acento-contenido.mb-5      
          .tarjeta.color-acento-botones--borde.p-4(titulo="Termoplásticos")
            h4 Termoplásticos
            p Estos son los materiales que a temperaturas relativamente altas se vuelven deformables, suelen ser más utilizados para aplicaciones funcionales.
            
          .tarjeta.color-acento-botones--borde.p-4(titulo="Termoestables")
            h4 Termoestables
            p Los cuales se pueden calentar y moldear, pero solo una sola vez nada más, esto corresponde a que si se vuelven a calentar se queman; por ello, suelen ser más utilizados en aplicaciones que se requiere una buena apariencia de tipo visual.  


      .col-3
        figure
          img(src="@/assets/curso/temas/T3/img-3.png", alt="Texto que describa la imagen")

      
    .col-md-10.mx-auto.mb-5
      .cajon.color-acento-botones.p-4
        p.mb-0 Por lo anterior se evidencia, que este tipo de material es <b>ligero</b> y que tiene como formato o aspecto físico el de <b>filamento</b>, contenido en una amplia gama de propiedades físicas, adecuados en especial para fines de creación de prototipos, como para algunas aplicaciones funcionales, los anteriores (materiales) son los más comunes en estos tipos de impresiones.


    TabsC.color-primario.mb-5
      .py-3.py-md-4(titulo="<b>Metales</b>")
        .row.justify-content-center.align-items-center
          .col-md-4
            figure
              img(src='@/assets/curso/temas/T3/img-4.png', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            p Los metales se utilizan en especial en aplicaciones o piezas que por su rendimiento deben ser resistentes, duras o a veces de alta resistencia térmica. Al ser impresa la pieza en metal se mitiga de manera considerable el alto costo de la tecnología que se emplearía, si no hubiera este tipo de impresión debido a que el material se va añadiendo capa a capa a partir del diseño 3D digital resultante; se resalta este hecho porque es de este modo que se construyen piezas con geometrías, imposibles de fabricar con tecnologías habituales como lo es el mecanizado CNC (control número por computadora) o por fundición de metales y descartando con ello, la utilización de un molde para la realización de la pieza.
      
      .py-3.py-md-4(titulo="<b>Polvo</b>")
        .row.justify-content-center.align-items-center
          .col-md-4
            figure
              img(src='@/assets/curso/temas/T3/img-5.png', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            p El polvo se utiliza en las impresoras 3D más actuales o modernas; este material se utiliza para construir productos en los cuales el polvo se funde distribuyéndose en capas hasta conseguir la textura, el grosor y los patrones requeridos. Este tipo de material puede proceder de diversas fuentes y el proceso se concluye con los materiales cerámicos o compuestos, aunque no son muy usuales por el momento en el proceso de impresión 3D.
          
    p.mb-5 Composición y características de los 3 tipos de materiales más usados, representados en la infografía.


    ImagenInfograficaB.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/T3/img-6.svg', alt='Texto que describa la imagen')

      div(x="21.8%" y="92%" tooltip="Plástico")
        .row
          .col-md-2
            figure
              img(src='@/assets/curso/temas/T3/img-7.svg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            p.mb-3 
              p 
                i.fas.fa-circle.cad.me-2.text-small
                strong.cp Filamento PLA:  
                | Es el plástico de impresión 3D más habitual; contiene alta rigidez, buen acabado y es asequible.

              p 
                i.fas.fa-circle.cad.me-2.text-small
                strong.cp Filamento ABS:   
                | Es plástico común, por ende, tiene mejores propiedades térmicas y mecánicas que el PLA.

              p 
                i.fas.fa-circle.cad.me-2.text-small
                strong.cp Filamento de Nylon:  
                | Se utiliza para sustituir piezas (funcionales) y moldeadas por inyección.
            
              p 
                i.fas.fa-circle.cad.me-2.text-small
                strong.cp Filamento PETG:  
                | Ideal para piezas mecánicas resistentes al impacto y flexibilidad.
              
              p 
                i.fas.fa-circle.cad.me-2.text-small
                strong.cp Filamento TPU:  
                | Material similar al caucho, adecuado para piezas como tubos, agarraderas y cierres.

              p 
                i.fas.fa-circle.cad.me-2.text-small
                strong.cp Filamento ASA: 
                | Tiene estabilidad a los rayos UV teniendo alta resistencia química, es un material ideal para aplicaciones en exteriores.

              p 
                i.fas.fa-circle.cad.me-2.text-small
                strong.cp Filamento PEI: 
                | Material de plástico especial para ingeniería (aplicaciones de alto rendimiento).
              
              p 
                i.fas.fa-circle.cad.me-2.text-small
                strong.cp Resina: 
                | Para realizar prototipos de alto nivel en detalle y/o para superficie lisas, muy similar a los moldes de inyección.


      div(x="59%" y="92%" tooltip="Convertir a formato STL")
        .row
          .col-md-2
            figure
              img(src='@/assets/curso/temas/T3/img-8.svg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            p.mb-4 En el proceso de impresión se utilizan metales en aplicaciones que requieren mucha resistencia en el objeto a realizar. En este tipo de trabajo se optimiza la topología (propiedades de los cuerpos geométricos) que es vital para así maximizar el rendimiento de la pieza y reducir el alto costo que se genera. 
            p.mb-3 Entre los metales más conocidos se tienen:
              p 
                i.fas.fa-circle.cad.me-2.text-small
                strong.cp Filamento PLA:  
                | Es el plástico de impresión 3D más habitual; contiene alta rigidez, buen acabado y es asequible.

              p 
                i.fas.fa-circle.cad.me-2.text-small
                strong.cp Acero inoxidable:   
                | Es una aleación metálica de gran resistencia al desgaste y a la corrosión por lo que se puede soldar, mecanizar y pulir fácilmente. 

              p 
                i.fas.fa-circle.cad.me-2.text-small
                strong.cp El metal <i>binder jetting</i> o en su traducción inyección aglutinante:   
                | Es un metal caracterizado en la actualidad por su menor costo.
            
              p 
                i.fas.fa-circle.cad.me-2.text-small
                strong.cp La fusión por haz de electrones o EDM (<i>Electron Beam Melting</i>):
                | Es una tecnología de impresión 3D de metales en donde se utiliza haz de electrones, que está controlado por bobinas electromagnéticas para así fundir el polvo metálico. 

      div(x="97%" y="92%" tooltip="<i>Slicing</i> (Rebanado)")
        .row
          .col-md-2
            figure
              img(src='@/assets/curso/temas/T3/img-9.svg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            p.mb-4 Las impresoras 3D más modernas utilizan este tipo de materiales en polvo para construir los productos o piezas. Los polvos pueden proceder de diversas fuentes como el acero, el cobre y otros tipos de metal que son más fáciles en su transporte y modelamiento, según la forma deseada. Cabe recordar que el polvo metálico debe calentarse hasta el punto en que se funda y se pueda distribuir capa por capa de manera uniforme, para así formar la figura de manera total.
              p 
                i.fas.fa-circle.cad.me-2.text-small
                strong.cp Alumide:   
                | Polvo resultante de la mezcla de aluminio gris y poliamida; este tipo de polvo permite crear modelos (algunos) impresos en 3D más resistentes. Su aspecto es arenoso y granulado, por lo anterior este es confiable para prototipos y / o modelos industriales.

              p 
                i.fas.fa-circle.cad.me-2.text-small
                strong.cp Poliamida (Nylon):   
                | Este polvo es flexible y resistente, además permite muy buen nivel de detalle del producto impreso; por ello es adecuado para encajar partes y unir piezas y en un modelo impreso (3D). La poliamida se utiliza para imprimir diversos productos; desde manija de automóviles, figuras de juguete y cierres.



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
