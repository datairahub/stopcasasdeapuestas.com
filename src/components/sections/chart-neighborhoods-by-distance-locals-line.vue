<template>
    <div>
        <line-chart :config="config" :datum="datum" :title="title" :source="source"></line-chart>
    </div>
</template>

<script>
export default {
    name: 'chart-neighborhoods-by-distance-locals-line',
    data: function(){
        return {
            datum: [
                {"locals": 1900, "distance": 7100},
                {"locals": 1901, "distance": 6500},
                {"locals": 1902, "distance": 5800},
                {"locals": 1903, "distance": 3600},
                {"locals": 1904, "distance": 4500},
                {"locals": 1905, "distance": 5800},
                {"locals": 1906, "distance": 5050},
                {"locals": 1907, "distance": 4700},
                {"locals": 1908, "distance": 5500},
                {"locals": 1909, "distance": 3100},
                {"locals": 1910, "distance": 4600},
                {"locals": 1911, "distance": 3100},
                {"locals": 1920, "distance": 0},
                {"locals": 1921, "distance": 4700},
            ],
            config: {
                keys: ['distance'],
                labels: ['Distancia'],
                dateField: 'locals',
                dateFormat: '%Y',
                dateFormatOutput: '%y',
                yScaleFormat: '.0s',
                xScaleTicks: 20,
                yAxis: 'Distancia (m)',
                colorScheme: ['#11999e']
            },
            title: 'Distancia no ponderada a la Puerta del Sol por nº de locales',
            source: 'Fuente: FRAVM',
        }
    }
}
</script>