<template>
  <div class="page page--report">
    <div class="page__wrap">

      <section class="page__section page__section--head">
        <h1 class="page__title">Metodologías empleadas en el informe y la extracción de datos</h1>
      </section>

      <section class="page__section page__section--contents">
        <h4>Índice de contenidos</h4>
        <ul>
          <li><a @click="scrollTo('locales')">Datos de locales de apuestas</a></li>
          <li><a @click="scrollTo('educacion')">Datos de centros educativos de la C. Madrid</a></li>
          <li><a @click="scrollTo('barrios')">Datos demográficos de Madrid</a></li>
        </ul>
      </section>

      <section class="page__section page__section--text">
        
        <h3 ref="locales">Datos de locales de apuestas</h3>
        <h5>Datos aportados por la FRAVM</h5>
        <p>Se ha partido del listado de establecimientos con el epígrafe 920002 en el Censo de Locales del Ayuntamiento de Madrid, que comprende los juegos de azar y apuestas de gestión privada, y se ha realizado un trabajo de campo visitando todas las direcciones a fin de verificar la actividad.</p>
        <p>A continuación se ha depurado el listado eliminando los locales en los que la actividad no se corresponde con el epígrafe o en los que no hay actividad alguna e incluyendo establecimientos en los que se practican juegos de azar y/o apuestas pero que figuran con otro epígrafe en el Censo o incluso que no están (o no ha sido posible hallarlos) en él. Estas incorporaciones han sido fotografiadas y rastreadas en el Censo a fin de acotar la actividad dada de alta. En muchos casos se corresponden con los epígrafes 920001 (juegos de azar y apuestas de gestión pública) o 932007 (salones de recreo, diversión y otras actividades recreativas).</p>
        <p>Se definido como local de juego y apuestas los negocios que entran en la acepción que recoge la <a href="http://www.madrid.org/wleg_pub/secure/normativas/contenidoNormativa.jsf?opcion=VerHtml&nmnorma=349&cdestado=P#no-back-button" target="_blank">Ley 6/2001, del juego en la Comunidad de Madrid</a>: casinos, bingos, locales de juegos, salones de apuestas, establecimientos de juegos colectivos de dinero y azar, etc. Se excluyen las administraciones de lotería, estancos, ONCE y, en general, los espacios de juegos de gestión pública o sometidos a autorización especial. También quedan fuera los bares, restaurantes y lugares con algunas máquinas tragaperras y similares. Solo se han considerado los negocios estables, no se contabilizan las instalaciones temporales o efímeras.</p>
        <p>El trabajo de campo se ha realizado entre el 14 y el 25 de octubre de 2019 con voluntarios bajo la supervisión de la FRAVM.</p>
        
        <h5>Datos aportados por Dadasign</h5>
        <p>Se han extraído datos de las tres principales empresas con locales de apuestas <strong>para toda España</strong>, utilizando los propios datos que estas aportan en sus páginas web, con apoyo de la herramienta de geolocalización de Google. En total se han encontrado 4227 locales para las empresas Codere, Sportium y Luckia.</p>
        <p><strong>Codere</strong>: posee un <a href="https://m.apuestas.codere.es/deportes/index.htm#/NearestLocalPage">mapa web</a> en su página, desarrollado sobre en Google Maps, el cual dificulta obtener su geoposición directamente por limitaciones de Google, por lo que primero se han obtenido las direcciones de cada local y luego se ha consultado la geoposicón de estas mismas direcciones con la API de Google Maps, obteniendo latitud y longitud. Se han obtenido 2965 registros totales para esta empresa, de los cuales algunos (pocos) han sido ubicados erróneamente debido al flujo de geolocalización arriba descrito, y han sido descartados del dataset. El scraper fue ejecutado por última vez el 23 de febrero de 2019.</p>
        <p><strong>Sportium</strong>: cuenta con un <a href="http://www.sportiumnews.com/encuentra-tu-sportium/​">buscador</a> en su propia página (cambiado a <a href="http://scores.sportium.es/#/search">este</a>), que aunque utilizaba Google Maps como proveedor de tiles (imágenes del mapa), procesa los datos en la misma página web, por lo que se han podido extraer los datos tal cual esta empresa los tiene registrados en su página haciendo consultas provincia a provincia. Se han obtenido 1063 registros para esta empresa. Algunos de estos locales (pocos) están situados sobre el mar, y han sido eliminados del dataset. El scraper fue ejecutado por última vez el 28 de febrero de 2019.</p>
        <p><strong>Luckia</strong>: contaba con un <a href="https://www.luckia.es/presencial/​">mapa</a> (cambiado a <a href="https://www.luckia.es/web/locales">este</a>) en su página, el cual aunque decía tener 2400 puntos, solo ofrecía 200. Dentro del código utilizado para renderizar el mapa se encuentran los datos necesarios para la geolocalización de cada local (latitud y longitud), los cuales en 12 registros estaban mal incluidos en la propia base de datos de la empresa (cambiando por ejemplo el punto númerico «.» por una coma «,»). Estos errores se han corregido a mano y se ha procedido a su geolocalización inversa para determinar las regiones administrativas a las que pertenece cada local. Se han encontrado 199 elementos. El scraper fue ejecutado por última vez el 19 de marzo de 2019.</p>
        <p>Última actualización de los datos: 23 de febrero - 19 de marzo de 2019</p>

        <h3 ref="educacion">Datos de centros educativos de la Comunidad de Madrid</h3>
        <p>Datos de centros educativos públicos no universitarios de la Comunidad de Madrid, obtenidos del <a href="http://www.madrid.org/wpad_pub/run/j/MostrarConsultaGeneral.icm">Portal Escolar de la Comunidad de Madrid</a>, a cargo de la Subdirección General de Régimen Jurídico de la Consejería de Educación, Juventud y Deporte, Consejería de Educación, Juventud y Deporte, Comunidad de Madrid.</p>
        <p>Debido al erróneo geoposicionamiento de los datos suministrados, la geolocalización se ha obtenido mediante consulta a la API de Google Maps a partir de la dirección suministrada. En caso de no ser ubicados, se ha procedido a la transformación de los datos UTM en WGS84. El proceso se ha realizado con este <a href="https://gist.github.com/Saigesp/1c2f90a47dca6d9f3308c91c0f8fcf51">script</a>.</p>
        <p>Última actualización de los datos: abril de 2019</p>

        <h3 ref="barrios">Datos demográficos de Madrid</h3>
        <p>La información está tomada del <a href="https://datos.madrid.es/portal/site/egob/.">portal de datos abiertos del Ayuntamiento de Madrid</a></p>
        
        <br><br><br>

      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'report-page',
  created: function(){
    window.scrollTo(0,0);
  },
  methods: {
    scrollTo(refName) {
      let element = this.$refs[refName];
      window.scrollTo(0, element.offsetTop - 60);
    }
  }
}

</script>