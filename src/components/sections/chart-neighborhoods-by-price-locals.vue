<template>
    <div>
        <scatter-plot :config="config" :datum="datum" :title="title" :source="source"></scatter-plot>
    </div>
</template>

<script>
export default {
    name: 'chart-neighborhoods-by-price-locals',
    data: function(){
        return {
            datum: [
                {name: 'Test', locals: 20, price: 37000},
                {name: 'Tesy', locals: 15, price: 47000},
            ],
            config: {
                keyX: 'price',
                keyY: 'locals',
                label: 'name',
                labelX: 'Precio metro cuadrado',
                labelY: 'Locales',
                yAxis: 'Nº de locales',
                color: '#6730ec'
            },
            title: 'Barrios según precio del metro cuadrado y número de locales',
            source: 'Fuente: FRAVM.',
        }
    }
}
</script>