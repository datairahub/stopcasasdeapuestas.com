<template>
  <div class="page page--report">
    <div class="page__wrap">

      <section class="page__section page__section--head">
        <h1 class="page__title">Descarga de datos</h1>
      </section>

      <section class="page__section page__section--text">
        <p>Censo de locales de apuestas proporcionado por el Ayto. de Madrid y completado con locales obtenidos por la FRAVM. <a href="/static/data/locales-fravm.csv">Descargar CSV</a>.</p>
        <p>Censo de locales de apuestas a nivel estatal obtenido por Dadasign mediante técnicas de scraping. <a href="/static/data/locales-dataira.csv">Descargar CSV</a>.</p>
        <p>Censo de centros educativos públicos no universitarios de la Comunidad de Madrid. <a href="/static/data/educacion-cmadrid.csv">Descargar CSV</a>.</p>
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
}

</script>