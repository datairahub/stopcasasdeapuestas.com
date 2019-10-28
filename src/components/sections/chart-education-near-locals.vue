<template>
    <div>
        <bar-chart :config="config" :datum="datum" :title="title" :source="source"></bar-chart>
    </div>
</template>

<script>
export default {
    name: 'chart-education-near-locals',
    data: function(){
        return {
            datum: [
                {"centers": '20', "locals": 1},
                {"centers": '19', "locals": 1},
                {"centers": '18', "locals": 2},
                {"centers": '17', "locals": 1},
                {"centers": '15', "locals": 4},
                {"centers": '14', "locals": 3},
                {"centers": '13', "locals": 2},
                {"centers": '12', "locals": 2},
                {"centers": '11', "locals": 3},
                {"centers": '10', "locals": 9},
                {"centers": '9',  "locals": 5},
                {"centers": '8',  "locals": 5},
                {"centers": '7',  "locals": 17},
                {"centers": '6',  "locals": 18},
                {"centers": '5',  "locals": 25},
                {"centers": '4',  "locals": 34},
            ],
            config: {
                key: 'centers',
                value: 'locals',
                color: 'steelblue',
                yscaleticks: 6,
                yAxis: 'Nº de centros',
            },
            title: 'Centros de secundaria con 4 o más locales en un radio de 500m',
            source: 'Fuente: FRAVM. Locales en el eje horizontal.',
        }
    }
}
</script>