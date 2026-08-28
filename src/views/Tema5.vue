<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Incidentes de seguridad: tipos, clases y características
      p(data-aos="fade-left") Los incidentes constituyen eventos no deseados que alteran el desarrollo normal de las operaciones. En el contexto de la seguridad privada, un incidente de seguridad corresponde a cualquier hecho que afecte o pueda afectar la integridad de las personas, los bienes, la información o la continuidad del servicio.
      Separador
      //- Inicio Tema5.1
      .row
        #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.1 Tipos de incidentes
      p(data-aos="fade-left") Los incidentes pueden clasificarse de acuerdo con la naturaleza del evento, su origen o el nivel de afectación que generan sobre las operaciones. Esta clasificación facilita la priorización de la respuesta y la aplicación de los procedimientos establecidos por la organización. Los principales tipos de incidentes son los siguientes:
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
        TabsC.color-acento-contenido.mt-1
          .py-3.py-md-4(titulo="Según la gravedad")
            .row.align-items-center
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta00_1.png')
              .col-md-6.mb-4.mb-md-0
                h4 Según la gravedad
                p <b>Leves:</b> no generan daños materiales ni personales significativos.
                p <b>Graves:</b> ocasionan consecuencias materiales, humanas o afectan la continuidad de las operaciones.
          .py-3.py-md-4(titulo="Según el origen")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta00_2.png')
              .col-md-6
                h4 Según el origen
                p <b>Naturales:</b> originados por fenómenos de la naturaleza.
                p <b>Humanos:</b> derivados de acciones u omisiones de las personas.
                p <b>Tecnológicos:</b> ocasionados por fallas en equipos, sistemas o infraestructura tecnológica.

          .py-3.py-md-4(titulo="Según la intencionalidad")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta00_3.png')
              .col-md-6
                h4 Según la intencionalidad
                p <b>Accidentales:</b> ocurren sin intención de causar daño.
                p <b>Deliberados:</b> corresponden a acciones intencionales orientadas a afectar personas, bienes o procesos.
      p(data-aos="fade-left") La correcta identificación del tipo de incidente facilita la selección de las medidas de respuesta y la implementación de acciones preventivas.
      //- Cierres Pestanas horizontales
      Separador
      //- Inicio Tema5.2
      .row
        #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.2 Clases de incidentes
      p(data-aos="fade-right") Los incidentes también pueden clasificarse según el nivel de impacto que generan sobre la organización. Esta clasificación permite establecer prioridades durante la atención del evento y optimizar la asignación de recursos.
      p(data-aos="fade-right") La valoración se realiza considerando dos criterios fundamentales:
      .row.justify-content-center(data-aos="fade-left")
        .col-12          
          //- Inicio Tarjetas
          .row(data-aos="fade-right").justify-content-center
            .col-lg-12.col-md-6.col-xl-4.mb-4.d-flex.flex-column
              .tarjeta.p-4.rounded-5.h-100.bg-color-2
                .row.justify-content-center.mb-3.align-items-center
                  .col-7
                    figure
                      img(src='@/assets/curso/temas/t5/tarjeta02_1.svg', alt='' style="width:100px").m-auto
                h4.card-title.text-center.mb-4 Impacto potencial
                p.text-center Evalúa el alcance de las consecuencias sobre las personas, los bienes, la información, la infraestructura o la continuidad de las operaciones.
            .col-lg-12.col-md-6.col-xl-4.mb-4.d-flex.flex-column
              .tarjeta.p-4.rounded-5.h-100.bg-color-2
                .row.justify-content-center.mb-3
                  .col-7
                    figure
                      img(src='@/assets/curso/temas/t5/tarjeta02_2.svg', alt='' style="width:100px").m-auto
                h4.card-title.text-center.mb-4 Urgencia
                p.text-center Determina la rapidez con la que debe atenderse el incidente para evitar que sus efectos aumenten o se propaguen.
          //- Fin Tarjetas
      p(data-aos="fade-left") Con base en estos criterios, las organizaciones suelen clasificar los incidentes en niveles de gravedad como <b>bajo, medio, alto y crítico</b>, lo que facilita la priorización de la respuesta.
      Separador
      //- Inicio Tema5.3
      .row
        #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.3 Características de los incidentes
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img1.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Los incidentes presentan características comunes que orientan su gestión dentro de la seguridad privada:
          br
          br
          ul.lista-ul.color-vinotinto-custom.mb-0
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span <b>Registro inmediato:</b> documentar oportunamente el incidente en la bitácora o en el informe correspondiente
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span <b>Aplicación de protocolos:</b> activar los procedimientos de contención, comunicación y atención establecidos por la organización.
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span <b>Acciones de mejora:</b> implementar acciones correctivas y preventivas para evitar la repetición del incidente y fortalecer los controles existentes.
      .row.justify-content-center.align-items-stretch.mb-5.g-0(data-aos="fade-right")
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t5/img2.png', alt='', style="object-fit: cover;")
        .col-lg-7.bg-color-2.d-flex.flex-column.justify-content-center.p-4
          p.fw-bold.mb-2 Ejemplo
          p En un complejo empresarial se activa una alarma contra incendios sin que exista una emergencia real. Aunque no se presentan daños, el evento se registra como un incidente leve y se inicia la investigación correspondiente. Posteriormente, se determina que la activación fue ocasionada por labores de mantenimiento realizadas sin notificación previa. El registro y análisis de este tipo de situaciones permiten corregir los procedimientos y evitar futuras interrupciones de la operación.
      Separador
      //- Inicio Tema5.4
      .row
        #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.4 Incidentes de seguridad
      p(data-aos="fade-left") Los incidentes de seguridad corresponden a eventos, intencionales o accidentales, que afectan o pueden afectar la confidencialidad, la integridad o la disponibilidad de la información, los sistemas, las personas, los bienes o los procesos de una organización. Su adecuada identificación y clasificación permiten implementar respuestas oportunas y reducir el impacto sobre las operaciones.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Tipos de incidentes de seguridad
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Los incidentes de seguridad pueden manifestarse de diferentes maneras, dependiendo del tipo de amenaza que afecte a la organización:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t5/tarjeta03_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 <i>Malware</i> (<i>software</i> malicioso)
                p Incluye virus, troyanos, gusanos, <i>ransomware</i> y <i>spyware</i>. Su objetivo es dañar sistemas, alterar su funcionamiento u obtener acceso no autorizado a la información.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta03_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 <i>Phishing</i>
                p Consiste en intentos de engañar a los usuarios para obtener credenciales, información financiera u otros datos confidenciales mediante correos electrónicos, mensajes o sitios fraudulentos.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta03_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Denegación de servicio (DoS/DDoS)
                p Ataques dirigidos a impedir la disponibilidad de un servicio mediante la saturación de redes o sistemas con tráfico ilegítimo.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta03_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Acceso no autorizado o intrusión
                p Ocurre cuando una persona accede a sistemas, instalaciones o información sin contar con los permisos correspondientes.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta03_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Fallas de hardware o software
                p Corresponden a problemas técnicos que afectan la disponibilidad, la integridad o el funcionamiento normal de los sistemas.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta03_6.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Errores humanos
                p Errores humanos
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta03_7.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Contenido abusivo
                p Comprende incidentes relacionados con spam, ciberacoso, contenido ofensivo o material difamatorio difundido mediante los sistemas de la organización.
      //- Fin Slideshow
      p(data-aos="fade-left") La identificación oportuna del tipo de incidente permite aplicar procedimientos específicos de contención y recuperación.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Manejo de incidentes en la seguridad privada
      //- Título nivel 3 - Imagen
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img3.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 La gestión de incidentes busca reducir el impacto de los eventos sobre la operación y restablecer las condiciones normales del servicio en el menor tiempo posible. Independientemente de su origen, los incidentes de seguridad presentan características comunes que deben considerarse durante su atención:
          br
          br
          ul.lista-ul.color-vinotinto-custom.mb-0
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span <b>Compromiso de los principios de la seguridad:</b> afectan o pueden afectar la confidencialidad, la integridad o la disponibilidad de la información, los sistemas o los servicios.
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span <b>Naturaleza inesperada:</b> corresponden a eventos no planificados que interrumpen el desarrollo normal de las operaciones.
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span <b>Diversidad de causas:</b> pueden originarse por acciones maliciosas, errores humanos, fallas técnicas o situaciones accidentales.
      p(data-aos="fade-left") Una gestión adecuada de los incidentes requiere su identificación temprana, el registro oportuno de la información, la aplicación de los protocolos establecidos, la implementación de acciones correctivas y el seguimiento continuo de las medidas adoptadas. Estos procesos fortalecen la capacidad de respuesta de la organización y contribuyen al mejoramiento continuo de la seguridad.
      Separador
      //- Inicio Tema5.5
      .row
        #t_5_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.5 Nivel de riesgo: concepto, clasificación, niveles y escalas
      p(data-aos="fade-left") A continuación, se presenta un video sobre el nivel de riesgo, su clasificación y la importancia de su valoración para la toma de decisiones en los procesos de seguridad.
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Clasificación y escalas del nivel de riesgo
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Los niveles de riesgo pueden clasificarse mediante diferentes metodologías, dependiendo del grado de detalle requerido y de la información disponible para realizar el análisis. Las clasificaciones más utilizadas son las siguientes:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Cualitativa")
                p.mb-4 Utiliza categorías descriptivas, como <b>bajo, medio, alto o crítico,</b> para valorar el riesgo. Es apropiada cuando no se dispone de información estadística y la evaluación se basa en la experiencia del personal y el conocimiento del entorno.
              .row(titulo="Semicuantitativa")
                p.mb-4 Combina escalas numéricas con categorías descriptivas. Generalmente utiliza valores de <b>1 a 5</b> para la probabilidad y el impacto, calculando el nivel de riesgo mediante la fórmula <b>R = P × I</b>, donde <b>R</b> corresponde al riesgo, <b>P</b> a la probabilidad e <b>I</b> al impacto. Es uno de los métodos más utilizados en seguridad privada porque facilita la comparación y priorización de riesgos.
              .row(titulo="Cuantitativa")
                p.mb-4 Se fundamenta en datos estadísticos, modelos matemáticos y análisis históricos para estimar pérdidas o probabilidades de ocurrencia. Es utilizada principalmente en organizaciones con sistemas avanzados de gestión del riesgo y disponibilidad de información histórica confiable.
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t5/img4.png", alt="").img400.m-auto
      //- Fin Accordion 1
      p(data-aos="fade-left") La selección de la metodología depende de las características de la organización, el tipo de riesgos evaluados y los recursos disponibles para realizar el análisis.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Escalas del nivel de riesgo
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Para facilitar la interpretación de los resultados, los niveles de riesgo suelen representarse mediante escalas de valoración o matrices de riesgo, conocidas también como <b>matrices de calor</b>. Estas permiten identificar rápidamente el nivel de prioridad de cada riesgo y orientar la toma de decisiones. Una escala de valoración ampliamente utilizada es la siguiente:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Tabla
            .row.justify-content-center.mb-5
              .col-md-auto.col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 4.
                  span Clasificación de los niveles de riesgo según el rango de puntuación
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 20%") Nivel de riesgo
                        th(style="width: 20%") Rango de puntuación
                        th(style="width: 60%") Características
                    tbody
                      tr
                        td <b>Bajo</b>
                        td <b>1 a 5</b>
                        td Probabilidad reducida e impacto leve. Generalmente requiere seguimiento periódico y mantenimiento de los controles existentes.
                      tr
                        td <b>Medio</b>
                        td <b>6 a 10</b>
                        td Probabilidad moderada o impacto parcial. Requiere controles específicos y monitoreo continuo.
                      tr
                        td <b>Alto</b>
                        td <b>11 a 15</b>
                        td Alta probabilidad de ocurrencia o consecuencias importantes. Exige la implementación de medidas correctivas prioritarias.
                      tr
                        td <b>Crítico</b>
                        td <b>16 a 25</b>
                        td Alta probabilidad y consecuencias severas o catastróficas. Requiere intervención inmediata y asignación prioritaria de recursos.
            p.mb-5(data-aos="fade-left") En las matrices de riesgo, estos niveles suelen asociarse con colores para facilitar su interpretación:
            //- Inicio Tabla
            .row.justify-content-center.mb-5
              .col-md-auto.col-lg-8
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 5.
                  span Interpretación de los niveles de riesgo mediante códigos de color
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 20%") Color
                        th(style="width: 40%") Interpretación
                    tbody
                      tr
                        td <b>Verde</b>
                        td Riesgo aceptable o controlado.
                      tr
                        td <b>Amarillo</b>
                        td Riesgo moderado que requiere seguimiento y controles adicionales.
                      tr
                        td <b>Rojo</b>
                        td Riesgo alto o crítico que demanda intervención inmediata.
            p(data-aos="fade-left") Estas escalas permiten establecer prioridades, orientar la planificación de las medidas de control y optimizar la asignación de recursos humanos, tecnológicos y operativos.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Aplicación del nivel de riesgo
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") El nivel de riesgo constituye un apoyo para la toma de decisiones dentro de la gestión de la seguridad, ya que permite determinar cuáles situaciones requieren atención inmediata y cuáles pueden mantenerse bajo vigilancia.
      .row.justify-content-center(data-aos="fade-right")
        .col-lg-10.bg-color-2.p-5.rounded-4
          h5 Ejemplo
          p Un coordinador de seguridad identifica fallas repetitivas en el sistema de control de acceso del personal. Después de realizar la evaluación, asigna una <b>probabilidad de 4</b> y un <b>impacto de 5</b>, obteniendo el siguiente resultado:
          p.fw-bold R = P × I
          p.fw-bold R = 4 × 5 = 20
          p Con una puntuación de <b>20</b>, el riesgo se clasifica como <b>crítico</b>, por lo que se implementan de manera inmediata medidas como:
          ul.lista-ul.color-vinotinto-custom.mb-0
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Reparación del sistema biométrico. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Instalación de una cámara adicional. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Refuerzo del protocolo de identificación del personal. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Incremento de la supervisión mientras se restablece el sistema. 
          p La valoración del nivel de riesgo permite convertir una percepción subjetiva de inseguridad en un criterio técnico, verificable y objetivo que facilita la planificación, la priorización de acciones y la mejora continua de los procesos de seguridad privada.
          p A continuación, se presenta la valoración del riesgo y su ubicación dentro de la matriz de riesgos. Estas herramientas permiten documentar de manera objetiva el resultado de la evaluación y respaldar la selección de las medidas de control más adecuadas.
          //- Inicio Tabla
          .row.justify-content-center.mb-5
            .col-md-auto.col-lg-12
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 6.
                span Valoración del riesgo
              .tabla-a
                table
                  thead
                    tr
                      th(style="width: 30%") Aspecto
                      th(style="width: 70%") Valor
                  tbody
                    tr
                      td <b>Riesgo identificado</b>
                      td Fallas repetitivas en el sistema de control de acceso del personal.
                    tr
                      td <b>Probabilidad (P)</b>
                      td 4
                    tr
                      td <b>Impacto (I)</b>
                      td 5
                    tr
                      td <b>Fórmula aplicada</b>
                      td <b>R = P × I</b>
                    tr
                      td <b>Resultado</b>
                      td <b>R = 4 × 5 = 20</b>
                    tr
                      td <b>Nivel de riesgo</b>
                      td <b>Crítico</b>
          //- Inicio Tabla
          .row.justify-content-center.mb-5
            .col-md-auto.col-lg-12
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 7.
                span Matriz de riesgo
              .tabla-a
                table
                  thead
                    tr
                      th(style="width: 20%") Probabilidad
                      th(style="width: 10%") 1
                      th(style="width: 10%") 2
                      th(style="width: 10%") 3
                      th(style="width: 10%") 4
                      th(style="width: 10%") 5
                  tbody
                    tr
                      td <b>5</b>
                      td 5
                      td 10
                      td 15
                      td 20
                      td 25
                    tr
                      td <b>4</b>
                      td 4
                      td 8
                      td 12
                      td <b>20</b>
                      td 20
                    tr
                      td <b>3</b>
                      td 3
                      td 6
                      td 9
                      td 12
                      td 15
                    tr
                      td <b>2</b>
                      td 2
                      td 4
                      td 6
                      td 8
                      td 10
                    tr
                      td <b>1</b>
                      td 1
                      td 2
                      td 3
                      td 4
                      td 5
                    tr
                      td <b>Impacto</b>
                      td <b>1</b>
                      td <b>2</b>
                      td <b>3</b>
                      td <b>4</b>
                      td <b>5</b>
            p.mt-3 La combinación de una probabilidad de 4 y un impacto de 5 genera un nivel de riesgo de 20, clasificado como crítico. Esta valoración justifica la implementación inmediata de medidas de control orientadas a reducir la probabilidad de ocurrencia, minimizar el impacto potencial y fortalecer las condiciones de seguridad de la instalación.
      Separador
      //- Inicio Tema5.6
      .row
        #t_5_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.6 Escalas de medición
      p(data-aos="fade-left") Las escalas de medición permiten evaluar y priorizar los riesgos de manera sistemática mediante la valoración de la probabilidad de ocurrencia y el impacto de sus consecuencias. Su aplicación facilita comparar riesgos, establecer prioridades y seleccionar las medidas de control más adecuadas. Las principales escalas utilizadas en la gestión del riesgo son las siguientes: 
      .row.justify-content-center(data-aos="fade-left")
        .col-12          
          //- Inicio Tarjetas
          .row(data-aos="fade-right").justify-content-center
            .col-lg-12.col-md-6.col-xl-4.mb-4.d-flex.flex-column
              .tarjeta.p-4.rounded-5.h-100.bg-color-2
                .row.justify-content-center.mb-3.align-items-center
                  .col-7
                    figure
                      img(src='@/assets/curso/temas/t5/tarjeta04_1.svg', alt='' style="width:100px").m-auto
                h4.card-title.text-center.mb-4 Escalas numéricas
                p.text-center Asignan valores numéricos a la probabilidad y al impacto. Generalmente, ambos valores se multiplican para obtener el nivel de riesgo mediante la expresión <b>R = P × I.</b>
            .col-lg-12.col-md-6.col-xl-4.mb-4.d-flex.flex-column
              .tarjeta.p-4.rounded-5.h-100.bg-color-2
                .row.justify-content-center.mb-3
                  .col-7
                    figure
                      img(src='@/assets/curso/temas/t5/tarjeta04_2.svg', alt='' style="width:100px").m-auto
                h4.card-title.text-center.mb-4 Escalas cualitativas
                p.text-center Emplean categorías descriptivas para expresar el nivel de riesgo. Son apropiadas cuando no se dispone de información cuantitativa suficiente y la evaluación se fundamenta en la experiencia o el juicio técnico.
          //- Fin Tarjetas
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Tabla
            .row.justify-content-center.mb-5
              .col-md-auto.col-lg-8
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 8.
                  span Escalas de clasificación del nivel de riesgo y sus categorías 
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 30%") Escala
                        th(style="width: 70%") Categorías
                    tbody
                      tr
                        td <b>Escala de 3 niveles</b>
                        td Bajo, medio y alto.
                      tr
                        td <b>Escala de 4 niveles</b>
                        td Insignificante, menor, mayor y crítico o catastrófico.
                      tr
                        td <b>Escala de 5 niveles</b>
                        td Insignificante, menor, moderado, mayor y crítico o catastrófico.
            p.mb-5(data-aos="fade-left") La combinación entre la probabilidad y el impacto suele representarse mediante una matriz de riesgos o matriz de calor, en la que los colores facilitan la interpretación del nivel de riesgo.
            //- Inicio Tabla
            .row.justify-content-center.mb-5
              .col-md-auto.col-lg-8
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 9.
                  span Código de colores para la clasificación del riesgo
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 30%") Color
                        th(style="width: 70%") Interpretación
                    tbody
                      tr
                        td <b>Verde</b>
                        td Riesgo bajo o aceptable.
                      tr
                        td <b>Amarillo</b>
                        td Riesgo moderado que requiere seguimiento y medidas de control.
                      tr
                        td <b>Rojo</b>
                        td Riesgo alto o crítico que exige intervención prioritaria.
            p(data-aos="fade-left") Otra forma de clasificar los riesgos consiste en agruparlos según su nivel de criticidad.
      //- Inicio Tarjetas
      .row.justify-content-center(data-aos="fade-left")
        .col-12.col-sm-6.col-lg-4.mb-4
          .tarjeta--boton.color-primario.rounded-4.p-4.h-100.d-flex.flex-column.align-items-center.text-center
            figure.mb-4
              img.mx-auto(src='@/assets/curso/temas/t5/tarjeta05_1.svg', alt='', style="width: 90px;")
            .flex-grow-1.d-flex.flex-column.justify-content-center
              h4.mb-3 Riesgo bajo o mínimo
              p.mb-0 Presenta baja probabilidad de ocurrencia y consecuencias limitadas. Generalmente puede gestionarse mediante procedimientos rutinarios.
        .col-12.col-sm-6.col-lg-4.mb-4
          .tarjeta--boton.color-primario.rounded-4.p-4.h-100.d-flex.flex-column.align-items-center.text-center
            figure.mb-4
              img.mx-auto(src='@/assets/curso/temas/t5/tarjeta05_2.svg', alt='', style="width: 90px;")
            .flex-grow-1.d-flex.flex-column.justify-content-center
              h4.mb-3 Riesgo medio o moderado
              p.mb-0 Puede ocasionar afectaciones importantes, pero controlables mediante medidas de mitigación adecuadas.
        .col-12.col-sm-6.col-lg-4.mb-4
          .tarjeta--boton.color-primario.rounded-4.p-4.h-100.d-flex.flex-column.align-items-center.text-center
            figure.mb-4
              img.mx-auto(src='@/assets/curso/temas/t5/tarjeta05_3.svg', alt='', style="width: 90px;")
            .flex-grow-1.d-flex.flex-column.justify-content-center
              h4.mb-3 Riesgo alto o muy alto
              p.mb-0 Presenta una alta probabilidad de ocurrencia o consecuencias significativas. Requiere atención inmediata y controles prioritarios.
      //- Fin Tarjetas
      p(data-aos="fade-left") La utilización de estas escalas permite uniformar los criterios de evaluación y fortalecer la toma de decisiones durante la gestión del riesgo.      
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Factores determinantes del nivel de riesgo
      //- Título nivel 3 - Imagen
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img5.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 La valoración del nivel de riesgo depende de diferentes factores que permiten estimar la magnitud de las posibles consecuencias y establecer las medidas de control necesarias. Los principales factores son los siguientes:
          br
          br
          ul.lista-ul.color-vinotinto-custom.mb-0
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span <b>Probabilidad:</b> posibilidad de que el evento ocurra. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span <b>Impacto o severidad:</b> magnitud de las consecuencias que puede generar la materialización del riesgo. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span <b>Exposición:</b> frecuencia o tiempo durante el cual las personas, los bienes o los procesos permanecen expuestos al peligro. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span <b>Capacidad de mitigación:</b> eficacia de los controles, procedimientos y medidas preventivas implementadas para reducir el riesgo.
      p(data-aos="fade-left") El análisis conjunto de estos factores permite establecer prioridades y definir estrategias de prevención acordes con las necesidades de la organización.
</template>

<script>
export default {
  name: 'Tema5',
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
