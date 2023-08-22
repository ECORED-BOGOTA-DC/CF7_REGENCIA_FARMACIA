<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Política Farmacéutica Nacional

    p.mb-4 De acuerdo con la OMS:

    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.customColorB.p-4       
          p.mb-0 Una Política Farmacéutica Nacional es un compromiso con un objetivo y una guía de acción. Expresa y prioriza las metas a medio y largo plazo establecidas por el gobierno para el sector farmacéutico, e identifica las estrategias principales para alcanzarlas. Suministra un marco dentro del cual se pueden coordinar las actividades del sector farmacéutico. Abarca los sectores tanto público como privado, e implica a todos los protagonistas del ámbito farmacéutico. (párr.1)

    p.mb-4 Y el documento CONPES 155 de 2012, explica cómo se realizó la construcción de esta política en nuestro país:

    .row.justify-content-center
      .col-lg-10
        .cajon.customColorA.p-4.mb-4          
          p.mb-0 La Política Farmacéutica (PF) fue formulada en el marco de los principios constitucionales asociados al derecho a la salud y de aquellos elementos de desarrollo del sector industrial farmacéutico que faciliten el cumplimiento de este derecho. La Política se encuentra articulada y responde a los objetivos planteados en el Plan Nacional de Desarrollo 2010-2014 Prosperidad para Todos.
            br
            br
            | La construcción de la política se sustentó en una metodología que partió por identificar las necesidades en salud relacionadas con el acceso a medicamentos y la calidad de la atención, los elementos industriales y de mercado que lo afectan o facilitan, los asuntos ambientales y de ciencia y tecnología, el cumplimiento de los principios rectores de la reforma del sistema de salud; seguidos por la revisión de los avances de la aplicación del documento de Política Nacional Farmacéutica de 2003, además de la revisión de recomendaciones de organismos internacionales y aquellas mejores prácticas de otras latitudes, pertinentes y aplicables a nuestra realidad nacional. La política se diseñó con un enfoque participativo, en el que se consultaron representantes de gremios, organizaciones de la sociedad civil, pacientes, academia y expertos. (p.4)

    separador

    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Antecedentes de la Política Farmacéutica Nacional

    p.mb-5 La siguiente línea de tiempo nos presenta los antecedentes de la Política Farmacéutica Nacional, desarrollada entre los años 70 hasta la actualidad:

    LineaTiempoA.color-secundario.mb-5(:datos="datosLineaTiempoA").mb-5

    separador

    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Marco conceptual y enfoque
      
    .tarjeta.gradient_A.p-4.p-md-5.mb-5
      .row.justify-content-around.align-items-center
        .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
          img(src="@/assets/componentes/infografia.svg", style="width:300px;").m-auto

        .col-md.col-lg-6
          .titulo-segundo
            h2 Marco conceptual y enfoque
          p.mb-4 Existen tres enfoques que orientan la propuesta de la Política Farmacéutica Nacional, los cuales fueron recomendados por organismos internacionales y tomados de diferentes modelos de políticas farmacéuticas desarrollados en otros países.
            br
            br
            | Conozcamos cuáles son esos tres enfoques.
          
          a.boton.color-acento-botones(:href="obtenerLink('downloads/Marco_Conceptual_Enfoque.pdf')" target="_blank" type="application/pdf")
            span.clr_sistem Descargar
            i.clr_sistem.fas.fa-file-download

    separador

    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3 Diagnóstico de la situación farmacéutica nacional

    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/tema2/img_2_3_01.svg", alt="alt").m-auto
      .col-lg-8
        p El documento CONPES 115 de 202, presenta como diagnóstico de la situación farmacéutica nacional:
        
        p “El acceso inequitativo a los medicamentos y la deficiente calidad de la atención”. 

        p Este problema se atribuye a cinco grandes debilidades con sus subcomponentes y, por lo tanto, se resume en el siguiente esquema:

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-botones
          h5 Figura 1
          span Debilidades de la política farmacéutica nacional      
        
        figure.mb-5
          img(src="@/assets/tema2/img_2_3_02.svg", alt="alt", style="width:1000px;").m-auto 

        p.text-center Nota. Sena (2021)

    separador

    #t_2_4.titulo-segundo.color-acento-contenido
      h2 2.4 Estrategias para contrarrestar las debilidades de la Política Farmacéutica Nacional  

    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/tema2/img_2_3_03.svg", alt="alt").m-auto
      .col-lg-8
        p Conocemos cuáles son las debilidades de la Política Farmacéutica Nacional, ahora necesitamos implementar estrategias para contrarrestarlas.
        .cajon.customColorB.p-4.mb-4
          p.mb-0 Según el documento CONPES 115 DE 2012, el Plan de Implementación se formula a diez años (2012 – 2021) a través de las diez grandes estrategias con sus actividades y sub-actividades, las cuales estudiaremos a continuación. 

    .tarjeta.tarjeta--gris.p-4.mb-5    
      PasosB.color-secundario

        .row(titulo="").justify-content-center.mt-3
          .col-lg-3.mb-4.mb-lg-0
            figure
              img(src='@/assets/tema2/img_2_4_01.svg', alt='Texto que describa la imagen')                   
          .col-lg
            p #[strong Información oportuna que genera confianza, que sea pública, y se relacione con el acceso, precios, uso y calidad de los productos farmacéuticos]
            ul.lista-ul--color
              li 
                i.fas.fa-atom
                | Sistema Nacional de Información Farmacéutica sobre acceso, uso, calidad y precios.
              li 
                i.fas.fa-atom
                | Sistema de reporte de gastos de la industria farmacéutica.
              li 
                i.fas.fa-atom
                | Creación vademécum Nacional del POS.
              li 
                i.fas.fa-atom
                | Sistema de información INVIMA para registros sanitarios.

        .row(titulo="").justify-content-center.mt-3
          .col-lg-3.mb-4.mb-lg-0
            figure
              img(src='@/assets/tema2/img_2_4_01.svg', alt='Texto que describa la imagen')                   
          .col-lg
            p #[strong Institucionalidad eficaz, eficiente y coherente]
            ul.lista-ul--color
              li 
                i.fas.fa-atom
                | Sistema que evalúe las tecnologías farmacéuticas.
              li 
                i.fas.fa-atom
                | Sistematización de la información.

        .row(titulo="").justify-content-center.mt-3
          .col-lg-3.mb-4.mb-lg-0
            figure
              img(src='@/assets/tema2/img_2_4_01.svg', alt='Texto que describa la imagen')                   
          .col-lg
            p #[strong Adecuación de la oferta y las competencias del recurso humano del sector farmacéutico]
            ul.lista-ul--color
              li 
                i.fas.fa-atom
                | Implementación de un registro de droguerías y farmacias y servicios farmacéuticos, para promover la dispensación segura y el uso racional de medicamentos.
              li 
                i.fas.fa-atom
                | Definición de competencias en farmacia y farmacología.

        .row(titulo="").justify-content-center.mt-3
          .col-lg-3.mb-4.mb-lg-0
            figure
              img(src='@/assets/tema2/img_2_4_01.svg', alt='Texto que describa la imagen')                   
          .col-lg
            p #[strong Instrumentos para la regulación de precios de medicamentos y monitoreo del mercado]
            ul.lista-ul--color
              li 
                i.fas.fa-atom
                | Herramientas para la regulación de precios. 
                             
        .row(titulo="").justify-content-center.mt-3
          .col-lg-3.mb-4.mb-lg-0
            figure
              img(src='@/assets/tema2/img_2_4_01.svg', alt='Texto que describa la imagen')                   
          .col-lg
            p #[strong Fortalecimiento de la rectoría y del sistema de vigilancia, con enfoque en gestión de riesgos]
            ul.lista-ul--color
              li 
                i.fas.fa-atom
                | Fortalecimiento del Ministerio de Salud, INVIMA, de la Superintendencia Nacional de Salud y otras entidades, del sistema de vigilancia en salud.

        .row(titulo="").justify-content-center.mt-3
          .col-lg-3.mb-4.mb-lg-0
            figure
              img(src='@/assets/tema2/img_2_4_01.svg', alt='Texto que describa la imagen')                   
          .col-lg
            p #[strong Compromiso con la sostenibilidad ambiental y el aprovechamiento de la biodiversidad]
            ul.lista-ul--color
              li 
                i.fas.fa-atom
                | Procesos de producción sustentables, de medicamentos basados en el aprovechamiento de la biodiversidad.   

        .row(titulo="").justify-content-center.mt-3
          .col-lg-3.mb-4.mb-lg-0
            figure
              img(src='@/assets/tema2/img_2_4_01.svg', alt='Texto que describa la imagen')                   
          .col-lg
            p #[strong Adecuación de la oferta de medicamentos a las necesidades de salud nacional y regional]
            ul.lista-ul--color
              li 
                i.fas.fa-atom
                | Estímulo a la investigación; el desarrollo y la producción de medicamentos estratégicos; la promoción de la competencia (genéricos) de medicamentos, y la disponibilidad nacional de medicamentos.

        .row(titulo="").justify-content-center.mt-3
          .col-lg-3.mb-4.mb-lg-0
            figure
              img(src='@/assets/tema2/img_2_4_01.svg', alt='Texto que describa la imagen')                   
          .col-lg
            p #[strong Desarrollo e implementación de programas especiales de acceso a medicamentos]
            ul.lista-ul--color
              li 
                i.fas.fa-atom
                | Se propone el desarrollo de modelos que incorporen elementos como: la negociación centralizada de precios, la logística moderna y los programas de gestión de beneficios de medicamentos.  

        .row(titulo="").justify-content-center.mt-3
          .col-lg-3.mb-4.mb-lg-0
            figure
              img(src='@/assets/tema2/img_2_4_01.svg', alt='Texto que describa la imagen')                   
          .col-lg
            p #[strong Diseño de redes de servicios farmacéuticos]
            ul.lista-ul--color
              li 
                i.fas.fa-atom
                | Programa de incentivos a la habilitación y mejoramiento de la oferta de servicios farmacéuticos. 

        .row(titulo="").justify-content-center.mt-3
          .col-lg-3.mb-4.mb-lg-0
            figure
              img(src='@/assets/tema2/img_2_4_01.svg', alt='Texto que describa la imagen')                   
          .col-lg
            p #[strong Promoción del uso adecuado de los medicamentos]
            ul.lista-ul--color
              li 
                i.fas.fa-atom
                | Prescripción electrónica de medicamentos No POS.  
              li 
                i.fas.fa-atom
                | Estrategia para mejorar el conocimiento de los profesionales de la salud y la población.            
              li 
                i.fas.fa-atom
                | Campañas de promoción y prevención.             
       
              
       


   

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosLineaTiempoA: [
      {
        ano: 'Años setenta (70)',
        texto: 'Se creó el listado básico de medicamentos.',
      },
      {
        ano: 'Años ochenta (80) ',
        texto:
          'En el último periodo de los años ochenta, se generaron políticas sobre el uso adecuado de medicamentos genéricos. ',
      },
      {
        ano: '1993',
        texto:
          'En la Ley 100 de 1993, se incluyó el concepto de lista de medicamentos esenciales, el Plan Obligatorio de Salud, y se creó el INVIMA.',
      },
      {
        ano: '2003',
        texto:
          'Se elaboró y se divulgó la Política Farmacéutica Nacional, basada en los principios de la Ley 100.',
      },
      {
        ano: '2011',
        texto:
          'Se realizó la reforma del Sistema General de Seguridad Social en Salud, SGSSS y la política farmacéutica de productos farmacéuticos.',
      },
      {
        ano: '2011',
        texto:
          'Se generó la necesidad de regular el uso de medicamentos y fortalecer la autoridad sanitaria nacional.',
      },
      {
        ano: '2011',
        texto:
          'Se estableció el suministro de medicamentos esenciales y el derecho a la salud, además de tratamientos adecuados para las diferentes patologías.',
      },
    ],
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

<style lang="sass" scoped></style>
