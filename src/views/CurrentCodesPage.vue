<template>
    <div>
        <header style="background-color: #95afc0;" class="text-center position-relative">
            <button v-if="this.$route.path.slice(1) != 'current-codes-page'" @click="$router.push('/current-codes-page')"
                class="nav-btn" id="backwardButton">
                <img src="@/assets/backward.png">
                <span class="text-dark">Geri</span>
            </button>
            <h1 style="line-height: 10vh;">Cari Kodlar</h1>
        </header>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        currentRouteName() {
            return this.$route.name;
        }
    }
}
</script>
<style scoped>
#backwardButton {
    position: absolute;
    top: 0;
    left: 0;
    background-color: transparent;
    height: 100%;
    padding: 3px;
    border: 2px solid transparent;
    border-radius: 10px;
    box-sizing: border-box;
    margin-left: 10px;
}

#backwardButton:hover {
    background-color: rgba(128, 128, 128, 0.5);
}

#backwardButton:active {
    border: 2px coral solid;
}

#backwardButton img {
    width: 5vh;
    padding: 0;
    cursor: pointer;
}

#backwardButton span {
    line-height: 5vh;
    font-size: 1.2em;
    font-weight: bold;
    color: #212529;
    text-shadow: #4c0000 1px 1px 2px;

}
</style>