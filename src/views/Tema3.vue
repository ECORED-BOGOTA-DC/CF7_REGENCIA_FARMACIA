<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Normatividad del proceso de dispensación de productos farmacéuticos
    .row.align-items-center.mb-5
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/tema3/img_3_01.svg", alt="alt", style="width:500px;").m-auto
      .col-lg-7.order-2.order-lg-1(data-aos="fade-left")
        p La norma más importante en la cual se incluye la forma como se deben prestar los servicios, a nivel farmacéutico, a la población colombiana, es la Ley 100/93, que define el S.G.S.S.S.
        .cajon.customColorA.p-4       
          p.mb-0 Como objetivo primordial para la correcta prestación de los servicios farmacéuticos, surge la Política Farmacéutica Nacional del año 2012 - 2021, cuya finalidad es mejorar la eficiencia en los siguientes aspectos:
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-auto.mb-4.mb-xl-0
        .tarjeta.tarjeta-container.tarjeta-cyan
          .tarjetaContent
            .tarjetaImg
              figure
                img(src="@/assets/tema3/icon_3_01.svg", alt="acceso", style="width:120px;").m-auto
            .tarjetaTxt
              p.mb-0 Donde gran parte de la población no goza de cobertura en la atención
      .col-auto.mb-4.mb-xl-0
        .tarjeta.tarjeta-container.tarjeta-cyan
          .tarjetaContent
            .tarjetaImg
              figure
                img(src="@/assets/tema3/icon_3_02.svg", alt="acceso", style="width:120px;").m-auto
            .tarjetaTxt
              p.mb-0 Verificar y garantizar el cumplimiento con las B.P.M. (Buenas Prácticas de Manufactura de los medicamentos)
      .col-auto.mb-4.mb-lg-0
        .tarjeta.tarjeta-container.tarjeta-cyan
          .tarjetaContent
            .tarjetaImg
              figure
                img(src="@/assets/tema3/icon_3_03.svg", alt="acceso", style="width:120px;").m-auto
            .tarjetaTxt
              p.mb-0 Se logra con una articulación desde la prescripción de la fórmula médica, realizada por el profesional adecuado, y una dispensación que se complemente con información correcta.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p Enmarcados en esta política nacional, se crean:
        ul.lista-ul--color.mb-4.ms-4
          li.d-flex
            i.fas.fa-atom
            | El Decreto 786 de 2016 para la reglamentación del Servicio Farmacéutico.
          li.d-flex
            i.fas.fa-atom
            | La Resolución 1403 de 2007 y sus respectivas modificaciones (Resolución 2955/07) la cual determina el Modelo de Gestión del Servicio Farmacéutico y adopta el Manual de Condiciones Esenciales y Procedimientos)
        p Así mismo el INVIMA garantiza que se cumpla con la normatividad.
        p Por su parte, el Ministerio de la Protección Social definió, según el grado de complejidad, quiénes son los profesionales involucrados en la Dirección Técnica de los servicios y establecimientos farmacéuticos, así:
        ul.lista-ul--color.ms-4
          li.d-flex
            i.fas.fa-atom
            | En el nivel de baja complejidad, la profesión del Tecnólogo en Regencia de Farmacia está reglamentada por la ley 485/98 y la resolución 486 de 2003.
          li.d-flex
            i.fas.fa-atom
            | Según la Ley 212 de 1995, el Químico Farmacéutico será el Director Técnico en el nivel de atención de mediana y alta complejidad.
      .col-lg-4(data-aos="fade-left")
        figure
          img(src="@/assets/tema3/img_3_02.svg", alt="alt", style="width:300px;").m-auto
    p.mb-5(data-aos="fade-right") A continuación, conozcamos las normas que complementan a las normas principales y que están relacionadas con los servicios y establecimientos farmacéuticos:
    .customBg.mb-5
      .row
        .col-lg-4.d-lg-flex.d-none(data-aos="fade-right")
          figure
            img(src="@/assets/tema3/img_3_03.png", alt="alt").class           
        .col-lg-8(data-aos="fade-left")
          TabsA.color-secundario.mb-5
            .tarjeta.color-blanco.p-4(titulo="Ley 10 de 1990")   
              p.mb-2 #[strong Ley 10 de 1990]       
              p Ministerio de la Protección Social. Reorganiza el Sistema Nacional de Salud.
            .tarjeta.color-blanco.p-4(titulo="Resolución 1164 de 2002")  
              p.mb-2 #[strong Resolución 1164 de 2002]        
              p Ministerio del Medio Ambiente. Manual de procedimientos para la gestión integral de los residuos hospitalarios y similares.
            .tarjeta.color-blanco.p-4(titulo="Ley 212 de 1995")       
              p.mb-2 #[strong Ley 212 de 1995]   
              p Ministerio de la Protección Social. Ley 1945 de 1996. Regula la profesión del químico farmacéutico.
            .tarjeta.color-blanco.p-4(titulo="Resolución 1672 de 2004")          
              p.mb-2 #[strong Resolución 1672 de 2004]
              p Manual de Buenas Prácticas de Manufactura de los Gases Medicinales.
            .tarjeta.color-blanco.p-4(titulo="Decreto 1737 de 2005")          
              p.mb-2 #[strong Decreto 1737 de 2005]
              p Ministerio de la Protección Social. Reglamenta preparación, distribución, dispensación, comercialización, etiquetado, rotulado y empaque de los medicamentos homeopáticos magistrales y oficinales y se dictan otras disposiciones.
            .tarjeta.color-blanco.p-4(titulo="Resolución 1478 de 2006")          
              p.mb-2 #[strong Resolución 1478 de 2006]
              p Ministerio de la Protección Social. Sustancias sometidas a fiscalización y medicamentos que son monopolio del Estado.
            .tarjeta.color-blanco.p-4(titulo="Acuerdo 029 de 2011")          
              p.mb-2 #[strong Acuerdo 029 de 2011]
              p Ministerio de la Protección Social. Manual de Medicamentos del POS.
            .tarjeta.color-blanco.p-4(titulo="Resolución 4816 de 2008")          
              p.mb-2 #[strong Resolución 4816 de 2008]
              p Ministerio de la Protección Social. Programa Nacional de Tecnovigilancia.
            .tarjeta.color-blanco.p-4(titulo="Resolución 444 de 2008")          
              p.mb-2 #[strong Resolución 444 de 2008]
              p Ministerio de la Protección Social. Buenas prácticas de elaboración de preparados magistrales.
    p.mb-5(data-aos="fade-right") Tengamos en cuenta los siguientes aspectos importantes:
    .row.justify-content-center.mb-5
      .col-lg-12(data-aos="fade-down")
        .titulo-sexto.color-acento-botones
          p.mb-0 #[b Figura 2]. Uso seguro de los medicamentos
        figure.mb-5
          img(src="@/assets/tema3/img_3_03.svg", alt="alt", style="width:1100px").m-auto
        p.text-center Nota. Sena (2021)
    .row.mb-5
      .col-lg-8(data-aos="fade-right")
        p En los estudios relacionados con la seguridad, en cuanto a la atención de la salud, ya sea de carácter nacional o internacional, se ha detectado que, el uso certero de medicamentos es una de las medidas seguras para la prevención de situaciones de riesgo para la salud humana. Asimismo, se ha evidenciado que la existencia de fallos de medicación, se presenta hasta en un 67% de las recetas médicas y, la administración y concesión del medicamento, se asocia con errores y peligros para la salud.
          br
          br
          | La siguiente imagen nos presenta el costo anual estimado por la Organización Mundial de la Salud, debido a los errores de dispensación y las etapas donde se presentan dichos errores.
      .col-lg-4(data-aos="fade-left")
        figure
          img(src="@/assets/tema3/img_3_04.svg", alt="alt", style="width:350px;").m-auto
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-right")
        .titulo-sexto.color-acento-botones
          p.mb-0 #[b Figura 3]. Información O.M.S relacionada con los errores de dispensación y su costo
        .cajon.customColorA.p-4.mb-4
          p.mb-0 La Organización Mundial de la Salud (OMS), informó que los errores en dispensación generan un costo anual de #[strong(style="color:#7E5EE3;") US$42.000 millones, en un mundo en el que cuatro de cada diez pacientes sufren complicaciones en la atención primaria de la salud y en los servicios ambulatorios]. Los errores más frecuentes y perjudiciales, advertía la entidad, se encuentran relacionados con el diagnóstico, la prescripción y el uso de medicamentos.
        figure.mb-3
          img(src="@/assets/tema3/img_3_05.svg", alt="alt", style="width:100%;").m-auto
        p.text-center Nota. Sena (2021)
    p.mb-5(data-aos="fade-right") Ahora, como resultado de una investigación, se conocen las principales causas de los errores de dispensación, donde intervienen cada uno de los actores de este proceso, desde la prescripción realizada por los médicos, hasta el usuario o paciente final.
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-down")
        .titulo-sexto.color-acento-botones.mb-4
          p.mb-0 #[b Figura 4]. Principales causas de los errores en la dispensación de productos farmacéuticos
        figure.mb-5
          img(src="@/assets/tema3/img_3_06.svg", alt="alt", style="width:1200px;").m-auto
        p.text-center Nota. <a href="https://www.mincit.gov.co/" target="_blank"> https://bit.ly/2U3speP </a>
    p.mb-0(data-aos="fade-right") En la figura anterior, se pudo observar que las causas más comunes se presentan en la etapa de revisión y entrega de los medicamentos, debido a que el principal error en dispensación es el de la equivocación en la lectura e interpretación de las características de los medicamentos: nombre, concentración y vías de administración.

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

<style lang="sass" scoped></style>
