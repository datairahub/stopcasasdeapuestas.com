<template>
    <div>
        <geojson-map v-if="datum" :config="config" :datum="datum" :title="title" :source="source" :height="height"></geojson-map>
    </div>
</template>

<script>
import {json} from 'd3-fetch';

const d3 = {json}

export default {
    name: 'map-neighborhoods-by-locals',
    data: function(){
        return {
            datum: false,
            config: {
                color: 'steelblue',
                label: 'DESBDT',
                scale: 60000,
                center: [-3.7,40.482],
                key: 'NUMPOINTS'
            },
            title: 'Locales por barrios',
            source: 'Fuente: FRAVM.',
            height: 460,
        }
    },
    beforeCreate: function(){
        d3.json('/static/data/MAD_adm6.json').then(data=>{
            this.datum = data;
        })
    }
}
</script>

<style lang="scss">
.chart__wrap--geojsonmap {
    path {
        stroke: rgba(0, 0, 0, 0.3);
        stroke-width: 1px;
    }
}
</style>