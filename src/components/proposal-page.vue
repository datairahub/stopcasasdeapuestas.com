<template>
  <div class="page page--proposal">
    <div class="page__wrap">

      <section class="page__section page__section--head">
        <h1 class="page__title">Propuestas</h1>
        <p class="page__subtitle">Madrid, octubre de 2019</p>
      </section>

      <section class="page__section page__section--contents">
        <h4>Índice de contenidos</h4>
        <ul>
          <li><a @click="scrollTo('comunidad')">Para la Comunidad de Madrid</a></li>
          <li><a @click="scrollTo('ayuntamientos')">Para los ayuntamientos</a></li>
        </ul>
      </section>

      <section class="page__section page__section--text">

        <!-- start comunidad -->
        <h3 ref="comunidad">Para la Comunidad de Madrid</h3>
        <ul>
          <li>Impulsar la creación de Zonas de Especial Protección de Población Vulnerable, con el objetivo de reducir al máximo en ellas el número de licencias de locales de apuestas y de juego y alejar el fantasma de la ludopatía de personas con bajo nivel de ingresos y escasos recursos. El modelo puede ser similar al de la implantación de las actuales Zonas de Protección Acústica Especial (ZPAE).</li>
          <li>Aprobar un plan especial de inspección que aumente la periodicidad de las inspecciones públicas con objeto de detectar y sancionar ilegalidades y hacer efectiva la prohibición de acceso a estos establecimientos de menores y personas inscritas en el Registro General de Interdicciones de Acceso al Juego (RGIAJ). Mayor coordinación entre las policías nacional y municipal en estas labores. La operación policial realizada en toda España los días 27 y 28 de septiembre de 2019 ha demostrado numerosos incumplimientos por parte de los establecimientos en esta materia.</li>
          <li>Establecer una distancia mínima entre establecimientos para evitar su actual concentración en determinados barrios y vías públicas.</li>
          <li>Establecer una distancia mínima entre estos negocios y los centros educativos, con el fin de prevenir la adicción en edades tempranas. Hay que marcar el acento en la distancia respecto de los centros públicos y privados en los que se imparten enseñanzas de secundaria. Desde luego, la regla de menos de 100 metros fijada en el RD 42/2019 es manifiestamente reducida.</li>
          <li>Reducir sustancialmente el plazo de adaptación de 10 años previsto en la disposición transitoria sexta del RD 42/2019.</li>
          <li>Aprobar una Ley Integral del Juego de la Comunidad de Madrid que trascienda el actual marco normativo y sirva para actualizarlo en virtud de las nuevas modalidades de juego on line. Para ello, es imprescindible la elaboración de un diagnóstico en el que participen las asociaciones de afectados/as y otras entidades de carácter social.</li>
          <li>Elaborar de manera periódica informes desglosados por tipo de actividad (diferenciando de manera específica los locales de apuestas), municipio/distrito, así como edad y sexo; y realizar o financiar investigaciones sobre prevalencia, factores de riesgo y características de juego patológico en la Comunidad de Madrid (especialmente en población vulnerable) a fin de desarrollar campañas preventivas y planes de intervención más eficaces.</li>
          <li>Excluir a los locales de apuestas de la Ley de Espectáculos Públicos y Actividades Recreativas (LEPAR) y prohibir la simultaneidad de las dobles licencias.</li>
          <li>Dotar al Servicio de Control de Juegos de Azar de un número de efectivos (inspectores, subinspectores y agentes) proporcional a los indicadores de crecimiento de estos locales.</li>
          <li>Crear un Consejo del Juego de la Comunidad de Madrid en el que estén representadas las distintas administraciones públicas, los operadores del juego y las asociaciones de afectados/as.</li>
          <li>Prohibir la publicidad en equipaciones, instalaciones, patrocinios o similares de todo tipo de apuestas deportivas en los equipos de todas las categorías deportivas en la Comunidad de Madrid, siguiendo el ejemplo de la regulación de la publicidad de los productos del tabaco.</li>
          <li>Prohibir la publicidad en los medios e instalaciones de transporte colectivo (autobuses, metro y trenes) de la Comunidad de Madrid.</li>
        </ul>
        <!-- end comunidad -->

        <!-- start ayuntamientos -->
        <h3 ref="comunidad">Para los ayuntamientos</h3>
        <ul>
          <li>Impulsar la creación de Zonas de Especial Protección de Población Vulnerable, con el objetivo de reducir al máximo en ellas el número de licencias de locales de apuestas y de juego y alejar el fantasma de la ludopatía de personas con bajo nivel de ingresos y escasos recursos. El modelo puede ser similar al de la implantación de las actuales Zonas de Protección Acústica Especial (ZPAE). El artículo 35 de la Ley del Suelo de la Comunidad de Madrid establece como una determinación pormenorizada de la ordenación urbanística “el régimen normativo de usos pormenorizados e intervenciones admisibles y prohibidas, así como las condiciones que deben cumplir para ser autorizadas”. A su vez, el artículo 38 de la misma dice que es una determinación pormenorizada «la regulación de las condiciones de admisibilidad de cada uno de los distintos usos pormenorizados en la delimitación de suelo correspondiente».</li>
          <li>Elaboración de planes municipales especiales de regulación de la implantación de los establecimientos. Las zonas mencionadas serían unos de los pilares de dicho plan.</li>
          <li>Aprobación en los municipios que proceda (desde luego, el de Madrid) de una moratoria de la apertura de nuevos locales mientras se aprueba el plan de regulación de usos.</li>
          <li>Aprobar un plan especial de inspección, que aumente la periodicidad de las inspecciones públicas con objeto de detectar y sancionar ilegalidades y hacer efectiva la prohibición de acceso a estos establecimientos de menores y personas inscritas en el Registro General de Interdicciones de Acceso al Juego (RGIAJ). Mayor coordinación entre las policías Nacional y Municipal en estas labores.</li>
          <li>Elaborar de manera periódica informes desglosados por tipo de actividad (diferenciando de manera específica los locales de apuestas) y distrito, así como edad y sexo.</li>
          <li>Creación de nuevos espacios específicos de ocio alternativo para jóvenes y adolescentes.</li>
          <li>Realizar campañas de prevención y sensibilización contra la ludopatía en zonas vulnerables y centros educativos (especialmente en centros de secundaria), con la implicación de las y los profesionales de los Centros de Madrid Salud.</li>
          <li>Incluir en los centros educativos programas de prevención y detección de conductas de riesgo asociadas al juego de azar.</li>
          <li>Prohibir la publicidad en los medios e instalaciones de transporte colectivo de titularidad municipal.</li>
        </ul>
        <!-- end ayuntamientos -->


      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'proposal-page',
}

</script>