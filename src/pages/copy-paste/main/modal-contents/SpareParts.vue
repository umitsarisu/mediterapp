<template>
    <div>
        <div :class="part.activeClass" @click="selectPart(part)" class="partStyle btn d-flex" style="width: 100% !important;">
            <img class="col-3 col-lg-2" :src="part.imgUrl" :alt="part.alt">
            <div class="col-9 col-lg-10">
                <div class="row text-start mt-1">
                    <span class="col-12 col-md-6 col-lg-3"><b>{{ part.name }}</b></span>
                    <span class="col-12 col-md-6 col-lg-4"><i>{{ part.code }}</i></span>
                    <span class="d-none d-lg-block col-lg-1">{{ part.viCode }}</span>
                    <span class="d-none d-lg-block col-lg-4 text-danger ">{{ "(" + part.explanation + ")" }}</span>
                </div>
                <hr class="d-none d-md-block">
                <div class="row text-start">
                    <span class="d-none d-lg-block col-lg-2">Error Code</span>
                    <span class="col-4 col-lg-2"><input id="errCode" type="text" class="form-control m-0" maxlength="4"
                            placeholder="CODE"></span>
                    <span v-if="part.isSerialNumber" class="d-none d-lg-block col-lg-2">Serial Number:</span>
                    <span v-if="part.isSerialNumber" class="col-6 col-lg-3"><input id="serialNumber" type="text"
                            class="form-control m-0" maxlength="12" placeholder="S/N"></span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            serialVisible: false
        }
    },
    props: ["part"],
    methods: {
        selectPart(part) {
            if (part.activeClass == "bg-light") {
                part.activeClass = "bg-success";
            }
            else {
                part.activeClass = "bg-light";
            }
            this.serialVisible = true
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