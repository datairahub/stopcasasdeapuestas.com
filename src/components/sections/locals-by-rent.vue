<template>
    <div>
        <line-chart :config="config" :datum="datum" :title="title" :source="source"></line-chart>
    </div>
</template>

<script>
export default {
    name: 'locals-by-rent',
    data: function(){
        return {
            datum: [
                {"locals": 1900, "rent": 56000},
                {"locals": 1901, "rent": 43000},
                {"locals": 1902, "rent": 38000},
                {"locals": 1903, "rent": 38500},
                {"locals": 1904, "rent": 36000},
                {"locals": 1905, "rent": 35000},
                {"locals": 1906, "rent": 33000},
                {"locals": 1907, "rent": 29500},
                {"locals": 1908, "rent": 29000},
                {"locals": 1909, "rent": 28000},
                {"locals": 1910, "rent": 32000},
                {"locals": 1911, "rent": 26500},
                {"locals": 1920, "rent": 32000},
                {"locals": 1921, "rent": 24000},
            ],
            config: {
                keys: ['rent'],
                labels: ['Renta media'],
                dateField: 'locals',
                dateFormat: '%Y',
                dateFormatOutput: '%y',
                yScaleFormat: '.0s',
                xScaleTicks: 10,
                yAxis: 'Renta media',
            },
            title: 'Promedio no ponderado de la renta media de los hogares según el nº de locales',
            source: 'Fuente: Elaboración propia',
        }
    }
}
</script>