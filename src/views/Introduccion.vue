<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción   


    .row.g-0.justify-content-center.align-items-center    

      .col-auto
        figure
          img(src="@/assets/intro/intro_01.jpg", alt="alt", style="width:550px;")

      .col-lg-5.m-left
        .rigth-bubble      
          p.mb-5.text-center #[strong ¿Sabías que conocer la normatividad del sector farmacéutico es parte fundamental para el desempeño de las actividades laborales cotidianas como Regente de Farmacia?]
          p.mb-4 En este componente formativo estudiaremos la historia de la farmacia, comprenderemos cuál es la Política Farmacéutica Nacional, y realizaremos un recorrido por la normatividad del proceso de dispensación de productos farmacéuticos, identificando sus características, sus prohibiciones y sus obligaciones.
            br
            br            
            | Luego de analizar e interiorizar los conocimientos normativos, se identificarán tanto el rol dentro de estos procesos, como los códigos de ética y la importancia de reconocer las prohibiciones y obligaciones del dispensador, sin olvidar que se puede generar un impacto positivo o negativo en la persona o paciente que reciba dichos productos. 
            
          p.text-center.mb-0 #[strong ¡Muchos éxitos en este proceso de aprendizaje! ]
      

    
    


          

    
    

    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
