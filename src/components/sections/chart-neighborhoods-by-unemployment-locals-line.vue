<template>
    <div>
        <line-chart :config="config" :datum="datum" :title="title" :source="source"></line-chart>
    </div>
</template>

<script>
export default {
    name: 'chart-neighborhoods-by-unemployment-locals-line',
    data: function(){
        return {
            datum: [
                {"locals": 1900, "unemployment": 6.0},
                {"locals": 1901, "unemployment": 6.9},
                {"locals": 1902, "unemployment": 7.8},
                {"locals": 1903, "unemployment": 7.2},
                {"locals": 1904, "unemployment": 7.4},
                {"locals": 1905, "unemployment": 7.6},
                {"locals": 1906, "unemployment": 8.2},
                {"locals": 1907, "unemployment": 8.5},
                {"locals": 1908, "unemployment": 8.6},
                {"locals": 1909, "unemployment": 7.7},
                {"locals": 1910, "unemployment": 7.3},
                {"locals": 1911, "unemployment": 8.1},
                {"locals": 1920, "unemployment": 6.2},
                {"locals": 1921, "unemployment": 9.4},
            ],
            config: {
                keys: ['unemployment'],
                labels: ['Tasa de paro'],
                dateField: 'locals',
                dateFormat: '%Y',
                dateFormatOutput: '%y',
                yScaleFormat: '.0f',
                xScaleTicks: 20,
                yAxis: 'Tasa de paro',
                colorScheme: ['#4aa0d5']
            },
            title: 'Promedio no ponderado de la tasa absoluta de paro según el nº de locales',
            source: 'Fuente: FRAVM',
        }
    }
}
</script>