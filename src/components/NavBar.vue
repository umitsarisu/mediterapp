<template>
    <aside>
        <router-link active-class="active" exact class="ml-1 mt-2 text-white" tag="li" :to="'/'">
            <i class="fas fa-home fa-2x fa-fw" aria-hidden="true"></i>
            <span class="fs-3 ms-1">Anasayfa</span></router-link>
        <hr>
        <ul class="nav flex-column">
            <li class="nav-item ms-2">
                <router-link active-class="active" exact class="nav-link text-white" :to="'/copy-paste-page'">
                    <i class="fa fa-copy fa-lg fa-fw ms-2"></i>
                    Kopyala Yapıştır
                </router-link>
            </li>
            <li>
                <router-link active-class="active" exact class="nav-link text-white" :to="'/spare-parts-page'">
                    <i class="fa fa-wrench fa-lg fa-fw ms-2 me-2"></i>Yedek Parçalar
                </router-link>
            </li>
            <li>
                <router-link active-class="active" exact class="nav-link text-white" :to="'/current-codes-page'">
                    <i class="fa fa-vcard fa-lg fa-fw ms-2 me-2"></i>Cari Kodlar
                </router-link>
            </li>
            <li>
                <router-link active-class="active" exact class="nav-link text-white" :to="'/run-in-page'">
                    <i class="fa fa-file-text-o fa-lg fa-fw ms-2 me-2"></i>Run-In Formu
                </router-link>
            </li>
            <li>
                <router-link active-class="active" exact class="nav-link text-white" :to="'/random-value-generator'">
                    <i class="fa fa-random fa-lg fa-fw ms-2 me-2"></i>Rastgele Değer Üretici
                </router-link>
            </li>
            <li>
                <router-link active-class="active" exact class="nav-link text-white" :to="'/magnifying-glass'">
                    <i class="fa fa-search fa-lg fa-fw ms-2 me-2"></i>Büyüteç
                </router-link>
            </li>
        </ul>
    </aside>
</template>
<script>
export default {
    data() {
        return {
            activeComponent: "MagnifyingGlass",
            items: [
                {
                    to: "/",
                    linkClass: "ms-1 mt-2 nav-item nav-link text-white p-0",
                    iClass: "fas fa-home fa-2x fa-fw",
                    spanClass: "fs-2",
                    name: "Anasayfa",
                },
                {
                    to: "/copy-paste",
                    linkClass: "nav-item ms-2 nav-link text-white",
                    iClass: "fa fa-copy fa-lg fa-fw ms-2",
                    spanClass: "",
                    name: "Kopyala Yapıştır",
                },
                {
                    to: "/sign-up",
                    linkClass: "",
                    iClass: "fa fa-vcard fa-lg fa-fw ms-2 me-2",
                    spanClass: "",
                    name: "sign-up",
                }
            ]
        }
    },
    methods: {
        setActiveComponent(component) {
            this.$store.commit("setActiveModalComponent", component)
        }
    }
}
</script>
<style scoped>
hr {
    margin: 10px 0;
}

.active {
    background-color: rgb(232, 48, 48);
}

aside {
    width: 270px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    color: white;
    background-color: #222222;
    position: fixed;
    top: 0;
    left: -260px;
}

aside li {
    display: flex;
    border-bottom: 1px solid gray;
    margin: 0 10px 0 24px;
}

.nav-link {
    padding-left: 0;
}

aside a {
    text-decoration: none;
    height: auto;
    width: 100%;
}
</style>