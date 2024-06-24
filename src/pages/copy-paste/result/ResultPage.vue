<template>
    <div class="mb-5">
        <limited-container class="m-auto">
            <ResultContentVue :key="content" :content="explanation"></ResultContentVue>
            <ResultContentVue :key="content" :content="extraInformation"></ResultContentVue>
            <ResultContentVue :key="content" :content="errorRecords"></ResultContentVue>
            <ResultContentVue :key="content" :content="statusOfDevice"></ResultContentVue>
            <ResultContentVue :key="content" :content="runInTest"></ResultContentVue>
            <ResultContentVue #content>
                <div class="d-flex borderAround py-1">
                    <h6 class="align-self-center text-start m-0 ms-3" style="width: 25%;">Çağrı Açılış Tarihini Girin!</h6>
                    <form action="javascript: dateFunc()" style="display: flex;">
                        <input type="date" id="date1" class="form-control ms-5" style="width: 140px; align-self: center;
                        height: 36px; background-color: #ddd;" value="2022-01-02" min="2021-01-02" max="2050-12-31"
                            required>
                        <button type="submit" class="btn btn-outline-info align-self-center ms-2">Çalıştır</button>
                    </form>
                </div>
            </ResultContentVue>
            <ResultContentVue :key="content" :content="dateRecords"></ResultContentVue>
            <ResultContentVue :key="content" :content="findings"></ResultContentVue>
            <ResultContentVue #content>
                <div class="row m-0 p-0 borderAround">
                    <h6 class="col-2 align-self-center m-0 ps-3">Pompa Test Bilgileri</h6>
                    <div class="col-4 testsDiv" style="background-color: #ddd"></div>
                    <h6 class="col-2 align-self-center m-0 ps-3">Mekanizma Test Bilgileri</h6>
                    <div class="col-4 testsDiv" style="background-color: #ddd"></div>
                </div>
            </ResultContentVue>
            <ResultContentVue #content>
                <div class="row m-0 p-0 borderAround">
                    <h6 class="col-3 align-self-center m-0 ps-3">Random Value</h6>
                    <div class="rvg col-2"></div>
                    <h6 class="col-3 align-self-center m-0 ps-3">Electric Safety Analyser</h6>
                    <div class="rvg col-2"></div>
                </div>
            </ResultContentVue>
            <ResultContentVue #content>
                <div class="borderAround d-flex">
                    <h6 style="width: 25%;" class="m-0 ps-3 align-self-center">Analiz Kodları</h6>
                    <textarea style="width: 75%; background-color: #ccc !important;" class="form-control active" rows="1"
                        readonly></textarea>
                </div>
            </ResultContentVue>
            <ResultContentVue #content>
                <div class="borderAround d-flex">
                    <h6 style="width: 25%;" class="m-0 ps-3 align-self-center">Araştırma Kodları</h6>
                    <textarea style="width: 75%; background-color: #ccc !important;" class="form-control active" rows="1"
                        readonly></textarea>
                </div>
            </ResultContentVue>
            <ResultContentVue #content>
                <div class="borderAround d-flex">
                    <h6 class="align-self-center w-25 m-0 ps-3" style="line-height: 40px;">Şikayet Onaylandı</h6>
                    <div class="align-content-center m-0">
                        <div class="form-check form-check-inline">
                            <label class="form-check-label resultLabel" for="inlineRadio1">EVET</label>
                            <input class="form-check-input" name="resultRadio" type="radio" id="inlineRadio1" disabled>
                        </div>
                        <div class="form-check form-check-inline">
                            <label class="form-check-label resultLabel" for="inlineRadio2">HAYIR</label>
                            <input class="form-check-input" name="resultRadio" type="radio" id="inlineRadio2" disabled>
                        </div>
                        <div class="form-check form-check-inline">
                            <label class="form-check-label resultLabel" for="inlineCheckbox3">FARKLI</label>
                            <input class="form-check-input" name="resultRadio" type="radio" id="inlineCheckbox3" disabled>
                        </div>
                    </div>
                </div>
            </ResultContentVue>
            <ResultContentVue :key="content" :content="comment"></ResultContentVue>
            <ResultContentVue :key="content" :content="moreComment"></ResultContentVue>
            <ResultContentVue :key="content" :content="probablyCause"></ResultContentVue>
        </limited-container>
    </div>
</template>
<script>
import ResultContentVue from './ResultContent.vue';
import LimitedContainer from '@/components/LimitedContainer.vue';
export default {
    data() {
        return {
            explanation: {
                header: "Açıklamalar",
                text: "N/A"
            },
            extraInformation: {
                header: "Ek Bilgi",
                text: "N/A"
            },
            repairCodes: {
                header: "Tamir Kodları",
                text: "N/A"
            },
            errorRecords: {
                header: "Hata Geçmiş Kayıtları",
                text: "N/A"
            },
            statusOfDevice: {
                header: "Cihazın Durumu",
                text: "N/A"
            },
            runInTest: {
                header: "16 Run In Test Sonuçları",
                text: "N/A"
            },
            dateRecords: {
                header: "Geçmiş Tarih Aralığı",
                text: "N/A"
            },
            findings: {
                header: "Bulgular",
                text: "N/A"
            },
            changedPars: {
                header: "Değişen Parça Açıklaması",
                text: "N/A"
            },
            comment: {
                header: "Yorum",
                text: "N/A"
            },
            moreComment: {
                header: "Ek Yorum",
                text: "N/A"
            },
            probablyCause: {
                header: "Temel Sebep",
                text: "N/A"
            },
        }
    },
    components: {
        ResultContentVue,
        LimitedContainer
    },
}
</script>
<style scoped>
.borderAround {
    border-bottom: 1px solid black;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
}

h6 {
    font-size: 15px;
    text-shadow: 0.5px 0.5px 5px rgba(196, 115, 115, 0.774);
}

button {
    height: 38px;
    margin: 1px 0;
}

.testsDiv {
    min-height: 45px;
    padding: 3px 0;
    border: 1px black solid;
    border-radius: 5px;
    color: black;
    box-sizing: border-box;
    text-align: left;
    font-size: 10px;
    font-weight: bold;
}

.rvg {
    width: 100px;
    height: 50px;
    padding: 5px;
    border: 1px solid black;
    text-align: center;
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.active {
    background-color: rgb(170, 170, 170) !important;
    border: rgba(196, 115, 115, 0.774) 1px solid;
}

input[type="radio"] {
    width: 20px;
    height: 20px;
    margin: 10px 0;
}

.resultLabel {
    line-height: 40px;
    font-size: 15px;
    font-weight: bold;
    color: rgb(53, 47, 47);
    text-shadow: 0.5px 0.5px 5px rgb(196 115 115 / 77%);
    margin-left: 10px;
}
</style>