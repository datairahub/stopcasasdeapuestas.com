<template>
    <div>
        <line-chart :config="config" :datum="datum" :title="title" :source="source"></line-chart>
    </div>
</template>

<script>
export default {
    name: 'chart-neighborhoods-by-youngs-locals-line',
    data: function(){
        return {
            datum: [
                {"locals": 1900, "youngs": 10},
                {"locals": 1901, "youngs": 10},
                {"locals": 1902, "youngs": 10},
                {"locals": 1903, "youngs": 10},
                {"locals": 1904, "youngs": 10},
                {"locals": 1905, "youngs": 10},
                {"locals": 1906, "youngs": 10},
                {"locals": 1907, "youngs": 10},
                {"locals": 1908, "youngs": 10},
                {"locals": 1909, "youngs": 10},
                {"locals": 1910, "youngs": 10},
                {"locals": 1911, "youngs": 10},
                {"locals": 1920, "youngs": 10},
                {"locals": 1921, "youngs": 10},
            ],
            config: {
                keys: ['youngs'],
                labels: ['% Jóvenes'],
                dateField: 'locals',
                dateFormat: '%Y',
                dateFormatOutput: '%y',
                yScaleFormat: '.0f',
                xScaleTicks: 20,
                yAxis: '% Jóvenes',
                colorScheme: ['#0098ef']
            },
            title: 'Proporción media ponderada de jóvenes según el nº de locales',
            source: 'Fuente: FRAVM',
        }
    }
}
</script>