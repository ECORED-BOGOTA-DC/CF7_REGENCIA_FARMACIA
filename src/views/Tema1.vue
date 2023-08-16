<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Historia de la farmacia: origen de los medicamentos y evolución del sector farmacéutico

    .row.align-items-center.mb-5
      .col-lg-7.order-2.order-lg-1
        p La historia de la farmacia, vista desde cada uno de los periodos de la Humanidad, ha venido evolucionando a partir de los aportes realizados por muchos de los “actores” que intervinieron en su desarrollo.

        .cajon.customColorA.p-4        
          p.mb-0 Para tener una visión más global de dicha historia, le invitamos a explorar la siguiente línea de tiempo con los aspectos más relevantes en distintos periodos de la historia.
      .col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0
        figure
          img(src="@/assets/tema1/img_1_01.svg", alt="alt", style="width:500px;").m-auto

    .row
      .col-12
        .tarjeta.tarjeta--gris.p-4.mb-5   
          LineaTiempoC.color-acento-contenido

            .row.justify-content-center.mt-3(titulo="2600 a.C.")       
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/tema1/img_T1.jpg', alt='Texto que describa la imagen')
              .col-md-4
                h4 Farmacia de la antigua Babilonia (Cerca de 2600 a. C.)
                p Quienes ejercían la labor de curar a los enfermos, pertenecían a la iglesia; también se encontraban el farmacéutico y el médico. Toda esta información quedó registrada en tablillas.
                
            .row.justify-content-center.mt-3(titulo="2000 a.C.")       
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/tema1/img_T2.jpg', alt='Texto que describa la imagen')
              .col-md-4
                h4 Farmacia en la antigua China (cerca de 2000 a. C.)
                p Se descubrió la importancia medicinal de las primeras plantas, y se desarrollaron alrededor de 365 medicinas.
                
            .row.justify-content-center.mt-3(titulo="1500 a.C.")       
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/tema1/img_T3.jpg', alt='Texto que describa la imagen')
              .col-md-4
                h4 Los días del papiro de Ebers (1500 a. C.)
                p Se creó el primer documento soporte basado en 800 prescripciones y 700 medicinas. Se conocieron los primeros Jefes de producción y personas que preparaban las medicinas.

            .row.justify-content-center.mt-3(titulo="300 a.C.")       
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/tema1/img_T4.jpg', alt='Texto que describa la imagen')
              .col-md-4
                h4 Theophrastus de Eresus (Teofrasto)  - padre de la botánica (300 a. C.)
                p Se clasificaron todo tipo de hierbas y estas clasificaciones continúan siendo utilizadas en la actualidad.

            .row.justify-content-center.mt-3(titulo="100 a.C.")       
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/tema1/img_T5.jpg', alt='Texto que describa la imagen')
              .col-md-4
                h4 Inicios de la toxicología – Mithridates VI (cerca de 100 a. C.)
                p Se probaron los primeros venenos y antídotos, utilizando animales para las pruebas.

            .row.justify-content-center.mt-3(titulo="Siglo I d.C.")       
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/tema1/img_T6.jpg', alt='Texto que describa la imagen')
              .col-md-4
                h4 Se examina la medicina (primer siglo d. C.)
                p Se definieron las primeras estrategias para la conservación, almacenamiento y uso de las medicinas.

            .row.justify-content-center.mt-3(titulo="130-200 d.C.")       
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/tema1/img_T7.jpg', alt='Texto que describa la imagen')
              .col-md-4
                h4 Experimentos de Galeno en compuestos de drogas (130-200 d. C.)
                p Se inició con la industrialización de los procesos de elaboración y extracción de las medicinas, por medio de procesos mecánicos.

            .row.justify-content-center.mt-3(titulo="303 d.C.")       
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/tema1/img_T8.jpg', alt='Texto que describa la imagen')
              .col-md-4
                h4 Damián y Cosme – santos patronos de la farmacia (año 303)
                p Gracias al aporte de estos dos hermanos, son considerados como los dioses de la farmacia.

            .row.justify-content-center.mt-3(titulo="Siglo VII")       
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/tema1/img_T9.jpg', alt='Texto que describa la imagen')
              .col-md-4
                h4 Farmacia monástica (Siglo VII)
                p Los monasterios tradujeron los documentos donde se encontraban las preparaciones de las plantas para la producción de las medicinas. Más adelante, estos documentos fueron almacenados en sus bibliotecas.

            .row.justify-content-center.mt-3(titulo="Siglo VIII")       
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/tema1/img_T10.jpg', alt='Texto que describa la imagen')
              .col-md-4
                h4 Las primeras tiendas farmacéuticas (Siglo VIII)
                p Se realizó la separación entre el tema farmacéutico y el médico, con el objetivo de identificar los alcances en cada uno de estos campos.
                
            .row.justify-content-center.mt-3(titulo="980-1037 d.C.")       
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/tema1/img_T11.jpg', alt='Texto que describa la imagen')
              .col-md-4
                h4 Avicena – El Galeno Persa (unos 980-1037 d. C.)
                p El conocimiento que impartió en temas relacionados con el mundo farmacéutico, fue aceptado en gran parte del siglo XVII. Es considerado uno de los grandes médicos de todos los tiempos.

            .row.justify-content-center.mt-3(titulo="1948")       
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/tema1/img_T12.jpg', alt='Texto que describa la imagen')
              .col-md-4
                h4 La primera farmacopea oficial (1498) 
                p Surgió la primera farmacopea como proceso de estandarización de los métodos utilizados para el manejo y la producción de sustancias medicinales.

            .row.justify-content-center.mt-3(titulo="Siglo XII")       
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/tema1/img_T13.jpg', alt='Texto que describa la imagen')
              .col-md-6
                h4 Siglo XXI - La Farmacia de hoy y mañana
                p A inicios del siglo 21, la farmacia logró especializarse profundamente en gran parte de sus ámbitos de aplicación, con múltiples e interesantes cambios: hospitalario, atención primaria en salud, administración de los servicios farmacéuticos, centros de investigación, la industria farmacéutica y el conocimiento impartido por los docentes.
                  br
                  br
                  | Los incontables cambios tecnológicos han llevado a los entes regulatorios y los profesionales de la salud, a trabajar de manera muy coordinada para poder llevar a efecto los controles respectivos a los procesos de comercialización.
                  br
                  br
                  |También surge el concepto de Farmacia Marketing.

    p Para ampliar la información sobre este tema, visite el enlace:

    .row
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('downloads/Historia-de-la-farmacia.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Historia de la farmacia: origen de los medicamentos y evolución del sector farmacéutico

              
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
