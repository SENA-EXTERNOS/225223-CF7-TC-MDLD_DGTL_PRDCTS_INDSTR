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
      
      Separador

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
    p.mb-5 
      i.fas.fa-circle.text-small.cac.me-2
      b Ventajas de las impresoras 3D

    p.mb-5 Las ventajas principales que tienen las impresoras 3D según sus fabricantes son las que se muestran a continuación. 


    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/T2/img-10.svg', alt='Texto que describa la imagen')
        h4.text-center Ventaja 1
        p Las impresoras 3D son hasta 10 veces más rápidas que otros métodos.
      .col-md.tarjeta.color-cuadros.p-5.text-white
        .row.justify-content-around.align-items-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/T2/img-11.svg', alt='Texto que describa la imagen')
        h4.text-center Ventaja 2
        p Las impresoras 3D son 5 veces más económicas.
        
    .row.justify-content-around.align-items-center
      .col-md-6.mb-4.mb-md-0
        p Estas prestaciones hacen que las impresoras 3D sean asequibles para las personas que necesitan prototipos de manera rápida, lo que antes podía tardar días ahora solo toma algunas horas. Otro aspecto fundamental es que son seguras, pequeñas, muy intuitivas en su uso y confiables en cuanto a la calidad de lo que se imprime. Estas características o ventajas han hecho que cada vez sean más populares en lugares como los escuelas o laboratorios de ingeniera en las universidades y en la cultura <i>Maker</i>.
      .col-md-6
        figure
          img(src='@/assets/curso/temas/T2/img-12.png', alt='Texto que describa la imagen')
          
    Separador


    #t_2_2.titulo-segundo.color-acento-botones
      h2 2.2 Conceptos básicos de la impresión 3D

    .row.justify-content-around.align-items-center
      .col-md-2
        figure
          img(src='@/assets/curso/temas/T2/img-13.svg', alt='Texto que describa la imagen')
      .col-md-9.mb-4.mb-md-0
        p.mb-2 Según lo anterior, las impresoras 3D utilizan los programas informáticos o software de diseño asistido por ordenador (CAD), para así realizar o diseñar los objetos tipo 3D, esto para posteriormente realizar la impresión con diversos materiales.
        p.mb-5 Para entender los conceptos básicos de una impresora 3D regular se debe entender que:


    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.config-slyder-f.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/T2/img-14.svg' alt='AvatarTop')
        p.text-center La impresora 3D es muy parecida al funcionamiento que tiene una impresora tipo inyección de tinta.

      .tarjeta.config-slyder-f.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/T2/img-14.svg' alt='AvatarTop')
        p.text-center Es manejada o recibe órdenes que se dan desde un computador.

      .tarjeta.config-slyder-f.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/T2/img-14.svg' alt='AvatarTop')
        p.text-center Al imprimir la maquina construye un modelo en tercera dimensión por capas consecutivas; iniciando en la parte de abajo y terminando en la parte de arriba.

      .tarjeta.config-slyder-f.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/T2/img-14.svg' alt='AvatarTop')
        p.text-center Estas impresiones se realizan de manera repetida sobre la misma zona, con un método conocido como el método de modelado de deposición fundida (FDM).
      
    .col-md-10.mx-auto.mb-5
      .cajon.color-acento-contenido.p-4.color-celeste
        p.mb-0 Al darle la orden por medio de un computador a la impresora para que realice la impresión, esta lo hace de manera automática e ininterrumpida; de esta manera, crea un modelo en el que se invierten varias horas para su realización y convierte así un dibujo realizado en un sistema (CAD) en 3D. Todo lo anterior, soportado sobre infinidad de capas, lo que quiere decir que son impresiones de tipo 2D separadas donde se colocan una encima de otra, pero sin el papel en medio de ellas.

    TabsC.color-primario
      .py-3.py-md-4(titulo="<b>Materiales</b>")
        .row.justify-content-center.align-items-center
          .col-md-4
            figure
              img(src='@/assets/curso/temas/T2/img-15.png', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            p Es importante resaltar que las impresoras 3D no utilizan tinta, en vez de eso hacen uso de recursos como el plástico, con el cual, por dar un ejemplo, en el proceso de impresión se deposita en capas y se fusiona a la estructura que se está formando con luz ultravioleta o adhesivo.

      .py-3.py-md-4(titulo="<b>Flexibilidad</b>")
        .row.justify-content-center.align-items-center
          .col-md-4
            figure
              img(src='@/assets/curso/temas/T2/img-16.png', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            p Estas impresoras cuentan con una gran flexibilidad, ya que se pueden imprimir materiales rígidos como lo puede ser unas gafas de sol o como también podrían ser objetos flexibles tales como mangos para bicicleta y fundas de teléfono; por último, hay algunas impresoras que pueden imprimir productos de tipo industrial muy resistentes.
        
    Separador


    #t_2_3.titulo-segundo.color-acento-botones
      h2 2.3 Proceso para la impresión de una pieza 3D

    p.mb-5 Profundicemos un poco más sobre cada uno de los pasos durante el proceso de la impresión de una pieza 3D, en la siguiente infografía.
      

    ImagenInfograficaB.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/T2/img-17.svg', alt='Texto que describa la imagen')

      div(x="9.9%" y="105%" )
        p.mb-3 Lo primero que se realiza es crear un archivo digital (3D) del objeto que se desea imprimir; para ello, se utiliza un <i>software</i> CAD (Diseño asistido por computador). En el mercado hay gran variedad de <i>software</i> de tipo profesional y de un nivel básico que generan archivos compatibles con las impresoras 3D. 
        p.mb-3 A continuación, se enuncian 3 métodos que se pueden utilizar para obtener este archivo digital:
          p 
            i.fas.fa-circle.cad.me-2.text-small
            strong.cp Por medio del Diseño: 
            | El cual se realiza gracias a los <i>softwares</i> de modelado 3D, como son <i>SolidWorks</i>, <i>Blender</i>, <i>SketchUp</i>, <i>AutoCad</i>, Maya, <i>PhotoShop</i>, <i>ThinkerCad</i> entre otros; cabe rescatar que casi todos los programas de modelamiento 3D tienen la característica de utilizarse para crear un archivo imprimible en impresoras 3D.

          p 
            i.fas.fa-circle.cad.me-2.text-small
            strong.cp Cuando se realiza un escaneado:  
            | Este se hace por medio de escaneo 3D; se recuerda que esta es una tecnología que analiza un objeto real y crea una réplica digital. Este tipo de escaneado 3D se utiliza para tareas de ingeniería (inversa). Una vez digitalizado el objeto, se tiene la posibilidad de modificarlo antes de realizar la impresión 3D. 

          p 
            i.fas.fa-circle.cad.me-2.text-small
            strong.cp Descargar archivos compatibles con la impresión 3D: 
            | Para esto se pueden visitar diferentes páginas web como <i>YouMagine</i>, <i>CrabCad</i>, <i>MyMinifactory</i>, <i>Thingivers</i> y <i>Shapeways</i>, ya sea para descargar o comprar archivos que otros usuarios han publicado y modelado; casi siempre estos archivos están listos para realizar la impresión 3D.
        p.mb-5 Existen algunos requerimientos para el diseño de los archivos 3D que tienen que cumplirse antes de la impresión, ya que se deben tener en cuenta aspectos como el grosor mínimo de las paredes, el tamaño adecuado de la escala y la estanqueidad (propiedad basada en la capacidad para que no penetren determinadas partículas).


      div(x="26%" y="15%")
        p.mb-3 Antes de enviarlo a la impresora hay que convertir el archivo en un formato que la impresora lo acepte de manera adecuada; el formato o archivo para las impresoras (3D) más común se llama STL, que significa <i>StereoLithography</i>. Es importante recordar que STL es el nombre de la extensión de archivo que se utiliza, hay otras alternativas de extensión de archivos fuera del STL, como son 3MF y OBJ. 
        p.mb-5 Hay que aclarar que estos formatos de archivo no tienen información de color, por esta razón si se desea imprimir color en 3D es necesario tener formatos de archivo como WRL, .X3D, DAE, PLY.

      div(x="42%" y="105%")
        p Este es el proceso que consta de traducir el archivo 3D en varias instrucciones para que la impresora 3D lo genere, es decir que consiste en dividir o cortar este modelo en cientos de capas horizontales para que así la máquina determine con exactitud lo que debe hacer. Después de hacer esta división se genera en nuevo formato de archivo llamado G-code, con la extensión GCODE, este es el lenguaje de programación de código numérico más usual en la fabricación asistida por ordenador para controlar máquinas y herramientas automatizadas como lo son las impresoras 3D y las máquinas CNC (controles numéricos por ordenador); es decir que este código G es el lenguaje de la máquina y por ello se utiliza para comunicarse con ella y realice lo que se le ordena.

      div(x="59%" y="15%")
        p Las impresoras 3D están conformadas por varias piezas móviles o estáticas; ellas necesitan mantenimiento y una buena calibración para así producir impresiones de manera satisfactoria. La mayoría de estas (impresoras 3D) no necesitan que alguien este para supervisar la impresión, esta máquina seguirá las instrucciones de manera automatizada, según corresponda al código G; es decir que mientras no haya un error en el <i>software</i> o se quede sin filamento (materia prima) no debe haber ningún pare o <i>stop</i> durante el proceso de la impresión.

      div(x="74.5%" y="105%")
        p La extracción varía, según las diferentes tecnologías que contenga la impresión 3D, en algunos casos, como por ejemplo en las impresoras de mesa, es tan sencillo como separar la impresión de la plataforma de construcción; por otro lado, en el caso de las impresoras 3D industriales, la extracción de la pieza es un proceso tipo técnico que requiere habilidades o capacitación de tipo profesional y de equipos especializados, todo esto en un entorno controlado. 

      div(x="91%" y="15%")
        p.mb-3 Este último paso variará, según las tecnologías de impresión 3D que se tengan y los materiales con los que se imprimieron las piezas u objetos. Algunas tecnologías permiten manipular las piezas de inmediato, mientras que otras requieren de algunos pasos adicionales para finalizar el proceso de fabricación. Este paso es importante para la función de las piezas y la estética de la misma.
        p.mb-5 Es muy usual que las piezas impresas en 3D salgan con una contextura rugosa que no es perfecta al tacto con su superficie; esto se mejora de manera significativa con artesanía y con las técnicas pertinentes mediante la pintura, el pulido, el lijado y otros métodos que hacen que las piezas impresas se conviertan en un modelo real muy cercano al original. Así mismo, hay variantes cuando no se trata de la estética, sino de las propiedades mecánicas de la pieza que pueden tener lugar en procesos industriales para el post- procesamiento; en general este paso puede ser una operación que requiera mucho tiempo y sea crítica y a medida que la tecnología va evolucionando la automatización de esos pasos se va generando.

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
