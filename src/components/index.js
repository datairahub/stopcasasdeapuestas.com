import Vue from 'vue'

Vue.component('nav-menu',              require('./nav-menu').default);


Vue.component('home-page',                        require('./home-page').default);
Vue.component('map-page',                         require('./map-page').default);
Vue.component('report-page',                      require('./report-page').default);
Vue.component('proposal-page',                    require('./proposal-page').default);
Vue.component('sources-page',                     require('./sources-page').default);
Vue.component('contact-page',                     require('./contact-page').default);

// Sections
Vue.component('table-locals-by-distric-company',  require('./sections/table-locals-by-distric-company').default);
Vue.component('table-streets-by-number',          require('./sections/table-streets-by-number').default);
Vue.component('table-locals-by-educationcenters', require('./sections/table-locals-by-educationcenters').default);
Vue.component('table-regression',                 require('./sections/table-regression').default);

Vue.component('locals-by-distric',                require('./sections/locals-by-distric').default);
Vue.component('neighborhoods-by-locals',          require('./sections/neighborhoods-by-locals').default);
Vue.component('locals-by-rent',                   require('./sections/locals-by-rent').default);
Vue.component('locals-by-educationcenters',       require('./sections/locals-by-educationcenters').default);





// Charts
Vue.component('bar-chart',                        require('./charts/barchart/bar-chart').default);
Vue.component('line-chart',                       require('./charts/linechart/line-chart').default);
