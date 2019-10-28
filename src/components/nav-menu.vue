<template>
    <div class="menu">
        <div class="menu__wrap" v-show="$route.name != 'iframe'">
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
                        <li class="proposal"><router-link :to="{name:'proposal'}">Propuestas</router-link></li>
                        <li class="sources"><router-link :to="{name:'sources'}">Metodología</router-link></li>
                        <li class="map"><router-link :to="{name:'map'}">Mapa</router-link></li>
                        <li class="sources"><router-link :to="{name:'data'}">Datos</router-link></li>
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


<style lang="scss">
.menu {
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    width: 100%;
    background: white;
    box-shadow: 0 1px 3px rgba(0,0,0,0.3);
    a {
        color: inherit;
    }
    &__overlay {
        width: 100%;
        height: calc(100% - 40px);
        background: rgba(0,0,0,0.8);
        top: 40px;
        left: 0;
        position: fixed;
        z-index: -1;
        opacity: 0;
        transition: opacity 200ms ease;
        pointer-events: none;
        &.is-active {
            opacity: 1;
            pointer-events: all;
        }
    }
    &__wrap {
        padding: 10px;
        display: flex;
    }
    &__items {
        flex: 1 0 auto;
        line-height: 0;
    }
    &__logo {
        line-height: 0;
        display: inline-block;
        vertical-align: top;
        img {
            height: 20px;
            width: auto;
        }
    }
    &__itemswrap {
        display: none;
        top: 40px;
        right: 10px;
        position: absolute;
        background: white;
        z-index: 0;
        box-shadow: 0 2px 3px rgba(0,0,0,0.3);
        text-align: right;
        &.is-active {
            display: block;
        }
        li {
            display: block;
            line-height: 1;
            a {
                display: block;
                padding: 10px 16px;
            }
        }
    }
    &__launcher {
        flex: 0 0 20px;
        width: 20px;
        height: 20px;
        box-sizing: border-box;
        line-height: 0;
        img {
            padding: 3px;
            width: 14px;
            height: auto;
            display: inline-block;
            vertical-align: top;
            cursor: pointer;
            transition: opacity 200ms ease;
            &:hover {
                opacity: 0.6;
            }
        }
    }
}

@media only screen and (min-width: 768px) {
    .menu {
        &__overlay,
        &__launcher {
            display: none;
        }
        &__itemswrap {
            display: inline-block !important;
            vertical-align: top;
            position: static;
            background: transparent;
            box-shadow: none;
            text-align: left;
            top: unset;
            right: unset;
            z-index: unset;
            ul {
                display: block;
                padding-left: 10px;
            }
            li {
                display: inline-block;
                &.home {
                    display: none;
                }
                a {
                    padding: 0 10px;
                    line-height: 20px;
                }
            }
        }
    }
}
</style>