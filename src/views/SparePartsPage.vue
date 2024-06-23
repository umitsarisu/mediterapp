<template>
  <div>
    <header style="background-color: #95afc0;" class="text-center position-relative px-2">
      <button v-if="this.$route.path.slice(1) != 'spare-parts-page'" @click="$router.push('/spare-parts-page')"
        class="nav-btn" id="backwardButton">
        <img src="@/assets/backward.png">
        <span class="text-dark">Geri</span>
      </button>
      <h1 style="line-height: 10vh;">Yedek Parçalar</h1>
    </header>
    <div class="container p-0">
      <router-view :definitions="definitions" v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      definitions: ["Kasalar", "Vidalar", "Kartlar", "Etiketler", "Kablolar", "Mekanizma", "Gasket", "Diğer"],
    }
  }
}
</script>