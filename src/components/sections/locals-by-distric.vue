<template>
    <div>
        <bar-chart :config="config" :datum="datum" :title="title" :source="source"></bar-chart>
    </div>
</template>

<script>
export default {
    name: 'locals-by-distric',
    data: function(){
        return {
            datum: [
                {name: 'Carabanchel', value: 46},
                {name: 'Tetuán', value: 35},
                {name: 'Puente V.', value: 33},
                {name: 'Usera', value: 29},
                {name: 'Latina', value: 27},
                {name: 'Ciudad Lineal', value: 27},
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