<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Infraestructura
      .row.justify-content-center.align-items-center        
        .col-12.col-sm-9.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t2/img14.png', alt='', style="width: 600px;")
        .col-12.col-lg-7.order-2.order-lg-1.bg-color-4.p-4(data-aos="fade-left")
          p.mb-3 La infraestructura comprende el conjunto de elementos físicos, técnicos y organizacionales que permiten el funcionamiento de una instalación y respaldan la prestación de sus servicios. Está conformada por las edificaciones, las redes eléctricas y de comunicaciones, los sistemas de agua y saneamiento, las vías de acceso, los sistemas de control de acceso, los circuitos cerrados de televisión (CCTV), los centros de control y demás recursos que apoyan la operación.
          p La adecuada gestión de la infraestructura contribuye a proteger a las personas, los bienes y la información, además de garantizar la continuidad de las operaciones. La integridad de estos componentes fortalece la capacidad de prevención y respuesta frente a amenazas de origen natural, tecnológico o antrópico, al tiempo que facilita la implementación de medidas de seguridad acordes con los riesgos presentes en cada instalación.
      Separador
      //- Inicio Tema3.1
      .row
        #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.1 Tipos de infraestructura
      p(data-aos="fade-left") La infraestructura puede clasificarse de acuerdo con su función dentro de la organización. Cada tipo cumple un propósito específico y requiere medidas particulares de protección: 
      .row.justify-content-center.mb-5
        .col-md-auto
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 2.
            span  Tipos de infraestructura en una organización
          img.rounded-3(src="@/assets/curso/temas/t3/img0.png", alt="Ilustración isométrica de un complejo de infraestructura crítica que integra un edificio administrativo, un centro de datos, instalaciones de servicios esenciales, áreas de acceso y transporte, estacionamientos, caseta de control, zonas verdes y una plataforma de soporte para emergencias con helipuerto y equipos de respaldo. El diseño identifica los principales componentes de infraestructura física, tecnológica, de servicios y respuesta ante emergencias.", style="width: 100%;")
      //- Inicio Accordion 1
      .row(data-aos="fade-right")
        .bg--img_03.mt-5
          .row.justify-content-center
            .col-lg-10
              AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
                .row(titulo="Infraestructura física")
                  p.mb-4 Comprende las redes y los sistemas físicos necesarios para el funcionamiento de la instalación. Incluye edificios, muros, cercas, garitas, estacionamientos, almacenes, salas de máquinas, cuartos eléctricos y de telecomunicaciones. Su estado de conservación y distribución determinan vulnerabilidades físicas, como puntos de acceso o zonas con escasa cobertura de vigilancia.
                .row(titulo="Infraestructura de instalaciones críticas (servicios)")
                  p.mb-4 Reúne los sistemas indispensables para la continuidad de las operaciones, como redes eléctricas, generadores, plantas de agua, sistemas de climatización (HVAC), extracción y tratamiento de residuos. Una falla en estos servicios puede comprometer la habitabilidad y la operación de la instalación.
                .row(titulo="Infraestructura tecnológica de la información")
                  p.mb-4 Comprende los recursos tecnológicos que soportan los servicios digitales, entre ellos centros de datos, servidores, cableado estructurado, sistemas de control de acceso, CCTV, sistemas SCADA/ICS, <i>hardware</i>, <i>software</i> y redes de almacenamiento. Su estrecha relación con la infraestructura física hace que una afectación genere impactos operativos y de confidencialidad.
                .row(titulo="Infraestructura de acceso y transporte")
                  p.mb-4 Incluye las vías de ingreso y salida, muelles de carga, vías internas, garitas y zonas de maniobra. Estas áreas permiten controlar el flujo de personas, vehículos y mercancías, constituyendo un elemento fundamental para la seguridad perimetral.
                .row(titulo="Infraestructura de soporte para emergencias")
                  p.mb-4 Corresponde a los elementos destinados a la atención de situaciones de emergencia, como rutas de evacuación, salidas de emergencia, equipos contra incendios e iluminación de emergencia. Su adecuada planificación y mantenimiento reducen el impacto de incidentes como incendios, explosiones o inundaciones.
      //- Fin Accordion 1
      p(data-aos="fade-right") Cada uno de estos tipos de infraestructura desempeña un papel complementario dentro del sistema de seguridad y requiere medidas de protección acordes con sus características y nivel de criticidad.
      Separador
      //- Inicio Tema3.2
      .row
        #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.2 Características operativas de las infraestructuras
      p(data-aos="fade-left") Las infraestructuras presentan características operativas que influyen directamente en la planificación de la seguridad y en la continuidad de las operaciones. Conocerlas permite identificar prioridades de protección y diseñar controles más efectivos:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t3/tarjeta01_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Interdependencia
                p Los diferentes componentes de la infraestructura funcionan de manera integrada. La falla de un sistema, como el suministro eléctrico, puede afectar otros, entre ellos el CCTV, los controles de acceso o los sistemas de comunicaciones.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta01_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Puntos críticos
                p Corresponden a las áreas cuya protección resulta prioritaria, como cuartos eléctricos, salas de servidores, cajas fuertes, centros de control o zonas de carga.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta01_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Accesibilidad y control
                p La facilidad de acceso determina el diseño de las medidas de protección, tales como muros, cercas, barreras físicas, controles de ingreso y sistemas de vigilancia.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta01_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Redundancia y resiliencia
                p La existencia de sistemas de respaldo, como generadores eléctricos, UPS o rutas alternas, reduce la probabilidad de interrupciones críticas y fortalece la continuidad operativa.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta01_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Componentes tangibles e intangibles
                p La infraestructura física se complementa con elementos intangibles, como protocolos, procedimientos, <i>software</i> y acciones humanas, que garantizan su funcionamiento permanente y seguro.
      //- Fin Slideshow
      p(data-aos="fade-left") El análisis conjunto de estas características permite comprender cómo interactúan los diferentes elementos de una instalación y facilita la implementación de estrategias orientadas a fortalecer la seguridad, minimizar vulnerabilidades y garantizar la continuidad de las operaciones.
      Separador
      //- Inicio Tema3.3
      .row
        #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.3 Organización y entorno
      p(data-aos="fade-left") La organización y el entorno son elementos fundamentales para comprender el contexto en el que se desarrollan las actividades de seguridad privada. Mientras la organización define la estructura, los procesos y las responsabilidades internas, el entorno reúne las condiciones externas que pueden influir en la operación del servicio.
      p(data-aos="fade-left") El análisis conjunto de estos elementos permite identificar riesgos, vulnerabilidades y necesidades de protección específicas, facilitando la implementación de medidas de seguridad acordes con las características de cada escenario.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Tipos de escenarios
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Las organizaciones desarrollan sus actividades en diferentes escenarios, los cuales varían según su naturaleza, propiedad, nivel de acceso y forma de operación. Cada uno presenta riesgos particulares y requiere estrategias de seguridad específicas. Los principales escenarios son los siguientes:      
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
        TabsC.color-acento-contenido.mt-1
          .py-3.py-md-4(titulo="Escenarios públicos")
            .row.align-items-center
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta02_1.png')
              .col-md-6.mb-4.mb-md-0
                h4 Escenarios públicos
                p Corresponden a espacios pertenecientes al Estado o a instituciones gubernamentales. Se caracterizan por el alto flujo de personas, el acceso libre, la diversidad de usuarios y una mayor exposición mediática. Entre sus ejemplos se encuentran plazas públicas, estaciones de transporte y zonas comunes de centros comerciales. Debido a estas características, requieren controles de flujo de personas, sistemas de videovigilancia (CCTV), planes de evacuación robustos y coordinación permanente con las autoridades competentes.
          .py-3.py-md-4(titulo="Escenarios privados")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta02_2.png')
              .col-md-6
                h4 Escenarios privados
                p Pertenecen a personas naturales o jurídicas de carácter privado. Se distinguen por tener acceso restringido, usuarios identificables y menor afluencia de público externo. Algunos ejemplos son oficinas, plantas industriales y conjuntos residenciales privados. En estos escenarios se implementan controles estrictos de acceso, verificación de personal y proveedores, rondas focalizadas y protocolos internos de autorización.
          .py-3.py-md-4(titulo="Escenarios mixtos (público-privados)")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta02_3.png')
              .col-md-6
                h4 Escenarios mixtos (público-privados)
                p Integran áreas de acceso público y zonas de acceso restringido dentro de una misma instalación. Entre los ejemplos se encuentran campus universitarios, edificios corporativos con locales comerciales y aeropuertos. Su complejidad exige establecer una zonificación claramente definida, aplicar medidas de seguridad diferenciadas para cada área y mantener coordinación entre la seguridad privada y las autoridades públicas.
      //- Cierres Pestanas horizontales
      p(data-aos="fade-left") El reconocimiento de las características propias de cada escenario permite adaptar los procedimientos de vigilancia y optimizar las medidas de protección de acuerdo con el nivel de exposición al riesgo.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Elementos para el análisis del escenario
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") El análisis del escenario constituye una etapa fundamental dentro de la gestión del riesgo, ya que permite comprender las condiciones en las que opera una instalación e identificar las amenazas, vulnerabilidades y capacidades de respuesta existentes.
      p(data-aos="fade-left") Para realizar este análisis es necesario considerar los objetivos de la organización, las variables disponibles, como recursos, presupuesto y tiempo, así como las tendencias del entorno, las incertidumbres y los riesgos potenciales que pueden afectar la operación. Los principales elementos de análisis se presentan a continuación:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center          
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Entorno físico")
                p.mb-4 Comprende las condiciones geográficas, estructurales y ambientales donde se desarrolla la operación, incluyendo el tipo de construcción, las vías de acceso, la iluminación, la visibilidad, las condiciones climáticas y los límites del perímetro. Su análisis permite identificar rutas de acceso, zonas de sombra, puntos ciegos y condiciones de evacuación que pueden influir en la seguridad de la instalación. 
                p <b>Ejemplo:</b> una empresa con parqueaderos subterráneos presenta iluminación deficiente y ausencia de cámaras en las rampas de salida, lo que incrementa el riesgo de agresiones o hurtos y requiere medidas de control. Para su evaluación se recomienda realizar inspecciones en terreno, registros fotográficos y elaborar mapas de riesgo que documenten las condiciones observadas.
              .row(titulo="Entorno social y económico")
                p.mb-4 Analiza las condiciones demográficas, económicas y culturales del área donde se ubica la organización. Factores como la alta densidad poblacional, los conflictos comunitarios, la presencia de grupos delincuenciales, el desempleo o la informalidad pueden aumentar la probabilidad de incidentes y modificar el comportamiento de las amenazas.
                p <b>Ejemplo:</b> una bodega ubicada en un parque industrial cercano a un sector con alta conflictividad requiere reforzar el control perimetral, incrementar la vigilancia y establecer rutas seguras para el transporte de mercancías. El análisis continuo del entorno facilita la adopción de medidas preventivas acordes con las condiciones reales de la zona.
              .row(titulo="Entorno tecnológico y operativo")
                p.mb-4 Comprende los recursos tecnológicos que apoyan la seguridad y garantizan la continuidad de las operaciones, como sistemas de videovigilancia, sensores, alarmas, controles de acceso, redes de comunicación, plataformas de monitoreo y fuentes de energía de respaldo. Durante su evaluación se verifica el estado de funcionamiento de los equipos, la disponibilidad de sistemas de respaldo (UPS y generadores) y las vulnerabilidades de las redes de comunicación. 
                p <b>Ejemplo:</b> un centro logístico con cámaras IP conectadas mediante una red Wi-Fi sin mecanismos robustos de autenticación presenta vulnerabilidades que pueden facilitar ataques o sabotajes remotos. La evaluación periódica de este entorno fortalece la confiabilidad de los sistemas de seguridad y reduce la probabilidad de fallas operativas.
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t3/img1.png", alt="").img400.m-auto
      //- Fin Accordion 1
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Factores de accesibilidad y movilidad
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Los factores de accesibilidad y movilidad corresponden a las condiciones que determinan el ingreso, la circulación y la salida de personas y vehículos dentro y fuera de una instalación. Su análisis permite identificar posibles vulnerabilidades relacionadas con el control de accesos y el desplazamiento al interior de las áreas protegidas.
      p(data-aos="fade-left") Para evaluar este componente es necesario considerar los siguientes aspectos:
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
                              img(src='@/assets/curso/temas/t3/tarjeta03_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Número y ubicación de los accesos
                            p.text-center Determinar los puntos de ingreso y salida que requieren medidas de control.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t3/tarjeta03_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Control de visitantes y proveedores
                            p.text-center Verificar los procedimientos de identificación, autorización y registro.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t3/tarjeta03_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Condiciones del transporte interno
                            p.text-center Evaluar la circulación segura de personas, vehículos y mercancías dentro de la instalación.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t3/tarjeta03_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Señalización y rutas de evacuación
                            p.text-center Garantizar una adecuada orientación y una respuesta eficiente durante situaciones de emergencia.
                    .col-lg-4.order-lg-1.d-none.d-lg-block
                        figure
                          img(src='@/assets/curso/temas/t3/img2.png', style="width: 250px", data-aos="zoom-in").m-auto
              //- Fin Carrusel
      .row.justify-content-center.align-items-stretch.mb-5.g-0(data-aos="fade-right")
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t3/img3.png', alt='', style="object-fit: cover;")
        .col-lg-7.bg-color-2.d-flex.flex-column.justify-content-center.p-4
          p.fw-bold.mb-2 Ejemplo
          p Una instalación cuenta con tres accesos vehiculares, pero uno de ellos carece de control físico permanente. Esta condición incrementa el riesgo de ingresos no autorizados. Como medida correctiva, se recomienda implementar barreras físicas o asignar personal de vigilancia permanente en ese punto. El análisis de estos factores contribuye a fortalecer el control de acceso y a reducir las oportunidades para la materialización de amenazas.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Factores organizacionales
      //- Título nivel 3 - Imagen
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img4.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Los factores organizacionales corresponden a la estructura interna y a las políticas que orientan la gestión de la seguridad dentro de una organización. Su evaluación permite identificar fortalezas y debilidades relacionadas con la administración del riesgo. Entre los principales aspectos que deben analizarse se encuentran los siguientes:
          br
          br
          ul.lista-ul.color-vinotinto-custom.mb-0
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span <b>Estructura jerárquica:</b> define los niveles de autoridad y las responsabilidades en materia de seguridad. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span <b>Capacitación del personal:</b> garantiza que los colaboradores cuenten con los conocimientos y las habilidades necesarias para cumplir sus funciones. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span <b>Procedimientos documentados:</b> facilitan la estandarización de las actividades y la correcta ejecución de los procesos. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span <b>Asignación de responsabilidades:</b> establece claramente las funciones de cada integrante del equipo de seguridad. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span <b>Cultura de seguridad:</b> promueve el compromiso institucional con la prevención y el cumplimiento de las normas.
      p(data-aos="fade-left") Cuando las políticas de seguridad son débiles o no responden a las necesidades de la operación, aumentan las vulnerabilidades internas y se incrementa la probabilidad de incidentes.
      .row.justify-content-center.align-items-stretch.mb-5.g-0(data-aos="fade-right")
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t3/img5.png', alt='', style="object-fit: cover;")
        .col-lg-7.bg-color-2.d-flex.flex-column.justify-content-center.p-4
          p.fw-bold.mb-2 Ejemplo
          p Si los procedimientos para el control de llaves o tarjetas de acceso no están claramente definidos, pueden presentarse pérdidas, duplicaciones o usos indebidos de las credenciales por parte del personal.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Factores normativos y legales
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") El análisis de cualquier escenario debe realizarse considerando el marco normativo vigente aplicable al tipo de instalación y al servicio de seguridad prestado. El cumplimiento de estas disposiciones garantiza que las operaciones se desarrollen dentro de los parámetros legales y técnicos establecidos. Entre las principales normas aplicables en Colombia se encuentran las siguientes:
      //- Inicio Tarjetas
      .row.justify-content-center(data-aos="fade-left")
        .col-12.col-sm-6.col-lg-4.mb-4
          .tarjeta--boton.color-primario.rounded-4.p-4.h-100.d-flex.flex-column.align-items-center.text-center
            figure.mb-4
              img.mx-auto(src='@/assets/curso/temas/t3/tarjeta04_1.svg', alt='', style="width: 90px;")
            .flex-grow-1.d-flex.flex-column.justify-content-center
              h4.mb-3 Decreto 356 de 1994
              p.mb-0 Establece el Estatuto de Vigilancia y Seguridad Privada.
        .col-12.col-sm-6.col-lg-4.mb-4
          .tarjeta--boton.color-primario.rounded-4.p-4.h-100.d-flex.flex-column.align-items-center.text-center
            figure.mb-4
              img.mx-auto(src='@/assets/curso/temas/t3/tarjeta04_2.svg', alt='', style="width: 90px;")
            .flex-grow-1.d-flex.flex-column.justify-content-center
              h4.mb-3 Ley 1801 de 2016
              p.mb-0 Regula el Código Nacional de Seguridad y Convivencia Ciudadana.
        .col-12.col-sm-6.col-lg-4.mb-4
          .tarjeta--boton.color-primario.rounded-4.p-4.h-100.d-flex.flex-column.align-items-center.text-center
            figure.mb-4
              img.mx-auto(src='@/assets/curso/temas/t3/tarjeta04_3.svg', alt='', style="width: 90px;")
            .flex-grow-1.d-flex.flex-column.justify-content-center
              h4.mb-3 Normas técnicas ICONTEC
              p.mb-0 Definen lineamientos para la seguridad física, documental y la gestión de procesos relacionados con la vigilancia.
      //- Fin Tarjetas
      p(data-aos="fade-left") El desconocimiento o incumplimiento de estas disposiciones puede generar sanciones administrativas, afectar la prestación del servicio e incluso ocasionar la pérdida de autorizaciones o licencias de funcionamiento.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Factores de amenaza y vulnerabilidad
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") El análisis del escenario también debe identificar las amenazas externas e internas que pueden afectar la organización, así como las vulnerabilidades que facilitan su materialización. Estas amenazas pueden ser de origen natural, tecnológico o humano y deben evaluarse conjuntamente con las debilidades estructurales, operativas o procedimentales presentes en la instalación.
      p(data-aos="fade-left") La utilización de herramientas como la matriz de riesgos permite valorar la probabilidad y el impacto de cada amenaza, facilitando la priorización de acciones preventivas y correctivas. 
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Instalaciones abiertas y cerradas
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Las instalaciones presentan diferentes características según el nivel de acceso permitido y las condiciones de control implementadas. Conocer estas diferencias facilita la selección de medidas de protección acordes con cada tipo de instalación y mejora la planeación de las actividades de vigilancia.  Las instalaciones abiertas y cerradas se diferencian principalmente por el grado de control ejercido sobre el acceso de personas y vehículos:
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
        TabsC.color-acento-contenido.mt-1
          .py-3.py-md-4(titulo="Instalación abierta")
            .row.align-items-center
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta05_1.png')
              .col-md-6.mb-4.mb-md-0
                h4 Instalación abierta
                p Corresponde a espacios donde el acceso es libre o presenta restricciones limitadas. Generalmente registran una alta circulación de personas y cuentan con menor control físico sobre la totalidad del perímetro. Algunos ejemplos son plazas, mercados, estacionamientos públicos y centros comerciales durante su horario de funcionamiento.
          .py-3.py-md-4(titulo="Instalación cerrada")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta05_2.png')
              .col-md-6
                h4 Instalación cerrada
                p Corresponde a espacios cuyo acceso está restringido mediante barreras físicas, controles de ingreso y protocolos específicos. Entre sus ejemplos se encuentran cuartos de servidores, salas de máquinas, oficinas corporativas fuera del horario laboral, bodegas y áreas críticas de seguridad.
      //- Cierres Pestanas horizontales
      p.mb-5(data-aos="fade-left") La identificación del tipo de instalación constituye el punto de partida para definir los controles y procedimientos de vigilancia más adecuados.
      //- Pestanas horizontales
      //- Título nivel 4 
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        h3.titulo-nivel4 Características comparativas
      //- Título nivel 4 
      p(data-aos="fade-left") Las diferencias entre ambos tipos de instalaciones permiten establecer estrategias de seguridad acordes con sus necesidades particulares.
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Tabla
            .row.justify-content-center.mb-5
              .col-md-auto.col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 1.
                  span Comparación entre instalaciones abiertas e instalaciones cerradas desde la perspectiva de la seguridad 
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 10%") Aspecto
                        th(style="width: 45%") Instalación abierta
                        th(style="width: 45%") Instalación cerrada
                    tbody
                      tr
                        td <b>Acceso</b>
                        td Flujo de personas más libre y control mediante puntos parciales.
                        td Acceso restringido con credencialización y controles estrictos.
                      tr
                        td <b>Vigilancia</b>
                        td Mayor necesidad de monitoreo general mediante CCTV y patrullajes.
                        td Mayor énfasis en el control de accesos y la protección de áreas críticas.
                      tr
                        td <b>Vulnerabilidades más frecuentes</b>
                        td Hurtos oportunistas, aglomeraciones y actos de vandalismo.
                        td Sabotaje, acceso no autorizado y afectación de áreas sensibles.
                      tr
                        td <b>Controles recomendados</b>
                        td Diseño ambiental, patrullaje dinámico y sistemas de videovigilancia.
                        td Control de accesos, registros de ingreso y salida, cerramientos y medidas de autenticación.
                      tr
                        td <b>Ejemplos</b>
                        td Plazas comerciales, parques y estacionamientos públicos.
                        td Centros de datos, bodegas de materiales críticos y salas de servidores.
            //- FinTabla
            p.mb-5(data-aos="fade-left") Las diferencias entre ambos escenarios permiten ajustar las medidas de seguridad de acuerdo con las características de cada instalación y optimizar la protección de personas, bienes e infraestructura.
            //- Título nivel 4 
            .titulo-con-imagen.mb-4(data-aos="fade-right")
              h3.titulo-nivel4 Tenga en cuenta
            //- Título nivel 4
            p(data-aos="fade-right") Las estrategias de seguridad deben adaptarse al tipo de instalación y a las condiciones particulares de cada entorno:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t3/tarjeta06_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Diseño de las medidas de seguridad
                p En instalaciones abiertas se priorizan el control de flujo de personas y el diseño ambiental; en instalaciones cerradas se fortalecen el control perimetral, la autenticación y la segregación de funciones.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta06_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Protocolos de acceso y verificación
                p Deben ajustarse al nivel de restricción de cada instalación. En áreas cerradas pueden incluir credenciales, registros biométricos y autorización previa; en áreas abiertas se concentran en puntos críticos como accesos de carga o zonas de servicio.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta06_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Rondas de vigilancia
                p En instalaciones abiertas se realizan recorridos frecuentes y variables para evitar patrones predecibles. En instalaciones cerradas se desarrollan rondas focalizadas con listas de verificación de equipos, accesos y áreas críticas.
      //- Fin Slideshow
      p(data-aos="fade-left") La correcta diferenciación entre instalaciones abiertas y cerradas facilita la implementación de medidas de seguridad más eficientes y fortalece la capacidad preventiva de la organización.
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
