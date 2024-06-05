<template>
    <div class="vh-100 d-flex justify-content-center">
        <div class="shadow1 align-self-center p-0 box">
            <div class="d-flex flex-column justify-content-around">
                <header class="border-bottom">
                    <h5 class="m-0">Büyüteç</h5>
                </header>
                <div class="form-group p-3 border-bottom">
                    <textarea class="form-control" v-model="text" cols="30" rows="9"
                        placeholder="Buraya yazılan yazıları büyük harflere çevirir!"></textarea>
                </div>
                <div class="d-flex justify-content-around p-2">
                    <button type="button" class="btn btn-primary" title="Yazıların ilk harflerini büyütür"
                        @click="upgradeText('capitalize')">
                        <i class="fas fa-text-height"></i>
                        Başı Büyük
                    </button>
                    <button type="button" class="btn btn-primary" title="Yazıları küçük harflere çevirir"
                        @click="upgradeText('toLowerCase')">
                        <i class="fas fa-microscope"></i>
                        Mikroskop
                    </button>
                    <button type="button" class="btn btn-primary" title="Yazıları büyük harflere çevirir"
                        @click="upgradeText('toUpperCase')">
                        <i class="fa fa-search" aria-hidden="true"></i>
                        Büyüteç
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            text: ""
        }
    },
    methods: {
        upgradeText(method) {
            if (method == "toLowerCase") this.text = this.text.toLocaleLowerCase();
            else if (method == "toUpperCase") this.text = this.text.toLocaleUpperCase();
            else if (method == "capitalize" && this.text != "") {
                this.text = this.text.toLocaleLowerCase().trim()
                let textArr = this.text.split(" ");
                let fixedArr = textArr.map(element => {
                    return element.charAt(0).toLocaleUpperCase("tr") + element.slice(1);
                });
                this.text = fixedArr.join(" ");
            }
        }
    }
}
</script>
<style scoped>
header {
    line-height: 30px;
    padding: 16px;
}

.border-bottom {
    border-bottom: 1px solid #dee2e6;
}

.box {
    width: 500px;
    height: 370px;
    border-radius: 5px;
}

.shadow1 {
    box-shadow: 0px 1px 15px 0px #0000008e;
}

textarea {
    max-width: 490px;
    min-height: 200px;
}
</style>