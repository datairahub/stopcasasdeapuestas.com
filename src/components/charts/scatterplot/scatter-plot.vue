<template>
    <div class="chart__wrapper">
        <div v-if="title" class="chart__title">{{title}}</div>
        <div ref="chart" style="height: 300px"></div>
        <div v-if="source" class="chart__source">{{source}}</div>
    </div>
</template>


<script>
import D3ScatterPlot from './d3.scatterplot';

export default {
    name: 'scatter-plot',
    data: function(){
        return {
            chart: {},
        }
    },
    props: ['config', 'datum', 'title', 'source'],
    mounted: function(){
        
        this.chart = new D3ScatterPlot(
            this.$refs.chart,
            this.datum,
            this.config
        )
        
    }
}
</script>


<style lang="scss">
@import '../charts-styles';
</style>