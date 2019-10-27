<template>
    <div>
        <bar-chart :config="config" :datum="datum" :title="title" :source="source"></bar-chart>
    </div>
</template>

<script>
export default {
    name: 'chart-neighborhoods-by-locals',
    data: function(){
        return {
            datum: [
                {name: '0', value: 37},
                {name: '1', value: 24},
                {name: '2', value: 16},
                {name: '3', value: 9},
                {name: '4', value: 12},
                {name: '5', value: 8},
                {name: '6', value: 7},
                {name: '7', value: 6},
                {name: '8', value: 2},
                {name: '9', value: 4},
                {name: '10', value: 2},
                {name: '11', value: 1},
                {name: '12', value: 0},
                {name: '13', value: 0},
                {name: '14', value: 0},
                {name: '15', value: 0},
                {name: '16', value: 0},
                {name: '17', value: 0},
                {name: '18', value: 0},
                {name: '19', value: 0},
                {name: '20', value: 1},
                {name: '21', value: 2},
            ],
            config: {
                key: 'name',
                value: 'value',
                color: '#499491',
                yAxis: 'Nº de barrios',
                margin: {
                    bottom: 20,
                }
            },
            title: 'Número de barrios por cantidad de locales',
            source: 'Fuente: FRAVM.',
        }
    }
}
</script>