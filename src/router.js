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
  ]
})