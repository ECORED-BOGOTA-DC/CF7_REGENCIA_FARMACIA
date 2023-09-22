<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Proceso de distribución de medicamentos y dispositivos médicos
    p(data-aos="fade-right") A continuación, analizaremos los aspectos generales del proceso de distribución de los medicamentos y dispositivos médicos y los tipos de distribución.
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-md-6.col-lg-4.mb-4
        .v-card.v-card--purple
          .v-card__img
            figure
              img(src="@/assets/tema5/icon_5_01.svg", alt="alt", style="widht:90px").m-auto
          .v-card__body
            p.mb-0 Movimiento y traslado de insumos desde que entran a la Institución hasta que son entregados al usuario final.
      .col-md-6.col-lg-4.mb-4
        .v-card.v-card--purple
          .v-card__img
            figure
              img(src="@/assets/tema5/icon_5_02.svg", alt="alt", style="widht:90px").m-auto
          .v-card__body
            p.mb-0 Artículo 2.5.3.10.17 Decreto 786 de 2016 (Art. 17 del Decreto 2200 de 2005).
      .col-md-6.col-lg-4.mb-4
        .v-card.v-card--purple
          .v-card__img
            figure
              img(src="@/assets/tema5/icon_5_03.svg", alt="alt", style="widht:90px").m-auto
          .v-card__body
            p.mb-0 Garantizar las actividades que aseguren la entrega de medicamentos y dispositivos médicos a los usuarios, de forma oportuna, eficiente, y segura.
    .row.justify-content-center.mb-5
      .col-auto
        figure(data-aos="fade-down")
          img(src="@/assets/tema5/img_5_01.svg", alt="alt", style="width:400px;").m-auto
    h5 Proceso de distribución
    .row.mb-5
      .col-lg-8(data-aos="fade-right")
        TabsA.color-acento-contenido.mb-5   
          .tarjeta.tarjeta--cyan.p-4(titulo="Distr. externa")
            h4 Distribución externa
            pmb-0 Entregar medicamentos y/o dispositivos médicos cuando reciben la atención de los servicios de salud, y a los establecimientos farmacéuticos cuya distribución puede convertirse en venta, cuando la entrega genera pago.
          .tarjeta.tarjeta--cyan.p-4(titulo="Distr. interna")
            h4 Distribución interna
            p.mb-0 Actividad que se realiza en las diferentes áreas de hospitalización de la Institución, y que busca entregar los medicamentos y los dispositivos médicos.
      .col-lg-auto(data-aos="fade-left")
        figure
          img(src="@/assets/tema5/img_5_02.svg",style="width:350px", alt="alt").m-auto
    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--purple2")(data-aos="fade-right")
      .row(titulo="Sistema de distribución por existencias en los servicios (<i>stock</i>)")
        .col-lg-3
          figure
            img(src="@/assets/tema5/img_5_03.svg", alt="alt", style="width:200px;").m-auto
        .col-lg-9
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-atom
              | 
              p.mb-0 Para una distribución interna, se debe conservar una provisión que puede ser una cantidad determinada de medicamentos y de dispositivos médicos de los más empleados y que son restablecidos por el servicio farmacéutico o depósito.
            li.d-flex
              i.fas.fa-atom
              | 
              p.mb-0 El almacenamiento o <em>stock</em> de los medicamentos y dispositivos médicos puede llevarse a cabo de varias formas: con carros de paro (reanimación) y los que se pueden manejar en cada uno de los servicios hospitalarios: urgencias, cirugía, hospitalización, rayos X, laboratorio clínico, unidad de cuidados intensivos.
            li.d-flex
              i.fas.fa-atom
              | 
              p.mb-0 Este sistema de distribución es de disponibilidad inmediata de los medicamentos y dispositivos médicos para las enfermeras y médicos y supone una ventaja para las enfermeras y médicos y, por lo tanto, disminuye la cantidad de fórmulas médicas y de pedidos.
      div(titulo="Sistema por prescripción individual transcrita o directa ")
        .row.align-items-center
          .col-lg-3
            figure
              img(src="@/assets/tema5/img_5_04.svg", alt="alt", style="width:200px;").m-auto
          .col-lg-9
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-atom
                | Se reciben las órdenes médicas directas, lo mismo sucede con las transcripciones de la orden médica y/o solicitudes de pedidos de dispositivos médicos requeridos por el personal de enfermería.
              li.d-flex
                i.fas.fa-atom
                | Los despachos se realizan cada 24 horas.
              li.d-flex
                i.fas.fa-atom
                | Este sistema presenta una ventaja importante y es que la orden médica puede ser revisada por el químico farmacéutico para un mayor control de medicamentos y dispositivos médicos.
      div(titulo="Sistema de distribución combinado o mixto")
        .row.align-items-center
          .col-lg-3
            figure
              img(src="@/assets/tema5/img_5_05.svg", alt="alt", style="width:200px;").m-auto
          .col-lg-9
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-atom
                | 
                p.mb-0 Con la formulación individual, se distribuyen algunos medicamentos y se puede mantener un <em>stock</em> de medicamentos, de envases de dosis múltiples, uso común y dispositivos médicos en el servicio de hospitalización.
              li.d-flex
                i.fas.fa-atom
                | Si se combinan los sistemas de distribución, algunas instituciones pueden validarlos, sobre todo donde no existan condiciones para implementar el sistema de distribución de medicamentos por dosis unitaria (SDMDU).         
      div(titulo="Sistema de distribución de medicamentos y dispositivos médicos por dosis unitaria (SDMDU)")
        .row.align-items-center
          .col-lg-3
            figure
              img(src="@/assets/tema5/img_5_06.svg", alt="alt", style="width:200px;").m-auto
          .col-lg-9
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-atom
                | Este sistema de distribución utiliza de forma eficiente y racional, los recursos humanos involucrados en el proceso.
              li.d-flex
                i.fas.fa-atom
                | 
                p.mb-0 Disminuye el costo hospitalario asociado con la medicación, porque minimiza la cantidad de los inventarios y el <em>stock</em> de los medicamentos.        
              li.d-flex
                i.fas.fa-atom
                | Permite un mejor control y seguimiento del tratamiento a los pacientes, a través del perfil farmacoterapéutico.
    separador
    #t_5_1.titulo-segundo.color-acento-contenido
      h2 5.1 Infraestructura necesaria para el proceso de distribución
    p.mb-5(data-aos="fade-right") Para el correcto funcionamiento del proceso de distribución, los requisitos de infraestructura son los siguientes: 
    .row.justify-content-center.g-0(data-aos="fade-left")
      .col-lg-6.mb-4
        .h-card
          .h-card__img              
            img(src="@/assets/tema4/icon_funciones_01.svg", alt="alt", style="width:90px").m-auto
          .h-card__body
            h5 Personal competente
            p.mb-0 Director Técnico (Químico Farmacéutico) y personal de apoyo que incluye Regentes de Farmacia y auxiliares.
      .col-lg-6.mb-4
        .h-card
          .h-card__img              
            img(src="@/assets/tema4/icon_funciones_01.svg", alt="alt", style="width:90px").m-auto
          .h-card__body
            h5 Equipamiento
            p.mb-0 Paneles o estantes, carros de medicación.
      .col-lg-6.mb-4
        .h-card
          .h-card__img              
            img(src="@/assets/tema4/icon_funciones_01.svg", alt="alt", style="width:90px").m-auto
          .h-card__body
            h5 Área
            p.mb-0 Permitir diferenciar la recepción de las prescripciones médicas, la transcripción, la validación, la preparación de la dosis unitaria en los cajetines de cada paciente y la revisión de los mismos.
      .col-lg-6.mb-4
        .h-card
          .h-card__img              
            img(src="@/assets/tema4/icon_funciones_01.svg", alt="alt", style="width:90px").m-auto
          .h-card__body
            h5 Información
            p.mb-0 Historia clínica, comunicaciones internas, solicitudes, actas de reuniones. Información proveniente de comités institucionales, bibliografía actualizada sobre medicamentos.
    separador
    #t_5_2.titulo-segundo.color-acento-contenido
      h2 5.2 Proceso de reempaque de medicamentos
    .row.g-0.justify-content-center.align-items-center.mb-5
      .col-lg-auto.d-none.d-xl-flex(data-aos="fade-right")
        figure
          img(src="@/assets/tema5/img_5_3_01.jpg", alt="alt", style="width:300px;")
      .col-lg-7.col-xl-5(data-aos="fade-left")
        .tarjeta--azul
          p.mb-0 La presentación comercial y la forma farmacéutica de muchos de los medicamentos de nuestro país, han sido diseñadas para la farmacoterapia de pacientes ambulatorios; se han utilizado envases multidosis que no son adecuados para los sistemas de distribución intrahospitalaria y, por lo tanto, es importante que se empaquen basados en dosis que faciliten la dispensación y distribución de los mismos en las cantidades requeridas.
            br
            br
            | Es importante que los medicamentos tengan presentaciones que permitan un mejor manejo, una seguridad y dosificación correctas, para obtener un adecuado seguimiento de la terapia del paciente. Esto implica que se entregue a la unidad de enfermería o a la sala de hospitalización, las dosis requeridas para 24 horas de tratamiento, según las indicaciones médicas para cada paciente.
            br
            br
            | Por estas razones, se hace necesario la adecuación del reempaque de los medicamentos para el sistema de dosis unitaria.
      .col-lg-auto.d-none.d-lg-flex
        figure
          img(src="@/assets/tema5/img_5_3_02.jpg", alt="alt", style="width:300px;")
    p.mb-4(data-aos="fade-right") Un programa de reempaque de medicamentos para dosis diaria, considera los aspectos siguientes:
    .row.mb-3
      .col-lg-4(data-aos="fade-right")
        figure
          img(src="@/assets/tema5/img_5_3_03.svg", alt="alt", style="width:350px").m-auto
      .col-lg-8(data-aos="fade-left")
        ul.lista-ul--color
          li.d-flex
            i.fas.fa-atom
            | Material y equipo.
          li.d-flex
            i.fas.fa-atom
            | Recurso humano.
          li.d-flex
            i.fas.fa-atom
            | Procedimiento para el registro y control. Permite contribuir a la consecución de los objetivos del proceso de reempaque, para dispensar y distribuir medicamentos garantizando la seguridad, la eficacia y el control.
    p(data-aos="fade-down") Reempacar medicamentos para dosis diarias, se basa en mantener disponible, en el lugar apropiado, y de forma oportuna para su aplicación al paciente, los medicamentos prescritos por el médico en las dosis y formas farmacéuticas señaladas y debidamente rotuladas para la identificación del medicamento.
    .row.justify-content-center.align-items-center.mb-5     
      .col-lg.order-2.order-lg-1(data-aos="fade-right")
        .tarjeta--purple 
          p La etiqueta debe contener una información técnica como la siguiente:
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-atom
              | Nombre comercial del producto.
            li.d-flex
              i.fas.fa-atom
              | Nombre genérico.
            li.d-flex
              i.fas.fa-atom
              | Concentración
            li.d-flex
              i.fas.fa-atom
              | Código interno del medicamento.
            li.d-flex
              i.fas.fa-atom
              |	Número de lote.
            li.d-flex
              i.fas.fa-atom
              |	Fecha de vencimiento.
      .col-auto.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img(src="@/assets/tema5/medicine_01.svg", alt="alt", style="width:550px;").m-auto
    .row.justify-content-center.align-items-center     
      .col-auto.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/tema5/medicine_02.svg", alt="alt", style="width:550px;").m-auto 
      .col-lg(data-aos="fade-left")
        .tarjeta--purple 
          p Los requisitos para el reempaque de los medicamentos son:
          ol.lista-ol--cuadro
            li.d-flex
              .lista-ol--cuadro__vineta
                span 1
              | Lavado de manos.
            li.d-flex
              .lista-ol--cuadro__vineta
                span 2
              | Medidas de bioseguridad.
            li.d-flex
              .lista-ol--cuadro__vineta
                span 3
              | Manejo de desechos.
            li.d-flex
              .lista-ol--cuadro__vineta
                span 4
              | Control del proceso.
            li.d-flex
              .lista-ol--cuadro__vineta
                span 5
              |	Proceso de reempaque.
            li.d-flex
              .lista-ol--cuadro__vineta
                span 6
              |	Hoja de control.
            li.d-flex
              .lista-ol--cuadro__vineta
                span 7
              |	Rotulación.
            li.d-flex
              .lista-ol--cuadro__vineta
                span 8
              |	Reenvasado.
            li.d-flex
              .lista-ol--cuadro__vineta
                span 9
              |	Registro de producción.
            li.d-flex
              .lista-ol--cuadro__vineta
                span 10
              |	Ubicar estanterías.
            li.d-flex
              .lista-ol--cuadro__vineta
                span 11
              |	Dispensar.

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

<style lang="sass" scoped></style>
