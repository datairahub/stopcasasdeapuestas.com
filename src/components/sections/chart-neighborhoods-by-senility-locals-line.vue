<template>
    <div>
        <line-chart :config="config" :datum="datum" :title="title" :source="source"></line-chart>
    </div>
</template>

<script>
export default {
    name: 'chart-neighborhoods-by-senility-locals-line',
    data: function(){
        return {
            datum: [
                {"locals": 1900, "senility": 15.0},
                {"locals": 1901, "senility": 15.0},
                {"locals": 1902, "senility": 15.0},
                {"locals": 1903, "senility": 15.0},
                {"locals": 1904, "senility": 15.0},
                {"locals": 1905, "senility": 15.0},
                {"locals": 1906, "senility": 15.0},
                {"locals": 1907, "senility": 15.0},
                {"locals": 1908, "senility": 15.0},
                {"locals": 1909, "senility": 15.0},
                {"locals": 1910, "senility": 15.0},
                {"locals": 1911, "senility": 15.0},
                {"locals": 1920, "senility": 15.0},
                {"locals": 1921, "senility": 15.0},
            ],
            config: {
                keys: ['senility'],
                labels: ['Tasa de senilidad'],
                dateField: 'locals',
                dateFormat: '%Y',
                dateFormatOutput: '%y',
                yScaleFormat: '.0f',
                xScaleTicks: 20,
                yAxis: 'Tasa de senilidad',
                colorScheme: ['#4aa0d5']
            },
            title: 'Proporción media no ponderada de la tasa de senilidad según el nº de locales',
            source: 'Fuente: FRAVM',
        }
    }
}
</script>