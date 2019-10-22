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
                {"datetime": 946684800000, "total": 53156, "hombres": 25257, "mujeres": 27899 },
                {"datetime": 978307200000, "total": 40420, "hombres": 20447, "mujeres": 20973 },
                {"datetime": 1009843200000, "total": 53568, "hombres": 25596, "mujeres": 27972 },
                {"datetime": 1041379200000, "total": 20710, "hombres": 10298, "mujeres": 12412 },
            ],
            config: {
                keys: ['total', 'hombres', 'mujeres'],
                labels: ['Total', 'Hombres', 'Mujeres'],
                dateField: 'datetime',
                dateFormat: '%Q',
                yScaleFormat: '.0s',
                yAxis: 'Nº de locales',
            },
            title: 'Locales por renta',
            source: 'Fuente: Elaboración propia',
        }
    }
}
</script>