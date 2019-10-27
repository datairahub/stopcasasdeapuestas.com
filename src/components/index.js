import Vue from 'vue'

Vue.component('nav-menu',              require('./nav-menu').default);


Vue.component('home-page',                              require('./home-page').default);
Vue.component('report-page',                            require('./report-page').default);
Vue.component('proposal-page',                          require('./proposal-page').default);
Vue.component('map-page',                               require('./map-page').default);
Vue.component('data-page',                              require('./data-page').default);
Vue.component('sources-page',                           require('./sources-page').default);
Vue.component('contact-page',                           require('./contact-page').default);

// Sections
Vue.component('table-locals-by-distric-company',        require('./sections/table-locals-by-distric-company').default);
Vue.component('table-streets-by-number',                require('./sections/table-streets-by-number').default);
Vue.component('table-locals-by-educationcenters',       require('./sections/table-locals-by-educationcenters').default);
Vue.component('table-neighborhoods-by-locals',          require('./sections/table-neighborhoods-by-locals').default);
Vue.component('table-neighborhoods-by-unemployment',    require('./sections/table-neighborhoods-by-unemployment').default);
Vue.component('table-neighborhoods-by-studies',         require('./sections/table-neighborhoods-by-studies').default);
Vue.component('table-neighborhoods-by-distance',        require('./sections/table-neighborhoods-by-distance').default);
Vue.component('table-neighborhoods-by-poblation',       require('./sections/table-neighborhoods-by-poblation').default);
Vue.component('table-neighborhoods-by-density',         require('./sections/table-neighborhoods-by-density').default);
Vue.component('table-neighborhoods-by-youngs',          require('./sections/table-neighborhoods-by-youngs').default);
Vue.component('table-neighborhoods-by-senility',        require('./sections/table-neighborhoods-by-senility').default);
Vue.component('table-neighborhoods-by-foreigns',        require('./sections/table-neighborhoods-by-foreigns').default);
Vue.component('table-correlations',                     require('./sections/table-correlations').default);
Vue.component('table-regression',                       require('./sections/table-regression').default);

Vue.component('locals-by-distric',                      require('./sections/locals-by-distric').default);
Vue.component('neighborhoods-by-locals',                require('./sections/neighborhoods-by-locals').default);
Vue.component('locals-by-rent',                         require('./sections/locals-by-rent').default);
Vue.component('locals-by-educationcenters',             require('./sections/locals-by-educationcenters').default);





// Charts
Vue.component('bar-chart',                              require('./charts/barchart/bar-chart').default);
Vue.component('line-chart',                             require('./charts/linechart/line-chart').default);
