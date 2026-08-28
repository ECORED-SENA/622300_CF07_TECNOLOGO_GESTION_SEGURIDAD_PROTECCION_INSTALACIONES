<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 6
        h1 Matriz de riesgos
      p(data-aos="fade-left") La matriz de riesgos es una herramienta metodológica que permite identificar, valorar, organizar y priorizar los riesgos presentes en una instalación, proceso o actividad. Su finalidad es representar de forma estructurada la relación entre la probabilidad de ocurrencia de un evento, el impacto de sus consecuencias y las medidas de control necesarias para reducir el nivel de riesgo.        
      .row.justify-content-center.align-items-stretch.mt-5.mb-5
        .col-12.col-md-6.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          .bg-color-3.p-4.rounded-4.h-100.d-flex.align-items-center
            p.mb-0 En la seguridad privada, la matriz de riesgos constituye un instrumento de gestión que facilita la toma de decisiones, orienta la planificación de las actividades operativas y fortalece la administración de los recursos destinados a la protección de personas, bienes e infraestructura. 
        .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.d-flex
            img.rounded-3(src="@/assets/curso/temas/t6/img1.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
        .col-12.col-md-12.col-lg-4(data-aos="fade-left")
          .h-100.d-flex.flex-column.justify-content-end.ps-lg-4
            .mb-3.d-flex.justify-content-start
              img(src="@/assets/curso/temas/bg/icono.svg", alt="", style="width: 90px; height: 90px; object-fit: contain;")
            p.mb-0 Por medio de esta herramienta, un supervisor puede identificar las áreas que requieren mayor vigilancia, los procesos que necesitan fortalecerse y las medidas de control que deben actualizarse en función del riesgo residual.
      .row.justify-content-center.mb-5
        .col-md-auto
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 3.
            span Matriz de riesgos
          img.rounded-3(src="@/assets/curso/temas/t6/img2.png", alt="Matriz de evaluación de riesgos que relaciona la probabilidad de ocurrencia con la severidad del impacto mediante una escala de cinco niveles. Incluye una cuadrícula de colores que clasifica el riesgo desde muy bajo hasta extremo, valores numéricos para cada combinación de probabilidad e impacto y una leyenda con criterios generales de tratamiento y prioridad para cada nivel de riesgo. ", style="width: 100%; height: 100%; object-fit: cover;")
      Separador
      //- Inicio Tema6.1
      .row
        #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 6.1 Tipos de matrices de riesgo
      p(data-aos="fade-left") Existen diferentes tipos de matrices de riesgo, cuya selección depende de la complejidad de la organización, del tipo de actividad desarrollada y del nivel de detalle requerido durante la evaluación:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-6.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t6/img3.png", alt="").img400.m-auto
          .col-lg-6
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Matriz cualitativa")
                p.mb-4 Organiza los riesgos mediante categorías descriptivas, como bajo, medio y alto. Es apropiada para evaluaciones rápidas o instalaciones con menor complejidad.
              .row(titulo="Matriz semicuantitativa")
                p.mb-4 Combina escalas numéricas de probabilidad e impacto, generalmente de 1 a 5, permitiendo una valoración más precisa mediante una matriz de 5 × 5.
              .row(titulo="Matriz cuantitativa o ponderada")
                p.mb-4 Utiliza datos numéricos continuos y puede asignar diferentes ponderaciones a la probabilidad y al impacto según los objetivos de la organización.
      //- Fin Accordion 1
            //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-6
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Matriz dinámica o digital")
                p.mb-4 Se actualiza automáticamente mediante plataformas tecnológicas o <i>software</i> especializado, permitiendo el seguimiento en tiempo real de los riesgos.
              .row(titulo="Matriz de peligros (SG-SST)")
                p.mb-4 Está orientada a la gestión de la Seguridad y Salud en el Trabajo e identifica peligros y riesgos laborales de diferente naturaleza.
              .row(titulo="Matrices específicas por sector o área")
                p.mb-4 Se adaptan a necesidades particulares, como riesgos financieros, tecnológicos, de proyectos o de cumplimiento normativo.
          .col-lg-6.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t6/img4.png", alt="").img400.m-auto
      //- Fin Accordion 1
      p(data-aos="fade-left") Aunque existen diferentes metodologías, todas persiguen el mismo objetivo: identificar, valorar, comparar y priorizar los riesgos para facilitar la toma de decisiones y la formulación de medidas de mitigación.
      Separador
      //- Inicio Tema6.2
      .row
        #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 6.2 Funcionamiento de la matriz de riesgos
      p(data-aos="fade-left") La matriz de riesgos sigue un proceso organizado que permite evaluar de forma sistemática los riesgos presentes en una organización. Las etapas principales son las siguientes: 
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
                              img(src='@/assets/curso/temas/t6/tarjeta01_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Etapa 1. Identificación de activos
                            p.text-center Se determinan los elementos que requieren protección, como personas, infraestructura, equipos, información o procesos.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t6/tarjeta01_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Etapa 2. Identificación de amenazas y vulnerabilidades
                            p.text-center Se reconocen los factores que pueden afectar los activos y las debilidades que facilitan la materialización de las amenazas.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t6/tarjeta01_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Etapa 3. Valoración del riesgo inherente
                            p.text-center Se asignan valores de probabilidad <b>(P)</b> e impacto <b>(I)</b> y se calcula el riesgo mediante la fórmula <b>R = P × I</b>.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t6/tarjeta01_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Etapa 4. Evaluación de controles
                            p.text-center Se revisan las medidas preventivas existentes para determinar su eficacia.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t6/tarjeta01_5.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Etapa 5. Determinación del riesgo residual
                            p.text-center Se establece el nivel de riesgo que permanece después de aplicar los controles implementados.
                    .col-lg-4.order-lg-1.d-none.d-lg-block
                        figure
                          img(src='@/assets/curso/temas/t6/img5.png', style="width: 500px", data-aos="zoom-in").m-auto
              //- Fin Carrusel
            p(data-aos="fade-left") Este procedimiento permite valorar la efectividad de las medidas de seguridad y establecer nuevas acciones de mejora cuando sea necesario.
      .row.justify-content-center(data-aos="fade-right")
        .col-lg-10.bg-color-2.p-5.rounded-4
          h5 Ejemplo
          p En un edificio empresarial se identifica una vulnerabilidad en los accesos vehiculares. La evaluación inicial arroja los siguientes resultados:
          p.fw-bold R = P × I
          p.fw-bold R = 4 × 5 = 20
          //- Inicio Tabla
          .row.justify-content-center.mb-5
            .col-md-auto.col-lg-12
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 10.
                span Ejemplo de valoración del riesgo y riesgo residual
              .tabla-a
                table
                  thead
                    tr
                      th(style="width: 30%") Elemento
                      th(style="width: 70%") Valor
                  tbody
                    tr
                      td <b>Probabilidad (P)</b>
                      td 4
                    tr
                      td <b>Impacto (I)</b>
                      td 5
                    tr
                      td <b>Riesgo inicial (R = P × I)</b>
                      td 20 (<b>alto</b>)
                    tr
                      td <b>Control implementado</b>
                      td Instalación de bolardos y sistema automatizado de registro vehicular.
                    tr
                      td <b>Riesgo residual</b>
                      td 10 (<b>medio</b>)
            p.mt-5(data-aos="fade-left") Este ejemplo evidencia cómo la implementación de medidas correctivas reduce el nivel de riesgo y fortalece la seguridad de la instalación.
      Separador
      //- Inicio Tema6.3
      .row
        #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 6.3 Proceso de aplicación de la matriz de riesgos
      p(data-aos="fade-left") La utilización de la matriz de riesgos comprende un proceso continuo de análisis, control y seguimiento:
      //- Linea de tiempo
      .row.justify-content-center
        .col-lg-10
          PasosA.color-acento-contenido.mb-4(tipo="n")
            .row.align-items-center
              .col-12.col-lg
                h4 Fase 1. Identificación de riesgos
                p Se reconocen los eventos que pueden afectar los objetivos de la organización.
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t6/tarjeta02_1.png').img125
            .row.align-items-center
              .col-12.col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/t6/tarjeta02_2.png').img125
              .col-12.col-lg.text-start
                h4 Fase 2. Evaluación
                p Se determina la probabilidad de ocurrencia y el impacto potencial de cada riesgo.
            .row.align-items-center
              .col-12.col-lg
                h4 Fase 3. Valoración y priorización
                p Se calcula el nivel de riesgo y se establece el orden de atención según su criticidad.
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t6/tarjeta02_3.png').img125
            .row.align-items-center
              .col-12.col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/t6/tarjeta02_4.png').img125
              .col-12.col-lg.text-start
                h4 Fase 4. Tratamiento y control
                p Se definen las acciones para eliminar, reducir, transferir o aceptar los riesgos, asignando responsables y plazos de ejecución.
            .row.align-items-center
              .col-12.col-lg
                h5 Fase 5. Monitoreo y revisión
                p Se realiza el seguimiento periódico de los riesgos y de la eficacia de las medidas implementadas, actualizando la matriz cuando sea necesario.
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t6/tarjeta02_5.png').img125
      //- Linea de tiempo
      p(data-aos="fade-left") La matriz de riesgos debe mantenerse permanentemente actualizada para responder a los cambios del entorno y garantizar la eficacia del sistema de gestión del riesgo.
      Separador
      //- Inicio Tema6.4
      .row
        #t_6_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 6.4 Casuística y aplicación práctica
      .row.justify-content-center.align-items-center        
        .col-12.col-sm-9.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t6/img6.png', alt='', style="width: 600px;")
        .col-12.col-lg-7.order-2.order-lg-1.bg-color-4.p-4(data-aos="fade-left")
          p.mb-3 En Colombia, la matriz de riesgos constituye una herramienta ampliamente utilizada durante los estudios de seguridad requeridos para la prestación de servicios de vigilancia. Además de facilitar la identificación y valoración de amenazas, fortalece la trazabilidad de las decisiones y respalda técnicamente los procesos de auditoría, supervisión y evaluación del servicio.
          p Un ejemplo frecuente se presenta en <b>las entidades financieras</b>, donde riesgos como el hurto, el sabotaje, el incendio o la intrusión deben evaluarse de manera independiente para cada sede o sucursal. Mientras el riesgo de incendio puede disminuir gracias a la existencia de sistemas automáticos de detección y extinción, el riesgo de hurto con violencia suele requerir medidas de protección adicionales debido a su mayor impacto sobre las personas y la reputación institucional.
      .row.justify-content-center.mb-5
        .col-md-auto
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 4.
            span Ejemplo de matriz de riesgos aplicada a una entidad financiera
          img.rounded-3(src="@/assets/curso/temas/t6/img7.png", alt="Matriz de riesgos que clasifica eventos según la probabilidad de ocurrencia y el nivel de impacto mediante una cuadrícula de cinco por cinco con categorías codificadas por colores. Incluye valores numéricos de riesgo, una leyenda con los niveles bajo, medio, alto y crítico, y ejemplos de amenazas como hurto con violencia, intrusión no autorizada, falla del sistema de control de acceso, sabotaje a equipos tecnológicos e incendio ubicados en diferentes niveles de criticidad.", style="width: 100%; height: 100%; object-fit: cover;")
      p(data-aos="fade-left") Asimismo, la matriz de riesgos constituye una herramienta de aprendizaje para el personal en formación, ya que permite comprender la relación existente entre amenazas, vulnerabilidades, procedimientos, recursos y decisiones operativas. Por esta razón, su elaboración, interpretación y actualización representan una competencia esencial dentro de la formación técnica en vigilancia y seguridad privada, al fortalecer el pensamiento analítico y la toma de decisiones fundamentadas.
      Separador
      //- Inicio Tema6.5
      .row
        #t_6_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 6.5 Matriz de riesgos aplicada a la seguridad privada
      p(data-aos="fade-left") La matriz de riesgos es la herramienta principal para transformar las observaciones realizadas durante las inspecciones de seguridad en información organizada que facilite la toma de decisiones. Su aplicación permite identificar, valorar y priorizar los riesgos, definiendo dónde deben fortalecerse los controles y optimizando la asignación de los recursos disponibles.
      .row.justify-content-center.mb-4(data-aos="fade-left")
        .col-lg-12        
          .d-flex.flex-column.flex-lg-row.align-items-center.bg-color-5.p-4.rounded-4           
            .flex-shrink-0.mb-3.mb-lg-0.pe-lg-4
              img(src='@/assets/curso/temas/bg/icono-pdf.svg', style="width: 80px")          
            .flex-grow-1.text-center.text-lg-start
              h4.mb-2 Matriz de riesgos aplicada a la seguridad privada
              p.mb-0 <b>Se invita a leer el documento Matriz de riesgos aplicada a la seguridad privada</b>, donde se aborda el procedimiento para identificar, evaluar, priorizar y controlar los riesgos en operaciones de seguridad privada.
            .mt-3.mt-lg-0.ps-lg-4            
              a.btn.btn-custom-download.w-buttons.d-flex.align-items-center.justify-content-center.p-3(:href="obtenerLink('/downloads/Lectura-Programas-técnicos-para-la-prevención-sanitaria.docx')" target="_blank")
                span.fw-bold.me-2.text-white Descargar
                i.fas.fa-file-download.text-white
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Asignación de probabilidad e impacto
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") La valoración de cada riesgo se realiza mediante la asignación de valores de probabilidad e impacto previamente definidos.
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Tabla
            .row.justify-content-center.mb-5
              .col-md-auto.col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 11.
                  span Escala de valoración de la probabilidad y el impacto del riesgo
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 10%") Valor
                        th(style="width: 45%") Probabilidad (P)
                        th(style="width: 45%") Impacto (I)
                    tbody
                      tr
                        td 1
                        td Muy rara (menos de un evento cada cinco años).
                        td Insignificante (sin afectación operativa).
                      tr
                        td 2
                        td Rara (un evento cada dos a cinco años).
                        td Bajo (daños menores).
                      tr
                        td 3
                        td Ocasional (aproximadamente un evento al año).
                        td Moderado (interrupción parcial de la operación).
                      tr
                        td 4
                        td Frecuente (mensualmente o con mayor frecuencia).
                        td Alto (pérdidas económicas relevantes).
                      tr
                        td 5
                        td Muy frecuente (semanalmente o de manera constante).
                        td Catastrófico (lesiones graves, cierre de operaciones o pérdida total).
            .row.justify-content-center(data-aos="fade-right")
              .col-lg-10.bg-color-2.p-5.rounded-4
                h5 Cálculo del nivel de riesgo
                p El nivel de riesgo se obtiene mediante la expresión:
                p.fw-bold R = P × I
                p La interpretación de los resultados puede realizarse con la siguiente escala.
                //- Inicio Tabla
                .row.justify-content-center.mb-5
                  .col-md-auto.col-lg-8
                    .titulo-sexto.color-acento-contenido.mb-3
                      h5 Tabla 12.
                      span Clasificación del nivel de riesgo según el resultado obtenido
                    .tabla-a
                      table
                        thead
                          tr
                            th(style="width: 20%") Resultado
                            th(style="width: 40%") Nivel de riesgo
                        tbody
                          tr
                            td <b>1 a 5</b>
                            td Bajo
                          tr
                            td <b>6 a 10</b>
                            td Moderado
                          tr
                            td <b>11 a 15</b>
                            td Alto
                          tr
                            td <b>16 a 25</b>
                            td Crítico
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Elaboración de la matriz 5 × 5
      //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-stretch.mb-5
        .col-12.col-md-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
          .bg-color-3.p-4.rounded-4.h-100.d-flex.align-items-center
            p.mb-0 La <b>matriz de riesgos 5 × 5</b> es una herramienta que permite representar de forma gráfica el nivel de riesgo obtenido al relacionar la <b>probabilidad</b> de ocurrencia de un evento con el <b>impacto</b> que este puede generar. Su elaboración facilita la identificación de los riesgos que requieren atención prioritaria y orienta la selección de las medidas de control más apropiadas.
        .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.d-flex
            img.rounded-3(src="@/assets/curso/temas/t6/img8.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
        .col-12.col-md-12.col-lg-5(data-aos="fade-left")
          .h-100.d-flex.flex-column.justify-content-end.ps-lg-4
            .mb-3.d-flex.justify-content-start
              img(src="@/assets/curso/temas/bg/icono.svg", alt="", style="width: 90px; height: 90px; object-fit: contain;")
            p.mb-0 Para construir la matriz, se asigna un valor de <b>1 a 5</b> a la probabilidad y otro de <b>1 a 5</b> al impacto, de acuerdo con los criterios definidos durante la evaluación. Posteriormente, la probabilidad se ubica en las filas y el impacto en las columnas. La intersección de ambos valores corresponde al nivel de riesgo, el cual puede representarse mediante una escala de colores para facilitar su interpretación. Antes de analizar un riesgo específico, es importante comprender la estructura general de la matriz 5 × 5.
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Tabla
            .row.justify-content-center.mb-5
              .col-md-auto.col-lg-8
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 13.
                  span Matriz de riesgos 5 × 5
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 50%") Probabilidad
                        th(style="width: 10%") 1 Insignificante
                        th(style="width: 10%") 2 Bajo
                        th(style="width: 10%") 3 Moderado
                        th(style="width: 10%") 4 Alto
                        th(style="width: 10%") 5 Catastrófico
                    tbody
                      tr
                        td 5. Muy frecuente
                        td 5
                        td 10
                        td 15
                        td 20
                        td 25
                      tr
                        td 4. Frecuente
                        td 4
                        td 8
                        td 12
                        td 16
                        td 20
                      tr
                        td 3. Ocasional
                        td 3
                        td 6
                        td 9
                        td 12
                        td 15
                      tr
                        td 2. Rara
                        td 2
                        td 4
                        td 6
                        td 8
                        td 10
                      tr
                        td 1. Muy rara
                        td 1
                        td 2
                        td 3
                        td 4
                        td 5
            p(data-aos="fade-left") La interpretación de la matriz se realiza a partir de la puntuación obtenida. Los valores más bajos representan riesgos aceptables o de baja prioridad, mientras que los valores intermedios requieren seguimiento y medidas de control. Los valores más altos corresponden a riesgos críticos que demandan una intervención inmediata para reducir su probabilidad de ocurrencia, su impacto o ambos.
            p(data-aos="fade-left") Una vez elaborada la matriz, se identifican los riesgos con mayor puntuación y se revisa la eficacia de los controles existentes para determinar si es necesario implementar acciones preventivas o correctivas adicionales.
            .row.justify-content-center(data-aos="fade-right")
              .col-lg-10.bg-color-2.p-5.rounded-4
                h5 Ejemplo
                p Durante la inspección de una instalación se identifica el riesgo de intrusión por el portón vehicular. Después de evaluar las condiciones del lugar, se asigna una probabilidad de 4 (frecuente) y un impacto de 5 (catastrófico), obteniendo una puntuación de 20, clasificada como un riesgo alto o crítico. La siguiente tabla presenta  la ubicación de este riesgo dentro de la matriz.
                //- Inicio Tabla
                .row.justify-content-center.mb-5
                  .col-md-auto.col-lg-12
                    .titulo-sexto.color-acento-contenido.mb-3
                      h5 Tabla 14.
                      span Ejemplo de aplicación de la matriz 5 × 5 para un riesgo de intrusión
                    .tabla-a
                      table
                        thead
                          tr
                            th(style="width: 30%") Probabilidad
                            th(style="width: 10%") 1
                            th(style="width: 10%") 2
                            th(style="width: 10%") 3
                            th(style="width: 10%") 4
                            th(style="width: 30%") 5
                        tbody
                          tr
                            td 5. Muy frecuente
                            td 5
                            td 10
                            td 15
                            td 20
                            td 25
                          tr
                            td 4. Frecuente
                            td 4
                            td 8
                            td 12
                            td 16
                            td <b>20  ← Riesgo evaluado</b>
                          tr
                            td 3. Ocasional
                            td 3
                            td 6
                            td 9
                            td 12
                            td 15
                          tr
                            td 2. Rara
                            td 2
                            td 4
                            td 6
                            td 8
                            td 10
                          tr
                            td 1. Muy rara
                            td 1
                            td 2
                            td 3
                            td 4
                            td 5
                p(data-aos="fade-left") Con base en este resultado, se priorizan acciones como la instalación de un sistema de cierre automático del portón, el fortalecimiento del control de acceso, la reconfiguración de las cámaras de videovigilancia y el incremento de las rondas de supervisión en los horarios de mayor exposición.
                p(data-aos="fade-left") La aplicación sistemática de la matriz de riesgos permite transformar la información obtenida durante las inspecciones en decisiones técnicas fundamentadas, facilitando la priorización de los riesgos, la asignación de recursos y la implementación de medidas preventivas que fortalezcan la seguridad de las instalaciones.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Evaluación residual y revisión periódica
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Una vez implementados los controles, es necesario recalcular los valores de probabilidad e impacto para determinar el <b>riesgo residual</b>. Este corresponde al nivel de riesgo que permanece después de aplicar las medidas preventivas, correctivas o compensatorias. La evaluación residual permite establecer si los controles implementados redujeron el riesgo hasta un nivel aceptable o si este continúa siendo alto y requiere medidas adicionales:
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
                              img(src='@/assets/curso/temas/t6/tarjeta03_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Reevaluación de la probabilidad
                            p.text-start Determinar si los controles disminuyeron la posibilidad de ocurrencia del evento.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t6/tarjeta03_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Reevaluación del impacto
                            p.text-start Analizar si las medidas implementadas reducen las posibles consecuencias.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t6/tarjeta03_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Cálculo del riesgo residual
                            p.text-start Multiplicar los nuevos valores de probabilidad e impacto.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t6/tarjeta03_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Comparación de resultados
                            p.text-start Contrastar el riesgo inicial con el riesgo residual para establecer la eficacia de los controles.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t6/tarjeta03_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Definición de nuevas acciones
                            p.text-start Implementar controles adicionales cuando el riesgo permanezca por encima del nivel aceptable.
                    .col-lg-4.order-lg-1.d-none.d-lg-block
                        figure
                          img(src='@/assets/curso/temas/t6/img9.png', style="width: 500px", data-aos="zoom-in").m-auto
              //- Fin Carrusel
            p(data-aos="fade-left") La matriz debe actualizarse periódicamente, al menos una vez al año, o después de eventos significativos, cambios en la infraestructura, modificaciones operativas, incorporación de nuevas tecnologías o aparición de amenazas.
            p(data-aos="fade-left") La evaluación del riesgo es un proceso dinámico que debe ajustarse conforme cambian las condiciones de amenaza, vulnerabilidad y exposición. Por esta razón, la revisión periódica es indispensable para mantener actualizada la información y garantizar que los controles continúen siendo eficaces.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Evaluación de vulnerabilidades y niveles de vulnerabilidad
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") En seguridad privada, la vulnerabilidad se evalúa considerando las condiciones estructurales, humanas, tecnológicas y procedimentales que pueden facilitar la materialización de una amenaza. El nivel de vulnerabilidad influye directamente en el cálculo del riesgo, porque puede aumentar o disminuir la probabilidad de ocurrencia de un evento. Los niveles de vulnerabilidad pueden clasificarse de la siguiente manera:
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
        TabsC.color-acento-contenido.mt-1
          .py-3.py-md-4(titulo="Escenarios públicos")
            .row.align-items-center
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/t6/tarjeta04_1.png')
              .col-md-6.mb-4.mb-md-0
                h4 Alta
                p Existe una deficiencia grave o ausencia total de controles. 
                p <b>Ejemplo:</b> los accesos principales no cuentan con iluminación ni cámaras de vigilancia.
          .py-3.py-md-4(titulo="Escenarios privados")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t6/tarjeta04_2.png')
              .col-md-6
                h4 Media
                p Existen controles parciales, insuficientes o aplicados de manera irregular. 
                p <b>Ejemplo:</b> el sistema de CCTV funciona, pero no cuenta con monitoreo continuo.
          .py-3.py-md-4(titulo="Escenarios mixtos (público-privados)")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t6/tarjeta04_3.png')
              .col-md-6
                h4 Baja
                p Los controles son adecuados, permanentes y cuentan con seguimiento.
                p <b> Ejemplo:</b> el personal está capacitado y los sistemas tecnológicos disponen de mecanismos de respaldo.
      //- Cierres Pestanas horizontales
      p(data-aos="fade-left") La clasificación de la vulnerabilidad facilita la priorización de las medidas de intervención y permite concentrar los recursos en las áreas con mayores debilidades.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Asignación de puntajes y priorización
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") La asignación de puntajes permite organizar los riesgos según su nivel de severidad y definir la respuesta requerida. Para ello, se aplican rangos numéricos asociados con medidas de intervención específicas.
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Tabla
            .row.justify-content-center.mb-5
              .col-md-auto.col-lg-8
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 15.
                  span Interpretación de los niveles de riesgo
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 20%") Rango
                        th(style="width: 60%") Nivel de riesgo y acción sugerida                 
                    tbody
                      tr
                        td <b>1 a 5</b>
                        td <b>Bajo:</b> mantener los controles existentes y realizar seguimiento periódico.
                      tr
                        td <b>6 a 10</b>
                        td <b>Moderado:</b> implementar mejoras progresivas y revisar la eficacia de los controles.
                      tr
                        td <b>11 a 15</b>
                        td <b>Alto:</b> aplicar medidas correctivas en el corto plazo y asignar responsables.
                      tr
                        td <b>16 a 25</b>
                        td <b>Crítico:</b> ejecutar acciones inmediatas, realizar una revisión estructural e informar al responsable de seguridad.
            p(data-aos="fade-left") Estas escalas orientan la asignación de recursos humanos, técnicos y financieros hacia las áreas o procesos que presentan mayor exposición.          
            Separador
            //- Inicio Tema6.6
            .row
              #t_6_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
                h2 6.6 Inspección de vulnerabilidades de las instalaciones y medios que deben protegerse
            //- Inicio Accordion 1
            p(data-aos="fade-left") La inspección de vulnerabilidades es el proceso mediante el cual se examina directamente el estado de los activos físicos, humanos y tecnológicos para identificar debilidades que puedan comprometer la seguridad. Este procedimiento permite analizar instalaciones, equipos, sistemas, personas y procesos, y convertir los hallazgos en recomendaciones de mejora. También proporciona al personal de vigilancia y supervisión criterios para participar en inspecciones técnicas y aportar información confiable para la gestión del riesgo.
            p(data-aos="fade-left") Las inspecciones periódicas permiten comprobar la eficacia de los controles y detectar deficiencias antes de que se materialicen amenazas. El procedimiento recomendado comprende las siguientes etapas:
      //- Linea de tiempo
      .row.justify-content-center
        .col-lg-10
          PasosA.color-acento-contenido.mb-4(tipo="n")
            .row.align-items-center
              .col-12.col-lg
                h4 Etapa  1. Planificación de la inspección
                p Definir los objetivos, las áreas, los horarios, los recursos y los responsables.
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t6/tarjeta05_1.png').img125
            .row.align-items-center
              .col-12.col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/t6/tarjeta05_2.png').img125
              .col-12.col-lg.text-start
                h4 Etapa  2. Recorrido físico
                p Examinar accesos, cercas, iluminación, cámaras, cerraduras, señalización, rutas de evacuación y áreas críticas.
            .row.align-items-center
              .col-12.col-lg
                h4 Etapa 3. Entrevista al personal
                p Comprobar el conocimiento de los protocolos operativos y de emergencia.
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t6/tarjeta05_3.png').img125
            .row.align-items-center
              .col-12.col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/t6/tarjeta05_4.png').img125
              .col-12.col-lg.text-start
                h4 Etapa 4. Registro fotográfico y documental
                p Reunir evidencias de los hallazgos mediante fotografías, formatos, bitácoras y demás soportes.
            .row.align-items-center
              .col-12.col-lg
                h5 Etapa 5. Valoración de hallazgos
                p Clasificar cada debilidad como leve, moderada o grave, según su impacto potencial.
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t6/tarjeta05_5.png').img125
            .row.align-items-center
              .col-12.col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/t6/tarjeta05_6.png').img125
              .col-12.col-lg.text-start
                h4 Etapa 6. Informe de inspección
                p Registrar los resultados, formular recomendaciones y establecer un plan de acción.
      //- Linea de tiempo
      .row.justify-content-center.align-items-stretch.mb-5.g-0(data-aos="fade-right")
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t6/img10.png', alt='', style="object-fit: cover;")
        .col-lg-7.bg-color-2.d-flex.flex-column.justify-content-center.p-4
          p.fw-bold.mb-2 Ejemplo
          p.mb-3 Durante una inspección en una empresa de transporte de valores se identifica que la zona de carga no cuenta con doble control de acceso ni blindaje lateral. El hallazgo se clasifica como una vulnerabilidad alta.
          p Como medidas de intervención, se propone reforzar la estructura, implementar un segundo mecanismo de control y actualizar el protocolo de revisión de vehículos. La inspección sistemática permite convertir los hallazgos del entorno en acciones concretas de protección y mejora.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Seguimiento de las actividades de gestión de riesgos
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") La gestión del riesgo no finaliza con la implementación de los controles. Requiere un seguimiento continuo que permita comprobar su cumplimiento, medir su eficacia, adaptarlos a nuevas condiciones y documentar los resultados obtenidos.
      p(data-aos="fade-left") El seguimiento consiste en revisar la implementación y el funcionamiento de las medidas correctivas derivadas de la matriz de riesgos. Para ello, deben utilizarse indicadores de cumplimiento, registros operativos y evidencias documentales. Las principales actividades de seguimiento en seguridad privada son las siguientes:
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-6.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t6/img11.png", alt="").img400.m-auto
          .col-lg-6
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Revisión periódica de bitácoras")
                p.mb-4 Identificar novedades recurrentes, fallas operativas y cambios en las condiciones del servicio.
              .row(titulo="Análisis de incidentes")
                p.mb-4 Establecer causas, consecuencias y lecciones aprendidas para evitar su repetición.
              .row(titulo="Retroalimentación al personal")
                p.mb-4 Comunicar resultados, reforzar procedimientos y corregir prácticas inadecuadas.
      //- Fin Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center          
          .col-lg-6
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Actualización de la matriz")
                p.mb-4 Incorporar nuevos riesgos, modificar valoraciones y ajustar los controles existentes.
              .row(titulo="Actualización de los planes de mitigación")
                p.mb-4 Adaptar las acciones de respuesta a las condiciones actuales de la organización.
              .row(titulo="Comunicación con el cliente o la gerencia")
                p.mb-4 Informar sobre riesgos persistentes, avances, incumplimientos y necesidades de intervención.
          .col-lg-6.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t6/img12.png", alt="").img400.m-auto
      //- Fin Accordion 1
      .row.justify-content-center.align-items-stretch.mb-5.g-0(data-aos="fade-right")
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t6/img13.png', alt='', style="object-fit: cover;")
        .col-lg-7.bg-color-2.d-flex.flex-column.justify-content-center.p-4
          p.fw-bold.mb-2 Ejemplo
          p Después de implementar un sistema de control de acceso biométrico, el seguimiento debe incluir la revisión de los registros de uso, el mantenimiento de los equipos, la capacitación del personal y la comparación de los incidentes de acceso no autorizado antes y después de su instalación. Este proceso permite establecer si el control cumple su propósito o requiere ajustes técnicos y operativos.

</template>

<script>
export default {
  name: 'Tema6',
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
