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
                {"locals": 1900, "lowstudies": 29},
                {"locals": 1901, "lowstudies": 32},
                {"locals": 1902, "lowstudies": 39},
                {"locals": 1903, "lowstudies": 33},
                {"locals": 1904, "lowstudies": 41},
                {"locals": 1905, "lowstudies": 40},
                {"locals": 1906, "lowstudies": 44},
                {"locals": 1907, "lowstudies": 48},
                {"locals": 1908, "lowstudies": 51},
                {"locals": 1909, "lowstudies": 44},
                {"locals": 1910, "lowstudies": 46},
                {"locals": 1911, "lowstudies": 57},
                {"locals": 1920, "lowstudies": 26},
                {"locals": 1921, "lowstudies": 59},
            ],
            config: {
                keys: ['lowstudies'],
                labels: ['% Bajos estudios'],
                dateField: 'locals',
                dateFormat: '%Y',
                dateFormatOutput: '%y',
                yScaleFormat: '.0f',
                xScaleTicks: 20,
                yAxis: '% Bajos estudios',
                colorScheme: ['#35c2bd']
            },
            title: 'Proporción no ponderada de nivel de estudios bajos por nº de locales',
            source: 'Fuente: FRAVM',
        }
    }
}
</script>