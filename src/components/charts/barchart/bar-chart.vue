<template>
    <div class="chart__wrapper">
        <div v-if="title" class="chart__title">{{title}}</div>
        <div ref="chart" style="height: 300px"></div>
        <div v-if="source" class="chart__source">{{source}}</div>
    </div>
</template>


<script>
import D3BarChart from './d3.barchart';

export default {
    name: 'bar-chart',
    data: function(){
        return {
            chart: {},
        }
    },
    props: ['config', 'datum', 'title', 'source'],
    mounted: function(){
        this.chart = new D3BarChart(
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