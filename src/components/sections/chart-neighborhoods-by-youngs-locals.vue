<template>
    <div>
        <scatter-plot :config="config" :datum="datum" :title="title" :source="source"></scatter-plot>
    </div>
</template>

<script>
export default {
    name: 'chart-neighborhoods-by-youngs-locals',
    data: function(){
        return {
            datum: [
                {name: 'Test', locals: 20, youngs: 37000},
                {name: 'Tesy', locals: 15, youngs: 47000},
            ],
            config: {
                keyX: 'youngs',
                keyY: 'locals',
                label: 'name',
                labelX: '% Jóvenes',
                labelY: 'Locales',
                yAxis: 'Nº de locales',
                color: '#0098ef'
            },
            title: 'Barrios según proporción de jóvenes y número de locales',
            source: 'Fuente: FRAVM.',
        }
    }
}
</script>