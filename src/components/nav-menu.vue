<template>
    <div class="menu">
        <div class="menu__wrap">
            <div class="menu__items">
                <div class="menu__itemswrap">
                    <ul>
                        <li><router-link :to="{name:'report'}">Informe</router-link></li>
                        <li><router-link :to="{name:'map'}">Mapa</router-link></li>
                        <li><router-link :to="{name:'map'}">Contacto</router-link></li>
                    </ul>
                </div>
            </div>
            <div class="menu__launcher">
                <img class="hamburguer" src="/static/img/icons/menu.svg" alt="Menu">
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'nav-menu'
}
</script>