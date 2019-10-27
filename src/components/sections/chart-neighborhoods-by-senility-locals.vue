<template>
    <div>
        <scatter-plot :config="config" :datum="datum" :title="title" :source="source"></scatter-plot>
    </div>
</template>

<script>
export default {
    name: 'chart-neighborhoods-by-senility-locals',
    data: function(){
        return {
            datum: [
                {name: 'Test', locals: 20, senility: 37000},
                {name: 'Tesy', locals: 15, senility: 47000},
            ],
            config: {
                keyX: 'senility',
                keyY: 'locals',
                label: 'name',
                labelX: '% Senilidad',
                labelY: 'Locales',
                yAxis: 'Nº de locales',
                color: '#359768'
            },
            title: 'Barrios según tasa de senilidad y número de locales',
            source: 'Fuente: FRAVM.',
        }
    }
}
</script>