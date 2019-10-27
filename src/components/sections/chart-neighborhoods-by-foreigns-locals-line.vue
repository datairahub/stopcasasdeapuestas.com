<template>
    <div>
        <line-chart :config="config" :datum="datum" :title="title" :source="source"></line-chart>
    </div>
</template>

<script>
export default {
    name: 'chart-neighborhoods-by-foreigns-locals-line',
    data: function(){
        return {
            datum: [
                {"locals": 1900, "foreigns": 20},
                {"locals": 1901, "foreigns": 20},
                {"locals": 1902, "foreigns": 20},
                {"locals": 1903, "foreigns": 20},
                {"locals": 1904, "foreigns": 20},
                {"locals": 1905, "foreigns": 20},
                {"locals": 1906, "foreigns": 20},
                {"locals": 1907, "foreigns": 20},
                {"locals": 1908, "foreigns": 20},
                {"locals": 1909, "foreigns": 20},
                {"locals": 1910, "foreigns": 20},
                {"locals": 1911, "foreigns": 20},
                {"locals": 1920, "foreigns": 20},
                {"locals": 1921, "foreigns": 20},
            ],
            config: {
                keys: ['foreigns'],
                labels: ['Tasa extranjería'],
                dateField: 'locals',
                dateFormat: '%Y',
                dateFormatOutput: '%y',
                yScaleFormat: '.0f',
                xScaleTicks: 20,
                yAxis: 'Tasa extranjería',
                colorScheme: ['#7a9eb1']
            },
            title: 'Proporción media no ponderada de extranjeros/as por nº de locales',
            source: 'Fuente: FRAVM',
        }
    }
}
</script>