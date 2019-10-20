import Vue from 'vue'

Vue.component('nav-menu',              require('./nav-menu').default);


Vue.component('home-page',             require('./home-page').default);
Vue.component('map-page',              require('./map-page').default);
Vue.component('report-page',           require('./report-page').default);
Vue.component('sources-page',          require('./sources-page').default);
Vue.component('contact-page',          require('./contact-page').default);

// Sections
Vue.component('table-streets-by-number',          require('./sections/table-streets-by-number').default);
