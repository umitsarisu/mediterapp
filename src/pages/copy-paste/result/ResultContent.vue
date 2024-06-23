<template>
    <div :class="content.divClass">
        <h6 name="resulth6" class="align-self-center" :class="content.h6Class">{{ content.h6Text }}</h6>
        <button type="button" name="resultButtons" class="btn btn-outline-light align-self-center" :class="content.buttonClass">Copy</button>
        <textarea name="resultTextareas" class="bg-light form-control text-uppercase align-self-center" :class="content.textareaClass" :id="content.id" rows="1" readonly>{{content.textareaText}}</textarea>
    </div>
</template>
<script>
export default {
    props: ["content"]
}
</script>
<style scoped>
h6 {
    width: 25%;
    line-height: 25px;
    font-size: 15px;
    text-shadow: 0.5px 0.5px 5px rgba(196, 115, 115, 0.774);
    margin: 0;
    float: left;
}
.resultLabel {
    line-height: 41px;
    font-size: 15px;
    font-weight: bold;
    color: rgb(53, 47, 47);
    text-shadow: 0.5px 0.5px 5px rgb(196 115 115 / 77%);
    margin-left: 10px;
}

div {
    width: 100%;
    min-height: 40px;
    display: flex;
    border-bottom: 1px solid black;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
    text-align: center;
}

div:last-child {
    border-bottom: 0;
    box-shadow: unset;
}

h6 {
    width: 25%;
    line-height: 25px;
    font-size: 15px;
    text-shadow: 0.5px 0.5px 5px rgba(196, 115, 115, 0.774);
    margin: 0;
    float: left;
}

button {
    width: 15%;
    height: 38px;
    margin: 1px 0;
    box-sizing: border-box;
    float: left;
}

textarea {
    width: 60%;
    min-height: 38px;
    margin: 1px 0;
    color: black;
    background-color: whitesmoke;
    box-sizing: border-box;
    float: left;
}

#tamirKodu,
#analizKodu,
#arastirmaKodu {
    width: 75%;
}

div.aaCodesDiv textarea {
    width: 358px;
}

div.heightRow textarea {
    min-height: 98px;
}
</style>