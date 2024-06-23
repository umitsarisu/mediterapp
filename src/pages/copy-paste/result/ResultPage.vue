<template>
    <div class="row m-0 p-0 justify-content-center lr-white-border">

        <section class="col-12 p-1 border-lr vh-93">
            <ResultContentVue v-for="content in resultContents" :key="content" :content="content"></ResultContentVue>
            <div class="sonucContent" id="randomdate">
                <h6 name="resulth6">Çağrı Açılış Tarihini Girin!</h6>
                <form action="javascript: dateFunc()" style="display: flex;">
                    <input type="date" id="date1" class="form-control p-0"
                        style="float: left;width: 130px; align-self: center;" value="2022-01-02" min="2021-01-02"
                        max="2050-12-31" required>
                    <input type="submit" name="resultButtons" value="Çalıştır">
                </form>
            </div>
            <div class="sonucContent flex">
                <h6 name="resulth6">Pompa Test Bilgileri</h6>
                <div id="pumpTests" class="testsDiv"></div>
                <h6 name="resulth6">Mekanizma Test Bilgileri</h6>
                <div id="mechanismTests" class="testsDiv"></div>
            </div>
            <div class="sonucContent">
                <h6 name="resulth6">Random Value</h6>
                <div class="rvg float-left"></div>
                <h6 name="resulth6">Electric Safety Analyser</h6>
                <div class="egt float-left"></div>
            </div>
            <div class="sonucContent heightRow" id="div-degisen-parca">
                <h6 name="resulth6">Değişen Parça Açıklaması</h6>
                <button type="button" name="resultButtons">Copy</button>
                <textarea name="resultTextareas" id="degisenParca" rows="4" readonly></textarea>
            </div>
            <div class="sonucContent aaCodesDiv">
                <h6 name="resulth6">Analiz Kodları</h6>
                <textarea name="resultTextareas" class="sonucSectionColor" id="analizKodu" rows="1" readonly></textarea>
            </div>
            <div class="sonucContent aaCodesDiv">
                <h6 name="resulth6">Araştırma Kodları</h6>
                <textarea name="resultTextareas" class="sonucSectionColor" id="arastirmaKodu" rows="1"
                    readonly></textarea>
            </div>
            <div class="sonucContent aaCodesDiv">
                <h6 name="resulth6">Şikayet Onaylandı</h6>
                <label for="resultYes" class="resultLabel">
                    <input type="radio" id="resultYes" name="resultRadio"> EVET
                </label>
                <label for="resultNo" class="resultLabel">
                    <input type="radio" id="resultNo" name="resultRadio"> HAYIR
                </label>
                <label for="resultDifferent" class="resultLabel">
                    <input type="radio" id="resultDifferent" name="resultRadio"> FARKLI
                </label>
            </div>
        </section>
    </div>
</template>
<script>
import ResultContentVue from './ResultContent.vue';
export default {
    data() {
        return {
            resultContents: [
                {
                    divClass: "",
                    h6Text: "Açıklamalar",
                    textareaClass: "",
                    textareaText: "N/A",
                    id: "description"
                },
                {
                    divClass: "",
                    h6Text: "Ek Bilgi",
                    textareaClass: "",
                    textareaText: "N/A",
                    id: "software"
                },
                {
                    divClass: "aaCodesDiv",
                    h6Text: "Tamir Kodları",
                    textareaClass: "sonucSectionColor",
                    textareaText: "N/A",
                    id: "tamirKodu"
                },
                {
                    divClass: "",
                    h6Text: "Hata Geçmiş Kayıtları",
                    textareaClass: "",
                    textareaText: "N/A",
                    id: "errorHistoryLogs"
                },
                {
                    divClass: "",
                    h6Text: "Cihazın Durumu",
                    textareaClass: "",
                    textareaText: "N/A",
                    id: "cihazinDurumu"
                },
                {
                    divClass: "",
                    h6Text: "16 Run In Test Sonuçları",
                    textareaClass: "",
                    textareaText: "N/A",
                    id: "runInTestResult"
                },
                {
                    divClass: "",
                    h6Name: "align-self-center",
                    h6Text: "Çağrı Açılış Tarihini Girin!",

                    textareaClass: " ",
                    textareaText: "N/A",
                    id: ""
                },
                {
                    divClass: "",
                    h6Text: "Geçmiş Tarih Aralığı",
                    textareaClass: "",
                    textareaText: "N/A",
                    id: "dateResult"
                },
                {
                    divClass: "",
                    h6Text: "Bulgular",
                    textareaClass: "",
                    textareaText: "N/A",
                    id: "bulgular"
                },
                {
                    divClass: "heightRow",
                    h6Text: "Değişen Parça Açıklaması",
                    textareaClass: "",
                    textareaText: "N/A",
                    id: "degisenParca"
                },
                {
                    divClass: "aaCodesDiv",
                    h6Text: "Analiz Kodları",
                    textareaClass: "sonucSectionColor",
                    textareaText: "N/A",
                    id: "analizKodu"
                },
                {
                    divClass: "aaCodesDiv",
                    h6Text: "Araştırma Kodları",
                    textareaClass: "sonucSectionColor",
                    textareaText: "N/A",
                    id: "arastirmaKodu"
                },
                {
                    divClass: "heightRow",
                    h6Text: "Yorum",
                    textareaClass: "",
                    textareaText: "N/A",
                    id: "yorum"
                },
                {
                    divClass: "heightRow",
                    h6Text: "Ek Yorum",
                    textareaClass: "",
                    textareaText: "N/A",
                    id: "ekYorum"
                },
                {
                    divClass: "heightRow",
                    h6Text: "Temel Sebep",
                    textareaClass: "",
                    textareaText: "N/A",
                    id: "probableCause"
                },
            ]
        }
    },
    components: {
        ResultContentVue
    },
}
</script>
<style scoped>
.vh-93 {
    height: 93vh;
    overflow-y: auto;
}
</style>