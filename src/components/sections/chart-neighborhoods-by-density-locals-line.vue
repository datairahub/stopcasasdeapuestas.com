<template>
    <div>
        <line-chart :config="config" :datum="datum" :title="title" :source="source"></line-chart>
    </div>
</template>

<script>
export default {
    name: 'chart-neighborhoods-by-density-locals-line',
    data: function(){
        return {
            datum: [
                {"locals": 1900, "density": 110},
                {"locals": 1901, "density": 110},
                {"locals": 1902, "density": 110},
                {"locals": 1903, "density": 110},
                {"locals": 1904, "density": 110},
                {"locals": 1905, "density": 110},
                {"locals": 1906, "density": 110},
                {"locals": 1907, "density": 110},
                {"locals": 1908, "density": 110},
                {"locals": 1909, "density": 110},
                {"locals": 1910, "density": 110},
                {"locals": 1911, "density": 110},
                {"locals": 1920, "density": 110},
                {"locals": 1921, "density": 110},
            ],
            config: {
                keys: ['density'],
                labels: ['Densidad'],
                dateField: 'locals',
                dateFormat: '%Y',
                dateFormatOutput: '%y',
                yScaleFormat: '.0f',
                xScaleTicks: 20,
                yAxis: 'Densidad',
                colorScheme: ['#23425f']
            },
            title: 'Densidad media no ponderada por nº de locales',
            source: 'Fuente: FRAVM',
        }
    }
}
</script>