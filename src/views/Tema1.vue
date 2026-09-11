<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Área técnica
      p(data-aos="fade-right") Esta sección del componente formativo integra los conocimientos y las habilidades necesarias para la correcta operación de sistemas, herramientas y procedimientos tecnológicos utilizados en el servicio de seguridad. En ella se fortalecen <b>el pensamiento lógico, la capacidad de observación, la atención y la percepción, competencias esenciales para identificar anomalías, anticipar riesgos y responder con precisión ante diferentes eventos.</b>
      .row.justify-content-center.align-items-stretch.mt-5.mb-5
        .col-12.col-md-6.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          .bg-color-3.p-4.rounded-4.h-100.d-flex.align-items-center
            p.mb-0 El aprendiz comprenderá el funcionamiento de los medios de comunicación, ya sean verbales, escritos, tecnológicos o por señales, así como las normas técnicas para la elaboración de informes y la correcta presentación y transmisión de la información en el entorno laboral.
        .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.d-flex
            img.rounded-3(src="@/assets/curso/temas/t1/img1.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
        .col-12.col-md-12.col-lg-4(data-aos="fade-left")
          .h-100.d-flex.flex-column.justify-content-end.ps-lg-4
            .mb-3.d-flex.justify-content-start
              img(src="@/assets/curso/temas/bg/icono.svg", alt="", style="width: 90px; height: 90px; object-fit: contain;")
            p.mb-0 Además, esta temática fomenta la alfabetización tecnológica del personal mediante el uso responsable de dispositivos, <i>software</i> y sistemas de registro. Su propósito es que el vigilante o supervisor actúe con rigor técnico, comunicando información precisa y verificable que contribuya a la toma de decisiones estratégicas dentro de la organización o ante las autoridades competentes.
      Separador
      //- Inicio Tema1.1
      .row
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.1 Desarrollo del pensamiento lógico y analítico
      p.mb-3(data-aos="fade-left") El desarrollo del pensamiento lógico y analítico fortalece la capacidad de razonar de manera estructurada y crítica en el contexto del servicio de seguridad. Esta habilidad permite identificar premisas, evaluar evidencias, organizar información y formular conclusiones fundamentadas frente a situaciones relacionadas con la vigilancia, el monitoreo, el control de accesos o la atención de incidentes.
      p(data-aos="fade-left") A continuación, se presenta un pódcast sobre el enfoque técnico-cognitivo, en el que se explica la importancia del pensamiento lógico y analítico para fortalecer la toma de decisiones en el servicio de seguridad.
      //- Inicio Podcast
      .container-fluid.tarjeta.tarjeta--blanca.px-0.mb-5(data-aos="fade-left")
        .row.g-0.align-items-stretch
          .col-12.col-lg-7.mb-3.mb-lg-0.d-flex
            .p-4.p-md-5.bg-custom-dark-teal.w-100.rounded-4.d-flex.align-items-center
              .row.g-3.align-items-center.w-100
                .col-md-5.text-center.mb-4.mb-md-0
                  img.img-fluid(src="@/assets/curso/temas/bg/podcast.svg" style="max-width: 200px;")
                .col-md-7.ps-md-4
                  h2.mb-3.fw-bold(style="color:#000") Pódcast
                  .tarjeta.bg-white.p-3.shadow-sm.border-lemon
                    h5.mb-3.fw-bold Enfoque técnico-cognitivo: pensamiento lógico y analítico
                    TarjetaAudio.color-primario(
                      texto="" 
                      :audio="podcast1"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
          .col-12.col-lg-5.d-flex.ps-lg-4
            figure.mb-0.w-100
              img.h-100.w-100(src='@/assets/curso/temas/t1/img2.png' alt='' style="object-fit: cover;")
      //- Fin Podcast
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Aplicaciones del desarrollo del pensamiento lógico y analítico en la seguridad privada
      //- Título nivel 3 - Imagen
      p(data-aos="fade-right") El desarrollo del pensamiento lógico y analítico en la seguridad privada permite evolucionar de un enfoque reactivo hacia uno proactivo y orientado a la anticipación. Esta competencia facilita abordar los problemas de manera sistemática, tomar decisiones informadas y gestionar eficazmente los riesgos. Su aplicación se refleja en diferentes escenarios del servicio de seguridad:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t1/tarjeta01_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Análisis de riesgos
                p Consiste en descomponer un entorno o una situación en elementos más pequeños para identificar vulnerabilidades y amenazas, constituyendo la base para desarrollar estrategias de gestión y mitigación de riesgos.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Toma de decisiones
                p Permite valorar distintas alternativas considerando factores como funcionalidad, costo y eficiencia, favoreciendo decisiones objetivas frente a incidentes o durante la evaluación de nuevas tecnologías.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Investigación de incidentes
                p Facilita la recopilación de información, la verificación de supuestos y la diferenciación entre hechos y opiniones para llegar a conclusiones fundamentadas.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Planificación estratégica
                p Contribuye a la planificación, gestión y evaluación de la seguridad a largo plazo, teniendo en cuenta las necesidades de los clientes y los cambios del entorno.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Identificación de patrones de conducta
                p Favorece el análisis de comportamientos para comprender los factores asociados a la toma de riesgos y fortalecer los procesos de formación en seguridad.
      //- Fin Slideshow      
      p(data-aos="fade-left") Estas aplicaciones fortalecen la capacidad del personal para interpretar situaciones complejas y responder de manera técnica, preventiva y estratégica.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Desarrollo de las habilidades de pensamiento lógico y analítico
      //- Título nivel 3 - Imagen      
      p(data-aos="fade-left") El fortalecimiento de estas habilidades requiere un proceso continuo de capacitación y práctica. Para ello, pueden implementarse las siguientes acciones:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t1/img3.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Capacitación en pensamiento crítico")
                p.mb-4 Desarrollar el razonamiento lógico y la resolución de problemas mediante ejercicios orientados al análisis objetivo y la disminución de errores de razonamiento.
              .row(titulo="Metodologías de descomposición de problemas")
                p.mb-4 Enseñar a dividir problemas complejos en elementos más pequeños y manejables para facilitar un análisis sistemático.
              .row(titulo="Análisis de casos prácticos")
                p.mb-4 Utilizar situaciones reales o simuladas para fortalecer la evaluación de escenarios y la toma de decisiones.
              .row(titulo="Fomento de la objetividad")
                p.mb-4 Promover que los análisis y las conclusiones se fundamenten en evidencias y hechos, evitando la influencia de opiniones o emociones personales.
              .row(titulo="Uso de herramientas analíticas")
                p.mb-4 Capacitar al personal en metodologías cualitativas y cuantitativas para el análisis de riesgos, amenazas y vulnerabilidades.
      //- Fin Accordion 1
      p(data-aos="fade-left") El desarrollo de estas competencias permite que los profesionales de la seguridad privada sean más eficientes, proactivos y estén mejor preparados para afrontar los desafíos propios del sector. Para fortalecer el pensamiento analítico en seguridad, es recomendable combinar diferentes tipos de ejercicios durante el proceso de formación.
      //- Inicio Tarjetas
      .row.justify-content-center(data-aos="fade-right")
        .col-12.col-sm-6.col-lg-4.mb-4
          .tarjeta--boton.color-primario.rounded-4.p-4.h-100.d-flex.flex-column.align-items-center.text-center
            figure.mb-4
              img.mx-auto(src='@/assets/curso/temas/t1/tarjeta02_1.svg', alt='', style="width: 90px;")
            .flex-grow-1.d-flex.flex-column.justify-content-center
              h4.mb-3 Análisis deductivo e inductivo
              p.mb-0 Determinar, por ejemplo, la causa probable de una serie de hurtos.
        .col-12.col-sm-6.col-lg-4.mb-4
          .tarjeta--boton.color-primario.rounded-4.p-4.h-100.d-flex.flex-column.align-items-center.text-center
            figure.mb-4
              img.mx-auto(src='@/assets/curso/temas/t1/tarjeta02_2.svg', alt='', style="width: 90px;")
            .flex-grow-1.d-flex.flex-column.justify-content-center
              h4.mb-3 Lectura e interpretación de evidencias
              p.mb-0 Analizar grabaciones, bitácoras y otros registros para sustentar conclusiones técnicas.
        .col-12.col-sm-6.col-lg-4.mb-4
          .tarjeta--boton.color-primario.rounded-4.p-4.h-100.d-flex.flex-column.align-items-center.text-center
            figure.mb-4
              img.mx-auto(src='@/assets/curso/temas/t1/tarjeta02_3.svg', alt='', style="width: 90px;")
            .flex-grow-1.d-flex.flex-column.justify-content-center
              h4.mb-3 Priorización con recursos limitados
              p.mb-0 Resolver simulaciones que impliquen responder a múltiples alarmas o incidentes de manera simultánea.
      //- Fin Tarjetas
      p(data-aos="fade-left") Finalmente, la evaluación debe fundamentarse tanto en los resultados obtenidos como en las soluciones propuestas, como en los procesos desarrollados, entre ellos la claridad de la argumentación y el uso de evidencias. Este enfoque favorece el desarrollo de criterios profesionales y reduce la adopción de soluciones intuitivas sin sustento.      
      Separador
      //- Inicio Tema1.2
      .row
        #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.2 Fundamentos y desarrollo de la atención y la percepción
      p.mb-4(data-aos="fade-left") En este apartado se analiza el funcionamiento de la atención, entendida como la focalización consciente sobre estímulos relevantes, y la percepción, concebida como la interpretación de los estímulos del entorno dentro de las operaciones de seguridad. Asimismo, se abordan los factores que favorecen o limitan estos procesos, las formas de entrenamiento, los errores cognitivos más frecuentes y su impacto en el desempeño del vigilante o supervisor. Comprender estos fundamentos permite fortalecer la vigilancia, mejorar la detección de anomalías y reducir los riesgos operativos.
      .row.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-9.order-2.order-lg-1
          .row.g-0.align-items-stretch.bg-color-2.mb-4
            .col-12.col-md-5.px-0
              img(src="@/assets/curso/temas/t1/img4.png", style="width:100%; height:100%; object-fit:cover;")
            .col-12.col-md-7.p-4.d-flex.align-items-center
              p.mb-0 La <b>atención</b> y la <b>percepción</b> son procesos cognitivos esenciales para la labor de vigilancia. La atención corresponde a la capacidad de concentrar los sentidos en un estímulo determinado, filtrando aquello que no resulta relevante. Por su parte, la percepción consiste en interpretar dichos estímulos para otorgarles un significado.
          p.mb-0 En el contexto de la seguridad privada, ambas funciones permiten detectar comportamientos inusuales, anticipar amenazas y actuar oportunamente ante eventos que comprometan la integridad de las personas, los bienes o la información bajo custodia. El éxito de la vigilancia depende, en gran medida, de la capacidad del profesional para mantener la concentración, interpretar correctamente el entorno e identificar oportunamente cualquier situación que pueda representar un riesgo para la operación.
        .col-lg-3.order-1.order-lg-2.mb-4.mb-lg-0
          figure.mb-0
            img(src="@/assets/curso/temas/t1/img5.png", data-aos="zoom-in", style="width: 100%; max-width: 380px;").mx-auto
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Desarrollo de la atención y la percepción para la prestación de servicios de seguridad
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") La atención y la percepción funcionan de manera complementaria. En primer lugar, la atención se dirige hacia un estímulo, ya sea visual, auditivo o táctil; posteriormente, la mente analiza esa información y le asigna un significado. Aunque este proceso parece sencillo, requiere entrenamiento constante, debido a que el entorno de trabajo del vigilante presenta múltiples estímulos de manera simultánea. Las principales manifestaciones de estos procesos en la seguridad privada se describen a continuación:
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
        TabsC.color-acento-contenido.mt-1
          .py-3.py-md-4(titulo="Atención selectiva")
            .row.align-items-center
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta03_1.png')
              .col-md-6.mb-4.mb-md-0
                h4 Atención selectiva
                p Es la capacidad de concentrarse en los estímulos realmente importantes, ignorando los elementos distractores.
                p <b>Ejemplo:</b> un vigilante en un centro comercial centra su atención en el comportamiento de las personas que ingresan y no en el ruido ambiente o la música de fondo.
          .py-3.py-md-4(titulo="Atención sostenida")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta03_2.png')
              .col-md-6
                h4 Atención sostenida
                p Permite mantener la concentración durante periodos prolongados, especialmente en actividades repetitivas.
                p <b>Ejemplo:</b> un operador de CCTV mantiene la vigilancia continua de múltiples cámaras sin perder la capacidad de reaccionar ante un evento inesperado.
          .py-3.py-md-4(titulo="Percepción espacial")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta03_3.png')
              .col-md-6
                h4 Percepción espacial
                p Consiste en reconocer la ubicación, la distancia y la relación entre los objetos y las personas del entorno.
                p <b>Ejemplo:</b> durante una ronda perimetral nocturna, el vigilante identifica diferencias en las sombras o movimientos que pueden indicar un intento de intrusión.
          .py-3.py-md-4(titulo="Percepción auditiva y visual")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta03_4.png')
              .col-md-6
                h4 Percepción auditiva y visual
                p Corresponde al uso coordinado de los principales sentidos operativos del vigilante. La audición permite detectar ruidos anómalos, mientras que la visión facilita identificar detalles o comportamientos que requieren verificación.
      //- Cierres Pestanas horizontales
      p(data-aos="fade-left") El desarrollo adecuado de estas capacidades mejora la anticipación frente a posibles amenazas y disminuye los márgenes de error humano durante las operaciones de vigilancia.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Importancia de la atención y la percepción en el servicio de seguridad
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") La atención y la percepción constituyen pilares fundamentales del desempeño del vigilante, ya que determinan la eficacia en la detección temprana de anomalías y situaciones de riesgo. Una falla en la atención, como distraerse o pasar por alto un detalle relevante, puede permitir que una amenaza se materialice sin ser detectada. En cambio, una percepción adecuadamente entrenada facilita reconocer patrones de riesgo antes de que evolucionen hacia una situación crítica.
      p(data-aos="fade-left") Por esta razón, el personal operativo debe fortalecer continuamente sus competencias perceptivas mediante rutinas de observación sistemática y ejercicios de concentración que favorezcan un desempeño más eficiente. La siguiente situación permite comprender la importancia de estas habilidades en el servicio.
      .row.justify-content-center.align-items-stretch.mb-5.g-0(data-aos="fade-right")
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t1/img6.png', alt='', style="object-fit: cover;")
        .col-lg-7.bg-color-2.d-flex.flex-column.justify-content-center.p-4
          p.fw-bold.mb-2 Contextualización
          p Durante una vigilancia nocturna, un vigilante detecta un sonido metálico proveniente del área de carga. En lugar de ignorarlo, dirige su atención hacia el punto específico, apaga la linterna para agudizar el oído y percibe un segundo sonido de menor intensidad. Posteriormente, se aproxima con precaución e identifica movimiento en la cerradura de una puerta. Gracias a la atención selectiva y a la percepción espacial, reconoce un intento de intrusión y activa el protocolo de reacción, evitando un posible hurto. Este ejemplo evidencia cómo la adecuada aplicación de la atención y la percepción permite transformar un estímulo aparentemente insignificante en una respuesta oportuna y efectiva.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Técnicas para fortalecer la atención y la percepción
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") El desarrollo de estas habilidades requiere entrenamiento permanente. Para fortalecer la atención y la percepción en el personal de seguridad privada, pueden implementarse las siguientes técnicas.
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
        TabsC.color-acento-contenido.mt-1
          .py-3.py-md-4(titulo="Entrenamiento de observación dirigida")
            .row.align-items-center
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta04_1.png')
              .col-md-6.mb-4.mb-md-0
                h4 Entrenamiento de observación dirigida
                p Recorrer zonas específicas para identificar cambios en el entorno, como objetos fuera de lugar, variaciones en la iluminación o comportamientos inusuales.
          .py-3.py-md-4(titulo="Ejercicios de enfoque progresivo")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta04_2.png')
              .col-md-6
                h4 Ejercicios de enfoque progresivo
                p Mantener la atención sobre un punto fijo durante un tiempo determinado, aumentando gradualmente la duración del ejercicio para fortalecer la concentración.
          .py-3.py-md-4(titulo="Rutinas de percepción auditiva")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta04_3.png')
              .col-md-6
                h4 Rutinas de percepción auditiva
                p Reconocer sonidos habituales del entorno, como pisadas, cerraduras o vehículos, clasificándolos según su intensidad y frecuencia para mejorar la identificación de anomalías.
      //- Cierres Pestanas horizontales
      p(data-aos="fade-left") La práctica constante de estas técnicas fortalece la capacidad de concentración, mejora la interpretación del entorno y favorece respuestas más rápidas y precisas frente a situaciones que puedan comprometer la seguridad.
</template>

<script>
import podcast1 from '@/assets/curso/temas/audio/podcast.mp3'
export default {
  name: 'Tema1',
  data: () => ({
    podcast1,
    mostrarIndicadorTarjetaAudio: true,
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
