<template>
  <div class="page page--proposal">
    <div class="page__wrap">

      <section class="page__section page__section--head">
        <h1 class="page__title">Propuestas en materia de locales de juego y apuestas</h1>
        <p class="page__subtitle">Propuestas para la regulación de las casas de apuestas en la Comunidad de Madrid.</p>
      </section>

      <section class="page__section page__section--contents">
        <h4>Índice de contenidos</h4>
        <ul>
          <li><a @click="scrollTo('comunidad')">Para la Comunidad de Madrid</a></li>
          <li><a @click="scrollTo('ayuntamientos')">Para los ayuntamientos</a></li>
        </ul>
      </section>

      <section class="page__section page__section--text">

        <!-- start introduccion -->
        <h3 ref="introduccion">Introducción</h3>
        <p>Antes de la aprobación del <a href="http://www.bocm.es/boletin/CM_Orden_BOCM/2019/05/17/BOCM-20190517-2.PDF">Decreto 42/2019</a>, la FRAVM y otras organizaciones<sup>1</sup> suscribieron un <a href="https://aavvmadrid.org/noticias/propuestas-urgentes-en-materia-de-locales-de-juego-y-apuestas/">documento de propuestas</a>. Aquí nos hacemos eco de ellas, introduciendo algunas novedades determinadas por la aparición de nuevas circunstancias, entre ellas el propio Decreto.</p>

        <div class="legend">
          <div class="legend__wrap">
            <sup>1</sup> Los firmantes fueron: FRAVM (Federación Regional de Asociaciones Vecinales de Madrid), APAL (Asociación para la Prevención y Ayuda al Ludopata), ActívaT Red de Abogados, FERMAD (Plataforma Madrileña de Entidades para la Asistencia a la Persona Adicta y su Familia), Federación Injucam para la Promoción de la Infancia y la Juventud, ALEJER (Asociación Leganense de Jugadores en Rehabilitación), AFUJER (Asociación Fuenlabreña Jugadores en Rehabilitación), Vida sin juego, ALYA (Asociación para el Tratamiento de la Ludopatía y las Nuevas Adicciones), APEAP (Asociación Psicoterapeutas para el Estudio de las Adicciones Psicológicas), ATEJ (Asociación Terapéutica del Juego), Red de ONGD de Madrid y Colegio Oficial de Psicólogos de Madrid.
          </div>
        </div>
        <!-- end introduccion -->

        <!-- start comunidad -->
        <h3 ref="comunidad">Para la Comunidad de Madrid</h3>
        <ul>
          <li>1. <strong>Impulsar la creación de Zonas de Especial Protección de Población Vulnerable</strong>, con el objetivo de reducir al máximo en ellas el número de licencias de locales de apuestas y de juego y alejar el fantasma de la ludopatía de personas con bajo nivel de ingresos y escasos recursos. El modelo puede ser similar al de la implantación de las actuales Zonas de Protección Acústica Especial (ZPAE).</li>
          <li>2. <strong>Aprobar un plan especial de inspección</strong> que aumente la periodicidad de las inspecciones públicas con objeto de detectar y sancionar ilegalidades y hacer efectiva la prohibición de acceso a estos establecimientos de menores y personas inscritas en el Registro General de Interdicciones de Acceso al Juego (RGIAJ). Mayor coordinación entre las policías nacional y municipal en estas labores. La operación policial realizada en toda España los días 27 y 28 de septiembre de 2019 ha demostrado numerosos incumplimientos por parte de los establecimientos en esta materia.</li>
          <li>3. <strong>Establecer una distancia mínima entre establecimientos</strong> para evitar su actual concentración en determinados barrios y vías públicas.</li>
          <li>4. <strong>Establecer una distancia mínima entre estos negocios y los centros educativos</strong>, con el fin de prevenir la adicción en edades tempranas. Hay que marcar el acento en la distancia respecto de los centros públicos y privados en los que se imparten enseñanzas de secundaria. Desde luego, la regla de menos de 100 metros fijada en el Decreto 42/2019 es manifiestamente reducida.</li>
          <li>5. <strong>Reducir sustancialmente el plazo de adaptación</strong> de 10 años previsto en la disposición transitoria sexta del Decreto 42/2019.</li>
          <li>6. <strong>Aprobar una Ley Integral del Juego de la Comunidad de Madrid</strong> que trascienda el actual marco normativo y sirva para actualizarlo en virtud de las nuevas modalidades de juego on line. Para ello, es imprescindible la elaboración de un diagnóstico en el que participen las asociaciones de afectados/as y otras entidades de carácter social.</li>
          <li>7. Elaborar de manera periódica <strong>informes desglosados por tipo de actividad</strong> (diferenciando de manera específica los locales de apuestas), municipio/distrito, así como edad y sexo; y realizar o financiar investigaciones sobre prevalencia, factores de riesgo y características de juego patológico en la Comunidad de Madrid (especialmente en población vulnerable) a fin de desarrollar campañas preventivas y planes de intervención más eficaces.</li>
          <li>8. <strong>Excluir a los locales de apuestas de la Ley de Espectáculos Públicos y Actividades Recreativas</strong> (LEPAR) y prohibir la simultaneidad de las dobles licencias.</li>
          <li>9. <strong>Dotar al Servicio de Control de Juegos de Azar de un número de efectivos</strong> (inspectores, subinspectores y agentes) proporcional a los indicadores de crecimiento de estos locales.</li>
          <li>10. <strong>Crear un Consejo del Juego de la Comunidad de Madrid</strong> en el que estén representadas las distintas administraciones públicas, los operadores del juego y las asociaciones de afectados/as.</li>
          <li>11. <strong>Prohibir la publicidad en equipaciones, instalaciones, patrocinios o similares</strong> de todo tipo de apuestas deportivas en los equipos de todas las categorías deportivas en la Comunidad de Madrid, siguiendo el ejemplo de la regulación de la publicidad de los productos del tabaco.</li>
          <li>12. <strong>Prohibir la publicidad en los medios e instalaciones de transporte colectivo</strong> (autobuses, metro y trenes) de la Comunidad de Madrid.</li>
        </ul>
        <!-- end comunidad -->

        <!-- start ayuntamientos -->
        <h3 ref="comunidad">Para los ayuntamientos</h3>
        <ul>
          <li>1. <strong>Impulsar la creación de Zonas de Especial Protección de Población Vulnerable</strong>, con el objetivo de reducir al máximo en ellas el número de licencias de locales de apuestas y de juego y alejar el fantasma de la ludopatía de personas con bajo nivel de ingresos y escasos recursos. El modelo puede ser similar al de la implantación de las actuales Zonas de Protección Acústica Especial (ZPAE). El artículo 35 de la Ley del Suelo de la Comunidad de Madrid establece como una determinación pormenorizada de la ordenación urbanística “el régimen normativo de usos pormenorizados e intervenciones admisibles y prohibidas, así como las condiciones que deben cumplir para ser autorizadas”. A su vez, el artículo 38 de la misma dice que es una determinación pormenorizada «la regulación de las condiciones de admisibilidad de cada uno de los distintos usos pormenorizados en la delimitación de suelo correspondiente».</li>
          <li>2. <strong>Elaboración de planes municipales especiales de regulación</strong> de la implantación de los establecimientos. Las zonas mencionadas serían unos de los pilares de dicho plan.</li>
          <li>3. Aprobación en los municipios que proceda (desde luego, el de Madrid) de una <strong>moratoria de la apertura de nuevos locales</strong> mientras se aprueba el plan de regulación de usos.</li>
          <li>4. Aprobar un <strong>plan especial de inspección</strong>, que aumente la periodicidad de las inspecciones públicas con objeto de detectar y sancionar ilegalidades y hacer efectiva la prohibición de acceso a estos establecimientos de menores y personas inscritas en el Registro General de Interdicciones de Acceso al Juego (RGIAJ). Mayor coordinación entre las policías Nacional y Municipal en estas labores.</li>
          <li>5. Elaborar de manera periódica <strong>informes desglosados por tipo de actividad</strong> (diferenciando de manera específica los locales de apuestas) y distrito, así como edad y sexo.</li>
          <li>6. Creación de <strong>nuevos espacios específicos de ocio alternativo</strong> para jóvenes y adolescentes.</li>
          <li>7. Realizar <strong>campañas de prevención y sensibilización contra la ludopatía</strong> en zonas vulnerables y centros educativos (especialmente en centros de secundaria), con la implicación de las y los profesionales de los Centros de Madrid Salud.</li>
          <li>8. Incluir en los centros educativos <strong>programas de prevención y detección de conductas de riesgo</strong> asociadas al juego de azar.</li>
          <li>9. <strong>Prohibir la publicidad en los medios e instalaciones de transporte colectivo</strong> de titularidad municipal.</li>
        </ul>
        <!-- end ayuntamientos -->

        <br><br><br>


      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'proposal-page',
  created: function(){
    window.scrollTo(0,0);
  },
}

</script>