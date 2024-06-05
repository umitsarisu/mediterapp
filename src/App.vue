<template>
  <div>
    <NavBar class="navbar-position p-0"></NavBar>
    <router-view style="padding-left: 10px; align-content: flex-start;" v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" :key="$route.fullPath"></component>
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
export default {
  components: {
    NavBar,
  }
}
</script>

<style>
@import './general.css';

body::-webkit-scrollbar {
  width: 0 !important
}

.navbar-position {
  width: 270px;
  position: fixed;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* left: -260px; */
  background-color: #222222 !important;
}

.navbar-position:hover {
  left: 0;
  z-index: 50 !important;
}
</style>
