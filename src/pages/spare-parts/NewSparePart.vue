<template>
    <div class="container position-relative">
        <div class="row d-flex justify-content-center">
            <div class="col-12 col-lg-8 ">
                <form class="pt-1" @submit.prevent="this.id ? updatePart() : savePart()">
                    <i v-if="!this.sparePart.imgUrl" class="fa fa-wrench fa-5x text-center img-thumbnail shadow"
                        style="line-height: 200px;"></i>
                    <img v-if="this.sparePart.imgUrl" :src="this.sparePart.imgUrl" :alt="'(' + sparePart.name + ')'"
                        class="rounded mx-auto d-block img-thumbnail shadow">
                    <div class="row justify-content-center m-0 pb-3">
                        <div class="col-10 col-md-8 col-lg-7 col-xl-6">
                            <div class="input-group mt-2">
                                <input type="file" class="form-control" ref="file1" :accept="[' image/jpeg', 'image/png']"
                                    @change="setImageUrl" @click="error = ''" :required="!this.id">
                            </div>
                            <div v-if="error" class="alert alert-danger text-center mt-2" role="alert">
                                {{ error }}
                            </div>
                            <hr>
                            <div class="input-group justify-content-evenly">
                                <label class="input-group-text" for="name">Parça Adı: </label>
                                <input class="form-control" type="text" id="name" v-model.trim="sparePart.name" required>
                            </div>
                            <div class="input-group justify-content-evenly">
                                <label class="input-group-text" for="code">Stok Kodu: </label>
                                <input class="form-control" type="text" id="code" v-model.trim="sparePart.code" required
                                    @dblclick="copy">
                            </div>
                            <div class="input-group justify-content-evenly">
                                <label class="input-group-text" for="model">Cihaz Modeli: </label>
                                <select class="form-select" id="model" v-model="sparePart.model" required>
                                    <option value="Ortak">Ortak</option>
                                    <option value="Plum A">Plum A</option>
                                    <option value="Plum 360">Plum 360</option>
                                </select>
                            </div>
                            <div class="input-group justify-content-evenly">
                                <label class="input-group-text" for="definition">Tanım: </label>
                                <select class="form-select" id="definition" v-model="sparePart.definition" required>
                                    <option v-for="  definition   in   definitions  " :value="definition">{{ definition }}
                                    </option>
                                </select>
                            </div>
                            <div class="input-group justify-content-evenly">
                                <label class="input-group-text" for="explanation">Açıklama: </label>
                                <input class="form-control" type="text" id="explanation"
                                    v-model.trim.capitalize="sparePart.explanation" required>
                            </div>
                            <ul class="list-group mt-2">
                                <li class="list-group-item text-center">
                                    <label class="form-check-label pe-2" for="test">
                                        Visual Inspection Parçası mı?
                                    </label>
                                    <input class="form-check-input" type="checkbox" value="visual inspection" id="test"
                                        v-model.capitalize="sparePart.test">
                                </li>
                                <li class="list-group-item text-center" v-if="sparePart.test">
                                    <div class="alert alert-warning" role="alert" v-if="sparePart.viCode">
                                        {{ sparePart.viCode }} seçildi!
                                    </div>
                                    <span>Opsiyonel: </span>
                                    <div class="btn-group" role="group">
                                        <input type="radio" class="btn-check" name="viCode" id="122"
                                            @click="sparePart.viCode = 122">
                                        <label class="btn btn-outline-danger" for="122">122</label>
                                        <input type="radio" class="btn-check" name="viCode" id="141"
                                            @click="sparePart.viCode = 141">
                                        <label class="btn btn-outline-danger" for="141">141</label>
                                        <div class="btn btn-outline-warning ms-2 text-danger" @click="deleteViCode">
                                            <i class="fa fa-close"></i>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <ul class="list-group mt-2">
                                <li class="list-group-item text-center">
                                    <label class="form-check-label pe-2" for="isAvailable">
                                        Kopyala Yapıştır'da kullanılıyor mu?
                                    </label>
                                    <input class="form-check-input" id="isAvailable" @change="setAvailable" type="checkbox"
                                        v-model.capitalize="sparePart.isAvailable">
                                </li>
                            </ul>
                            <div class="d-flex justify-content-between">
                                <button type="button" class="btn btn-outline-secondary my-3 justify-content-center"
                                    @click="previous">
                                    <img class="btnNextImg" src="@/assets/backward.png">
                                </button>
                                <button type="submit" class="btn btn-success my-3 justify-content-center">Kaydet</button>
                                <button type="button" class="btn btn-outline-secondary my-3 justify-content-center"
                                    @click="next">
                                    <img class="btnNextImg" src="@/assets/forward.png">
                                </button>
                            </div>
                            <div class="text-center">
                                <a class="text-danger" @click.prevent="deletePart" v-if="id"
                                    style="cursor: pointer;">Parçayı silmek
                                    için tıklayın!</a>
                            </div>
                        </div>
                    </div>
                </form>
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
import { storage, db, sparePartsCollection } from "@/firebase";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { addDoc, updateDoc, doc, getDoc, deleteDoc } from "firebase/firestore";
import router from "@/router";


export default {
    data() {
        return {
            sparePart: {
                name: "",
                code: "",
                model: "",
                definition: "",
                explanation: "",
                isAvailable: false,
                imgUrl: "",
                test: "",
                viCode: ""
            },
            imageUrl: "",
            error: "",
            isAlert: false,
            id: "",
            docRef: "",
            idList: [],
            index: null
        }
    },
    // from views/SparePartsPage.vue
    props: ["definitions"],
    methods: {
        setImageUrl(event) {
            const inputTypes = ["image/png", "image/jpeg"]
            this.imageUrl = event.target.files[0];
            if (inputTypes.includes(this.imageUrl.type)) {
                let reader = new FileReader();
                reader.onload = (e) => {
                    this.sparePart.imgUrl = e.target.result;
                }
                reader.readAsDataURL(this.imageUrl);
            } else {
                return this.error = "Jpeg ya da Png formatında bir resim seçin!"
            }
        },
        uploadImage() {
            const path = `assets/${this.sparePart.code}.jpg`;
            const storageRef = ref(storage, path);
            uploadBytes(storageRef, this.imageUrl).then(snapshot => {
            })
            setTimeout(() => {
                getDownloadURL(ref(storage, path)).then(
                    (download_url) => { this.sparePart.imgUrl = download_url }
                );
            }, 2000);
        },
        deleteImage() {
            if (this.sparePart.imgUrl) {
                const storage = getStorage();
                // Create a reference to the file to delete
                const desertRef = ref(storage, `assets/${this.sparePart.code}.jpg`);
                // Delete the file
                deleteObject(desertRef).then(() => {
                    // File deleted successfully
                })
            }
        },
        resetPart() {
            this.sparePart = {
                name: "",
                code: "",
                model: "",
                definition: "",
                explanation: "",
                isAvailable: false,
                imgUrl: "",
                test: "",
                viCode: ""
            };
            this.imageUrl = "";
            this.$refs.file1.value = "";
        },
        alert() {
            this.isAlert = true;
            setTimeout(() => {
                this.isAlert = false;
                if (this.id) {
                    this.next()
                }
                else {
                    this.resetPart();
                }
            }, 1000);
        },
        savePart() {
            this.uploadImage();
            addDoc(sparePartsCollection, {
                ...this.sparePart
            })
            this.alert();
        },
        updatePart() {
            if (this.imageUrl) {
                this.uploadImage()
            }
            updateDoc(this.docRef, { ...this.sparePart })
            this.alert();
        },
        deletePart() {
            while (true) {
                let password = prompt("Parolayı girin:");
                if (password == null) break;
                else if (password == 1234) {
                    deleteDoc(this.docRef);
                    this.deleteImage();
                    setTimeout(() => {
                        router.push("/spare-parts-page/new-part")
                    }, 1000);
                    break;
                }
            }
        },
        setAvailable() {
            if (this.sparePart.isAvailable) {
                while (true) {
                    let password = prompt("Parolayı girin:");
                    if (password == null) {
                        this.sparePart.isAvailable = false;
                        break;
                    }
                    else if (password == 1234) {
                        break;
                    }
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
        copy() {
            let text = document.createElement("textarea");
            document.body.appendChild(text);
            text.value = this.sparePart.code + ".jpg";
            text.select();
            document.execCommand("copy");
            document.body.removeChild(text);
        },
        deleteViCode() {
            this.sparePart.viCode = '';
            this.sparePart.test = ''
        },
        next() {
            if (this.index < this.idList.length - 1) {
                this.index = this.index + 1
                localStorage.setItem("index", this.index)
                router.push(`/spare-parts-page/update/${this.idList[this.index]}`)
                setTimeout(() => {
                    location.reload();
                }, 50);
            }
        },
        previous() {
            if (this.index != 0) {
                this.index = this.index - 1
                localStorage.setItem("index", this.index)
                router.push(`/spare-parts-page/update/${this.idList[this.index]}`)
                setTimeout(() => {
                    location.reload();
                }, 50);
            }
        }
    },
    watch: {
        "sparePart.name"() { this.sparePart.name = this.capitalized(this.sparePart.name.toLocaleLowerCase("tr")) },
        "sparePart.code"() { this.sparePart.code = this.sparePart.code.toUpperCase() },
        "sparePart.explanation"() { this.sparePart.explanation = this.capitalized(this.sparePart.explanation.toLocaleLowerCase("tr")) },
    },
    created() {
        this.id = this.$route.params.partId;
        if (this.id) {
            this.docRef = doc(db, "spare-parts", this.id);
            getDoc(this.docRef).then(snapshot => {
                this.sparePart = snapshot.data()
            })
        }
        this.idList = localStorage.getItem("idList").split(",")
        this.index = Number(localStorage.getItem("index"))
        console.log(this.index)
    }
}
</script>
<style scoped>
form {
    background-color: #e9ecef;
}

img,
i.fa-wrench {
    width: 200px;
    height: 200px;
    display: block;
    margin: auto;
}

.btnNextImg {
    width: 50px;
    height: 24px;
}

i.fa-wrench {
    background-color: gray;
}

hr {
    margin: 10px 0;
}

.input-group,
ul {
    margin-top: 5px;
}
</style>