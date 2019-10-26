<template>
    <div style="min-width: 800px">
        <bar-chart :config="config" :datum="datum" :title="title" :source="source"></bar-chart>
    </div>
</template>

<script>
export default {
    name: 'locals-by-distric',
    data: function(){
        return {
            datum: [
                {name: 'Carabanchel', value: 48},
                {name: 'Puente V.', value: 44},
                {name: 'Tetuán', value: 35},
                {name: 'Usera', value: 32},
                {name: 'Centro', value: 31},
                {name: 'Latina', value: 27},
                {name: 'Ciudad lineal', value: 27},
                {name: 'Arganzuela', value: 21},
                {name: 'Chamberí', value: 21},
                {name: 'Villaverde', value: 21},
                {name: 'Salamanca', value: 16},
                {name: 'San Blas', value: 13},
                {name: 'Chamartín', value: 12},
                {name: 'Fuencarral', value: 12},
                {name: 'V. Vallecas', value: 7},
                {name: 'Vicálvaro', value: 7},
                {name: 'Hortaleza', value: 6},
                {name: 'Moncloa', value: 6},
                {name: 'Retiro', value: 4},
                {name: 'Barajas', value: 3},
            ],
            config: {
                key: 'name',
                value: 'value',
                color: 'steelblue',
                yAxis: 'Nº de locales',
                margin: {
                    bottom: 20,
                }
            },
            title: 'Locales por distrito',
            source: 'Fuente: Datos abiertos (A. Madrid) y elaboración propia',
        }
    }
}
</script>