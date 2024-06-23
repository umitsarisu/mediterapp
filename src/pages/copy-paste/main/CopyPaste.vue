<template>
    <div>
        <LimitedContainerVue class="m-auto">
            <ModelVue class="rounded-top-3"></ModelVue>
            <!-- Visual Inspection and Other Parts Buttons -->
            <div class="row m-0 py-2 justify-content-center align-content-center rounded-bottom-3" style="height: 8vh;
                background-color: #e9e8e8;">
                <div class="btn-group" role="group">
                    <button type="button" data-bs-toggle="modal" data-bs-target="#copyPasteModal"
                        class="btn btn-outline-secondary text-black contentBgColor">Yedek Parçalar</button>
                    <button type="button" class="btn btn-outline-secondary text-black contentBgColor">Cihaz
                        Sağlam</button>
                </div>
            </div>
        </LimitedContainerVue>
        <Modal>
            <ContextVue></ContextVue>
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
                                        @click="$store.commit('deleteSelectedPart', part)" class="btn btn-danger btn-close">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </PanoVue>
            </LimitedContainerVue>
        </div>
        <!-- Footer -->
        <div class="row position-fixed w-100 bottom-0 px-3">
            <div class="col-12 col-md-8 m-auto p-0" style="height: 10vh;">
                <input type="button" id="resultButton" style="cursor: pointer;" @click="goToResult"
                    value="Sonuç Sayfasına Gitmek İçin Tıklayın ----->">
            </div>
        </div>
    </div>
</template>
<script>
import LimitedContainerVue from '@/components/LimitedContainer.vue';
import ModelVue from './Model.vue';
import Modal from '@/components/Modal.vue';
import ContextVue from '@/pages/copy-paste/main/modal-contents/Context.vue';
// import { mapGetters, mapMutations } from 'vuex';

export default {
    data() {
        return {
            sparePartsList: [],
            spareParts: [],
        }
    },
    components: {
        LimitedContainerVue,
        ModelVue,
        Modal,
        ContextVue
    },
    computed: {
        // ...mapGetters([
        //     "getSelectedParts",
        // ]),
    },
    methods: {
        // ...mapMutations([
        //     "deleteSelectedPart",
        //     "setActiveModalComponent"
        // ]),
        // setActiveModalComponent(component) {
        //     this.$store.commit("setActiveModalComponent", component)
        // },
        // allert() {
        //     let numb = Math.floor(Math.random() * 4)
        //     switch (numb) {
        //         case 0:
        //             alert("Halıya basma!")
        //             break;
        //         case 1:
        //             alert("Oyynamaa!")
        //             break;
        //         case 2:
        //             alert("Bana Hareket Yok Ulan!")
        //             break;
        //         case 3:
        //             alert("Butonları Kurcalama!")
        //             break;
        //         default:
        //             break;
        //     }
        // }
        goToResult() {
            this.$router.push('/copy-paste-page/result-page')
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