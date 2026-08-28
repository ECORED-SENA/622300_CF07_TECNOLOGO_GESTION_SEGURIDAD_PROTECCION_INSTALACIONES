<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Redacción de informes y planeación de matriz de riesgo en seguridad',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> identificar los conceptos clave relacionados con el pensamiento lógico, la atención, la percepción, la comunicación aplicada a la seguridad privada y la gestión del riesgo desarrollados en el componente formativo.',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es el propósito principal del componente formativo?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Fortalecer la gestión de la seguridad mediante análisis y gestión del riesgo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Desarrollar habilidades exclusivas de informática básica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Capacitar únicamente en legislación laboral vigente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Enseñar procesos administrativos de contratación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué competencia fortalece el razonamiento estructurado y crítico en seguridad?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La memoria fotográfica aplicada al servicio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El pensamiento lógico y analítico.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La improvisación en situaciones críticas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El entrenamiento exclusivamente físico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué permite identificar el análisis de riesgos?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir únicamente los costos operativos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar completamente los incidentes futuros.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Incrementar el número de vigilantes disponibles.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reconocer vulnerabilidades y amenazas del entorno.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es una aplicación del pensamiento lógico en seguridad privada?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Operar equipos sin procedimientos definidos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Depender exclusivamente de la intuición personal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Tomar decisiones fundamentadas y objetivas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Ignorar la información histórica disponible.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué acción favorece el desarrollo del pensamiento analítico?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Analizar casos prácticos reales o simulados.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Evitar el estudio de situaciones complejas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Limitar la evaluación de evidencias técnicas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir el uso de herramientas analíticas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Sobre qué deben fundamentarse los análisis y conclusiones?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'En percepciones individuales sin evidencia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'En hechos y evidencias verificables.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'En opiniones de terceros sin validar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'En experiencias personales únicamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué es la atención en el contexto de la seguridad?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La capacidad de concentrarse en estímulos relevantes.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La habilidad de memorizar normas técnicas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La capacidad de emitir órdenes rápidamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La interpretación automática de documentos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué representa la percepción?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La repetición constante de procedimientos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La memorización de protocolos institucionales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La interpretación de los estímulos del entorno.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La clasificación de recursos tecnológicos',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué permite la atención selectiva?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ignorar todas las señales del entorno.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Realizar únicamente tareas administrativas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir la comunicación entre vigilantes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Concentrarse en los estímulos importantes y descartar distractores.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué caracteriza la atención sostenida?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La observación durante breves intervalos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mantener la concentración durante periodos prolongados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cambiar continuamente de actividad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Responder únicamente a emergencias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Qué permite la percepción espacial?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reconocer ubicación, distancia y relación entre objetos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Incrementar la velocidad de digitación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Clasificar documentos administrativos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Elaborar informes financieros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: '¿Cuál es una técnica para fortalecer la atención?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Evitar ejercicios de observación continua.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir las prácticas operativas diarias.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Realizar ejercicios de enfoque progresivo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Realizar ejercicios de enfoque progresivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Cuál es la finalidad de la comunicación en seguridad privada?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar únicamente la productividad comercial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir el uso de tecnologías disponibles.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar los procedimientos escritos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Coordinar acciones y prevenir errores operativos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Cómo debe ser la comunicación en el ámbito operativo?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Extensa, informal y flexible.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Creativa, espontánea y subjetiva.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Precisa, breve, objetiva y pertinente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'General, coloquial y ambigua.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Cuál es la principal función de la comunicación escrita?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Dejar constancia verificable de hechos y acciones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Sustituir completamente la comunicación verbal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Registrar únicamente datos financieros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Promover conversaciones informales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Qué proceso fortalece la aplicación sistemática de metodologías de riesgo?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir la capacitación del personal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar toda posibilidad de incidentes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La planificación y la mejora continua.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reemplazar los procedimientos institucionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿Qué contribuye a optimizar la protección de los activos?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ignorar las amenazas identificadas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aplicar únicamente medidas correctivas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir la supervisión preventiva.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Integrar herramientas de análisis y estrategias preventivas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Qué capacidad favorece detectar anomalías oportunamente?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La improvisación constante del personal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La dependencia exclusiva de equipos tecnológicos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La observación, la atención y la percepción.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La eliminación de los protocolos escritos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: '¿Qué debe hacer un vigilante frente a un estímulo relevante?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Analizar la situación y actuar conforme al protocolo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Ignorar el evento hasta recibir instrucciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Esperar el cambio de turno para reportarlo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Abandonar el puesto inmediatamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: '¿Cuál es el propósito de aplicar matrices de riesgo?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar el número de reportes diarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir la comunicación entre áreas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar la necesidad de inspecciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Valorar riesgos y diseñar medidas de mitigación.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
