<template>
    <div>
        <scatter-plot :config="config" :datum="datum" :title="title" :source="source"></scatter-plot>
    </div>
</template>

<script>
export default {
    name: 'chart-neighborhoods-by-distance-locals',
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
                labelX: 'Renta',
                labelY: 'Locales',
                yAxis: 'Nº de locales',
                color: '#11999e'
            },
            title: 'Barrios según distancia a la Puerta del Sol y número de locales',
            source: 'Fuente: FRAVM.',
        }
    }
}
</script>