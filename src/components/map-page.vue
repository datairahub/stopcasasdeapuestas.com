<template>
  <div>
    <div id="map" ref="map" :style="{'height': height+'px'}"></div>
    <div class="overmap">
      <div class="overmap__wrap" :class="{'overmap__wrap--iframe': $route.name == 'iframe'}">

        <div class="overmap__menu" :class="{active:menuexpanded}">
          <h4>Locales de apuestas</h4>
          <ul>
            <li>
              <input id="locales-depurado" type="checkbox" v-model="localesfravm">
              <label for="locales-depurado">Datos FRAVM</label>
            </li>
            <li>
              <input id="locales-scraping" type="checkbox" v-model="localesdadasign">
              <label for="locales-scraping">Datos scraping</label>
            </li>
          </ul>
          <h4>Centros de enseñanza</h4>
          <ul>
            <li>
              <input id="colegios-ayuntamiento" type="checkbox" v-model="educacioncmadrid">
              <label for="colegios-ayuntamiento">Datos C. Madrid</label>
            </li>
          </ul>
          <h4>Barrios Madrid</h4>
          <ul>
            <li>
              <input id="mad-adm5" type="checkbox" v-model="barriosmadrid">
              <label for="mad-adm5">Barrios de Madrid</label>
            </li>
            <li v-show="barriosmadrid"><label><input type="radio" name="layercolor" v-model="layercolor" value="NUMPOINTS"> Locales</label></li>
            <li v-show="barriosmadrid"><label><input type="radio" name="layercolor" v-model="layercolor" value="RENTA"> Renta</label></li>
            <li v-show="barriosmadrid"><label><input type="radio" name="layercolor" v-model="layercolor" value="PARO"> Paro</label></li>
            <li v-show="barriosmadrid"><label><input type="radio" name="layercolor" v-model="layercolor" value="ESTUDIOS_B"> Estudios bajos</label></li>
            <li v-show="barriosmadrid"><label><input type="radio" name="layercolor" v-model="layercolor" value="POBLACION"> Población</label></li>
            <li v-show="barriosmadrid"><label><input type="radio" name="layercolor" v-model="layercolor" value="DENSIDAD"> Densidad</label></li>
            <li v-show="barriosmadrid"><label><input type="radio" name="layercolor" v-model="layercolor" value="JOVENES"> Jóvenes</label></li>
            <li v-show="barriosmadrid"><label><input type="radio" name="layercolor" v-model="layercolor" value="SENIL"> Mayores</label></li>
            <li v-show="barriosmadrid"><label><input type="radio" name="layercolor" v-model="layercolor" value="EXTRANJERO"> Extranjeros</label></li>
            <li v-show="barriosmadrid"><label><input type="radio" name="layercolor" v-model="layercolor" value="PRECIO"> Precio m<sup>2</sup></label></li>
          </ul>
          <router-link :to="{name:'sources'}">Fuentes y metodología</router-link>
          <div class="legend" v-show="localesfravm||localesdadasign||educacioncmadrid">
            <h4>Leyenda</h4>
            <ul>
              <li class="localesfravm-ayto" v-show="localesfravm"><i></i><span>Censo Ayto. Madrid</span></li>
              <li class="localesfravm-noayto" v-show="localesfravm"><i></i><span>Localizados por FRAVM</span></li>
              <li class="localesdadasign-codere" v-show="localesdadasign"><i></i><span>Locales de Codere</span></li>
              <li class="localesdadasign-sportium" v-show="localesdadasign"><i></i><span>Locales de Sportium</span></li>
              <li class="localesdadasign-luckia" v-show="localesdadasign"><i></i><span>Locales de Luckia</span></li>
              <li class="educacioncmadrid" v-show="educacioncmadrid"><i></i><span>Centros educativos</span></li>
            </ul>
          </div>
        </div>

        <div class="overmap__menu-launcher">
          <img class="hamburguer" src="/static/img/icons/menu.svg" alt="Abrir menu" v-show="!menuexpanded" @click="menuexpanded = true">
          <img class="close" src="/static/img/icons/close.svg" alt="Cerrar menu" v-show="menuexpanded" @click="menuexpanded = false">
        </div>

        <div class="overmap__disclaimer" v-if="showDisclaimer">
          <div class="overmap__disclaimer-wrap">
            <p>Los datos aqui mostrados proceden de diversas <router-link :to="{name:'sources'}">fuentes</router-link> y su posición puede no ser exacta.</p>
            <p style="text-align: right;">
              <button class="cta" @click="showDisclaimer=false">De acuerdo</button>
            </p>
          </div>
        </div>

        <div class="overmap__frame">
          <router-link v-if="$route.name=='map'" :to="{name:'iframe'}">Mapa para iframe</router-link>
          <a v-if="$route.name=='iframe'" href="https://stopcasasdeapuestas.com">stopcasasdeapuestas.com</a>
        </div>

      </div>
    </div>
  </div>
</template>


<script>
import * as d3 from 'd3'
import D3MapPoints from '../assets/js/d3.map.points'

export default {
  name: 'map-page',
  data: function() {
    return {
      points: [],
      lat: 38.09,
      lng: -3.67,
      zoom: 6,
      height: 1200,
      map: {},
      showDisclaimer: true,
      menuexpanded: false,
      localesfravm: false,
      localesdadasign: false,
      educacioncmadrid: false,
      barriosmadrid: false,
      loadedPoints: {
        localesfravm: false,
        localesdadasign: false,
        educacioncmadrid: false,
        barriosmadrid: false,
      },
      points: {
        localesfravm: [],
        localesdadasign: [],
        educacioncmadrid: [],
      },
      layers: {
        barriosmadrid: {},
      },
      layercolor: 'NUMPOINTS',
    }
  },
  mounted: function() {
    window.addEventListener("resize", () => {
      this.getCanvasSize();
    });

    this.map = new D3MapPoints(this.$refs.map, [], {
      lat: this.lat,
      lng: this.lng,
      zoom: this.zoom,
    });

    this.getCanvasSize();
    this.localesfravm = true;
    this.localesdadasign = true;
  },
  methods: {
    getCanvasSize() {
      this.height = window.innerHeight;
    },
    loadPoints(points){
      this.map.loadPoints(points);
    },
    removePoints(points){
      this.map.removePoints(points);
    },
    loadLayers(feature){
      this.map.loadLayers(feature);
    },
    removeLayers(){
      this.map.removeLayers();
    },
    colorLayer(val){
      this.map.colorLayer(val);
    }
  },
  watch: {
    localesfravm(val){
      if(val){
        if(!this.loadedPoints.localesfravm){
          d3.csv("static/data/locales-fravm.csv").then(data=>{
            this.loadedPoints.localesfravm = true;
            this.points.localesfravm = data;
            this.loadPoints(this.points.localesfravm)
          });
        }else{
          this.loadPoints(this.points.localesfravm)
        }
      }else{
        this.removePoints(this.points.localesfravm)
      }
    },
    localesdadasign(val){
      if(val){
        if(!this.loadedPoints.localesdadasign){
          d3.csv("static/data/locales-dadasign.csv").then(data=>{
            this.loadedPoints.localesdadasign = true;
            this.points.localesdadasign = data;
            this.loadPoints(this.points.localesdadasign)
          });
        }else{
          this.loadPoints(this.points.localesdadasign)
        }
      }else{
        this.removePoints(this.points.localesdadasign)
      }
    },
    educacioncmadrid(val){
      if(val){
        if(!this.loadedPoints.educacioncmadrid){
          d3.csv("static/data/educacion-cmadrid.csv").then(data=>{
            this.loadedPoints.educacioncmadrid = true;
            this.points.educacioncmadrid = data;
            this.loadPoints(this.points.educacioncmadrid)
          });
        }else{
          this.loadPoints(this.points.educacioncmadrid)
        }
      }else{
        this.removePoints(this.points.educacioncmadrid)
      }
    },
    barriosmadrid(val){
      if(val){
        if(val && !this.loadedPoints.barriosmadrid){
          d3.json("static/data/MAD_adm6.json").then(data=>{
            this.loadedPoints.barriosmadrid = true;
            this.layers.barriosmadrid = data;
            this.loadLayers(this.layers.barriosmadrid)
            this.layercolor = 'NUMPOINTS'
          });
        }else{
          this.loadLayers(this.layers.barriosmadrid)
          this.layercolor = 'NUMPOINTS'
        }
      }else{
        this.removeLayers()
      }
    },
    layercolor(val){
      this.colorLayer(val);
    },
  }
}

</script>


<style lang="scss">
.overmap {
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;

  &__wrap {
    padding: 60px 20px 20px;
    position: relative;
    height: 100%;
    box-sizing: border-box;
    &--iframe {
      padding-top: 20px;
    }
  }

  &__frame {
    position: absolute;
    bottom: 0;
    left: 3px;
    pointer-events: all;
    font-size: smaller;
  }

  &__menu-launcher {
    display: inline-block;
    background: white;
    pointer-events: all;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    line-height: 0;
    vertical-align: top;
    img {
      padding: 10px;
      width: 16px;
      margin: 0;
    }
  }

  &__menu {
    padding: 10px 16px 10px 10px;
    display: none;
    background: white;
    pointer-events: all;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    &.active {
      display: inline-block;
    }
    h2 {
      font-size: 16px;
      margin-top: 0;
      margin-bottom: 4px;
    }
    h4 {
      font-size: 16px;
      margin-top: 0;
      margin-bottom: 0;
    }
    ul + h4 {
      margin-top: 12px;
    }
    a {
      margin-top: 12px;
      display: inline-block;
    }

    .legend {
      margin-top: 12px;
      li {
        line-height: 0;
        margin: 10px 0;
      }
      i {
        display: inline-block;
        vertical-align: top;
        width: 12px;
        height: 12px;
        background: grey;
        border-radius: 100%;
        margin-right: 2px;
      }
      span {
        display: inline-block;
        vertical-align: top;
        line-height: 12px;
      }
      .localesfravm-ayto i {background: #4b4c7a; }
      .localesfravm-noayto i {background: #c855bc; }
      .localesdadasign-codere i {background: #58dada; }
      .localesdadasign-sportium i {background: #7984ee; }
      .localesdadasign-luckia i {background: #a9d2ff; }
      .educacioncmadrid i {background: #ffa258; }
    }
  }

  &__disclaimer {
    margin: 20px;
    position: absolute;
    bottom: 0;
    right: 0;
    &-wrap {
      padding: 10px;
      display: inline-block;
      background: white;
      pointer-events: all;
      border-radius: 4px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.2);
      max-width: 360px;
    }
    p {
      margin-bottom: 0;
    }
  }

}

@media screen and (min-width: 740px) {
  .overmap {
    &__menu-launcher {
      display: none;
    }

    &__menu {
      display: inline-block !important;
    }
  }
}

</style>
