<template>
  <div>
    <header style="background-color: #95afc0;" class="text-center position-relative">
      <button v-if="this.$route.path.slice(1) != 'spare-parts-page'" @click="$router.push('/spare-parts-page')" class="nav-btn" id="backwardButton">
        <img src="@/assets/backward.png" class="nav-img">
        <span class="text-dark">Geri</span>
      </button>
      <h1 style="line-height: 10vh;">Yedek Parçalar</h1>
    </header>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import router from '@/router';
export default {
  data() {
    return {
    }
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  }
}
</script>
<style scoped>
.nav-btn {
    background-color: transparent;
    height: 100%;
    padding: 3px;
    border: 2px solid transparent;
    border-radius: 10px;
    box-sizing: border-box;
    margin-left: 10px;
}

.nav-btn:hover {
    background-color: rgba(128, 128, 128, 0.5);
}

.nav-btn:active {
    border: 2px coral solid;
}

#backwardButton {
    position: absolute;
    top: 0;
    left: 0;
}
.nav-img {
    width: 5vh;
    padding: 0;
    cursor: pointer;
}

h2 {
    display: inline-block;
    font-size: 1.6rem;
    line-height: 7vh;
    margin: 0;
    text-shadow: 2px 2px 5px white;
}

span {
    line-height: 5vh;
    font-size: 1.2em;
    font-weight: bold;
    color: #212529;
    text-shadow: #4c0000 1px 1px 2px;

}
</style>
