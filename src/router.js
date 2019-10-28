import Vue from 'vue'
import Router from 'vue-router'
require('./components')

Vue.use(Router)

let ComponentFactory = function(htmltag){
    return { template: '<'+htmltag+'></'+htmltag+'>' }
}

export default new Router({
  routes: [
    { path: '/',                           component: ComponentFactory('home-page'),        name: 'home'},
    { path: '/mapa',                       component: ComponentFactory('map-page'),         name: 'map'},
    { path: '/mapa-frame',                 component: ComponentFactory('map-page'),         name: 'iframe'},
    { path: '/datos',                      component: ComponentFactory('data-page'),        name: 'data'},
    { path: '/informe',                    component: ComponentFactory('report-page'),      name: 'report'},
    { path: '/propuestas',                 component: ComponentFactory('proposal-page'),    name: 'proposal'},
    { path: '/metodologia',                component: ComponentFactory('sources-page'),     name: 'sources'},
    { path: '/contacto',                   component: ComponentFactory('contact-page'),     name: 'contact'},
  ]
})