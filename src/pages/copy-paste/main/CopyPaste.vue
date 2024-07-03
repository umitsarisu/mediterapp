<template>
    <div>
        <LimitedContainerVue class="m-auto">
            <ModelVue class="rounded-top-3" :setModel="setModel" :setCustomerExperience="setCustomerExperience"></ModelVue>
            <!-- Modal Buttons ['Visual Inspection', 'Mekanizma', 'Diğer', 'Sağlam'] -->
            <div v-if="spareParts.length != 0"
                class="row m-0 py-2 justify-content-center align-content-center rounded-bottom-3" style="height: 8vh;
                background-color: #e9e8e8;">
                <div class="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" class="btn btn-outline-secondary text-black contentBgColor" data-bs-toggle="modal"
                        data-bs-target="#copyPasteModal" @click="filterByButtons('visual')">Visual
                        Inspection</button>
                    <button type="button" class="btn btn-outline-secondary text-black contentBgColor" data-bs-toggle="modal"
                        data-bs-target="#copyPasteModal" @click="filterByButtons('mechanism')">Mekanizma</button>
                    <button type="button" class="btn btn-outline-secondary text-black contentBgColor" data-bs-toggle="modal"
                        data-bs-target="#copyPasteModal" @click="filterByButtons('others')">Diğer</button>
                    <button type="button" class="btn btn-outline-secondary text-black contentBgColor">Cihaz
                        Sağlam</button>
                </div>
            </div>
        </LimitedContainerVue>
        <LoadingSpinner v-if="isLoading"></LoadingSpinner>
        <div v-if="spareParts.length != 0">
            <Modal>
                <ContextVue :spareParts="filteredByButtons"></ContextVue>
            </Modal>
            <!-- Pano -->
            <div class="row m-0 px-0 py-2 justify-content-center" style="height: 50vh;">
                <LimitedContainerVue>
                    <PanoVue style="height: 100%;">
                        <table class="mt-2 table table-bordered align-middle">
                            <thead>
                                <tr>
                                    <th>Part Name</th>
                                    <th>Part Number</th>
                                    <th>Error Code</th>
                                    <th>Defect</th>
                                    <th>Serial Number</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="part in getSelectedParts">
                                    <td>{{ part.name }}</td>
                                    <td>{{ part.code }}</td>
                                    <td>{{ part.viCode }}</td>
                                    <td></td>
                                    <td></td>
                                    <td class="text-center py-1"><input type="button"
                                            @click="$store.commit('deleteSelectedPart', part)"
                                            class="btn btn-danger btn-close">
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </PanoVue>
                </LimitedContainerVue>
            </div>
            <!-- Footer -->
            <div class="d-flex justify-content-center m-0 p-0">
                <LimitedContainerVue>
                    <div class="w-100" style="height: 10vh;">
                        <input type="button" id="resultButton" style="cursor: pointer;" @click="goToResult"
                            value="Sonuç Sayfasına Gitmek İçin Tıklayın ----->">
                    </div>
                </LimitedContainerVue>
            </div>
        </div>
    </div>
</template>
<script>
import LimitedContainerVue from '@/components/LimitedContainer.vue';
import ModelVue from './Model.vue';
import Modal from '@/components/Modal.vue';
import ContextVue from '@/pages/copy-paste/main/modal-contents/Context.vue';
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import { sparePartsCollection } from '@/firebase';
import { getDocs } from 'firebase/firestore'
import { mapMutations } from 'vuex';
export default {
    data() {
        return {
            spareParts: [],
            filteredByModel: [],
            filteredByButtons: [],
            model: {},
            customerExperience: "",
            activeButton: "",
            isLoading: true
        }
    },
    components: {
        LimitedContainerVue,
        ModelVue,
        Modal,
        ContextVue,
        LoadingSpinner
    },
    computed: {
    },
    methods: {
        ...mapMutations(["setActiveButton", "setSpareParts"]),
        goToResult() {
            this.$router.push('/copy-paste-page/result-page')
        },
        setCustomerExperience(payload) {
            this.customerExperience = payload;
        },
        setModel(payload) {
            this.model = payload;
        },
        filterByModel() {
            this.filteredByModel = this.spareParts.filter(item => {
                if (item.model == this.model.name) return item;
                else if (item.model == "Ortak") return item;
            })
        },
        filterByButtons(button) {
            if (button == "visual") {
                this.filteredByButtons = this.filteredByModel.filter(item => {
                    if (item.test == true) return item;
                })
            }
            else if (button == "mechanism") {
                this.filteredByButtons = this.filteredByModel.filter(item => {
                    if (item.definition == "Mekanizma") return item;
                })
            }
            else if (button == "others") {
                this.filteredByButtons = this.filteredByModel.filter(item => {
                    if (item.test != true && item.definition != "Mekanizma") return item;
                })
            }
            this.$store.commit("setActiveButton", button)
        },
    },
    watch: {
        model() {
            this.filterByModel()
        }
    },
    mounted() {
        if (this.$store.state.spareParts.length == 0) {
            getDocs(sparePartsCollection)
                .then(snapshot => {
                    snapshot.docs.forEach((doc, i) => {
                        //veritabanındaki referans veriyi atlamak için index 1 den başlıyor
                        if (doc.data().isAvailable) {
                            this.spareParts.push({ ...doc.data(), id: doc.id, activeClass: "bg-light" })
                        }
                    })
                })
                .then(() => {
                    this.$store.commit("setSpareParts", this.spareParts)
                    this.filterByModel();
                    this.isLoading = false;
                })
        }
        else {
            this.spareParts = this.$store.state.spareParts;
            this.filterByModel();
            this.isLoading = false;
        }
    }
}
</script>
<style scoped>
/* Modal Buttons hover color */
.btn-outline-secondary:hover {
    background-color: rgb(229, 132, 41);
}

.lr-border {
    border-left: 1px solid rgb(112, 112, 112);
    border-right: 1px solid rgb(112, 112, 112);
    border-radius: 10px;
    box-sizing: border-box;
}

#resultButton {
    width: 100%;
    height: 40px;
    margin: 10px 0;
    padding: 0;
    border: 0;
    background-color: tomato;
    color: white;
    text-align: center;
}
</style>