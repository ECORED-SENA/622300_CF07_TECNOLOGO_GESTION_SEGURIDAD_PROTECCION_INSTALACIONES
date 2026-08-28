<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Comunicación aplicada a la seguridad privada
      p(data-aos="fade-left") La comunicación constituye un componente esencial en la prestación de los servicios de seguridad privada. En este apartado se abordan los principales medios de comunicación utilizados durante las operaciones, entre ellos la comunicación verbal, la comunicación escrita, las señales visuales y sonoras, así como las tecnologías de comunicación, tales como radios, sistemas integrados y aplicaciones móviles.
      p(data-aos="fade-left") También se analizan sus características, ventajas, limitaciones y buenas prácticas de uso, con el propósito de fortalecer la coordinación entre el personal, reducir los errores de comunicación y mejorar la calidad del servicio.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img1.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 La comunicación es el proceso mediante el cual se transmite información entre dos o más personas con el propósito de coordinar acciones, prevenir errores y mantener la eficiencia operativa del servicio de seguridad.
      p.mb-5(data-aos="fade-left") Antes de analizar los diferentes medios de comunicación utilizados en la seguridad privada, es importante comprender los elementos que intervienen en el proceso comunicativo y las principales barreras que pueden afectar el intercambio efectivo de la información.
      .row.justify-content-center.mb-5
        .col-md-auto
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 1.
            span  Proceso de comunicación y barreras presentes en el intercambio de información
          img.rounded-3(src="@/assets/curso/temas/t2/img2.png", alt="Diagrama del proceso de comunicación en contextos físico y psicológico que presenta la secuencia entre emisor, codificación, mensaje transmitido por un canal, decodificación y receptor. Incluye barreras asociadas al emisor, al canal y al receptor, representadas en cada etapa del proceso, además de un ciclo de retroalimentación que conecta al receptor con el emisor para completar la comunicación. ", style="width: 100%; height: 100%; object-fit: cover;")
      //- FinTabla
      p(data-aos="fade-left") En el ámbito operativo, la comunicación debe ser precisa, breve, objetiva y pertinente, de manera que facilite la toma de decisiones y permita una respuesta inmediata frente a cualquier situación que pueda comprometer la seguridad.
      p(data-aos="fade-left") A partir de estos principios, los servicios de seguridad privada emplean diversos medios de comunicación, cada uno con características, ventajas y protocolos específicos. Su correcta utilización permite transmitir información de manera oportuna, coordinar las actividades operativas y responder eficazmente ante situaciones que puedan afectar la continuidad y la seguridad del servicio. Los principales medios de comunicación utilizados en este ámbito se presentan a continuación: 
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t2/tarjeta01_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Comunicación verbal
                p Es la forma de comunicación más utilizada y directa. Permite transmitir instrucciones, alertas y novedades en tiempo real. La información debe ser clara, precisa y libre de ambigüedades o expresiones coloquiales. Se recomienda emplear un tono neutro y vocabulario técnico, especialmente durante situaciones de tensión. En contextos operativos, el vigilante debe dominar la comunicación por radio, respetando los códigos establecidos y la jerarquía de mando. 
                p <b>Ejemplo: </b><i>«Central Alfa, aquí puesto 3. Reporto ingreso de vehículo institucional, placa EFW-234. Sin novedad. Cambio y fuera.»</i>
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta01_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Comunicación escrita
                p Consiste en transmitir información mediante documentos formales, como informes, registros o bitácoras. Su propósito es dejar constancia verificable de hechos, novedades y acciones ejecutadas. Debe cumplir criterios de claridad, objetividad, secuencia temporal y estar debidamente firmada por el responsable. 
                p <b>Ejemplo:</b><i> «Siendo las 22:30 horas, se observa persona sospechosa cerca del acceso 2. Se realiza verificación y no se detecta novedad. Supervisión informada.»</i>
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta01_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Comunicación kinésica
                p Se realiza mediante gestos, luces o sonidos convencionales para transmitir mensajes sin necesidad de hablar. Se utiliza en operaciones donde el silencio es indispensable, como vigilancias nocturnas o seguimientos discretos. Requiere entrenamiento previo y acuerdos entre los integrantes del equipo para evitar interpretaciones erróneas. Incluye señales manuales, lumínicas y sonoras. 
                p <b>Ejemplo:</b> una linterna que se enciende y apaga dos veces puede indicar «zona segura», mientras que un movimiento circular con la mano puede significar «avance».
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta01_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Comunicación tecnológica
                p Se realiza mediante herramientas electrónicas o digitales que facilitan el intercambio de información y el seguimiento de las operaciones. Incluye radios de comunicación, transmisores portátiles, teléfonos corporativos, aplicaciones de reporte, sistemas de videovigilancia (CCTV), <i>software</i> de control de acceso y plataformas digitales que registran eventos y generan alertas en tiempo real. 
                p <b>Ejemplo:</b> un operador utiliza un sistema integrado que registra automáticamente el ingreso y la salida del personal, mientras las cámaras con análisis de video generan alertas por movimientos no autorizados.
      //- Fin Slideshow
      p El uso adecuado de estos medios fortalece la coordinación entre los equipos de seguridad, mejora la trazabilidad de la información y facilita una respuesta oportuna ante cualquier novedad.
      Separador
      //- Inicio Tema2.1
      .row
        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.1 Importancia de la comunicación en la seguridad privada
      .row.justify-content-center.align-items-stretch.mb-5
        .col-12.col-md-6.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          .bg-color-3.p-4.rounded-4.h-100.d-flex.align-items-center
            p.mb-0 La comunicación constituye un elemento esencial para garantizar la coordinación del equipo de seguridad, reducir los errores humanos y responder oportunamente ante situaciones de emergencia. Un mensaje mal emitido o interpretado puede generar consecuencias importantes para la operación. Por ello, el personal debe desarrollar habilidades para comunicarse con precisión, mantener la confidencialidad de la información y confirmar la recepción de los mensajes críticos.
        .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.d-flex
            img.rounded-3(src="@/assets/curso/temas/t2/img3.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
        .col-12.col-md-12.col-lg-4(data-aos="fade-left")
          .h-100.d-flex.flex-column.justify-content-end.ps-lg-4
            .mb-3.d-flex.justify-content-start
              img(src="@/assets/curso/temas/bg/icono.svg", alt="", style="width: 90px; height: 90px; object-fit: contain;")
            p.mb-0 La correcta transmisión y el adecuado registro de la información operativa también contribuyen a la continuidad del servicio y forman parte de los aspectos evaluados durante los procesos de supervisión y auditoría. El siguiente ejemplo evidencia la importancia de una comunicación coordinada durante una situación de emergencia:
      .row.justify-content-center.align-items-stretch.mb-5.g-0(data-aos="fade-right")
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t2/img4.png', alt='', style="object-fit: cover;")
        .col-lg-7.bg-color-2.d-flex.flex-column.justify-content-center.p-4
          p.fw-bold.mb-2 Ejemplo
          p Durante un incendio en una planta industrial, el vigilante del puesto 2 detecta humo en el área de producción y comunica por radio: 
          p <i>«Central Alfa, puesto 2 reporta humo visible en zona de producción. Solicito apoyo inmediato y verificación de personal. Cambio.»</i>
          p De forma simultánea, el operador del sistema de cámaras confirma la novedad mediante los medios tecnológicos, mientras otro vigilante utiliza una señal lumínica para indicar la ruta de evacuación segura. La coordinación entre la comunicación verbal, tecnológica y por señales permite controlar la emergencia sin personas lesionadas ni pérdidas materiales.
      p(data-aos="fade-left") Para fortalecer la comunicación durante el servicio, es recomendable aplicar las siguientes prácticas:
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
                              img(src='@/assets/curso/temas/t2/tarjeta02_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Escuchar antes de hablar y confirmar la recepción del mensaje
                            p.text-center Reducir errores de interpretación y asegurar que la información sea comprendida.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta02_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Utilizar lenguaje técnico y evitar expresiones emocionales o ambiguas
                            p.text-center Favorecer una comunicación clara, precisa y objetiva.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta02_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Mantener un registro escrito de las comunicaciones relevantes
                            p.text-center Garantizar la trazabilidad de la información y facilitar consultas posteriores.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta02_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Proteger la confidencialidad de la información operativa
                            p.text-center Preservar la seguridad institucional y evitar la divulgación de datos sensibles.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta02_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Respetar el protocolo de jerarquía y orden en las comunicaciones radiales
                            p.text-center Mantener una coordinación eficiente entre los integrantes del equipo.
                    .col-lg-4.order-lg-1.d-none.d-lg-block
                        figure
                          img(src='@/assets/curso/temas/t2/img5.png', style="width: 300px", data-aos="zoom-in").m-auto
              //- Fin Carrusel
            p(data-aos="fade-left") La aplicación permanente de estas recomendaciones contribuye a mejorar la coordinación operativa y fortalece la eficacia del servicio de seguridad.
      Separador
      //- Inicio Tema2.2
      .row
        #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.2 Concepto de informe
      p(data-aos="fade-left") El informe es el instrumento mediante el cual el vigilante o supervisor documenta las actividades desarrolladas durante la prestación del servicio. Además de constituir la base del sistema de control y supervisión, representa una herramienta de comunicación institucional que permite registrar hechos relevantes, describir las acciones ejecutadas y dejar evidencia del cumplimiento de las funciones asignadas. La elaboración adecuada de los informes favorece la trazabilidad de la información, respalda la toma de decisiones y fortalece los procesos de seguimiento y mejora continua.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Los informes en la seguridad privada
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") La elaboración de informes en seguridad privada requiere la aplicación de criterios técnicos y documentales que garanticen la calidad de la información registrada. Para ello, es necesario conocer los formatos, la estructura, el contenido mínimo, los principios de claridad, coherencia, trazabilidad y presentación, así como las buenas prácticas de redacción y la gestión adecuada de las evidencias.
      p(data-aos="fade-left") Estos elementos permiten que los informes adquieran valor documental, operativo y legal, convirtiéndose en un apoyo fundamental para la gestión de la seguridad y la toma de decisiones. Como complemento de este contenido, se presenta el siguiente video: 
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Normas técnicas en la elaboración y presentación de informes
      //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-stretch.mb-5
        .col-12.col-md-6.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          .bg-color-3.p-4.rounded-4.h-100.d-flex.align-items-center
            p.mb-0 Las normas técnicas para la elaboración y presentación de informes establecen los criterios formales, estructurales y lingüísticos que garantizan la claridad, la coherencia y la validez documental de la información registrada por los vigilantes y supervisores de seguridad. Un informe correctamente redactado no solo deja constancia de los hechos, sino que también constituye una evidencia legal, operativa y administrativa del cumplimiento de las funciones de vigilancia.
        .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.d-flex
            img.rounded-3(src="@/assets/curso/temas/t2/img6.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
        .col-12.col-md-12.col-lg-4(data-aos="fade-left")
          .h-100.d-flex.flex-column.justify-content-end.ps-lg-4
            .mb-3.d-flex.justify-content-start
              img(src="@/assets/curso/temas/bg/icono.svg", alt="", style="width: 90px; height: 90px; object-fit: contain;")
            p.mb-0 La norma <b>NTC 1486:2008</b>, del Instituto Colombiano de Normas Técnicas y Certificación (ICONTEC), establece los parámetros para la redacción, la presentación y el formato de los informes técnicos, científicos y administrativos. En consecuencia, estos documentos deben caracterizarse por ser claros, objetivos, verificables y estructurados en secciones definidas.
      p(data-aos="fade-left") El cumplimiento de estos lineamientos fortalece la calidad documental de los informes y facilita su consulta, seguimiento y utilización en los diferentes procesos de la organización.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Relevancia de los informes en la seguridad privada
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") En los servicios de vigilancia, el informe técnico cumple funciones fundamentales que respaldan tanto la operación como el cumplimiento de los requisitos legales. Su adecuada elaboración facilita la continuidad del servicio, fortalece la toma de decisiones y aporta evidencia documental cuando es requerida. Las principales funciones del informe técnico son las siguientes:
      .row.justify-content-center(data-aos="fade-left")
        .col-12          
          //- Inicio Tarjetas
          .row(data-aos="fade-right").justify-content-center
            .col-lg-12.col-md-6.col-xl-4.mb-4.d-flex.flex-column
              .tarjeta.p-4.rounded-5.h-100.bg-color-2
                .row.justify-content-center.mb-3.align-items-center
                  .col-7
                    figure
                      img(src='@/assets/curso/temas/t2/tarjeta03_1.svg', alt='' style="width:100px").m-auto
                h4.card-title.text-center.mb-4 Operativa
                p.text-center Comunica a la supervisión los hechos ocurridos, facilita la continuidad del servicio y aporta información para la toma de decisiones.
            .col-lg-12.col-md-6.col-xl-4.mb-4.d-flex.flex-column
              .tarjeta.p-4.rounded-5.h-100.bg-color-2
                .row.justify-content-center.mb-3
                  .col-7
                    figure
                      img(src='@/assets/curso/temas/t2/tarjeta03_2.svg', alt='' style="width:100px").m-auto
                h4.card-title.text-center.mb-4 Jurídica
                p.text-center Constituye un documento probatorio durante auditorías y en procesos disciplinarios o judiciales.
          //- Fin Tarjetas
      p(data-aos="fade-left") Los informes deben elaborarse con base en principios de veracidad, objetividad y trazabilidad, ya que forman parte de los registros oficiales del servicio. Asimismo, es recomendable mantener una estructura homogénea e integrar información operativa, análisis de riesgos y acciones correctivas, con el fin de garantizar uniformidad y facilitar la continuidad de la información entre turnos y áreas.
      .row.justify-content-center.align-items-stretch.mb-5.g-0(data-aos="fade-right")
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t2/img7.png', alt='', style="object-fit: cover;")
        .col-lg-7.bg-color-2.d-flex.flex-column.justify-content-center.p-4
          p.fw-bold.mb-2 Tenga en cuenta
          p Las normas técnicas garantizan la uniformidad documental entre los diferentes reportes, facilitando su revisión, auditoría, seguimiento y trazabilidad.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Tipos de informes en seguridad privada
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Los informes pueden elaborarse con diferentes propósitos, según la naturaleza de los hechos registrados y las necesidades del servicio. Cada uno cumple una función específica dentro del proceso de vigilancia y control.
      p(data-aos="fade-left") Los tipos de informes más utilizados son los siguientes:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t2/tarjeta04_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Minuta (informe de turno)
                p Resume las actividades y novedades registradas durante una jornada laboral. Incluye información sobre la entrega de turno, las rondas realizadas, los equipos verificados y las novedades pendientes por resolver.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta04_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Informe de incidentes o novedades
                p Registra hechos imprevistos que alteran el desarrollo normal del servicio, como fallas eléctricas, intrusiones, accidentes o daños materiales.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta04_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Informe especial o de investigación
                p Se elabora después de la ocurrencia de un evento relevante o durante una auditoría de seguridad. Describe las causas, los efectos y las medidas correctivas implementadas o propuestas.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta04_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Informe de supervisión
                p Es elaborado por el personal responsable de supervisar puestos o rondas. Contiene observaciones relacionadas con el cumplimiento de los protocolos, el desempeño del personal y las condiciones del servicio.
      //- Fin Slideshow
      p(data-aos="fade-left") Independientemente del tipo de informe, todos deben conservar una estructura homogénea y aplicar criterios uniformes de registro. Esto facilita la continuidad de la información entre turnos, fortalece la trazabilidad de los hechos y mejora los procesos de supervisión y toma de decisiones.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Elaboración y presentación de informes
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") La elaboración y presentación de informes constituye una competencia fundamental para el personal de seguridad privada, ya que permite documentar de manera organizada los hechos relevantes, las acciones ejecutadas y los resultados obtenidos durante la prestación del servicio. Este proceso comprende desde la recolección de la información hasta la entrega del informe final, garantizando que el documento responda a criterios de calidad, claridad y oportunidad. Durante este proceso se desarrollan las siguientes actividades:      
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img8.png')})` }")
        .bloque-texto-g__texto.p-4
          p La comunicación es el proceso mediante el cual se transmite información entre dos o más personas con el propósito de coordinar acciones, prevenir errores y mantener la eficiencia operativa del servicio de seguridad.
          br
          br
          ul.lista-ul.color-vinotinto-custom.mb-0
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span <b>Recolección de datos:</b> obtener información confiable sobre los hechos o situaciones ocurridas.
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span <b>Selección de evidencias:</b> identificar y organizar los soportes que respaldan la información registrada.
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span <b>Redacción:</b> elaborar el informe con lenguaje claro, objetivo y coherente.
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span <b>Edición:</b> revisar la estructura, la ortografía, la precisión y la consistencia del documento antes de su entrega.
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span <b>Presentación:</b> entregar el informe al cliente, supervisor o responsable correspondiente, de acuerdo con los procedimientos establecidos.
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span <b>Seguimiento:</b> verificar las acciones derivadas del informe y realizar las actualizaciones cuando sean necesarias.
      p(data-aos="fade-left") El desarrollo de estas etapas permite que el informe trascienda el simple registro documental y se convierta en una herramienta para la gestión, el control y la comunicación profesional.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Elaboración de informes
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") La correcta elaboración de un informe requiere seguir un proceso organizado que garantice la precisión, la objetividad y la trazabilidad de la información registrada. Para ello, es fundamental desarrollar tres fases que permiten recopilar, documentar y presentar los hechos de manera clara y verificable.
      //- Título nivel 4 
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        h3.titulo-nivel4 Recolección de información
      //- Título nivel 4 
      p(data-aos="fade-left") La primera fase consiste en recopilar todos los datos relacionados con el hecho o la situación que será reportada. Esta información debe registrarse inmediatamente o tan pronto como sea posible para evitar la pérdida de detalles importantes y asegurar la precisión del informe. Durante esta etapa es necesario responder, como mínimo, los siguientes interrogantes:
      .row.bg-fondo-1(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5      
            .row.justify-content-center(data-aos="fade-left")
              .col-12          
                //- Inicio Tarjetas
                .row(data-aos="fade-right").justify-content-center
                  .col-lg-12.col-md-6.col-xl-3.mb-4.d-flex.flex-column
                    .tarjeta.p-4.rounded-3.h-100.bg-color-4.border.shadow
                      .row.justify-content-center.mb-3.align-items-center
                        .col-7
                          figure
                            img(src='@/assets/curso/temas/t2/tarjeta05_1.svg', alt='' style="width:100px").m-auto
                      h4.card-title.text-center.mb-4 ¿Qué ocurrió?
                      p.text-center Descripción clara del hecho o la novedad presentada.
                  .col-lg-12.col-md-6.col-xl-3.mb-4.d-flex.flex-column
                    .tarjeta.p-4.rounded-3.h-100.bg-color-4.border.shadow
                      .row.justify-content-center.mb-3
                        .col-7
                          figure
                            img(src='@/assets/curso/temas/t2/tarjeta05_2.svg', alt='' style="width:100px").m-auto
                      h4.card-title.text-center.mb-4 ¿Dónde y cuándo ocurrió?
                      p.text-center Lugar, fecha y hora en que sucedió el evento.
                  .col-lg-12.col-md-6.col-xl-3.mb-4.d-flex.flex-column
                    .tarjeta.p-4.rounded-3.h-100.bg-color-4.border.shadow
                      .row.justify-content-center.mb-3
                        .col-7
                          figure
                            img(src='@/assets/curso/temas/t2/tarjeta05_3.svg', alt='' style="width:100px").m-auto
                      h4.card-title.text-center.mb-4 ¿Quiénes participaron o estuvieron presentes?
                      p.text-center Personas involucradas, testigos o responsables relacionados con el hecho.
                  .col-lg-12.col-md-6.col-xl-3.mb-4.d-flex.flex-column
                    .tarjeta.p-4.rounded-3.h-100.bg-color-4.border.shadow
                      .row.justify-content-center.mb-3
                        .col-7
                          figure
                            img(src='@/assets/curso/temas/t2/tarjeta05_4.svg', alt='' style="width:100px").m-auto
                      h4.card-title.text-center.mb-4 ¿Qué acciones se tomaron y cuáles fueron los resultados?
                      p.text-center Medidas adoptadas y efectos obtenidos después de la intervención.
                //- Fin Tarjetas
            p(data-aos="fade-left") Una adecuada recolección de información constituye la base para elaborar un informe confiable y útil para los procesos de seguimiento y toma de decisiones.
      //- Título nivel 4 
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        h3.titulo-nivel4 Redacción del informe
      //- Título nivel 4 
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/intro/img9.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Una vez recopilada la información, se procede a la redacción del informe. Este debe elaborarse con un lenguaje técnico, objetivo y cronológico, evitando opiniones personales, interpretaciones subjetivas o expresiones coloquiales. De acuerdo con la <b>NTC 1486:2018</b>, un informe técnico debe contener los siguientes apartados:
          br
          br
          ul.lista-ul.color-vinotinto-custom.mb-0
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span <b>Título y encabezado:</b> identifica el tipo de informe, el autor, la fecha y el lugar de elaboración.
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span <b>Descripción de los hechos:</b> presenta los acontecimientos en orden cronológico, utilizando información precisa y verificable.
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span <b>Análisis y acciones:</b> describe las medidas adoptadas y los resultados obtenidos durante la atención del evento.
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span <b>Conclusiones y recomendaciones:</b> expone las observaciones finales y las acciones sugeridas para prevenir situaciones similares o mejorar los procedimientos.
      p(data-aos="fade-left") Asimismo, se recomienda utilizar verbos en tiempo pasado, mantener una redacción clara y evitar repeticiones innecesarias.
      .row.justify-content-center.align-items-stretch.mb-5.g-0(data-aos="fade-right")
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t2/img10.png', alt='', style="object-fit: cover;")
        .col-lg-7.bg-color-2.d-flex.flex-column.justify-content-center.p-4
          p.fw-bold.mb-2 Ejemplo
          p <i>Siendo las 03:15 horas, durante la ronda de vigilancia, se observa una puerta lateral sin seguro. Se procede al cierre manual, se notifica al supervisor y se registra la novedad en la bitácora.</i>
      //- Título nivel 4 
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        h3.titulo-nivel4 Presentación del informe
      //- Título nivel 4 
      p(data-aos="fade-left") Una vez finalizada la redacción, el informe debe presentarse de acuerdo con el protocolo institucional y las normas técnicas establecidas por la organización. Para ello, es recomendable tener en cuenta los siguientes aspectos:
      .row.justify-content-center(data-aos="fade-left")
        .col-12          
          //- Inicio Tarjetas
          .row(data-aos="fade-right").justify-content-center
            .col-lg-12.col-md-6.col-xl-3.mb-4.d-flex.flex-column
              .tarjeta.p-4.rounded-3.h-100.bg-color-4.border.shadow
                .row.justify-content-center.mb-3.align-items-center
                  .col-7
                    figure
                      img(src='@/assets/curso/temas/t2/tarjeta06_1.svg', alt='' style="width:100px").m-auto
                h4.card-title.text-center.mb-4 Formato
                p.text-center Utilizar el formato oficial definido por la empresa.
            .col-lg-12.col-md-6.col-xl-3.mb-4.d-flex.flex-column
              .tarjeta.p-4.rounded-3.h-100.bg-color-4.border.shadow
                .row.justify-content-center.mb-3
                  .col-7
                    figure
                      img(src='@/assets/curso/temas/t2/tarjeta06_2.svg', alt='' style="width:100px").m-auto
                h4.card-title.text-center.mb-4 Tipografía
                p.text-center Emplear Arial o Times New Roman, tamaño 12.
            .col-lg-12.col-md-6.col-xl-3.mb-4.d-flex.flex-column
              .tarjeta.p-4.rounded-3.h-100.bg-color-4.border.shadow
                .row.justify-content-center.mb-3
                  .col-7
                    figure
                      img(src='@/assets/curso/temas/t2/tarjeta06_3.svg', alt='' style="width:100px").m-auto
                h4.card-title.text-center.mb-4 Firma
                p.text-center Firmar el documento y conservar una copia para archivo.
            .col-lg-12.col-md-6.col-xl-3.mb-4.d-flex.flex-column
              .tarjeta.p-4.rounded-3.h-100.bg-color-4.border.shadow
                .row.justify-content-center.mb-3
                  .col-7
                    figure
                      img(src='@/assets/curso/temas/t2/tarjeta06_4.svg', alt='' style="width:100px").m-auto
                h4.card-title.text-center.mb-4 Anexos
                p.text-center Incorporar fotografías, videos, registros o bitácoras cuando respalden la información consignada.
          //- Fin Tarjetas
      p.mb-5(data-aos="fade-left") El informe puede presentarse en formato físico, mediante un documento impreso y firmado, o en formato digital, como archivo PDF o registro en el sistema institucional, siempre garantizando su autenticidad y trazabilidad.
      //- Título nivel 4 
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        h3.titulo-nivel4 Importancia de la correcta elaboración de informes
      //- Título nivel 4 
      p(data-aos="fade-left") La elaboración de informes constituye una actividad esencial dentro de la seguridad privada, ya que permite documentar formalmente las actividades desarrolladas y las novedades presentadas durante la prestación del servicio. Un hecho que no queda registrado pierde valor como evidencia y dificulta los procesos de seguimiento, control y verificación. La correcta elaboración de los informes aporta beneficios como los siguientes:
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
                              img(src='@/assets/curso/temas/t2/tarjeta07_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Respalda la gestión operativa
                            p.text-center Sirve como evidencia del cumplimiento de las actividades contratadas y de las rondas realizadas.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta07_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Facilita la trazabilidad de los hechos
                            p.text-center La secuencia cronológica de la información favorece los procesos de auditoría, investigación y seguimiento.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta07_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Fortalece la credibilidad institucional
                            p.text-center Un informe técnico, claro y objetivo transmite transparencia, disciplina y profesionalismo.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta07_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Apoya la toma de decisiones
                            p.text-center La información registrada orienta la implementación de acciones preventivas y correctivas.
                    .col-lg-4.order-lg-1.d-none.d-lg-block
                        figure
                          img(src='@/assets/curso/temas/t2/img11.png', style="width: 300px", data-aos="zoom-in").m-auto
              //- Fin Carrusel
            p(data-aos="fade-left") Una adecuada cultura documental fortalece la gestión de la seguridad y contribuye al mejoramiento continuo de los procesos.
      //- Título nivel 4 
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        h3.titulo-nivel4 Componentes del informe
      //- Título nivel 4 
      p(data-aos="fade-left") Todo informe debe seguir una estructura organizada que facilite la comprensión de la información y garantice su validez documental. Cada uno de sus componentes cumple una función específica dentro del proceso de comunicación institucional. La estructura básica del informe comprende los siguientes elementos:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center          
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Encabezado")
                p.mb-4 Incluye el nombre de la empresa, el cargo del redactor, la fecha, la hora y el título del informe. 
                p <b>Ejemplo.</b> Empresa: Seguridad Alfa Ltda. Informe de turno nocturno – Puesto 2. Fecha: 10/08/2025. Hora: 22:00.
              .row(titulo="Cuerpo del informe")
                p.mb-4 Presenta la descripción secuencial y objetiva de los hechos observados. Debe redactarse con claridad, precisión y objetividad, utilizando datos verificables como fechas, horas, ubicaciones, nombres o placas.
                p <b>Ejemplo.</b> <i>«A las 03:45 horas se observa un vehículo blanco estacionado en la zona de carga sin autorización. Se realiza verificación visual, se solicita identificación y se notifica al supervisor del área.»</i>
              .row(titulo="Conclusiones y acciones tomadas")
                p.mb-4 Describe las decisiones adoptadas, los resultados obtenidos y las recomendaciones derivadas del hecho reportado. 
                p <b>Ejemplo.</b> <i>«El vehículo corresponde a un contratista del área de mantenimiento. Se actualiza la base de datos de acceso nocturno.»</i>
              .row(titulo="Cierre y firma")
                p.mb-4 Incluye el nombre completo, el cargo y la firma del responsable del informe, garantizando la autenticidad del documento.
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t2/img12.png", alt="").img400.m-auto
      //- Fin Accordion 1
      p(data-aos="fade-left") Para asegurar una presentación uniforme, el informe debe cumplir con los siguientes criterios de formato:
      .row.bg-fondo-1(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5      
            .row.justify-content-center(data-aos="fade-left")
              .col-12          
                //- Inicio Tarjetas
                .row(data-aos="fade-right").justify-content-center
                  .col-lg-12.col-md-6.col-xl-3.mb-4.d-flex.flex-column
                    .tarjeta.p-4.rounded-3.h-100.bg-color-4.border.shadow
                      .row.justify-content-center.mb-3.align-items-center
                        .col-7
                          figure
                            img(src='@/assets/curso/temas/t2/tarjeta08_1.svg', alt='' style="width:100px").m-auto
                      h4.card-title.text-center.mb-4 Márgenes
                      p.text-center 3 cm en los márgenes superior e izquierdo, y 2 cm en los márgenes inferior y derecho.
                  .col-lg-12.col-md-6.col-xl-3.mb-4.d-flex.flex-column
                    .tarjeta.p-4.rounded-3.h-100.bg-color-4.border.shadow
                      .row.justify-content-center.mb-3
                        .col-7
                          figure
                            img(src='@/assets/curso/temas/t2/tarjeta08_2.svg', alt='' style="width:100px").m-auto
                      h4.card-title.text-center.mb-4 Tipografía
                      p.text-center Arial o Times New Roman, tamaño 12.
                  .col-lg-12.col-md-6.col-xl-3.mb-4.d-flex.flex-column
                    .tarjeta.p-4.rounded-3.h-100.bg-color-4.border.shadow
                      .row.justify-content-center.mb-3
                        .col-7
                          figure
                            img(src='@/assets/curso/temas/t2/tarjeta08_3.svg', alt='' style="width:100px").m-auto
                      h4.card-title.text-center.mb-4 Interlineado
                      p.text-center 1,5 líneas.
                  .col-lg-12.col-md-6.col-xl-3.mb-4.d-flex.flex-column
                    .tarjeta.p-4.rounded-3.h-100.bg-color-4.border.shadow
                      .row.justify-content-center.mb-3
                        .col-7
                          figure
                            img(src='@/assets/curso/temas/t2/tarjeta08_4.svg', alt='' style="width:100px").m-auto
                      h4.card-title.text-center.mb-4 Numeración
                      p.text-center Incluir la numeración de páginas y los anexos cuando correspondan.
                //- Fin Tarjetas
            p(data-aos="fade-left") El cumplimiento de estos lineamientos favorece la uniformidad documental, mejora la lectura del informe y facilita su conservación como evidencia dentro de los procesos de seguridad privada.
      //- Título nivel 4 
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        h3.titulo-nivel4 Riesgos
      //- Título nivel 4 
      p(data-aos="fade-left") Este componente formativo permite comprender las amenazas, vulnerabilidades y peligros a los que se enfrenta una instalación, una persona o un proceso, así como la manera de gestionarlos mediante una planificación preventiva y estructurada.      
      .row.justify-content-center.align-items-stretch.mt-5.mb-5
        .col-12.col-md-6.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          .bg-color-3.p-4.rounded-4.h-100.d-flex.align-items-center
            p.mb-0 A lo largo de este componente se desarrollan los conceptos de riesgo, amenaza, vulnerabilidad, peligro e incidente, junto con los métodos de evaluación y análisis necesarios para elaborar una matriz de riesgos eficiente.
        .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.d-flex
            img.rounded-3(src="@/assets/curso/temas/t2/img13.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
        .col-12.col-md-12.col-lg-4(data-aos="fade-left")
          .h-100.d-flex.flex-column.justify-content-end.ps-lg-4
            .mb-3.d-flex.justify-content-start
              img(src="@/assets/curso/temas/bg/icono.svg", alt="", style="width: 90px; height: 90px; object-fit: contain;")
            p.mb-0 El aprendiz adquirirá las competencias necesarias para identificar los diferentes tipos de riesgos, evaluar su probabilidad e impacto y diseñar planes de mitigación y contingencia que reduzcan sus efectos sobre las operaciones:
      .row.bg-fondo-1(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Carrusel
            .bg-full-width
              .px-4.px-md-5.pb-md-3
                .carousel-bg
                  .row.justify-content-center.mb-5.align-items-center
                    .col-lg-12.mb-3.mb-lg-0.order-lg-2
                      SlyderF(columnas="col-xl-4 col-lg-6 col-md-6 col-12")                        
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta09_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Identificación de riesgos
                            p.text-cener Reconocer riesgos naturales, provocados, tecnológicos y humanos presentes en el entorno.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta09_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Evaluación del riesgo
                            p.text-cener Analizar la probabilidad de ocurrencia y el impacto de cada riesgo identificado.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta09_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Mitigación y contingencia
                            p.text-cener Diseñar medidas preventivas y planes de respuesta para reducir las consecuencias de los riesgos.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta09_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Inspección de vulnerabilidades
                            p.text-cener Detectar debilidades en instalaciones, procesos y recursos que puedan facilitar la materialización de amenazas.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta09_5.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Seguimiento de la gestión del riesgo
                            p.text-cener Verificar la eficacia de las medidas implementadas y promover acciones de mejora continua.                            
              //- Fin Carrusel
            p(data-aos="fade-left") Este eje fortalece una cultura preventiva y una mentalidad analítica, fundamentales para la seguridad moderna, donde la anticipación y la gestión del riesgo son tan importantes como la capacidad de respuesta frente a un evento.


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
