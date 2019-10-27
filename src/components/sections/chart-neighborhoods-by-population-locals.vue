<template>
    <div>
        <scatter-plot :config="config" :datum="datum" :title="title" :source="source"></scatter-plot>
    </div>
</template>

<script>
export default {
    name: 'chart-neighborhoods-by-population-locals',
    data: function(){
        return {
            datum: [
                {name: 'Test', locals: 20, rent: 37000},
                {name: 'Tesy', locals: 15, rent: 47000},
            ],
            config: {
                keyX: 'rent',
                keyY: 'locals',
                label: 'name',
                labelX: 'Población',
                labelY: 'Locales',
                yAxis: 'Nº de locales',
                color: '#7ed3b2'
            },
            title: 'Barrios según población y número de locales',
            source: 'Fuente: FRAVM.',
        }
    }
}
</script>