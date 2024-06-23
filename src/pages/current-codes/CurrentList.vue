<template>
    <div class="row">
        <!-- Filter -->
        <div class="bar">
            <div class="input-group">
                <span class="input-group-text">Filtrele</span>
                <select class="form-select" id="filter" v-model="selectedLocation">
                    <option selected value="Bütün Cariler">Bütün Cariler</option>
                    <option value="İstanbul">İstanbul</option>
                    <option value="İzmir">İzmir</option>
                    <option value="Ankara">Ankara</option>
                </select>
            </div>
            <div class="input-group mt-1">
                <span class="input-group-text">Arama</span>
                <input class="form-control" v-model="searchText" type="search" id="search" placeholder="Search"
                    aria-label="Search" autocomplete="off">
            </div>
            <div class="d-flex justify-content-center">
                <router-link class="btn btn-warning mt-2 text-center d-block" :to="'/current-codes-page/new-current'">Yeni
                    Cari Ekle</router-link>
            </div>
        </div>
        <!-- Fixed Current -->
        <div class="col-12 col-lg-10 m-auto p-0 mt-3 mb-2 shadow1" v-if="fixedCurrent">
            <h4 class="ps-3 m-0 d-block border1">Sabitlenmiş Cari</h4>
            <div class="d-flex striped justify-content-between flex-wrap">
                <div class="d-flex justify-content-between">
                    <h5 style="width: 40px;" class="text-center line-height m-0">1.</h5>
                    <button type="button" @click="copy(fixedCurrent.code)" class="btn btn-outline-primary">Copy</button>
                    <span style="width: 100px;" class="text-center line-height">{{ fixedCurrent.code }}</span>
                    <button type="button" @click="copy(fixedCurrent.name)" class="btn btn-outline-danger">Copy</button>
                    <span class="line-height text-start ms-3">{{ fixedCurrent.name }}</span>
                </div>
                <div class="d-flex justify-content-between float-end" style="width: 300px;">
                    <span class="ps-4 line-height" style="border-left: #eee 3px solid;">
                        {{ fixedCurrent.location }}</span>
                </div>
            </div>
        </div>
        <!-- Current List -->
        <div class="col-12 col-lg-10 m-auto p-0 mt-3 mb-4 shadow1">
            <h4 class="ps-3 m-0 border1">Hastaneler</h4>
            <div class="row striped m-0" v-for="(currentCode, i) in filteredCurrentCodes">
                <div class="col-12 col-md-8 p-0 d-flex overflow-hidden">
                    <div class="d-flex">
                        <h5 style="width: 40px;" class="text-center line-height m-0">{{ i + 1 }}.</h5>
                        <button type="button" @click="copy(currentCode.code)"
                            class="btn mtb-0 btn-outline-primary">Copy</button>
                        <span style="width: 100px;" class="text-center line-height">{{ currentCode.code }}</span>
                        <button type="button" @click="copy(currentCode.name)"
                            class="btn mtb-0 btn-outline-danger">Copy</button>
                    </div>
                    <div>
                        <span style="white-space: nowrap;" class="line-height text-start ms-3">{{
                            currentCode.name }}</span>
                    </div>
                </div>
                <div class="d-none d-md-flex col-md-4 p-0 justify-content-between">
                    <span class="ps-4 line-height" style="border-left: #eee 3px solid;">
                        {{ currentCode.location }}</span>
                    <div>
                        <router-link :to="`/current-codes-page/update/${currentCode.id}`">
                            <i class="fa fa-edit me-2" style="cursor: pointer;"></i>
                        </router-link>
                        <button type="button" class="btn btn-outline-warning"
                            @click="fixCurrent(currentCode)">Sabitle</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { db, currentCodesCollection } from "@/firebase";
import { addDoc, updateDoc, doc, getDocs, getDoc, deleteDoc } from "firebase/firestore";
import CurrentList from "@/pages/current-codes/CurrentList"
import NewCurrent from "@/pages/current-codes/NewCurrent"
export default {
    data() {
        return {
            currentCodes: [],
            current: [],
            selectedLocation: "Bütün Cariler",
            searchText: "",
            fixedCurrent: "",
            docRef: "",
            isNewCurrent: false,
            isAlert: false,
            isUpdate: false,
        }
    },
    components: {
        CurrentList,
        NewCurrent
    },
    computed: {
        filteredCurrentCodes() {
            if (this.searchText) {
                const searchText = this.searchText.toLocaleLowerCase('tr')
                return this.currentCodes.filter((current) => {
                    if (current.name.toLocaleLowerCase('tr').match(searchText) ||
                        current.code.toLocaleLowerCase('tr').match(searchText) ||
                        current.location.toLocaleLowerCase("tr").match(searchText)
                    ) return current
                })
            }
            if (this.selectedLocation) {
                return this.currentCodes.filter((current) => {
                    if (this.selectedLocation == "Bütün Cariler") return current;
                    else if (current.location == this.selectedLocation) return current;
                })
            }
        }
    },
    methods: {
        fixCurrent(currentCode) {
            this.fixedCurrent = currentCode;
            console.log(currentCode)
            console.log(this.fixedCurrent)
        },
        copy(currentCode) {
            let text = document.createElement("textarea");
            document.body.appendChild(text);
            text.value = currentCode;
            text.select();
            document.execCommand("copy");
            document.body.removeChild(text);
        },
        setIsNewCurrent(payload) {
            this.isNewCurrent = payload;
        },
        alert() {
            this.isAlert = true;
            setTimeout(() => {
                this.isAlert = false;
            }, 1000);
        },
        update(currentCode) {
            this.isUpdate = true;
            this.isNewCurrent = true;
            window.scrollTo(0, 0);
            this.docRef = doc(db, "current-codes", currentCode.id);
            getDoc(this.docRef).then(snapshot => {
                this.current = snapshot.data()
            })
        },
    },
    created() {
        getDocs(currentCodesCollection)
            .then(snapshot => {
                snapshot.docs.forEach((doc) => {
                    //veritabanındaki referans veriyi atlamak için if
                    if (doc.data().name != "") this.currentCodes.push({ ...doc.data(), id: doc.id })
                })
            })
    },
}
</script>
<style scoped>
.mtb-0 {
    border-top: 0;
    border-bottom: 0;
}

.bar {
    background-color: #bea7a4;
    padding: 5px;
    border-radius: 5px;
}

h4 {
    background-color: white;
    line-height: 40px;
}

button {
    margin: 1px;
    background-color: white;
}

.line-height {
    line-height: 40px;
}

.striped:nth-child(even) {
    background-color: #c7c7c7;
}

.border1 {
    border-bottom: 1px solid salmon;
}

.shadow1 {
    box-shadow: 0px 1px 15px 0px #0000008e;
}

.fa {
    background-color: transparent;
    color: rgb(13, 110, 253);
    font-style: italic;
}
</style>
