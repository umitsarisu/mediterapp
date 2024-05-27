<template>
    <div class="mb-3">
        <div class="container">
            <div class="bar">
                <div class="input-group">
                    <span class="input-group-text">Filtrele</span>
                    <select class="form-select" id="filter" v-model="selectedDefinition">
                        <option selected value="Bütün Parçalar">Bütün Parçalar</option>
                        <option v-for="definition in definitions" :value="definition">{{
                            definition }}</option>
                    </select>
                </div>
                <div class="input-group mt-1">
                    <span class="input-group-text">Arama</span>
                    <input class="form-control" v-model="searchText" type="search" id="search" placeholder="Search"
                        aria-label="Search" autocomplete="off">
                </div>
                <div class="d-flex justify-content-center">
                    <router-link class="btn btn-warning mt-2 text-center d-block" :to="'/new-part'">Yeni
                        Parça Ekle</router-link>
                </div>
            </div>
        </div>
        <div class="container d-flex flex-wrap justify-content-around mt-2">
            <div class="card shadow" v-for="sparePart in filteredSpareParts">
                <div class="card-body">
                    <div class="text-center ">
                        <img :src="sparePart.imgUrl" class="card-img-top img img-thumbnail" :alt="sparePart.alt">
                        <h3 class="partName align-content-center text-dark">{{ sparePart.name }}</h3>
                        <p class="fw-bold" name="ydkCode">{{ sparePart.code }}</p>
                        <hr>
                        <p name="ydkCode">{{ sparePart.model }}</p>
                        <p> {{ sparePart.explanation }}</p>
                    </div>
                </div>
                <div class="card-footer d-flex justify-content-between" name="ydkDefinition">
                    {{ sparePart.definition }}
                    <router-link :to="`update/${sparePart.id}`"><i class="fa fa-edit"
                            style="cursor: pointer;"></i></router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { sparePartsCollection } from '@/firebase';
import { getDocs } from 'firebase/firestore'

export default {
    data() {
        return {
            searchText: "",
            partList: [],
            spareParts: [],
            fixingPart: null,
            selectedDefinition: "Bütün Parçalar",
            definitions: ["Kasalar", "Vidalar", "Kartlar", "Etiketler", "Kablolar", "Diğer"]
        }
    },
    computed: {
        filteredSpareParts() {
            if (this.searchText) {
                const searchText = this.searchText.toLocaleLowerCase('tr')
                return this.spareParts.filter((part) => {
                    if (part.name.toLocaleLowerCase('tr').match(searchText) ||
                        part.code.toLocaleLowerCase('tr').match(searchText) ||
                        part.explanation.toLocaleLowerCase('tr').match(searchText)
                    ) return part
                })
            }
            if (this.selectedDefinition) {
                return this.spareParts.filter((part) => {
                    if (this.selectedDefinition == "Bütün Parçalar") return part;
                    else if (part.definition == this.selectedDefinition) return part;
                })
            }
        },
    },
    methods: {
        capitalized(content) {
            let contentArr = content.split(" ");
            let fixedArr = contentArr.map(element => {
                return element.charAt(0).toLocaleUpperCase("tr") + element.slice(1);
            });
            return fixedArr.join(" ");
        }
    },
    watch: {
        searchText() {
            this.searchText = this.capitalized(this.searchText.toLocaleLowerCase("tr"))
        },
    },
    mounted() {
        getDocs(sparePartsCollection)
            .then(snapshot => {
                const docsLength = snapshot.docs.length;
                snapshot.docs.forEach((doc, i) => {
                    //veritabanındaki referans veriyi atlamak için index 1 den başlıyor
                    if (i != docsLength - 1) this.spareParts.push({ ...doc.data(), id: doc.id })
                })
            })
    }
}
</script>
<style scoped>
.container {
    padding: 0;
}

span {
    width: 100px;
}

.partName {
    /* color: #34495e; */
    text-shadow: #4c0000 1px 1px 2px;
    /* padding: 15px; */
    height: 60px;
    font-size: 1.4em;
    border: #ddd 1px solid;
    border-radius: 10px;
    background-color: rgb(219, 218, 218);
}

.fw-bold {
    margin-bottom: 0;
}

.fw-normal {
    height: 50px;
    margin: 0;
}

hr {
    margin: 5px;
}
.fa{
    font-style: italic;
}
.bar {
    background-color: #bea7a4;
    padding: 5px;
    border-radius: 5px;
}

.card {
    width: 202px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background-color: #edeeee;
    margin-bottom: 5px;
}

.img {
    width: 200px !important;
    height: 200px !important;
}


.card .card-body {
    padding: 0;
}

.card input[type="number"] {
    width: 60px;
    margin-left: 5px;
}

.card .card-text {
    padding: 10px 5px;
    margin: 0;
}
</style>