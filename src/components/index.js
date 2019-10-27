import Vue from 'vue'

Vue.component('nav-menu',              require('./nav-menu').default);


Vue.component('home-page',             require('./home-page').default);
Vue.component('report-page',           require('./report-page').default);
Vue.component('proposal-page',         require('./proposal-page').default);
Vue.component('map-page',              require('./map-page').default);
Vue.component('data-page',             require('./data-page').default);
Vue.component('sources-page',          require('./sources-page').default);
Vue.component('contact-page',          require('./contact-page').default);

// Sections
Vue.component('table-locals-by-distric-company',       require('./sections/table-locals-by-distric-company').default);
Vue.component('table-streets-by-number',               require('./sections/table-streets-by-number').default);
Vue.component('table-locals-by-educationcenters',      require('./sections/table-locals-by-educationcenters').default);
Vue.component('table-neighborhoods-by-locals',         require('./sections/table-neighborhoods-by-locals').default);
Vue.component('table-neighborhoods-by-unemployment',   require('./sections/table-neighborhoods-by-unemployment').default);
Vue.component('table-neighborhoods-by-studies',        require('./sections/table-neighborhoods-by-studies').default);
Vue.component('table-neighborhoods-by-distance',       require('./sections/table-neighborhoods-by-distance').default);
Vue.component('table-neighborhoods-by-poblation',      require('./sections/table-neighborhoods-by-poblation').default);
Vue.component('table-neighborhoods-by-density',        require('./sections/table-neighborhoods-by-density').default);
Vue.component('table-neighborhoods-by-youngs',         require('./sections/table-neighborhoods-by-youngs').default);
Vue.component('table-neighborhoods-by-senility',       require('./sections/table-neighborhoods-by-senility').default);
Vue.component('table-neighborhoods-by-foreigns',       require('./sections/table-neighborhoods-by-foreigns').default);
Vue.component('table-correlations',                    require('./sections/table-correlations').default);
Vue.component('table-regression',                      require('./sections/table-regression').default);

Vue.component('chart-locals-by-distric',                          require('./sections/chart-locals-by-distric').default);
Vue.component('chart-neighborhoods-by-locals',                    require('./sections/chart-neighborhoods-by-locals').default);
Vue.component('chart-neighborhoods-by-rent-locals',               require('./sections/chart-neighborhoods-by-rent-locals').default);
Vue.component('chart-neighborhoods-by-rent-locals-line',          require('./sections/chart-neighborhoods-by-rent-locals-line').default);
Vue.component('chart-neighborhoods-by-unemployment-locals',       require('./sections/chart-neighborhoods-by-unemployment-locals').default);
Vue.component('chart-neighborhoods-by-unemployment-locals-line',  require('./sections/chart-neighborhoods-by-unemployment-locals-line').default);
Vue.component('chart-neighborhoods-by-education-locals',          require('./sections/chart-neighborhoods-by-education-locals').default);
Vue.component('chart-neighborhoods-by-education-locals-line',     require('./sections/chart-neighborhoods-by-education-locals-line').default);
Vue.component('chart-neighborhoods-by-distance-locals',           require('./sections/chart-neighborhoods-by-distance-locals').default);
Vue.component('chart-neighborhoods-by-distance-locals-line',      require('./sections/chart-neighborhoods-by-distance-locals-line').default);
Vue.component('chart-neighborhoods-by-population-locals',         require('./sections/chart-neighborhoods-by-population-locals').default);
Vue.component('chart-neighborhoods-by-population-locals-line',    require('./sections/chart-neighborhoods-by-population-locals-line').default);
Vue.component('chart-neighborhoods-by-density-locals',            require('./sections/chart-neighborhoods-by-density-locals').default);
Vue.component('chart-neighborhoods-by-density-locals-line',       require('./sections/chart-neighborhoods-by-density-locals-line').default);
Vue.component('chart-neighborhoods-by-youngs-locals',             require('./sections/chart-neighborhoods-by-youngs-locals').default);
Vue.component('chart-neighborhoods-by-youngs-locals-line',        require('./sections/chart-neighborhoods-by-youngs-locals-line').default);
Vue.component('chart-neighborhoods-by-senility-locals',           require('./sections/chart-neighborhoods-by-senility-locals').default);
Vue.component('chart-neighborhoods-by-senility-locals-line',      require('./sections/chart-neighborhoods-by-senility-locals-line').default);
Vue.component('chart-neighborhoods-by-foreigns-locals',           require('./sections/chart-neighborhoods-by-foreigns-locals').default);
Vue.component('chart-neighborhoods-by-foreigns-locals-line',      require('./sections/chart-neighborhoods-by-foreigns-locals-line').default);
Vue.component('chart-neighborhoods-by-price-locals',              require('./sections/chart-neighborhoods-by-price-locals').default);
Vue.component('chart-neighborhoods-by-price-locals-line',         require('./sections/chart-neighborhoods-by-price-locals-line').default);
Vue.component('chart-locals-by-educationcenters',                 require('./sections/chart-locals-by-educationcenters').default);

Vue.component('map-districts-by-locals',                   require('./sections/map-districts-by-locals').default);
//Vue.component('map-neighborhoods-by-locals',              require('./sections/map-neighborhoods-by-locals').default);


// Charts
Vue.component('bar-chart',            require('./charts/barchart/bar-chart').default);
Vue.component('line-chart',           require('./charts/linechart/line-chart').default);
Vue.component('scatter-plot',         require('./charts/scatterplot/scatter-plot').default);
Vue.component('geojson-map',          require('./charts/geojsonmap/geojson-map').default);
