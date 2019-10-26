<template>
  <div class="page page--report">
    <div class="page__wrap">

      <section class="page__section page__section--head">
        <h1 class="page__title">Localización de los locales de juego y salones de apuestas de Madrid</h1>
        <p class="page__subtitle">Elaborado por Vicente Pérez Quintana.</p>
        <p class="page__subtitle">Coordinación del trabajo de campo por Silvia González y Óscar Chaves.</p>
        <p class="page__subtitle">Madrid, octubre de 2019</p>
      </section>

      <section class="page__section page__section--contents">
        <h4>Índice de contenidos</h4>
        <ul>
          <li><a @click="scrollTo('introduccion')">Introducción</a></li>
          <li><a @click="scrollTo('implantacion')">Implantación</a></li>
        </ul>
      </section>

      <section class="page__section page__section--text">

        <!-- start intro -->
        <h3 ref="introduccion">Introducción</h3>
        <p>El objeto del presente estudio es la distribución espacial de los establecimientos de juegos y apuestas existentes en la ciudad de Madrid, en la amplia acepción que recoge el artículo 1 de la Ley 6/2001, del juego en la Comunidad de Madrid: locales en los que se realizan «actividades en las que se arriesguen cantidades de dinero u objetos económicamente evaluables en cualquier forma sobre los resultados, y que permitan su transferencia entre los participantes, con independencia de que predomine en ellos el grado de destreza de los jugadores o sean exclusiva o primordialmente de suerte, envite o azar y tanto si se desarrollan mediante la utilización de máquinas automáticas como si se llevan a cabo a través de la realización de actividades humanas, cualquiera que sea el medio por el que se realicen».</p>
        <p>Aquí entran los casinos, bingos, locales de juegos, salones de apuestas, establecimientos de juegos colectivos de dinero y azar… Se excluyen las administraciones de lotería, estancos, ONCE y, en general, los espacios de juegos de gestión pública o sometidos a autorización especial. También quedan fuera los bares, restaurantes y lugares con unas pocas máquinas tragaperras y similares. Solo se consideran los negocios estables, no se contabilizan las instalaciones temporales, efímeras…</p>
        <p>Para establecer el universo de estudio se ha partido del listado de establecimientos con el epígrafe 920002 en el Censo de Locales del Ayuntamiento de Madrid, que comprende los juegos de azar y apuestas de gestión privada. En el trabajo de campo se han visitado todas las direcciones a fin de verificar la actividad. Ello ha permitido depurar el listado eliminando los locales en los que la actividad no se corresponde con el epígrafe o en los que no hay actividad alguna (viviendas, solares…). En paralelo, en el trabajo de campo se ha peinado buena parte de la ciudad a fin de identificar aquellos establecimientos en los que se practican juegos de azar y/o apuestas pero que figuran con otro epígrafe en el Censo o incluso que no están (o no ha sido posible hallarlos) en él. Estas incorporaciones han sido fotografiadas y rastreadas en el Censo a fin de acotar la actividad dada de alta. En muchos casos, como se verá, se corresponden con los epígrafes 920001 (juegos de azar y apuestas de gestión pública) o 932007 (salones de recreo, diversión y otras actividades recreativas).</p>
        <p>El trabajo de campo se ha realizado en poco tiempo y gracias a la aportación voluntaria de muchas personas en los 21 distritos, bajo la supervisión de la FRAVM. Esto nos asegura que el universo sobre el que se trabaja aquí es aproximado al real o, dicho de otra manera, todos los establecimientos incluidos son salones de apuestas-locales de juego, pero seguramente han quedado establecimientos sin identificar. Cabe confiar que el número de éstos no sea grande. En cualquier caso, esta circunstancia obliga a aplicar la cautela en el examen de los datos.</p>
        <!-- end intro -->

        <!-- start implantacion -->
        <h3 ref="implantacion">Implantacion</h3>
        <p>Según el Censo de Locales y Actividades del Ayuntamiento de Madrid, en la ciudad hay, a julio de 2019, 378 locales abiertos cuya actividad es la de juegos de azar y apuestas de gestión privada1, que incluye bingos, casinos y máquinas tragaperras, y excluye los juegos de azar y apuestas de gestión pública o autorización especial, tales como las administraciones de lotería o la ONCE. Son locales con entrada directa desde la calle o insertos en una agrupación de locales (centros comerciales).</p>
        <p>En el trabajo de campo se han dado de baja 52 establecimientos. La mayoría de ellos bien no han abierto, bien han cerrado la actividad en el último año. Algunos desarrollan otros negocios (bares, restaurantes…) o son las oficinas de empresas de juegos… En algún caso son viviendas. En el lado contrario, se han añadido 74 establecimientos. Buena parte de ellos son administraciones de loterías en las que -además de la actividad propia- se practican otras apuestas-juegos y, asimismo, salones de recreo en los que -además de actividades recreativas- se realizan apuestas-juegos de azar. En pocos casos, la licencia de actividad es de bares, restaurantes… En un número reducido de locales no ha sido posible asociarlos a una licencia, sea porque carecen de ella, sea porque operan a partir de una declaración responsable, sea porque las direcciones de la licencia y la localización efectiva no coinciden, sea por otras razones, sin descartar las dificultades del rastreo en campo.</p>
        <p>El universo, por tanto, queda formado por 400 locales y salones. En el cuadro se especifica la titularidad del negocio para los casos en que ha sido posible concretarla. Dos empresas (Codere y Sportium) ejercen un fuerte dominio: sea en solitario, sea asociadas con otros operadores, están presentes en, al menos, el 75% de los locales. En tercer lugar, pero muy lejos de las anteriores, está Luckia, en la que participan Egasa y Cafeterías Nebraska. Es indiscutible, por tanto, la situación de duopolio sobre la que se organiza el mercado del juego en la ciudad, tanto más si se considera que Sportiun es propiedad, el 100%, del fondo de inversión Blackstone y que Codere pertenece a Silver Point, Prudential PLC, Abrams Capital, Contrarian y Martínez Sampedro.</p>

      </section>
    </div>

    <div class="page__wrap page__wrap--big">
      <section class="page__section page__section--text">
        <table-locals-by-distric-company/>
      </section>
    </div>

    <div class="page__wrap">
      <section class="page__section page__section--text">


<!-- 

        <locals-by-rent/>
        
        <locals-by-distric/>

        <table-streets-by-number/>
 -->
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'report-page',
  created: function(){
  },
  methods: {
    scrollTo(refName) {
      let element = this.$refs[refName];
      window.scrollTo(0, element.offsetTop - 60);
    }
  }
}

</script>