<template>
    <form class=" lr-white-border bottom-white-border overflow-scroll">
        <div class="px-2 pt-1">
            <div class="text-center w-100">
                <div class="modal-header flex-column">
                    <h4 class="py-1">Yedek Parçalar</h4>
                    <div class="input-group my-2">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Search</span>
                        </div>
                        <input class="form-control" type="search" v-model="searchText" placeholder="Search"
                            aria-label="Search">
                    </div>
                </div>
                <div class="modal-body contentBgColor">
                    <SparePartsVue v-for="part in filteredSpareParts" :key="part.code" :part="part">
                    </SparePartsVue>
                </div>
            </div>
        </div>
    </form>
</template>
<script>
import SparePartsVue from "./SpareParts.vue";
import { sparePartsCollection } from '@/firebase';
import { getDocs } from 'firebase/firestore'
export default {
    data() {
        return {
            searchText: "",
            spareParts: []
        }
    },
    components: {
        SparePartsVue,
    },
    computed: {
        filteredSpareParts() {
            const searchText = this.searchText.toLocaleLowerCase('tr');
            return this.spareParts.filter((part) => {
                if (part.name.toLocaleLowerCase('tr').match(searchText) ||
                    part.code.toLocaleLowerCase('tr').match(searchText) ||
                    part.explanation.toLocaleLowerCase('tr').match(searchText)
                ) return part
            })
        }
    },
    mounted() {
        getDocs(sparePartsCollection)
            .then(snapshot => {
                const docsLength = snapshot.docs.length;
                snapshot.docs.forEach((doc, i) => {
                    //veritabanındaki referans veriyi atlamak için index 1 den başlıyor
                    if (i != docsLength - 1) this.spareParts.push({ ...doc.data(), id: doc.id, activeClass: "bg-light" })
                })
            })
    }
}
</script>