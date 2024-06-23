<template>
    <div>
        <header style="background-color: #95afc0;"
            class="text-center position-relative d-flex justify-content-md-center px-4"
            :class="[this.$route.path.slice(1) == 'copy-paste-page' ? 'justify-content-end, pe-4' : 'justify-content-end']">
            <button v-if="this.$route.path.slice(1) == 'copy-paste-page/result-page'"
                @click="this.$router.push('/copy-paste-page')" class="nav-btn" id="backwardButton">
                <img src="@/assets/backward.png">
                <span class="text-dark">Geri</span>
            </button>
            <h1 style="line-height: 10vh;" class="float-end float-md-none m-0">
                Kopyala-Yapıştır</h1>
            <button v-if="this.$route.path.slice(1) == 'copy-paste-page'"
                @click="this.$router.push('/copy-paste-page/result-page')" class="nav-btn" id="forwardButton">
                <span class="text-dark me-2">Sonuç</span>
                <img src="@/assets/forward.png">
            </button>
        </header>
        <router-view v-slot="{ Component }">
            <keep-alive>
                <component :is="Component" />
            </keep-alive>
        </router-view>
    </div>
</template>
<script>
export default {
    data() {
        return {
        }
    }
}
</script>
