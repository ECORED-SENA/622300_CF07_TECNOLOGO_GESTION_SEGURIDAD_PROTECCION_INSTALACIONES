<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      p.mb-4(data-aos="fade-left") La seguridad privada constituye una actividad esencial para la protección de las personas, los bienes, la información y las instalaciones frente a eventos que puedan afectar la continuidad de las operaciones. Su adecuada gestión requiere la aplicación de criterios técnicos, procedimientos estandarizados y una actuación fundamentada en el análisis objetivo de las condiciones presentes en cada entorno. De esta manera, las decisiones adoptadas contribuyen a prevenir incidentes, reducir la exposición al riesgo y fortalecer la capacidad de respuesta ante situaciones adversas.
      .row.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-9.order-2.order-lg-1
          .row.g-0.align-items-stretch.bg-color-2.mb-4
            .col-12.col-md-5.px-0
              img(src="@/assets/curso/temas/intro/img1.png", style="width:100%; height:100%; object-fit:cover;")
            .col-12.col-md-7.p-4.d-flex.align-items-center
              p.mb-0 El ejercicio de las funciones de seguridad demanda el desarrollo de competencias orientadas a la observación, el análisis, la comunicación y la evaluación permanente del entorno. Estas capacidades permiten reconocer condiciones de riesgo, identificar oportunidades de mejora y establecer medidas de prevención acordes con las características de cada instalación o servicio. Asimismo, favorecen la toma de decisiones fundamentadas y el cumplimiento de los principios que orientan la gestión integral de la seguridad.
          p.mb-0 La aplicación sistemática de metodologías para la identificación, valoración y tratamiento de riesgos fortalece los procesos de planificación y mejora continua dentro de las organizaciones. En este contexto, la integración de herramientas de análisis, procedimientos técnicos y estrategias preventivas contribuye a optimizar la protección de los activos, apoyar la continuidad de las operaciones y promover una cultura de seguridad basada en la anticipación, la responsabilidad y la gestión efectiva del riesgo.
        .col-lg-3.order-1.order-lg-2.mb-4.mb-lg-0
          figure.mb-0
            img(src="@/assets/curso/temas/intro/img2.png", data-aos="zoom-in", style="width: 100%; max-width: 380px;").mx-auto


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
