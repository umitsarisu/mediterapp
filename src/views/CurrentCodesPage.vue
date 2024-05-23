<template>
    <div class="row m-0 w-100" style="background-color: #95afc0; height: 100vh !important; top: 0; overflow-y: scroll;">
        <div class="col-sm-12 col-md-10 m-auto p-0">
            <div class="row">
                <div class="d-flex my-4">
                    <span class="input-group-text">Search</span>
                    <input class="form-control" type="search" v-model="searchText" placeholder="Search" aria-label="Search">
                </div>
            </div>
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
</template>
<script>
import { currentCodesCollection } from '@/firebase';
import { getDocs } from 'firebase/firestore'

export default {
    data() {
        return {
            currentCodes: [],
            searchText: "",
            fixedCurrentCode: ""
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
                console.log(this.currentCodes[0])
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
</style>