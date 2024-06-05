<template>
    <div class="d-flex flex-wrap">
        <form class="m-auto mt-5 p-3 shadow1" @submit.prevent="onSubmit">
            <div class="mb-1 d-flex justify-content-between" style="border-bottom: 1px solid #555;">
                <h5>Run-In Formu</h5>
                <span @click="this.isUpdate = !this.isUpdate;">
                    <i class="fa fa-edit me-2" style="cursor: pointer;" v-if="!isUpdate"></i>
                    <i class="fa fa-close me-2" style="cursor: pointer;" v-if="isUpdate"></i>
                </span>
            </div>
            <div class="d-flex flex-column justify-content-between px-3" v-if="!isUpdate">
                <input maxlength="8" minlength="8" class="form-control my-2" placeholder="Serial" required
                    autocomplete="off" v-model="serialNumber">
                <input maxlength="8" minlength="8" class="form-control my-2" placeholder="List Number" required
                    autocomplete="off" v-model="listNumber" disabled>
                <input type="submit" class="form-control btn btn-danger" value="Gönder" />
            </div>
            <div v-if="isUpdate">
                <ul class="list-group">
                    <li class="list-group-item" v-for="listNumber in listNumbers">
                        <div class="input-group justify-content-evenly">
                            <label class="input-group-text" :for="listNumber.condition">Koşul: </label>
                            <input class="form-control" type="text" :id="listNumber.condition"
                                v-model.trim="listNumber.condition" maxlength="3" required>
                        </div>
                        <div class="input-group justify-content-evenly">
                            <label class="input-group-text" :for="listNumber.listNumber">Liste Numarası: </label>
                            <input class="form-control" type="text" :id="listNumber.listNumber"
                                v-model.trim="listNumber.listNumber" required>
                        </div>
                    </li>
                </ul>
                <div class="text-center mt-2">
                    <button type="button" @click="update" class="btn btn-outline-danger">Kaydet</button>
                </div>
            </div>
        </form>
        <section class="m-auto mt-3" style="width: 700px;" v-if="deviceList.length > 0">
            <div class="mb-1">
                <h1>Pano</h1>
                <button id="yazdır3" class="btn btn-secondary"><i class="fa fa-print" aria-hidden="true"></i>
                    Yazdır</button>
                <button id="excel" class="btn btn-secondary"><i class="fa fa-file-excel-o" aria-hidden="true"></i>
                    Excel'e Aktar
                </button>
            </div>
            <PanoVue style="max-height: 300px;" class="shadow1">
                <table class="table table-striped table-bordered table-hover" style="width:99%">
                    <thead>
                        <th>No</th>
                        <th>Liste Numarası</th>
                        <th>Seri Numarası</th>
                        <th>Sil</th>
                    </thead>
                    <tbody>
                        <tr v-for="( part, i ) in  deviceList ">
                            <td style="width: 50px !important;">{{ i + 1 }}.</td>
                            <td>{{ part.listNumber }}</td>
                            <td>{{ part.serialNumber }}</td>
                            <td style="width: 50px !important;"><button class="btn btn-close btn-danger"
                                    @click="deleteSerial(part)"></button></td>
                        </tr>
                    </tbody>
                </table>
            </PanoVue>
        </section>
        <div class="row saveAlert" v-if="isAlert">
            <div class="col-12 col-lg-8 m-auto d-flex justify-content-center">
                <div class="alert alert-primary m-0">{{ alertMessage }}</div>
            </div>
        </div>
    </div>
</template>
<script>
import PanoVue from '@/components/Pano.vue'
import { db, listNumbersCollection } from "@/firebase";
import { updateDoc, doc, getDocs } from "firebase/firestore";
export default {
    data() {
        return {
            listNumbers: [],
            serialNumber: "",
            listNumber: "",
            deviceList: [],
            isUpdate: false,
            isAlert: false,
            alertMessage: ""
        }
    },
    methods: {
        onSubmit() {
            let save = true;
            this.deviceList.filter(item => {
                if (item.serialNumber == this.serialNumber) {
                    this.alert("Bu seri numarası daha önce işlendi");
                    save = false;
                }
            })
            if (save) {
                this.deviceList.push(
                    {
                        serialNumber: this.serialNumber,
                        listNumber: this.listNumber
                    }
                )
                this.serialNumber = ""
            }
        },
        deleteSerial(device) {
            this.deviceList = this.deviceList.filter((item) => item.serialNumber != device.serialNumber)
        },
        alert(message) {
            this.isAlert = true;
            this.alertMessage = message;
            setTimeout(() => {
                this.isAlert = false;
                this.serialNumber = "";
            }, 1000);
        },
        update() {
            for (let i in this.listNumbers) {
                const id = this.listNumbers[i].id;
                const docRef = doc(db, "list-numbers", id);
                updateDoc(docRef, { ...this.listNumbers[i] })
            }
            this.alert("Kayıt Edildi");
        }
    },
    components: {
        PanoVue
    },
    watch: {
        "serialNumber"() {
            if (this.serialNumber.length == 3) {
                const condition = this.serialNumber.slice(0, 3)
                this.listNumbers.map(number => {
                    if (number.condition == condition) {
                        this.listNumber = number.listNumber;
                    }
                })
            }
            else if (this.serialNumber.length < 3) {
                this.listNumber = "";
            }
        }
    },
    created() {
        getDocs(listNumbersCollection)
            .then(snapshot => {
                snapshot.docs.forEach((doc) => {
                    this.listNumbers.push({ ...doc.data(), id: doc.id })
                })
            })
    }
}
</script>
<style scoped>
form {
    width: 360px;
    border: 2px outset #999;
    border-collapse: collapse;
}

.shadow1 {
    box-shadow: 0px 1px 15px 0px #0000008e;
}

label {
    width: 130px;
}

p {
    font-size: 14px;
    margin: 0;
    padding: 0;
}

.fa-edit {
    background-color: transparent;
    color: rgb(13, 110, 253);
    font-style: italic;
}
</style>