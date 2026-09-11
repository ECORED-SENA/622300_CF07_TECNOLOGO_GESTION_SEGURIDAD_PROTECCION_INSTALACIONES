<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Fundamentos de riesgos, amenazas y vulnerabilidades en instalaciones de seguridad privada
      p(data-aos="fade-left") La identificación y evaluación de los riesgos es un proceso esencial en la seguridad privada, ya que permite reconocer las condiciones que pueden afectar la protección de las personas, los bienes, la información y las instalaciones. Para ello, es necesario comprender las características de las instalaciones abiertas y cerradas, así como los conceptos de riesgo, vulnerabilidad, amenaza, peligro e incidente, y los niveles de riesgo, con el fin de analizar los escenarios de seguridad y definir las medidas de prevención y control más apropiadas para cada situación.
      Separador
      //- Inicio Tema4.1
      .row
        #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.1 Riesgo: tipos, clases y características
      p(data-aos="fade-left") En este apartado se amplía el concepto técnico de riesgo desarrollado anteriormente, profundizando en sus tipos, clases y características principales. Estos elementos constituyen la base para comprender los procesos de evaluación, priorización y mitigación aplicados en la gestión del riesgo.
      p(data-aos="fade-left") Se abordarán los riesgos de tipo operativo, técnico, humano y ambiental, así como su clasificación según el nivel de criticidad y características como la frecuencia, la severidad y la posibilidad de control. Estos conocimientos permiten al personal de seguridad comprender la importancia de identificar, evaluar y gestionar los riesgos antes de que se materialicen. Como complemento de este contenido, se propone revisar el siguiente video: 
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/OfhQNEyIxns?si=-y8zYvd2e_Xc83yC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      p(data-aos="fade-left") Los riesgos pueden clasificarse desde diferentes perspectivas, según su origen, el ámbito donde se presentan y el nivel de impacto que generan.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Según su origen y naturaleza
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Esta clasificación permite identificar el origen de los riesgos y comprender cómo pueden afectar la operación:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t4/tarjeta01_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Riesgos naturales
                p Se originan por fenómenos ambientales o geológicos, como sismos, inundaciones, deslizamientos o vendavales. Por ejemplo, una instalación ubicada cerca de un río presenta mayor riesgo de inundación y requiere medidas de mitigación específicas.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta01_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Riesgos tecnológicos
                p Se derivan de fallas en equipos, redes eléctricas, sistemas de comunicación o sistemas de vigilancia. Un fallo del sistema de CCTV durante la noche incrementa la probabilidad de una intrusión.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta01_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Riesgos humanos o sociales
                p Están asociados a actos intencionales, como hurtos, vandalismo, sabotaje o alteraciones del orden público, así como a errores operativos cometidos por el personal de vigilancia o los colaboradores de la organización.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta01_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Riesgos operativos
                p Se producen por fallas en los procesos internos, deficiencias en los procedimientos, errores humanos, insuficiente capacitación o fallas en los sistemas utilizados durante la operación.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta01_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Riesgos financieros
                p Están relacionados con pérdidas económicas ocasionadas por variaciones del mercado, incumplimiento de obligaciones financieras o falta de liquidez.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta01_6.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Riesgos reputacionales
                p Corresponden al deterioro de la imagen institucional debido a publicidad negativa, escándalos o una percepción desfavorable por parte de clientes, usuarios o la comunidad.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta01_7.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Riesgos legales
                p Se originan por el incumplimiento de la legislación vigente o de las obligaciones normativas aplicables a la organización, lo que puede generar sanciones, multas o la pérdida de autorizaciones para operar.
      //- Fin Slideshow
      p(data-aos="fade-left") Cada uno de estos riesgos requiere medidas de prevención y control acordes con su naturaleza y con el nivel de exposición de la organización.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Según el ámbito específico
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Otra forma de clasificar los riesgos consiste en analizar el ámbito en el que se presentan y los factores que pueden afectar directamente a las personas o a la operación:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-6.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t4/tarjeta02_1.png", alt="").img400.m-auto
          .col-lg-6
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Riesgos físicos")
                p.mb-4 Se relacionan con condiciones ambientales como ruido, vibraciones, temperaturas extremas, radiaciones o iluminación inadecuada, que pueden afectar la salud y el desempeño del personal.
              .row(titulo="Riesgos químicos")
                p.mb-4 Se originan por la exposición a sustancias peligrosas, como gases, líquidos, vapores o polvos capaces de causar afectaciones por inhalación, ingestión o contacto.
              .row(titulo="Riesgos biológicos")
                p.mb-4 Corresponden a la exposición a virus, bacterias, hongos, parásitos u otros microorganismos presentes en determinados ambientes de trabajo.
      //- Fin Accordion 1            
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center          
          .col-lg-6
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Riesgos ergonómicos")
                p.mb-4 Se generan por posturas inadecuadas, movimientos repetitivos, manipulación manual de cargas o diseños deficientes del puesto de trabajo que afectan el sistema musculoesquelético.
              .row(titulo="Riesgos psicosociales")
                p.mb-4 Están relacionados con factores organizacionales como el estrés laboral, la sobrecarga de trabajo, la falta de apoyo, el acoso o la violencia en el entorno laboral.
              .row(titulo="Riesgos mecánicos")
                p.mb-4 Se derivan del uso de maquinaria, herramientas o equipos que pueden ocasionar golpes, cortes, atrapamientos u otros accidentes.
          .col-lg-6.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t4/tarjeta02_2.png", alt="").img400.m-auto                
      //- Fin Accordion 1
      p(data-aos="fade-left") El reconocimiento de estos riesgos facilita la implementación de medidas preventivas orientadas a proteger la salud y la seguridad de los trabajadores.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Según su nivel de impacto y probabilidad
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") La clasificación según el nivel de impacto y probabilidad permite establecer prioridades para la gestión del riesgo y orientar la asignación de recursos:
      //- Inicio Tarjetas
      .row.justify-content-center(data-aos="fade-left")
        .col-12.col-sm-6.col-lg-4.mb-4
          .tarjeta--boton.color-primario.rounded-4.p-4.h-100.d-flex.flex-column.align-items-center.text-center
            figure.mb-4
              img.mx-auto(src='@/assets/curso/temas/t4/tarjeta03_1.svg', alt='', style="width: 90px;")
            .flex-grow-1.d-flex.flex-column.justify-content-center
              h4.mb-3 Alto o máximo
              p.mb-0 Presenta una alta probabilidad de ocurrencia y/o un impacto significativo sobre las personas, los bienes o la operación. Requiere intervención inmediata.
        .col-12.col-sm-6.col-lg-4.mb-4
          .tarjeta--boton.color-primario.rounded-4.p-4.h-100.d-flex.flex-column.align-items-center.text-center
            figure.mb-4
              img.mx-auto(src='@/assets/curso/temas/t4/tarjeta03_2.svg', alt='', style="width: 90px;")
            .flex-grow-1.d-flex.flex-column.justify-content-center
              h4.mb-3 Medio
              p.mb-0 Registra una probabilidad y un impacto moderados. Debe gestionarse mediante controles específicos y seguimiento periódico.
        .col-12.col-sm-6.col-lg-4.mb-4
          .tarjeta--boton.color-primario.rounded-4.p-4.h-100.d-flex.flex-column.align-items-center.text-center
            figure.mb-4
              img.mx-auto(src='@/assets/curso/temas/t4/tarjeta03_3.svg', alt='', style="width: 90px;")
            .flex-grow-1.d-flex.flex-column.justify-content-center
              h4.mb-3 Bajo o mínimo
              p.mb-0 Tiene baja probabilidad de ocurrencia y un impacto reducido. Generalmente requiere monitoreo y mantenimiento de los controles existentes.
      //- Fin Tarjetas
      p(data-aos="fade-left") Esta clasificación facilita la priorización de las acciones de prevención y mitigación dentro de la organización.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Características del riesgo
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Todo riesgo presenta características que permiten comprender su comportamiento y valorar sus posibles consecuencias. Conocer estos atributos facilita el análisis y la toma de decisiones durante la gestión del riesgo: 
      .row.bg-fondo-1(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Carrusel
            .bg-full-width
              .px-4.px-md-5.pb-md-3
                .carousel-bg
                  .row.justify-content-center.mb-5.align-items-center
                    .col-lg-8.mb-3.mb-lg-0.order-lg-2
                      SlyderF(columnas="col-xl-6 col-lg-6 col-md-6 col-12")                        
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta04_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Incertidumbre o aleatoriedad
                            p.text-center Existe incertidumbre sobre la ocurrencia del evento, el momento en que puede presentarse y la magnitud de sus consecuencias.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta04_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Posibilidad de ocurrencia
                            p.text-center El evento debe tener una probabilidad real de suceder, aunque no exista certeza sobre su materialización.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta04_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Concreción
                            p.text-center El riesgo debe corresponder a un evento claramente identificable y delimitado.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta04_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Licitud
                            p.text-center Debe analizarse dentro del marco de actividades permitidas por la ley y el ordenamiento jurídico.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta04_5.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Carácter fortuito
                            p.text-center Se presenta como consecuencia de circunstancias no previstas y no por acciones deliberadas del afectado.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta04_6.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Contenido económico
                            p.text-center Su materialización puede generar pérdidas o consecuencias susceptibles de valoración económica.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta04_7.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Fuente e impacto
                            p.text-center Todo riesgo tiene un origen interno o externo y produce efectos que pueden afectar a las personas, los bienes, los procesos o la organización.
                    .col-lg-4.order-lg-1.d-none.d-lg-block
                        figure
                          img(src='@/assets/curso/temas/t4/img1.png', style="width: 280px", data-aos="zoom-in").m-auto
              //- Fin Carrusel
      p(data-aos="fade-left") Además de estas características, todo riesgo se analiza a partir de tres elementos fundamentales.
      //- Inicio Tarjetas
      .row.justify-content-center(data-aos="fade-left")
        .col-12.col-sm-6.col-lg-4.mb-4
          .tarjeta--boton.color-primario.rounded-4.p-4.h-100.d-flex.flex-column.align-items-center.text-center
            figure.mb-4
              img.mx-auto(src='@/assets/curso/temas/t4/tarjeta05_1.svg', alt='', style="width: 90px;")
            .flex-grow-1.d-flex.flex-column.justify-content-center
              h4.mb-3 Probabilidad
              p.mb-0 Posibilidad de que el evento ocurra.
        .col-12.col-sm-6.col-lg-4.mb-4
          .tarjeta--boton.color-primario.rounded-4.p-4.h-100.d-flex.flex-column.align-items-center.text-center
            figure.mb-4
              img.mx-auto(src='@/assets/curso/temas/t4/tarjeta05_2.svg', alt='', style="width: 90px;")
            .flex-grow-1.d-flex.flex-column.justify-content-center
              h4.mb-3 Impacto
              p.mb-0 Magnitud de las consecuencias o pérdidas que puede ocasionar la materialización del riesgo.
        .col-12.col-sm-6.col-lg-4.mb-4
          .tarjeta--boton.color-primario.rounded-4.p-4.h-100.d-flex.flex-column.align-items-center.text-center
            figure.mb-4
              img.mx-auto(src='@/assets/curso/temas/t4/tarjeta05_3.svg', alt='', style="width: 90px;")
            .flex-grow-1.d-flex.flex-column.justify-content-center
              h4.mb-3 Exposición
              p.mb-0 Tiempo o frecuencia con que un activo, proceso o persona permanece expuesto al riesgo.
      //- Fin Tarjetas
      p.mb-3(data-aos="fade-left") Después de implementar las medidas de control, siempre puede permanecer un nivel de riesgo conocido como <b>riesgo residual</b>, el cual requiere seguimiento permanente y actualización continua de las matrices de riesgo para garantizar la eficacia de los controles implementados.      
      .row.justify-content-center.align-items-stretch.mb-5.g-0(data-aos="fade-right")
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t4/img2.png', alt='', style="object-fit: cover;")
        .col-lg-7.bg-color-2.d-flex.flex-column.justify-content-center.p-4
          p.fw-bold.mb-2 Ejemplo
          p.mb-3 Durante una inspección, un vigilante identifica que el portón de carga de una empresa de transporte ubicada en Soacha presenta fallas en el sistema de cierre. Esta condición incrementa la probabilidad de un acceso no autorizado y eleva el riesgo de pérdida de vehículos o mercancías. 
          p Tras el análisis, el riesgo se clasifica como alto, debido a la combinación entre la vulnerabilidad existente y el impacto potencial sobre la operación. Como medida de control, se decide reforzar el sistema de acceso e implementar inspecciones semanales para verificar el funcionamiento del portón y prevenir nuevas fallas.
      Separador
      //- Inicio Tema4.2
      .row
        #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.2 Vulnerabilidad: tipos, clases y características
      p(data-aos="fade-left") La vulnerabilidad corresponde al grado de exposición o debilidad que presenta un activo, un sistema, un proceso o una persona frente a una amenaza. En el contexto de la seguridad privada, representa la condición que facilita la materialización del riesgo y aumenta la probabilidad de que un evento afecte la operación. Su identificación permite establecer medidas preventivas orientadas a reducir la exposición y fortalecer los mecanismos de protección.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Tipos de vulnerabilidad
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Las vulnerabilidades pueden clasificarse según el origen de las debilidades identificadas dentro de una organización: 
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
        TabsC.color-acento-contenido.mt-1
          .py-3.py-md-4(titulo="Estructural")
            .row.align-items-center
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta06_1.png')
              .col-md-6.mb-4.mb-md-0
                h4 Estructural
                p Corresponde a deficiencias físicas en la infraestructura, como muros deteriorados, puertas sin cerraduras adecuadas o cerramientos insuficientes.
          .py-3.py-md-4(titulo="Tecnológica")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta06_2.png')
              .col-md-6
                h4 Tecnológica
                p Se relaciona con fallas en equipos, sistemas de monitoreo, alarmas, redes de comunicación o con la obsolescencia tecnológica.
          .py-3.py-md-4(titulo="Administrativa o procedimental")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta06_3.png')
              .col-md-6
                h4 Administrativa o procedimental
                p Se presenta por ausencia de procedimientos, controles insuficientes, bitácoras incompletas o incumplimiento de protocolos de seguridad.
          .py-3.py-md-4(titulo="Humana")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta06_4.png')
              .col-md-6
                h4 Humana
                p Está asociada con la falta de capacitación, exceso de confianza, negligencia o incumplimiento de las funciones por parte del personal.
          .py-3.py-md-4(titulo="Contextual")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta06_5.png')
              .col-md-6
                h4 Contextual
                p Se origina en las condiciones del entorno, como la ubicación de la instalación en zonas con altos índices de inseguridad o limitada presencia institucional.
      //- Cierres Pestanas horizontales
      p(data-aos="fade-left") El reconocimiento de estas vulnerabilidades permite orientar las acciones de mejora hacia los aspectos que presentan mayores debilidades.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Clases de vulnerabilidad
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Además de su origen, las vulnerabilidades pueden analizarse según la dimensión en la que afectan a una organización o comunidad:      
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t4/tarjeta07_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Física
                p Está relacionada con la ubicación, la infraestructura y las condiciones materiales de la instalación.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta07_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Social
                p Comprende factores demográficos y sociales que limitan la capacidad de respuesta, como edad, nivel educativo, exclusión social o acceso limitado a servicios esenciales.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta07_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Económica
                p Se asocia con la disponibilidad de recursos financieros, el desempleo, la pobreza o la dependencia de actividades vulnerables a interrupciones.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta07_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Ambiental o ecológica
                p Corresponde a la fragilidad de los ecosistemas y de los recursos naturales frente a fenómenos que alteran su equilibrio.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta07_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Institucional o política
                p Se relaciona con debilidades en la gobernanza, ausencia de políticas de prevención, deficiencias en la gestión del riesgo o sistemas de respuesta insuficientes.
      //- Fin Slideshow
      p(data-aos="fade-left") Estas clases permiten comprender que la vulnerabilidad no depende únicamente de la infraestructura, sino también de factores sociales, económicos, ambientales e institucionales.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Vulnerabilidades naturales y provocadas
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Las vulnerabilidades también pueden diferenciarse según el origen de los factores que las generan:      
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Tabla
            .row.justify-content-center.mb-5
              .col-md-auto.col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 2.
                  span Vulnerabilidades naturales y provocadas
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 10%") Aspecto
                        th(style="width: 45%") Vulnerabilidades naturales
                        th(style="width: 45%") Vulnerabilidades provocadas
                    tbody
                      tr
                        td Origen
                        td Se relacionan con fenómenos naturales como terremotos, inundaciones, sequías, erupciones volcánicas o huracanes.
                        td Se derivan de actividades humanas, como contaminación, deterioro urbano, pobreza o violencia.
                      tr
                        td Características
                        td Están condicionadas por la ubicación geográfica y las condiciones climáticas de una región.
                        td Son consecuencia del desarrollo urbano, la distribución de recursos, las decisiones administrativas o las políticas públicas.
                      tr
                        td Ejemplo
                        td Un deslizamiento en una zona montañosa.
                        td La ausencia de servicios básicos en un sector urbano que incrementa el riesgo de enfermedades.
                      tr
                        td Interacción
                        td Pueden agravarse cuando existen vulnerabilidades provocadas, como asentamientos en zonas de alto riesgo.
                        td Pueden incrementar los efectos de fenómenos naturales al reducir la capacidad de respuesta de la población o de la infraestructura.
            //- FinTabla
            p(data-aos="fade-left") Comprender la interacción entre ambos tipos de vulnerabilidad facilita la implementación de estrategias preventivas más integrales.            
            .row.justify-content-center.align-items-stretch.g-0(data-aos="fade-right")
              .col-lg-5.d-flex
                figure.mb-0.w-100
                  img.h-100.w-100(src='@/assets/curso/temas/t4/img3.png', alt='', style="object-fit: cover;")
              .col-lg-7.bg-color-2.d-flex.flex-column.justify-content-center.p-4
                p.fw-bold.mb-2 Ejemplo
                p En un conjunto residencial ubicado en una zona montañosa de Medellín se detecta una filtración de agua en el cuarto de control eléctrico. Aunque la lluvia constituye un fenómeno natural, la vulnerabilidad corresponde a la falta de sellado en las paredes. Si esta condición no se corrige oportunamente, puede ocasionar un cortocircuito e incluso un incendio.
      Separador
      //- Inicio Tema4.3
      .row
        #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.3 Amenazas: tipos, clases y características
      p(data-aos="fade-left") Una amenaza es cualquier factor, agente o situación con capacidad para causar daños a las personas, los bienes, la información o las operaciones de una organización. En seguridad privada, las amenazas pueden tener origen natural, humano o tecnológico y afectar tanto el entorno físico como los sistemas de información. Su identificación constituye una etapa fundamental dentro de la gestión del riesgo, ya que permite establecer medidas de prevención, protección y respuesta acordes con las características del entorno.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Tipos de amenazas
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Las amenazas pueden clasificarse según su origen, lo que facilita comprender su comportamiento y definir las estrategias de control más apropiadas:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Naturales")
                p.mb-4 Se originan por fenómenos del entorno físico, como sismos, inundaciones, huracanes, incendios forestales o deslizamientos. Son eventos no intencionales y, en la mayoría de los casos, imposibles de controlar.
              .row(titulo="Antrópicas (de origen humano)")
                p.mb-4 Son consecuencia de acciones humanas deliberadas o negligentes. Incluyen hurtos, vandalismo, terrorismo, sabotaje, intrusiones y otros actos que afectan la seguridad de la organización.
              .row(titulo="Tecnológicas")
                p.mb-4 Se producen por fallas técnicas o por ataques dirigidos contra los sistemas tecnológicos, como ciberataques, manipulación de equipos electrónicos o interrupciones de los servicios tecnológicos.
              .row(titulo="Mixtas")
                p.mb-4 Resultan de la combinación de factores humanos y tecnológicos, como el sabotaje de sistemas de alarma o la manipulación de plataformas de seguridad mediante herramientas informáticas.
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t4/img4.png", alt="").img400.m-auto
      //- Fin Accordion 1
      p(data-aos="fade-left") Cada tipo de amenaza requiere controles específicos según su naturaleza y el nivel de exposición de la organización.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Clases de amenazas
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Las amenazas también pueden clasificarse según su intencionalidad, su origen o el ámbito donde producen sus efectos:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Tabla
            .row.justify-content-center.mb-5
              .col-md-auto.col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 3.
                  span Clases de amenazas
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 10%") Aspecto
                        th(style="width: 45%") Vulnerabilidades naturales
                        th(style="width: 45%") Vulnerabilidades provocadas
                    tbody
                      tr
                        td Intencionadas o maliciosas
                        td Son acciones deliberadas orientadas a causar daño, obtener beneficios ilícitos o interrumpir las operaciones.
                        td Hurto, robo, vandalismo, terrorismo, extorsión, fraude o estafa.
                      tr
                        td No intencionadas o accidentales
                        td Se originan por errores humanos, negligencia o falta de capacitación, sin existir intención de causar daño.
                        td Errores operativos, divulgación accidental de información confidencial o accidentes laborales.
                      tr
                        td Internas
                        td Provienen de personas con acceso autorizado a la organización, como empleados, contratistas o proveedores.
                        td Espionaje corporativo, uso indebido de recursos, manipulación no autorizada de información o descuido frente a ataques de <i>phishing.</i>
                      tr
                        td Externas
                        td Son ejecutadas por personas u organizaciones ajenas a la entidad.
                        td Intrusiones físicas, ataques informáticos, robo, sabotaje o ataques de denegación de servicio (DDoS).
                      tr
                        td Cibernéticas o digitales
                        td Afectan los sistemas de información, las redes y los datos institucionales.
                        td <i>Phishing, malware, ransomware,</i> virus informáticos o explotación de vulnerabilidades del <i>software.</i>
                      tr
                        td Físicas
                        td Comprometen la integridad de las personas, las instalaciones o los bienes materiales.
                        td Intrusiones, incendios, daños a la infraestructura o sabotaje de instalaciones.
            .row.justify-content-center.align-items-center        
              .col-12.col-sm-9.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
                figure.mb-0.text-center
                  img.mx-auto(src='@/assets/curso/temas/t4/img5.png', alt='', style="width: 600px;")
              .col-12.col-lg-7.order-2.order-lg-1.p-4(data-aos="fade-left")
                p.mb-3 La identificación de estas amenazas permite establecer medidas de prevención acordes con el nivel de exposición y las necesidades de protección de cada organización.
                p La gestión de amenazas debe complementarse con el análisis de vulnerabilidades y la implementación de medidas preventivas, entre ellas sistemas de control de acceso, videovigilancia, soluciones de ciberseguridad, procedimientos operativos y programas permanentes de capacitación del personal. Estas acciones fortalecen la capacidad de prevención, reducen la probabilidad de incidentes y mejoran la respuesta frente a eventos que puedan afectar la seguridad de la organización.
      Separador
      //- Inicio Tema4.4
      .row
        #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.4 Peligro: tipos, clases y características
      p(data-aos="fade-left") El peligro corresponde a toda fuente, condición o situación con capacidad de causar daño a las personas, los bienes, la infraestructura o el ambiente. Aunque su presencia no implica necesariamente que ocurra un incidente, sí representa una condición que debe identificarse y controlarse para reducir la probabilidad de que se materialice un riesgo.
      p(data-aos="fade-left") En el ámbito de la seguridad privada, los peligros pueden tener origen natural, tecnológico o humano y deben evaluarse de manera permanente como parte de los procesos de prevención.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Tipos y clases de peligros
      //- Título nivel 3 - Imagen
      p.mb-5(data-aos="fade-left") Los peligros pueden clasificarse de acuerdo con su origen o con la facilidad para identificarlos durante las actividades de inspección y vigilancia.      
      //- Título nivel 4 
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        h3.titulo-nivel4 Según su origen o naturaleza
      //- Título nivel 4
      p(data-aos="fade-left") Esta clasificación permite reconocer la fuente del peligro y establecer las medidas de control más apropiadas:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t4/tarjeta08_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Peligros físicos
                p Corresponden a factores ambientales que pueden causar lesiones o afectar la salud, como ruido, vibraciones, temperaturas extremas, radiaciones, iluminación inadecuada o superficies resbaladizas.                    
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta08_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Peligros químicos
                p Se originan por la presencia de sustancias sólidas, líquidas o gaseosas capaces de generar efectos nocivos para la salud o daños materiales, como ácidos, disolventes, polvos, humos o gases tóxicos.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta08_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Peligros biológicos
                p Están asociados con microorganismos o agentes biológicos, como virus, bacterias, hongos, parásitos e insectos, que representan un riesgo para la salud.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta08_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Peligros ergonómicos o biomecánicos
                p Se relacionan con el diseño del puesto de trabajo y la interacción de las personas con su entorno, incluyendo manipulación manual de cargas, movimientos repetitivos, posturas inadecuadas y mobiliario deficiente.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta08_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Peligros de seguridad (mecánicos o eléctricos)
                p Comprenden condiciones inseguras relacionadas con maquinaria, herramientas, instalaciones eléctricas o trabajos en altura, como cableado expuesto, equipos sin protección o herramientas defectuosas.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta08_6.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Peligros organizacionales o psicosociales
                p Se originan en factores relacionados con la organización del trabajo, como estrés laboral, exceso de carga laboral, acoso, conflictos interpersonales o falta de control sobre las tareas.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta08_7.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Fenómenos naturales
                p Corresponden a eventos naturales con potencial destructivo, como terremotos, inundaciones, huracanes, erupciones volcánicas o deslizamientos de tierra.                                                                
      //- Fin Slideshow
      p.mb-5(data-aos="fade-left") La identificación de estos peligros constituye el primer paso para implementar controles preventivos y reducir la exposición de las personas y los activos.
      //- Título nivel 4 
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        h3.titulo-nivel4 Según su visibilidad o detección
      //- Título nivel 4 
      p(data-aos="fade-left") Otra forma de clasificar los peligros consiste en evaluar la facilidad con que pueden identificarse durante las inspecciones de seguridad:
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
        TabsC.color-acento-contenido.mt-1
          .py-3.py-md-4(titulo="Visibles")
            .row.align-items-center
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta09_1.png')
              .col-md-6.mb-4.mb-md-0
                h4 Visibles
                p Se identifican fácilmente mediante la observación directa o por señales evidentes. 
                p <b>Ejemplos:</b> un techo inestable, una alfombra deteriorada o un cable expuesto.
          .py-3.py-md-4(titulo="Ocultos")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta09_2.png')
              .col-md-6
                h4 Ocultos
                p No pueden detectarse de manera inmediata y requieren inspecciones, mediciones o equipos especializados. 
                p <b>Ejemplos:</b> presencia de monóxido de carbono o desconocimiento de un plan de emergencias.
          .py-3.py-md-4(titulo="En desarrollo")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta09_3.png')
              .col-md-6
                h4 En desarrollo
                p Evolucionan de forma gradual y sus efectos aumentan con el tiempo. Generalmente requieren seguimiento y medición para ser identificados oportunamente. 
                p Un ejemplo es la aparición de lesiones por movimientos repetitivos debido al uso prolongado del computador.
      //- Cierres Pestanas horizontales      
      p(data-aos="fade-left") Reconocer estas diferencias facilita la planeación de inspecciones más efectivas y la aplicación de controles preventivos adecuados.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Características del peligro
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Los peligros presentan características que permiten comprender su naturaleza y su capacidad para generar consecuencias sobre las personas, los bienes o las operaciones:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center          
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Potencial de daño")
                p.mb-4 Todo peligro posee la capacidad inherente de ocasionar lesiones, pérdidas o afectaciones sobre personas, bienes o procesos.
              .row(titulo="Existencia intrínseca")
                p.mb-4 El peligro es una condición propia de un objeto, sustancia, proceso o situación. Por ejemplo, la toxicidad de un producto químico o la energía almacenada en una máquina.
              .row(titulo="Independencia del riesgo")
                p.mb-4 El peligro existe aunque no haya personas expuestas. El riesgo surge cuando existe la posibilidad de que dicho peligro afecte a un individuo, un bien o una actividad.
              .row(titulo="Naturaleza tangible o intangible")
                p.mb-4 Puede manifestarse como un elemento físico y observable, como un cable eléctrico expuesto, o como una condición intangible, por ejemplo, un plan de contingencia insuficiente o procedimientos inadecuados.
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t4/img6.png", alt="").img400.m-auto                
      //- Fin Accordion 1
      p(data-aos="fade-left") La identificación temprana de los peligros permite implementar medidas de control antes de que se conviertan en incidentes o accidentes que afecten la seguridad de la organización.
      .row.justify-content-center.align-items-stretch.mb-5.g-0(data-aos="fade-right")
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t4/img7.png', alt='', style="object-fit: cover;")
        .col-lg-7.bg-color-2.d-flex.flex-column.justify-content-center.p-4
          p.fw-bold.mb-2 Ejemplo
          p Durante una inspección en una bodega de alimentos, se detecta que un extintor obstruye una salida de emergencia. En este caso, el peligro es de tipo físico, ya que dificulta la evacuación rápida de las personas durante una emergencia. La medida correctiva consiste en reubicar el extintor en un lugar que no interfiera con la ruta de evacuación, señalizar adecuadamente el área y verificar que la salida permanezca libre de obstáculos.
          
</template>

<script>
export default {
  name: 'Tema4',
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
