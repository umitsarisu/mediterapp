<template>
    <div class="vh-100 d-flex justify-content-center">
        <div class="shadow1 align-self-center p-0 box">
            <div class="d-flex flex-column justify-content-around">
                <header class="border-bottom">
                    <h5 class="m-0">Rastgele Değer Üretici</h5>
                </header>
                <div class="d-flex justify-content-around align-items-center p-3 border-bottom">
                    <div class="rvg-box p-3">
                        <button type="button" class="btn btn1 btn-outline-dark align-self-center" title="0 PSI değeri"
                            @click="copy(rvgObj.psi1)">
                            {{ rvgObj.psi1 }}
                        </button>
                        <button type="button" class="btn btn1 btn-outline-dark align-self-center mt-3" title="10 PSI değeri"
                            @click="copy(rvgObj.psi2)">
                            {{ rvgObj.psi2 }}
                        </button>
                    </div>
                    <div class="rvg-box">
                        <h5>PVT</h5>
                        <hr>
                        <p>{{ rvgObj.egt1 }}</p>
                        <p>{{ rvgObj.egt2 }}</p>
                        <p>{{ rvgObj.egt3 }}</p>
                        <p>{{ rvgObj.egt4 }}</p>
                        <p>{{ rvgObj.egt5 }}</p>
                    </div>
                </div>
                <div class="d-flex justify-content-end p-2 pe-4">
                    <button class="btn btn-primary btn-lg" @click="refresh()">Yenile</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Random from "../components/random"
export default {
    data() {
        return {
            rvgObj: {}
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
        },
        refresh() {
            this.rvgObj = Random.rvg();
        },
        copy(value) {
            let text = document.createElement("textarea");
            document.body.appendChild(text);
            text.value = value;
            text.select();
            document.execCommand("copy");
            document.body.removeChild(text);
        }
    },
    created() {
        this.rvgObj = Random.rvg();
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
    border-radius: 5px;
}

.rvg-box {
    width: 200px;
    padding: 10px;
    text-align: center;
    background-color: whitesmoke;
    border: 1px solid gray;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
}

.shadow1 {
    box-shadow: 0px 1px 15px 0px #0000008e;
}

.btn1 {
    border: 1px solid gray;
    width: 80px;
    line-height: 30px;
    background-color: white;
    font-size: 18px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

p {
    margin: 5px 0;
    line-height: 30px;
    font-size: 18px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: bold;
}

hr {
    margin: 5px 0;
}
</style>