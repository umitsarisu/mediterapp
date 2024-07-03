<template>
    <form id="form1" @submit.prevent :class="selectedModel.color" class="p-0">
        <h3>Cihaz Modelini Seçin</h3>
        <!-- Cihaz Modelleri -->
        <div class="d-flex flex-wrap justify-content-center">
            <div v-for="model in models">
                <div class="form-check p-0 m-0 mx-2">
                    <label class="form-check-label model p-0 m-0" :class="model.color" :for="model.name">
                        <input class="form-check-input ms-3" :value="model" v-model="selectedModel" type="radio"
                            :id="model.name" required @click="setModel(model)">
                        <strong>{{ model.name }}</strong>
                    </label>
                </div>
            </div>
        </div>
        <!-- Müşteri Şikayeti -->
        <div class="d-flex flex-wrap justify-content-center">
            <label for="customerExperience" class="d-flex">
                <span class="me-1">Müşteri Şikayeti:</span>
                <input class="form-control me-2" id="customerExperience" placeholder="HATA" maxlength="4" required
                    v-model="customerExperience" @blur="setCustomerExperience(customerExperience)">
            </label>
            <!-- Meditera Site Link-->
            <img class="d-none d-sm-block" src="../../../assets/logo.png" alt="mediteralogo">
        </div>
    </form>
</template>
<script>

export default {
    data() {
        return {
            models: [
                {
                    name: "Plum A",
                    color: "plumColor",
                },
                {
                    name: "Plum 360",
                    color: "plum360Color",
                }
            ],
            selectedModel: {
                name: "Plum A",
                color: "plumColor",
            },
            customerExperience: ""
        }
    },
    props: ["setCustomerExperience", "setModel"],
    watch: {
        customerExperience() {
            let contentArr = this.customerExperience.split(" ");
            let fixedArr = contentArr.map(element => {
                return element.charAt(0).toLocaleUpperCase("tr") + element.slice(1);
            });
            this.customerExperience = fixedArr.join(" ");
        }
    },
    created(){
        this.setModel(this.selectedModel)
    }
}
</script>
<style scoped>
h3 {
    font-size: 20px;
    font-weight: bold;
    line-height: 30px;
    text-align: center;
    margin: 0;
}

.model {
    width: 10rem;
    height: 44px;
    padding-left: 16px;
    border-radius: 20px;
    border-bottom: 1px solid white;
    border-right: 1px solid white;
    box-sizing: border-box;
    cursor: pointer;
}

input[type="radio"] {
    width: 20px;
    height: 20px;
    margin: 12px 0;
}

.model strong {
    line-height: 44px;
    font-size: 1.1rem;
    margin-left: 0.5rem;
    text-shadow: 1px 1px 5px white;
}

#customerExperience {
    width: 80px;
    height: 40px;
    font-size: 18px;
    border-radius: 5px 5px;
    margin: 5px;
    padding: 4px;
    text-align: center;
}

label span {
    line-height: 50px;
    font-size: 20px;
}

img[alt="mediteralogo"] {
    width: 200px;
    height: 46px;
    border-radius: 5px;
    padding: 4px;
    margin: 2px 0;
    background-color: whitesmoke;
}

.plumColor {
    background: linear-gradient(to bottom, rgba(59, 103, 158, 1) 0%, rgba(43, 136, 217, 1) 15%, rgba(0, 174, 255, 1) 53%, rgba(43, 136, 217, 1) 86%, rgba(43, 136, 217, 1) 88%, rgba(43, 136, 217, 1) 92%, rgba(43, 136, 217, 1) 100%);
}

.plum360Color {
    background: linear-gradient(to bottom, rgba(147, 83, 163, 1) 0%, rgba(173, 109, 214, 1) 20%, rgba(173, 109, 214, 1) 29%, rgba(147, 83, 163, 1) 52%, rgba(173, 109, 214, 1) 75%, rgba(173, 109, 214, 1) 83%, rgba(147, 83, 163, 1) 100%)
}

/* .plumTrColor {
    background: linear-gradient(to bottom, #7abcff 0%, #4096ee 17%, #4096ee 17%, #4096ee 31%, #4096ee 44%, #4096ee 53%, #60abf8 76%, #4096ee 94%);
} */
</style>