<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 7
        h1 Mitigación en la seguridad privada
      p(data-aos="fade-left") La mitigación constituye una etapa esencial del ciclo de gestión del riesgo. Comprende las acciones dirigidas a reducir la probabilidad de ocurrencia de un evento, disminuir sus consecuencias o intervenir ambos factores.
      p(data-aos="fade-left") En seguridad privada, estas acciones pueden incluir el refuerzo de accesos, la actualización de procedimientos, la incorporación de sistemas tecnológicos, la capacitación del personal y la preparación para emergencias.
      .row.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-9.order-2.order-lg-1
          .row.g-0.align-items-stretch.bg-color-2.mb-4
            .col-12.col-md-5.px-0
              img(src="@/assets/curso/temas/t7/img1.png", style="width:100%; height:100%; object-fit:cover;")
            .col-12.col-md-7.p-4.d-flex.align-items-center
              p.mb-0 La mitigación es el conjunto de acciones preventivas, correctivas o compensatorias dirigidas a reducir la probabilidad o el impacto de un riesgo identificado dentro del sistema de seguridad. Mitigar un riesgo no siempre significa eliminarlo por completo. En muchos casos, implica controlar sus efectos adversos hasta alcanzar un nivel aceptable que permita garantizar la continuidad de las operaciones y proteger a las personas, los bienes, la información y los activos críticos.
          p.mb-0 En la seguridad privada, la mitigación tiene un enfoque operativo y técnico. Las medidas deben responder a las características de las amenazas, las vulnerabilidades existentes y el nivel de exposición de la organización.
        .col-lg-3.order-1.order-lg-2.mb-4.mb-lg-0
          figure.mb-0
            img(src="@/assets/curso/temas/t7/img2.png", data-aos="zoom-in", style="width: 100%; max-width: 380px;").mx-auto
      .row.justify-content-center.align-items-stretch.mb-5.g-0(data-aos="fade-right")        
        .col-lg-7.bg-color-2.d-flex.flex-column.justify-content-center.p-4
          p.fw-bold.mb-2 Ejemplo
          p Frente al riesgo de hurto interno, las medidas de mitigación pueden incluir protocolos de acceso restringido, rotación del personal en cargos sensibles y sistemas electrónicos que registren cada ingreso o salida de mercancías. La combinación de estos controles disminuye las oportunidades de sustracción, fortalece la trazabilidad y facilita la identificación de irregularidades.
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t7/img3.png', alt='', style="object-fit: cover;")
      Separador
      //- Inicio Tema7.1
      .row
        #t_7_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 7.1 Características de la mitigación
      p(data-aos="fade-left") Para que una medida de mitigación sea eficaz, debe cumplir unas condiciones mínimas relacionadas con su oportunidad, permanencia y capacidad de seguimiento:
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
                              img(src='@/assets/curso/temas/t7/tarjeta01_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Proactividad
                            p.text-center Se anticipa al evento y busca disminuir su probabilidad antes de que ocurra.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t7/tarjeta01_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Continuidad
                            p.text-center Requiere seguimiento, mantenimiento y actualización permanente.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t7/tarjeta01_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Integralidad
                            p.text-center Combina medidas tecnológicas, humanas, físicas y procedimentales.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t7/tarjeta01_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Eficiencia
                            p.text-center Optimiza los recursos disponibles sin afectar innecesariamente la operación.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t7/tarjeta01_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Evidencia
                            p.text-center Cada acción debe quedar documentada y contar con soportes que permitan comprobar su ejecución y eficacia.
                    .col-lg-4.order-lg-1.d-none.d-lg-block
                        figure
                          img(src='@/assets/curso/temas/t7/img4.png', style="width: 300px", data-aos="zoom-in").m-auto
              //- Fin Carrusel
            p(data-aos="fade-left") Estas características permiten que la mitigación se integre de manera efectiva con la gestión operativa y el mejoramiento continuo.
      Separador
      //- Inicio Tema7.2
      .row
        #t_7_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 7.2 Clases de mitigación
      p(data-aos="fade-left") La mitigación puede clasificarse según el momento y la finalidad de las acciones implementadas:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Preventiva")
                p.mb-4 Comprende acciones orientadas a evitar la ocurrencia del riesgo. 
                p <b>Ejemplo:</b> reforzar cerraduras, mejorar la iluminación y capacitar al personal en control de accesos.
              .row(titulo="Correctiva")
                p.mb-4 Incluye medidas aplicadas después de identificar una falla o vulnerabilidad.
                p <b>Ejemplo:</b> reemplazar un sistema de cámaras obsoleto o reparar un muro perimetral deteriorado.
              .row(titulo="Compensatoria")
                p.mb-4 Corresponde a alternativas temporales aplicadas cuando no es posible implementar inmediatamente una solución definitiva. 
                p <b>Ejemplo:</b> aumentar la supervisión presencial mientras se adquieren nuevos equipos tecnológicos.
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t7/img5.png", alt="").img400.m-auto
      //- Fin Accordion 1
      p(data-aos="fade-left") La selección de la medida depende del nivel de riesgo, los recursos disponibles, la urgencia de intervención y la capacidad operativa de la organización.
      Separador
      //- Inicio Tema7.3
      .row
        #t_7_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 7.3 Aplicación en seguridad privada
      p(data-aos="fade-left") Las medidas de mitigación deben formularse según el riesgo identificado y las condiciones específicas del entorno: 
      //- Inicio Tarjetas
      .row.justify-content-center(data-aos="fade-left")
        .col-12.col-sm-6.col-lg-4.mb-4
          .tarjeta--boton.color-primario.rounded-4.p-4.h-100.d-flex.flex-column.align-items-center.text-center
            figure.mb-4
              img.mx-auto(src='@/assets/curso/temas/t7/tarjeta02_1.svg', alt='', style="width: 90px;")
            .flex-grow-1.d-flex.flex-column.justify-content-center
              h4.mb-3 Intrusión en zona de carga
              p.mb-0 Instalar un cierre automático, incorporar sensores de movimiento y fortalecer el control de acceso.
        .col-12.col-sm-6.col-lg-4.mb-4
          .tarjeta--boton.color-primario.rounded-4.p-4.h-100.d-flex.flex-column.align-items-center.text-center
            figure.mb-4
              img.mx-auto(src='@/assets/curso/temas/t7/tarjeta02_2.svg', alt='', style="width: 90px;")
            .flex-grow-1.d-flex.flex-column.justify-content-center
              h4.mb-3 Incendio en sala de servidores
              p.mb-0 Implementar un sistema de extinción automática con gas inerte y monitoreo térmico.
        .col-12.col-sm-6.col-lg-4.mb-4
          .tarjeta--boton.color-primario.rounded-4.p-4.h-100.d-flex.flex-column.align-items-center.text-center
            figure.mb-4
              img.mx-auto(src='@/assets/curso/temas/t7/tarjeta02_3.svg', alt='', style="width: 90px;")
            .flex-grow-1.d-flex.flex-column.justify-content-center
              h4.mb-3 Fuga de información confidencial
              p.mb-0 Segmentar las redes, restringir permisos y capacitar al personal en protección de datos.
      //- Fin Tarjetas
      p(data-aos="fade-left") La relación directa entre el riesgo y la medida adoptada facilita la evaluación de resultados y evita la implementación de controles que no respondan a las necesidades reales.
      .row.justify-content-center.align-items-stretch.mb-5.g-0(data-aos="fade-right")        
        .col-lg-7.bg-color-2.d-flex.flex-column.justify-content-center.p-4
          p.fw-bold.mb-2 Ejercicios prácticos
          p Los ejercicios prácticos permiten evaluar la eficacia de las medidas de mitigación y el nivel de preparación del personal frente a situaciones críticas.
          ul.lista-ul.color-vinotinto-custom.mb-0
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span <b>Simulacros de evacuación y emergencia:</b> recrean situaciones como incendios, amenazas de bomba o fenómenos naturales para evaluar la rapidez, la coordinación y la eficacia de la respuesta. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span <b>Pruebas de intrusión (Red Team/Blue Team):</b> evalúan las defensas físicas o digitales mediante equipos que asumen funciones de ataque y respuesta controlada, con el propósito de identificar fallas en los controles y procedimientos. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span <b>Ejercicios de análisis de escenarios (tabletop exercises):</b> desarrollan discusiones guiadas sobre situaciones hipotéticas para evaluar la toma de decisiones, la coordinación y la aplicación del plan de emergencia. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span <b>Capacitación continua:</b> actualiza al personal sobre nuevos riesgos, procedimientos, controles y el uso adecuado de la tecnología de seguridad.
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t7/img6.png', alt='', style="object-fit: cover;")
      Separador
      //- Inicio Tema7.4
      .row
        #t_7_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 7.4 Plan de mitigación
      p(data-aos="fade-left") El plan de mitigación convierte el diagnóstico de riesgos en un conjunto organizado de acciones operativas. En este proceso se establecen las rutas de atención, los parámetros de criticidad, las estrategias de solución, las alternativas disponibles, los responsables, los recursos y los tiempos de ejecución.
      .row.justify-content-center.align-items-center.mb-5        
        .col-12.col-sm-9.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src="@/assets/curso/temas/t7/img7.png", data-aos="zoom-in", style="width: 600Dpx;")
        .col-12.col-lg-7(data-aos="fade-left")          
          .d-flex.align-items-start
            img.d-none.d-lg-block.me-3(src="@/assets/curso/temas/bg/lineas.svg", style="width: 100%; max-width: 90px;", alt="")
            p.mb-3 Su finalidad es orientar la reducción de los riesgos priorizados y fortalecer la capacidad de respuesta de la organización. De esta manera, el personal de seguridad puede participar en la planificación y ejecución de mejoras con una perspectiva técnica, preventiva y estratégica.
          p El plan de mitigación es un documento técnico-operativo en el que se consolidan las acciones destinadas a reducir los niveles de riesgo. En él se definen responsables, plazos, recursos, estrategias y mecanismos de verificación.
          p Este documento funciona como un plan de acción derivado de la matriz de riesgos y se integra al sistema de gestión de seguridad de la organización. Su propósito es reducir la probabilidad de ocurrencia de eventos adversos, disminuir sus consecuencias y articular los procedimientos, las capacidades institucionales y los recursos disponibles.
        p En la seguridad privada, el plan de mitigación tiene un alcance operativo inmediato, ya que permite priorizar intervenciones, reducir pérdidas y fortalecer la respuesta frente a incidentes.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Estructura básica del plan de mitigación
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") La elaboración del plan requiere organizar la información de manera secuencial, desde la identificación del riesgo hasta la definición de las medidas de seguimiento:
      //- Linea de tiempo
      .row.justify-content-center
        .col-lg-10
          PasosA.color-acento-contenido.mb-4(tipo="n")
            .row.align-items-center
              .col-12.col-lg
                h4 Etapa 1. Identificación del riesgo
                p Describe el evento que puede afectar a la organización, así como los activos, procesos o personas expuestos.
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t7/tarjeta03_1.png').img125
            .row.align-items-center
              .col-12.col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/t7/tarjeta03_2.png').img125
              .col-12.col-lg.text-start
                h4 Etapa 2. Nivel de criticidad
                p Indica la valoración obtenida en la matriz de riesgos y permite establecer la prioridad de intervención.
            .row.align-items-center
              .col-12.col-lg
                h4 Etapa 3. Rutas de atención
                p Definen los canales de comunicación, los procedimientos y los responsables de actuar frente al riesgo.
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t7/tarjeta03_3.png').img125
            .row.align-items-center
              .col-12.col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/t7/tarjeta03_4.png').img125
              .col-12.col-lg.text-start
                h4 Etapa 4. Estrategias de tratamiento
                p Incluyen las medidas preventivas, correctivas, tecnológicas, humanas, estructurales o procedimentales.
            .row.align-items-center
              .col-12.col-lg
                h5 Etapa 5. Alternativas de solución
                p Establecen acciones temporales o complementarias cuando la medida definitiva no puede implementarse de inmediato.
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t7/tarjeta03_5.png').img125
            .row.align-items-center
              .col-12.col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/t7/tarjeta03_6.png').img125
              .col-12.col-lg.text-start
                h4 Etapa 6. Responsables
                p Identifican a las personas o áreas encargadas de ejecutar, coordinar y supervisar cada acción.
            .row.align-items-center
              .col-12.col-lg
                h4 Etapa 7. Recursos
                p Determinan el personal, los equipos, la tecnología y el presupuesto necesarios.
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t7/tarjeta03_7.png').img125
            .row.align-items-center
              .col-12.col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/t7/tarjeta03_8.png').img125
              .col-12.col-lg.text-start
                h4 Etapa 8. Plazos
                p Definen las fechas de inicio, ejecución, seguimiento y cierre de las actividades.
            .row.align-items-center
              .col-12.col-lg
                h4 Etapa 9. Mecanismos de verificación
                p Permiten comprobar el cumplimiento y la eficacia de las medidas implementadas.
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t7/tarjeta03_9.png').img125
            .row.align-items-center
              .col-12.col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/t7/tarjeta03_10.png').img125
              .col-12.col-lg.text-start
                h4 Alcance
                p Delimita las zonas, los turnos, el personal, los procesos y el periodo de aplicación del plan.
      //- Linea de tiempo
      p(data-aos="fade-left") La integración de estos componentes facilita la ejecución coordinada de las medidas y permite comprobar sus resultados.
      .row.justify-content-center.mb-4(data-aos="fade-left")
        .col-lg-12        
          .d-flex.flex-column.flex-lg-row.align-items-center.bg-color-5.p-4.rounded-4           
            .flex-shrink-0.mb-3.mb-lg-0.pe-lg-4
              img(src='@/assets/curso/temas/bg/icono-pdf.svg', style="width: 80px")          
            .flex-grow-1.text-center.text-lg-start
              h4.mb-2 Planificación de la respuesta frente a riesgos identificados 
              p.mb-0 Se invita a leer el documento Planificación de la respuesta frente a riesgos identificados, donde se aborda la forma de planificar y organizar la respuesta ante los riesgos previamente identificados y valorados.
            .mt-3.mt-lg-0.ps-lg-4            
              a.btn.btn-custom-download.w-buttons.d-flex.align-items-center.justify-content-center.p-3(:href="obtenerLink('/downloads/Anexos/Anexo_Planificación_Respuesta_Frente_Riesgos_Identificados.pdf')" target="_blank")
                span.fw-bold.me-2.text-white Descargar
                i.fas.fa-file-download.text-white

</template>

<script>
export default {
  name: 'Tema7',
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
