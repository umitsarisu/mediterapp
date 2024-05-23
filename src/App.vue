<template>
  <div>
    <NavBar class="navbar-position p-0"></NavBar>
    <keep-alive>
      <router-view style="padding-left: 10px; align-content: flex-start;"></router-view>
    </keep-alive>
    <ModalVue>
      <ContextVue></ContextVue>
    </ModalVue>
  </div>
</template>

<script>
import NavBar from './pages/NavBar.vue';
// import ModalVue from './pages/Modal.vue';
//From Copy Paste
// import ContextVue from './pages/copy-paste/main/modal-contents/Context.vue';
// //From Nav Bar
// import MagnifyingGlass from './pages/forms/MagnifyingGlass.vue';
// import RandomValueGenerator from './pages/forms/RandomValueGenerator.vue';
export default {
  created() {
    // this.$store.dispatch("getData")
  },
  components: {
    // Navbar Component
    NavBar,
    // Modal Components From Copy Paste
    // ModalVue,
    // ContextVue,
    // // Modal Components From Navbar
    // MagnifyingGlass,
    // RandomValueGenerator
  }
}
</script>

<style>
body::-webkit-scrollbar {
  width: 0 !important
}

.navbar-position {
  width: 270px;
  position: fixed;
  height: 100%;
  display: flex;
  flex-direction: column;
  left: -260px;
  background-color: #222222 !important;
}

.navbar-position:hover {
  left: 0;
  z-index: 50 !important;
}
</style>
