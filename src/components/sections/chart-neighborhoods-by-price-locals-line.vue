<template>
    <div>
        <line-chart :config="config" :datum="datum" :title="title" :source="source"></line-chart>
    </div>
</template>

<script>
export default {
    name: 'chart-neighborhoods-by-price-locals-line',
    data: function(){
        return {
            datum: [
                {"locals": 1900, "price": 10000},
                {"locals": 1901, "price": 10000},
                {"locals": 1902, "price": 10000},
                {"locals": 1903, "price": 10000},
                {"locals": 1904, "price": 10000},
                {"locals": 1905, "price": 10000},
                {"locals": 1906, "price": 10000},
                {"locals": 1907, "price": 10000},
                {"locals": 1908, "price": 10000},
                {"locals": 1909, "price": 10000},
                {"locals": 1910, "price": 10000},
                {"locals": 1911, "price": 10000},
                {"locals": 1920, "price": 10000},
                {"locals": 1921, "price": 10000},
            ],
            config: {
                keys: ['price'],
                labels: ['Precio m2'],
                dateField: 'locals',
                dateFormat: '%Y',
                dateFormatOutput: '%y',
                yScaleFormat: '.0s',
                xScaleTicks: 20,
                yAxis: 'Precio metro cuadrado',
                colorScheme: ['#6730ec']
            },
            title: 'Barrios por precio medio no ponderado según nº de locales',
            source: 'Fuente: FRAVM',
        }
    }
}
</script>