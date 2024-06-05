<template>
    <div class="container position-relative">
        <div class="row d-flex justify-content-center">
            <div class="col-12 col-lg-8 ">
                <form @submit.prevent="id ? updateCurrent() : saveCurrent()" class="container">
                    <div class="row mt-2">
                        <div class="row justify-content-center m-0">
                            <div class="col-10 col-md-8 col-lg-7 col-xl-6 py-3 px-5 position-relative"
                                style="background-color: #e9ecef;">
                                <button type="button" class="btn-close position-absolute top-0 end-0 m-2" aria-label="Close"
                                    @click="setIsNewCurrent(false); resetPart()"></button>
                                <h3 class="text-center">{{ id ? "Update" : "Yeni Cari" }}</h3>
                                <div class="input-group justify-content-evenly">
                                    <label class="input-group-text" for="code">Cari Kodu: </label>
                                    <input class="form-control" type="text" id="code" autocomplete="off"
                                        v-model.trim="current.code" required>
                                </div>
                                <div class="input-group justify-content-evenly mt-1">
                                    <label class="input-group-text" for="name">Hastane Adı: </label>
                                    <input class="form-control" type="text" id="name" autocomplete="off"
                                        v-model.trim="current.name" required>
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
                                <div class="text-center" v-if="id">
                                    <a class="text-danger" @click.prevent="deleteCurrent" style="cursor: pointer;">Cariyi
                                        silmek
                                        için tıklayın!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="row saveAlert" v-if="isAlert">
            <div class="col-12 col-lg-8 m-auto d-flex justify-content-center">
                <div class="alert alert-primary m-0">{{ alertMessage }}</div>
            </div>
        </div>
    </div>
</template>
<script>
import { db, currentCodesCollection } from "@/firebase";
import { addDoc, updateDoc, doc, getDocs, getDoc, deleteDoc } from "firebase/firestore";
import router from "@/router";
export default {
    data() {
        return {
            current: {
                name: "",
                code: "",
                location: ""
            },
            docRef: "",
            isAlert: false,
            alertMessage: "Kayıt edildi"
        }
    },

    methods: {
        alert(message) {
            this.isAlert = true;
            this.alertMessage = message;
            setTimeout(() => {
                this.isAlert = false;
                this.resetPart();
                if (this.id) {
                    router.push("/current-codes-page")
                }
            }, 1000);
        },
        resetPart() {
            this.current = {
                name: "",
                code: "",
                location: ""
            }
        },
        saveCurrent() {
            addDoc(currentCodesCollection, {
                ...this.current
            })
            this.alert("Cari Kayıt Edildi")
        },
        updateCurrent() {
            updateDoc(this.docRef, { ...this.current })
            this.alert("Cari Güncellendi");
        },
        deleteCurrent() {
            while (true) {
                let password = prompt("Parolayı girin:");
                if (password == null) break;
                else if (password == 1234) {
                    deleteDoc(this.docRef);
                    this.alert("Cari Silindi")
                    setTimeout(() => {
                        router.push("/current-codes-page")
                    }, 1000);
                    break;
                }
            }
        },
        capitalized(content) {
            let contentArr = content.split(" ");
            let fixedArr = contentArr.map(element => {
                return element.charAt(0).toLocaleUpperCase("tr") + element.slice(1);
            });
            return fixedArr.join(" ");
        },
    },
    watch: {
        "current.name"() {
            this.current.name = this.capitalized(this.current.name.toLocaleLowerCase("tr"))
        },
        "current.code"() {
            this.current.code = this.current.code.toLocaleUpperCase("tr")
        }
    },
    created() {
        this.id = this.$route.params.partId;
        if (this.id) {
            this.docRef = doc(db, "current-codes", this.id);
            getDoc(this.docRef).then(snapshot => {
                this.current = snapshot.data()
            })
        }
    }
}
</script>
<style>
.btn-close {
    border: 2px solid #333;
    border-radius: 5px;
    padding: 5px;
}

.saveAlert {
    position: absolute;
    top: 0;
    z-index: 1;
    margin: auto;
    width: 100%;
    height: 80vh;
    background-color: rgba(157, 195, 226, 0.316);
}

.saveAlert .alert {
    width: 400px;
    line-height: 50px;
    text-align: center;
    background-color: rgb(65, 166, 255);
    color: white;
    font-size: 1.4em;
}
</style>