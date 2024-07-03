<template>
    <div>
        <form @submit.prevent="selectPart(part)" :class="part.activeClass" class="partStyle d-flex my-1"
            style="width: 100% !important;">
            <img class="col-3 col-lg-2" :src="part.imgUrl" :alt="part.alt">
            <div class="col-9 col-lg-10 d-flex flex-column justify-content-around">
                <div class="row text-start mt-1">
                    <span class="col-12 col-md-6 col-lg-3"><b>{{ part.name }}</b></span>
                    <span class="col-12 col-md-6 col-lg-4"><i>{{ part.code }}</i></span>
                    <span class="d-none d-lg-block col-lg-1">{{ part.viCode }}</span>
                    <span class="d-none d-lg-block col-lg-4 text-danger ">{{ "(" + part.explanation + ")" }}</span>
                </div>
                <hr class="d-none d-md-block">
                <div class="row text-start">
                    <span v-if="getActiveButton != 'visual'" class="d-none d-lg-block col-lg-2">Error Code</span>
                    <span v-if="getActiveButton != 'visual'" class="col-4 col-lg-2 d-flex justify-content-center"><input
                            id="errCode" type="text" class="form-control m-0" maxlength="4" placeholder="CODE"
                            style="width: 80px;" required></span>
                    <span v-if="isSerialNumber" class="d-none d-lg-block col-lg-2">Serial Number:</span>
                    <span v-if="isSerialNumber" class="col-6 col-lg-3"><input id="serialNumber" type="text"
                            class="form-control m-0" maxlength="12" placeholder="S/N" required></span>
                    <div class="col-3">
                        <button type="submit" class="btn btn-success">Ekle</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
    data() {
        return {
            isSerialNumber: false,
            errorCode: "",
            serialNumber: ""
        }
    },
    props: ["part"],
    computed: {
        ...mapGetters([
            "getActiveButton"
        ])
    },
    methods: {
        ...mapMutations(["setSelectedParts"]),
        selectPart(part) {
            if (this.errorCode == "") { this.errorCode = part.viCode; }
            part.errorCode = this.errorCode;
            part.serialNumber = this.serialNumber;
            if (part.activeClass == "bg-light") {
                part.activeClass = "bg-color";
                this.$store.commit("setSelectedParts", part)
            }
            else {
                part.activeClass = "bg-light";
                this.$store.commit("deletePart", part)
            }
        }
    }
}
</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
}

.partStyle {
    border: 1px solid saddlebrown;
    border-radius: 20px;
    box-sizing: border-box;
}

.row {
    margin: 0;
    padding: 0;
}

.partStyle img {
    max-width: 110px;
    height: 100px;
    border-radius: 20px 0 0 20px;
}

span {
    padding: 0 5px;
    border-right: 1px solid #aaa;
    box-sizing: border-box;
    align-self: center;
}

.bg-color {
    background-color: #fa3;
}

b {
    font-size: 17px;
}

span:last-child {
    border-right: 0;
}

input {
    height: 35px;
    margin: 0 10px;
    font-size: 18px;
    border-radius: 5px 5px;
    margin: 5px;
    padding: 4px;
    text-align: center;
    text-transform: uppercase;
}

hr {
    margin: 5px;
}

.serialComponent {
    position: absolute;
    left: -250px;
    right: 250px;
}
</style>