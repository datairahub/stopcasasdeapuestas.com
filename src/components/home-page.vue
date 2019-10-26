<template>
  <div class="page page--home" ref="page" :class="{'page--wide': width>=minWidthWide}">

    <div class="page__wrap">
      
      <section class="page__section page__section--head">
        <img class="page__logo" src="/static/logo.svg" alt="Stop Casas de Apuestas Logo">
        <h1 class="page__title" style="display: none;">Stop Casas de Apuestas</h1>
      </section>

      <section class="page__section page__section--text">
        <p>Los locales de juego y los salones de apuestas constituyen un problema social importante, siendo la ludopatía es una patología social que no cesa de crecer y enraizar en las grandes ciudades, mientras los poderes públicos apenas le prestan importancia.</p>
        <p>En este proyecto, realizado por la FRAVM con la colaboración de Dadasign, hemos realizado una extracción y análisis de datos, acompañado de un <router-link :to="{name:'report'}">informe</router-link> y un <router-link :to="{name:'map'}">mapa interactivo</router-link>, donde nos detenemos a examinar el número y las correlaciones de la ubicación de los locales con otras variables socioeconómicas. Las notas que merece la pena subrayar son:</p>
        <ul>
          <li>La localización de las casas de apuestas se organiza sobre patrones bien identificables.</li>
          <li>Predominan los barrios con una renta media de los hogares por debajo de la media.</li>
          <li>Hay pocos locales en los barrios de alto nivel de estudios, y muchos en los barrios con un nivel de estudios bajo.</li>
          <li>Los mismo ocurre con la tasa de desempleo.</li>
          <li>Los establecimientos se dan más en barrios con mucha población y altas densidades.</li>
          <li>Hay una correlación notable con la presencia en barrios con alta población extranjera.</li>
        </ul>
        <p>Así las cosas, hemos de guardarnos de conclusiones precipitadas. El fenómeno de las casas de juego es reciente, probablemente no ha tocado techo. Las pautas de localización ahora conocidas dan pistas sobre el futuro previsible.</p>
      </section>

    </div>

    <div class="page__map" v-show="width>=minWidthWide">
      <div id="map" ref="map" :style="{height: height+'px'}"></div>
    </div>

  </div>
</template>

<script>
import {csv} from 'd3-fetch';
const d3 = {csv}
import D3MapPoints from '../assets/js/d3.map.points'

export default {
  name: 'home-page',
  data() {
    return {
      width: 700,
      height: 1200,
      minWidthWide: 760,
      points: [],
      lat: 40.42,
      lng: -3.69,
      zoom: 12,
      map: false,
    }
  },
  created: function() {},
  mounted: function() {
    window.addEventListener("resize", () => {
      this.getCanvasSize();
    });
    this.getCanvasSize();
  },
  methods: {
    getCanvasSize(){
      this.width = this.$refs.page ? parseInt(this.$refs.page.offsetWidth) : 700;
      this.height = window.innerHeight;
    }
  },
  watch: {
    width(val){
      if(val>=this.minWidthWide && this.$refs.map && !this.map){
        d3.csv("static/data/locales-fravm.csv").then(data=>{
          this.map = new D3MapPoints(this.$refs.map, [], {
            lat: this.lat,
            lng: this.lng,
            zoom: this.zoom,
          });
          this.map.loadPoints(data);
        });
        window.dispatchEvent(new Event('resize'));
      }
    }
  }
}

</script>