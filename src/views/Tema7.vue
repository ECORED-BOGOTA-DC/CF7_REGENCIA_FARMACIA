<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Ética profesional del Tecnólogo en Regencia de Farmacia
    p.mb-5(data-aos="fade-right") A nivel institucional, los valores que veremos a continuación y que se estiman como parte integral del proceso de formación del individuo, deben ser ejecutados y experimentados dentro de un grupo de trabajo:
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-auto.mb-4.mb-xl-0
        .tarjeta.tarjeta-container.tarjeta-purpura
          .tarjetaContent
            .tarjetaImg
              figure
                img(src="@/assets/tema7/img_7_01.svg", alt="Compromiso", style="width:160px;").m-auto
            .tarjetaTxt
              p.mb-0 Debe ser visualizado, no como el simple deber de hacer o cumplir, sino como el deber ser del funcionario con la institución, los usuarios y compañeros de labores, directos e indirectos.
      .col-auto.mb-4
        .tarjeta.tarjeta-container.tarjeta-purpura
          .tarjetaContent
            .tarjetaImg
              figure
                img(src="@/assets/tema7/img_7_02.svg", alt="Pertenencia", style="width:160px;").m-auto
            .tarjetaTxt
              p.mb-0 Hacia las acciones, comportamiento y gestión de las realizaciones cuando de verdad se forma parte de una organización.
      .col-auto.mb-4
        .tarjeta.tarjeta-container.tarjeta-purpura
          .tarjetaContent
            .tarjetaImg
              figure
                img(src="@/assets/tema7/img_7_03.svg", alt="Justicia", style="width:160px;").m-auto
            .tarjetaTxt
              p.mb-0 Fundamento de las acciones, debe ser indicador de la práctica coherente de reconocer y tratar a todos los funcionarios y usuarios internos y externos con equidad.
      .col-auto.mb-4
        .tarjeta.tarjeta-container.tarjeta-purpura
          .tarjetaContent
            .tarjetaImg
              figure
                img(src="@/assets/tema7/img_7_04.svg", alt="Respeto", style="width:160px;").m-auto
            .tarjetaTxt
              p.mb-0 Independiente a las ideologías personales, nace de la diferencia en cualquiera de sus manifestaciones y, más aún, en el ámbito laboral.
      .col-auto.mb-4
        .tarjeta.tarjeta-container.tarjeta-purpura
          .tarjetaContent
            .tarjetaImg
              figure
                img(src="@/assets/tema7/img_7_05.svg", alt="Dialogo", style="width:160px;").m-auto
            .tarjetaTxt
              p.mb-0 Capacidad de escuchar, conceder, pactar, comprender y debatir.
      .col-auto.mb-4
        .tarjeta.tarjeta-container.tarjeta-purpura
          .tarjetaContent
            .tarjetaImg
              figure
                img(src="@/assets/tema7/img_7_06.svg", alt="Responsabilidad", style="width:160px;").m-auto
            .tarjetaTxt
              p.mb-0 Institucional y personal en las acciones propias como funcionarios y como personas integrantes de una sociedad.
      .col-auto.mb-4
        .tarjeta.tarjeta-container.tarjeta-purpura
          .tarjetaContent
            .tarjetaImg
              figure
                img(src="@/assets/tema7/img_7_07.svg", alt="Tolerancia", style="width:160px;").m-auto
            .tarjetaTxt
              p.mb-0 Hacia los demás como práctica al respeto, a la diferencia, bajo la concepción que el mundo real y laboral está conformado por seres humanos con grandes valores y con falencias.
      .col-auto.mb-4
        .tarjeta.tarjeta-container.tarjeta-purpura
          .tarjetaContent
            .tarjetaImg
              figure
                img(src="@/assets/tema7/img_7_08.svg", alt="Honestidad", style="width:160px;").m-auto
            .tarjetaTxt
              p.mb-0 Comprendido como valor de riqueza, no solo de usurpar el valor ajeno, sino que se da con nuestro accionar en todas las manifestaciones del trabajo y el compromiso con la entidad y con los clientes.
    .row.align-items-center
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/tema7/img_7_09.svg", alt="alt", style="width:350px;").m-auto
      .col-lg-8(data-aos="fade-left")
        p Asimismo, el trabajador del servicio farmacéutico de una Institución o establecimiento farmacéutico, debe compenetrarse con las condiciones y las expectativas mínimas y esenciales para desempeñar su labor; a continuación las enunciamos:
        ul.lista-ul--color
          li.d-flex
            i.fas.fa-atom
            | Dador de cuidados farmacéuticos.
          li.d-flex
            i.fas.fa-atom
            | Tomador de decisiones.
          li.d-flex
            i.fas.fa-atom
            | Comunicador.
          li.d-flex
            i.fas.fa-atom
            | Líder.
          li.d-flex
            i.fas.fa-atom
            | Gestor.
          li.d-flex
            i.fas.fa-atom
            | Estudiante de por vida.
          li.d-flex
            i.fas.fa-atom
            | Educador.
        p.mb-0 Estas condiciones se deben tener en cuenta como parte de los resultados imprescindibles de la educación básica y del adiestramiento profesional. También proporcionan las bases esenciales para la práctica de la farmacia, en un medio multiprofesional proveedor de cuidados sanitarios.

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

<style lang="sass" scoped></style>
