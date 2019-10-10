<template>
  <div id="app">
    <nav-menu></nav-menu>
    <transition name="fade" mode="out-in">
        <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import EventBus from './bus'
export default {
  name: 'App',
}
</script>