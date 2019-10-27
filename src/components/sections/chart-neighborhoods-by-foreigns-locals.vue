<template>
    <div>
        <scatter-plot :config="config" :datum="datum" :title="title" :source="source"></scatter-plot>
    </div>
</template>

<script>
export default {
    name: 'chart-neighborhoods-by-foreigns-locals',
    data: function(){
        return {
            datum: [
                {name: 'Test', locals: 20, foreigns: 37000},
                {name: 'Tesy', locals: 15, foreigns: 47000},
            ],
            config: {
                keyX: 'foreigns',
                keyY: 'locals',
                label: 'name',
                labelX: 'Tasa extranjería',
                labelY: 'Locales',
                yAxis: 'Nº de locales',
                color: '#7a9eb1'
            },
            title: 'Barrios según tasa de extranjería y número de locales',
            source: 'Fuente: FRAVM.',
        }
    }
}
</script>