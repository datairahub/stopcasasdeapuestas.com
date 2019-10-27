<template>
    <div>
        <line-chart :config="config" :datum="datum" :title="title" :source="source"></line-chart>
    </div>
</template>

<script>
export default {
    name: 'chart-neighborhoods-by-population-locals-line',
    data: function(){
        return {
            datum: [
                {"locals": 1900, "population": 15000},
                {"locals": 1901, "population": 23000},
                {"locals": 1902, "population": 27000},
                {"locals": 1903, "population": 22000},
                {"locals": 1904, "population": 33000},
                {"locals": 1905, "population": 33500},
                {"locals": 1906, "population": 33000},
                {"locals": 1907, "population": 33500},
                {"locals": 1908, "population": 47000},
                {"locals": 1909, "population": 28500},
                {"locals": 1910, "population": 48000},
                {"locals": 1911, "population": 28000},
                {"locals": 1920, "population": 8000},
                {"locals": 1921, "population": 44000},
            ],
            config: {
                keys: ['population'],
                labels: ['Población'],
                dateField: 'locals',
                dateFormat: '%Y',
                dateFormatOutput: '%y',
                yScaleFormat: '.0s',
                xScaleTicks: 20,
                yAxis: 'Población',
                colorScheme: ['#7ed3b2']
            },
            title: 'Población media no ponderada según nº de locales',
            source: 'Fuente: FRAVM',
        }
    }
}
</script>