<template>
  <div class="page page--report">
    <div class="page__wrap">

      <section class="page__section page__section--head">
        <h1 class="page__title">Informe sobre la localización de las casas de juego en Madrid</h1>
        <p class="page__subtitle">Elaborado por Vicente Pérez Quintana</p>
        <p class="page__subtitle">Madrid, octubre de 2019</p>
      </section>

      <section class="page__section page__section--contents">
        <h4>Índice de contenidos</h4>
        <ul>
          <li><a @click="scrollTo('introduccion')">Introducción</a></li>
          <li><a>Implantación</a></li>
          <li><a>Determinantes de la localización</a></li>
          <li><a>Localización en otras ciudades</a></li>
          <li><a>Cercanía a institutos públicos</a></li>
        </ul>
      </section>

      <section class="page__section page__section--text">

        <!-- start intro -->
        <h3 ref="introduccion">Introducción</h3>
        <p>En el presente informe se estudia la implantación del fenómeno de las casas de juego en Madrid. Éstas, junto con las apuestas en Internet, han tenido en los últimos años, y siguen teniendo, un fuerte incremento.</p>
        <p>Esa extensión constituye un problema social importante dadas las consecuencias que entraña para la economía de las familias y para la salud colectiva. La ludopatía es, sin duda, una patología social que no cesa de crecer y enraizar en las grandes ciudades.</p>
        <p>Los poderes públicos apenas están reaccionando, incluso se hallan casos de administraciones que no admiten que exista un problema al respecto.</p>
        <p>Si embargo, en los barrios más modestos prende cada vez más la queja ciudadana contra el crecimiento descontrolado de las casas de juego, unida a la demanda de medidas reguladoras.</p>
        <p>En las páginas que siguen nos detenemos en examinar el número y, sobre todo, la correlación del número con otras variables socioeconómicas. La hipótesis principal es que las casas de juego no se reparten al azar sobre el territorio, sino que la localización se organiza sobre patrones bien identificables.</p>
        <p>En julio de 2019, según el Censo de Locales del Ayuntamiento de Madrid, había el municipio 378 locales de juegos de azar, sin contar las administraciones de lotería y actividades sujetas a autorización especial.</p>
        <p>Las casas de juego, preferentemente, se hallan dentro de la margen occidental de la almendra central y en los barrios periféricos del sur próximos a la M-30. En posiciones periféricas hay pocas. En particular, se identifican fuertes aglomeraciones en Aluche-Vista Alegre-San Isidro, Moscardó-Almendrales, San Diego-Numancia, Sol, Bellas Vistas y Quintana. Más en concreto, en esos espacios sobresalen determinadas calles y sus entornos: Bravo Murillo, Alcalá, Marcelo Usera, General Ricardos, avda. de la Albufera… Se advierte una muy clara vinculación en la implantación de los ejes comerciales y áreas de gran afluencia de público.</p>
        <p>En general, son barrios de tamaño medio y grande, medidos por el número de habitantes, y con ratios de densidad poblacional elevados. Parece, así pues, que los locales buscan la proximidad de un tejido urbano muy consolidado, con actividad, saturado.</p>
        <p>Por otra parte, en general, son barrios con niveles de renta neta de las familias inferiores a la media municipal o en torno a ella. Dada la asociación obvia entre el nivel de renta y el nivel de estudios de la población, son barrios en los que el peso de los mayores de 25 años sin estudios o con estudios acabados de bajo nivel es elevado. Asimismo, hay que llamar la atención sobre el peso alto en ellos de la población inmigrante.</p>
        <p>En resumen, son barrios con precios de las viviendas -euros por metro cuadrado- más económicos que en el resto de la ciudad, con la excepción de los más céntricos (distritos de Centro, Chamberí y, en parte, Tetuán).</p>
        <p>De tal modo, parece que los locales buscan zonas en las que la localización sea más barata y, al tiempo, zonas en las que la población residente ofrece un nivel adquisitivo inferior a la media y un estatus social menos privilegiado, si bien por encima de los barrios más vulnerables.</p>
        <p>Hoy por hoy, los locales conforman una dotación con una cobertura territorial limitada. No son negocios de proximidad en sentido estricto. La lógica de implantación no es la de, por así decirlo, una tienda de barrio.</p>
        <p>Así las cosas, hemos de guardarnos de conclusiones precipitadas. El fenómeno de las casas de juego es reciente, probablemente no ha tocado techo. Las pautas de localización ahora conocidas dan pistas sobre el futuro previsible.</p>
        <p>Así, encontramos muchos barrios con un perfil socioeconómico y demográfico parecido al de los barrios con muchos locales que, sin embargo, carecen de ellos o que a lo sumo alojan 1-2.</p>
        <p>La observación de la implantación en otras grandes ciudades españolas confirma la importancia de las ubicaciones centrales vinculadas a zonas comerciales.</p>
        <p>Hay que destacar la localización de un gran número de casas de juego en las proximidades de los institutos públicos: hay 71 IES con uno o más locales en un radio inferior a 500 metros.</p>
        <!-- end intro -->

        <locals-by-distric/>

        <table-streets-by-number/>

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