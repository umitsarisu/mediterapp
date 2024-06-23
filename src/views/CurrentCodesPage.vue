<template>
    <div>
        <header style="background-color: #95afc0;" class="text-center position-relative px-2">
            <button v-if="this.$route.path.slice(1) != 'current-codes-page'" @click="$router.push('/current-codes-page')"
                class="nav-btn" id="backwardButton">
                <img src="@/assets/backward.png">
                <span class="text-dark">Geri</span>
            </button>
            <h1 style="line-height: 10vh;">Cari Kodlar</h1>
        </header>
        <div class="container">
            <router-view v-slot="{ Component }">
                <keep-alive>
                    <component :is="Component" />
                </keep-alive>
            </router-view>
        </div>
    </div>
</template>