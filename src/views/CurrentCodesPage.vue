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
                    <button class="btn btn-warning mt-2 text-center d-block" @click='isNewPart = !isNewPart'>Yeni
                        Parça Ekle</button>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row" v-if="isNewPart">
                <div class="row justify-content-center m-0 pb-3">
                    <div class="col-10 col-md-8 col-lg-7 col-xl-6">
                        <div class="input-group justify-content-evenly">
                            <label class="input-group-text" for="name">Cari Kodu: </label>
                            <input class="form-control" type="text" id="name" v-model.trim="current.code" required>
                        </div>
                        <div class="input-group justify-content-evenly">
                            <label class="input-group-text" for="code">Hastane Adı: </label>
                            <input class="form-control" type="text" id="code" v-model.trim="current.name" required>
                        </div>
                        <div class="input-group justify-content-evenly">
                            <label class="input-group-text" for="code">Cari Bölgesi: </label>
                            <input class="form-control" type="text" id="code" v-model.trim="current.location" required>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row m-0 w-100" style="top: 0; overflow-y: scroll;">
            <div class="col-sm-12 col-md-10 m-auto p-0">

                <div class="table-responsive-lg" v-if="fixedCurrentCode">
                    <table class="table table-fixed overflow-auto">
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
                <div class="table-responsive-lg">
                    <table class="table table-fixed overflow-auto">
                        <tr>
                            <th colspan="5">
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
                            <td><button type="button" class="btn btn-warning"
                                    @click="fixedCurrentCode = currentCode">Sabitle</button></td>
                        </tr>
                    </table>
                </div>
                <!-- For Copy Function -->
                <div ref="reference"></div>
            </div>
        </div>
    </div>
</template>
<script>
import { currentCodesCollection } from '@/firebase';
import { getDocs } from 'firebase/firestore'

export default {
    data() {
        return {
            currentCodes: [],
            searchText: "",
            fixedCurrentCode: "",
            current: {
                name: "",
                code: "",
                location: ""
            },
            isNewPart: false
        }
    },
    computed: {
        filteredCurrentCodes() {
            const searchText = this.searchText.toLocaleLowerCase('tr')
            return this.currentCodes.filter((part) => {
                if (part.name.toLocaleLowerCase('tr').match(searchText) ||
                    part.code.toLocaleLowerCase('tr').match(searchText)
                ) return part
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
        }
    },
    created() {
        getDocs(currentCodesCollection)
            .then(snapshot => {
                const docsLength = snapshot.docs.length;
                snapshot.docs.forEach((doc, i) => {
                    //veritabanındaki referans veriyi atlamak için index 1 den başlıyor
                    if (i != docsLength - 1) this.currentCodes.push({ ...doc.data(), id: doc.id })
                })
            })
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

th,
td:nth-child(even) {
    width: 50px;
}

table tr td:nth-child(3) {
    width: 100px;
    text-align: center;
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
</style>