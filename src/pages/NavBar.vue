<template>
    <aside>
        <ul class="nav flex-column ps-1">
            <router-link v-for="item in items" active-class="active" exact :key="item.name" tag="li" :to="item.to"
                :class="item.linkClass">
                <a :class="aClasses">
                    <i :class="[item.iClass]" aria-hidden="true"></i>
                    <span :class="item.spanClass">{{ item.name }}</span></a>
            </router-link>
            <li>
                <a data-bs-toggle="modal" data-bs-target="#copyPasteModal" class="nav-link text-white"
                    @click="setActiveComponent('RandomValueGenerator')">
                    <i class="fa fa-random fa-lg fa-fw ms-2 me-2"></i>Rastgele Değer Üretici</a>
            </li>
            <li>
                <a data-bs-toggle="modal" data-bs-target="#copyPasteModal" class="nav-link text-white"
                    @click="setActiveComponent('MagnifyingGlass')">
                    <i class="fa fa-search fa-lg fa-fw ms-2 me-2"></i>Büyüteç</a>
            </li>
        </ul>
    </aside>
</template>
<script>
export default {
    data() {
        return {
            aClasses: "nav-link text-white",
            activeComponent: "MagnifyingGlass",
            items: [
                {
                    to: "/",
                    linkClass: "ms-0 mt-2 nav-item",
                    iClass: "fas fa-home fa-2x fa-fw",
                    spanClass: "fs-2",
                    name: "Anasayfa",
                },
                {
                    to: "/copy-paste",
                    linkClass: "ms-2 nav-link text-white",
                    iClass: "fa fa-copy fa-lg fa-fw ms-2",
                    spanClass: "",
                    name: "Kopyala Yapıştır",
                },
                {
                    to: "/spare-parts-page",
                    linkClass: "",
                    iClass: "fa fa-wrench fa-lg fa-fw ms-2 me-2",
                    spanClass: "",
                    name: "Yedek Parçalar",
                },
                {
                    to: "/current-codes-page",
                    linkClass: "",
                    iClass: "fa fa-vcard fa-lg fa-fw ms-2 me-2",
                    spanClass: "",
                    name: "Cari Kodlar",
                },
                {
                    to: "/device-register-form",
                    linkClass: "",
                    iClass: "fa fa-file-text-o fa-lg fa-fw ms-2 me-2",
                    spanClass: "",
                    name: "Cihaz Kayıt Formu",
                },
                {
                    to: "/run-in-form",
                    linkClass: "",
                    iClass: "fa fa-file-text-o fa-lg fa-fw ms-2 me-2",
                    spanClass: "",
                    name: "Run-In Formu",
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
<style>
aside li {
    display: flex;
    border-bottom: 1px solid gray;
    margin: 0 10px 0 24px;
}

.nav-link {
    padding-left: 0;
}

a {
    text-decoration: none;
}

.active {
    background-color: rgb(232, 48, 48);
}
</style>