<template>
    <div>
        <scatter-plot :config="config" :datum="datum" :title="title" :source="source"></scatter-plot>
    </div>
</template>

<script>
export default {
    name: 'chart-neighborhoods-by-density-locals',
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
                labelX: 'Densidad',
                labelY: 'Locales',
                yAxis: 'Nº de locales',
                color: '#23425f'
            },
            title: 'Barrios según densidad y número de locales',
            source: 'Fuente: FRAVM.',
        }
    }
}
</script>