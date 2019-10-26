<template>
    <div>
        <bar-chart :config="config" :datum="datum" :title="title" :source="source"></bar-chart>
    </div>
</template>

<script>
export default {
    name: 'locals-by-educationcenters',
    data: function(){
        return {
            datum: [
                {"locals": '100m', "total": 41},
                {"locals": '150m', "total": 99},
                {"locals": '200m', "total": 166},
                {"locals": '250m', "total": 230},
                {"locals": '300m', "total": 280},
                {"locals": '350m', "total": 318},
                {"locals": '400m', "total": 348},
                {"locals": '450m', "total": 365},
                {"locals": '500m', "total": 381},
                {"locals": '550m', "total": 390},
                {"locals": '600m', "total": 395},
            ],
            config: {
                key: 'locals',
                value: 'total',
                color: '#bca3ca',
                yscaleticks: 6,
                yAxis: 'Nº de locales',
            },
            title: 'Locales con algún centro de secundaria a menos de...',
            source: 'Fuente: Elaboración propia',
        }
    }
}
</script>