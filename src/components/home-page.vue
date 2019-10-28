<template>
  <div class="page page--home" ref="page" :class="{'page--wide': width>=minWidthWide}">

    <div class="page__wrap">
      
      <section class="page__section page__section--head">
        <img class="page__logo" src="/static/logo.svg" alt="Stop Casas de Apuestas Logo">
        <h1 class="page__title" style="display: none;">Stop Casas de Apuestas</h1>
      </section>

      <section class="page__section page__section--text">
        <p>Los locales de juego y los salones de apuestas constituyen un problema social importante, siendo la ludopatía es una patología social que no cesa de crecer y enraizar en las grandes ciudades, mientras los poderes públicos apenas le prestan atención.</p>
        <p>En este proyecto hemos realizado una extracción y análisis de datos, acompañado de un <router-link :to="{name:'report'}">informe</router-link> y un <router-link :to="{name:'map'}">mapa interactivo</router-link>, donde nos detenemos a examinar el número y las correlaciones de la ubicación de los locales con otras variables socioeconómicas.</p>
      </section>

      <section class="page__section page__section--logos">
        <div class="page__wrap">
          Elaborado por
          <a href="https://aavvmadrid.org/">
            <img src="/static/img/logos/FRAVM.jpg" alt="FRAVM">
          </a>
        </div>
        <div class="page__wrap">
          Con la colaboración de
          <a href="https://www.dadasign.xyz/">
            <img src="/static/img/logos/dadasign.png" alt="Dadasign" style="margin-top:5%">
          </a>
        </div>
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