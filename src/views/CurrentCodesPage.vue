<template>
    <div>
        <header style="background-color: #95afc0;" class="text-center position-relative">
            <h1 style="line-height: 10vh;">Cari Kodlar</h1>
        </header>
        <div class="container">
            <div class="bar">
                <div class="input-group mt-1">
                    <span class="input-group-text">Arama</span>
                    <input class="form-control" v-model="searchText" type="search" id="search" placeholder="Search"
                        aria-label="Search" autocomplete="off">
                </div>
                <div class="d-flex justify-content-center">
                    <button class="btn btn-warning mt-2 text-center d-block" @click='addButton'>Yeni
                        Cari Ekle</button>
                </div>
            </div>
        </div>
        <form @submit.prevent="isUpdate ? updateCurrent() : saveCurrent()" class="container">
            <div class="row mt-2" v-if="isNewCurrent">
                <div class="row justify-content-center m-0">
                    <div class="col-10 col-md-8 col-lg-7 col-xl-6 py-3 px-5 position-relative"
                        style="background-color: #e9ecef;">
                        <button type="button" class="btn-close position-absolute top-0 end-0 m-2" aria-label="Close"
                            @click="close"></button>
                        <h3 class="text-center">{{ isUpdate ? "Update" : "Yeni Cari" }}</h3>
                        <div class="input-group justify-content-evenly">
                            <label class="input-group-text" for="code">Cari Kodu: </label>
                            <input class="form-control" type="text" id="code" autocomplete="off" v-model.trim="current.code"
                                required>
                        </div>
                        <div class="input-group justify-content-evenly mt-1">
                            <label class="input-group-text" for="name">Hastane Adı: </label>
                            <input class="form-control" type="text" id="name" autocomplete="off" v-model.trim="current.name"
                                required>
                        </div>
                        <div class="input-group justify-content-evenly mt-1">
                            <label class="input-group-text" for="location">Cari Bölgesi: </label>
                            <select class="form-select" id="location" v-model="current.location" required>
                                <option value="İstanbul">İstanbul</option>
                                <option value="İzmir">İzmir</option>
                                <option value="Ankara">Ankara</option>
                            </select>
                        </div>
                        <div class="text-center mt-1">
                            <button class="btn btn-success" type="submit">Kaydet</button>
                        </div>
                        <div class="text-center" v-if="isUpdate">
                            <a class="text-danger" @click.prevent="deleteCurrent" style="cursor: pointer;">Parçayı
                                silmek
                                için tıklayın!</a>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        <div class="container">
            <div class="row" style="top: 0;" v-if="currentCodes != 0">
                <div class="col-12 col-lg-10 m-auto p-0">
                    <!-- fixed current -->
                    <div class="table-responsive-lg mt-2" v-if="fixedCurrentCode">
                        <table class="table table-fixed">
                            <tr>
                                <td colspan="4">
                                    <h6 class="p-1 m-0">Sabitlenmiş Cari</h6>
                                </td>
                            </tr>
                            <tr>
                                <th class="text-center">1.</th>
                                <td>
                                    <button type="button" @click="copy(fixedCurrentCode.code)"
                                        class="btn btn-outline-primary">Copy</button>
                                </td>
                                <td>{{ fixedCurrentCode.code }}</td>
                                <td>
                                    <button type="button" @click="copy(fixedCurrentCode.name)"
                                        class="btn btn-outline-danger">Copy</button>
                                </td>
                                <td>{{ fixedCurrentCode.name }}</td>
                            </tr>
                        </table>
                    </div>
                    <!-- all currents -->
                    <div class="table-responsive-lg mt-2">
                        <table class="table table-fixed overflow-auto">
                            <tr>
                                <th colspan="7">
                                    <h4 class="ps-3 m-0 text-start">Hastaneler</h4>
                                </th>
                            </tr>
                            <tr v-for="(currentCode, i) in filteredCurrentCodes">
                                <th class="text-center">{{ i + 1 }}.</th>
                                <td>
                                    <button type="button" @click="copy(currentCode.code)"
                                        class="btn btn-outline-primary">Copy</button>
                                </td>
                                <td>{{ currentCode.code }}</td>
                                <td><button type="button" @click="copy(currentCode.name)"
                                        class="btn btn-outline-danger">Copy</button></td>
                                <td>{{ currentCode.name }}</td>
                                <td class="ps-4" style="border-left: #fff 3px solid;">{{ currentCode.location }}</td>
                                <td class="float-end"><i class="fa fa-edit" style="cursor: pointer;"
                                        @click="update(currentCode)"></i><button type="button" class="btn btn-warning"
                                        @click="fixedCurrentCode = currentCode">Sabitle</button></td>
                            </tr>
                        </table>
                    </div>
                    <!-- For Copy Function -->
                    <div ref="reference"></div>
                </div>
            </div>
        </div>

        <div class="row saveAlert" v-if="isAlert">
            <div class="col-12 col-lg-8 m-auto d-flex justify-content-center">
                <div class="alert alert-primary m-0">Kayıt edildi</div>
            </div>
        </div>
    </div>
</template>
<script>
import { db, currentCodesCollection } from "@/firebase";

import { getDocs } from 'firebase/firestore'
import { addDoc, updateDoc, doc, getDoc, deleteDoc } from "firebase/firestore";

export default {
    data() {
        return {
            currentCodes: [],
            searchText: "",
            fixedCurrentCode: "",
            docRef: "",
            current: {
                name: "",
                code: "",
                location: ""
            },
            isNewCurrent: false,
            isUpdate: false,
            isAlert: false,
        }
    },
    computed: {
        filteredCurrentCodes() {
            const searchText = this.searchText.toLocaleLowerCase('tr')
            return this.currentCodes.filter((current) => {
                if (current.name.toLocaleLowerCase('tr').match(searchText) ||
                    current.code.toLocaleLowerCase('tr').match(searchText) ||
                    current.location.toLocaleLowerCase("tr").match(searchText)
                ) return current
            })
        }
    },
    methods: {
        copy(currentCode) {
            const storage = document.createElement('textarea');
            storage.value = currentCode;
            this.$refs.reference.appendChild(storage);
            storage.select();
            storage.setSelectionRange(0, 99999);
            document.execCommand('copy');
            this.$refs.reference.removeChild(storage);
        },
        capitalized(content) {
            let contentArr = content.split(" ");
            let fixedArr = contentArr.map(element => {
                return element.charAt(0).toLocaleUpperCase("tr") + element.slice(1);
            });
            return fixedArr.join(" ");
        },
        addButton() {
            this.isNewCurrent = true;
            this.resetPart();
            this.isUpdate = false;
        },
        resetPart() {
            this.current = {
                name: "",
                code: "",
                location: ""
            }
        },
        alert() {
            this.isAlert = true;
            setTimeout(() => {
                this.isAlert = false;
                this.resetPart();
            }, 1000);
        },
        saveCurrent() {
            addDoc(currentCodesCollection, {
                ...this.current
            })
            this.alert();
            this.reload();
        },
        update(current) {
            this.isNewCurrent = true;
            this.isUpdate = true;
            window.scrollTo(0, 0);
            this.docRef = doc(db, "current-codes", current.id);
            getDoc(this.docRef).then(snapshot => {
                this.current = snapshot.data()
            })
        },
        updateCurrent() {
            updateDoc(this.docRef, { ...this.current })
            this.alert();
            this.reload();
        },
        reload() {
            setTimeout(() => {
                location.reload()
            }, 300);
        },
        deleteCurrent() {
            while (true) {
                let password = prompt("Parolayı girin:");
                if (password == null) break;
                else if (password == 1234) {
                    deleteDoc(this.docRef);
                    this.reload();
                    break;
                }
            }
        },
        close() {
            this.isNewCurrent = false;
            this.isUpdate = false;
            this.resetPart();
        }
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
    watch: {
        "current.name"() {
            this.current.name = this.capitalized(this.current.name)
        },
        "current.code"() {
            this.current.code = this.capitalized(this.current.code)
        }
    }
}
</script>
<style scoped>
table {
    background-color: whitesmoke;
}

tr:nth-child(even) {
    background-color: #bdbcbc;
}

td {
    padding: 2px 5px;
}

td:nth-last-child(1) {
    padding: 2px 0;
}

th,
td:nth-child(even) {
    width: 50px;
}

table tr td:nth-child(3) {
    width: 100px;
    text-align: center;
}

.btn-close {
    border: 2px solid #333;
    border-radius: 5px;
    padding: 5px;
}

.fa {
    background-color: transparent;
    color: rgb(13, 110, 253);
    font-style: italic;
}

.btn {
    border-top: 0;
    border-bottom: 0;
}

.bar {
    background-color: #bea7a4;
    padding: 5px;
    border-radius: 5px;
}

.saveAlert {
    position: absolute;
    top: 0;
    z-index: 1;
    margin: auto;
    width: 100%;
    height: 90%;
    background-color: rgba(157, 195, 226, 0.316);
}

.saveAlert .alert {
    width: 400px;
    line-height: 50px;
    text-align: center;
    background-color: rgb(65, 166, 255);
    color: white;
    font-size: 1.4em;
}</style>