<template>
    <form id="form1" :class="deviceİnfo.class" class="p-0">
        <h3>Cihaz Modelini Seçin</h3>
        <div class="d-flex flex-wrap justify-content-center">
            <div v-for="model in models">
                <!-- Cihaz Modelleri -->
                <label :for="model.name" :class="model.class" class="model">
                    <input type="radio" :id="model.name" :value="model" name="model" v-model="deviceİnfo" required>
                    <!-- @click="$store.commit('setSelectedModel', model)" required> -->
                    <strong>{{ model.name }}</strong>
                </label>
            </div>
        </div>
        <div class="d-flex flex-wrap justify-content-center">
            <!-- Müşteri Şikayeti -->
            <label for="customerExperience1" class="d-flex">
                <span>Müşteri Şikayeti:</span>
                <input type="text" class="form-control me-3" id="customerExperience1" placeholder="Hata" maxlength="4"
                    autocapitalize="characters" required v-model="deviceİnfo.code">
                <!-- autocapitalize="characters" @blur="$store.commit('setCustomerExperience', $event.target.value)" -->
            </label>
            <!-- Meditera Site Link-->
            <!-- <a href="http://www.meditera.com.tr" class="d-none d-sm-block" target="_blank"><img
                    src="../../../assets/logo.png" alt="mediteralogo"></a> -->
        </div>
    </form>
</template>
<script>
// import { mapMutations } from 'vuex';

export default {
    data() {
        return {
            models: [
                {
                    name: "Plum A TR",
                    class: "plumTrColor",
                    type: "Plum A"
                },
                {
                    name: "Plum A EN",
                    class: "plumEnColor",
                    type: "Plum A"
                },
                {
                    name: "Plum 360",
                    class: "plum360Color",
                    type: "Plum 360"
                }
            ],
            deviceİnfo: {
                name: "",
                class: "plumEnColor",
                type: "",
                code: ""
            },
        }
    },
    methods: {
        // ...mapMutations([
        //     "setCustomerExperience"
        // ])
    },
    watch: {
        selectedModel() {
            console.log(this.selectedModel)
        }
    }
}
</script>
<style scoped>
#form1 {
    box-sizing: content-box;
}
#form1 h3 {
    font-size: 20px;
    font-weight: bold;
    line-height: 30px;
    text-align: center;
    margin: 0;
}

#form1 .model {
    width: 10rem;
    line-height: 2rem;
    padding-left: 1rem;
    border-radius: 20px;
    border-bottom: 1px solid white;
    border-right: 1px solid white;
    box-sizing: border-box;
    cursor: pointer;
}

#form1 .model strong {
    width: 80px;
    line-height: 40px;
    margin-left: 0.5rem;
    text-shadow: 1px 1px 5px white;
}

#form1 input[type="text"] {
    width: 60px;
    font-size: 18px;
    border-radius: 5px 5px;
    margin: 5px;
    padding: 4px;
    text-align: center;
    text-transform: uppercase;
}

#form1 label span {
    line-height: 50px;
    font-size: 18px;
}

#form1 img[alt="mediteralogo"] {
    width: 200px;
    height: 48px;
    border-radius: 5px;
    padding: 4px;
    margin-top: 1px;
    background-color: whitesmoke;
}

.plumTrColor {
    background: linear-gradient(to bottom, #7abcff 0%, #4096ee 17%, #4096ee 17%, #4096ee 31%, #4096ee 44%, #4096ee 53%, #60abf8 76%, #4096ee 94%);
}

.plumEnColor {
    background: linear-gradient(to bottom, rgba(59, 103, 158, 1) 0%, rgba(43, 136, 217, 1) 15%, rgba(0, 174, 255, 1) 53%, rgba(43, 136, 217, 1) 86%, rgba(43, 136, 217, 1) 88%, rgba(43, 136, 217, 1) 92%, rgba(43, 136, 217, 1) 100%);
}

.plum360Color {
    background: linear-gradient(to bottom, rgba(147, 83, 163, 1) 0%, rgba(173, 109, 214, 1) 20%, rgba(173, 109, 214, 1) 29%, rgba(147, 83, 163, 1) 52%, rgba(173, 109, 214, 1) 75%, rgba(173, 109, 214, 1) 83%, rgba(147, 83, 163, 1) 100%)
}
</style>