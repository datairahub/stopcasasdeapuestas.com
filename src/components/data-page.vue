<template>
  <div class="page page--report">
    <div class="page__wrap">

      <section class="page__section page__section--head">
        <h1 class="page__title">Descarga de datos</h1>
      </section>

      <section class="page__section page__section--text">
        <p>Informe sobre locales de juego y apuestas del municipio de Madrid.<br><a class="button cta" href="/static/docs/informe-locales-apuestas-fravm.pdf">Descargar</a></p>
        <p>Censo de locales de apuestas proporcionado por el Ayto. de Madrid y completado con locales obtenidos por la FRAVM.<br><a class="button cta" href="/static/data/locales-fravm.csv">Descargar (geoposiciones)</a> <a class="button cta" href="/static/data/locales-fravm-completo.csv">Descargar (archivo completo)</a></p>
        <p>Censo de locales de apuestas a nivel estatal obtenido por Dadasign mediante técnicas de scraping.<br><a class="button cta" href="/static/data/locales-dadasign.csv">Descargar (geoposiciones)</a> <a class="button cta" href="/static/data/locales-dadasign-completo.csv">Descargar (archivo completo)</a></p>
        <p>Censo de centros educativos públicos no universitarios de la Comunidad de Madrid.<br><a class="button cta" href="/static/data/educacion-cmadrid.csv">Descargar</a></p>
        <p>Datos demográficos de los barrios del municipio de Madrid.<br><a class="button cta" href="/static/data/MAD_adm6.json">Descargar</a></p>
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