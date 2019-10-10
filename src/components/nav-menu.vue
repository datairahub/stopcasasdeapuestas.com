<template>
    <div class="menu">
        <div class="menu__wrap">
            <div class="menu__items">
                <div class="menu__logo">
                    <router-link :to="{name:'home'}">
                        <img src="/static/logo.svg" alt="Stop Casas de Apuestas Logo">
                    </router-link>
                </div>
                <div class="menu__itemswrap" :class="{'is-active': active}">
                    <ul>
                        <li class="home"><router-link :to="{name:'home'}">Inicio</router-link></li>
                        <li class="report"><router-link :to="{name:'report'}">Informe</router-link></li>
                        <li class="map"><router-link :to="{name:'map'}">Mapa</router-link></li>
                        <li class="contact"><router-link :to="{name:'contact'}">Contacto</router-link></li>
                    </ul>
                </div>
            </div>
            <div class="menu__launcher">
                <img class="hamburguer" src="/static/img/icons/menu.svg" alt="Abrir menu" v-show="!active" @click="active=true">
                <img class="close" src="/static/img/icons/close.svg" alt="Cerrar menu" v-show="active" @click="active=false">
            </div>
        </div>
        <div class="menu__overlay" :class="{'is-active': active}" @click="active=false"></div>
    </div>
</template>


<script>
export default {
    name: 'nav-menu',
    data: function(){
        return {
            active: false,
        }
    },
    watch: {
        $route(to){
            this.active = false;
        }
    }
}
</script>