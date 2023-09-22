<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Proceso de dispensación de productos farmacéuticos
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/tema4/img_4_01.svg", alt="alt").m-auto
      .col-lg-8(data-aos="fade-left")
        p.mb-4 En los servicios y establecimientos farmacéuticos encontramos, de forma general, dos grupos donde se pueden clasificar los procedimientos: procesos generales y procesos especiales.
        .cajon.customColorA.p-4.mb-4
          p.mb-0 Como parte de los procesos generales encontramos la dispensación, que se refiere a la entrega de uno o más medicamentos y dispositivos médicos a un paciente y la información sobre su uso adecuado, la cual se lleva a cabo por el químico farmacéutico y el Tecnólogo en Regencia de Farmacia.
        p La siguiente imagen nos presenta la secuencia de los procesos del servicio y el establecimiento farmacéutico.
    .row.justify-content-center
      .col-lg-9(data-aos="fade-down")
        .titulo-sexto.color-acento-botones.mb-5
          p.mb-0 #[b Figura 5]. Secuencia de los procesos generales del servicio y establecimiento farmacéutico
        figure
          img(src="@/assets/tema4/img_4_02.svg", alt="alt", style="width:700px;").m-auto
        p.text-center Nota. Sena (2021)
    separador
    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1 Normatividad del proceso de dispensación
    p.mb-5(data-aos="fade-right") Los requisitos que deben cumplir el proceso general de los servicios y los establecimientos farmacéuticos, se pueden encontrar en las siguientes normas:
    .row.mb-5
      .col-lg-6(data-aos="fade-right")
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Decreto 780 de 2016")
            .col-12
              p.text-small Por medio del cual se expide el Decreto Único Reglamentario del sector Salud y Protección Social.
          .row(numero="2" titulo="Decreto 2200 de 2005")
            .col-12
              p.text-small Por medio del cual se reglamenta el servicio farmacéutico y se dictan otras disposiciones.
          .row(numero="3" titulo="Resolución 1403 de 2007")
            .col-12
              p.mb-4.text-small Por la cual se determina el Modelo de Gestión del Servicio Farmacéutico, se adopta el Manual de Condiciones Esenciales y Procedimientos, y se dictan otras disposiciones.          
                br
                br
                | Tomaremos como referencia el Decreto 780 de 2016, porque en él se encuentra incluida la información del Decreto 2200 de 2005 y la Resolución 1403 de 2007, relacionada con los siguientes aspectos:
              ul.lista-ul--color
                li.text-small
                  i.fas.fa-atom
                  | Objetivos del servicio farmacéutico.
                li.text-small
                  i.fas.fa-atom
                  | Funciones del servicio farmacéutico.
                li.text-small
                  i.fas.fa-atom
                  | Requisitos del servicio farmacéutico.
                li.text-small
                  i.fas.fa-atom
                  | Recurso humano del servicio farmacéutico.
                li.text-small
                  i.fas.fa-atom
                  | Requisitos de la fórmula médica.
                li.text-small
                  i.fas.fa-atom
                  | Obligaciones y prohibiciones del dispensador.         
      .col-lg-6(data-aos="fade-left")
        figure
          img(src="@/assets/tema4/img_4_03.svg", alt="alt", style="width:400px;").m-auto
    .row.g-0.justify-content-center.align-items-center.mb-5
      .col-lg-4.order-2.order-lg-1.m-rigth(data-aos="fade-right")
        .rigth-bubble      
          p.mb-4 #[strong Objetivos del servicio farmacéutico]
          p.mb-0 Los objetivos del servicio farmacéutico se encuentran establecidos en el Artículo 2.5.3.10.6 del Decreto 780 de 2016, Droguería y Servicios Farmacéuticos, y son los siguientes: 
      .col-auto.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src="@/assets/tema4/img_4_04.jpg", alt="alt", style="width:650px;")
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-10.mb-4
        .tarjeta.customColorA.p-4
          .row.align-items-center
            .col
              .row.align-items-center
                .col-auto
                  p.mb-0.c-number 1
                .col
                  p.mb-0 Promover y propiciar estilos de vida saludable.
            .col-auto.d-none.d-lg-flex
              figure
                img(src="@/assets/tema4/icon_01.svg", alt="alt", style="width:90px;").m-auto
      .col-lg-10.mb-4
        .tarjeta.customColorA.p-4
          .row.align-items-center
            .col
              .row.align-items-center
                .col-auto
                  p.mb-0.c-number 2
                .col
                  p.mb-0 Prevenir factores de riesgo derivados del uso inadecuado de medicamentos y dispositivos médicos, y promover su uso adecuado.
            .col-auto.d-none.d-lg-flex
              figure
                img(src="@/assets/tema4/icon_02.svg", alt="alt", style="width:90px;").m-auto
      .col-lg-10.mb-4
        .tarjeta.customColorA.p-4
          .row.align-items-center
            .col
              .row.align-items-center
                .col-auto
                  p.mb-0.c-number 3
                .col
                  p.mb-0 Suministrar los medicamentos y dispositivos médicos e informar a los pacientes sobre su uso adecuado.
            .col-auto.d-none.d-lg-flex
              figure
                img(src="@/assets/tema4/icon_03.svg", alt="alt", style="width:90px;").m-auto
      .col-lg-10
        .tarjeta.customColorA.p-4
          .row.align-items-center
            .col
              .row.align-items-center
                .col-auto
                  p.mb-0.c-number 4
                .col
                  p.mb-0 Ofrecer atención farmacéutica a los pacientes y realizar, con el equipo de salud, todas las intervenciones relacionadas con los medicamentos y dispositivos médicos necesarios para el cumplimiento de su finalidad.
            .col-auto.d-none.d-lg-flex
              figure
                img(src="@/assets/tema4/icon_04.svg", alt="alt", style="width:90px;").m-auto
    .row.g-0.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-auto
        figure
          img(src="@/assets/tema4/img_4_05.jpg", alt="alt", style="width:650px;")   
      .col-lg-4.m-left
        .left-bubble      
          p.mb-4 #[strong Funciones del servicio farmacéutico]
          p.mb-0 Todo establecimiento y servicio farmacéutico tiene unas funciones definidas para la prestación del servicio. Según el Decreto 780 de 2016, Droguería y Servicios Farmacéuticos, en su Artículo 2.5.3.10.7, las funciones del servicio farmacéutico son las siguientes:
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-md-6.col-lg-4.col-xl-3.mb-4
        .v-card
          .v-card__img
            figure
              img(src="@/assets/tema4/icon_funciones_01.svg", alt="alt", style="widht:90px").m-auto
          .v-card__body
            p.mb-0 Planificar, organizar, dirigir, coordinar y controlar los servicios relacionados con los medicamentos y dispositivos médicos, ofrecidos a los pacientes y a la comunidad en general.
      .col-md-6.col-lg-4.col-xl-3.mb-4
        .v-card
          .v-card__img
            figure
              img(src="@/assets/tema4/icon_funciones_02.svg", alt="alt", style="widht:90px").m-auto
          .v-card__body
            p.mb-0 Promover estilos de vida saludable y el uso adecuado de los medicamentos y dispositivos médicos.
      .col-md-6.col-lg-4.col-xl-3.mb-4
        .v-card
          .v-card__img
            figure
              img(src="@/assets/tema4/icon_funciones_03.svg", alt="alt", style="widht:90px").m-auto
          .v-card__body
            p.mb-0 Seleccionar, adquirir, admitir y almacenar, distribuir y dispensar, medicamentos y dispositivos médicos.
      .col-md-6.col-lg-4.col-xl-3.mb-4
        .v-card
          .v-card__img
            figure
              img(src="@/assets/tema4/icon_funciones_04.svg", alt="alt", style="widht:90px").m-auto
          .v-card__body
            p.mb-0 Realizar preparaciones, mezclas, adecuación y ajuste de concentraciones de dosis de medicamentos, sujetos al cumplimiento de las Buenas Prácticas de Manufactura, exigidas para tal fin.                
      .col-md-6.col-lg-4.col-xl-3.mb-4
        .v-card
          .v-card__img
            figure
              img(src="@/assets/tema4/icon_funciones_05.svg", alt="alt", style="widht:90px").m-auto
          .v-card__body
            p.mb-0 Ofrecer la atención farmacéutica a los pacientes que la requieran.
      .col-md-6.col-lg-4.col-xl-3.mb-4
        .v-card
          .v-card__img
            figure
              img(src="@/assets/tema4/icon_funciones_06.svg", alt="alt", style="widht:90px").m-auto
          .v-card__body
            p.mb-0 Participar en la creación y desarrollo de programas relacionados con los medicamentos y dispositivos médicos, especialmente los programas de farmacovigilancia, uso adecuado de antibióticos y de medicamentos.
      .col-md-6.col-lg-4.col-xl-3.mb-4
        .v-card
          .v-card__img
            figure
              img(src="@/assets/tema4/icon_funciones_07.svg", alt="alt", style="widht:90px").m-auto
          .v-card__body
            p.mb-0 Realizar o participar en estudios relacionados con medicamentos y dispositivos médicos, los cuales conlleven el desarrollo de sus objetivos, especialmente aquellos relacionados con la farmacia clínica.
      .col-md-6.col-lg-4.col-xl-3.mb-4
        .v-card
          .v-card__img
            figure
              img(src="@/assets/tema4/icon_funciones_08.svg", alt="alt", style="widht:90px").m-auto
          .v-card__body
            p.mb-0 Obtener y difundir información sobre medicamentos y dispositivos médicos, especialmente, informar y educar a los miembros del grupo de salud, el paciente, y la comunidad, sobre el uso adecuado de los mismos.
      .col-md-6.col-lg-4.col-xl-3.mb-4
        .v-card
          .v-card__img
            figure
              img(src="@/assets/tema4/icon_funciones_09.svg", alt="alt", style="widht:90px").m-auto
          .v-card__body
            p.mb-0 Desarrollar y aplicar mecanismos para asegurar la conservación de los bienes de la organización y del Estado, así como el Sistema de Gestión de la Calidad de los procesos, procedimientos y servicios ofrecidos.
      .col-md-6.col-lg-4.col-xl-3.mb-4
        .v-card
          .v-card__img
            figure
              img(src="@/assets/tema4/icon_funciones_10.svg", alt="alt", style="widht:90px").m-auto
          .v-card__body
            p.mb-0 Participar en los Comités de Farmacia y Terapéutica, de Infecciones y de Bioética, coordinados por la institución.
    .row.mb-5
      .col-lg-4.mb-5.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/tema4/img_4_06.svg", alt="alt", style="width:400px").m-auto
      .col-lg-8(data-aos="fade-left")
        h5 Requisitos del servicio farmacéutico
        p Para la aprobación por parte de la autoridad sanitaria y su funcionamiento, el servicio y los establecimientos farmacéuticos deben cumplir, como mínimo, con los requisitos establecidos en el Artículo 2.5.3.10.8 del Decreto 780 de 2016:
    SlyderB.mb-5(:datos="datosSlyder").mb-5(data-aos="fade-down")
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-5.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/tema4/img_4_07.png", alt="alt", style="width:400px").m-auto
      .col-lg-8(data-aos="fade-left")
        h5 Recurso humano del servicio farmacéutico
        p El talento humano es parte fundamental de los establecimientos y servicios farmacéuticos, y según su grado de complejidad, podrá estar amparado por:
        ul.lista-ul--color.ms-4
          li 
            i.fas.fa-atom
            | Un Químico Farmacéutico, cuando el servicio farmacéutico se presenta de alta y mediana complejidad
          li 
            i.fas.fa-atom
            | Un Químico Farmacéutico o un Tecnólogo en Regencia de Farmacia, cuando el servicio farmacéutico se presenta de baja complejidad.
        .cajon.customColorA.p-4  
          p.mb-0 Un Químico Farmacéutico podrá dirigir, dentro de la red de su institución, una cantidad máxima de cinco (5) servicios farmacéuticos ambulatorios, donde haya dispensación de medicamentos, que deberán encontrarse ubicados en una zona geográfica de una ciudad, municipio, distrito o provincia, que pueda ser efectivamente cubierta por dicho profesional.
    h5(data-aos="fade-right") Características de la prescripción médica
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-b.bg-cyan.p-4(data-aos="fade-left")
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.ms-5.mb-4 #[strong(style="color:#7E5EE3") Toda fórmula médica] debe cumplir con unos requisitos que le permitan ser utilizada de manera correcta por los profesionales que intervienen con su prescripción. A continuación, conoceremos cuáles son los aspectos que se deben tener muy presentes para el manejo de este documento, en el proceso de dispensación de los productos farmacéuticos 
            p.mb-0.d-flex.justify-content-end #[strong (Artículo 2.5.3.10.15 Decreto 780 de 2016)]
            i.fas.fa-quote-right.d-flex.justify-content-end
    .row.align-items-center.mb-5
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        ol.lista-ol--cuadro
          li.d-flex
            .lista-ol--cuadro__vineta
              span 1
            | Solo podrá realizarse por personal de salud debidamente autorizado, de acuerdo con su competencia.
          li.d-flex
            .lista-ol--cuadro__vineta
              span 2
            | La prescripción debe escribirse con letra clara y legible y con las indicaciones correctas para su administración.
          li.d-flex
            .lista-ol--cuadro__vineta
              span 3
            | Se realiza en idioma español, de forma escrita, ya sea por copia mecanográfica, medio electromagnético y/o computarizado.
          li.d-flex
            .lista-ol--cuadro__vineta
              span 4
            | No podrá contener enmendaduras o tachaduras, siglas, claves, signos secretos, abreviaturas o símbolos químicos, con la excepción de las abreviaturas aprobadas por el Comité de Farmacia y Terapéutica de la Institución.
          li.d-flex
            .lista-ol--cuadro__vineta
              span 5
            | La prescripción debe permitir la confrontación entre el medicamento prescrito y el medicamento dispensado (en el caso ambulatorio) y el administrado (en el caso hospitalario) por parte del profesional a cargo del servicio farmacéutico y del Departamento de Enfermería o la dependencia que haga sus veces.
          li.d-flex
            .lista-ol--cuadro__vineta
              span 6
            | La prescripción debe permitir la correlación de los medicamentos prescritos con el diagnóstico.
          li 
            .lista-ol--cuadro__vineta
              span 7
            | La dosis de cada medicamento debe expresarse en el sistema métrico decimal y, en casos especiales, en unidades internacionales, cuando se requiera.
          li.d-flex
            .lista-ol--cuadro__vineta
              span 8
            | Cuando se trate de preparaciones magistrales, además de los requisitos de prescripción, se debe especificar claramente cada uno de los componentes, con su respectiva cantidad.
      .col-lg-4.order-1.order-lg-2.mb-5.mb-lg-0(data-aos="fade-left")
        figure
          img(src="@/assets/tema4/img_4_08.png", alt="alt", style="width:400px;").m-auto
    h5(data-aos="fade-right") Contenido de la prescripción médica
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-b.bg-cyan.p-4(data-aos="fade-down")
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.ms-5.mb-4 Todas fórmula médica debe cumplir con unos requisitos con respecto a la información que debe contener, relacionada con el fármaco, paciente, profesional de la salud y centro donde fue atendido el paciente. Esto permite que pueda ser utilizada de manera correcta por los profesionales que la intervienen. A continuación, conoceremos cuáles son los datos que se deben tener presentes, para el manejo de este documento en el proceso de dispensación de los productos farmacéuticos. 
            p.d-flex.justify-content-end #[strong (Artículo 2.5.3.10.16 del Decreto 780)]
            i.fas.fa-quote-right.d-flex.justify-content-end
    .row.justify-content-center.mb-3
      .col-lg-10(data-aos="fade-right")
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/tema4/infografia.svg', alt='Texto que describa la imagen')
          .tarjeta.clr_tarjeta_morada.p-4(x="93%" y="4%")
            p.text-white.text-center.mb-4 #[span(style="padding: 0.65rem 1rem; background-color:#7E5EE3; border-radius:999px") 1]
            p.mb-0 Nombre del prestador de servicios de salud o profesional de la salud que prescribe, dirección y número telefónico o dirección electrónica.
          .tarjeta.clr_tarjeta_morada.p-4(x="93%" y="21.5%")
            p.text-white.text-center.mb-4 #[span(style="padding: 0.65rem 1rem; background-color:#7E5EE3; border-radius:999px") 2]
            p.mb-0 Lugar y fecha de la prescripción.
          .tarjeta.clr_tarjeta_morada.p-4(x="93%" y="27.5%")
            p.text-white.text-center.mb-4 #[span(style="padding: 0.65rem 1rem; background-color:#7E5EE3; border-radius:999px") 3]
            p.mb-0 Nombre del paciente y documento de identificación.
          .tarjeta.clr_tarjeta_morada.p-4(x="25%" y="7%")
            p.text-white.text-center.mb-4 #[span(style="padding: 0.65rem 1rem; background-color:#7E5EE3; border-radius:999px") 4]
            p.mb-0 Número de la historia clínica.
          .tarjeta.clr_tarjeta_morada.p-4(x="93%" y="8.5%")
            p.text-white.text-center.mb-4 #[span(style="padding: 0.65rem 1rem; background-color:#7E5EE3; border-radius:999px") 5]
            p.mb-0 Tipo de usuario (contributivo, subsidiado, particular, otro).
          .tarjeta.clr_tarjeta_morada.p-4(x="93%" y="37%")
            p.text-white.text-center.mb-4 #[span(style="padding: 0.65rem 1rem; background-color:#7E5EE3; border-radius:999px") 6]
            p.mb-0 Nombre del medicamento expresado en la Denominación Común Internacional (nombre genérico).
          .tarjeta.clr_tarjeta_morada.p-4(x="93%" y="50%")
            p.text-white.text-center.mb-4 #[span(style="padding: 0.65rem 1rem; background-color:#7E5EE3; border-radius:999px") 7]
            p.mb-0 Concentración y forma farmacéutica.
          .tarjeta.clr_tarjeta_morada.p-4(x="93%" y="61%")
            p.text-white.text-center.mb-4 #[span(style="padding: 0.65rem 1rem; background-color:#7E5EE3; border-radius:999px") 8]
            p.mb-0 Vía de administración, dosis y frecuencia de administración.
          .tarjeta.clr_tarjeta_morada.p-4(x="93%" y="70%")
            p.text-white.text-center.mb-4 #[span(style="padding: 0.65rem 1rem; background-color:#7E5EE3; border-radius:999px") 9]
            p.mb-0 Período de duración del tratamiento y vigencia de la prescripción.
          .tarjeta.clr_tarjeta_morada.p-4(x="93%" y="77%")
            p.text-white.text-center.mb-4 #[span(style="padding: 0.65rem 1rem; background-color:#7E5EE3; border-radius:999px") 10]
            p.mb-0 Cantidad total de unidades farmacéuticas requeridas para el tratamiento, en números y letras.
          .tarjeta.clr_tarjeta_morada.p-4(x="93%" y="81.5%")
            p.text-white.text-center.mb-4 #[span(style="padding: 0.65rem 1rem; background-color:#7E5EE3; border-radius:999px") 11]
            p.mb-0 Indicaciones que, a su juicio, considere el prescriptor.
          .tarjeta.clr_tarjeta_morada.p-4(x="93%" y="86.5%")
            p.text-white.text-center.mb-4 #[span(style="padding: 0.65rem 1rem; background-color:#7E5EE3; border-radius:999px") 12]
            p.mb-0 Nombre y firma del prescriptor con su respectivo número de registro profesional.
    .row.justify-content-center.mb-3(data-aos="fade-left")
      .col-auto
        a.anexo(:href="obtenerLink('downloads/Requisitos_informacion_Prescripcion_medica.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Requisitos de información prescripción médica
    separador
    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2 Obligaciones y prohibiciones del dispensador
    p.mb-5(data-aos="fade-right") Durante el proceso de dispensación, el profesional que realice dicha tarea, debe cumplir con unas obligaciones y evitar caer en algunos errores, los cuales son presentados en la siguiente imagen.
    .tarjeta--container.row(data-aos="fade-right")
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/tema4/img_4_1_01.svg', alt='obligaciones',style="width:120px").m-auto
        h2.text-white.text-center Obligaciones
        ul.lista-ul--color
          li.text-white 
            i.fas.fa-atom
            | Verificar que la prescripción se encuentre elaborada por el personal de salud competente y autorizado, y que cumpla con las características y contenido de la prescripción, establecidos en el presente decreto.
          li.text-white
            i.fas.fa-atom
            | Verificar que las preparaciones magistrales extemporáneas, estériles, nutrición parenteral, y mezclas de medicamentos oncológicos, contengan en el rótulo o etiqueta, la información sobre el paciente hospitalizado o ambulatorio, según el caso de la preparación o de la mezcla, y la firma del responsable.
          li.text-white
            i.fas.fa-atom
            | Exigir la prescripción para aquellos medicamentos en los que en la etiqueta aparezca la leyenda “Venta Bajo Fórmula Médica”.
          li.text-white
            i.fas.fa-atom
            | No dispensar y consultar al prescriptor cuando identifique en una prescripción posibles errores, con el fin de no incurrir en falta contra la ética profesional.
      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/tema4/img_4_1_02.svg', alt='prohiciones', style="width:120px").m-auto
        h2.clr_sistem.text-center Prohibiciones
        ul.lista-ul--color
          li.clr_sistem 
            i.fas.fa-atom
            | Adulterar o modificar de cualquier forma, la prescripción.
          li.clr_sistem 
            i.fas.fa-atom
            | Cambiar el principio activo, concentración, forma farmacéutica, vía de administración, frecuencia, cantidad y la dosis prescrita.
          li.clr_sistem 
            i.fas.fa-atom
            | Dispensar medicamentos alterados o fraudulentos.
          li.clr_sistem 
            i.fas.fa-atom
            | Violar la reserva a que se está obligado por razón de la función que desempeña.
          li.clr_sistem 
            i.fas.fa-atom
            | Recomendar a los usuarios la utilización de medicamentos.
          li.clr_sistem 
            i.fas.fa-atom
            | Tener muestras médicas de medicamentos.
          li.clr_sistem 
            i.fas.fa-atom
            | Tener envases y empaques vacíos, en el servicio farmacéutico, o en aquellos establecimientos farmacéuticos que no estén autorizados para realizar los procesos de reenvase o reempaque de medicamentos.
          li.clr_sistem 
            i.fas.fa-atom
            | Inducir al paciente o consumidor a la compra de un medicamento que reemplace o sustituya al prescrito o al solicitado.

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    datosSlyder: [
      {
        texto:
          'Disponer de una infraestructura física de acuerdo con su grado de complejidad, cantidad de actividades y/o procesos que se realicen, y personas que laboren.',
        imagen: require('@/assets/tema4/slide_01.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        texto:
          'Contar con una dotación constituida por equipos, instrumentos, bibliografía y materiales necesarios para el cumplimiento de los objetivos de las actividades y/o procesos que se realizan en cada una de sus áreas.',
        imagen: require('@/assets/tema4/slide_02.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        texto:
          'Disponer de un recurso humano idóneo para el cumplimiento de las actividades y/o procesos que se lleven a cabo.',
        imagen: require('@/assets/tema4/slide_03.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
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
