<template>
  <div>
    <div id="map" ref="map" :style="{'height': height+'px'}"></div>
    <div class="overmap">
      <div class="overmap__wrap">

        <div class="overmap__menu">
          <h4>Locales de apuestas</h4>
          <ul>
            <li>
              <input id="locales-depurado" type="checkbox" v-model="localesfravm">
              <label for="locales-depurado">Datos FRAVM</label>
            </li>
            <li>
              <input id="locales-scraping" type="checkbox" v-model="localesdataira">
              <label for="locales-scraping">Datos Dataira</label>
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
              <input id="barrios-madrid" type="checkbox" v-model="barriosmadrid">
              <label for="barrios-madrid">Datos C. Madrid</label>
            </li>
          </ul>
          <router-link :to="{name:'sources'}">Fuentes y metodología</router-link>
          <div class="legend" v-show="localesfravm||localesdataira||educacioncmadrid||barriosmadrid">
            <h4>Leyenda</h4>
            <ul>
              <li class="localesfravm-ayto" v-show="localesfravm"><i></i><span>Censo Ayto. Madrid</span></li>
              <li class="localesfravm-noayto" v-show="localesfravm"><i></i><span>Localizados por FRAVM</span></li>
              <li class="localesdataira-codere" v-show="localesdataira"><i></i><span>Locales de Codere</span></li>
              <li class="localesdataira-sportium" v-show="localesdataira"><i></i><span>Locales de Sportium</span></li>
              <li class="localesdataira-luckia" v-show="localesdataira"><i></i><span>Locales de Luckia</span></li>
              <li class="educacioncmadrid" v-show="educacioncmadrid"><i></i><span>Centros educativos</span></li>
            </ul>
          </div>
        </div>

        <div class="overmap__disclaimer" v-if="showDisclaimer">
          <div class="overmap__disclaimer-wrap">
            <p>Los datos aqui mostrados proceden de diversas <router-link :to="{name:'sources'}">fuentes</router-link> y su posición puede no ser exacta.</p>
            <p style="text-align: right;">
              <button class="cta" @click="showDisclaimer=false">De acuerdo</button>
            </p>
          </div>
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
      lat: 40.39,
      lng: -3.67,
      zoom: 12,
      height: 1200,
      map: {},
      showDisclaimer: true,
      localesfravm: false,
      localesdataira: false,
      educacioncmadrid: false,
      barriosmadrid: false,
      loadedPoints: {
        localesfravm: false,
        localesdataira: false,
        educacioncmadrid: false,
        barriosmadrid: false,
      },
      points: {
        localesfravm: [],
        localesdataira: [],
        educacioncmadrid: [],
        barriosmadrid: [],
      }
    }
  },
  mounted: function() {
    window.addEventListener("resize", () => {
      this.getCanvasSize();
    });

    this.map = new D3MapPoints(d3.select(this.$refs.map), [], {
      lat: this.lat,
      lng: this.lng,
      zoom: this.zoom,
      height: this.height, //d3.select(this.$refs.map).attr('height'),
    });

    this.map.onpoint('click', data=>{
        //EventBus.$emit('point_click', data);
        console.log('click', data);
    })

    this.getCanvasSize();
    this.localesfravm = true;
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
    }
  },
  watch: {
    localesfravm(val){
      if(val && !this.loadedPoints.localesfravm){
        d3.csv("static/data/locales-fravm.csv").then(data=>{
          this.loadedPoints.localesfravm = true;
          this.points.localesfravm = data;
          this.loadPoints(this.points.localesfravm)
        });
      }else{
        this.loadedPoints.localesfravm = false;
        this.removePoints(this.points.localesfravm)
      }
    },
    localesdataira(val){
      if(val && !this.loadedPoints.localesdataira){
        d3.csv("static/data/locales-dataira.csv").then(data=>{
          this.loadedPoints.localesdataira = true;
          this.points.localesdataira = data;
          this.loadPoints(this.points.localesdataira)
        });
      }else{
        this.loadedPoints.localesdataira = false;
        this.removePoints(this.points.localesdataira)
      }
    },
    educacioncmadrid(val){
      if(val && !this.loadedPoints.educacioncmadrid){
        d3.csv("static/data/educacion-cmadrid.csv").then(data=>{
          this.loadedPoints.educacioncmadrid = true;
          this.points.educacioncmadrid = data;
          this.loadPoints(this.points.educacioncmadrid)
        });
      }else{
        this.loadedPoints.educacioncmadrid = false;
        this.removePoints(this.points.educacioncmadrid)
      }
    }
  }
}

</script>


<style lang="scss">
#map {
  z-index: 9;
}

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
  }

  &__menu {
    padding: 10px 16px 10px 10px;
    display: inline-block;
    background: white;
    pointer-events: all;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
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
      .localesdataira-codere i {background: #58dada; }
      .localesdataira-sportium i {background: #7984ee; }
      .localesdataira-luckia i {background: #a9d2ff; }
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


/* popup */
.leaflet-popup-content-wrapper {
  border-radius: 5px !important;
}

/* required styles */
.leaflet-pane,
.leaflet-tile,
.leaflet-marker-icon,
.leaflet-marker-shadow,
.leaflet-tile-container,
.leaflet-pane>svg,
.leaflet-pane>canvas,
.leaflet-zoom-box,
.leaflet-image-layer,
.leaflet-layer {
  position: absolute;
  left: 0;
  top: 0;
}

.leaflet-container {
  overflow: hidden;
}

.leaflet-tile,
.leaflet-marker-icon,
.leaflet-marker-shadow {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  -webkit-user-drag: none;
}

/* Prevents IE11 from highlighting tiles in blue */
.leaflet-tile::selection {
  background: transparent;
}

/* Safari renders non-retina tile on retina better with this, but Chrome is worse */
.leaflet-safari .leaflet-tile {
  image-rendering: -webkit-optimize-contrast;
}

/* hack that prevents hw layers "stretching" when loading new tiles */
.leaflet-safari .leaflet-tile-container {
  width: 1600px;
  height: 1600px;
  -webkit-transform-origin: 0 0;
}

.leaflet-marker-icon,
.leaflet-marker-shadow {
  display: block;
}

/* .leaflet-container svg: reset svg max-width decleration shipped in Joomla! (joomla.org) 3.x */
/* .leaflet-container img: map is broken in FF if you have max-width: 100% on tiles */
.leaflet-container .leaflet-overlay-pane svg,
.leaflet-container .leaflet-marker-pane img,
.leaflet-container .leaflet-shadow-pane img,
.leaflet-container .leaflet-tile-pane img,
.leaflet-container img.leaflet-image-layer,
.leaflet-container .leaflet-tile {
  max-width: none !important;
  max-height: none !important;
}

.leaflet-container.leaflet-touch-zoom {
  -ms-touch-action: pan-x pan-y;
  touch-action: pan-x pan-y;
}

.leaflet-container.leaflet-touch-drag {
  -ms-touch-action: pinch-zoom;
  /* Fallback for FF which doesn't support pinch-zoom */
  touch-action: none;
  touch-action: pinch-zoom;
}

.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom {
  -ms-touch-action: none;
  touch-action: none;
}

.leaflet-container {
  -webkit-tap-highlight-color: transparent;
}

.leaflet-container a {
  -webkit-tap-highlight-color: rgba(51, 181, 229, 0.4);
}

.leaflet-tile {
  filter: inherit;
  visibility: hidden;
}

.leaflet-tile-loaded {
  visibility: inherit;
}

.leaflet-zoom-box {
  width: 0;
  height: 0;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  z-index: 800;
}

/* workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=888319 */
.leaflet-overlay-pane svg {
  -moz-user-select: none;
}

.leaflet-pane {
  z-index: 400;
}

.leaflet-tile-pane {
  z-index: 200;
}

.leaflet-overlay-pane {
  z-index: 400;
}

.leaflet-shadow-pane {
  z-index: 500;
}

.leaflet-marker-pane {
  z-index: 600;
}

.leaflet-tooltip-pane {
  z-index: 650;
}

.leaflet-popup-pane {
  z-index: 700;
}

.leaflet-map-pane canvas {
  z-index: 100;
}

.leaflet-map-pane svg {
  z-index: 200;
}

.leaflet-vml-shape {
  width: 1px;
  height: 1px;
}

.lvml {
  behavior: url(#default#VML);
  display: inline-block;
  position: absolute;
}

/* control positioning */
.leaflet-control {
  position: relative;
  z-index: 800;
  pointer-events: visiblePainted;
  /* IE 9-10 doesn't have auto */
  pointer-events: auto;
}

.leaflet-top,
.leaflet-bottom {
  position: absolute;
  z-index: 1000;
  pointer-events: none;
}

.leaflet-top {
  top: 0;
}

.leaflet-right {
  right: 0;
}

.leaflet-bottom {
  bottom: 0;
}

.leaflet-left {
  left: 0;
}

.leaflet-control {
  float: left;
  clear: both;
}

.leaflet-right .leaflet-control {
  float: right;
}

.leaflet-top .leaflet-control {
  margin-top: 10px;
}

.leaflet-bottom .leaflet-control {
  margin-bottom: 10px;
}

.leaflet-left .leaflet-control {
  margin-left: 10px;
}

.leaflet-right .leaflet-control {
  margin-right: 10px;
}

/* zoom and fade animations */
.leaflet-fade-anim .leaflet-tile {
  will-change: opacity;
}

.leaflet-fade-anim .leaflet-popup {
  opacity: 0;
  -webkit-transition: opacity 0.2s linear;
  -moz-transition: opacity 0.2s linear;
  transition: opacity 0.2s linear;
}

.leaflet-fade-anim .leaflet-map-pane .leaflet-popup {
  opacity: 1;
}

.leaflet-zoom-animated {
  -webkit-transform-origin: 0 0;
  -ms-transform-origin: 0 0;
  transform-origin: 0 0;
}

.leaflet-zoom-anim .leaflet-zoom-animated {
  will-change: transform;
}

.leaflet-zoom-anim .leaflet-zoom-animated {
  -webkit-transition: -webkit-transform 0.25s cubic-bezier(0, 0, 0.25, 1);
  -moz-transition: -moz-transform 0.25s cubic-bezier(0, 0, 0.25, 1);
  transition: transform 0.25s cubic-bezier(0, 0, 0.25, 1);
}

.leaflet-zoom-anim .leaflet-tile,
.leaflet-pan-anim .leaflet-tile {
  -webkit-transition: none;
  -moz-transition: none;
  transition: none;
}

.leaflet-zoom-anim .leaflet-zoom-hide {
  visibility: hidden;
}

/* cursors */
.leaflet-interactive {
  cursor: pointer;
}

.leaflet-grab {
  cursor: -webkit-grab;
  cursor: -moz-grab;
  cursor: grab;
}

.leaflet-crosshair,
.leaflet-crosshair .leaflet-interactive {
  cursor: crosshair;
}

.leaflet-popup-pane,
.leaflet-control {
  cursor: auto;
}

.leaflet-dragging .leaflet-grab,
.leaflet-dragging .leaflet-grab .leaflet-interactive,
.leaflet-dragging .leaflet-marker-draggable {
  cursor: move;
  cursor: -webkit-grabbing;
  cursor: -moz-grabbing;
  cursor: grabbing;
}

/* marker & overlays interactivity */
.leaflet-marker-icon,
.leaflet-marker-shadow,
.leaflet-image-layer,
.leaflet-pane>svg path,
.leaflet-tile-container {
  pointer-events: none;
}

.leaflet-marker-icon.leaflet-interactive,
.leaflet-image-layer.leaflet-interactive,
.leaflet-pane>svg path.leaflet-interactive,
svg.leaflet-image-layer.leaflet-interactive path {
  pointer-events: visiblePainted;
  /* IE 9-10 doesn't have auto */
  pointer-events: auto;
}

/* visual tweaks */
.leaflet-container {
  background: #ddd;
  outline: 0;
}

.leaflet-container a {
  color: #0078A8;
}

.leaflet-container a.leaflet-active {
  outline: 2px solid orange;
}

.leaflet-zoom-box {
  border: 2px dotted #38f;
  background: rgba(255, 255, 255, 0.5);
}

/* general typography */
.leaflet-container {
  font: 12px/1.5 "Helvetica Neue", Arial, Helvetica, sans-serif;
}

/* general toolbar styles */
.leaflet-bar {
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.65);
  border-radius: 4px;
}

.leaflet-bar a,
.leaflet-bar a:hover {
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  width: 26px;
  height: 26px;
  line-height: 26px;
  display: block;
  text-align: center;
  text-decoration: none;
  color: black;
}

.leaflet-bar a,
.leaflet-control-layers-toggle {
  background-position: 50% 50%;
  background-repeat: no-repeat;
  display: block;
}

.leaflet-bar a:hover {
  background-color: #f4f4f4;
}

.leaflet-bar a:first-child {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

.leaflet-bar a:last-child {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom: none;
}

.leaflet-bar a.leaflet-disabled {
  cursor: default;
  background-color: #f4f4f4;
  color: #bbb;
}

.leaflet-touch .leaflet-bar a {
  width: 30px;
  height: 30px;
  line-height: 30px;
}

.leaflet-touch .leaflet-bar a:first-child {
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

.leaflet-touch .leaflet-bar a:last-child {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
}

/* zoom control */
.leaflet-control-zoom-in,
.leaflet-control-zoom-out {
  font: bold 18px 'Lucida Console', Monaco, monospace;
  text-indent: 1px;
}

.leaflet-touch .leaflet-control-zoom-in,
.leaflet-touch .leaflet-control-zoom-out {
  font-size: 22px;
}

/* layers control */
.leaflet-control-layers {
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.4);
  background: #fff;
  border-radius: 5px;
}

.leaflet-touch .leaflet-control-layers-toggle {
  width: 44px;
  height: 44px;
}

.leaflet-control-layers .leaflet-control-layers-list,
.leaflet-control-layers-expanded .leaflet-control-layers-toggle {
  display: none;
}

.leaflet-control-layers-expanded .leaflet-control-layers-list {
  display: block;
  position: relative;
}

.leaflet-control-layers-expanded {
  padding: 6px 10px 6px 6px;
  color: #333;
  background: #fff;
}

.leaflet-control-layers-scrollbar {
  overflow-y: scroll;
  overflow-x: hidden;
  padding-right: 5px;
}

.leaflet-control-layers-selector {
  margin-top: 2px;
  position: relative;
  top: 1px;
}

.leaflet-control-layers label {
  display: block;
}

.leaflet-control-layers-separator {
  height: 0;
  border-top: 1px solid #ddd;
  margin: 5px -10px 5px -6px;
}

/* attribution and scale controls */
.leaflet-container .leaflet-control-attribution {
  background: #fff;
  background: rgba(255, 255, 255, 0.7);
  margin: 0;
}

.leaflet-control-attribution,
.leaflet-control-scale-line {
  padding: 0 5px;
  color: #333;
}

.leaflet-control-attribution a {
  text-decoration: none;
}

.leaflet-control-attribution a:hover {
  text-decoration: underline;
}

.leaflet-container .leaflet-control-attribution,
.leaflet-container .leaflet-control-scale {
  font-size: 11px;
}

.leaflet-left .leaflet-control-scale {
  margin-left: 5px;
}

.leaflet-bottom .leaflet-control-scale {
  margin-bottom: 5px;
}

.leaflet-control-scale-line {
  border: 2px solid #777;
  border-top: none;
  line-height: 1.1;
  padding: 2px 5px 1px;
  font-size: 11px;
  white-space: nowrap;
  overflow: hidden;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background: #fff;
  background: rgba(255, 255, 255, 0.5);
}

.leaflet-control-scale-line:not(:first-child) {
  border-top: 2px solid #777;
  border-bottom: none;
  margin-top: -2px;
}

.leaflet-control-scale-line:not(:first-child):not(:last-child) {
  border-bottom: 2px solid #777;
}

.leaflet-touch .leaflet-control-attribution,
.leaflet-touch .leaflet-control-layers,
.leaflet-touch .leaflet-bar {
  box-shadow: none;
}

.leaflet-touch .leaflet-control-layers,
.leaflet-touch .leaflet-bar {
  border: 2px solid rgba(0, 0, 0, 0.2);
  background-clip: padding-box;
}

/* popup */
.leaflet-popup {
  position: absolute;
  text-align: center;
  margin-bottom: 20px;
}

.leaflet-popup-content-wrapper {
  padding: 1px;
  text-align: left;
  border-radius: 12px;
}

.leaflet-popup-content {
  margin: 13px 19px;
  line-height: 1.4;
}

.leaflet-popup-content p {
  margin: 18px 0;
}

.leaflet-popup-tip-container {
  width: 40px;
  height: 20px;
  position: absolute;
  left: 50%;
  margin-left: -20px;
  overflow: hidden;
  pointer-events: none;
}

.leaflet-popup-tip {
  width: 17px;
  height: 17px;
  padding: 1px;
  margin: -10px auto 0;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.leaflet-popup-content-wrapper,
.leaflet-popup-tip {
  background: white;
  color: #333;
  box-shadow: 0 3px 14px rgba(0, 0, 0, 0.4);
}

.leaflet-container a.leaflet-popup-close-button {
  position: absolute;
  top: 0;
  right: 0;
  padding: 4px 4px 0 0;
  border: none;
  text-align: center;
  width: 18px;
  height: 14px;
  font: 16px/14px Tahoma, Verdana, sans-serif;
  color: #c3c3c3;
  text-decoration: none;
  font-weight: bold;
  background: transparent;
}

.leaflet-container a.leaflet-popup-close-button:hover {
  color: #999;
}

.leaflet-popup-scrolled {
  overflow: auto;
  border-bottom: 1px solid #ddd;
  border-top: 1px solid #ddd;
}

.leaflet-oldie .leaflet-popup-content-wrapper {
  zoom: 1;
}

.leaflet-oldie .leaflet-popup-tip {
  width: 24px;
  margin: 0 auto;
  -ms-filter: "progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)";
  filter: progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678);
}

.leaflet-oldie .leaflet-popup-tip-container {
  margin-top: -1px;
}

.leaflet-oldie .leaflet-control-zoom,
.leaflet-oldie .leaflet-control-layers,
.leaflet-oldie .leaflet-popup-content-wrapper,
.leaflet-oldie .leaflet-popup-tip {
  border: 1px solid #999;
}

/* div icon */
.leaflet-div-icon {
  background: #fff;
  border: 1px solid #666;
}

/* Tooltip */
/* Base styles for the element that has a tooltip */
.leaflet-tooltip {
  position: absolute;
  padding: 6px;
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 3px;
  color: #222;
  white-space: nowrap;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  pointer-events: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
}

.leaflet-tooltip.leaflet-clickable {
  cursor: pointer;
  pointer-events: auto;
}

.leaflet-tooltip-top:before,
.leaflet-tooltip-bottom:before,
.leaflet-tooltip-left:before,
.leaflet-tooltip-right:before {
  position: absolute;
  pointer-events: none;
  border: 6px solid transparent;
  background: transparent;
  content: "";
}

/* Directions */
.leaflet-tooltip-bottom {
  margin-top: 6px;
}

.leaflet-tooltip-top {
  margin-top: -6px;
}

.leaflet-tooltip-bottom:before,
.leaflet-tooltip-top:before {
  left: 50%;
  margin-left: -6px;
}

.leaflet-tooltip-top:before {
  bottom: 0;
  margin-bottom: -12px;
  border-top-color: #fff;
}

.leaflet-tooltip-bottom:before {
  top: 0;
  margin-top: -12px;
  margin-left: -6px;
  border-bottom-color: #fff;
}

.leaflet-tooltip-left {
  margin-left: -6px;
}

.leaflet-tooltip-right {
  margin-left: 6px;
}

.leaflet-tooltip-left:before,
.leaflet-tooltip-right:before {
  top: 50%;
  margin-top: -6px;
}

.leaflet-tooltip-left:before {
  right: 0;
  margin-right: -12px;
  border-left-color: #fff;
}

.leaflet-tooltip-right:before {
  left: 0;
  margin-left: -12px;
  border-right-color: #fff;
}

@-webkit-keyframes leaflet-gestures-fadein {
  0% {
    opacity: 0
  }

  100% {
    opacity: 1
  }
}

@keyframes leaflet-gestures-fadein {
  0% {
    opacity: 0
  }

  100% {
    opacity: 1
  }
}

.leaflet-container:after {
  -webkit-animation: leaflet-gestures-fadein .8s backwards;
  animation: leaflet-gestures-fadein .8s backwards;
  color: #fff;
  font-family: Roboto, Arial, sans-serif;
  font-size: 22px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 15px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .5);
  z-index: 461;
  pointer-events: none
}

.leaflet-gesture-handling-scroll-warning:after,
.leaflet-gesture-handling-touch-warning:after {
  -webkit-animation: leaflet-gestures-fadein .8s forwards;
  animation: leaflet-gestures-fadein .8s forwards
}

.leaflet-gesture-handling-touch-warning:after {
  content: attr(data-gesture-handling-touch-content)
}

.leaflet-gesture-handling-scroll-warning:after {
  content: attr(data-gesture-handling-scroll-content)
}

.leaflet-control-container {
  display: none;
}

.leaflet-container .point {
  transition: stroke-opacity 100ms ease;
  stroke-opacity: 0.8;
  fill-opacity: 0.2;
}

.leaflet-container.is-filtering .point {
  stroke-opacity: 0;
  fill-opacity: 0;
  pointer-events: none;
}

.leaflet-container.is-filtering .point.is-active {
  stroke-opacity: 0.8;
  fill-opacity: 0.2;
  pointer-events: all;
}

</style>
